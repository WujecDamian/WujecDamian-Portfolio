import type { Translation } from '../i18n/en'
import type { Project } from './site'

export const getProjectCopy = (id: Project['id'], t: Translation) => {
  if (id === 'gitx') {
    return {
      title: t.project.gitxTitle,
      blurb: t.project.gitxBlurb,
      stackMore: t.project.gitxStackMore,
      problem: t.caseStudy.gitxProblem,
      built: t.caseStudy.gitxBuilt,
      result: t.caseStudy.gitxResult,
      shots: [
        { src: '/projects/gitx/feed.svg', caption: t.caseStudy.shotFeed },
        { src: '/projects/gitx/auth.svg', caption: t.caseStudy.shotAuth },
        { src: '/projects/gitx/data.svg', caption: t.caseStudy.shotData },
      ],
    }
  }

  return {
    title: t.project.waldoTitle,
    blurb: t.project.waldoBlurb,
    stackMore: t.project.waldoStackMore,
    problem: t.caseStudy.waldoProblem,
    built: t.caseStudy.waldoBuilt,
    result: t.caseStudy.waldoResult,
    shots: [
      {
        src: '/projects/waldo/levels.svg',
        caption: t.caseStudy.waldoShotLevels,
      },
      { src: '/projects/waldo/play.svg', caption: t.caseStudy.waldoShotPlay },
      {
        src: '/projects/waldo/board.svg',
        caption: t.caseStudy.waldoShotBoard,
      },
    ],
  }
}
