export interface carouselItem {
  id: number
  name: string
  description: string
  CTA: string
  image: string
  alt: string
}

export interface featuresCarouselProps {
  carrouselName?: string
  carouselItems: carouselItem[]
}
