import { ArrowDownRight, Check } from 'lucide-react'
import type { CSSProperties } from 'react'
import { siteContent } from '../data/siteContent'
import { CaseImage } from './CaseImage'
import { Metric } from './Metric'

export function CaseStudiesSection() {
  return (
    <section id="cases" className="content-section cases-section" aria-labelledby="cases-title">
      <header className="section-heading">
        <p className="eyebrow">EVIDENCE CASES</p>
        <h2 id="cases-title">把可验证的工作流，带进真实业务</h2>
        <p className="section-intro">所有案例均以公开可展示的信息、自制图形或匿名演示数据呈现；关键决策始终保留给人。</p>
      </header>
      <div className="case-stack">
        {siteContent.caseStudies.map((caseStudy, index) => (
          <article className="case-card" key={caseStudy.slug} aria-labelledby={`${caseStudy.slug}-title`} style={{ '--case-index': index } as CSSProperties}>
            <div className="case-copy">
              <p className="case-kicker">0{index + 1} / {caseStudy.category}</p>
              <h3 id={`${caseStudy.slug}-title`}>{caseStudy.title}</h3>
              <p className="case-summary">{caseStudy.summary}</p>
              <dl className="case-detail-list">
                <div><dt>挑战</dt><dd>{caseStudy.challenge}</dd></div>
                <div><dt>实施</dt><dd>{caseStudy.approach}</dd></div>
              </dl>
              <ul className="case-highlights">
                {caseStudy.highlights.map((highlight) => <li key={highlight}><Check size={14} aria-hidden="true" />{highlight}</li>)}
              </ul>
            </div>
            <div className="case-evidence">
              <CaseImage caseStudy={caseStudy} />
              {caseStudy.metrics ? <div className="case-metrics">{caseStudy.metrics.map((metric) => <Metric key={metric.value} {...metric} />)}</div> : null}
              {caseStudy.slug === 'professional-services' ? <p className="anonymous-result"><ArrowDownRight size={18} aria-hidden="true" />部分任务从数天缩短至数小时</p> : null}
              <p className="case-safeguard"><strong>展示边界：</strong>{caseStudy.safeguards}</p>
              <p className="case-disclosure">{caseStudy.disclosure}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
