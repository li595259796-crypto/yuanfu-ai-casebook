import { Check } from 'lucide-react'
import { siteContent } from '../data/siteContent'
import { FadeIn } from '../components/FadeIn'
import { SectionHeading } from '../components/SectionHeading'

export function CapabilitiesSection() {
  const content = siteContent.sections.capabilities

  return (
    <section id={content.id} className="content-section capabilities-section" aria-labelledby={content.headingId}>
      <FadeIn>
        <SectionHeading
          id={content.headingId}
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.description}
        />
      </FadeIn>
      <div className="capability-grid">
        {siteContent.capabilities.map((capability, index) => (
          <FadeIn key={capability.id} delay={index * 0.06}>
            <article className="capability-card">
              <p className="capability-index">{String(index + 1).padStart(2, '0')}</p>
              <h3>{capability.title}</h3>
              <p>{capability.description}</p>
              <ul>
                {capability.outcomes.map((outcome) => (
                  <li key={outcome}><Check aria-hidden="true" size={15} />{outcome}</li>
                ))}
              </ul>
            </article>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
