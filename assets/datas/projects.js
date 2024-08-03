export const projects = [
  {
    id: 0,
    subtitle: 'sponsord by mastercard foundation',
    title: 'WEB APP FOR The Bridges Programme',
    overview:
      '  BRIDGES is a comprehensive five-year program (2019-2024) aimed at fostering job creation and supporting micro, small, and medium enterprises (MSMEs) in Ethiopia. The initiative seeks to address the increasing labour force by creating productive employment opportunities for the youth and enhancing the operational capabilities of MSMEs.',
    numberOfUsers: [
      {
        title: 'total participants',
        number: '283.3 k',
      },
      {
        title: 'Enterprises',
        number: '17.4 k',
      },
      {
        title: 'Partners',
        number: '60+',
      },
    ],
    myRole: {
      title: 'Fullstack developer',
      description:
        'Contributed to both frontend (partners admin dashboard) and backend development, implemented GraphQL APIs for dynamic data retrieval, containerized the application using Docker, and deployed it on AWS with Nginx for efficient load balancing and management.',
    },
    techs: [
      {
        title: 'AWS',
      },
      {
        title: 'Docker',
      },
      {
        title: 'Go',
      },
      {
        title: 'Postgres',
      },
      {
        title: 'Vue',
      },
    ],
    images: [
      {
        title: '',
        source: '',
      },
    ],
    features: [
      {
        title: ' User Login System',
        description:
          'Secure login for partners, management, and administrators to report and manage impacts.',
      },
      {
        title: 'Impact Reporting Tool:',
        description:
          'A user-friendly interface for partners to report their respective impacts on job creation and MSME support.',
      },
      {
        title: 'Management Dashboard:',
        description:
          'An admin panel for the MEL Management team to oversee and approve reported impacts.',
      },
      {
        title: 'Responsive Design:',
        description:
          'Optimized for both desktop and mobile devices to ensure accessibility for all users.',
      },
    ],
    learining_outcomes: [
      'Gained expertise in using Vue.js for building dynamic andresponsive user interfaces.',
      'Enhanced skills in Go for developing robust backend services.',
      'Developed proficiency in deploying applications on AWS and managing cloud resources effectively.',
      'Learned to use Docker for containerization',
      'improving deployment efficiency and consistency.',
    ],
    challengesfaced: [
      {
        title: 'Scalability',
        description:
          'Ensuring the application can handle a growing number of users and data as the program expands.',
      },
      {
        title: 'Data Security',
        description:
          'Implementing secure authentication and data protection measures to safeguard sensitive information.',
      },
      {
        title: 'Integration',
        description:
          'Seamlessly integrating various components (frontend, backend, database, and AWS services) to create a cohesive application.',
      },
    ],
    link: 'https://www.bridges-fc.com/',
  },
  // HahuJobs_______________________________________________________________________________________________________________________
  {
    id: 1,
    subtitle: '',
    title: 'HaHuJobs Job Search Platform',
    overview:
      'HaHuJobs is an innovative job search platform designed to meet the needs of Ethiopian job seekers. It offers both online and assisted models to facilitate the job search process at all employment levels. The platform aggregates job vacancies from various sources, allowing users to build career profiles, apply for jobs, and subscribe to customized alerts via their preferred communication channels.',
    numberOfUsers: [
      {
        title: 'Registered Users',
        number: '10.1k',
      },
      {
        title: 'Enterprises',
        number: '440+',
      },
      {
        title: 'Avg Daily Posts',
        number: '40+',
      },
    ],
    myRole: {
      title: 'Backend Developer',
      description:
        'Developed backend services for job matching algorithms, implemented GraphQL for streamlined data interactions, and integrated notifications for job seekers and employers to enhance the hiring process.',
    },
    techs: [
      {
        title: 'AWS',
      },
      {
        title: 'Docker',
      },
      {
        title: 'Go',
      },
      {
        title: 'Vue',
      },
      {
        title: 'Redis',
      },
      {
        title: 'Microservices',
      },
      {
        title: 'Nats',
      },
      {
        title: 'FCM(Notifications)',
        // "Firebase Cloud Messaging (FCM) for push notifications, SendGrid for email subscriptions",
      },
      {
        title: 'sendgrid(email)',
      },
      {
        title: 'Docker',
      },
      {
        title: 'GraphQL',
      },
    ],
    images: [
      {
        title: '',
        source: '',
      },
    ],
    features: [
      {
        title: 'Job Vacancy Aggregation',
        description:
          'Collects and posts job vacancies from multiple sources, including enterprises and digital platforms.',
      },
      {
        title: 'Career Profile Building',
        description:
          'Allows users to create and manage their career profiles, including a CV builder tool.',
      },
      {
        title: 'Standardized Vacancy Classification',
        description:
          "Utilizes a modified version of ILO's ISCO 8 and O*Net classifications, providing a four-digit taxonomy code for each vacancy.",
      },
      {
        title: 'Admin Panel',
        description:
          'An interface for managing job postings, aggregating data from various sources, including Telegram bot API.',
      },
    ],
    learining_outcomes: [
      'Improved proficiency in Go for building scalable backend services.',
      'Gained experience in managing microservices and ensuring effective communication between them using NATS.',
      ' Enhanced skills in deploying applications on AWS, including managing the infrastructure for multiple APIs.',
      ' Developed expertise in database management with PostgreSQL and caching strategies using Redis.',
      'Learned to implement notification systems using FCM and SendGrid for effective user engagement.',
      'Gained experience in containerizing applications using Docker for consistent deployment.',
    ],
    challengesfaced: [
      {
        title: 'Data Integration',
        description:
          'Ensuring seamless integration of data from diverse sources into a unified system.',
      },
      {
        title: 'Real-Time Updates',
        description:
          ' Implementing a robust framework for real-time job updates and notifications for users.',
      },
      {
        title: 'Scalability',
        description:
          'Designing the system to handle a growing number of users and job postings without compromising performance.',
      },
    ],
    link: 'https://hahu.jobs/',
  },

  // Awaqi Centers

  {
    id: 3,
    subtitle: 'sponsored by Mastercard Foundation',
    title: 'WEB APP FOR Awaqi Centers',
    overview:
      'Awaqi centers are capacity building hubs offered for Ethiopian youth, aiming to increase accessibility to Awaqi services. These centers will serve as a hub to host and offer resources to Awaqi, conveniently located throughout cities in Ethiopia.',
    numberOfUsers: [],
    techs: [
      {
        title: 'AWS',
      },
      {
        title: 'Hasura',
      },
      {
        title: 'Go',
      },
      {
        title: 'Nuxt.js',
      },
    ],
    images: [
      {
        title: 'Awaqi Center Overview',
        source: 'link_to_image',
      },
    ],
    features: [
      {
        title: 'Resource Hub',
        description:
          'A centralized platform where users can access various resources and services offered by Awaqi.',
      },
      {
        title: 'User Management',
        description:
          'Secure login and profile management for users to track their progress and access personalized resources.',
      },
      {
        title: 'Event Scheduling',
        description:
          'Users can view and register for events and workshops hosted at Awaqi centers.',
      },
      {
        title: 'Feedback System',
        description:
          'A feature allowing users to provide feedback on services and resources, helping to improve offerings.',
      },
    ],
    learning_outcomes: [
      'Gained experience in using Nuxt.js for building dynamic and responsive front-end applications.',
      'Enhanced skills in Go for backend development, focusing on API creation and management.',
      'Developed proficiency in using Hasura for real-time GraphQL APIs and database management.',
      'Learned to deploy applications on AWS and manage cloud resources effectively.',
    ],
    challengesfaced: [
      {
        title: 'User Engagement',
        description:
          'Ensuring that the platform effectively engages users and meets their needs for resources and support.',
      },
      {
        title: 'Data Management',
        description:
          'Managing user data and ensuring the security and privacy of sensitive information.',
      },
      {
        title: 'Integration',
        description:
          'Seamlessly integrating the front end with the backend services to create a cohesive user experience.',
      },
    ],
    link: 'https://awaqi-centers.bridges-fc.com/#centers',
  },
  {
    id: 4,
    subtitle: 'sponsored by Mastercard Foundation',
    title: 'Kena: Capacity-Building Service for Youth Entrepreneurs',
    overview:
      'Kena is a capacity-building service product of the Ethiopian Youth Entrepreneurs Association (EYEA), aimed at providing training, mentorship, access to finance, and market exposure to youth-founded or run businesses. The initiative encourages youth entrepreneurship through innovation competitions and partnerships with various stakeholders.',
    numberOfUsers: [
      {
        title: 'Total Universities',
        number: '5',
      },
      {
        title: 'Businesses Supported',
        number: '500',
      },
      {
        title: 'Services Offered',
        number: '3',
      },
      {
        title: 'Credit Target',
        number: '15',
      },
    ],
    services: [
      {
        title: 'Training & Mentorship',
        description:
          'Providing technical and soft skill training for young entrepreneurs, including finance management and business development.',
      },
      {
        title: 'Access to Finance',
        description:
          'Facilitating access to grants and credit through various financing models, including investment matching and digital credit facilitation.',
      },
      {
        title: 'Innovation Competitions',
        description:
          'Hosting competitions to enhance the quality of youth-founded businesses and foster innovation in the entrepreneurial ecosystem.',
      },
      {
        title: 'Market Exposure',
        description:
          'Organizing business expos, networking events, and conferences to provide youth entrepreneurs with market reach and professional exposure.',
      },
    ],
    techs: [
      {
        title: 'Go',
      },
      {
        title: 'PostgreSQL',
      },
      {
        title: 'Gin Framework',
      },
    ],
    partners: ['MinT', 'Hibret Bank', 'CBE', 'CIPE', 'Mastercard Foundation'],

    features: [
      {
        title: 'User Registration',
        description:
          'Students and entrepreneurs can register on the platform to gain access to capacity-building trainings and mentorship opportunities.',
      },
      {
        title: 'Notifications',
        description:
          'Selected entrepreneurs receive notifications about training sessions, mentorship opportunities, and innovation competitions.',
      },
    ],
    learning_outcomes: [
      'Developed backend services using Go and PostgreSQL for robust data management.',
      'Gained experience in building APIs with the Gin framework for efficient communication between services.',
      'Enhanced skills in creating scalable solutions for youth entrepreneurship support.',
    ],
    challengesfaced: [
      {
        title: 'Engagement',
        description:
          'Ensuring active participation from youth entrepreneurs in the Kena program.',
      },
      {
        title: 'Resource Allocation',
        description:
          'Effectively managing resources to meet the diverse needs of participants.',
      },
      {
        title: 'Integration',
        description:
          'Seamlessly integrating various services and ensuring smooth user experience across platforms.',
      },
    ],
    link: 'https://www.kena-entrepreneurs.com/',
  },
];

