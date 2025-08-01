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
      {
        title: 'Nginx',
      },
      {
        title: 'GraphQL',
      },
    ],
    images: [
      {
        title: 'dashboard',
        source: 'image/project_hero/bridges/landing.jpg',
      },
      {
        title: 'dashboard',
        source: 'image/project_hero/bridges/dashboard.jpg',
      },
      {
        title: 'dashboard',
        source: 'image/project_hero/bridges/partner.jpg',
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
      title: 'fullstack Developer',
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
      {
        title: 'Hasura',
      },
    ],
    images: [],
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
    images: [],
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
    images: [],
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
  {
    id: 5,
    subtitle: 'Empowering Enterprises for Resilience',
    title: 'MESMER Program',
    overview:
      'MESMER is a program that aims to help enterprises by providing access to finance, business development, and psychosocial services. The goal is to help these businesses recover from shocks, build resilience, and grow to create dignified and fulfilling work for the youth.',
    numberOfUsers: [
      {
        title: 'Program Duration',
        number: '5 yrs',
      },
      {
        title: 'Jobs Created',
        number: '410k+',
      },
      {
        title: 'Enterprises Supported',
        number: '72k+',
      },
    ],
    images: [],
    services: [
      {
        title: 'Access to Finance',
        description:
          'Providing financial assistance to help enterprises recover from economic shocks and grow sustainably.',
      },
      {
        title: 'Business Development',
        description:
          'Offering tailored business development services to enhance operational efficiency and market reach.',
      },
      {
        title: 'Psychosocial Services',
        description:
          'Delivering support programs to improve the mental well-being of entrepreneurs and their teams.',
      },
    ],
    techs: [
      {
        title: 'Nuxt.js',
      },
      {
        title: 'Golang',
      },
      {
        title: 'GraphQL',
      },
      {
        title: 'Apollo',
      },
      {
        title: 'Tailwind CSS',
      },
      {
        title: 'Headless UI',
      },
      {
        title: 'Nginx',
      },
      {
        title: 'AWS',
      },
      {
        title: 'Postgresql',
      },
    ],
    partners: [
      'Local Government',
      'Business Associations',
      'Financial Institutions',
      'NGOs',
      'Community Organizations',
    ],
    features: [
      {
        title: 'Dashboard for Partners',
        description:
          'Creating complex dashboards that provide insights and analytics for partners involved in the MESMER program.',
      },
      {
        title: 'Enterprise Registration Forms',
        description:
          'Developing multiple forms for enterprises to register and access various services offered by the program.',
      },
    ],
    learning_outcomes: [
      'Gained experience in full-stack development using Nuxt.js for the frontend and Golang for the backend.',
      'Integrate APIs with  Apollo Graphql for efficient data handling and communication.',
      'Enhanced skills in creating responsive and user-friendly interfaces using Tailwind CSS and Headless UI.',
      'Implemented Nginx for efficient serving of applications and AWS for scalable cloud solutions.',
    ],
    challengesfaced: [
      {
        title: 'User Engagement',
        description:
          'Encouraging enterprises to actively participate in the MESMER program and utilize available resources.',
      },
      {
        title: 'Data Management',
        description:
          'Ensuring robust data management practices to handle the large volume of enterprise registrations and interactions.',
      },
      {
        title: 'System Integration',
        description:
          'Seamlessly integrating various services and ensuring a smooth user experience across different platforms.',
      },
    ],
    link: 'https://ethiomesmer.com/',
  },
  {
    id: 6,
    subtitle: 'Reliable Patient Transportation Services',
    title: 'Comfort Wheels',
    overview:
      'Comfort Wheels is an online platform designed to transport patients from hospitals to their homes or vice versa. The application integrates payment processing through Stripe and utilizes Auth0 for secure authentication. Users can create accounts, enter patient details, and request transportation services while admins can estimate costs and manage sessions.',
    numberOfUsers: [
      {
        title: 'Backend Development Responsibility',
        number: 'Full',
      },
      {
        title: 'Payment Integration',
        number: 'Stripe',
      },
      {
        title: 'Authentication System',
        number: 'Auth0',
      },
    ],
    images: [],
    services: [
      {
        title: 'Patient Transport',
        description:
          'Facilitating transportation of patients between hospitals and homes.',
      },
      {
        title: 'Account Management',
        description:
          'Allowing users to create accounts and manage their transportation requests.',
      },
      {
        title: 'Price Estimation',
        description:
          'Admins can estimate transportation costs based on user inputs.',
      },
      {
        title: 'Email Notifications',
        description:
          'Automated email notifications sent to users via SendGrid.',
      },
    ],
    techs: [
      {
        title: 'Golang',
      },
      {
        title: 'Stripe',
      },
      {
        title: 'Auth0',
      },
      {
        title: 'SendGrid',
      },
      {
        title: 'HTML',
      },
      {
        title: 'CSS',
      },
      {
        title: 'JavaScript',
      },
    ],
    partners: ['Hospitals', 'Healthcare Providers', 'Transportation Services'],
    features: [
      {
        title: 'User Registration',
        description: 'Users can create accounts and manage their profiles.',
      },
      {
        title: 'Session Management',
        description: 'Admins can create and manage transportation sessions.',
      },
      {
        title: 'Payment Processing',
        description: 'Integrated payment system for secure transactions.',
      },
    ],
    learning_outcomes: [
      'Gained expertise in backend development using Go for building robust applications.',
      'Implemented payment integration with Stripe for seamless transactions.',
      'Utilized Auth0 for secure user authentication and management.',
      'Developed skills in sending automated emails using SendGrid.',
    ],
    challengesfaced: [
      {
        title: 'Payment Integration',
        description:
          'Ensuring secure and efficient payment processing for users.',
      },
      {
        title: 'User Authentication',
        description:
          'Implementing a reliable authentication system to protect user data.',
      },
      {
        title: 'Session Management',
        description:
          'Creating an efficient system for managing transportation requests and sessions.',
      },
    ],
    link: 'https://www.comfortwheels.com/',
  },
  {
    id: 7,
    subtitle: 'Celebrating African Culture and Heritage',
    title: 'Afro Times',
    overview:
      'Afro Times is a magazine and newsletter website that provides news and experiences related to art, culture, and tourism across Africa, with a special focus on Ethiopia. It aims to showcase the rich cultural diversity and stories of the continent.',
    numberOfUsers: [
      {
        title: 'Content Creation Status',
        number: 'Ongoing',
      },
      {
        title: 'Website Skeleton Completion',
        number: '100%',
      },
    ],
    services: [
      {
        title: 'News Articles',
        description:
          'Providing the latest news related to art, culture, and tourism in Africa.',
      },
      {
        title: 'Cultural Features',
        description:
          'Highlighting unique cultural practices, events, and experiences from across the continent.',
      },
      {
        title: 'Tourism Guides',
        description:
          "Offering insights and guides for travelers interested in exploring Africa's diverse landscapes and cultures.",
      },
    ],
    images: [],
    techs: [
      {
        title: 'Nuxt.js',
      },
      {
        title: 'Tailwind CSS',
      },
      {
        title: 'HTML',
      },
      {
        title: 'CSS',
      },
      {
        title: 'JavaScript',
      },
    ],
    partners: [
      'Local Artists',
      'Cultural Institutions',
      'Tourism Boards',
      'Community Organizations',
    ],
    features: [
      {
        title: 'User-Friendly Interface',
        description:
          'Developing a responsive and intuitive interface for easy navigation and content access.',
      },
      {
        title: 'Content Management System',
        description:
          'Implementing a CMS for efficient content creation and management by the editorial team.',
      },
    ],
    learning_outcomes: [
      'Gained experience in front-end development using Nuxt.js for building interactive user interfaces.',
      'Developed skills in using Tailwind CSS for responsive design and styling.',
      'Collaborated with a team to create a cohesive design and user experience.',
    ],
    challengesfaced: [
      {
        title: 'Content Strategy',
        description:
          'Developing a clear content strategy to attract and retain an audience.',
      },
      {
        title: 'User Engagement',
        description:
          'Encouraging users to interact with the content and share their experiences.',
      },
      {
        title: 'Performance Optimization',
        description:
          'Ensuring the website loads quickly and efficiently to provide a smooth user experience.',
      },
    ],
    link: 'https://staging.theafrotimes.com/',
  },
  {
    id: 8,
    subtitle: 'Empowering Students Through Online Learning',
    title: 'HahuJobs Muya',
    overview:
      'HahuJobs Muya is an online learning platform where students can register for various courses, either online or in-person. As a backend developer, I contributed to isolating this component as a microservice, utilizing NATS for messaging, Golang for development, PostgreSQL for database management, and AWS for deployment.',
    numberOfUsers: [
      {
        title: 'Backend Development Role',
        number: 'Active',
      },
      {
        title: 'Microservice Architecture',
        number: 'Implemented',
      },
    ],
    services: [
      {
        title: 'Course Registration',
        description: 'Students can register for online or in-class courses.',
      },
      {
        title: 'Course Management',
        description:
          'Instructors can create and manage courses offered on the platform.',
      },
    ],
    techs: [
      {
        title: 'Golang',
      },
      {
        title: 'PostgreSQL',
      },
      {
        title: 'NATS',
      },
      {
        title: 'AWS',
      },
    ],
    images: [],
    partners: ['Educational Institutions', 'Instructors', 'Course Providers'],
    features: [
      {
        title: 'User Registration',
        description:
          'Allows students to create accounts and manage their course enrollments.',
      },
      {
        title: 'Course Catalog',
        description:
          'A comprehensive list of available courses with details and registration options.',
      },
      {
        title: 'Real-time Messaging',
        description:
          'Utilizes NATS for efficient communication between microservices.',
      },
    ],
    learning_outcomes: [
      'Gained experience in backend development using Golang for microservices.',
      'Implemented NATS for messaging in a microservice architecture.',
      'Developed skills in using PostgreSQL for data management.',
      'Gained knowledge in deploying applications on AWS.',
    ],
    challengesfaced: [
      {
        title: 'Microservice Integration',
        description:
          'Ensuring seamless communication between independent microservices.',
      },
      {
        title: 'Database Management',
        description:
          'Designing an efficient database schema for course and user management.',
      },
      {
        title: 'Scalability',
        description:
          'Building a system that can scale with increasing user demand.',
      },
    ],
    link: 'https://www.muya.hahujobs.io/',
  },
  {
    id: 1,
    subtitle: 'Connecting Goals and Communities',
    title: 'We Are Philia',
    overview:
      'We Are Philia is a social media platform designed to help individuals share their goals, engage in conversations, and support each other until those goals are achieved. As a front-end developer, I contributed to building a responsive and interactive user interface using React.js.',
    numberOfUsers: [
      {
        title: 'Active Users',
        number: '1000+',
      },
      {
        title: 'Goals Shared',
        number: '5000+',
      },
    ],
    services: [
      {
        title: 'Goal Sharing',
        description: 'Users can share their personal goals with the community.',
      },
      {
        title: 'Peer Support',
        description: 'Connect with others to receive encouragement and advice.',
      },
    ],
    techs: [
      {
        title: 'React.js',
      },
      {
        title: 'Node.js',
      },
      {
        title: 'MongoDB',
      },
      {
        title: 'JWT',
      },
    ],
    images: [],
    partners: [
      'Community Organizations',
      'Motivational Coaches',
      'Educational Institutions',
    ],
    features: [
      {
        title: 'User Authentication',
        description: 'Secure signup and login processes for users.',
      },
      {
        title: 'Goal Tracking',
        description:
          'Allows users to monitor their progress towards achieving their goals.',
      },
      {
        title: 'Comment and Support',
        description:
          'Engage with peers through comments and feedback on shared goals.',
      },
    ],
    learning_outcomes: [
      'Enhanced skills in building dynamic user interfaces with React.js.',
      'Improved understanding of state management using Redux or Context API.',
      'Gained experience in integrating RESTful APIs for data handling.',
      'Developed knowledge in user authentication and security best practices.',
    ],
    challengesfaced: [
      {
        title: 'User Engagement',
        description:
          'Encouraging active participation and interaction among users.',
      },
      {
        title: 'Responsive Design',
        description:
          'Ensuring a seamless experience across different devices and screen sizes.',
      },
      {
        title: 'Real-time Updates',
        description:
          'Implementing real-time notifications and updates for user interactions.',
      },
    ],
    link: 'https://www.wearephilia.com/',
  },
  {
    id: 2,
    subtitle: 'Empowering Local Shopping',
    title: 'HeyMobile',
    overview:
      'HeyMobile is an e-commerce platform designed for a local shop to showcase and sell its products online. As a front-end developer, I contributed to creating a user-friendly interface using Vue.js, ensuring a seamless shopping experience for customers.',
    numberOfUsers: [
      {
        title: 'Active Users',
        number: '500+',
      },
      {
        title: 'Products Listed',
        number: '150+',
      },
    ],
    services: [
      {
        title: 'Product Listings',
        description: 'The shop can list its products for customers to browse.',
      },
      {
        title: 'Shopping Cart',
        description:
          'Customers can add products to their cart and proceed to checkout.',
      },
    ],
    techs: [
      {
        title: 'Vue.js',
      },
      {
        title: 'Node.js',
      },
      {
        title: 'MongoDB',
      },
      {
        title: 'Express.js',
      },
    ],
    images: [],
    partners: ['Local Shop Owner', 'Payment Processors', 'Delivery Services'],
    features: [
      {
        title: 'User Authentication',
        description: 'Secure registration and login for customers.',
      },
      {
        title: 'Search and Filter',
        description:
          'Customers can easily search for products and filter results.',
      },
      {
        title: 'Order Tracking',
        description: 'Customers can track their orders in real-time.',
      },
    ],
    learning_outcomes: [
      'Gained experience in building responsive user interfaces with Vue.js.',
      'Improved skills in integrating APIs for product and order management.',
      'Developed knowledge in state management using Vuex.',
      'Enhanced understanding of e-commerce best practices and user experience design.',
    ],
    challengesfaced: [
      {
        title: 'Performance Optimization',
        description: 'Ensuring fast loading times and smooth interactions.',
      },
      {
        title: 'Mobile Responsiveness',
        description: 'Creating a seamless experience for mobile users.',
      },
      {
        title: 'Payment Integration',
        description: 'Implementing secure payment gateways for transactions.',
      },
    ],
    link: 'https://heymobile.store/',
  },
];
