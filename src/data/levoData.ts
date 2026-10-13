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
  headlineLead: 'Eat the food you grew up on.',
  headlineAccent: 'Still hit your health goals.',
  subheading:
    'Levo is the first fitness and nutrition app engineered around real Nigerian meals. Accurately track calories, balance macros, and get healthy plans—without trading Jollof and Egusi for plain oats and boiled chicken.',
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
    description: 'Driven by the latest algorithms to model body transformation, metabolic rates, and adherence.',
    iconType: 'algorithm',
  },
];

export const keyFeatures: FeatureItem[] = [
  {
    id: 'database',
    title: 'Food database that knows home',
    description:
      'Pounded Yam, Amala, Egusi, Jollof and more, with laboratory-verified calories and macros so you never have to guess.',
    accent: 'green',
    iconType: 'database',
  },
  {
    id: 'logging',
    title: 'Effortless logging',
    description:
      'Track calories, macros, micronutrients, and daily water intake with core actions completed in just a few quick taps.',
    accent: 'terra',
    iconType: 'log',
  },
  {
    id: 'recipes',
    title: 'Recipe hub',
    description:
      'Discover meals and share your own healthy recipes with calculated macros, and let others rate and comment.',
    accent: 'gold',
    iconType: 'recipes',
  },
  {
    id: 'analytics',
    title: 'Progress that makes sense',
    description:
      'Simple, clear analytics on your nutritional consistency, energy levels, and body transformation trends over time.',
    accent: 'dark',
    iconType: 'analytics',
  },
];

export const howItWorksSteps: WorkflowStep[] = [
  {
    stepNumber: '01',
    title: 'Tell us about you & your goal',
    description:
      'Share your height, target weight, activity levels, allergies, and regional taste preferences so Levo can calculate your metabolic baseline.',
    badgeLabel: 'Profile Setup',
  },
  {
    stepNumber: '02',
    title: 'Log your meal in seconds',
    description:
      'Search our verified catalog or tap your favorites. Log Suya, Moi Moi, or soups with calibrated local bowl and piece sizes in just a couple taps.',
    badgeLabel: 'Quick Meal Log',
  },
  {
    stepNumber: '03',
    title: 'Track progress & stay consistent',
    description:
      'See how your eating habits translate to true body composition improvements, better sleep quality, and sustained daily energy.',
    badgeLabel: '14-Day Streak',
  },
];

export const communityData = {
  badge: 'Real Accountability',
  title: 'Work out with creators who understand your lifestyle.',
  description:
    "Fitness is easier when you're not walking the journey alone. Follow your favorite Nigerian fitness coaches, local chefs, and creators. Adopt their proven high-protein local meal plans and follow their curated workout regimens.",
  coach: {
    name: 'Coach Femi',
    niche: 'Lagos Strength & Calisthenics',
    members: '14.2k Members',
    initials: 'CF',
    mealTitle: 'Post-workout Grilled Suya Salad (420 kcal, 45g protein)',
    sharedTo: 'Shared to 84 Squads',
  },
  squad: {
    name: 'Lagos Island Squad',
    rank: 'Week 4 Rank #2',
    members: [
      { name: '1. Tunde A.', score: '98% logged' },
      { name: '2. You (Chidi)', score: '96% logged', highlight: true },
    ],
    hypeText: '🔥 42 members completed their morning workout today!',
  },
  cards: [
    {
      title: 'Accountability Partners',
      description:
        'Get matched with people in your neighborhood or timezone who share similar fitness goals to keep each other showing up.',
    },
    {
      title: 'Friendly Squad Challenges',
      description:
        'Join water intake challenges, step leaderboards, and consistent logging sprints with real bragging rights and badges.',
    },
  ],
};

export const macroAccuracyData = {
  badge: 'DATABASE PRECISION',
  title: 'Laboratory-tested calories and macros for every Nigerian dish.',
  description:
    'Most fitness apps force you to pick generic Western foods or guess the macros of home cooking. Levo is powered by a rigorously tested, culturally verified food database calibrated for authentic Nigerian kitchens, canteens, and restaurants.',
  points: [
    {
      title: 'Lab-Calibrated Macro Splits',
      description:
        'Accurate protein, carbohydrate, fat, and dietary fiber ratios calculated for regional ingredients, from egusi seeds to smoked catfish.',
    },
    {
      title: 'Calibrated Local Portion Sizes',
      description:
        'Portions measured in wraps, ladles, pieces, and standard canteen takeout packs—so you never need a confusing food scale.',
    },
    {
      title: 'Real Cooking Method Accounting',
      description:
        'Reflects real recipe preparations: palm oil vs vegetable oil, pepper reduction bases, and bone broth density.',
    },
    {
      title: 'Algorithmic Density Validation',
      description:
        'Continuously cross-referenced against scientific nutritional references and ongoing local food sample analyses.',
    },
  ],
};

