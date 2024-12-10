export interface DataController {
    title: string
    companyName: string
    vat: string
    address: string
    email: string
    phone: string
    [key: string]: string // Allow string indexing
  }
  
  export interface DataTypes {
    title: string
    intro: string
    contact: string
    usage: string
    cookies: string
    [key: string]: string // Allow string indexing
  }
  
  export interface PrivacySection {
    title: string
    intro?: string
    content?: string
    items?: string[]
    thirdCountries?: string
    rights?: Record<string, string>
  }
  
  export interface PrivacyTranslations {
    privacy: {
      title: string
      generalInfo: {
        title: string
        content: string
      }
      dataController: DataController
      dataTypes: DataTypes
      legalBasis: PrivacySection
      purposes: PrivacySection
      security: PrivacySection
      retention: PrivacySection
      sharing: PrivacySection
      userRights: PrivacySection
      cookies: PrivacySection
      changes: PrivacySection
      [key: string]: any // Allow string indexing
    }
  }