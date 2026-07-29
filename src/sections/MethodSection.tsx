import { siteContent } from '../data/siteContent'
import { FadeIn } from '../components/FadeIn'
import { SectionHeading } from '../components/SectionHeading'

export function MethodSection() {
  const content = siteContent.sections.method

  return (
    <section id={content.id} className="content-section method-section" aria-labelledby={content.headingId}>
      <FadeIn>
        <SectionHeading
          id={content.headingId}
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.description}
        />
      </FadeIn>
      <ol className="method-list">
        {siteContent.methodSteps.map((step, index) => (
          <FadeIn key={step.title} delay={index * 0.04}>
            <li className="method-step">
              <span aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </li>
          </FadeIn>
        ))}
      </ol>
    </section>
  )
}
