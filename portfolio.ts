import emoji from 'react-easy-emoji';
import {
  EducationType,
  ExperienceType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from './types/sections';

export const greetings: GreetingsType = {
  name: 'Timothy Jake Flordelis',
  title: "Hi, I'm Timothy Jake Flordelis",
  description:
    "Experienced Software Engineer with more than 10 years of overall IT experience including latest 5 years of experience leading development, testing, and implementation of Android and iOS applications. Proven experience in increasing functionality, enhancing performance, and maximizing quality by reviewing code, troubleshooting, and implementing critical problem-solving to resolve technical issues. Skilled in using technologies such as Java, C#, React, NodeJS, Kotlin, Swift, Spring, .Net, Hibernate, SQL and Apache Tomcat.",
  resumeLink:
    'https://docs.google.com/document/d/1w-oOItELPBPm_-6EDh699Sy5qmXqlqiG/edit?usp=sharing&ouid=104666018290464652073&rtpof=true&sd=true',
};

export const openSource = {
  githubUserName: 'jekeytimoy29',
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  url: 'https://jekeytimoy29.github.io/',
  linkedin: 'https://www.linkedin.com/in/timothy-jake-flordelis/',
  github: 'https://github.com/jekeytimoy29',
  facebook: 'https://www.facebook.com/timothyjake.flordelis',
};

export const skillsSection: SkillsSectionType = {
  title: 'What I do',
  subTitle: 'EXPERIENCED SOFTWARE ENGINEER WHO WANTS TO KEEP EXPLORING AND LEARNING MODERN, BLEEDING-EDGE TECHNOLOGIES.',
  data: [
    {
      title: 'Full Stack Development',
      lottieAnimationFile: '/lottie/skills/fullstack.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Building Responsive Single-Page-Appllications (SPA) in React and Angular'
        ),
        emoji('⚡ Building Backend Services following Microservices, Event-Driven, Stream-Based, and other Architectures in Java, Spring, C#, .Net, Python, Flask, Node, and Express'),
        emoji('⚡ Building Database Sytems to persist data using SQL and NoSQL'),
      ],
      softwareSkills: [
        {
          skillName: 'Java',
          iconifyTag: 'vscode-icons:file-type-java',
        },
        {
          skillName: 'Csharp',
          iconifyTag: 'vscode-icons:file-type-csharp2',
        },
        {
          skillName: 'JavaScript',
          iconifyTag: 'logos:javascript',
        },
        {
          skillName: 'React',
          iconifyTag: 'vscode-icons:file-type-reactjs',
        },
        {
          skillName: 'Angular',
          iconifyTag: 'vscode-icons:file-type-angular',
        },
        {
          skillName: 'HTML-5',
          iconifyTag: 'vscode-icons:file-type-html',
        },
        {
          skillName: 'CSS-3',
          iconifyTag: 'vscode-icons:file-type-css',
        },
        {
          skillName: 'Python',
          iconifyTag: 'vscode-icons:file-type-python',
        },
        {
          skillName: 'Cpp',
          iconifyTag: 'vscode-icons:file-type-cpp3',
        },
        {
          skillName: 'GraphQL',
          iconifyTag: 'vscode-icons:file-type-graphql',
        },
        {
          skillName: 'SQL',
          iconifyTag: 'vscode-icons:file-type-sql',
        },
      ],
    },
    {
      title: 'Mobile Development',
      lottieAnimationFile: '/lottie/skills/mobile.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Experienced Developing and Deploying Android and iOS Mobile Apps'
        ),
        emoji('⚡ Building Mobile Apps using Java, Kotlin for Native Android, and Swift for Native iOS'),
        emoji('⚡ Building Mobile Apps using Cross-Platform Frameworks such as Xamarin, React Native, Flutter, and Kotlin Mobile Multiplatform (KMM).'),
        emoji('⚡ Developing Mobile Apps which you can configure in application and also with Remote Configuration through Mobile Device Management (MDM).'),
      ],
      softwareSkills: [
        {
          skillName: 'Java',
          iconifyTag: 'vscode-icons:file-type-java',
        },
        {
          skillName: 'Kotlin',
          iconifyTag: 'vscode-icons:file-type-kotlin',
        },
        {
          skillName: 'Swift',
          iconifyTag: 'vscode-icons:file-type-swift',
        },
        {
          skillName: 'Csharp',
          iconifyTag: 'vscode-icons:file-type-csharp2',
        },
        {
          skillName: 'JavaScript',
          iconifyTag: 'logos:javascript',
        },
        {
          skillName: 'React Native',
          iconifyTag: 'vscode-icons:file-type-reactjs',
        },
        {
          skillName: 'Flutter',
          iconifyTag: 'vscode-icons:file-type-flutter',
        },
        {
          skillName: 'SQLite',
          iconifyTag: 'vscode-icons:file-type-sqlite',
        },
      ],
    },
    {
      title: 'Cloud Computing',
      lottieAnimationFile: '/lottie/skills/cloudinfra.json', // Path of Lottie Animation JSON File
      skills: [
        emoji('⚡ Experience Working on AWS Cloud Services, Azure, and soon will explore GCP'),
        emoji(
          '⚡ Hosting and Maintaining personal websites in AWS and Github'),
        emoji(
          '⚡ Building CI/CD Pipelines for Automated Testing & Deployment using AWS Services, GitHub, Docker, and Jenkins.'
        ),
      ],
      softwareSkills: [
        // ? Check README To get icon details
        {
          skillName: 'AWS',
          iconifyTag: 'logos:aws',
        },
        {
          skillName: 'Azure',
          iconifyTag: 'logos:microsoft-azure',
        },
        {
          skillName: 'PostgreSQL',
          iconifyTag: 'logos:postgresql',
        },
        {
          skillName: 'Github',
          iconifyTag: 'akar-icons:github-fill',
        },
        {
          skillName: 'Docker',
          iconifyTag: 'logos:docker-icon',
        },
        {
          skillName: 'Nginx',
          iconifyTag: 'logos:nginx',
        },
        {
          skillName: 'Jenkins',
          iconifyTag: 'vscode-icons:file-type-jenkins',
        },
      ],
    },
    {
      title: 'Blockchain, Machine Learning, and A.I.',
      lottieAnimationFile: '/lottie/skills/bleedingtech.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Planning on Exploring Blockchain Technologies, Machine Learning and A.I.'
        ),
      ],
      softwareSkills: [
        {
          skillName: 'Bitcoin',
          iconifyTag: 'logos:bitcoin',
        },
        {
          skillName: 'Ethereum',
          iconifyTag: 'logos:ethereum',
        },
      ],
    },
    {
      title: 'Raspberry Pi and Arduino',
      lottieAnimationFile: '/lottie/skills/iot.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Building Personal Embedded devices using Raspberry Pi and Arduino.'
        ),
      ],
      softwareSkills: [
        {
          skillName: 'JavaScript',
          iconifyTag: 'logos:javascript',
        },
        {
          skillName: 'Python',
          iconifyTag: 'vscode-icons:file-type-python',
        },
        {
          skillName: 'Arduino',
          iconifyTag: 'vscode-icons:file-type-arduino',
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: 'Java', //Insert stack or technology you have experience in
    progressPercentage: '80', //Insert relative proficiency in percentage
  },
  {
    Stack: 'C#',
    progressPercentage: '80',
  },
  {
    Stack: 'Javascript',
    progressPercentage: '75',
  },
  {
    Stack: 'SQL',
    progressPercentage: '70',
  },
  {
    Stack: 'Test Automation',
    progressPercentage: '70',
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: 'Maharishi International University, Fairfield, IA 52557',
    subHeader: 'Master of Science in Computer Science',
    duration: 'November 2022 - June 2025',
    desc: 'I am actively pursuing my Master\'s Degree in Computer Science, delving deep into the intricacies of both Advanced and Fundamental Computer Programming and Software Engineering. This encompasses rigorous study and critical analysis of Object-oriented and Functional Programming, Data Structures and Algorithms, and Design Patterns.  In tandem, my ambition is to elevate my proficiency in Full-Stack Development, with a particular focus on mastering cutting-edge technologies. These include Cloud Computing, Artificial Intelligence, Machine Learning, and the progressive realm of Microservices Architecture. My academic pursuits are meticulously aligned with a broader vision of staying at the forefront of technological advancements and contributing meaningfully to the ever-evolving tech landscape.',
    grade: 'GPA 3.9',
    descBullets: [
      'Worked part-time as a CS Graduate Student for Cloud Computing Course, gaining skills for AWS, React, and Node',
      'Worked part-time as a Laboratory Monitor, gaining Technical Support skills',
    ],
  },
  {
    schoolName: 'University of Cebu, Cebu City, Philippines 6000',
    subHeader: 'Bachelor of Science in Computer Engineering',
    duration: 'June 2000 - October 2005',
    desc: '',
    grade: 'GPA 2.7',
    descBullets: [
      'Built embedded system to control door locks that allow entry by entering correct codes in keypad.',
      'Led team as final project for Computer Engineering course. Utilized Peripheral Interface Controller Programming (PIC).',
    ],
  },
];

