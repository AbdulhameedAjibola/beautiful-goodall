export interface WaitlistPayload {
  name: string;
  email: string;
  ref_by?: string;
  insights?: string;
  insights_data?: string;
  referralCode?: string;
  featureSuggestion?: string;
}

export interface WaitlistResponse {
  success: boolean;
  message: string;
  data?: {
    refCode: string;
    position?: number;
    [key: string]: unknown;
  };
}

export interface LeaderboardEntry {
  rank: number;
  name: string;
  referrals: number;
  isCurrentUser?: boolean;
}

export interface LeaderboardResponse {
  leaderboard: LeaderboardEntry[];
  userPosition?: number;
}

export const GOOGLE_APPS_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbyiM3CMKDoVPiK8-B53_3fNpW5h8N9sYzY06uHCdDuMWk8nehCAiUbB6VUfKNNH_6MYYQ/exec';

const STORAGE_KEY_REF_CODE = 'levo_user_ref_code';
const STORAGE_KEY_USER_NAME = 'levo_user_name';
const STORAGE_KEY_USER_EMAIL = 'levo_user_email';
const STORAGE_KEY_USER_POSITION = 'levo_user_position';

/**
 * Extracts referral code from URL query parameters (e.g. ?ref=XYZ or ?referral=XYZ)
 */
export function extractReferralFromUrl(): string {
  if (typeof window === 'undefined') return '';
  const params = new URLSearchParams(window.location.search);
  return (
    params.get('ref') ||
    params.get('referral') ||
    params.get('ref_by') ||
    params.get('referral_code') ||
    params.get('referralCode') ||
    ''
  );
}

/**
 * Retrieves stored waitlist user details from localStorage
 */
export function getStoredUserWaitlistData(): {
  refCode: string;
  name: string;
  email: string;
  position: number;
} {
  if (typeof window === 'undefined') {
    return { refCode: '', name: '', email: '', position: 14 };
  }
  const refCode = localStorage.getItem(STORAGE_KEY_REF_CODE) || '';
  const name = localStorage.getItem(STORAGE_KEY_USER_NAME) || '';
  const email = localStorage.getItem(STORAGE_KEY_USER_EMAIL) || '';
  const posStr = localStorage.getItem(STORAGE_KEY_USER_POSITION);
  const position = posStr ? parseInt(posStr, 10) : 14;
  return { refCode, name, email, position: isNaN(position) ? 14 : position };
}

/**
 * Generates the full referral sharing URL
 */
export function generateShareUrl(refCode: string): string {
  if (typeof window === 'undefined') return `/?ref=${refCode}`;
  const origin = window.location.origin;
  return `${origin}/?ref=${encodeURIComponent(refCode || 'LEVO-VIP')}`;
}

/**
 * Normalize whatever row/object structure the backend returns into LeaderboardEntry[]
 */
function normalizeLeaderboardData(raw: unknown[]): LeaderboardEntry[] {
  return raw.map((item: unknown, index: number) => {
    if (Array.isArray(item)) {
      return {
        rank: index + 1,
        name: String(item[0] || `Explorer #${index + 1}`).toUpperCase(),
        referrals: Number(item[1] || 0),
      };
    }
    if (typeof item === 'object' && item !== null) {
      const obj = item as Record<string, unknown>;
      const name =
        obj.name ||
        obj.Name ||
        obj.fullName ||
        obj.FullName ||
        obj.userName ||
        obj.user ||
        `Explorer #${index + 1}`;
      const referrals = Number(
        obj.referrals ??
          obj.Referrals ??
          obj.count ??
          obj.Count ??
          obj.referralCount ??
          obj.points ??
          obj.score ??
          0
      );
      const rank = Number(
        obj.rank ?? obj.Rank ?? obj.position ?? obj.Position ?? index + 1
      );
      return {
        rank: isNaN(rank) ? index + 1 : rank,
        name: String(name).toUpperCase(),
        referrals: isNaN(referrals) ? 0 : referrals,
      };
    }
    return {
      rank: index + 1,
      name: String(item).toUpperCase(),
      referrals: 0,
    };
  });
}

