import {
  UserRoundPlus,
  CircleDollarSign,
  BadgeCheck,
  KeyRound,
  Headset,
  Layers,
  Check,
  ArrowRight,
} from 'lucide-react'

const FREE_STEPS = [
  {
    icon: UserRoundPlus,
    title: 'Create account',
    desc: 'Register your trading account through our exclusive partner link.',
  },
  {
    icon: CircleDollarSign,
    title: 'Fund balance',
    desc: 'A minimum of $50 in trading capital activates your access.',
  },
  {
    icon: BadgeCheck,
    title: 'Verify UID',
    desc: 'Send your UID to the support desk for instant verification.',
  },
]

const LICENSE_PERKS = [
  'Skip broker registration entirely',
  'Direct, unrestricted engine access',
  'One month full license, instant activation',
  'Priority support channel included',
]

export function CocoPricing() {
  return (
    <section id="pricing" className="coco-light scroll-mt-24">
      <div className="mx-auto max-w-[1140px] px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <span className="coco-eyebrow">
          <Layers className="h-3 w-3" />
          Access paths
        </span>
        <h2 className="coco-display coco-title-gradient mt-5 text-[2rem] sm:text-[2.6rem] lg:text-[3rem]">
          Two ways in. Same engine.
        </h2>
        <p className="coco-muted mx-auto mt-4 max-w-[58ch] text-pretty text-sm sm:text-base">
          Earn free access through our partner broker, or take a direct license and skip the setup
          completely.
        </p>

        <div className="mx-auto mt-12 grid max-w-[980px] gap-5 lg:grid-cols-2">
          {/* Partner access */}
          <div
            className="coco-card flex flex-col items-center p-7 text-center sm:p-9"
            data-testid="pricing-free"
          >
            <span className="coco-mono rounded-full border border-[#b9f3dd] bg-[#e6fff7] px-3 py-1 text-[10px] uppercase text-[#0f7a5a]">
              $0 partner
            </span>
            <h3 className="coco-sub mt-4 text-2xl">Partner access</h3>
            <p className="coco-muted mt-2 text-sm">Three steps and the engine unlocks at no cost.</p>

            <ol className="mt-7 flex w-full flex-col">
              {FREE_STEPS.map((step, i) => (
                <li
                  key={step.title}
                  className="flex flex-col items-center border-t border-[var(--hairline)] py-5 first:border-t-0 first:pt-0"
                >
                  <span className="coco-icon">
                    <step.icon className="h-5 w-5" />
                  </span>
                  <p className="coco-mono mt-3 text-[10px] uppercase tracking-[0.12em] text-[var(--dim)]">
                    Step {i + 1}
                  </p>
                  <p className="coco-sub mt-1 text-[17px]">{step.title}</p>
                  <p className="coco-muted mt-1 max-w-[34ch] text-sm leading-relaxed">{step.desc}</p>
                </li>
              ))}
            </ol>

            <div className="mt-7 flex w-full flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <a
                href="https://market-qx.pro/sign-up/?lid=619650"
                target="_blank"
                rel="noopener noreferrer"
                className="coco-btn coco-btn-ghost w-full sm:w-auto"
                data-testid="pricing-broker-cta"
              >
                <UserRoundPlus className="h-4 w-4" />
                Create broker account
              </a>
              <a
                href="https://t.me/Ayan_sx"
                target="_blank"
                rel="noopener noreferrer"
                className="coco-btn w-full border border-[#cfe0ff] bg-[#e1ecff] text-[var(--iris)] hover:bg-[#d3e3ff] sm:w-auto"
                data-testid="pricing-support-cta"
              >
                <Headset className="h-4 w-4" />
                Contact desk
              </a>
            </div>
          </div>

          {/* License */}
          <div
            className="coco-shade relative flex flex-col items-center justify-center overflow-hidden rounded-[24px] p-7 text-center sm:p-9"
            data-testid="pricing-license"
          >
            <span className="coco-mono rounded-full border border-white/18 bg-white/[0.08] px-3 py-1 text-[10px] uppercase text-white/75">
              instant access
            </span>
            <h3 className="coco-sub mt-4 text-2xl text-white">Direct license</h3>
            <p className="mt-2 max-w-[38ch] text-sm text-white/60">
              No broker, no waiting. One month of unrestricted engine access.
            </p>

            <div className="mt-7 flex items-end justify-center gap-2">
              <span className="coco-display text-[3.4rem] leading-none text-white">$99</span>
              <span className="coco-mono mb-1 text-[11px] uppercase text-white/50">/ month</span>
            </div>

            <ul className="mt-7 flex flex-col items-center gap-3">
              {LICENSE_PERKS.map((perk) => (
                <li key={perk} className="flex items-center gap-3 text-sm text-white/80">
                  <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/12 text-[#9db8ff]">
                    <Check className="h-3 w-3" />
                  </span>
                  {perk}
                </li>
              ))}
            </ul>

            <a
              href="https://t.me/Ayan_sx"
              target="_blank"
              rel="noopener noreferrer"
              className="coco-btn coco-btn-primary mt-8 w-full sm:w-auto"
              data-testid="pricing-license-cta"
            >
              <KeyRound className="h-4 w-4" />
              Activate license
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
