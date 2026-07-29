import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { siteContent } from './data/siteContent'
import { CapabilitiesSection } from './sections/CapabilitiesSection'
import { AiOsSection } from './sections/AiOsSection'
import { CaseStudiesSection } from './sections/CaseStudiesSection'
import { ChallengeSection } from './sections/ChallengeSection'
import { CooperationSection } from './sections/CooperationSection'
import { HeroSection } from './sections/HeroSection'
import { MethodSection } from './sections/MethodSection'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { navigation } = siteContent

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href={`#${siteContent.hero.id}`} aria-label={siteContent.brand.name}>{siteContent.brand.name}</a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={isMenuOpen ? '关闭导航' : '打开导航'}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
        <nav className={isMenuOpen ? 'site-nav is-open' : 'site-nav'} aria-label="主导航">
          {navigation.map((item) => (
            <a key={item.id} href={`#${item.id}`} aria-label={item.label} onClick={() => setIsMenuOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>
      <main>
        <HeroSection />
        <ChallengeSection />
        <MethodSection />
        <CapabilitiesSection />
        <CaseStudiesSection />
        <AiOsSection />
        <CooperationSection />
      </main>
    </div>
  )
}

export default App
