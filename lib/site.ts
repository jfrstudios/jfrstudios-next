// Shared site data for JFR Studios
// Single source of truth for navigation, services, projects, pricing and FAQ.

export const ink = '#0A0A0A';
export const inkWarm = '#14110D';
export const cream = '#F5F0E5';
export const creamBright = '#FAF7F0';
export const gold = '#D4A437';
export const goldLight = '#F5C76A';
export const goldDark = '#A87C1F';

export const mutedDark = 'rgba(245, 240, 229, 0.72)';
export const mutedDarkSoft = 'rgba(245, 240, 229, 0.5)';
export const lineDark = 'rgba(245, 240, 229, 0.12)';
export const lineDarkSoft = 'rgba(245, 240, 229, 0.06)';
export const mutedLight = 'rgba(20, 17, 13, 0.62)';
export const mutedLightSoft = 'rgba(20, 17, 13, 0.4)';
export const lineLight = 'rgba(20, 17, 13, 0.10)';

export const container = {
  maxWidth: '1280px',
  margin: '0 auto',
  padding: '0 24px',
} as const;

export const EMAIL = 'hello@jfrstudios.store';
export const PHONE = '0322 1001048';
export const SITE_URL = 'https://jfrstudios-next.vercel.app';

export type NavItem = { label: string; href: string };

export const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'About Us', href: '/about' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Contact', href: '/contact' },
];

export type Service = {
  slug: string;
  title: string;
  short: string;
  desc: string;
  icon: string;
  deliverables: string[];
  timeline: string;
  startingAt: string;
};

export const services: Service[] = [
  {
    slug: 'web-design-development',
    title: 'Web Design & Development',
    short: 'Websites that load fast and read clearly on any screen.',
    desc: 'We design and build sites that hold up under real traffic and real attention. Every layout is tested on phones first, because that is where most of your visitors actually are. You get a CMS you can update yourself, and we stay reachable after launch.',
    icon: 'web',
    deliverables: [
      'Up to 8 custom page designs',
      'Mobile, tablet and desktop layouts',
      'Content management system',
      'Contact form and basic analytics',
      'Search engine setup',
      'One month of post-launch fixes',
    ],
    timeline: '3 to 6 weeks',
    startingAt: '$650',
  },
  {
    slug: 'branding-identity',
    title: 'Branding & Identity',
    short: 'A brand people recognise before they read a word.',
    desc: 'A logo is the smallest part of the job. We build the system around it: colour, type, spacing, the tone you write in, and a short guide that keeps it all from drifting. It works whether you are printing a menu or launching a campaign.',
    icon: 'brand',
    deliverables: [
      'Primary and secondary logo marks',
      'Colour and typography system',
      'Brand guidelines document',
      'Business card and stationery set',
      'Social media templates',
      'Editable source files',
    ],
    timeline: '3 to 5 weeks',
    startingAt: '$450',
  },
  {
    slug: 'social-media-management',
    title: 'Social Media Management',
    short: 'A posting rhythm that builds an audience worth having.',
    desc: 'We plan a month of content, write it, design it, and schedule it. No filler posts. Every piece has a job: start a conversation, answer an objection, or bring people to your site. You get a monthly report that says what actually moved.',
    icon: 'social',
    deliverables: [
      'Monthly content calendar',
      '16 to 20 posts per month',
      'Caption writing and hashtag research',
      'Custom graphics and motion assets',
      'Scheduling and community replies',
      'Monthly performance report',
    ],
    timeline: 'Monthly retainer',
    startingAt: '$400',
  },
  {
    slug: 'graphic-design',
    title: 'Graphic Design',
    short: 'Visuals made for the moment your brand gets noticed.',
    desc: 'Campaign artwork, packaging, pitch decks, pitch pages, social sets, the lot. We work from a defined palette so everything you own looks like it came from the same place. Requests come with two rounds of revisions as standard.',
    icon: 'design',
    deliverables: [
      'Campaign artwork and social sets',
      'Pitch and proposal templates',
      'Print-ready artwork',
      'Packaging and label design',
      'Two revision rounds per request',
      'Organised, export-ready files',
    ],
    timeline: 'Per project',
    startingAt: '$250',
  },
  {
    slug: 'digital-marketing',
    title: 'Digital Marketing',
    short: 'Paid and organic, working toward the same number.',
    desc: 'We start by working out what a customer is actually worth to you, then build campaigns that make sense against that. Search, social, email, the lot. Nothing gets scaled until we know it is working.',
    icon: 'marketing',
    deliverables: [
      'Tracking and measurement setup',
      'Search and social campaigns',
      'Landing page design and testing',
      'Email sequences for onboarding',
      'Keyword and audience research',
      'Fortnightly performance reviews',
    ],
    timeline: 'Monthly retainer',
    startingAt: '$600',
  },
  {
    slug: 'content-creation',
    title: 'Content Creation',
    short: 'Photo, video and copy that gives people a reason to stop.',
    desc: 'Short-form video, product photography, interviews, written pieces. Built around one story so a week of content does not feel like a week of unrelated posts. Shot and edited to a consistent look.',
    icon: 'content',
    deliverables: [
      'One filming or photography day per month',
      'Eight to twelve short-form videos',
      'Edited photo library',
      'Written posts and scripts',
      'Subtitles and platform-ready exports',
      'Monthly usage rights',
    ],
    timeline: 'Monthly retainer',
    startingAt: '$700',
  },
];

