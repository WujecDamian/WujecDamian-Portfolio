import { Link } from 'react-router-dom'
import { getProjectCopy } from '../../data/projectCopy'
import { projects } from '../../data/site'
import { useLanguage } from '../../i18n'
import { ArrowRightIcon, ExternalLinkIcon, GitHubIcon } from '../BrandIcon'
import { Section } from '../Section'
import { SkillChip } from '../Skills'
import skillStyles from '../Skills/Skills.module.css'
import styles from './ProjectCard.module.css'

export const ProjectCard = () => {
  const { t } = useLanguage()

  return (
    <Section id="projects" eyebrow={t.project.eyebrow} title={t.project.heading}>
      <div className={styles.list}>
        {projects.map((project) => {
          const copy = getProjectCopy(project.id, t)

          return (
            <article
              key={project.id}
              id={project.id}
              className={styles.card}
              data-reveal
            >
              <Link
                to={`/project/${project.id}`}
                viewTransition
                className={styles.card__media}
                style={{ backgroundColor: project.coverBg }}
                tabIndex={-1}
                onClick={() => {
                  document.documentElement.dataset.vt = 'forward'
                }}
              >
                <img
                  src={`/projects/${project.id}/cover.webp`}
                  alt={copy.title}
                  width={1200}
                  height={750}
                  loading="lazy"
                  decoding="async"
                />
              </Link>
              <div className={styles.card__body}>
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
                  <a
                    className={styles.card__secondary}
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <ExternalLinkIcon className={styles.card__secondaryIcon} />
                    {t.project.live}
                  </a>
                  {"github" in project ? (
                    <a
                      className={`${styles.card__secondary} ${styles['card__secondary--icon']}`}
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={t.project.github}
                      title={t.project.github}
                    >
                      <GitHubIcon className={styles.card__githubIcon} />
                    </a>
                  ) : null}
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </Section>
  )
}
