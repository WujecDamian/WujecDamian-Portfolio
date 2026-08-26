import { About } from '../../components/About'
import { Contact } from '../../components/Contact'
import { Education } from '../../components/Education'
import { Experience } from '../../components/Experience'
import { Hero } from '../../components/Hero'
import { ProjectCard } from '../../components/ProjectCard'
import { Skills } from '../../components/Skills'

export const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <ProjectCard />
      <Education />
      <Experience />
      <Contact />
    </>
  )
}
