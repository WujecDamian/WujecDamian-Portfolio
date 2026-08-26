import { useLanguage } from '../../i18n'
import { Section } from '../Section'
import styles from './Skills.module.css'

export const Skills = () => {
  const { t } = useLanguage()
  const groups = [
    { label: t.skills.languages, items: t.skills.languageItems },
    { label: t.skills.frameworks, items: t.skills.frameworkItems },
    { label: t.skills.data, items: t.skills.dataItems },
    { label: t.skills.concepts, items: t.skills.conceptItems },
    { label: t.skills.tools, items: t.skills.toolItems },
  ]

  return (
    <Section id="skills" title={t.skills.heading}>
      <dl className={styles.skills}>
        {groups.map((group) => (
          <div key={group.label} className={styles.skills__group}>
            <dt className={styles.skills__label}>{group.label}</dt>
            <dd className={styles.skills__items}>{group.items}</dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}
