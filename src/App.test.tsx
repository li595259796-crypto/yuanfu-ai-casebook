import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from './App'
import { methodSteps, siteContent } from './data/siteContent'

describe('casebook page shell', () => {
  it('renders the hero, enterprise challenges and all transformation steps', () => {
    render(<App />)

    expect(screen.getByRole('heading', { name: siteContent.hero.title })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: '由银色轨道、琥珀光点与青绿色光晕构成的抽象数字宇宙' })).toBeInTheDocument()
    expect(screen.getAllByRole('article', { name: /challenge/i })).toHaveLength(4)
    methodSteps.forEach((step) => {
      expect(screen.getByText(step.title)).toBeInTheDocument()
    })
  })

  it('provides one navigation link for each major section', () => {
    render(<App />)

    siteContent.navigation.forEach((item) => {
      expect(screen.getAllByRole('link', { name: item.label })).toHaveLength(1)
    })
  })

  it('uses configured copy for core sections and connects each section to its heading', () => {
    render(<App />)

    Object.values(siteContent.sections).forEach((sectionContent) => {
      const section = document.getElementById(sectionContent.id)
      const heading = screen.getByRole('heading', { name: sectionContent.title })

      expect(section).toHaveAttribute('aria-labelledby', sectionContent.headingId)
      expect(heading).toHaveAttribute('id', sectionContent.headingId)
      expect(screen.getByText(sectionContent.eyebrow)).toBeInTheDocument()
      expect(screen.getByText(sectionContent.description)).toBeInTheDocument()
    })

    expect(screen.getByRole('link', { name: siteContent.hero.cta.label })).toHaveAttribute('href', siteContent.hero.cta.href)
    siteContent.navigation.forEach((item) => {
      expect(document.getElementById(item.id)).toBeInTheDocument()
    })
  })

  it('presents privacy-safe evidence cases, the five-layer AI OS and the cooperation CTA', () => {
    render(<App />)

    const expectedCases = [
      'WB POD 上架运营工作流',
      '专业服务机构知识协同',
      'dyLIVE 直播内容诊断',
      'Dreamsmaker 创意工作台',
      'AI 客服知识运营平台',
    ]

    expect(document.getElementById('cases')).toHaveAttribute('aria-labelledby', 'cases-title')
    const cases = document.getElementById('cases')!
    expectedCases.forEach((title) => expect(within(cases).getByRole('heading', { name: title })).toBeInTheDocument())
    expect(screen.getByText('6–8 人 → 1–2 人')).toBeInTheDocument()
    expect(screen.getByText('1 天 → 30 分钟')).toBeInTheDocument()
    expect(screen.getByText('约 200 链接 / 天（原始日处理量）')).toBeInTheDocument()
    expect(screen.getByText('部分任务从数天缩短至数小时')).toBeInTheDocument()
    expect(screen.getByText('演示数据')).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: '企业 AI OS：让能力成为可治理的工作系统' })).toBeInTheDocument()
    ;['企业数据', '知识资产', '工作流', '智能体', '数字员工'].forEach((layer) => {
      expect(screen.getByRole('heading', { name: layer })).toBeInTheDocument()
    })

    expect(screen.getByRole('heading', { name: '把需求连接成可落地的 AI 工作系统' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: '发起合作讨论' })).toHaveAttribute('href', '#top')
  })
})