export const experience: ExperienceType[] = [
  {
    role: 'Software Engineer // Mobile Developer',
    company: 'Lexmark',
    companyLogo: '/img/icons/common/LexmarkLogo.jpg',
    date: 'August 2021 – October 2022',
    desc: 'Implemented mobile development for Native Android and iOS applications.',
    descBullets: [
     	"Engineered Lexmark Print 3.0, a commercial mobile app tailored for Lexmark printer users, facilitating seamless integration of Lexmark's printing, and scanning capabilities into mobile devices. Users can harness Lexmark's advanced features through their smartphones, enhancing productivity and accessibility in their printing tasks.",
     	"Collaborated on the development and successful launch of Lexmark Print 3.0 for iOS. Leveraged Swift and Objective-C as primary technologies, with a foundation built on RxSwift for robust MVVM support. This application enriches the iOS ecosystem, empowering users with Lexmark's printing functionalities on their mobile devices.",
      "Played a key role in the development and successful release of Lexmark Print 3.0 for Android. Utilized a tech stack comprising Java and Kotlin, along with leveraging Android Jetpack components including Room, Retrofit, and Navigation. Additionally, implemented remote configuration using VMWare Airwatch MDM, enhancing the functionality and manageability of the application.",
      "Led the development and successful release of the Lexmark Print Plugin for Android, leveraging Java as the primary technology stack. The Print Plugin app serves as a pivotal tool enabling seamless integration of our partner mobile apps with Lexmark Print technologies, enhancing overall functionality and user experience.",
      "Designed and tested features while collaborating with mobile developers, testers, and UX engineers.",
      "Performed troubleshooting and problem-solving for critical technology issues.",
      "Reviewed code of other mobile developers.",
    ],
  },
  {
    role: 'Software Engineer III',
    company: 'NCR Corporation',
    companyLogo: '/img/icons/common/NCRLogo.jpeg',
    date: 'November 2017 – May 2021',
    desc: 'Implemented development and code reviews for NCR RAP service and NCR Xamarin RAP projects in both iOS and Android platforms. Led development of high quality software applications that meet requirements, reuse software components, and streamline support. Performed unit and UI automation tests.',
    descBullets: [
     	"Pioneered and validated NCR's Remote Attendant Program as a Service (RaaS) and NextGen Mobile RAP (NGMR) for monitoring and managing customer interactions in NCR Fastlane System. Implemented an Event-Driven Message Queue architecture to enhance accessibility through desktop, web, and mobile applications. Developed RaaS backend using C# .Net Framework and a cross-platform mobile client app (NGMR) using Xamarin. Created a web testing app in JQuery, JavaScript, HTML, CSS, and utilized MQTT communication protocol, testing with ActiveMQ and RabbitMQ to optimize server-client connectivity.",
     	"Received Research and Development Award for NCR NextGen RAP which is developed using Xamarin.",
    ],
  },
  {
    role: 'Senior Software Engineer',
    company: 'NCR Corporation',
    companyLogo: '/img/icons/common/NCRLogo.jpeg',
    date: 'January 2014 – November 2017',
    desc: '',
    descBullets: [
     	"Pioneered the development and testing of key NCR solutions: FastLane Fusion, SelfServ Scan Portal, and SelfServ Core Application. These applications were integral in revolutionizing the retail experience by facilitating self-service purchases and streamlining the checkout process. Introduced ScanPortal System to expedite item scanning, intervention handling, and payment, optimizing customer flow. Addressed cost-efficiency concerns with the development of FastLane Fusion, offering a simplified yet effective approach to checkout. Proficiently utilized backend technologies such as C++ for SelfServ Core Application and C# for the RAP application, in conjunction with intuitive UI for seamless desktop application experience.",
     	"Pioneered the development and testing of the NCR NextGen User Interface, elevating the aesthetics and user experience of the NCR Fastlane System. Utilized WPF and MVVM architecture to transition from the traditional Classic User Interface, enhancing the application's look and feel for a more modern and intuitive interaction.",
      "Received Research and Development Award for NCR Fastlane Fusion.",
    ],
  },
  {
    role: 'Software Engineer II',
    company: 'NCR Corporation',
    companyLogo: '/img/icons/common/NCRLogo.jpeg',
    date: 'July 2010 – January 2014',
    desc: '',
    descBullets: [
     	"Contributed significantly to the development and meticulous testing of Enterprise Item Security, a pivotal centralized solution transforming item security management within the NCR Fastlane System. Applied expertise in Java and Spring Framework on the backend, utilized SQL Server for the database, and leveraged Adobe Flex on the frontend, coupled with Adobe FlexMonkey for automation UI Testing. This pivotal innovation seamlessly integrated advanced centralized solutions with existing store-based security methodologies, resulting in improved item security detection, correction, and uniformity across retail chains in self-checkout environments.",
    ],
  },
  {
    role: 'Software Development Engineer',
    company: 'NCR Corporation',
    companyLogo: '/img/icons/common/NCRLogo.jpeg',
    date: 'September 2007 – July 2010',
    desc: '',
    descBullets: [
     	" Played a vital role in the development of The POS Emulator, an independent application crucial for supporting SSCO Testing and Transaction Broker Development. This standalone tool, an integral part of the Transaction Broker Software Development Kit (TB SDK) Package, functions as a test tool and simulates a POS client's typical functionality without an actual server. It is designed to facilitate easy hooking using various standard POS hook strategies and associated TB implementations. The implementation, completed using Java, ensured compatibility with both Linux and Windows environments.",
     	"Contributed to the development of NCR Enterprise Reporting, a robust web application enabling clients to efficiently manage and access transaction reports within the NCR SSCO system. The application allows clients to view, download, create, and upload various types of reports, including Transaction Sales, Interventions, Device Errors, and more, presented in both tabular and chart formats. Reports can be downloaded in multiple formats such as HTML, Excel, PDF, or Rich Text. Technologies employed included Java, Spring Framework, Hibernate (Backend), MySQL (Database), JSP, HTML, CSS, JavaScript, JQuery (Frontend), Apache Tomcat (Web Server), and JasperReports for comprehensive enterprise report visualization. My contribution was significant during my tenure as a junior developer in the project",
    ],
  },
  {
    role: 'CE-R & D Technical Support Staff',
    company: 'Nozomi Fortune Services, Inc.',
    companyLogo: '/img/icons/common/NozomiLogo.jpeg',
    date: 'February 2006 – August 2007',
    desc: 'Performed system tests for Lexmark printers.',
    descBullets: [
     	"Verified printer quality and standards while ensuring installation of software driver in operation system.",
     	"Documented results in Excel file and reported issues found.",
      "Contributed to Quality Assurance team during release of several printers.",
    ],
  },
];

