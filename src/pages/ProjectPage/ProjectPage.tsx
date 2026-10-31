import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getProjectCopy } from '../../data/projectCopy'
import { projects } from '../../data/site'
import { useLanguage } from '../../i18n'
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ExternalLinkIcon,
  GitHubIcon,
} from '../../components/BrandIcon'
import { Lightbox } from '../../components/Lightbox'
import { SkillChip } from '../../components/Skills'
import skillStyles from '../../components/Skills/Skills.module.css'
import styles from './ProjectPage.module.css'

export const ProjectPage = () => {
  const { projectId } = useParams()
  const { t } = useLanguage()
  const [shotIndex, setShotIndex] = useState<number | null>(null)
  const projectIndex = projects.findIndex((item) => item.id === projectId)
  const project = projects[projectIndex]

  if (!project) {
    return (
      <div className={styles.page}>
        <p>{t.caseStudy.notFound}</p>
        <Link
          to="/#projects"
          viewTransition
          className={styles.page__back}
          onClick={() => {
            document.documentElement.dataset.vt = 'back'
          }}
        >
          <ArrowLeftIcon className={styles.page__backIcon} />
          {t.caseStudy.back}
        </Link>
      </div>
    )
  }

  const copy = getProjectCopy(project.id, t)
  const shots =
    'shots' in copy && copy.shots
      ? copy.shots.map((shot) => ({
          ...shot,
          alt: `${copy.title}: ${shot.caption}`,
        }))
      : null
  const next = projects[(projectIndex + 1) % projects.length]
  const nextCopy = getProjectCopy(next.id, t)

  return (
    <article className={styles.page}>
      <div className={styles.progress} aria-hidden="true" />
      <Link
        to={`/#${project.id}`}
        viewTransition
        className={styles.page__back}
        onClick={() => {
          document.documentElement.dataset.vt = 'back'
        }}
      >
        <ArrowLeftIcon className={styles.page__backIcon} />
        {t.caseStudy.back}
      </Link>
      <h1 className={styles.page__title}>{copy.title}</h1>
      <p className={styles.page__blurb}>{copy.blurb}</p>
      <div className={styles.page__stack}>
        <ul className={skillStyles.skills__list} aria-label={t.project.stackLabel}>
          {project.stack.map((id) => (
            <SkillChip key={id} id={id} />
          ))}
        </ul>
        <p className={styles.page__stackMore}>{copy.stackMore}</p>
      </div>

      {"youtube" in project ? (
        <section className={styles.block} data-reveal>
          <h2 className={styles.block__title}>{t.caseStudy.video}</h2>
          <div className={styles.video}>
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${project.youtube}`}
              title={copy.title}
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              loading="lazy"
              allowFullScreen
            />
          </div>
        </section>
      ) : null}

      <section className={styles.block} data-reveal>
        <h2 className={styles.block__title}>{copy.problemFixes}</h2>
        <p className={styles.block__body}>{copy.problem}</p>
      </section>

      <section className={styles.block} data-reveal>
        <h2 className={styles.block__title}>{t.caseStudy.built}</h2>
        <p className={styles.block__body}>{copy.built}</p>
      </section>

      {shots ? (
        <section className={styles.block}>
          <h2 className={styles.block__title} data-reveal>
            {t.caseStudy.screenshots}
          </h2>
          <div className={styles.shots}>
            {shots.map((shot, index) => (
              <figure key={shot.src} className={styles.shot} data-reveal>
                <button
                  type="button"
                  className={styles.shot__btn}
                  aria-label={`${t.caseStudy.enlarge}: ${shot.caption}`}
                  onClick={() => setShotIndex(index)}
                >
                  <img
                    src={shot.src}
                    alt={shot.alt}
                    width={1200}
                    height={750}
                    loading="lazy"
                    decoding="async"
                  />
                </button>
                <figcaption>{shot.caption}</figcaption>
              </figure>
            ))}
          </div>
          <Lightbox
            shots={shots}
            index={shotIndex}
            onIndexChange={setShotIndex}
          />
        </section>
      ) : null}

      <section className={styles.block} data-reveal>
        <h2 className={styles.block__title}>{t.caseStudy.result}</h2>
        <p className={styles.block__body}>{copy.result}</p>
      </section>

      <section className={styles.block} data-reveal>
        <h2 className={styles.block__title}>{t.caseStudy.links}</h2>
        <div className={styles.links}>
          <a
            className={`${styles.link} ${styles['link--live']}`}
            href={project.live}
            target="_blank"
            rel="noreferrer"
          >
            <ExternalLinkIcon className={styles.link__icon} />
            {t.project.live}
          </a>
          {"github" in project ? (
            <a
              className={`${styles.link} ${styles['link--github']}`}
              href={project.github}
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon className={styles.link__icon} />
              {t.project.github}
            </a>
          ) : null}
        </div>
      </section>

      <Link
        to={`/project/${next.id}`}
        viewTransition
        className={styles.next}
        data-reveal
        onClick={() => {
          document.documentElement.dataset.vt = 'forward'
        }}
      >
        <img
          className={styles.next__cover}
          src={`/projects/${next.id}/cover.webp`}
          alt=""
          width={1200}
          height={750}
          loading="lazy"
          decoding="async"
        />
        <span className={styles.next__text}>
          <span className={styles.next__label}>{t.caseStudy.nextProject}</span>
          <span className={styles.next__title}>{nextCopy.title}</span>
        </span>
        <ArrowRightIcon className={styles.next__icon} />
      </Link>
    </article>
  )
}
