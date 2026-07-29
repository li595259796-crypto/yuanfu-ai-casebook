const layers = [
  ['01', '企业数据', '业务系统、文档与现场信号'],
  ['02', '知识资产', '被审核、可检索、可更新的知识'],
  ['03', '工作流', '角色、门禁、异常与交付协同'],
  ['04', '智能体', '围绕职责配置的任务能力'],
  ['05', '数字员工', '在边界内稳定执行与升级'],
]

export function AiOsSection() {
  return (
    <section id="ai-os" className="content-section ai-os-section" aria-labelledby="ai-os-title">
      <header className="section-heading">
        <p className="eyebrow">ENTERPRISE AI OS</p>
        <h2 id="ai-os-title">企业 AI OS：让能力成为可治理的工作系统</h2>
        <p className="section-intro">不是新增一层工具，而是将数据、知识、流程和人与 AI 的协作关系组织为可运行的系统。</p>
      </header>
      <ol className="os-layers">
        {layers.map(([number, title, description]) => (
          <li key={title}>
            <span>{number}</span>
            <div><h3>{title}</h3><p>{description}</p></div>
          </li>
        ))}
      </ol>
    </section>
  )
}
