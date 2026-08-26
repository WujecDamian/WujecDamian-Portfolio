import { useLanguage } from '../../i18n'
import type { SkillId } from './skillGroups'
import { skillIcons } from './skillIcons'
import styles from './Skills.module.css'

type SkillChipProps = {
  id: SkillId
}

export const SkillChip = ({ id }: SkillChipProps) => {
  const { t } = useLanguage()

  return (
    <li className={styles.skills__item}>
      <img
        src={skillIcons[id]}
        alt=""
        className={styles.skills__icon}
        width={16}
        height={16}
      />
      {t.skills.items[id]}
    </li>
  )
}