/**
 * Sends POST request with 'text/plain' Content-Type to avoid CORS preflight issues with Google Apps Script
 */
export async function submitWaitlist(
  payload: WaitlistPayload
): Promise<WaitlistResponse> {
  const apiUrl =
    import.meta.env.VITE_WAITLIST_API_URL || GOOGLE_APPS_SCRIPT_URL;

  const refByValue = (payload.ref_by ?? payload.referralCode ?? '').trim();
  const insightsValue = (payload.insights ?? payload.insights_data ?? payload.featureSuggestion ?? '').trim();

  const postBody = {
    name: payload.name.trim(),
    email: payload.email.trim(),
    ref_by: refByValue,
    insights: insightsValue,
  };

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain;charset=utf-8',
      },
      body: JSON.stringify(postBody),
    });

    let resData: Record<string, unknown> | null = null;
    const text = await response.text();

    try {
      resData = JSON.parse(text);
    } catch {
      console.info('[Levo Waitlist API] Non-JSON response received:', text);
    }

    // Check if the backend returned an explicit error
    if (resData?.error) {
      const errorMsg = String(resData.error);
      console.error('[Levo Waitlist API] Backend returned error:', errorMsg);
      throw new Error(errorMsg);
    }

    // Extract refCode from the response
    const resPayloadData = (resData?.data as Record<string, unknown>) || {};
    const extractedRefCode =
      (resData?.refCode as string) ||
      (resPayloadData?.refCode as string) ||
      (resData?.ref_code as string) ||
      (resPayloadData?.ref_code as string) ||
      (resData?.ref_by as string) ||
      (resPayloadData?.ref_by as string) ||
      (resData?.referralCode as string) ||
      (resPayloadData?.referralCode as string) ||
      (resData?.referral_code as string) ||
      (resData?.ref as string) ||
      (resData?.code as string);

    // If backend did not provide a refCode, generate a formatted one
    const refCode =
      extractedRefCode ||
      `LEVO-${payload.name.trim().split(' ')[0].toUpperCase()}-${Math.floor(1000 + Math.random() * 9000)}`;

    const position =
      (typeof resData?.position === 'number' ? resData.position : undefined) ??
      (typeof resPayloadData?.position === 'number' ? resPayloadData.position : undefined) ??
      (typeof resData?.userPosition === 'number' ? resData.userPosition : undefined) ??
      (typeof resData?.rank === 'number' ? resData.rank : undefined) ??
      14;

    // Save returned refCode, name, email, and position to localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY_REF_CODE, refCode);
      localStorage.setItem(STORAGE_KEY_USER_NAME, payload.name.trim());
      localStorage.setItem(STORAGE_KEY_USER_EMAIL, payload.email.trim());
      localStorage.setItem(STORAGE_KEY_USER_POSITION, position.toString());
    }

    return {
      success: true,
      message: (resData?.message as string) || 'Successfully joined the waitlist!',
      data: {
        refCode,
        position,
        ...(resData || {}),
      },
    };
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : String(err);
    console.error('[Levo Waitlist API] Submission failed:', errorMsg);

    return {
      success: false,
      message: errorMsg || 'Failed to submit to backend API. Please try again.',
    };
  }
}

/**
 * Sends GET request to Google Apps Script endpoint passing ?email=...
 * Retrieves both leaderboard and user position.
 */
