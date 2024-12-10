// Facebook Pixel tracking utility functions
export const trackFacebookEvent = (eventName: string, params?: object) => {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', eventName, params);
    }
  };
  
  // Google Analytics tracking utility functions
  export const trackGoogleEvent = (eventName: string, params?: object) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, params);
    }
  };
  
  // LinkedIn tracking utility functions
  export const trackLinkedInEvent = (eventName: string, params?: object) => {
    if (typeof window !== 'undefined' && window.lintrk) {
      window.lintrk('track', { event: eventName, ...params });
    }
  };
  
  // Add TypeScript declarations for tracking functions
  declare global {
    interface Window {
      fbq: any;
      _fbq: any;
      dataLayer: any[];
      gtag: (...args: any[]) => void;
      lintrk: any;
      _linkedin_partner_id: string;
      _linkedin_data_partner_ids: string[];
    }
  }