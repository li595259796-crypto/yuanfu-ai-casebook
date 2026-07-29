interface SectionHeadingProps {
  id: string
  eyebrow: string
  title: string
  description?: string
}

export function SectionHeading({ id, eyebrow, title, description }: SectionHeadingProps) {
  return (
    <header className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={id}>{title}</h2>
      {description ? <p className="section-intro">{description}</p> : null}
    </header>
  )
}
