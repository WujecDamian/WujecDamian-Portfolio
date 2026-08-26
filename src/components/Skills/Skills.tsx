import { useLanguage } from '../../i18n'
import { Section } from '../Section'
import { SkillChip } from './SkillChip'
import { skillGroups } from './skillGroups'
import styles from './Skills.module.css'

export const Skills = () => {
  const { t } = useLanguage()

  return (
    <Section id="skills" title={t.skills.heading}>
      <dl className={styles.skills}>
        {skillGroups.map((group) => (
          <div key={group.labelKey} className={styles.skills__group}>
            <dt className={styles.skills__label}>{t.skills[group.labelKey]}</dt>
            <dd className={styles.skills__items}>
              <ul className={styles.skills__list}>
                {group.items.map((id) => (
                  <SkillChip key={id} id={id} />
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}
