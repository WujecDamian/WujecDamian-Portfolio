import { Link, useParams } from 'react-router-dom'
import { gitx } from '../../data/site'
import { useLanguage } from '../../i18n'
import { ExternalLinkIcon, GitHubIcon } from '../../components/BrandIcon'
import { SkillChip } from '../../components/Skills'
import skillStyles from '../../components/Skills/Skills.module.css'
import styles from './ProjectPage.module.css'

export const ProjectPage = () => {
  const { projectId } = useParams()
  const { t } = useLanguage()

  if (projectId !== gitx.id) {
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
          {t.caseStudy.back}
        </Link>
      </div>
    )
  }

  const shots = [
    { src: '/projects/gitx/feed.svg', caption: t.caseStudy.shotFeed },
    { src: '/projects/gitx/auth.svg', caption: t.caseStudy.shotAuth },
    { src: '/projects/gitx/data.svg', caption: t.caseStudy.shotData },
  ]

  return (
    <article className={styles.page}>
      <Link
        to={`/#${gitx.id}`}
        viewTransition
        className={styles.page__back}
        onClick={() => {
          document.documentElement.dataset.vt = 'back'
        }}
      >
        {t.caseStudy.back}
      </Link>
      <h1 className={styles.page__title}>{t.project.gitxTitle}</h1>
      <p className={styles.page__blurb}>{t.project.gitxBlurb}</p>
      <div className={styles.page__stack}>
        <ul className={skillStyles.skills__list} aria-label={t.project.stackLabel}>
          {gitx.stack.map((id) => (
            <SkillChip key={id} id={id} />
          ))}
        </ul>
        <p className={styles.page__stackMore}>{t.project.stackMore}</p>
      </div>

      <section className={styles.block}>
        <h2 className={styles.block__title}>{t.caseStudy.problem}</h2>
        <p className={styles.block__body}>{t.caseStudy.gitxProblem}</p>
      </section>

      <section className={styles.block}>
        <h2 className={styles.block__title}>{t.caseStudy.built}</h2>
        <p className={styles.block__body}>{t.caseStudy.gitxBuilt}</p>
      </section>

      <section className={styles.block}>
        <h2 className={styles.block__title}>{t.caseStudy.screenshots}</h2>
        <div className={styles.shots}>
          {shots.map((shot) => (
            <figure key={shot.src} className={styles.shot}>
              <img src={shot.src} alt="" />
              <figcaption>{shot.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className={styles.block}>
        <h2 className={styles.block__title}>{t.caseStudy.result}</h2>
        <p className={styles.block__body}>{t.caseStudy.gitxResult}</p>
      </section>

      <section className={styles.block}>
        <h2 className={styles.block__title}>{t.caseStudy.links}</h2>
        <div className={styles.links}>
          <a
            className={`${styles.link} ${styles['link--live']}`}
            href={gitx.live}
            target="_blank"
            rel="noreferrer"
          >
            <ExternalLinkIcon className={styles.link__icon} />
            {t.project.live}
          </a>
          <a
            className={`${styles.link} ${styles['link--github']}`}
            href={gitx.github}
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon className={styles.link__icon} />
            {t.project.github}
          </a>
        </div>
      </section>
    </article>
  )
}
