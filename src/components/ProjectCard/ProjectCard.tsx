import { Link } from 'react-router-dom'
import { getProjectCopy } from '../../data/projectCopy'
import { projects } from '../../data/site'
import { useLanguage } from '../../i18n'
import { ArrowRightIcon } from '../BrandIcon'
import { Section } from '../Section'
import { SkillChip } from '../Skills'
import skillStyles from '../Skills/Skills.module.css'
import styles from './ProjectCard.module.css'

export const ProjectCard = () => {
  const { t } = useLanguage()

  return (
    <Section id="projects" title={t.project.heading}>
      <div className={styles.list}>
        {projects.map((project) => {
          const copy = getProjectCopy(project.id, t)

          return (
            <article
              key={project.id}
              id={project.id}
              className={styles.card}
            >
              <Link
                to={`/project/${project.id}`}
                viewTransition
                className={styles.card__media}
                onClick={() => {
                  document.documentElement.dataset.vt = 'forward'
                }}
              >
                <img
                  src={`/projects/${project.id}/cover.jpg`}
                  alt={copy.title}
                />
              </Link>
              <div>
                <h3 className={styles.card__title}>{copy.title}</h3>
                <p className={styles.card__blurb}>{copy.blurb}</p>
                <div className={styles.card__stack}>
                  <ul
                    className={skillStyles.skills__list}
                    aria-label={t.project.stackLabel}
                  >
                    {project.stack.map((id) => (
                      <SkillChip key={id} id={id} />
                    ))}
                  </ul>
                  <p className={styles.card__stackMore}>{copy.stackMore}</p>
                </div>
                <div className={styles.card__links}>
                  <Link
                    to={`/project/${project.id}`}
                    viewTransition
                    className={styles.card__cta}
                    onClick={() => {
                      document.documentElement.dataset.vt = 'forward'
                    }}
                  >
                    {t.project.details}
                    <ArrowRightIcon className={styles.card__ctaIcon} />
                  </Link>
                  <a href={project.live} target="_blank" rel="noreferrer">
                    {t.project.live}
                  </a>
                  <a href={project.github} target="_blank" rel="noreferrer">
                    {t.project.github}
                  </a>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </Section>
  )
}
