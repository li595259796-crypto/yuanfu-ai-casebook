import { ArrowUpRight } from 'lucide-react'
import { siteContent } from '../data/siteContent'
import { FadeIn } from '../components/FadeIn'
import { SectionHeading } from '../components/SectionHeading'

export function ChallengeSection() {
  const content = siteContent.sections.challenge

  return (
    <section id={content.id} className="content-section challenge-section" aria-labelledby={content.headingId}>
      <FadeIn>
        <SectionHeading
          id={content.headingId}
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.description}
        />
      </FadeIn>
      <div className="challenge-grid">
        {siteContent.caseStudies.slice(0, 4).map((study, index) => (
          <FadeIn key={study.slug} delay={index * 0.06}>
            <article className="challenge-card" aria-label={`Challenge ${index + 1}: ${study.title}`}>
              <p className="challenge-number">0{index + 1}</p>
              <p className="challenge-category">{study.category}</p>
              <h3>{study.title}</h3>
              <p>{study.challenge}</p>
              <ArrowUpRight aria-hidden="true" size={19} />
            </article>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
