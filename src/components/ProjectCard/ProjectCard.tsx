import { Link } from 'react-router-dom'
import { gitx } from '../../data/site'
import { useLanguage } from '../../i18n'
import { ArrowRightIcon } from '../BrandIcon'
import { Section } from '../Section'
import styles from './ProjectCard.module.css'

export const ProjectCard = () => {
  const { t } = useLanguage()

  return (
    <Section id="projects" title={t.project.heading}>
      <article className={styles.card}>
        <Link
          to={`/project/${gitx.id}`}
          viewTransition
          className={styles.card__media}
          onClick={() => {
            document.documentElement.dataset.vt = 'forward'
          }}
        >
          <img src="/projects/gitx/cover.svg" alt={t.project.gitxTitle} />
        </Link>
        <div>
          <h3 className={styles.card__title}>{t.project.gitxTitle}</h3>
          <p className={styles.card__blurb}>{t.project.gitxBlurb}</p>
          <p className={styles.card__stack} aria-label={t.project.stackLabel}>
            {gitx.stack.map((item) => (
              <span key={item} className={styles.card__tag}>
                {item}
              </span>
            ))}
          </p>
          <div className={styles.card__links}>
            <Link
              to={`/project/${gitx.id}`}
              viewTransition
              className={styles.card__cta}
              onClick={() => {
                document.documentElement.dataset.vt = 'forward'
              }}
            >
              {t.project.details}
              <ArrowRightIcon className={styles.card__ctaIcon} />
            </Link>
            <a href={gitx.live} target="_blank" rel="noreferrer">
              {t.project.live}
            </a>
            <a href={gitx.github} target="_blank" rel="noreferrer">
              {t.project.github}
            </a>
          </div>
        </div>
      </article>
    </Section>
  )
}
