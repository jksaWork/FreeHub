import { useEffect, useRef, useState } from 'react';
import { Briefcase, ChevronUp, LineChart, Menu, ShoppingBasket, MessageCircle, Check, ArrowRight, Download, Settings, Rocket, MapPin, Zap, Shield, Languages, Bell, Filter, ClipboardList, User, Phone, PhoneCall, Smartphone } from 'lucide-react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const menuLinks = [
  { label: 'Home', href: '#home', isActive: true },
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Testimonials', href: '#testimonials' },
  // { label: 'Pricing', href: '#pricing' },
];

const partnerLogos = [
  { title: 'Most Loved', src: '/assets/media/svg/brand-logos/fujifilm.svg' },
  { title: 'Pure', src: '/assets/media/svg/brand-logos/vodafone.svg' },
  { title: 'Hardware with Love', src: '/assets/media/svg/brand-logos/kpmg.svg' },
  { title: 'Pure', src: '/assets/media/svg/brand-logos/nasa.svg' },
];

const PRIMARY_SECTION_BG = '#113F67';
const SECONDARY_COLOR = '#D6F4ED';
const HERO_GRADIENT = 'radial-gradient(circle at top left, #1a9cf5 0%, #000d1a 45%, #000000 100%)';
const STICKY_HEADER_BG = '#000d1a';

// Blob decorator component for white/gray sections
const BlobDecorator = ({ count = 2 }) => {
  const blobFiles = ['/assets/blob_8.svg', '/assets/blob_7_1.svg', '/assets/blob_7.svg'];
  
  // Generate random positions near borders using useState to persist random values
  const [blobConfigs] = useState(() => {
    return Array.from({ length: count }).map(() => {
      const positions = ['top-left', 'top-right', 'bottom-left', 'bottom-right'];
      const position = positions[Math.floor(Math.random() * positions.length)];
      const size = 120 + Math.random() * 80; // Random size between 120-200px
      const opacity = 0.1 + Math.random() * 0.07; // Random opacity between 0.08-0.15
      const blobFile = blobFiles[Math.floor(Math.random() * blobFiles.length)];
      
      let style = {};
      switch (position) {
        case 'top-left':
          style = {
            top: `${-20 + Math.random() * 30}px`,
            left: `${-30 + Math.random() * 40}px`,
            width: `${size}px`,
            height: `${size}px`,
            opacity: opacity
          };
          break;
        case 'top-right':
          style = {
            top: `${-20 + Math.random() * 30}px`,
            right: `${-30 + Math.random() * 40}px`,
            width: `${size}px`,
            height: `${size}px`,
            opacity: opacity
          };
          break;
        case 'bottom-left':
          style = {
            bottom: `${-20 + Math.random() * 30}px`,
            left: `${-30 + Math.random() * 40}px`,
            width: `${size}px`,
            height: `${size}px`,
            opacity: opacity
          };
          break;
        case 'bottom-right':
          style = {
            bottom: `${-20 + Math.random() * 30}px`,
            right: `${-30 + Math.random() * 40}px`,
            width: `${size}px`,
            height: `${size}px`,
            opacity: opacity
          };
          break;
      }
      
      return { style, blobFile };
    });
  });
  
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {blobConfigs.map((config, index) => (
        <img
          key={index}
          src={config.blobFile}
          alt=""
          className="absolute"
          style={config.style}
        />
      ))}
    </div>
  );
};

const testimonials = [
  {
    title: 'Best Platform for Freelance Opportunities!',
    quote: 'FreeHub gathered all my freelance job offers from different platforms in one place. Within just two weeks, I got two steady projects without wasting time on manual searching.',
    name: 'Ahmed Ali',
    role: 'Frontend Developer',
    avatar: '/assets/media/avatars/300-1.jpg',
  },
  {
    title: 'Smart Alerts and Real Opportunities',
    quote: 'I receive alerts for jobs that match my skills as soon as they\'re posted on freelance platforms. I no longer need to open each site separately - everything appears in one dashboard.',
    name: 'Sara Johnson',
    role: 'Content Writer',
    avatar: '/assets/media/avatars/300-2.jpg',
  },
  {
    title: 'Saves Time and Effort',
    quote: 'Instead of tracking dozens of platforms, FreeHub shows me the best opportunities with powerful filters and statistics about my rates and working hours. Planning my monthly income has become much clearer.',
    name: 'David Chen',
    role: 'Graphic Designer',
    avatar: '/assets/media/avatars/blank.png',
  },
];

const whyChooseFeatures = [
  {
    icon: Check,
    title: 'All Freelance Opportunities in One Place',
    description: 'FreeHub aggregates jobs, grants, and freelance opportunities from multiple global platforms and displays them in one simple interface.',
  },
  {
    icon: MessageCircle,
    title: 'Instant Alerts and Opportunities',
    description: 'Receive instant notifications when jobs matching your skills or field are posted, so you never miss an opportunity.',
  },
  {
    icon: Shield,
    title: 'Filter Reliable Jobs',
    description: 'We help you focus on serious clients through advanced filters for credibility, budget, and contract type.',
  },
  {
    icon: MapPin,
    title: 'Remote or Location-Based Opportunities',
    description: 'Choose between remote jobs or those specified by country/region according to your preferred working style.',
  },
  {
    icon: Settings,
    title: 'Flexible Dashboard',
    description: 'Adjust your preferences, work fields, and set a minimum rate so only the most suitable opportunities appear.',
  },
  {
    icon: Languages,
    title: 'Multi-Language and Market Support',
    description: 'Track jobs posted in different languages and markets, with an interface supporting multiple languages.',
  },
];

const howItWorksSteps = [
  {
    icon: Download,
    title: 'Download the App or Access from Browser',
    description: 'Start for free by downloading FreeHub or logging in from your browser, then connect your accounts on freelance platforms.',
    details: [
      'Access via browser or app',
      'Create an account in minutes',
      'Connect your accounts on freelance platforms',
      'Initial sync of job opportunities matching your field'
    ]
  },
  {
    icon: Settings,
    title: 'Set Up Your Professional Profile and Preferences',
    description: 'Define your skills and rates, and specify the types of projects you prefer so FreeHub can automatically suggest the best opportunities for you.',
    profileTypes: [
      { name: 'Personal Profile', icon: '👤', description: 'For individual users' },
      { name: 'Business Profile', icon: '🏢', description: 'For companies and organizations' },
      { name: 'Creator Profile', icon: '🎨', description: 'For content creators' },
      { name: 'Developer Profile', icon: '💻', description: 'For developers and tech professionals' }
    ],
    details: [
      'Choose account type (freelancer, small company, freelance team)',
      'Specify core skills and experience',
      'Add preferred rate ranges',
      'Customize job alerts by field and platform'
    ]
  },
  {
    icon: Rocket,
    title: 'Start Applying to the Best Opportunities',
    description: 'Use the dashboard to track your applications, save favorite jobs, and compare offers to achieve stable income.',
    details: [
      'Browse job opportunities from multiple platforms on one page',
      'Save jobs and get reminders for deadlines and applications',
      'Compare offers by budget, duration, and ratings',
      'Track your income statistics and sources over time'
    ]
  },
];

const productShots = [
  '/assets/media/preview/demos/demo1/light-ltr.png',
  '/assets/media/preview/demos/demo2/light-ltr.png',
  '/assets/media/preview/demos/demo4/light-ltr.png',
  '/assets/media/preview/demos/demo5/light-ltr.png',
];

const stats = [
  {
    icon: Briefcase,
    value: '30',
    suffix: '+',
    label: 'Integrated Freelance Platforms',
  },
  {
    icon: LineChart,
    value: '15',
    suffix: '+',
    label: 'Professional Work Fields',
  },
  {
    icon: ShoppingBasket,
    value: '500',
    suffix: '+',
    label: 'New Opportunities Daily',
  },
];

const CountUpNumber = ({ value, suffix }) => {
  const containerRef = useRef(null);
  const animationFrameRef = useRef(null);
  const [displayValue, setDisplayValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const element = containerRef.current;
    if (!element || hasAnimated) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return undefined;

    const targetValue = Number(value);
    if (Number.isNaN(targetValue)) {
      setDisplayValue(value);
      return undefined;
    }

    const duration = 1500;
    const startTimestamp = { current: null };

    const animate = (timestamp) => {
      if (startTimestamp.current === null) {
        startTimestamp.current = timestamp;
      }

      const progress = Math.min((timestamp - startTimestamp.current) / duration, 1);
      setDisplayValue(Math.round(progress * targetValue));

      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(animate);
      }
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [hasAnimated, value]);

  return (
    <div ref={containerRef} className="min-w-70px ">
      {displayValue}
      {suffix}
    </div>
  );
};

const projectTabs = [
  {
    id: 'latest',
    label: 'Latest Initiatives',
    isActive: true,
    blocks: [
      {
        type: 'large',
        image: '/assets/media/stock/600x600/img-23.jpg',
      },
      {
        type: 'grid',
        images: [
          '/assets/media/stock/600x600/img-22.jpg',
          '/assets/media/stock/600x600/img-21.jpg',
          '/assets/media/stock/600x600/img-20.jpg',
        ],
      },
    ],
  },
  {
    id: 'web_design',
    label: 'Digital Solutions',
    blocks: [
      {
        type: 'large',
        image: '/assets/media/stock/600x600/img-11.jpg',
      },
      {
        type: 'grid',
        images: [
          '/assets/media/stock/600x600/img-12.jpg',
          '/assets/media/stock/600x600/img-21.jpg',
          '/assets/media/stock/600x600/img-20.jpg',
        ],
      },
    ],
  },
  {
    id: 'mobile_apps',
    label: 'E-Channels',
    blocks: [
      {
        type: 'grid',
        images: [
          '/assets/media/stock/600x600/img-16.jpg',
          '/assets/media/stock/600x600/img-12.jpg',
          '/assets/media/stock/600x600/img-15.jpg',
        ],
      },
      {
        type: 'large',
        image: '/assets/media/stock/600x600/img-23.jpg',
      },
    ],
  },
  {
    id: 'development',
    label: 'Logistics Services',
    blocks: [
      {
        type: 'large',
        image: '/assets/media/stock/600x600/img-15.jpg',
      },
      {
        type: 'grid',
        images: [
          '/assets/media/stock/600x600/img-22.jpg',
          '/assets/media/stock/600x600/img-21.jpg',
          '/assets/media/stock/600x600/img-14.jpg',
        ],
      },
    ],
  },
];