export type Project = {
  slug: string;
  title: string;
  client: string;
  category: string;
  year: string;
  location: string;
  summary: string;
  challenge: string;
  approach: string;
  outcome: string;
  results: { label: string; value: string }[];
  services: string[];
  image: string;
};

export const projects: Project[] = [
  {
    slug: 'meridian-freight',
    title: 'Meridian Freight',
    client: 'Meridian Freight',
    category: 'Web Design & Development',
    year: '2025',
    location: 'Rotterdam, Netherlands',
    summary:
      'A freight brokerage was quoting from a spreadsheet and losing deals to anyone with a proper website.',
    challenge:
      'Meridian moved 4,000 shipments a month across the Benelux corridor, but every new enquiry came in through a phone call. Quotes took two days to return because someone was rebuilding the same PDF by hand each time. Larger competitors were quoting in under an hour and winning on speed alone.',
    approach:
      'We rebuilt the site around a live quote form instead of a contact page. Clients enter lane, weight and pickup window, and they get a priced option on screen before anyone at Meridian picks up the phone. The build uses a headless setup so their team can add lanes themselves, and we kept the page weight low because a lot of their traffic still comes from older devices on warehouse floors.',
    outcome:
      'Enquiries now arrive pre-qualified. The sales team spends its morning on real conversations instead of assembling quotes, and Meridian can answer a competitor mid-negotiation instead of a day later.',
    results: [
      { label: 'Quote response time', value: '2 days to 4 minutes' },
      { label: 'Enquiries per month', value: 'Up 4x' },
      { label: 'Lighthouse performance', value: '96 mobile' },
    ],
    services: ['Web Design & Development', 'Digital Marketing'],
    image:
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&h=800&fit=crop',
  },
  {
    slug: 'salt-and-ember',
    title: 'Salt & Ember',
    client: 'Salt & Ember',
    category: 'Branding & Identity',
    year: '2025',
    location: 'Lisbon, Portugal',
    summary:
      'A wood-fired restaurant with a waiting list wanted to open a second site without copying the first one.',
    challenge:
      'The first restaurant ran on a hand-painted sign and the owner reputation. When they tried to open a second site, the identity came apart. The menu typography was inconsistent, the social feed looked like a different business, and regulars assumed the new place was a franchise. They needed a system, not just a nicer logo.',
    approach:
      'We built the identity around the fire itself: ember tones, a single strong wordmark, and a menu system that survives being printed on kraft paper or shown on a phone. Colour and type are locked to tokens so the chef can order new menus from any printer and still get the same result. We built a photo set at the original site and trained their team to shoot to the same standard.',
    outcome:
      'The second site opened eight months later looking like the first one did on day one. Regulars recognised it instantly, and the group has since signed a third location using the same system.',
    results: [
      { label: 'Second site opened', value: '8 months after rebrand' },
      { label: 'Menu redesign time', value: '3 weeks to half a day' },
      { label: 'Instagram followers', value: '+8,400 in 5 months' },
    ],
    services: ['Branding & Identity', 'Graphic Design', 'Content Creation'],
    image:
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&h=800&fit=crop',
  },
  {
    slug: 'northfield-labs',
    title: 'Northfield Labs',
    client: 'Northfield Labs',
    category: 'Social Media Management',
    year: '2025',
    location: 'Austin, United States',
    summary:
      'A biotech startup was posting lab photos and getting silence in return.',
    challenge:
      'Northfield had raised a Series A and needed to hire senior researchers and recruit trial sites, but their feed looked like a noticeboard. Posts went out when someone remembered, engagement sat under one percent, and the founder was doing all the replies between flights.',
    approach:
      'We replaced the general feed with three fixed columns: one explaining a real problem the company works on, one showing how a decision was made, and one with a named person behind the work. That last column did the heavy lifting. Once researchers could see faces and names, replies came from people in the same field. We batch filming into one session a month so the founder spends two hours, not two days.',
    outcome:
      'Comments turned into actual research conversations, and two inbound applications came from people who had found the company through a post rather than a job board.',
    results: [
      { label: 'Engagement rate', value: '0.8% to 5.2%' },
      { label: 'Inbound applications', value: '17 in six months' },
      { label: 'Founder time per month', value: 'Down from 2 days to 2 hours' },
    ],
    services: ['Social Media Management', 'Content Creation'],
    image:
      'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1200&h=800&fit=crop',
  },
  {
    slug: 'verdant-supply',
    title: 'Verdant Supply',
    client: 'Verdant Supply',
    category: 'Digital Marketing',
    year: '2026',
    location: 'Melbourne, Australia',
    summary:
      'An online garden supply store was spending more on ads than it made.',
    challenge:
      'Verdant had a good product range and a store that converted, but the ad account was a mess. Old campaigns from two years ago were still burning budget, three different audiences overlapped, and nobody could say what a customer was worth. They were about to pull the plug on paid entirely.',
    approach:
      'We paused everything for a week and rebuilt the account from scratch around three product margin bands rather than broad audiences. Tracking went in first so we could finally see which campaigns were buying customers and which were buying weather. Creative followed the margin data, so the best-selling low-cost products stopped getting the same budget as the expensive ones.',
    outcome:
      'Monthly spend is now lower than it was before we started, and revenue from paid is higher. Verdant extended into a second ad channel a month after the rebuild.',
    results: [
      { label: 'Cost per purchase', value: 'Down 41%' },
      { label: 'Monthly ad spend', value: 'Down 22%' },
      { label: 'Revenue from paid', value: 'Up 63%' },
    ],
    services: ['Digital Marketing', 'Web Design & Development'],
    image:
      'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1200&h=800&fit=crop',
  },
  {
    slug: 'kettle-and-grain',
    title: 'Kettle & Grain',
    client: 'Kettle & Grain',
    category: 'Graphic Design',
    year: '2025',
    location: 'Manchester, United Kingdom',
    summary:
      'A speciality grocer needed packaging that survived a busy shelf and still looked like them.',
    challenge:
      'Kettle sold loose grains and spices in plain bags that every competitor also sold in plain bags. Shoppers who had never heard of them had no reason to reach for that bag over the one three inches to the left. There was also no room on the shelf for a long product story.',
    approach:
      'We designed a single flexible label that scales from a 200g pouch to a 5kg sack. The colour code does the work from across the aisle, and the origin detail sits in a fixed position so a returning shopper finds the same information in the same spot every time. We printed one test run before committing to the full batch, which caught a legibility problem with the light blends.',
    outcome:
      'The range now reads as one family on shelf. Kettle reports repeat purchases rising, and the label system has held up through two new product lines added since.',
    results: [
      { label: 'Repeat purchases', value: 'Up 28%' },
      { label: 'New product lines', value: '2 added without redesign' },
      { label: 'Print runs saved', value: '1 test batch per launch' },
    ],
    services: ['Graphic Design', 'Branding & Identity'],
    image:
      'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=1200&h=800&fit=crop',
  },
  {
    slug: 'foundry-north',
    title: 'Foundry North',
    client: 'Foundry North',
    category: 'Content Creation',
    year: '2026',
    location: 'Toronto, Canada',
    summary:
      'A construction software company had no idea how to explain itself in under a minute.',
    challenge:
      'Foundry sells operations software to mid-sized builders, but the founders could not describe what they do without a twenty-minute meeting. Every sales call started at the beginning. Marketing had tried explainer videos before and they ran to six minutes, which nobody finished.',
    approach:
      'We filmed one day with their operations team and cut it into a series of 40-second videos, each answering a single question a buyer actually asks. No voiceover narration, just the person who does the work talking about it. We wrote questions from real sales call recordings so the topics matched what buyers were stuck on.',
    outcome:
      'The videos now do the explaining that used to happen in the first half of every sales call, so calls start further along. Prospects are also arriving with better questions.',
    results: [
      { label: 'Video watch-through rate', value: '62% at 40 seconds' },
      { label: 'Time to first meeting', value: 'Down from 9 days to 4' },
      { label: 'Sales calls closed', value: 'Up 19% quarter on quarter' },
    ],
    services: ['Content Creation', 'Digital Marketing'],
    image:
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&h=800&fit=crop',
  },
];

