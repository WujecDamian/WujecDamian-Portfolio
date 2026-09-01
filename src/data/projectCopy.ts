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
        { src: '/projects/gitx/home.jpg', caption: t.caseStudy.gitxShotHome },
        {
          src: '/projects/gitx/explore.jpg',
          caption: t.caseStudy.gitxShotExplore,
        },
        { src: '/projects/gitx/chat.jpg', caption: t.caseStudy.gitxShotChat },
        {
          src: '/projects/gitx/group-post.jpg',
          caption: t.caseStudy.gitxShotGroupPost,
        },
        {
          src: '/projects/gitx/group-chat.jpg',
          caption: t.caseStudy.gitxShotGroupChat,
        },
        {
          src: '/projects/gitx/profile.jpg',
          caption: t.caseStudy.gitxShotProfile,
        },
        {
          src: '/projects/gitx/profile-edit.jpg',
          caption: t.caseStudy.gitxShotProfileEdit,
        },
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
