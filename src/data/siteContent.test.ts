import { describe, expect, it } from 'vitest'
import { capabilities, caseStudies, methodSteps, siteContent } from './siteContent'

describe('site content', () => {
  it('ships five ordered, privacy-safe case studies', () => {
    expect(caseStudies).toHaveLength(5)
    expect(caseStudies.map((caseStudy) => caseStudy.slug)).toEqual([
      'wb-pod',
      'professional-services',
      'dylive',
      'dreamsmaker',
      'ai-service',
    ])
    expect(JSON.stringify(caseStudies)).not.toMatch(/郭媛媛|张全蛋|liyyyyyyh/i)
  })

  it('describes the full seven-step transformation method', () => {
    expect(methodSteps.map((step) => step.title)).toEqual([
      '企业诊断', '业务流程拆解', 'AI机会识别', 'Workflow重构',
      '应用落地', '智能体建设', '持续优化',
    ])
  })

  it('organizes five AI capabilities in the approved order', () => {
    expect(capabilities.map((capability) => capability.title)).toEqual([
      'AI设计智能体',
      'AI生产智能体',
      'AI运营智能体',
      'AI知识智能体',
      '行业智能体建设',
    ])
  })

  it('configures each public image with a safe local path and alt text', () => {
    const assets = caseStudies.flatMap((caseStudy) => caseStudy.assets ?? [])

    expect(assets).toHaveLength(3)
    for (const asset of assets) {
      expect(asset.src).toMatch(/^\/assets\//)
      expect(asset.alt.trim()).not.toBe('')
    }
    expect(JSON.stringify(caseStudies)).not.toMatch(
      /郭媛媛|张全蛋|liyyyyyyh|yuanfu@wbpod|xwechat_files/i,
    )
  })

  it('configures the generated hero artwork as a local, accessible asset', () => {
    expect(siteContent.hero.artwork).toEqual({
      src: '/assets/hero-digital-universe.png',
      alt: '由银色轨道、琥珀光点与青绿色光晕构成的抽象数字宇宙',
    })
  })
})
