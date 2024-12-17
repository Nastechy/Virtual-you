import { Search, Settings, Shield } from "lucide-react";

export interface QuickAction {
  title: string;
  subtitle: string;
  color: string;
  icon: string;
}

export interface Service {
  title: string;
  description: string;
  features: string[];
}

export interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

export interface Benefit {
  title: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  description: string;


}

export interface TeamMember {
  id: string
  firstName: string
  lastName: string
  role: string
  avatarUrl: string
  gradientFrom: string
  gradientTo: string
}

export const quickActions: QuickAction[] = [
  { title: 'Visa Application', subtitle: 'Travel and immigration services', color: 'bg-blue-500', icon: '✈️' },
  { title: 'Tax Remittance', subtitle: 'Pay your taxes with ease anytime', color: 'bg-orange-500', icon: '💰' },
  { title: 'Education', subtitle: 'Learn and grow with various fields', color: 'bg-indigo-500', icon: '🎓' },
  { title: 'Medical', subtitle: 'Healthcare and medical attention', color: 'bg-emerald-500', icon: '🏥' },
];


export const services: Service[] = [
  {
    title: "Digital Services Infrastructure",
    description: "We provide a strong foundation for businesses, offering infrastructure services to thrive in digital transformation.",
    features: [
      "Customizable Digital Platforms: Tailored to meet unique needs of organizations effectively.",
      "Seamless Digital Integration: Ensuring smooth transitions from legacy systems to modern frameworks.",
      "Scalable Solutions: Built to adapt and grow alongside your business needs."
    ]
  },
  {
    title: "Cloud-Based Applications",
    description: "Our flagship VirtualYou Platform provides tailored modules that cater to diverse audiences:",
    features: [
      "For Businesses: Empowers with tools for automation, compliance, logistics, and payments.",
      "For Governments: Enhances governance through analytics, centralized services, and transparency solutions.",
      "For Individuals: Simplifies access to services like identity, health, and insights."
    ]
  },
  {
    title: "Data Analytics and Insights",
    description: "Harness the power of data with our comprehensive analytics solutions:",
    features: [
      "Real-Time Insights: Empower decisions with accurate, up-to-date analytics and trends.",
      "Predictive Modeling: Anticipate future trends and plan strategies for effectiveness.",
      "Custom Reporting: Receive insights tailored specifically to your organizational objectives."
    ]
  },
  {
    title: "Digital Transformation Projects",
    description: "Partner with us to revolutionize how you operate:",
    features: [
      "System Overhauls: Transform traditional workflows into optimized, digital processes.",
      'Innovative Tools Development: Bespoke digital solutions to meet specific social needs.'
    ]
  }
];

export const processSteps: ProcessStep[] = [
  {
    number: 1,
    title: "Create Your Secure Digital Identity",
    description: "Fill in your personal details and scan your biometrics to create a safe and secure account for you to store your personal information on VirtualYou."
  },
  {
    number: 2,
    title: "Effortlessly Upload and Manage Documents",
    description: "Scan and upload documents for easy access and secure storage, including IDs, and other relevant documents. Forget the hassle of searching for physical copies."
  },
  {
    number: 3,
    title: "Enjoy Government Interactions",
    description: "You're all set to begin enjoying various government services from your home, including Visa tracking, Tax payments, Driver's License Registration and so on."
  }
];

export const benefits: Benefit[] = [
  {
    title: "Convenience at Your Fingertips",
    icon: Search,
    description: 'Seamlessly access digital solutions anytime, anywhere, with intuitive platforms designed to simplify your processes and enhance your experience.'
  },
  {
    title: "Unwavering Security",
    icon: Shield,
    description:  'Your data is protected with cutting-edge encryption and compliance with global standards, ensuring trust and peace of mind in every interaction.'
  },
  {
    title: "Optimized Efficiency",
    icon: Settings,
    description:'Maximize productivity with streamlined tools and responsive support that deliver faster results for businesses, governments, and individuals alike.'

  }
];


export const posts = [
  {
    title: "Digital Transformation in Government ",
    description: "Explore how modern UI frameworks and cloud technologies are revolutionizing public sector digital services. From user authentication to secure data management.",
    date: "22 Nov 2024",
    image: "/Rectangle1.png?height=200&width=400"
  },
  {
    title: "Securing Digital Identity Management",
    description: "Discover the latest approaches to digital identity verification and management. Learn about biometric integration and blockchain-based security solutions.",
    date: "22 Nov 2024",
    image: "/Rectangle2.png?height=200&width=400"
  },
  {
    title: "The Future of Government Tech Stack",
    description: "An in-depth look at the technology stack powering next-generation government services. From cloud infrastructure to frontend frameworks.",
    date: "22 Nov 2024",
    image: "/Rectangle3.png?height=200&width=400"
  }
];


export const aboutus = [
  {
    title: "Our Mission",
    icon: "/cone.png?height=80&width=80",
    content: 'To support governments, multinational organizations, and individuals in Nigeria and other developing nations to transition to a digital economy.'
  },
  {
    title: "Our Vision",
    icon: "/target.png?height=80&width=80",
    content: 'To redefine Africa’s digital economy by providing innovative, practical solutions to real problems in connecting businesses, governments, and people to global opportunities.'
  },
  {
    title: "Our Core Values",
    icon: "/hands.png?height=80&width=80",
    content: 'We deliver excellence by prioritizing innovation and collaboration, offering digital solutions that empower businesses, governments, and individuals.'
  }
]


export const servicesData = {
  title: "What we do",
  services: [
    {
      title: "Digital Services Infrastructure",
      description: "Customizable platforms, seamless legacy integration, and scalable solutions to support digital transformation."
    },
    {
      title: "Cloud-Based Applications",
      description: "Tailored tools for businesses, governments, and individuals, enabling automation, governance enhancement, and simplified access to services."
    },
    {
      title: "Data Analytics and Insights",
      description: "Real-time insights, predictive modeling for trends, and custom reporting for organizational goals."
    },
    {
      title: "Digital Transformation Projects",
      description: "Empowering businesses and individuals with tools that simplify operations and enhance decision-making."
    }
  ]
};



export const teamMembers: TeamMember[] = [
  {
    id: '1',
    firstName: 'Prosper',
    lastName: 'Emma',
    role: 'Back Developer',
    avatarUrl: '/male1.png?height=400&width=400',
    gradientFrom: '#4ADE80',
    gradientTo: '#8B5CF6',
  },
  {
    id: '2',
    firstName: 'Florish',
    lastName: 'Moses',
    role: 'Frontend Developer',
    avatarUrl: '/female1.png?height=400&width=400',
    gradientFrom: '#60A5FA',
    gradientTo: '#DB2777',
  },
  {
    id: '3',
    firstName: 'Obadiah',
    lastName: 'Okoh',
    role: 'Digital Marketer',
    avatarUrl: '/male2.png?height=400&width=400',
    gradientFrom: '#F472B6',
    gradientTo: '#9333EA',
  },
  {
    id: '4',
    firstName: 'Happiness',
    lastName: 'Joe',
    role: 'Product Manager',
    avatarUrl: '/female2.png?height=400&width=400',
    gradientFrom: '#F43F5E',
    gradientTo: '#7C3AED',
  },
]