export type Plan = {
  name: string;
  price: string;
  cadence: string;
  pitch: string;
  featured: boolean;
  features: string[];
  best: string;
};

export const plans: Plan[] = [
  {
    name: 'Starter',
    price: '$450',
    cadence: 'one-off project',
    pitch: 'For a new business that needs one good thing done properly.',
    featured: false,
    best: 'Best for one-off projects',
    features: [
      'Single service project',
      'Up to 5 pages or 12 designs',
      'Two revision rounds',
      'Mobile responsive',
      'Delivered in 2 to 3 weeks',
      'Email support for 30 days',
    ],
  },
  {
    name: 'Growth',
    price: '$1,200',
    cadence: 'per month',
    pitch: 'For teams that need consistent work every month, not occasionally.',
    featured: true,
    best: 'Most popular with our clients',
    features: [
      'Two services running together',
      'Up to 12 pages or 30 designs',
      'Unlimited revision rounds',
      'Content calendar and scheduling',
      'Monthly performance report',
      'Slack or WhatsApp channel',
      'Priority turnaround',
    ],
  },
  {
    name: 'Partner',
    price: '$2,600',
    cadence: 'per month',
    pitch: 'For companies where digital work is the main thing, not a side task.',
    featured: false,
    best: 'Best for ongoing teams',
    features: [
      'Full service access, all six',
      'Unlimited pages and designs',
      'Dedicated account lead',
      'Quarterly strategy sessions',
      'Custom reporting and attribution',
      'Same-day response on requests',
      'Quarterly campaign planning',
    ],
  },
];