export const projectButtons = [
  {
    title: 'Bridges',
    divClass:
      'row-span-1 col-span-2 box active:bg-primary_custom hover:bg-primary_border hover:transform hover:scale-110 group h-[163px]',
    imageClass:
      'filter brightness-0 grayscale group-hover:invert transition-all duration-200 h-14',
    imageSrc: 'image/bridges_logo.svg',
  },
  {
    title: 'hahu',
    divClass:
      'row-span-1 col-span-1 box hover:bg-[#009688] group hover:transform hover:scale-110 h-[163px]',
    imageClass:
      'filter brightness-0 grayscale group-hover:invert transition-all duration-200 h-14',
    imageSrc: 'image/hahu.png',
  },
  {
    title: 'awaqi',
    divClass:
      'row-span-1 col-span-1 lg:col-start-2 box hover:bg-[#F69321] group hover:transform hover:scale-110 h-[163px]',
    imageClass:
      'filter brightness-0 grayscale group-hover:invert transition-all duration-200 h-14',
    imageSrc: 'image/Awaqi.svg',
  },
  {
    title: 'kena',
    divClass:
      'row-span-1 col-span-2 lg:col-start-3 box activerow-span-1 lg:col-span-1 col-span-2 box hover:bg-[#F93A53] group hover:transform hover:scale-110 h-[163px]',
    imageClass:
      'filter brightness-0 grayscale group-hover:invert transition-all duration-200 h-14',
    imageSrc: 'image/kena-company-logo.png',
  },
  {
    title: 'mesmer',
    divClass:
      'row-span-1 col-span-2 lg:col-start-2 box hover:bg-[#EE7F4F] group hover:transform hover:scale-110 h-[163px]',
    imageClass:
      'filter brightness-0 grayscale group-hover:invert transition-all duration-200 h-14',
    imageSrc: 'image/MESMER_Logo.png',
  },
  {
    title: 'mesmer',
    divClass:
      'row-span-1 col-span-2  box hover:bg-[#EE7F4F] group hover:transform hover:scale-110 h-[163px]',
    imageClass:
      'filter brightness-0 grayscale group-hover:invert transition-all duration-200 h-14',
    imageSrc: 'image/comfort_wheels.png',
  },

  {
    title: 'awaqi',
    divClass:
      'row-span-1 col-span-1 lg:col-start-3 box hover:bg-[#F69321] group hover:transform hover:scale-110 h-[163px]',
    imageClass:
      'filter brightness-0 grayscale group-hover:invert transition-all duration-200 h-14',
    imageSrc: 'image/Awaqi.svg',
  },
];
