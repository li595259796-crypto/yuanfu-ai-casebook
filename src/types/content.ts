export type CaseStudySlug =
  | 'wb-pod'
  | 'dylive'
  | 'ai-service'
  | 'professional-services'
  | 'dreamsmaker'

export interface Capability {
  id: string
  title: string
  description: string
  outcomes: string[]
}

export interface CaseStudy {
  slug: CaseStudySlug
  title: string
  category: string
  summary: string
  challenge: string
  approach: string
  safeguards: string
  highlights: string[]
  metrics?: CaseMetric[]
  assets?: CaseStudyAsset[]
  disclosure: string
}

export interface CaseMetric {
  value: string
  label: string
}

export interface CaseStudyAsset {
  src: `/assets/${string}`
  alt: string
  caption: string
}

export interface PublicImageAsset {
  src: `/assets/${string}`
  alt: string
}

export interface MethodStep {
  title: string
  description: string
}

export type SiteSectionId =
  | 'top'
  | 'challenge'
  | 'method'
  | 'capabilities'
  | 'cases'
  | 'ai-os'
  | 'cooperation'

export interface NavigationItem {
  id: SiteSectionId
  label: string
}

export interface SectionContent {
  id: SiteSectionId
  headingId: string
  eyebrow: string
  title: string
  description: string
}

export interface SiteContent {
  brand: {
    name: string
    descriptor: string
  }
  hero: SectionContent & {
    artwork: PublicImageAsset
    cta: {
      label: string
      href: `#${SiteSectionId}`
    }
  }
  navigation: NavigationItem[]
  sections: {
    challenge: SectionContent
    method: SectionContent
    capabilities: SectionContent
  }
  capabilities: Capability[]
  caseStudies: CaseStudy[]
  methodSteps: MethodStep[]
}