export const roadmapItems: RoadmapItem[] = [
  {
    id: '1',
    step: '01',
    title: 'Levo Life Partner',
    description:
      'An intelligent personal wellness coach that guides your daily food choices and nudges you at just the right moments before cravings strike.',
    status: 'In Private Beta',
    badge: 'Coming soon',
  },
  {
    id: '2',
    step: '02',
    title: 'Buy Ingredients',
    description:
      'Order fresh groceries and local soup ingredients matched precisely to your weekly meal plan, delivered directly to your door through vetted logistics partners.',
    status: 'Lagos & Abuja Pilot',
    badge: 'Coming soon',
  },
  {
    id: '3',
    step: '03',
    title: 'Levo Marketplace',
    description:
      'Discover pre-portioned meal prep kits, healthy restaurant orders with verified macro tags, and trusted clean supplements.',
    status: 'Merchant Integrations',
    badge: 'Coming soon',
  },
  {
    id: '4',
    step: '04',
    title: 'Wearable Sync',
    description:
      'Connect Apple Watch, Garmin, Whoop, and FitBit for automatic daily activity tracking, heart rate variability (HRV), and restful sleep logs.',
    status: 'HealthKit & WearOS',
    badge: 'Coming soon',
  },
  {
    id: '5',
    step: '05',
    title: 'Premium Plans & Creator Subscriptions',
    description:
      'Subscribe directly to private squads run by Africa’s top strength coaches and clinical nutritionists for customized one-on-one coaching and exclusive weekly meal drops.',
    status: 'Creator Studio Launch',
    badge: 'Coming soon',
  },
  {
    id: '6',
    step: '06',
    title: 'Accountability Partner Matching',
    description:
      'Find workout buddies and meal-prep allies in your neighborhood to share milestones and keep each other showing up.',
    status: 'Hyperlocal Pairing',
    badge: 'Coming soon',
  },
];

export const faqItems: FaqItem[] = [
  {
    id: 'q1',
    question: 'What is Levo?',
    answer:
      'Levo is a fitness and nutrition mobile app created specifically for people in Nigeria and across the African diaspora. Unlike Western apps that force you to guess the calories in Egusi soup or Pounded Yam, Levo comes with an extensive, lab-verified database of local dishes, custom meal plans, habit trackers, and workout programs.',
  },
  {
    id: 'q2',
    question: 'Is Levo free to use?',
    answer:
      'Yes! You can log your meals, track calories, monitor water intake, and access our core Nigerian food database for free. Early access pioneers will also receive special complimentary access to premium squad features when we roll them out.',
  },
  {
    id: 'q3',
    question: 'Does Levo have Nigerian and African foods?',
    answer:
      'Extensively. We have cataloged hundreds of local staples—including Jollof, Fried Rice, Egusi, Efo Riro, Ogbono, Edikang Ikong, Pounded Yam, Amala, Semo, Suya, Akara, Moi Moi, plantain portions, and street snacks—calibrated with realistic local portion sizes.',
  },
  {
    id: 'q4',
    question: 'How accurate are the calories and macros in the database?',
    answer:
      'Our nutrition values are laboratory-calibrated and cross-referenced with regional food composition studies. We take into account traditional cooking methods, oil usage, and canteen portion sizes to deliver the most accurate calorie and macro breakdown available for African foods.',
  },
  {
    id: 'q5',
    question: 'What are ChopPoints and how do I earn them?',
    answer:
      "ChopPoints are our in-app reward tokens. You earn them simply by showing up: logging your meals consistently, hitting your daily water goals, finishing workouts, and cheering on your accountability partners. You'll be able to redeem them for marketplace discounts and workout gear.",
  },
  {
    id: 'q6',
    question: 'Can I follow my favorite fitness creators and chefs on Levo?',
    answer:
      'Yes. Levo hosts a creator ecosystem where certified trainers and culinary creators share their recipes, meal blueprints, and workout routines. You can join their community squads and take part in group challenges.',
  },
  {
    id: 'q7',
    question: 'Do I need to download Levo from an app store?',
    answer:
      "Levo is built as a lightning-fast responsive Progressive Web App (PWA) with native iOS and Android apps rolling out soon. You can install it straight to your phone's home screen in one tap with zero storage bloat, or download the app when store builds go live.",
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
