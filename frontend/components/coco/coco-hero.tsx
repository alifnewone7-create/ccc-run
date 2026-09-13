import Link from 'next/link'
import { ArrowRight, Activity, ShieldHalf, Timer, ChartCandlestick } from 'lucide-react'
import { CocoEngine } from '@/components/coco/coco-engine'

const STATS = [
  { icon: Activity, title: 'Real time scan', desc: 'Every tick read as it prints' },
  { icon: ShieldHalf, title: 'Risk aware', desc: 'Confidence scored entries' },
  { icon: Timer, title: 'Always awake', desc: 'Signals around the clock' },
]

export function CocoHero() {
  return (
    <section id="about" className="relative overflow-hidden scroll-mt-24">
      <div className="mx-auto max-w-[1000px] px-4 pb-16 pt-8 text-center sm:px-6 sm:pb-20 sm:pt-10 lg:pb-24 lg:pt-12">
        <h1
          className="coco-display coco-title-gradient coco-rise mx-auto max-w-[18ch] text-balance text-[2.5rem] sm:text-[3.4rem] lg:text-[4.2rem]"
          style={{ '--d': '60ms' } as React.CSSProperties}
          data-testid="hero-heading"
        >
          The market never sleeps. Neither does{' '}
          <span className="coco-accent-gradient">Coco AI</span>.
        </h1>

        <p
          className="coco-rise mx-auto mt-6 max-w-[54ch] text-pretty text-sm leading-relaxed text-white/64 sm:text-base"
          style={{ '--d': '180ms' } as React.CSSProperties}
        >
          Coco AI reads price action, volume and momentum across OTC and real pairs, then hands you
          a clean, data driven call. No guesswork, no emotion, no missed windows.
        </p>

        <div
          className="coco-rise mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
          style={{ '--d': '250ms' } as React.CSSProperties}
        >
          <Link
            href="/login"
            className="coco-btn coco-btn-primary w-full sm:w-auto"
            data-testid="hero-cta-primary"
          >
            Launch Coco AI
            <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href="#pricing"
            className="coco-btn coco-btn-ghost w-full sm:w-auto"
            data-testid="hero-cta-secondary"
          >
            <ChartCandlestick className="h-4 w-4" />
            See access plans
          </a>
        </div>

        {/* Engine pipeline */}
        <div
          className="coco-rise relative mt-14"
          style={{ '--d': '330ms' } as React.CSSProperties}
          data-testid="hero-mockup"
        >
          <CocoEngine />
          <div className="pointer-events-none absolute -inset-8 -z-10 rounded-[2.5rem] bg-[radial-gradient(closest-side,rgba(90,140,255,0.3),transparent)] blur-2xl" />
        </div>

        <div
          className="coco-rise mx-auto mt-14 grid max-w-[860px] grid-cols-1 gap-8 border-t border-white/10 pt-10 sm:grid-cols-3 sm:gap-0"
          style={{ '--d': '400ms' } as React.CSSProperties}
        >
          {STATS.map((s, i) => (
            <div
              key={s.title}
              className={`flex flex-col items-center gap-2 px-6 ${
                i > 0 ? 'sm:border-l sm:border-white/10' : ''
              }`}
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/12 bg-white/[0.06] text-[#9db8ff]">
                <s.icon className="h-4 w-4" />
              </span>
              <p className="mt-1 text-sm font-semibold text-white">{s.title}</p>
              <p className="text-[13px] leading-snug text-white/55">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
