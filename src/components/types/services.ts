// types/services.ts

export interface ServiceItem {
    id: number;
    name1: string;
    name2: string;
    description: string;
    background: string;
    arrow: string;
    link: string;
    image: string;
  }
 
  export interface ProcessItem {
    label: string;
    content: string;
  }
  
  export interface TeamMember {
    title: string;
    name: string;
    description: string;
    profile: string;
    link: string;
  }

  export interface TeamData {
    en: {
      team: TeamMember[];
      process: ProcessItem[];
    };
    it: {
      team: TeamMember[];
      process: ProcessItem[];
    };
  }
  

  export interface TranslationType {
    services: {
      title: string;
      description: string;
      learnMore: string;
    };
    founder: {
      title: string;
      experience: string;
      sectionTitle: string;
      description: string;
      stat1: string;
      stat2: string;
      stat3: string;
    };
    team: {
      title: string;
      description: string;
      members: TeamMember[];
    };
    process: {
      title: string;
      description: string;
      description2: string;
      repeatProcess: string;
      items: ProcessItem[];
    };
    table: {
      title: string;
      imageAlt: string;
      others: string;
      yesAlt: string;
      noAlt: string;
      features: string[];
    };
    successStories: {
      title: string;
      description: string;
      readMore: string;
      case1: {
        title: string;
        subtitle: string;
        point1: {
          title: string;
          description: string;
        };
        point2: {
          title: string;
          description: string;
        };
        point3: {
          title: string;
          description: string;
        };
        point4: {
          title: string;
          description: string;
        };
        stat1: string;
        stat2: string;
        stat3: string;
      };
      testimonial: {
        imageAlt: string;
        title: string;
        quote: string;
        author: string;
      };
      video: {
        title: string;
        url: string;
        description: string;
      };
      case2: {
        subtitle: string;
        title: string;
        point1: {
          title: string;
          description: string;
        };
        point2: {
          title: string;
          description: string;
        };
        point3: {
          title: string;
          description: string;
        };
        quote: string;
        author: string;
        stat1: string;
        stat2: string;
        stat3: string;
      };
    };
    blog: {
[     x: string]: unknown;
      title: string;
      description: string;
      readMore: string;
    };
    banner: {
      amazonMethodStormX: string;
      secretsRevealed: string;
      processesExplained: string;
      downloadFree: string;
      discoverSecrets: string;
      allProcesses: string;
      optimizationStrategies: string;
      advancedMarketing: string;
      dataAnalysis: string;
      downloadNowFree: string;
    };
    podcast: {
      title: string;
      description: string;
    };
    contact: {
      title: string;
      description: string;
      meetingWithMarcello: string;
      questions: string;
      scheduleCall: string;
      getFreeAnalysis: string;
      name: string;
      contactNumber: string;
      email: string;
      companyBrand: string;
      message: string;
      contactUsNow: string;
      scheduleFreeCall: string;
      emailmarcello: string;
    };
    footer: {
      home: string;
      services: string;
      caseStudies: string;
      pricing: string;
      tutorialsBestPractices: string;
      contactUsNow: string;
      email: string;
      phone: string;
      companyName: string;
      vatNumber: string;
      address: string;
      fullAddress: string;
      subscribeEmail: string;
      subscribeButton: string;
      allRightsReserved: string;
      privacyPolicy: string;
    };
    testimonials: {
      sectionTitle: string;
      sectionDescription: string;
      sectionDescription2: string;
      prevLabel: string;
      nextLabel: string;
      daniel: {
        name: string;
        company: string;
        quote: string;
        content: string;
        additionalContent: string;
      };
      jimmy: {
        name: string;
        company: string;
        quote: string;
        content: string;
        additionalContent: string;
      };
      tom: {
        name: string;
        company: string;
        quote: string;
        content: string;
        additionalContent: string;
      };
    };
    mentorFounder: {
      title: string;
      description: string;
      call: string;
    };
    story: {
      title: string;
      description: string;
      label1: string;
      label2: string;
      label3: string;
      h3title1: string;
      h3title2: string;
      h3title3: string;
      h3desc1: string;
      h3desc2: string;
      h3desc3: string;
    };
  }

  

  export type Locale = 'en' | 'it';

  




