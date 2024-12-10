import type { TranslationType } from './services';

export interface Step {
  title: string;
  subtitle: string;
  points: string[];
  purpose: {
    label: string;
    text: string;
  };
}

export interface OutreachSteps {
  step1: Step;
  step2: Step;
  step3: Step;
  step4: Step;
}

export interface OutreachProcess {
  mainTitle: string;
  description: string;
  steps: OutreachSteps;
}

export interface OutreachTranslations extends TranslationType {
  outreach: {
    process: OutreachProcess;
    hero: {
      mainTitle: string;
      subTitle: string;
      highlightedTitle: string;
      bulletPoints: {
        point1: string;
        point2: string;
        point3: string;
      };
      ctaButton: string;
    };
    comparison: {
      title: string;
      subtitle: string;
      featuresTitle: string;
      tableHeaders: {
        benefits: string;
        stormX: string;
        traditional: string;
      };
      features: string[];
    };
    successStory: {
      title: string;
      subtitle: string;
      company: {
        name: string;
        type: string;
        description1: string;
        description2: string;
        stats: {
          growth: {
            value: string;
            label: string;
          };
          meetings: {
            value: string;
            label: string;
          };
          margin: {
            value: string;
            label: string;
          };
        };
      };
    };
    cta: {
      description: string;
      button: string;
    };
    faq: {
      title: string;
    };
  };
}