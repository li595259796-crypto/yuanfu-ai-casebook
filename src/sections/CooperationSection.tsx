import { ArrowUpRight } from 'lucide-react'

export function CooperationSection() {
  return (
    <section id="cooperation" className="content-section cooperation-section" aria-labelledby="cooperation-title">
      <div className="cooperation-grid">
        <header className="section-heading">
          <p className="eyebrow">COOPERATION</p>
          <h2 id="cooperation-title">把需求连接成可落地的 AI 工作系统</h2>
          <p className="section-intro">以清晰的分工连接需求、场景和实施，让每一步都可讨论、可验证、可持续迭代。</p>
        </header>
        <div className="cooperation-path" aria-label="合作路径">
          <article><p>01</p><h3>中国联通</h3><span>需求连接</span><p>连接行业场景、业务需求与协同资源。</p></article>
          <article><p>02</p><h3>元附 AI</h3><span>实施协同</span><p>完成流程拆解、能力配置、试点与持续优化。</p></article>
        </div>
      </div>
      <div className="final-cta">
        <p>从一个可验证的场景开始，建立长期可治理的企业 AI 能力。</p>
        <a href="#top">发起合作讨论 <ArrowUpRight size={17} aria-hidden="true" /></a>
      </div>
    </section>
  )
}
