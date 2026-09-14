import Link from 'next/link'
import {
  ScanLine,
  ScanSearch,
  Radio,
  Telescope,
  Newspaper,
  ArrowUpRight,
  Boxes,
  type LucideIcon,
} from 'lucide-react'

type Module = {
  key: string
  name: string
  desc: string
  tags: string[]
  icon: LucideIcon
  bg: string
  ink: string
}

const MODULES: Module[] = [
  {
    key: 'real',
    name: 'Real Chart Analyzer',
    desc: 'Upload or stream a live chart. Coco AI reads structure, momentum and volume and returns a direct 1-minute verdict.',
    tags: ['Direct signal', '1M timeframe'],
    icon: ScanSearch,
    bg: 'linear-gradient(145deg,#3d424f,#1a1d25)',
    ink: '#e8ecf5',
  },
  {
    key: 'live',
    name: 'Live Signals',
    desc: 'Real-time entries broadcast the moment confluence lands across 42 monitored pairs.',
    tags: ['Real time', '24 / 7'],
    icon: Radio,
    bg: 'linear-gradient(145deg,#5b4df0,#241c7a)',
    ink: '#fff',
  },
  {
    key: 'future',
    name: 'Future Signals',
    desc: 'Forward-looking calls scheduled against upcoming sessions and trend shifts before they print.',
    tags: ['Scheduled', 'Look ahead'],
    icon: Telescope,
    bg: 'linear-gradient(145deg,#4a3823,#1f160c)',
    ink: '#ff7a45',
  },
  {
    key: 'news',
    name: 'News Signals',
    desc: 'Macro releases and breaking headlines converted into tradable direction with impact scoring.',
    tags: ['Event driven', 'Impact score'],
    icon: Newspaper,
    bg: 'linear-gradient(145deg,#3b3a2f,#1a1a14)',
    ink: '#f2f2ec',
  },
]

const VERDICT_ROWS = [
  { k: 'Trend structure', v: 92 },
  { k: 'Momentum shift', v: 88 },
  { k: 'Volume confirm', v: 96 },
]

export function CocoModules() {
  return (
    <section id="modules" className="coco-shade scroll-mt-24">
      <div className="mx-auto max-w-[1140px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-[640px]">
            <span className="coco-eyebrow">
              <Boxes className="h-3 w-3" />
              Modules
            </span>
            <h2 className="coco-display coco-title-gradient mt-5 text-balance text-[2rem] sm:text-[2.6rem] lg:text-[3rem]">
              Five modules. One console. Every angle of the market covered.
            </h2>
          </div>
          <p className="max-w-[40ch] text-pretty text-sm text-white/60 sm:text-base">
            Each module is a specialist. Together they form the full Coco AI desk you get after
            login.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-6">
          {/* Featured: OTC */}
          <article
            className="coco-glass flex flex-col p-6 md:col-span-6 lg:col-span-4 sm:p-8 lg:flex-row lg:items-center lg:gap-10"
            data-testid="module-card-otc"
          >
            <div className="flex-1">
              <span
                className="coco-mod-icon"
                style={{ background: 'linear-gradient(145deg,#8a4cf0,#4a1f9e)', color: '#fff' }}
              >
                <ScanLine className="h-5 w-5" />
              </span>
              <h3 className="coco-sub mt-5 text-[22px] text-white">OTC Chart Analyzer</h3>
              <p className="mt-2 max-w-[44ch] text-sm leading-relaxed text-white/62">
                Reverse-logic engine tuned for OTC pairs. It detects broker-side manipulation patterns
                and flips the naive read into a high-probability entry.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {['Reverse logic', 'OTC pairs', 'Weekend ready'].map((t) => (
                  <span key={t} className="coco-chip-tag">
                    {t}
                  </span>
                ))}
              </div>
              <Link href="/login" className="coco-link-arrow mt-6" data-testid="module-link-otc">
                Open module
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-8 w-full lg:mt-0 lg:w-[300px]">
              <div className="coco-window">
                <div className="coco-window-bar">
                  <span className="coco-dot bg-[#ff5f57]" />
                  <span className="coco-dot bg-[#febc2e]" />
                  <span className="coco-dot bg-[#28c840]" />
                  <span className="coco-mono ml-2 text-[10px] uppercase tracking-[0.12em] text-white/40">
                    verdict · EUR/USD OTC
                  </span>
                </div>
                <div className="coco-window-body">
                  <div className="flex items-center justify-between">
                    <span className="coco-mono text-[11px] text-white/50">1M · next candle</span>
                    <span className="coco-badge coco-badge-put">PUT ↓</span>
                  </div>
                  <p className="coco-display mt-3 text-[2rem] leading-none text-white">94.2%</p>
                  <p className="coco-mono mt-1 text-[10px] uppercase tracking-[0.12em] text-white/40">
                    confidence
                  </p>
                  <div className="mt-5 flex flex-col gap-3">
                    {VERDICT_ROWS.map((r, i) => (
                      <div key={r.k}>
                        <div className="coco-mono mb-1.5 flex justify-between text-[10px] text-white/55">
                          <span>{r.k}</span>
                          <span>{r.v}</span>
                        </div>
                        <div className="coco-verdict-bar">
                          <i style={{ width: `${r.v}%`, animationDelay: `${i * 160}ms` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </article>

          {MODULES.map((m) => (
            <article
              key={m.key}
              className="coco-glass flex flex-col p-6 md:col-span-3 lg:col-span-2"
              data-testid={`module-card-${m.key}`}
            >
              <span className="coco-mod-icon" style={{ background: m.bg, color: m.ink }}>
                <m.icon className="h-5 w-5" />
              </span>
              <h3 className="coco-sub mt-5 text-[19px] text-white">{m.name}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-white/62">{m.desc}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {m.tags.map((t) => (
                  <span key={t} className="coco-chip-tag">
                    {t}
                  </span>
                ))}
              </div>
              <Link href="/login" className="coco-link-arrow mt-5" data-testid={`module-link-${m.key}`}>
                Open module
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
