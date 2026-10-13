/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_WAITLIST_API_URL?: string;
  readonly VITE_LEADERBOARD_API_URL?: string;
  readonly VITE_USER_POSITION_API_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
