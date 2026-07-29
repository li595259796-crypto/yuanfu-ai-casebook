import { ArrowDownRight } from 'lucide-react'
import { siteContent } from '../data/siteContent'
import { FadeIn } from '../components/FadeIn'

export function HeroSection() {
  const { brand, hero } = siteContent
  const artworkUrl = `${import.meta.env.BASE_URL}${hero.artwork.src.slice(1)}`

  return (
    <section id={hero.id} className="hero" aria-labelledby={hero.headingId}>
      <div className="hero-copy">
        <FadeIn>
          <p className="eyebrow">{hero.eyebrow}</p>
          <h1 id={hero.headingId}>{hero.title}</h1>
          <p className="hero-description">{hero.description}</p>
          <a className="hero-link" href={hero.cta.href}>
            {hero.cta.label} <ArrowDownRight aria-hidden="true" size={20} />
          </a>
        </FadeIn>
      </div>
      <FadeIn className="hero-visual" delay={0.12}>
        <img className="hero-artwork" src={artworkUrl} alt={hero.artwork.alt} />
        <div className="orbit orbit-one" />
        <div className="orbit orbit-two" />
        <div className="hero-monogram" aria-label={brand.name}>{brand.name}</div>
        <p>{brand.descriptor}</p>
      </FadeIn>
    </section>
  )
}
