import styles from "../../styles/components/ActionButton.module.css"

const ActionButton = ({darkIcon, icon, text}) => {
  return (
    <button className={styles['btn-wrapper']}>
      <span>{text}</span>
      <span className={styles["light"]}><img src={icon}  /></span>
      <span className={styles["dark"]}><img src={darkIcon}  /></span>
    </button>
  )
}

export default ActionButton