const teamMembers = [
  { 
    name: 'أحمد المصطفى خضر عبدالقادر', 
    title: 'المدير العام', 
    image: 'assets/teams/1.jpeg',
    emails: ['ahmedalmustfakhider@magictechnology.net', 'ahmedalmustfakhider@gmail.com', 'ahmedalmustafakhider@hotmail.com'],
    phones: ['+249912339481', '+249123039481'],
    location: 'السودان - ولاية سنار - مدينة سنجه - الحي الشمالي جوار نادي النيل',
    description: 'خبير متميز في إدارة الأعمال والقطاع المصرفي مع خبرة واسعة وطويلة الأمد في بنك الأسرة، حيث تدرج إلى منصب مدير فرع. حاصل على ماجستير في إدارة الأعمال (MBA) من جامعة سنار. يحمل صفة التوقيع الأول الفئة (أ) في البنك منذ مايو 2012. تم تقييمه كأفضل مدير فرع للأعوام 2016، 2017، و2018، وحقق خروجاً بتعثر صفري منذ عام 2018.',
    positions: [
      {
        role: 'مدير بنك الأسرة فرع سنجة',
        company: 'بنك الأسرة',
        period: '2023–الآن',
        details: 'المنصب الحالي - من 13 فبراير 2023 وحتى الآن'
      },
      {
        role: 'مدير بنك الأسرة فرع سنار',
        company: 'بنك الأسرة',
        period: '2019–2023',
        details: 'من 16 يونيو 2019 وحتى 12 فبراير 2023'
      },
      {
        role: 'مدير بنك الأسرة فرع مدني',
        company: 'بنك الأسرة',
        period: '2014–2019',
        details: 'من 02 يونيو 2014 وحتى 15 يونيو 2019'
      },
      {
        role: 'رئيس أقسام متعددة',
        company: 'بنك الأسرة',
        period: '2009–2014',
        details: 'رئيس قسم الإستثمار والتمويل، الحسابات الجارية، الحسابات العامة، الصرافين والخزينة، المقاصة والخدمات الإلكترونية، والإدخال والمعلومات'
      },
      {
        role: 'مسؤول المكتب التنفيذي',
        company: 'منظمة التواصل للرعاية الاجتماعية',
        period: '2008–2009',
        details: 'من ديسمبر 2008 حتى سبتمبر 2009'
      }
    ],
    skills: {
      'الإدارة والمالية والمصرفية': [
        'إدارة العمل المصرفي والمالي وإدارة الموارد البشرية وقياس رأس المال وإدارة المخاطر ووضع خطط التسويق والاستراتيجيات وإدارة الجودة الشاملة وإجادة المصطلحات البنكية والمصرفية والمالية باللغة الإنجليزية'
      ],
      'التواصل والمهارات الشخصية': [
        'مهارات دبلوماسية وعلاقات ممتازة والتفاوض والتواصل السريع والواضح والقدرة على التأقلم والاندماج مع الثقافات المختلفة وتحمل ضغوط العمل والعمل كفريق والمحافظة على تعامل ممتاز وراقي مع العملاء'
      ],
      'المهارات التقنية': [
        'إجادة استخدام الكمبيوتر والتقنيات الحديثة وكتابة التقارير والأرشفة الإلكترونية وإدارة قواعد البيانات'
      ],
      'حل المشكلات والقيادة': [
        'مهارة حل المشاكل ودرء النزاعات واتخاذ القرارات الاستراتيجية وقيادة الفرق وتحقيق الأهداف'
      ]
    }
  },
  { 
    name: 'ابتسام بشير محمد عبدالمعبود', 
    title: 'رئيس مجلس الادارة', 
    image: 'assets/teams/2.jpeg',
    description: 'قائدة استراتيجية متخصصة في الحوكمة المؤسسية والتخطيط طويل المدى والتسويق. تتمتع بخبرة عميقة في إدارة المخاطر واتخاذ القرارات الاستراتيجية التي تحقق النمو المستدام. تتميز بمهارات متقدمة في التسويق الرقمي والتخطيط الاستراتيجي.',
    positions: [
      {
        role: 'مدير التسويق',
        company: 'شركة ماجيك تكنولوجي',
        period: '2020–الآن',
        details: 'المنصب الحالي - إدارة استراتيجيات التسويق والتخطيط طويل المدى'
      },
      {
        role: 'رئيس مجلس الإدارة',
        company: 'شركة ماجيك تكنولوجي',
        period: '2018–2020',
        details: 'قيادة مجلس الإدارة واتخاذ القرارات الاستراتيجية'
      },
      {
        role: 'مدير المشاريع',
        company: 'شركة ماجيك تكنولوجي',
        period: '2015–2018',
        details: 'إدارة المشاريع الكبرى وتطوير السياسات والإجراءات المؤسسية'
      },
      {
        role: 'مستشار استراتيجي',
        company: 'مستقل',
        period: '2012–2015',
        details: 'تقديم الاستشارات في التخطيط الاستراتيجي وإدارة المخاطر'
      },
      {
        role: 'محلل أعمال',
        company: 'شركات متعددة',
        period: '2010–2012',
        details: 'تحليل السوق ووضع الاستراتيجيات التنافسية'
      }
    ],
    skills: {
      'التخطيط الاستراتيجي وإدارة المخاطر': [
        'التخطيط الاستراتيجي طويل المدى وإدارة المخاطر واتخاذ القرارات الاستراتيجية التي تحقق النمو المستدام'
      ],
      'الحوكمة المؤسسية والإدارة': [
        'قيادة مجلس الإدارة وتطوير السياسات والإجراءات المؤسسية وإدارة المشاريع الكبرى'
      ],
      'التسويق والتواصل': [
        'التسويق الرقمي والتخطيط التسويقي والتواصل الفعال مع العملاء والشركاء'
      ],
      'التحليل والاستشارات': [
        'تحليل السوق ووضع الاستراتيجيات التنافسية وتقديم الاستشارات الاستراتيجية'
      ]
    }
  },
  { 
    name: 'سماح القطبى إدريس سعيد', 
    title: 'سكرتير مجلس الادارة', 
    image: 'assets/teams/3.jpeg',
    emails: ['samahalgotbi@gmail.com', 'samahalgotbi@hotmail.com'],
    phones: ['+249 912 176 601', '+249 912 339 481'],
    location: 'سنجة – السودان',
    description: 'محترفة متميزة في إدارة الأعمال والعمل المصرفي مع خبرة عملية تزيد عن عشرة أعوام في بنك الأسرة. تتمتع بمهارات متقدمة في خدمة العملاء والعمليات البنكية، مع قدرة استثنائية على تنظيم العمل وحل المشكلات المعقدة. حاصلة على ماجستير إدارة الأعمال، وتتميز بقدرتها على العمل بكفاءة عالية تحت الضغط مع الحفاظ على أعلى معايير الجودة والاحترافية.',
    positions: [
      {
        role: 'موظفة بنك',
        company: 'بنك الأسرة',
        period: '2014–الآن',
        details: 'خبرة في جميع الأقسام: العمليات، خدمة العملاء، الحسابات، التدقيق الداخلي.'
      },
      {
        role: 'متدربة',
        company: 'بنك السودان المركزي',
        period: '',
        details: 'معرفة بالإجراءات المصرفية الرسمية والنظم البنكية المركزية.'
      },
      {
        role: 'متدربة',
        company: 'وزارة المالية والتخطيط الاقتصادي',
        period: '',
        details: 'خبرة في إعداد التقارير والتخطيط الاقتصادي لمدة عام.'
      }
    ],
    skills: {
      'المهارات المصرفية والإدارية': [
        'خدمة العملاء والعمليات البنكية وكتابة التقارير وإدارة الموارد البشرية والجودة'
      ],
      'المهارات الشخصية والتواصل': [
        'حل المشكلات واتخاذ القرار وتنظيم المهام والعمل تحت الضغط والعمل كفريق'
      ],
      'المهارات التقنية': [
        'إجادة الحاسوب وإدخال البيانات والمصطلحات البنكية باللغة الإنجليزية'
      ],
      'الإدارة والتنظيم': [
        'تنظيم العمل وإدارة المهام بكفاءة عالية والحفاظ على معايير الجودة والاحترافية'
      ]
    }
  },
];

const businessFocusLines = [
  'التجارة والخدمات والاستثمار',
  'الاستيراد والتصدير والسياحة والفندقة',
  'الوساطة التجارية والإلكترونية',
  'المنتجات الزراعية والصناعية والنقل',
];

const contactNumbers = ['+249123039481', '+249912339481', '+249562822222'];
const contactEmails = ['info@magictechnology.net', 'Magictechnology.sdn@hotmail.com', 'Magictechnology.sdn@gmail.com'];
const website = 'www.magictechnology.net';
const addressArabic = 'ولاية سنار - سنجة شارع سنار - شمال نادي النيل - عقار رقم 25 مربع 31';
const addressEnglish = 'Sinnar State - Senga, Sinnar street - Northern Alneel club - Building no. 25 - Block no. 31';
const registrationCode = '228';

const projectImageSources = projectTabs.flatMap(({ blocks }) =>
  blocks.flatMap((block) => {
    if (block.type === 'large') {
      return [block.image];
    }
    if (block.type === 'grid') {
      return block.images;
    }
    return [];
  })
);

const MenuLinks = ({ className = '', onItemClick, menuId, transparent }) => (
  <nav
    className={`flex flex-col gap-2 text-sm font-semibold text-white md:flex-row md:items-center ${className}`}
    id={menuId}
  >
    {menuLinks.map(({ label, href, isActive }) => (
      <a
        key={href}
        href={href}
        onClick={onItemClick}
        className={`rounded-full px-4 py-2 transition-colors duration-150 ${
          isActive
            ? transparent
              ? 'text-white bg-white/20 shadow'
              : 'text-gray-900 shadow'
            : 'text-white/90 hover:text-[#1d83b3] hover:bg-white/10'
        }`}
        style={isActive && !transparent ? { backgroundColor: SECONDARY_COLOR } : {}}
      >
        {label}
      </a>
    ))}
  </nav>
);

const MenuToggleButton = ({ isOpen, onToggle }) => {
  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onToggle();
    }
  };

  return (
    <div
      className={`flex cursor-pointer items-center justify-center rounded-full border border-white/30 bg-white/10 p-2 text-white transition md:hidden ${
        isOpen ? 'ring-2 ring-[#1d83b3]' : ''
      }`}
      role="button"
      tabIndex={0}
      aria-label="Toggle menu"
      aria-expanded={isOpen}
      onClick={onToggle}
      onKeyDown={handleKeyDown}
    >
      <Menu aria-hidden="true" size={24} strokeWidth={2.2} />
    </div>
  );
};

