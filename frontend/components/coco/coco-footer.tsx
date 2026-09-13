import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, TriangleAlert, Send, ScrollText } from 'lucide-react'

export function CocoFooter() {
  return (
    <footer id="support" className="coco-shade scroll-mt-24">
      <div className="mx-auto max-w-[1140px] px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8">
        <h2 className="coco-display coco-title-gradient mx-auto max-w-[24ch] text-balance text-[1.9rem] sm:text-[2.4rem]">
          Put the engine to work today.
        </h2>
        <p className="mx-auto mt-3 max-w-[52ch] text-pretty text-sm text-white/60 sm:text-base">
          Traders in 30+ countries let Coco AI watch the tape while they take the trade.
        </p>
        <div className="mt-8 flex justify-center">
          <Link href="/login" className="coco-btn coco-btn-primary" data-testid="footer-cta">
            Launch Coco AI
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="coco-rule mt-14" />

        <div className="flex flex-col items-center gap-6 py-10">
          <a href="/#top" className="flex items-center gap-2.5">
            <span className="relative h-9 w-9 overflow-hidden rounded-xl ring-1 ring-white/20">
              <Image
                src="/coco-ai.jpg"
                alt="Coco AI logo"
                fill
                className="object-cover"
                sizes="36px"
              />
            </span>
            <span className="coco-sub text-[17px] text-white">
              Coco <span className="coco-accent">AI</span>
            </span>
          </a>

          <nav className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3">
            <a
              href="/privacy"
              className="inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
            >
              <ScrollText className="h-4 w-4" />
              Privacy policy
            </a>
            <a
              href="https://t.me/Ayan_sx"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
            >
              <Send className="h-4 w-4" />
              Support desk
            </a>
          </nav>
        </div>

        <div className="mx-auto flex max-w-[900px] flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <TriangleAlert className="h-5 w-5 shrink-0 text-[#ffb020]" />
          <p className="text-xs leading-relaxed text-white/55">
            <span className="font-semibold text-white/85">Trading risk notice:</span> Trading
            financial instruments carries a high level of risk and may not suit every investor.
            Leverage can work against you as much as for you. Past performance of Coco AI is not
            indicative of future results. Never trade capital you cannot afford to lose. Coco AI
            provides tools and signals for informational purposes only and does not constitute
            financial advice.
          </p>
        </div>

        <p className="coco-mono mt-8 text-[11px] uppercase text-white/35">
          © {new Date().getFullYear()} Coco AI · All rights reserved
        </p>
      </div>
    </footer>
  )
}
