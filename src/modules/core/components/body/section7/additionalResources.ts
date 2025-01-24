import ResourceImage1 from '@/assets/svg/resources/ResourceImage1.webp'
import ResourceImage2 from '@/assets/svg/resources/ResourceImage2.webp'
import ResourceImage3 from '@/assets/svg/resources/ResourceImage3.webp'

export interface Resource {
  id: number
  image: string
  alt: string
  description: string
}

export const resources = [
  { id: 1, image: ResourceImage1, alt: 'ResourceImage1', description: 'How to Translate YouTube Videos (Subbing & Dubbing)' },
  { id: 2, image: ResourceImage2, alt: 'ResourceImage2', description: 'How to Clone a Voice with AI (and Translate) ' },
  { id: 3, image: ResourceImage3, alt: 'ResourceImage3', description: 'What Is Video Localization? Plus, How to Get Started' },
]
