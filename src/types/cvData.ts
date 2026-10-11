export interface CvContactItem {
  github: string
  linkedin: string
  matrix: string
}

export interface CvExperienceItem {
  company: string
  role: string
  location: string
  startDate: string
  endDate: string | null
  responsibilities: string[]
}

export interface CvData {
  name: string
  languages: string[]
  frameworks: string[]
  tools: string[]
  skills: string[]
  experience: CvExperienceItem[]
  contact: CvContactItem
}
