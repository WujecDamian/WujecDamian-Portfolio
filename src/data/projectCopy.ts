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
          src: "/projects/gitx/HomeScreen.webp",
          caption: t.caseStudy.gitxShotHome,
        },
        {
          src: "/projects/gitx/ExploreScreen.webp",
          caption: t.caseStudy.gitxShotExplore,
        },
        {
          src: "/projects/gitx/GroupScreen.webp",
          caption: t.caseStudy.gitxShotGroup,
        },
        {
          src: "/projects/gitx/ProfileScreen.webp",
          caption: t.caseStudy.gitxShotProfile,
        },
        {
          src: "/projects/gitx/EditScreen.webp",
          caption: t.caseStudy.gitxShotProfileEdit,
        },
        {
          src: "/projects/gitx/RecruiterScreen.webp",
          caption: t.caseStudy.gitxShotRecruiter,
        },
        {
          src: "/projects/gitx/CandidateScreen.webp",
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

  if (id === "wiadomosci") {
    return {
      title: t.project.wiadomosciTitle,
      blurb: t.project.wiadomosciBlurb,
      stackMore: t.project.wiadomosciStackMore,
      problemFixes: t.caseStudy.wiadomosciProblemFixes,
      problem: t.caseStudy.wiadomosciProblem,
      built: t.caseStudy.wiadomosciBuilt,
      result: t.caseStudy.wiadomosciResult,
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
        src: "/projects/waldo/levels.webp",
        caption: t.caseStudy.waldoShotLevels,
      },
      { src: "/projects/waldo/play.webp", caption: t.caseStudy.waldoShotPlay },
      {
        src: "/projects/waldo/board.webp",
        caption: t.caseStudy.waldoShotBoard,
      },
    ],
  };
};
