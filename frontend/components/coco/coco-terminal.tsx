'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Activity, ArrowRight, ArrowUpRight, ArrowDownRight } from 'lucide-react'

type Signal = {
  id: number
  t: string
  pair: string
  dir: 'CALL' | 'PUT'
  conf: number
  tf: string
}

const POOL: Omit<Signal, 'id' | 't'>[] = [
  { pair: 'EUR/USD', dir: 'CALL', conf: 93, tf: '1M' },
  { pair: 'GBP/JPY OTC', dir: 'PUT', conf: 91, tf: '1M' },
  { pair: 'XAU/USD', dir: 'CALL', conf: 88, tf: '5M' },
  { pair: 'USD/CAD OTC', dir: 'PUT', conf: 95, tf: '1M' },
  { pair: 'BTC/USD', dir: 'CALL', conf: 86, tf: '5M' },
  { pair: 'AUD/USD', dir: 'PUT', conf: 90, tf: '1M' },
  { pair: 'EUR/GBP OTC', dir: 'CALL', conf: 92, tf: '1M' },
  { pair: 'USD/JPY', dir: 'CALL', conf: 89, tf: '5M' },
]

function stamp(offset: number) {
  const d = new Date(Date.now() - offset * 1000)
  return d.toTimeString().slice(0, 8)
}

const INITIAL: Signal[] = POOL.slice(0, 5).map((s, i) => ({ ...s, id: i, t: '--:--:--' }))

const METRICS = [
  { k: 'median latency', v: '180ms' },
  { k: 'models in vote', v: '4' },
  { k: 'pairs on watch', v: '42' },
]

export function CocoTerminal() {
  const [rows, setRows] = useState<Signal[]>(INITIAL)

  useEffect(() => {
    setRows((prev) => prev.map((r, i) => ({ ...r, t: stamp((5 - i) * 47) })))
    let n = 5
    const id = setInterval(() => {
      setRows((prev) => {
        const next = POOL[n % POOL.length]
        n += 1
        return [{ ...next, id: n, t: stamp(0) }, ...prev].slice(0, 5)
      })
    }, 2600)
    return () => clearInterval(id)
  }, [])

  return (
    <section id="terminal" className="coco-dark scroll-mt-24">
      <div className="mx-auto grid max-w-[1140px] gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:px-8 lg:py-24">
        <div>
          <span className="coco-eyebrow">
            <Activity className="h-3 w-3" />
            Live feed preview
          </span>
          <h2 className="coco-display coco-title-gradient mt-5 text-balance text-[2rem] sm:text-[2.6rem] lg:text-[3rem]">
            Signals land in your console the second confluence forms.
          </h2>
          <p className="mt-5 max-w-[50ch] text-pretty text-sm leading-relaxed text-white/62 sm:text-base">
            Four proprietary models vote on every candle. Only when they agree does a verdict ship,
            complete with direction, confidence and timeframe.
          </p>
          <div className="mt-9 grid grid-cols-3 gap-4">
            {METRICS.map((m) => (
              <div key={m.k} className="coco-metric">
                <p className="coco-display text-[1.6rem] leading-none text-white sm:text-[2rem]">{m.v}</p>
                <p className="coco-mono mt-2 text-[10px] uppercase tracking-[0.1em] text-white/45">{m.k}</p>
              </div>
            ))}
          </div>
          <Link href="/login" className="coco-btn coco-btn-primary mt-10" data-testid="terminal-cta">
            Open the console
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="coco-window" data-testid="signal-terminal">
          <div className="coco-window-bar">
            <span className="coco-dot bg-[#ff5f57]" />
            <span className="coco-dot bg-[#febc2e]" />
            <span className="coco-dot bg-[#28c840]" />
            <span className="coco-mono ml-2 text-[10px] uppercase tracking-[0.12em] text-white/40">
              coco-signals · live
            </span>
            <span className="ml-auto inline-flex items-center gap-1.5">
              <span className="coco-pulse h-1.5 w-1.5 rounded-full bg-[#4ade80]" />
              <span className="coco-mono text-[10px] uppercase text-[#4ade80]">streaming</span>
            </span>
          </div>
          <div className="coco-window-body flex flex-col gap-2">
            <div className="coco-mono grid grid-cols-[52px_1fr_auto_auto] gap-3 px-3 pb-1 text-[10px] uppercase tracking-[0.1em] text-white/35">
              <span>time</span>
              <span>pair</span>
              <span>conf</span>
              <span>verdict</span>
            </div>
            {rows.map((r, i) => (
              <div key={r.id} className="coco-sig-row" data-fresh={i === 0} data-testid="signal-row">
                <span className="text-white/45">{r.t}</span>
                <span className="font-medium text-white">
                  {r.pair} <span className="text-white/35">· {r.tf}</span>
                </span>
                <span className="flex items-center gap-2">
                  <span className="coco-conf">
                    <i style={{ width: `${r.conf}%` }} />
                  </span>
                  <span className="w-8 text-right text-white/70">{r.conf}%</span>
                </span>
                <span className={`coco-badge ${r.dir === 'CALL' ? 'coco-badge-call' : 'coco-badge-put'}`}>
                  {r.dir === 'CALL' ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
                  {r.dir}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
