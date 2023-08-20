import ContentSection from '@/components/content'
import CTASection from '@/components/cta'
import HeroSection from '@/components/hero'
import PriceSection from '@/components/price'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <>
      <HeroSection />
      <CTASection />
      <ContentSection />
      <PriceSection />
    </>
  )
}