const LandingHeader = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setScrolled] = useState(false);
  const menuWrapperRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) {
      return undefined;
    }

    const handleClickOutside = (event) => {
      if (menuWrapperRef.current && !menuWrapperRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen]);

  const transparent = !isScrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        transparent ? 'border-b border-transparent' : 'border-b'
      }`}
      style={{
        backgroundColor: transparent ? 'transparent' : STICKY_HEADER_BG,
        ...(transparent ? {} : { borderColor: 'rgba(255,255,255,0.08)' }),
      }}
    >
      {!transparent && (
        <div className="absolute bottom-0 right-0 w-64 h-64 pointer-events-none" style={{ background: 'linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.12) 100%)' }} />
      )}
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6 lg:px-8 relative z-10">
        <a href="/" className="flex items-center gap-2">
          <img alt="Logo" src="/assets/logo.png" className="h-10 w-auto" />
        </a>

        <div className="flex flex-1 items-center justify-end gap-4 md:justify-center">
          <div className="relative flex-shrink-0" ref={menuWrapperRef}>
            <MenuToggleButton isOpen={isMobileMenuOpen} onToggle={() => setMobileMenuOpen((prev) => !prev)} />

            {isMobileMenuOpen && (
              <div
                className="absolute right-0 top-12 z-50 w-[220px] max-w-[90vw] rounded-2xl border border-white/20 md:w-[240px]"
                style={{ backgroundColor: transparent ? 'rgba(0,13,26,0.95)' : STICKY_HEADER_BG }}
              >
                <MenuLinks onItemClick={() => setMobileMenuOpen(false)} transparent={transparent} />
              </div>
            )}
          </div>

          <div className="hidden flex-1 justify-center md:flex">
            <MenuLinks className="justify-center" menuId="kt_landing_menu" transparent={transparent} />
          </div>
        </div>

        <div className="hidden md:flex md:justify-end ml-4">
          <a
            href="https://play.google.com/store/apps/details?id=com.app.freelanceHub"
            className={`inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold shadow transition ${
              transparent ? 'text-white border-2 border-white/80 hover:bg-white/10' : 'text-gray-900'
            }`}
            style={transparent ? {} : { backgroundColor: SECONDARY_COLOR }}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.9'; }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; }}
          >
            Download Now
          </a>
        </div>
      </div>
    </header>
  );
};

const HeroSection = () => {
  return (
  <section
    className="relative flex w-full flex-col items-center overflow-hidden px-4 pt-12 pb-12 sm:px-6 lg:px-8"
    style={{
      background: HERO_GRADIENT,
      minHeight: 'calc(100vh - 5.5rem)',
    }}
  >
    {/* White gradient in bottom right */}
    <div className="absolute bottom-0 right-0 w-96 h-96 pointer-events-none" style={{ background: 'linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.03) 100%)' }}></div>
    {/* Floating Blobs */}
    <div className="absolute left-0 top-0 h-full w-full overflow-hidden">
      <img
        src="/assets/blob_white.svg"
        alt=""
        className="blob-float-3 absolute left-4 top-8 h-56 w-56 opacity-20 sm:h-72 sm:w-72 lg:left-12 lg:top-12 lg:h-96 lg:w-96"
        aria-hidden="true"
      />
      <img
        src="/assets/blob_1.svg"
        alt=""
        className="blob-float-4 absolute right-8 top-16 h-32 w-32 opacity-15 sm:right-12 sm:top-20 sm:h-40 sm:w-40 lg:right-20 lg:top-24 lg:h-48 lg:w-48"
        aria-hidden="true"
      />
    </div>

    {/* Two-column: content left, picture space right */}
    <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16 mt-20">
      {/* Left: content */}
      <div className="flex flex-col text-left">
        <h1 className="mb-4 text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
          Find the best freelance opportunities in one place with FreeHub.
        </h1>

        <p className="mb-8 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg lg:text-xl">
          FreeHub brings freelance jobs from multiple platforms into a single, simple dashboard with smart filters and instant alerts, helping you build a stable freelance career with confidence.
        </p>

        {/* Store download badges - icon + text, same row on all sizes */}
        <div className="flex flex-row flex-wrap items-center gap-3 sm:gap-4">
          <motion.a
            href="https://play.google.com/store/apps/details?id=com.app.freelanceHub"
            className="inline-flex items-center gap-3 overflow-hidden rounded-xl border border-white/20 bg-black/90 px-4 py-3 text-white shadow-lg transition hover:bg-black hover:border-white/30"
            whileHover={{ scale: 1.02, opacity: 0.95 }}
            whileTap={{ scale: 0.98 }}
          >
            <img
              src="/assets/paly.png"
              alt=""
              className="h-9 w-9 flex-shrink-0 object-contain"
              aria-hidden="true"
            />
            <div className="text-left">
              <span className="block text-[10px] leading-tight text-white/80">Get it on</span>
              <span className="block text-sm font-semibold leading-tight">Google Play</span>
            </div>
          </motion.a>
          <motion.a
            href="https://play.google.com/store/apps/details?id=com.app.freelanceHub"
            className="inline-flex items-center gap-3 overflow-hidden rounded-xl border border-white/20 bg-white/95 px-4 py-3 text-gray-900 shadow-lg transition hover:bg-white hover:border-white/40"
            whileHover={{ scale: 1.02, opacity: 0.95 }}
            whileTap={{ scale: 0.98 }}
          >
            <img
              src="/assets/store.png"
              alt=""
              className="h-9 w-9 flex-shrink-0 object-contain"
              aria-hidden="true"
            />
            <div className="text-left">
              <span className="block text-[10px] leading-tight text-gray-500">Download on the</span>
              <span className="block text-sm font-semibold leading-tight text-gray-900">App Store</span>
            </div>
          </motion.a>
        </div>
      </div>

      {/* Right: picture space — hero_3 (left) + hero_1 (center) + hero_2 (right), same bottom baseline */}
      <div className="flex items-end justify-center lg:justify-end lg:ml-auto">
        <div className="relative w-full max-w-lg lg:max-w-xl flex items-end overflow-visible">
          {/* hero_3 — left side, rotated -15deg from bottom, same baseline */}
          <div
            className="absolute left-0 bottom-0 z-0 w-[60%] overflow-visible"
            style={{
              transformOrigin: 'bottom center',
              transform: 'rotate(-15deg)',
            }}
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="/assets/hero_3.jpeg"
                alt="FreeHub projects"
                className="h-full w-full object-contain object-center"
              />
            </div>
          </div>
          {/* hero_1 — main, upright, bottom-aligned */}
          <div className="relative z-10 w-full aspect-[4/3] flex items-center justify-center min-h-[320px] sm:min-h-[380px]">
            <img
              src="/assets/hero_1.jpeg"
              alt="FreeHub app"
              className="h-full w-full object-contain object-center object-bottom"
            />
          </div>
          {/* hero_2 — right side, rotated 15deg from bottom, same baseline as hero_1 */}
          <div
            className="absolute right-0 bottom-0 z-0 w-[60%] overflow-visible"
            style={{
              transformOrigin: 'bottom center',
              transform: 'rotate(15deg)',
            }}
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="/assets/hero_2.jpeg"
                alt="FreeHub notifications"
                className="h-full w-full object-contain object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

const StayConnectedSection = () => (
  <section className="relative z-20 bg-white pb-16 pt-16 lg:pb-24" id="features">
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="mb-3 text-3xl font-extrabold text-gray-900 lg:text-5xl">
          All Freelance Opportunities on One Screen
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Instead of manually opening dozens of freelance sites, FreeHub gathers them all in one place, with smart search and filtering tools that help you reach the best opportunities with minimal time and effort.
        </p>
      </motion.div>

      {/* Three-column layout: feature cards – phone mockup – feature cards */}
      <div className="grid gap-8 lg:grid-cols-3 lg:items-center">
        {/* Left feature column */}
        <div className="space-y-4">
          {/* Top left card - slightly narrower - from left */}
          <motion.div
            className="w-[85%] ml-auto rounded-2xl border border-[#1d83b3]/20 bg-white shadow-[0_4px_12px_rgba(17,63,103,0.12)]"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0 }}
          >
            <div className="flex h-full items-center gap-4 rounded-2xl px-5 py-4">
              <div className="flex-shrink-0">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1d83b3] to-[#156a8f] shadow-md">
                  <Briefcase className="h-5 w-5 text-white" />
                </div>
              </div>
              <div className="text-left">
                <h3 className="text-xs font-semibold text-gray-900">
                  Jobs from Multiple Platforms
                </h3>
                <p className="mt-1 text-[10px] text-gray-600 leading-relaxed">
                  Track the latest freelance opportunities from major global platforms without manually switching between them.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Middle left card - slightly inset from center with right margin - from right */}
          <motion.div
            className="w-[95%] ml-auto mr-4 rounded-2xl border border-[#1d83b3]/20 bg-white shadow-[0_4px_12px_rgba(17,63,103,0.12)]"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="flex h-full items-center gap-4 rounded-2xl px-5 py-4">
              <div className="flex-shrink-0">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1d83b3] to-[#156a8f] shadow-md">
                  <Bell className="h-5 w-5 text-white" />
                </div>
              </div>
              <div className="text-left">
                <h3 className="text-base font-semibold text-gray-900">
                  Instant Alerts for Matching Opportunities
                </h3>
                <p className="mt-1 text-xs text-gray-600 leading-relaxed">
                  Don't miss new opportunities; receive instant notifications when jobs matching your skills and field are posted.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Bottom left card - slightly narrower - from left */}
          <motion.div
            className="w-[85%] ml-auto rounded-2xl border border-[#1d83b3]/20 bg-white shadow-[0_4px_12px_rgba(17,63,103,0.12)]"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <div className="flex h-full items-center gap-4 rounded-2xl px-5 py-4">
              <div className="flex-shrink-0">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1d83b3] to-[#156a8f] shadow-md">
                  <Filter className="h-5 w-5 text-white" />
                </div>
              </div>
              <div className="text-left">
                <h3 className="text-xs font-semibold text-gray-900">
                  Advanced Search Filters
                </h3>
                <p className="mt-1 text-[10px] text-gray-600 leading-relaxed">
                  Use filters by budget, contract type, project duration, or required experience to reach the best opportunities.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Center phone mockup */}
        <motion.div
          className="relative mx-auto flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative flex items-center justify-center">
            {/* Soft glow behind everything */}
            <div className="absolute -z-30 h-80 w-80 rounded-full bg-[#1d83b3]/10 blur-3xl" />

            {/* First circle around the phone (primary color) */}
            <div className="absolute -z-20 h-[280px] w-[280px] rounded-full border-2 border-[#1d83b3]/40" />

            {/* Second larger circle (light background tone) */}
            <div className="absolute -z-10 h-[360px] w-[360px] rounded-full border border-[#1d83b3]/10 bg-[#f4f8fc]" />

            {/* Actual phone mockup — hero_1 */}
            <div className="relative z-10 h-[470px] w-[230px] rounded-[40px] bg-gradient-to-br from-[#1d83b3] to-[#156a8f] shadow-2xl">
              <div className="h-full w-full rounded-[32px] overflow-hidden bg-white">
                <img
                  src="/assets/hero_1.jpeg"
                  alt="FreeHub app"
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right feature column */}
        <div className="mt-4 space-y-4 lg:mt-0">
          {/* Top right card - slightly narrower - from right */}
          <motion.div
            className="w-[85%] mr-auto rounded-2xl border border-[#1d83b3]/20 bg-white shadow-[0_4px_12px_rgba(17,63,103,0.12)]"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0 }}
          >
            <div className="flex h-full items-center gap-4 rounded-2xl px-5 py-4">
              <div className="flex-shrink-0">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1d83b3] to-[#156a8f] shadow-md">
                  <ClipboardList className="h-5 w-5 text-white" />
                </div>
              </div>
              <div className="text-left">
                <h3 className="text-xs font-semibold text-gray-900">
                  Organize Job Offers in One Place
                </h3>
                <p className="mt-1 text-[10px] text-gray-600 leading-relaxed">
                  Organize applications and track the status of each job offer and submission date easily within one dashboard.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Middle right card - full width (100%) with margin away from center - from left */}
          <motion.div
            className="w-full ml-4 rounded-2xl border border-[#1d83b3]/20 bg-white shadow-[0_4px_12px_rgba(17,63,103,0.12)]"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="flex h-full items-center gap-4 rounded-2xl px-5 py-4">
              <div className="flex-shrink-0">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1d83b3] to-[#156a8f] shadow-md">
                  <User className="h-5 w-5 text-white" />
                </div>
              </div>
              <div className="text-left">
                <h3 className="text-base font-semibold text-gray-900">
                  Multiple Professional Profiles
                </h3>
                <p className="mt-1 text-xs text-gray-600 leading-relaxed">
                  Create multiple professional profiles (technical, creative, consulting...) and easily target different types of clients.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Bottom right card - slightly narrower - from right */}
          <motion.div
            className="w-[85%] mr-auto rounded-2xl border border-[#1d83b3]/20 bg-white shadow-[0_4px_12px_rgba(17,63,103,0.12)]"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <div className="flex h-full items-center gap-4 rounded-2xl px-5 py-4">
              <div className="flex-shrink-0">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1d83b3] to-[#156a8f] shadow-md">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
              </div>
              <div className="text-left">
                <h3 className="text-sm font-semibold text-gray-900">
                  Flexible Work from Anywhere
                </h3>
                <p className="mt-1 text-[11px] text-gray-600 leading-relaxed">
                  Work from anywhere and anytime, with full synchronization between phone and computer and save your favorite opportunities.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

const ConnectAnywhereSection = () => (
  <section className="relative z-20 bg-gray-50 pb-16 pt-16 lg:pb-24">
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="mb-3 text-3xl font-extrabold text-gray-900 lg:text-5xl">
          Stay Connected to Opportunities Anytime, Anywhere
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Access your freelance opportunities on the go with our mobile app. Get instant notifications, respond to opportunities quickly, and manage your freelance career from your smartphone or tablet.
        </p>
      </motion.div>

      {/* Layout: phone col-5, cards col-7 */}
      <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
        {/* Left phone mockup - col-5 */}
        <motion.div
          className="relative mx-auto flex justify-center lg:col-span-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative flex items-center justify-center">
            {/* Soft glow behind everything */}
            <div className="absolute -z-30 h-80 w-80 rounded-full bg-[#1d83b3]/10 blur-3xl" />

            {/* First circle around the phone (primary color) */}
            <div className="absolute -z-20 h-[280px] w-[280px] rounded-full border-2 border-[#1d83b3]/40" />

            {/* Second larger circle (light background tone) */}
            <div className="absolute -z-10 h-[360px] w-[360px] rounded-full border border-[#1d83b3]/10 bg-white" />

            {/* Actual phone mockup — hero_2 */}
            <div className="relative z-10 h-[470px] w-[230px] rounded-[40px] bg-gradient-to-br from-[#1d83b3] to-[#156a8f] shadow-2xl">
              <div className="h-full w-full rounded-[32px] overflow-hidden bg-white">
                <img
                  src="/assets/hero_2.jpeg"
                  alt="FreeHub notifications"
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right feature cards - col-7, stacked vertically */}
        <div className="space-y-4 lg:col-span-7">
          {/* First card - no margin left */}
          <motion.div
            className="rounded-2xl border border-[#1d83b3]/20 bg-white shadow-[0_10px_30px_rgba(17,63,103,0.08)]"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex h-full items-center gap-4 rounded-2xl px-5 py-4">
              <div className="flex-shrink-0">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1d83b3] to-[#156a8f] shadow-md">
                  <Smartphone className="h-5 w-5 text-white" />
                </div>
              </div>
              <div className="text-left">
                <h3 className="text-sm font-semibold text-gray-900">
                  Mobile App Access
                </h3>
                <p className="mt-1 text-xs text-gray-600 leading-relaxed">
                  Download our mobile app for iOS and Android to access your opportunities wherever you are, with full sync across all devices.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Second card - little margin left */}
          <motion.div
            className="ml-5 rounded-2xl border border-[#1d83b3]/20 bg-white shadow-[0_10px_30px_rgba(17,63,103,0.08)]"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex h-full items-center gap-4 rounded-2xl px-5 py-4">
              <div className="flex-shrink-0">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1d83b3] to-[#156a8f] shadow-md">
                  <PhoneCall className="h-5 w-5 text-white" />
                </div>
              </div>
              <div className="text-left">
                <h3 className="text-sm font-semibold text-gray-900">
                  Instant Notifications
                </h3>
                <p className="mt-1 text-xs text-gray-600 leading-relaxed">
                  Receive push notifications on your phone the moment new opportunities matching your profile are posted on any platform.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Third card - little margin left */}
          <motion.div
            className="ml-5 rounded-2xl border border-[#1d83b3]/20 bg-white shadow-[0_10px_30px_rgba(17,63,103,0.08)]"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex h-full items-center gap-4 rounded-2xl px-5 py-4">
              <div className="flex-shrink-0">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1d83b3] to-[#156a8f] shadow-md">
                  <Phone className="h-5 w-5 text-white" />
                </div>
              </div>
              <div className="text-left">
                <h3 className="text-sm font-semibold text-gray-900">
                  Quick Response
                </h3>
                <p className="mt-1 text-xs text-gray-600 leading-relaxed">
                  Respond to opportunities instantly from your phone. Apply, save, or share opportunities with just a few taps.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Fourth card - no margin left */}
          <motion.div
            className="rounded-2xl border border-[#1d83b3]/20 bg-white shadow-[0_10px_30px_rgba(17,63,103,0.08)]"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex h-full items-center gap-4 rounded-2xl px-5 py-4">
              <div className="flex-shrink-0">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1d83b3] to-[#156a8f] shadow-md">
                  <Zap className="h-5 w-5 text-white" />
                </div>
              </div>
              <div className="text-left">
                <h3 className="text-sm font-semibold text-gray-900">
                  Offline Mode
                </h3>
                <p className="mt-1 text-xs text-gray-600 leading-relaxed">
                  Access saved opportunities even without internet connection. Your data syncs automatically when you're back online.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

const ConnectAnywhereReversedSection = () => (
  <section className="relative z-20 bg-white pb-16 pt-16 lg:pb-24">
    <BlobDecorator count={2} />
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="mb-3 text-3xl font-extrabold text-gray-900 lg:text-5xl">
          Manage Your Freelance Career on the Go
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Take control of your freelance opportunities wherever you are. Our powerful mobile platform keeps you connected to the best projects and helps you grow your freelance business seamlessly.
        </p>
      </motion.div>

      {/* Layout: cards col-7, phone col-5 (reversed) */}
      <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
        {/* Left feature cards - col-7 */}
        <div className="space-y-4 lg:col-span-7 order-1">
          {/* First card - full width */}
          <motion.div
            className="rounded-2xl border border-[#1d83b3]/20 bg-white shadow-[0_10px_30px_rgba(17,63,103,0.08)]"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex h-full items-center gap-4 rounded-2xl px-5 py-4">
              <div className="flex-shrink-0">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1d83b3] to-[#156a8f] shadow-md">
                  <Rocket className="h-5 w-5 text-white" />
                </div>
              </div>
              <div className="text-left">
                <h3 className="text-sm font-semibold text-gray-900">
                  Fast Application Process
                </h3>
                <p className="mt-1 text-xs text-gray-600 leading-relaxed">
                  Apply to opportunities in seconds with pre-filled templates and quick submission forms. Never miss a deadline again.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Second card - little margin right */}
          <motion.div
            className="mr-5 rounded-2xl border border-[#1d83b3]/20 bg-white shadow-[0_10px_30px_rgba(17,63,103,0.08)]"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex h-full items-center gap-4 rounded-2xl px-5 py-4">
              <div className="flex-shrink-0">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1d83b3] to-[#156a8f] shadow-md">
                  <LineChart className="h-5 w-5 text-white" />
                </div>
              </div>
              <div className="text-left">
                <h3 className="text-sm font-semibold text-gray-900">
                  Track Your Progress
                </h3>
                <p className="mt-1 text-xs text-gray-600 leading-relaxed">
                  Monitor your applications, track your success rate, and analyze your freelance performance with detailed statistics and insights.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Third card - little margin right */}
          <motion.div
            className="mr-5 rounded-2xl border border-[#1d83b3]/20 bg-white shadow-[0_10px_30px_rgba(17,63,103,0.08)]"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex h-full items-center gap-4 rounded-2xl px-5 py-4">
              <div className="flex-shrink-0">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1d83b3] to-[#156a8f] shadow-md">
                  <Shield className="h-5 w-5 text-white" />
                </div>
              </div>
              <div className="text-left">
                <h3 className="text-sm font-semibold text-gray-900">
                  Secure & Private
                </h3>
                <p className="mt-1 text-xs text-gray-600 leading-relaxed">
                  Your data is encrypted and secure. We protect your personal information and ensure your freelance activities remain private.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Fourth card - full width */}
          <motion.div
            className="rounded-2xl border border-[#1d83b3]/20 bg-white shadow-[0_10px_30px_rgba(17,63,103,0.08)]"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex h-full items-center gap-4 rounded-2xl px-5 py-4">
              <div className="flex-shrink-0">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1d83b3] to-[#156a8f] shadow-md">
                  <Settings className="h-5 w-5 text-white" />
                </div>
              </div>
              <div className="text-left">
                <h3 className="text-sm font-semibold text-gray-900">
                  Customizable Settings
                </h3>
                <p className="mt-1 text-xs text-gray-600 leading-relaxed">
                  Personalize your experience with customizable filters, notification preferences, and dashboard layouts that suit your workflow.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right phone mockup - col-5 */}
        <motion.div
          className="relative mx-auto flex justify-center lg:col-span-5 order-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative flex items-center justify-center">
            {/* Soft glow behind everything */}
            <div className="absolute -z-30 h-80 w-80 rounded-full bg-[#1d83b3]/10 blur-3xl" />

            {/* First circle around the phone (primary color) */}
            <div className="absolute -z-20 h-[280px] w-[280px] rounded-full border-2 border-[#1d83b3]/40" />

            {/* Second larger circle (light background tone) */}
            <div className="absolute -z-10 h-[360px] w-[360px] rounded-full border border-[#1d83b3]/10 bg-gray-50" />

            {/* Actual phone mockup — hero_3 */}
            <div className="relative z-10 h-[470px] w-[230px] rounded-[40px] bg-gradient-to-br from-[#1d83b3] to-[#156a8f] shadow-2xl">
              <div className="h-full w-full rounded-[32px] overflow-hidden bg-white">
                <img
                  src="/assets/hero_3.jpeg"
                  alt="FreeHub app"
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const MoreProductivitySection = () => (
  <section className="relative bg-white pb-16 pt-16">
    <BlobDecorator count={2} />
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <motion.div
          className="relative order-2 lg:order-1"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative flex items-center justify-center">
            <div className="absolute -z-10 h-96 w-64 rounded-3xl bg-[#1d83b3]/20 blur-2xl"></div>
            <div className="relative z-10 transform -rotate-6">
              <div className="h-96 w-64 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-700 shadow-2xl p-4">
                <div className="h-full w-full rounded-2xl bg-slate-800 p-6">
                  <div className="space-y-4">
                    <div className="h-3 bg-[#1d83b3] rounded-full w-3/4"></div>
                    <div className="h-3 bg-[#1d83b3]/50 rounded-full w-2/3"></div>
                    <div className="h-20 bg-[#1d83b3]/20 rounded-lg"></div>
                    <div className="h-20 bg-[#1d83b3]/20 rounded-lg"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="order-1 lg:order-2"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-6 text-3xl font-extrabold text-gray-900 lg:text-4xl">
            More productivity with less effort
          </h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="mt-1 flex-shrink-0">
                <Check className="h-6 w-6 text-[#1d83b3]" />
              </div>
              <p className="text-gray-700">
                Manage your tasks and projects, set reminders, and track your progress.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-1 flex-shrink-0">
                <Check className="h-6 w-6 text-[#1d83b3]" />
              </div>
              <p className="text-gray-700">
                Collaborate with your team members, share files, and communicate effectively.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-1 flex-shrink-0">
                <Check className="h-6 w-6 text-[#1d83b3]" />
              </div>
              <p className="text-gray-700">
                Create and manage your events, send invitations, and track RSVPs.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-1 flex-shrink-0">
                <Check className="h-6 w-6 text-[#1d83b3]" />
              </div>
              <p className="text-gray-700">
                Access your data from anywhere, anytime, and on any device.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const MentionsSection = () => (
  <section className="relative bg-gray-50 py-16">
    <BlobDecorator count={2} />
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="mb-4 text-3xl font-extrabold text-gray-900 lg:text-4xl">
          Our Partners and Opportunity Sources
        </h2>
        <p className="text-lg text-gray-600">
          We rely on popular and trusted platforms for freelancing and startups, and we continuously work on adding new sources to expand your opportunities.
        </p>
      </motion.div>
      <div className="flex flex-wrap items-center justify-center gap-8">
        {partnerLogos.map(({ title, src }, index) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="opacity-60 hover:opacity-100 transition"
          >
            <img src={src} alt={title} className="h-12 w-auto" />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const HowItWorksSection = () => (
  <section className="py-20 relative overflow-hidden" style={{ background: HERO_GRADIENT }} id="how-it-works">
    <div className="absolute bottom-0 right-0 w-96 h-96 pointer-events-none" style={{ background: 'linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.03) 100%)' }}></div>
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="mb-4 text-3xl font-extrabold text-white lg:text-4xl">
          How FreeHub Works to Bring You Freelance Opportunities
        </h2>
        <p className="text-lg text-white/90 max-w-3xl mx-auto">
          From creating an account and connecting freelance platforms, to receiving smart alerts and tracking your applications, FreeHub is designed to simplify your journey to finding consistent freelance work.
        </p>
      </motion.div>
      <div className="grid gap-12 md:grid-cols-3">
        {howItWorksSteps.map(({ icon: Icon, title, description, details, profileTypes }, index) => (
          <motion.div
            key={title}
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-white/20 backdrop-blur shadow-lg">
              <Icon className="h-12 w-12 text-white" />
            </div>
            <h3 className="mb-3 text-2xl font-bold text-white">{title}</h3>
            <p className="mb-6 text-white/90 text-sm leading-relaxed max-w-xs">
              {description}
            </p>
            
            {/* Profile Types for Setup Profile step */}
           
            
          
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const StatisticsSection = () => (
  <section className="relative overflow-hidden bg-slate-950 py-16 text-center text-slate-50 lg:py-24 section-dark" id="achievements">
    {/* Floating Blobs */}
    <div className="absolute left-0 top-0 h-full w-full overflow-hidden">
      {/* Top left - big blob (white_2) */}
      <img
        src="/assets/blob_white_2.svg"
        alt=""
        className="stats-blob-float-3 absolute left-4 top-12 h-48 w-48 opacity-25 sm:h-64 sm:w-64 lg:left-12 lg:top-16 lg:h-80 lg:w-80"
        aria-hidden="true"
      />
      
      {/* Top right - small blob (purple) */}
      <img
        src="/assets/blob_1.svg"
        alt=""
        className="stats-blob-float-4 absolute right-8 top-20 h-32 w-32 opacity-20 sm:right-12 sm:top-24 sm:h-40 sm:w-40 lg:right-20 lg:top-28 lg:h-48 lg:w-48"
        aria-hidden="true"
      />
      
      {/* Middle left - medium blob (purple) */}
      <img
        src="/assets/blob_1.svg"
        alt=""
        className="stats-blob-float-1 absolute left-8 top-1/2 h-40 w-40 opacity-25 sm:h-56 sm:w-56 lg:left-16 lg:top-1/2 lg:h-72 lg:w-72"
        aria-hidden="true"
      />
      
      {/* Bottom right - medium blob (white) */}
      <img
        src="/assets/blob_white.svg"
        alt=""
        className="stats-blob-float-2 absolute right-4 bottom-16 h-44 w-44 opacity-20 sm:right-8 sm:bottom-20 sm:h-60 sm:w-60 lg:right-16 lg:bottom-24 lg:h-76 lg:w-76"
        aria-hidden="true"
      />
    </div>

    <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <motion.div 
        className="mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="section-heading-wrapper">
          <h3 className="mb-4 text-3xl font-extrabold section-heading-text">
            Making a Difference for Freelancers and Business Owners
          </h3>
          <div className="section-heading-underline">
            <div className="section-heading-line"></div>
            <div className="section-heading-purple-segment"></div>
            <div className="section-heading-line"></div>
          </div>
        </div>
        <p className="mx-auto max-w-3xl text-base font-medium text-slate-300 sm:text-lg">
            We keep pace with the evolution of the freelance market by connecting you to trusted platforms, and provide practical tools that support the growth of your income and the stability of your projects in local and global markets.
        </p>
      </motion.div>

      <div className="flex justify-center">
        <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-8">
            {stats.map(({ icon: Icon, value, suffix, label }, index) => (
              <motion.div
                className="relative flex h-52 w-52 flex-col items-center justify-center rounded-[3rem] border border-[#1d83b3]/30 bg-gradient-to-b from-slate-900/60 to-slate-900/20 shadow-lg"
                key={label}
                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <Icon className="mb-3 text-[#1d83b3]" size={34} strokeWidth={1.8} aria-hidden="true" />

                <div className="mb-0 text-center">
                  <div className="flex items-baseline justify-center text-3xl font-extrabold tracking-tight lg:text-4xl">
                    <CountUpNumber value={value} suffix={suffix} />
                  </div>
                  <span className="mt-1 block text-sm font-semibold text-slate-300">
                    {label}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
      </div>

      <motion.p 
        className="mt-10 text-lg font-semibold text-slate-300"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <span className="mx-1 text-2xl leading-none text-[#1d83b3]">"</span>
        We put the trust of our freelance partners and business owners at the forefront of our priorities, and transform the time you spend searching into real, measurable, and developable work opportunities.
        <span className="mx-1 text-2xl leading-none text-[#1d83b3]">"</span>
      </motion.p>
      <motion.div 
        className="mt-3"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <a href="#" className="text-sm font-bold text-[#1d83b3] hover:text-[#4aa3c7]">
            Magic Technology Board of Directors
          </a>
      </motion.div>
    </div>
  </section>
);

const TeamSection = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4500,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    cssEase: 'ease-in-out',
  };

  return (
    <section className="relative bg-slate-50 py-16 lg:py-24 section-white" id="team">
      <BlobDecorator count={2} />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="mb-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-heading-wrapper">
            <h3 className="mb-4 text-3xl font-extrabold section-heading-text">
              Magic Technology Team
            </h3>
            <div className="section-heading-underline">
              <div className="section-heading-line section-heading-line-left"></div>
              <div className="section-heading-purple-segment"></div>
              <div className="section-heading-line section-heading-line-right"></div>
            </div>
          </div>
          <p className="mx-auto max-w-3xl text-base font-medium text-slate-600 sm:text-lg">
            An elite group of experts in digital commerce, freelancing, and electronic brokerage working with one spirit to provide practical solutions that support the growth of your income and the stability of your freelance journey.
          </p>
        </motion.div>

        <div className="pb-8 md:pb-12">
          <Slider {...sliderSettings} className="team-slider">
          {teamMembers.map(({ name, title, image, description, preferences, experiences, positions, skills, email, emails, phone, phones, location }) => {
            // Support both single and multiple emails/phones
            const emailList = emails || (email ? [email] : []);
            const phoneList = phones || (phone ? [phone] : []);
            return (
            <div key={name} className="px-2 pb-6 md:pb-10">
              <motion.div 
                className="relative flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-slate-200 md:flex-row"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {/* Floating Blob Decorations */}
                <div className="absolute left-0 top-0 h-full w-full overflow-hidden pointer-events-none">
                  <img
                    src="/assets/blob_1.svg"
                    alt=""
                    className="absolute -right-8 -top-8 h-32 w-32 opacity-20 sm:h-40 sm:w-40 md:-right-12 md:-top-12 md:h-48 md:w-48 lg:h-56 lg:w-56"
                    aria-hidden="true"
                  />
                  <img
                    src="/assets/blob_1.svg"
                    alt=""
                    className="absolute -left-8 -bottom-8 h-28 w-28 opacity-15 sm:h-36 sm:w-36 md:-left-12 md:-bottom-12 md:h-44 md:w-44 lg:h-52 lg:w-52"
                    aria-hidden="true"
                  />
                  <img
                    src="/assets/blob_1.svg"
                    alt=""
                    className="absolute right-1/4 top-1/2 h-24 w-24 opacity-10 sm:h-32 sm:w-32 md:h-40 md:w-40 lg:h-48 lg:w-48"
                    aria-hidden="true"
                  />
                </div>
                {/* Right Side - Picture and Heading (RTL: right side) */}
                <div className="relative z-10 flex flex-col items-center justify-start bg-gradient-to-br from-slate-50 to-slate-100 p-8 md:w-80 md:p-10 md:items-start md:justify-start md:order-2">
                  {/* Picture at top */}
                  <div className="mb-4 h-48 w-48 overflow-hidden rounded-2xl border-4 border-white shadow-lg md:h-56 md:w-56">
                    <img src={image} alt={name} className="h-full w-full object-cover" />
                  </div>
                  
                  {/* Name and Title */}
                  <div className="text-center md:text-left w-full mb-4">
                    <h4 className="mb-2 text-xl font-bold text-slate-900">{name}</h4>
                    <p className="text-base font-semibold text-[#1d83b3]">{title}</p>
                  </div>
                  
                  {/* Contact Info */}
                  {(emailList.length > 0 || phoneList.length > 0 || location) && (
                    <div className="w-full space-y-3 text-center md:text-left">
                      {/* Email(s) */}
                      {emailList.length > 0 && (
                        <div className="space-y-1">
                          <span className="text-xs font-semibold text-slate-500 block mb-1">Email:</span>
                          {emailList.map((email, index) => {
                            const emailName = email.split('@')[0];
                            return (
                              <a key={index} href={`mailto:${email}`} className="block text-sm text-slate-600 hover:text-[#1d83b3] transition">
                                📧 {emailName}
                              </a>
                            );
                          })}
                        </div>
                      )}
                      
                      {/* Phone(s) */}
                      {phoneList.length > 0 && (
                        <div className="space-y-1">
                          <span className="text-xs font-semibold text-slate-500 block mb-1">Phone:</span>
                          {phoneList.map((phone, index) => (
                            <a key={index} href={`tel:${phone.replace(/\s/g, '')}`} className="block text-sm text-slate-600 hover:text-[#1d83b3] transition">
                              📞 {phone}
                            </a>
                          ))}
                        </div>
                      )}
                      
                      {/* Location */}
                      {location && (
                        <div className="space-y-1">
                          <span className="text-xs font-semibold text-slate-500 block mb-1">Location:</span>
                          <span className="block text-sm text-slate-600">
                            📍 {location}
                          </span>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Left Side - Description, Preferences and Experiences (RTL: left side) */}
                <div className="relative z-10 flex-1 p-8 md:p-10 lg:p-12 md:order-1">
                  {/* Description/Overview Section */}
                  {description && (
                    <div className="mb-6 border-b border-slate-200 pb-6">
                      <h5 className="mb-3 flex items-center gap-2 text-base font-bold text-slate-900">
                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-100 text-blue-600 flex-shrink-0">
                          📋
                        </span>
                        <span className="flex-1">Overview</span>
                      </h5>
                      <p className="text-sm leading-relaxed text-slate-600 md:text-base">
                        {description}
                      </p>
                    </div>
                  )}
                  
                  {/* Conditional rendering: Positions & Skills OR Preferences & Experiences */}
                  {positions && skills ? (
                    <div className="space-y-6">
                      {/* Positions Section - Timeline */}
                      <div>
                        <h5 className="mb-4 flex items-center gap-2 text-lg font-bold text-slate-900">
                          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 flex-shrink-0">
                            🏢
                          </span>
                          <span className="flex-1">Positions</span>
                        </h5>
                        <div className="relative pl-4 pb-4">
                          {/* Vertical Timeline Line */}
                          <div className="absolute left-2 top-0 -bottom-4 w-0.5 bg-emerald-300"></div>
                          
                          <div className="space-y-3">
                            {positions.map((position, index) => {
                              const year = position.period ? position.period.split('–')[0] : '';
                              return (
                                <div key={index} className="relative flex items-start gap-2">
                                  {/* Timeline Point */}
                                  <div className="relative z-10 flex-shrink-0">
                                    <div className="h-4 w-4 rounded-full bg-emerald-500 border-2 border-white shadow"></div>
                                  </div>
                                  
                                  {/* Content */}
                                  <div className="flex-1 bg-slate-50 rounded-lg p-3 border-l-2 border-emerald-500">
                                    {/* Year and Role */}
                                    <div className="flex items-baseline gap-2 mb-1">
                                      {year && (
                                        <span className="text-xs font-bold text-emerald-600 whitespace-nowrap">
                                          {year}
                                        </span>
                                      )}
                                      <h6 className="text-sm font-bold text-slate-900">{position.role}</h6>
                                    </div>
                                    
                                    {/* Company */}
                                    <p className="text-xs font-semibold text-[#1d83b3] mb-1">{position.company}</p>
                                    
                                    {/* Details */}
                                    <p className="text-xs text-slate-600 leading-relaxed">{position.details}</p>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>

                      {/* Skills Section */}
                      <div>
                        <h5 className="mb-4 flex items-center gap-2 text-lg font-bold text-slate-900">
                          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-100 text-indigo-600 flex-shrink-0">
                            🎯
                          </span>
                          <span className="flex-1">Skills</span>
                        </h5>
                        <div className="space-y-5">
                          {Object.entries(skills).map(([category, skillList], categoryIndex) => (
                            <div key={categoryIndex}>
                              <h6 className="mb-3 text-sm font-bold text-slate-800 border-b border-slate-200 pb-2">
                                {category}:
                              </h6>
                              <ul className="space-y-2">
                                {skillList.map((skill, skillIndex) => (
                                  <li key={skillIndex} className="flex items-start gap-3">
                                    <span className="mt-0.5 h-2 w-2 flex-shrink-0 rounded-full bg-indigo-500"></span>
                                    <span className="text-sm font-medium text-slate-700">{skill}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="grid h-full gap-6 md:grid-cols-2">
                      {/* Preferences Section - Right column in RTL */}
                      <div className="md:order-2">
                        <h5 className="mb-4 flex items-center gap-2 text-lg font-bold text-slate-900">
                          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1d83b3]/20 text-[#1d83b3] flex-shrink-0">
                            ⭐
                          </span>
                          <span className="flex-1">Specializations and Interests</span>
                        </h5>
                        <ul className="space-y-3">
                          {preferences?.map((pref, index) => (
                            <li key={index} className="flex items-start gap-3">
                              <span className="mt-0.5 h-2 w-2 flex-shrink-0 rounded-full bg-[#1d83b3]"></span>
                              <span className="text-sm font-medium text-slate-700">{pref}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Experiences Section - Left column in RTL */}
                      <div className="md:order-1">
                        <h5 className="mb-4 flex items-center gap-2 text-lg font-bold text-slate-900">
                          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-100 text-purple-600 flex-shrink-0">
                            💼
                          </span>
                          <span className="flex-1">Experiences and Achievements</span>
                        </h5>
                        <ul className="space-y-3">
                          {experiences?.map((exp, index) => (
                            <li key={index} className="flex items-start gap-3">
                              <span className="mt-0.5 h-2 w-2 flex-shrink-0 rounded-full bg-purple-500"></span>
                              <span className="text-sm font-medium text-slate-700">{exp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
            );
          })}
          </Slider>
        </div>
      </div>
    </section>
  );
};

const ProjectBlock = ({ type, image, images = [], index = 0 }) => {
  if (type === 'large') {
    return (
      <motion.div 
        className="lg:col-span-3"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
      >
        <motion.div 
          className="group relative h-full overflow-hidden rounded-3xl"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <img
            src={image}
            alt=""
            className="h-full min-h-[260px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="pointer-events-none absolute inset-0 bg-slate-950/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </motion.div>
      </motion.div>
    );
  }

  return (
    <motion.div 
      className="lg:col-span-3"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div className="mb-4 grid gap-4 md:grid-cols-2">
        {images.slice(0, 2).map((img, idx) => (
          <motion.div 
            className="overflow-hidden rounded-3xl" 
            key={img}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={img}
              alt=""
              className="h-60 w-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </motion.div>
        ))}
      </div>
      {images[2] && (
        <motion.div 
          className="overflow-hidden rounded-3xl"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <img
            src={images[2]}
            alt=""
            className="h-60 w-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </motion.div>
      )}
    </motion.div>
  );
};

const ProjectsSection = () => (
  <section className="relative z-20 bg-white pb-20 pt-16 lg:pb-24 section-white" id="portfolio">
    <BlobDecorator count={3} />
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <div className="rounded-3xl bg-white/90 p-6 shadow-xl ring-1 ring-slate-100 sm:p-10 lg:p-12">
        <motion.div 
          className="mb-8 text-center lg:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-heading-wrapper">
            <h3 className="mb-4 text-3xl font-extrabold section-heading-text">
              Selected Initiatives and Projects
            </h3>
            <div className="section-heading-underline">
              <div className="section-heading-line section-heading-line-left"></div>
              <div className="section-heading-purple-segment"></div>
              <div className="section-heading-line section-heading-line-right"></div>
            </div>
          </div>
        </motion.div>

        <div className="mb-8 flex justify-center lg:mb-10">
          <div className="inline-flex gap-2 rounded-full bg-slate-100 p-1 text-sm font-semibold text-slate-500">
            {projectTabs.map(({ id, label, isActive }) => (
              <button
                key={id}
                type="button"
                className={`rounded-full px-4 py-2 transition-colors ${
                  isActive ? 'bg-white text-[#1d83b3] shadow' : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <div className="tab-content">
          {projectTabs.map(({ id, isActive, blocks }) => (
            <div
              key={id}
              id={`kt_landing_projects_${id}`}
              className={isActive ? 'block' : 'hidden'}
            >
              <div className="grid gap-6 lg:grid-cols-6">
                {blocks.map((block, index) => (
                  <ProjectBlock key={`${id}-${index}`} {...block} index={index} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const TestimonialsSection = () => (
  <section className="relative bg-white py-20" id="testimonials">
    <BlobDecorator count={2} />
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="mb-4 text-3xl font-extrabold text-gray-900 lg:text-4xl">
          What Our Users Say
        </h2>
        <p className="text-lg text-gray-600">
          Learn about the experiences of freelancers and business owners who use FreeHub to find better opportunities and organize their freelance work.
        </p>
      </motion.div>
      <div className="grid gap-8 md:grid-cols-3">
        {testimonials.map(({ title, quote, name, role, avatar }, index) => (
          <motion.div
            key={title}
            className="rounded-2xl bg-white p-6 shadow-lg border border-gray-100"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="mb-4 flex gap-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-xl">★</span>
              ))}
            </div>
            <h3 className="mb-3 text-lg font-bold text-gray-900">{title}</h3>
            <p className="mb-6 text-gray-600">{quote}</p>
            <div className="flex items-center gap-3">
              <img src={avatar} alt={name} className="h-12 w-12 rounded-full object-cover" />
              <div>
                <p className="font-semibold text-gray-900">{name}</p>
                <p className="text-sm text-gray-500">{role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const WhyChooseSection = () => (
  <section className="relative bg-gray-50 py-20">
    <BlobDecorator count={2} />
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="mb-4 text-3xl font-extrabold text-gray-900 lg:text-4xl">
          Why Choose FreeHub to Manage Your Freelance Work?
        </h2>
        <p className="text-lg text-gray-600">
          FreeHub is specifically designed for freelancers and business owners who want to manage their opportunities from multiple platforms in one simple and smart interface.
        </p>
      </motion.div>
      <div className="grid gap-8 md:grid-cols-3">
        {whyChooseFeatures.map(({ icon: Icon, title, description }, index) => (
          <motion.div
            key={title}
            className="rounded-2xl bg-white p-6 shadow-md"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#1d83b3]/10">
              <Icon className="h-6 w-6 text-[#1d83b3]" />
            </div>
            <h3 className="mb-2 text-lg font-bold text-gray-900">{title}</h3>
            <p className="text-gray-600">{description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const InterfaceSection = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  const screenshots = [
    {
      id: 1,
      title: 'Dark Theme',
      bg: 'bg-slate-900',
      content: (
        <div className="p-4 space-y-4">
          <div className="h-8 bg-slate-700 rounded"></div>
          <div className="h-32 bg-slate-800 rounded relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-20 bg-[#1d83b3] rounded-lg"></div>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="flex-1 h-12 bg-slate-700 rounded"></div>
            <div className="flex-1 h-12 bg-slate-700 rounded"></div>
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: 'Trending',
      bg: 'bg-white',
      content: (
        <div className="p-4 space-y-3">
          <div className="h-10 bg-[#1d83b3]/10 rounded-lg flex items-center justify-center">
            <span className="text-[#1d83b3] font-semibold">Trending</span>
          </div>
          <div className="space-y-2">
            <div className="h-24 bg-gray-100 rounded-lg"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          </div>
          <div className="h-24 bg-gray-100 rounded-lg"></div>
        </div>
      )
    },
    {
      id: 3,
      title: 'Activity',
      bg: 'bg-white',
      content: (
        <div className="p-4 space-y-3">
          <div className="h-32 bg-[#1d83b3]/10 rounded-lg relative">
            <div className="absolute top-2 right-2 bg-[#1d83b3] text-white text-xs px-2 py-1 rounded">28,34m</div>
          </div>
          <div className="h-8 bg-gray-100 rounded"></div>
          <div className="h-12 bg-gray-100 rounded"></div>
        </div>
      )
    },
    {
      id: 4,
      title: 'Sign In',
      bg: 'bg-white',
      content: (
        <div className="p-4 space-y-4">
          <div className="h-20 w-20 mx-auto bg-gray-200 rounded-full"></div>
          <div className="space-y-3">
            <div className="h-12 bg-gray-100 rounded-lg"></div>
            <div className="h-12 bg-gray-100 rounded-lg"></div>
            <div className="h-12 bg-[#1d83b3] rounded-lg"></div>
          </div>
          <div className="h-4 bg-gray-200 rounded w-2/3 mx-auto"></div>
        </div>
      )
    }
  ];

  return (
    <section id="screenshots" className="relative bg-white py-20">
      <BlobDecorator count={2} />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 text-3xl font-extrabold text-gray-900 lg:text-4xl">
            Simple Interface to Organize All Your Freelance Opportunities
          </h2>
          <div className="flex items-center justify-center mb-4">
            <div className="h-1 w-20 bg-[#1d83b3]"></div>
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A clean interface that helps you review jobs, save important opportunities, and track applications easily from any device.
          </p>
        </motion.div>
        <div className="max-w-7xl mx-auto">
          <Slider {...sliderSettings}>
            {screenshots.map((screenshot) => (
              <div key={screenshot.id} className="px-2">
                <div className="relative mx-auto max-w-xs">
                  <div className="h-[600px] w-64 rounded-3xl bg-gradient-to-br from-[#1d83b3] to-[#156a8f] shadow-2xl p-2">
                    <div className={`h-full w-full rounded-2xl ${screenshot.bg} overflow-hidden`}>
                      {screenshot.content}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

const PricingSection = () => (
  <section className="py-12 relative overflow-hidden min-h-[90vh] flex flex-col justify-center" style={{ background: HERO_GRADIENT }} id="pricing">
    <div className="absolute bottom-0 right-0 w-96 h-96 pointer-events-none" style={{ background: 'linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.03) 100%)' }}></div>
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10 flex-1 flex flex-col justify-center">
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="mb-4 text-3xl font-extrabold text-white lg:text-4xl">
          Unlock the Full Power of FreeHub for Your Freelance Work
        </h2>
        <div className="flex items-center justify-center mb-4">
          <div className="h-1 w-20 bg-white"></div>
        </div>
        <p className="text-lg text-white/90 max-w-3xl mx-auto">
          Grow your freelance income through advanced features for alerts, statistics, and opportunity management, with tools that help you choose the most suitable projects.
        </p>
      </motion.div>
      <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
        <motion.div
          className="rounded-2xl bg-white p-8 shadow-xl text-center"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-6 flex justify-center">
            <div className="h-20 w-20 rounded-full border-2 border-[#1d83b3] flex items-center justify-center">
              <svg className="h-12 w-12 text-[#1d83b3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          <span className="block mt-3 text-lg font-semibold text-gray-700 uppercase">Basic</span>
          <h2 className="my-3 text-5xl font-extrabold" style={{ background: 'linear-gradient(135deg, #1d83b3 0%, #156a8f 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            <small className="text-3xl">$</small>49
          </h2>
          <ul className="list-none space-y-3 mb-8 text-left">
            <li className="py-3 border-b border-gray-200 text-gray-700">Basic alerts for freelance opportunities matching your skills</li>
            <li className="py-3 border-b border-gray-200 text-gray-700">Connect with multiple popular freelance platforms</li>
            <li className="py-3 border-b border-gray-200 text-gray-700">Save unlimited favorite jobs</li>
            <li className="py-3 text-gray-700">One dashboard to track all applications</li>
          </ul>
          <button 
            className="w-full rounded-full px-6 py-3 font-semibold text-gray-900 transition"
            style={{ backgroundColor: SECONDARY_COLOR }}
            onMouseEnter={(e) => e.target.style.opacity = '0.9'}
            onMouseLeave={(e) => e.target.style.opacity = '1'}
          >
            Sign Up
          </button>
        </motion.div>
        <motion.div
          className="rounded-2xl bg-white p-8 shadow-xl text-center"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-6 flex justify-center">
            <div className="h-20 w-20 rounded-full border-2 border-[#1d83b3] flex items-center justify-center">
              <svg className="h-12 w-12 text-[#1d83b3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
          </div>
          <span className="block mt-3 text-lg font-semibold text-gray-700 uppercase">Pro</span>
          <h2 className="my-3 text-5xl font-extrabold" style={{ background: 'linear-gradient(135deg, #1d83b3 0%, #156a8f 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            <small className="text-3xl">$</small>129
          </h2>
          <ul className="list-none space-y-3 mb-8 text-left">
            <li className="py-3 border-b border-gray-200 text-gray-700">Smart instant alerts with priority for highest return opportunities</li>
            <li className="py-3 border-b border-gray-200 text-gray-700">Advanced statistics about your income and project sources</li>
            <li className="py-3 border-b border-gray-200 text-gray-700">Customized suggestions to improve your proposals and rates</li>
            <li className="py-3 text-gray-700">Premium support and reminder messages for deadlines and applications</li>
          </ul>
          <button 
            className="w-full rounded-full px-6 py-3 font-semibold text-gray-900 transition"
            style={{ backgroundColor: SECONDARY_COLOR }}
            onMouseEnter={(e) => e.target.style.opacity = '0.9'}
            onMouseLeave={(e) => e.target.style.opacity = '1'}
          >
            Sign Up
          </button>
        </motion.div>
      </div>
      <p className="mt-8 text-center text-white/90">
        Not sure which plan suits you? <a href="#contact" className="text-white underline font-semibold">Contact us</a> to help you choose the most suitable plan for your freelance work style.
      </p>
    </div>
  </section>
);

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(1);

  const faqs = [
    {
      id: 1,
      question: 'How do I get started using FreeHub to find freelance work?',
      answer: 'You can create a free account in minutes, then connect your accounts on the freelance platforms you use. After that, specify your skills and preferred fields so FreeHub can automatically start bringing you suitable opportunities.',
      link: '#'
    },
    {
      id: 2,
      question: 'How do I edit my professional profile and opportunity preferences?',
      answer: 'You can easily edit your data from the settings page within the app, whether it\'s skills, fields, language, or rate limits. Every change you make is immediately reflected in the quality of opportunities you receive alerts for.',
      link: '#'
    },
    {
      id: 3,
      question: 'Is there a free account or trial period?',
      answer: 'Yes, you can start for free and try FreeHub\'s basic features for tracking opportunities and saving jobs. You can also upgrade later to the paid plan to get smarter alerts and advanced statistics.',
      link: '#'
    },
    {
      id: 4,
      question: 'Can I get help if I encounter a problem?',
      answer: 'Absolutely. You can contact us from within the app or via the dedicated support email. Our team is ready to help you with any inquiry related to connecting platforms, alerts, or setting up your professional profile.',
      link: '#'
    },
    {
      id: 5,
      question: 'I don\'t see suitable opportunities, what should I do?',
      answer: 'We recommend reviewing your preferences and the rate limits you\'ve set, and expanding the range of skills or countries you\'re willing to work with. The more flexible your settings, the more opportunities FreeHub can suggest to you.',
      link: '#'
    }
  ];

  return (
    <section className="relative bg-white py-20">
      <BlobDecorator count={2} />
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 text-3xl font-extrabold text-gray-900 lg:text-4xl">
            Frequently Asked Questions
          </h2>
          <div className="flex items-center justify-center mb-4">
            <div className="h-1 w-20 bg-[#1d83b3]"></div>
          </div>
          <p className="text-lg text-gray-600">
            Find answers to the most common questions, covering everything from setup to advanced features, to help you get the most out of the platform.
          </p>
        </motion.div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              className="border border-gray-200 rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <button
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition flex items-center justify-between"
                onClick={() => setOpenIndex(openIndex === faq.id ? null : faq.id)}
              >
                <h4 className="font-semibold text-gray-900">{faq.question}</h4>
                <span className="text-2xl text-gray-500">
                  {openIndex === faq.id ? '−' : '+'}
                </span>
              </button>
              {openIndex === faq.id && (
                <motion.div
                  className="px-6 py-4 bg-white"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-gray-600">
                    {faq.answer.split(' ').map((word, i) => 
                      word.toLowerCase() === 'navigating' || word.toLowerCase() === 'step-by-step' || word.toLowerCase() === 'core' || word.toLowerCase() === 'support' ? (
                        <a key={i} href={faq.link} className="text-[#1d83b3] font-semibold hover:underline">
                          {word}{' '}
                        </a>
                      ) : (
                        <span key={i}>{word} </span>
                      )
                    )}
                  </p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CompanyFooter = () => (
  <footer
    className="relative mt-0 overflow-hidden text-slate-200"
    style={{ background: HERO_GRADIENT }}
  >
    {/* Floating Blobs - Small */}
    <div className="absolute left-0 top-0 h-full w-full overflow-hidden">
      {/* Top left - small blob (white_2) */}
      <img
        src="/assets/blob_white_2.svg"
        alt=""
        className="footer-blob-float-3 absolute left-4 top-8 h-32 w-32 opacity-20 sm:h-40 sm:w-40 lg:left-8 lg:top-12 lg:h-48 lg:w-48"
        aria-hidden="true"
      />
      
      {/* Top right - small blob (purple) */}
      <img
        src="/assets/blob_1.svg"
        alt=""
        className="footer-blob-float-4 absolute right-8 top-12 h-28 w-28 opacity-15 sm:right-12 sm:top-16 sm:h-36 sm:w-36 lg:right-16 lg:top-20 lg:h-44 lg:w-44"
        aria-hidden="true"
      />
      
      {/* Middle left - small blob (purple) */}
      <img
        src="/assets/blob_1.svg"
        alt=""
        className="footer-blob-float-1 absolute left-8 top-1/2 h-36 w-36 opacity-20 sm:h-44 sm:w-44 lg:left-12 lg:top-1/2 lg:h-52 lg:w-52"
        aria-hidden="true"
      />
      
      {/* Bottom right - small blob (white) */}
      <img
        src="/assets/blob_white.svg"
        alt=""
        className="footer-blob-float-2 absolute right-4 bottom-24 h-32 w-32 opacity-15 sm:right-8 sm:bottom-28 sm:h-40 sm:w-40 lg:right-12 lg:bottom-32 lg:h-48 lg:w-48"
        aria-hidden="true"
      />
    </div>

    <div className="relative z-10 border-t border-white/10 pt-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 py-10 lg:grid-cols-3 lg:gap-12 lg:py-16">
          {/* First Column - Description and Download Buttons */}
          <div className="flex flex-col gap-6 lg:col-span-1">
            {/* Description */}
            <div>
              <h3 className="mb-3 text-xl font-bold text-white">FreeHub</h3>
              <p className="text-sm leading-relaxed text-slate-200">
                FreeHub brings freelance opportunities from multiple platforms into one simple dashboard, with smart filters and instant alerts to help you build your independent career with confidence.
              </p>
            </div>

            {/* Download Buttons with Description */}
            <div className="flex flex-col gap-3">
              <h4 className="text-base font-bold text-white">Download the app</h4>
              <p className="text-sm text-slate-200">
                Find us on the following stores
              </p>
              <div className="flex flex-row flex-wrap gap-3 sm:gap-4">
                <a
                  href="https://play.google.com/store/apps/details?id=com.app.freelanceHub"
                  className="inline-flex items-center gap-3 rounded-xl border border-white/20 bg-black/90 px-4 py-3 text-white shadow-lg transition hover:bg-black hover:border-white/30 hover:opacity-95"
                >
                  <img
                    src="/assets/paly.png"
                    alt=""
                    className="h-9 w-9 flex-shrink-0 object-contain"
                    aria-hidden="true"
                  />
                  <div className="text-left">
                    <span className="block text-[10px] leading-tight text-white/80">Get it on</span>
                    <span className="block text-sm font-semibold leading-tight">Google Play</span>
                  </div>
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.app.freelanceHub"
                  className="inline-flex items-center gap-3 rounded-xl border border-white/20 bg-white/95 px-4 py-3 text-gray-900 shadow-lg transition hover:bg-white hover:border-white/40 hover:opacity-95"
                >
                  <img
                    src="/assets/store.png"
                    alt=""
                    className="h-9 w-9 flex-shrink-0 object-contain"
                    aria-hidden="true"
                  />
                  <div className="text-left">
                    <span className="block text-[10px] leading-tight text-gray-500">Download on the</span>
                    <span className="block text-sm font-semibold leading-tight text-gray-900">App Store</span>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Second Column - Quick Links */}
          <div className="flex flex-col gap-3 text-sm font-semibold lg:col-span-1">
            <h4 className="mb-4 text-lg font-bold text-white">Quick links</h4>
            <a
              href="#how-it-works"
              className="text-sm text-slate-200 transition hover:text-[#D6F4ED]"
            >
              Our services
            </a>
            <a
              href="#portfolio"
              className="text-sm text-slate-200 transition hover:text-[#D6F4ED]"
            >
              Success stories
            </a>
            <a
              href="#team"
              className="text-sm text-slate-200 transition hover:text-[#D6F4ED]"
            >
              Our team
            </a>
            <a
              href="#achievements"
              className="text-sm text-slate-200 transition hover:text-[#D6F4ED]"
            >
              Our achievements
            </a>
            <a
              href="#kt_body"
              className="text-sm text-slate-200 transition hover:text-[#D6F4ED]"
            >
              Back to top
            </a>
          </div>

          {/* Third Column - Social Media */}
          <div className="flex flex-col gap-3 text-sm font-semibold lg:col-span-1">
            <h4 className="mb-4 text-lg font-bold text-white">Follow us</h4>
            <div className="flex flex-col gap-2">
              <a
                href="https://www.facebook.com/share/1Jg15YFYJy/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-slate-200 transition hover:text-[#D6F4ED]"
              >
                <img src="/assets/media/svg/brand-logos/facebook-4.svg" className="h-5 w-5" alt="Facebook" />
                <span>Facebook</span>
              </a>
              <a
                href="https://www.instagram.com/magictechnologysdn?igsh=MWgwaHJxYjQzOXFjeg=="
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-slate-200 transition hover:text-[#D6F4ED]"
              >
                <img src="/assets/media/svg/brand-logos/instagram-2-1.svg" className="h-5 w-5" alt="Instagram" />
                <span>Instagram</span>
              </a>
              <a
                href="https://tiktok.com/@magictechnology.sdn"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-slate-200 transition hover:text-[#D6F4ED]"
              >
                <img src="/assets/media/svg/brand-logos/tiktok.svg" className="h-5 w-5" alt="TikTok" />
                <span>TikTok</span>
              </a>
              <a
                href="https://www.threads.com/@magictechnologysdn"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-slate-200 transition hover:text-[#D6F4ED]"
              >
                <MessageCircle className="h-5 w-5 text-slate-200" />
                <span>Threads</span>
              </a>
              <a
                href="https://wa.me/message/PGKJK7664QCIM1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-slate-200 transition hover:text-[#D6F4ED]"
              >
                <img src="/assets/media/svg/brand-logos/whatsapp.svg" className="h-5 w-5" alt="WhatsApp" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-6 text-sm text-slate-300 sm:flex-row sm:px-6 lg:px-8">
          <span>&copy; 2025 FreeHub. All rights reserved.</span>
          <div className="flex gap-4">
            <a href="#how-it-works" className="transition hover:text-[#D6F4ED]">
              About FreeHub
            </a>
            <a href="#contact" className="transition hover:text-[#D6F4ED]">
              Support & contact
            </a>
            <a href="#portfolio" className="transition hover:text-[#D6F4ED]">
              Our work
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

const ScrollTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <motion.button
      type="button"
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-50 inline-flex h-11 w-11 items-center justify-center rounded-full text-gray-900 shadow-lg ring-1 transition focus:outline-none focus-visible:ring-2"
      style={{ backgroundColor: SECONDARY_COLOR }}
      onMouseEnter={(e) => e.target.style.opacity = '0.9'}
      onMouseLeave={(e) => e.target.style.opacity = '1'}
      aria-label="Back to top"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.3 }}
    >
      <ChevronUp className="h-5 w-5" />
    </motion.button>
  );
};

function LandingPage() {
  const [isLoadingImages] = useState(false);

  // SEO: Update document title and meta tags
  useEffect(() => {
    // Update document title
    document.title = 'FreeHub - Find and organize your freelance work opportunities';

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'FreeHub helps freelancers and independent professionals find, organize, and track work opportunities from multiple freelance platforms in one smart dashboard.'
      );
    }

    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute(
        'content',
        'FreeHub - All your freelance work opportunities in one place'
      );
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute(
        'content',
        'Connect your favorite freelance platforms, receive smart job alerts, and manage all your proposals in a single, powerful workspace.'
      );
    }

    // Set HTML lang and dir attributes
    document.documentElement.setAttribute('lang', 'en');
    document.documentElement.setAttribute('dir', 'ltr');
  }, []);


  return (
    <>
      <div
        className="min-h-screen bg-white text-gray-900"
        id="kt_app_root"
        dir="ltr"
        aria-busy={isLoadingImages}
      >
        <div className="mb-0" id="home">
          <LandingHeader />
          <HeroSection />
        </div>

        <StayConnectedSection />
        <HowItWorksSection />
        <ConnectAnywhereSection />
        <ConnectAnywhereReversedSection />
        <TestimonialsSection />
        <WhyChooseSection />
        {/* <PricingSection /> */}
        <FAQSection />
        <CompanyFooter />
        <ScrollTop />
      </div>
    </>
  );
}

export default LandingPage;


