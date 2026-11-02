import authentication from '../../assets/skills/authentication.svg'
import authorization from '../../assets/skills/authorization.svg'
import backend from '../../assets/skills/backend.svg'
import claudecode from '../../assets/skills/claudecode.svg'
import css from '../../assets/skills/css.svg'
import cursor from '../../assets/skills/cursor.svg'
import docker from '../../assets/skills/docker.svg'
import english from '../../assets/skills/english.svg'
import eslint from '../../assets/skills/eslint.svg'
import express from '../../assets/skills/express.svg'
import git from '../../assets/skills/git.svg'
import html from '../../assets/skills/html.svg'
import javascript from '../../assets/skills/javascript.svg'
import nodejs from '../../assets/skills/nodejs.svg'
import passport from '../../assets/skills/passport.svg'
import polish from '../../assets/skills/polish.svg'
import postgresql from '../../assets/skills/postgresql.svg'
import prisma from '../../assets/skills/prisma.svg'
import react from '../../assets/skills/react.svg'
import redis from '../../assets/skills/redis.svg'
import rest from '../../assets/skills/rest.svg'
import redux from '../../assets/skills/redux.svg'
import shadcn from '../../assets/skills/shadcn.svg'
import socketio from '../../assets/skills/socketio.svg'
import sql from '../../assets/skills/sql.svg'
import statemanagement from '../../assets/skills/statemanagement.svg'
import tailwind from '../../assets/skills/tailwind.svg'
import testinglibrary from '../../assets/skills/testinglibrary.svg'
import typescript from '../../assets/skills/typescript.svg'
import vite from '../../assets/skills/vite.svg'
import vitest from '../../assets/skills/vitest.svg'
import type { SkillId } from './skillGroups'

export const skillIcons: Record<SkillId, string> = {
  html,
  css,
  javascript,
  typescript,
  sql,
  react,
  redux,
  rtkquery: redux,
  tailwind,
  shadcn,
  nodejs,
  express,
  prisma,
  vite,
  passport,
  socketio,
  postgresql,
  redis,
  rest,
  authentication,
  authorization,
  backend,
  statemanagement,
  git,
  eslint,
  vitest,
  testinglibrary,
  cursor,
  claudecode,
  docker,
  polish,
  english,
}
