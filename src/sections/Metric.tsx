import type { CaseMetric } from '../types/content'

export function Metric({ value, label }: CaseMetric) {
  return (
    <div className="case-metric">
      <strong>{value}</strong>
      <span>{label}</span>
    </div>
  )
}