export const projects: ProjectType[] = [
  {
    name: 'Camila and Amber Movies App',
    desc: 'An app where it shows movies collection and user can register, add their comments about each movie. An admin account can manage movies and users of the app. Implemented the whole MERN stack app. Utilized AWS, React, Node, Express, MongoDB and Docker.',
    github: 'https://github.com/jekeytimoy29/CamilaAndAmberMoviesAWSAmplify',
    link: 'https://master.dy46zzduujp5a.amplifyapp.com/',
  },
  {
    name: 'Camila and Amber Movies Mobile App',
    desc: 'Another client app developed using React-Native to create mobile apps for iOS and Android. This will support GraphQL API with AWS DynamoDB to retrieve and search for movies. It also includes features for login/logout and register user using AWS Cognito. The backend GraphQL API and AWS Cognito for this client app is the same with Movies Web App',
    github: 'https://github.com/jekeytimoy29/CamilaAmberMoviesReactNative',
  },
  {
    name: 'Data Analysis System',
    desc: 'A microservices system that allows participation of data, analysis of data, and generating analysis report. Implemented the Data Input Services where it sends messages to the broker. Utilized Spring Boot, MongoDB, Kafka, and React.',
    github: 'https://github.com/jekeytimoy29/DataInputService',
  },
  {
    name: 'Personal Website',
    desc: 'Designed personal website hosted on GitHub.io. Implemented client frontend and server backend development. Utilized HTML, CSS, JavaScript, jQuery, Node.js, Express, and EJS.',
    github: 'https://github.com/jekeytimoy29/jekeytimoy29.github.io',
    link: 'https://jekeytimoy29.github.io/',
  },
  {
    name: 'Library System',
    desc: 'Created system to manage library functionalities as part of team. Utilized Java and Swing.',
    github: 'https://github.com/jekeytimoy29/LibrarySystem',
  },
  {
    name: 'Piso WIFI Access Point Using Raspberry PI (2019)',
    desc: 'Designed application to provide internet access to neighbors. Implemented self-service for users to insert coins into machine and use mobile device through captive portal to access router and use internet. Utilized Python, Node.js, Raspberry PI, and Captive Portal.',
  },
  {
    name: 'Pisonet for Internet Shop (2016)',
    desc: 'Built application to provide internet access to neighbors for use on personal computers for gaming, internet, and document creation. Utilized .NET and Arduino Nano.',
  },
  {
    name: 'Pic-Based Apartment Doorkeeper – Solution to Encroachment',
    desc: 'Built embedded system to control door locks that allow entry by entering correct codes in keypad. Led team as final project for Computer Engineering course. Utilized Peripheral Interface Controller Programming (PIC).',
  },
];

// option to hide or show the ContactUs component
export const showContactUs: boolean = true;

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: 'Timothy Jake Flordelis',
  description:
    'Experienced Software Engineer with more than 10 years of overall IT experience including latest 5 years of experience leading development, testing, and implementation of Android and iOS applications. Proven experience in increasing functionality, enhancing performance, and maximizing quality by reviewing code, troubleshooting, and implementing critical problem-solving to resolve technical issues. Skilled in using technologies such as Java, C#, React, NodeJS, Kotlin, Swift, Spring, .Net, Hibernate, SQL and Apache Tomcat.',
  author: 'Timothy Jake Flordelis',
  image: '',
  url: '',
  keywords: [
    'Timothy',
    'Timothy Jake',
    'Timothy Jake Flordelis',
    'Jake',
    'Flordelis',
    'Portfolio',
    'Timothy Portfolio ',
    'Timothy Jake Portfolio',
    'Timothy Jake Flordelis Portfolio',
    'Jake Flordelis Portfolio',
    'Jake Portfolio',
    'Flordelis Portfolio',
  ],
};
