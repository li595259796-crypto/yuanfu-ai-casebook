import type { CaseStudy } from '../types/content'

interface CaseImageProps {
  caseStudy: CaseStudy
}

const wbSteps = ['图案上传', 'AI 买家图', '图片审核', '俄文标题 / 描述 / 关键词', '定价 / 库存', '人工批准', '平台发布']

function WorkflowVisual() {
  return (
    <div className="case-visual workflow-visual" role="img" aria-label="WB POD 脱敏工作流：人工批准位于平台发布之前">
      {wbSteps.map((step, index) => (
        <div className={step === '人工批准' ? 'workflow-step is-approval' : 'workflow-step'} key={step}>
          <span>{String(index + 1).padStart(2, '0')}</span>{step}
        </div>
      ))}
    </div>
  )
}

function KnowledgeGraph() {
  return (
    <div className="case-visual graph-visual" role="img" aria-label="匿名专业服务知识关系图">
      <span className="graph-node node-one">主题</span>
      <span className="graph-node node-two">案例</span>
      <span className="graph-node node-three">文档</span>
      <span className="graph-node node-four">检索</span>
      <span className="graph-node node-center">关系</span>
    </div>
  )
}

function DreamsmakerVisual() {
  return (
    <div className="case-visual creative-visual" role="img" aria-label="Dreamsmaker 安全创意工作台示意图">
      <div className="creative-prompt">创意方向 / 安全素材</div>
      <div className="creative-canvas"><span /><span /><span /></div>
      <div className="creative-review">发布前审核</div>
    </div>
  )
}

function ServiceVisual() {
  return (
    <div className="case-visual service-visual" role="img" aria-label="AI 客服知识运营演示流程图">
      <span>演示数据</span>
      <div>资料沉淀</div><i aria-hidden="true" />
      <div>知识审核</div><i aria-hidden="true" />
      <div className="service-human">人工复核</div><i aria-hidden="true" />
      <div>服务入口</div>
    </div>
  )
}

export function CaseImage({ caseStudy }: CaseImageProps) {
  if (caseStudy.slug === 'dylive') {
    return (
      <div className="dylive-visuals" aria-label="dyLIVE 匿名演示数据图表">
        {caseStudy.assets?.map((asset) => (
          <figure key={asset.src}>
            <img src={`${import.meta.env.BASE_URL}${asset.src.slice(1)}`} alt={asset.alt} />
            <figcaption>演示数据 · {asset.caption}</figcaption>
          </figure>
        ))}
      </div>
    )
  }

  if (caseStudy.slug === 'wb-pod') return <WorkflowVisual />
  if (caseStudy.slug === 'professional-services') return <KnowledgeGraph />
  if (caseStudy.slug === 'dreamsmaker') return <DreamsmakerVisual />
  return <ServiceVisual />
}
