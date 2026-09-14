import { TrendingUp, TrendingDown } from 'lucide-react'

const PAIRS = [
  { p: 'EUR/USD', v: '1.08427', c: '+0.12%', up: true },
  { p: 'GBP/USD', v: '1.27310', c: '-0.08%', up: false },
  { p: 'USD/JPY', v: '157.204', c: '+0.31%', up: true },
  { p: 'XAU/USD', v: '2,384.10', c: '+0.64%', up: true },
  { p: 'BTC/USD', v: '68,412', c: '-1.12%', up: false },
  { p: 'ETH/USD', v: '3,562.4', c: '+0.42%', up: true },
  { p: 'AUD/USD', v: '0.66518', c: '-0.05%', up: false },
  { p: 'USD/CAD', v: '1.36722', c: '+0.09%', up: true },
  { p: 'EUR/JPY', v: '170.482', c: '+0.22%', up: true },
  { p: 'USD/CHF', v: '0.90144', c: '-0.14%', up: false },
  { p: 'NZD/USD', v: '0.61207', c: '+0.18%', up: true },
  { p: 'EUR/GBP', v: '0.85166', c: '+0.03%', up: true },
]

export function CocoTicker() {
  const items = [...PAIRS, ...PAIRS]
  return (
    <div className="coco-tape" data-testid="market-ticker" aria-label="Market tape">
      <div className="coco-tape-track">
        {items.map((it, i) => (
          <span key={`${it.p}-${i}`} className="coco-tape-item">
            <span className="text-white/50">{it.p}</span>
            <span className="text-white">{it.v}</span>
            <span className={`inline-flex items-center gap-1 ${it.up ? 'coco-up' : 'coco-down'}`}>
              {it.up ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
              {it.c}
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}
