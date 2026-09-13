import { CocoNavbar } from '@/components/coco/coco-navbar'
import { CocoHero } from '@/components/coco/coco-hero'
import { CocoFeatures } from '@/components/coco/coco-features'
import { CocoPricing } from '@/components/coco/coco-pricing'
import { CocoFooter } from '@/components/coco/coco-footer'

export function LandingPage() {
  return (
    <div id="top" className="coco min-h-dvh bg-[#0f071d]" data-testid="landing-page">
      <div className="coco-dark">
        <CocoNavbar />
        <CocoHero />
      </div>
      <main>
        <CocoFeatures />
        <CocoPricing />
      </main>
      <CocoFooter />
    </div>
  )
}