export const faqs = [
  {
    q: 'How long does a typical project take?',
    a: 'A single service usually lands between two and six weeks depending on scope. Branding takes about three to five weeks. A full website runs four to six. If you need something faster, say so on the first call and we will tell you honestly whether it is possible.',
  },
  {
    q: 'Do you work with clients outside Pakistan?',
    a: 'Most of our work is with clients in Europe, North America and Australia. We keep a four-hour overlap with European working hours, and we do not work in a way that needs you to be awake. Everything runs through written updates so nothing depends on catching you live.',
  },
  {
    q: 'What do you need from me to start?',
    a: 'A short call, access to your existing brand assets if you have them, and any copy or content you already wrote. If you do not have those, we can work from a questionnaire and draft the copy with you.',
  },
  {
    q: 'How does payment work?',
    a: 'Project work is usually half upfront and half on delivery. Monthly retainers are billed on the first working day of each month. We accept bank transfer, card and PayPal.',
  },
  {
    q: 'What happens after launch?',
    a: 'Every project includes thirty days of fixes at no charge. After that you can keep us on a light support plan, or take it in-house with the documentation and training we hand over. We do not lock clients in.',
  },
  {
    q: 'Can you help with something outside your six services?',
    a: 'Often yes. If it fits a brand or a website, we can usually find someone who does it well and manage them so you only deal with one team. Ask on the first call and we will tell you straight if we are the wrong fit.',
  },
  {
    q: 'Will I own the design and code?',
    a: 'Yes. Everything we make is yours. You get the source files, the code, and full ownership on handover. There is no licence fee and nothing to unlock later.',
  },
  {
    q: 'What if I only need one small thing?',
    a: 'That is fine. A single logo or a one-page site is a real project, not a favour. The Starter package exists for exactly that, and a lot of clients start there before scaling up.',
  },
];

export const stats = [
  { num: '120+', label: 'Projects Completed' },
  { num: '58', label: 'Happy Clients' },
  { num: '6', label: 'Years Experience' },
  { num: '17', label: 'Countries Served' },
];

export const values = [
  {
    title: 'Premium Quality',
    desc: 'We deliver excellence in every project.',
  },
  {
    title: 'On-Time Delivery',
    desc: 'Your time matters to us.',
  },
  {
    title: 'Client Focused',
    desc: 'Your goals are our priority.',
  },
  {
    title: '24/7 Support',
    desc: 'We are always here for you.',
  },
];

export const process = [
  {
    step: '01',
    title: 'A short call',
    desc: 'Thirty minutes on a call. We ask what you are trying to fix, not what you want to build. You leave with an honest answer either way.',
  },
  {
    step: '02',
    title: 'Scope and fixed quote',
    desc: 'You get a written scope with a fixed price. If the work changes, we tell you what it costs before we start, not after.',
  },
  {
    step: '03',
    title: 'First draft in week one',
    desc: 'You see something real inside seven days. Not a mood board, not a wireframe you have to imagine. Actual work you can react to.',
  },
  {
    step: '04',
    title: 'Revisions in the open',
    desc: 'Two rounds are included on project work, and we go back over everything in one call rather than trickling changes over a month.',
  },
  {
    step: '05',
    title: 'Launch and handover',
    desc: 'We ship it, watch the numbers for a week, then hand over documentation and training. You own everything from that point.',
  },
  {
    step: '06',
    title: 'Support after launch',
    desc: 'Thirty days of fixes included. Stay on a support plan or take it in-house. Both are normal and neither is awkward.',
  },
];