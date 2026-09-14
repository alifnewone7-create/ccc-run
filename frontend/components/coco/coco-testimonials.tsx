import { Star, MessageSquareQuote } from 'lucide-react'

const QUOTES = [
  {
    name: 'Rafael M.',
    role: 'OTC trader · Brazil',
    initials: 'RM',
    bg: 'linear-gradient(145deg,#8a4cf0,#4a1f9e)',
    text: 'The OTC analyzer reads reversals I used to miss completely. My weekend sessions went from coin-flips to structured entries.',
  },
  {
    name: 'Ayesha K.',
    role: 'Part-time trader · UAE',
    initials: 'AK',
    bg: 'linear-gradient(145deg,#2563eb,#0c2a7a)',
    text: 'I only trade two hours a night. Live Signals hands me the setups so I can act instead of scanning charts.',
  },
  {
    name: 'Daniel O.',
    role: 'Forex desk · Nigeria',
    initials: 'DO',
    bg: 'linear-gradient(145deg,#d02c97,#5c1148)',
    text: 'Confidence scores are the difference. When Coco says 90+, I size up. When it stays quiet, I stay flat.',
  },
]

export function CocoTestimonials() {
  return (
    <section id="traders" className="coco-light scroll-mt-24">
      <div className="mx-auto max-w-[1140px] px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8 lg:pb-24">
        <div className="coco-rule" />
        <div className="mt-12 flex flex-col gap-6 sm:mt-14 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-[560px]">
            <span className="coco-eyebrow">
              <MessageSquareQuote className="h-3 w-3" />
              Trader notes
            </span>
            <h2 className="coco-display coco-title-gradient mt-5 text-balance text-[2rem] sm:text-[2.6rem] lg:text-[3rem]">
              Trusted on desks in 30+ countries.
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <span className="flex text-[#f5b301]">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </span>
            <span className="coco-mono text-[11px] uppercase tracking-[0.1em] text-[var(--dim)]">
              4.9 / 5 average operator rating
            </span>
          </div>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {QUOTES.map((q, i) => (
            <figure
              key={q.name}
              className={`coco-card flex flex-col p-7 ${i === 1 ? 'md:-translate-y-4' : ''}`}
              data-testid={`testimonial-${i + 1}`}
            >
              <blockquote className="coco-quote flex-1 text-[15px] leading-relaxed text-[var(--ink)]">
                {q.text}
              </blockquote>
              <figcaption className="mt-7 flex items-center gap-3 border-t border-[var(--hairline)] pt-5">
                <span className="coco-avatar" style={{ background: q.bg }}>
                  {q.initials}
                </span>
                <span>
                  <span className="block text-sm font-semibold">{q.name}</span>
                  <span className="coco-mono block text-[10px] uppercase tracking-[0.08em] text-[var(--dim)]">
                    {q.role}
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