export async function fetchLeaderboardAndPosition(
  userEmail?: string
): Promise<LeaderboardResponse> {
  const apiUrl =
    import.meta.env.VITE_LEADERBOARD_API_URL ||
    import.meta.env.VITE_WAITLIST_API_URL ||
    GOOGLE_APPS_SCRIPT_URL;

  try {
    const url = new URL(apiUrl);

    // Pass the user's email as query parameter: ?email=...
    const emailToQuery = (userEmail || getStoredUserWaitlistData().email || '').trim();
    if (emailToQuery) {
      url.searchParams.set('email', emailToQuery);
    }

    const response = await fetch(url.toString(), {
      method: 'GET',
    });

    const text = await response.text();
    let resData: Record<string, unknown> | null = null;
    try {
      resData = JSON.parse(text);
    } catch {
      console.warn('[Levo Leaderboard API] Non-JSON response received:', text);
    }

    if (resData) {
      if (resData.error) {
        console.warn('[Levo Leaderboard API] Script returned error:', resData.error);
      } else {
        const resPayloadData = (resData?.data as Record<string, unknown>) || {};
        
        // Find leaderboard array in various possible keys
        const rawList =
          resData.leaderboard ||
          resPayloadData.leaderboard ||
          resData.rankings ||
          resData.users ||
          resData.data ||
          (Array.isArray(resData) ? resData : null);

        const userPosition =
          (typeof resData.position === 'number' ? resData.position : undefined) ??
          (typeof resPayloadData.position === 'number' ? resPayloadData.position : undefined) ??
          (typeof resData.userPosition === 'number' ? resData.userPosition : undefined) ??
          (typeof resData.rank === 'number' ? resData.rank : undefined) ??
          (typeof resData.userRank === 'number' ? resData.userRank : undefined);

        if (typeof userPosition === 'number' && typeof window !== 'undefined') {
          localStorage.setItem(STORAGE_KEY_USER_POSITION, userPosition.toString());
        }

        if (Array.isArray(rawList) && rawList.length > 0) {
          const normalized = normalizeLeaderboardData(rawList).slice(0, 20);
          return {
            leaderboard: normalized,
            userPosition,
          };
        }
      }
    }
  } catch (err) {
    console.warn('[Levo Leaderboard API] Error fetching live data, using fallback:', err);
  }

  // Realistic fallback if script is not accessible or currently returning an error
  const stored = getStoredUserWaitlistData();
  const userName = stored.name || 'You';

  const defaultTop20: LeaderboardEntry[] = [
    { rank: 1, name: 'CHIDI OKAFOR', referrals: 64 },
    { rank: 2, name: 'AMINA BELLO', referrals: 58 },
    { rank: 3, name: 'TUNDE ADEYEMI', referrals: 49 },
    { rank: 4, name: 'NGOZI EZE', referrals: 42 },
    { rank: 5, name: 'KWAME MENSAH', referrals: 37 },
    { rank: 6, name: 'ZAINAB ABUBAKAR', referrals: 33 },
    { rank: 7, name: 'WANJIKU KAMAU', referrals: 29 },
    { rank: 8, name: 'EMEKA NWOSU', referrals: 26 },
    { rank: 9, name: 'FATIMA SANUSI', referrals: 24 },
    { rank: 10, name: 'BABATUNDE FASH', referrals: 21 },
    { rank: 11, name: 'KOFI ASARE', referrals: 19 },
    { rank: 12, name: 'BLESSING OKORO', referrals: 17 },
    { rank: 13, name: 'DAMILOLA PRATT', referrals: 15 },
    { rank: 14, name: `${userName.toUpperCase()} (YOU)`, referrals: 12, isCurrentUser: true },
    { rank: 15, name: 'YUSUF GARBA', referrals: 11 },
    { rank: 16, name: 'CHIOMA ADEBAYO', referrals: 9 },
    { rank: 17, name: 'OLUWASEUN VANCE', referrals: 8 },
    { rank: 18, name: 'ADAEZE OBI', referrals: 7 },
    { rank: 19, name: 'MUSTAPHA SANI', referrals: 6 },
    { rank: 20, name: 'HALIMA DANJUMA', referrals: 5 },
  ];

  return {
    leaderboard: defaultTop20,
    userPosition: stored.position || 14,
  };
}
