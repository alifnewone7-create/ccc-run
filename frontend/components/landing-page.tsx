import { CocoNavbar } from '@/components/coco/coco-navbar'
import { CocoHero } from '@/components/coco/coco-hero'
import { CocoTicker } from '@/components/coco/coco-ticker'
import { CocoFeatures } from '@/components/coco/coco-features'
import { CocoModules } from '@/components/coco/coco-modules'
import { CocoHow } from '@/components/coco/coco-how'
import { CocoTerminal } from '@/components/coco/coco-terminal'
import { CocoPricing } from '@/components/coco/coco-pricing'
import { CocoTestimonials } from '@/components/coco/coco-testimonials'
import { CocoFaq } from '@/components/coco/coco-faq'
import { CocoFooter } from '@/components/coco/coco-footer'

export function LandingPage() {
  return (
    <div id="top" className="coco min-h-dvh bg-[#0f071d]" data-testid="landing-page">
      <div className="coco-dark">
        <CocoNavbar />
        <CocoHero />
        <CocoTicker />
      </div>
      <main>
        <CocoFeatures />
        <CocoModules />
        <CocoHow />
        <CocoTerminal />
        <CocoPricing />
        <CocoTestimonials />
        <CocoFaq />
      </main>
      <CocoFooter />
    </div>
  )
}
