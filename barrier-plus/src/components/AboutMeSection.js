import styles from '../styles/AboutMeSection.module.css';

const AboutMeSection = () => {
  return (
    <section className={styles.AboutMeSection}>
      <div className={styles.container}>
        <div className={styles.textBlock}>
          <h2 className={styles.title}>Постачальник військового металопрокату</h2>
          <p className={styles.subtitle}>
            Ми спеціалізуємося на постачанні високоякісного військового металопрокату для підприємств оборонної промисловості, будівельних компаній та державних установ.  
            <br />
            Пропонуємо широкий асортимент сталевих листів, профілів, арматури та спеціальних сплавів.
            <br />
            Якість, надійність та своєчасне постачання — наші головні пріоритети.
          </p>
          <button className={styles.button}>Дізнатись більше</button>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
