import type { Translation } from "../i18n/en";
import type { Project } from "./site";

export const getProjectCopy = (id: Project["id"], t: Translation) => {
  if (id === "gitx") {
    return {
      title: t.project.gitxTitle,
      blurb: t.project.gitxBlurb,
      stackMore: t.project.gitxStackMore,
      problemFixes: t.caseStudy.problemFixes,
      problem: t.caseStudy.gitxProblem,
      built: t.caseStudy.gitxBuilt,
      result: t.caseStudy.gitxResult,
      shots: [
        {
          src: "/projects/gitx/gif_800w_12fps-ezgif.com-optimize.gif",
          caption: t.caseStudy.gitxShotGif,
        },
        {
          src: "/projects/gitx/HomeScreen.jpg",
          caption: t.caseStudy.gitxShotHome,
        },
        {
          src: "/projects/gitx/ExploreScreen.jpg",
          caption: t.caseStudy.gitxShotExplore,
        },
        {
          src: "/projects/gitx/GroupScreen.jpg",
          caption: t.caseStudy.gitxShotGroup,
        },
        {
          src: "/projects/gitx/ProfileScreen.jpg",
          caption: t.caseStudy.gitxShotProfile,
        },
        {
          src: "/projects/gitx/EditScreen.jpg",
          caption: t.caseStudy.gitxShotProfileEdit,
        },
        {
          src: "/projects/gitx/RecruiterScreen.jpg",
          caption: t.caseStudy.gitxShotRecruiter,
        },
        {
          src: "/projects/gitx/CandidateScreen.jpg",
          caption: t.caseStudy.gitxShotCandidate,
        },
      ],
    };
  }

  if (id === "firefocus") {
    return {
      title: t.project.firefocusTitle,
      blurb: t.project.firefocusBlurb,
      stackMore: t.project.firefocusStackMore,
      problemFixes: t.caseStudy.problemFixes,
      problem: t.caseStudy.firefocusProblem,
      built: t.caseStudy.firefocusBuilt,
      result: t.caseStudy.firefocusResult,
    };
  }

  return {
    title: t.project.waldoTitle,
    blurb: t.project.waldoBlurb,
    stackMore: t.project.waldoStackMore,
    problemFixes: "Problem",
    problem: t.caseStudy.waldoProblem,
    built: t.caseStudy.waldoBuilt,
    result: t.caseStudy.waldoResult,
    shots: [
      {
        src: "/projects/waldo/levels.jpg",
        caption: t.caseStudy.waldoShotLevels,
      },
      { src: "/projects/waldo/play.jpg", caption: t.caseStudy.waldoShotPlay },
      {
        src: "/projects/waldo/board.jpg",
        caption: t.caseStudy.waldoShotBoard,
      },
    ],
  };
};
