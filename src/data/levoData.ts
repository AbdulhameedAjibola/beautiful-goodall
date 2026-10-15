export interface NavLink {
  label: string;
  href: string;
  hasBadge?: boolean;
}

export interface TrustPoint {
  id: string;
  title: string;
  description: string;
  iconType: 'food' | 'fast' | 'algorithm';
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  accent: 'green' | 'terra' | 'gold' | 'dark';
  iconType: 'database' | 'log' | 'recipes' | 'analytics';
}

export interface WorkflowStep {
  stepNumber: string;
  title: string;
  description: string;
  badgeLabel: string;
}

export interface MacroAccuracyPoint {
  title: string;
  description: string;
}

export interface RoadmapItem {
  id: string;
  step: string;
  title: string;
  description: string;
  status: string;
  badge: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const levoAssets = {
  primaryLogo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA5vuSXaw1_YKMZXe4OTnm1gZiyAuxefPSRYAWBtc_2kz1h6b0JDSoe34ib-oY9um7OVd5AdPklo0YSwb_sCYhGzAVrqiNfHMOQRhJufVGGK_dBD7FSvMNBoeWV618mZyMfThLaaKYGzFSkxVKgv9CxLwna-UT5lZGYv7vUVr_M_AAJmNaCgXtsp92c28aorTQxqxByQL-I5GIxDQ9nNHvc47ms3jLJYaUdnX2nyETgkkT3SXC0psBSpo-WrU2rFwjrzLw',
  submarkLogo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCAT2K3rchdGc9kpFYsQk33dNoOnmB8F4nZT0_bactVeLZl7ia0S8nJOfe_rO3BD9-l1b8kyXYNraHzV2bom9tvEqC4n_xYOr_wDKO09hWC0klGFU5X_0imBksBTmNrDC9boi706x9i9ScKiAtH5Zbw3PIMv-DpH3InZkk8KyOfYRXnCYW_1Ips76A119RY659tRNVVBfs0vdYKA4xTYkdOqmWww4NoFK4HxUoVT-IdIan00Ujf5Q6pu4oqrO5evGG_D5E',
};

export const navLinks: NavLink[] = [
  { label: 'Features', href: '#features' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Community', href: '#community' },
  { label: 'Coming soon', href: '#coming-soon', hasBadge: true },
  { label: 'FAQ', href: '#faq' },
];

export const heroData = {
  pillText: 'Nigeria & Pan-Africa Nutrition',
  headlineLead: 'Hit your nutrition goals without giving up local meals you grew up eating.',
  headlineAccent: '',
  subheading:
    'Levo is here to help you accurately track the macros in your local Nigerian dishes based on a database built extensively on local meals and ingredients. Accurately track macros, calories, without second guessing, or giving up your loved meals for generic western foods.',
  primaryCtaText: 'Get early access',
  secondaryCtaText: 'See how it works',
  socialProofCount: '2,400+ pioneers',
  socialProofCities: 'Lagos, Abuja, & Nairobi',
  mockupMeal: {
    title: 'Party Jollof & Grilled Croaker',
    portion: '1 serving (320g) + Grilled pepper fish',
    calories: 620,
    macros: {
      protein: { grams: 38, pct: 75 },
      carbs: { grams: 72, pct: 60 },
      fats: { grams: 18, pct: 45 },
    },
    dailyLogged: 1620,
    dailyTotal: 2150,
    dailyPct: 74,
  },
};

export const trustPoints: TrustPoint[] = [
  {
    id: 'food',
    title: 'Built for Nigerian food',
    description: 'Tested with local canteen, home & street portions.',
    iconType: 'food',
  },
  {
    id: 'fast',
    title: 'Log a meal in a few taps',
    description: 'Quick search, fast portions, and no tedious scales.',
    iconType: 'fast',
  },
  {
    id: 'algorithm',
    title: 'State-of-the-art progress tracking',
    description: 'Personalized targets calibrated for your body composition and goals.',
    iconType: 'algorithm',
  },
];

export const keyFeatures: FeatureItem[] = [
  {
    id: 'database',
    title: 'Food database that knows home',
    description:
      'Pounded Yam, Amala, Egusi, Jollof and more, with verified calories and macros so you never have to guess.',
    accent: 'green',
    iconType: 'database',
  },
  {
    id: 'logging',
    title: 'Effortless logging',
    description:
      'Track calories, macros, and daily water intake in just a few quick taps.',
    accent: 'terra',
    iconType: 'log',
  },
  {
    id: 'recipes',
    title: 'Recipe hub',
    description:
      'Discover meals and share healthy recipes with calculated macros.',
    accent: 'gold',
    iconType: 'recipes',
  },
  {
    id: 'analytics',
    title: 'Progress that makes sense',
    description:
      'Clear analytics on your nutrition consistency and body transformation trends.',
    accent: 'dark',
    iconType: 'analytics',
  },
];

export const howItWorksSteps: WorkflowStep[] = [
  {
    stepNumber: '01',
    title: 'Tell us about you & your goal',
    description:
      'Set your target weight, activity level, and meal preferences so Levo can calculate your daily targets.',
    badgeLabel: 'Profile Setup',
  },
  {
    stepNumber: '02',
    title: 'Log your meal in seconds',
    description:
      'Search local dishes or tap your favorites. Log Suya, Moi Moi, or soups with calibrated local portion sizes in a few taps.',
    badgeLabel: 'Quick Meal Log',
  },
  {
    stepNumber: '03',
    title: 'Track progress & stay consistent',
    description:
      'Track your daily habits, see consistent progress, and stay on target.',
    badgeLabel: '14-Day Streak',
  },
];

export const communityData = {
  title: 'Stay accountable with people who share your goals.',
  cards: [
    {
      title: 'Accountability Partners',
      description:
        'Connect with workout partners in your city or timezone to share milestones and keep each other on track.',
    },
    {
      title: 'Friendly Squad Challenges',
      description:
        'Join step challenges, hydration goals, and meal logging streaks with friendly community competition.',
    },
  ],
};

export const roadmapItems: RoadmapItem[] = [
  {
    id: '1',
    step: '01',
    title: 'Levo Life Partner',
    description:
      'An intelligent wellness coach that guides your daily food choices and nudges you at the right moments.',
    status: 'In Private Beta',
    badge: 'Coming soon',
  },
  {
    id: '2',
    step: '02',
    title: 'Buy Ingredients',
    description:
      'Order fresh groceries and local soup ingredients matched to your meal plan, delivered directly to your door.',
    status: 'Lagos & Abuja Pilot',
    badge: 'Coming soon',
  },
  {
    id: '3',
    step: '03',
    title: 'Levo Marketplace',
    description:
      'Discover pre-portioned meal prep kits, healthy restaurant orders with verified macros, and clean supplements.',
    status: 'Merchant Integrations',
    badge: 'Coming soon',
  },
  {
    id: '4',
    step: '04',
    title: 'Wearable Sync',
    description:
      'Connect Apple Watch, Garmin, Whoop, and FitBit for automatic daily activity tracking and sleep logs.',
    status: 'HealthKit & WearOS',
    badge: 'Coming soon',
  },
  {
    id: '5',
    step: '05',
    title: 'Premium Plans & Creator Subscriptions',
    description:
      'Join private squads for specialized coaching, custom programs, and weekly meal ideas.',
    status: 'Creator Studio Launch',
    badge: 'Coming soon',
  },
  {
    id: '6',
    step: '06',
    title: 'Accountability Partner Matching',
    description:
      'Find workout buddies and meal-prep allies in your neighborhood to share milestones and stay accountable.',
    status: 'Hyperlocal Pairing',
    badge: 'Coming soon',
  },
];

export const faqItems: FaqItem[] = [
  {
    id: 'q1',
    question: 'What is Levo?',
    answer:
      'Levo is a nutrition and fitness app built around authentic Nigerian and African meals. It features a thoroughly localized food database with verified calorie and macro counts, helping you accurately track your nutrition while enjoying local dishes.',
  },
  {
    id: 'q2',
    question: 'Is Levo free to use?',
    answer:
      'Yes! You can log your meals, track calories, monitor water intake, and access our core Nigerian food database for free. Early access pioneers will also receive complimentary access to premium squad features when we roll them out.',
  },
  {
    id: 'q3',
    question: 'Does Levo have Nigerian and African foods?',
    answer:
      'Extensively. We have cataloged hundreds of local staples including Jollof, Fried Rice, Egusi, Efo Riro, Ogbono, Edikang Ikong, Pounded Yam, Amala, Semo, Suya, Akara, Moi Moi, plantain portions, and street snacks, calibrated with realistic local portion sizes.',
  },
  {
    id: 'q4',
    question: 'How accurate are the calories and macros in the database?',
    answer:
      'Our nutrition values are calibrated and cross-referenced with regional food composition studies. We take into account traditional cooking methods, oil usage, and canteen portion sizes to deliver reliable calorie and macro breakdowns for African foods.',
  },
  {
    id: 'q6',
    question: 'Can I follow my favorite fitness creators and chefs on Levo?',
    answer:
      'Yes. Levo hosts a creator ecosystem where certified trainers and culinary creators share their recipes, meal blueprints, and workout routines. You can join their community squads and take part in group challenges.',
  },
];

export const footerLinks = {
  product: [
    { label: 'Food Database', href: '#features' },
    { label: 'Macro Tracking', href: '#how-it-works' },
    { label: 'Squads & Creators', href: '#community' },
    { label: 'Roadmap', href: '#coming-soon' },
  ],
  company: [
    { label: 'About Us', href: '#' },
    { label: 'Nutrition Board', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Contact', href: '#' },
  ],
  legal: [
    { label: 'Help Center', href: '#faq' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Privacy Charter', href: '#' },
    { label: 'Security', href: '#' },
  ],
};
