import styles from '../styles/AboutCompany.module.css';
import Link from 'next/link';

const AboutCompany = () => {
    return (
        <section className={styles.section} aria-label='Єгоза'>
            <h2 className={styles.title}>Про нас</h2>
            <ul className={styles.list}>
                <li>
                    <p><span className={styles.preText}>Лідер у сфері металевих конструкцій:</span> Ми – провідна українська компанія, що спеціалізується на виробництві та постачанні високоякісних металевих виробів для захисту.</p>
                </li>
                <li>
                    <p><span className={styles.preText}>Досвід і надійність:</span> Значний та грунтовний досвід на ринку, забезпечення на місцевому рівні та міжнародних партнерів міцними та сертифікованими конструкціями.</p>
                </li>
                <li>
                    <p><span className={styles.preText}>Якість і сертифікація:</span> Усі наші вироби відповідають міжнародним стандартам якості, що гарантує надійність і довговічність у найскладніших умовах.</p>
                </li>
                <li>
                    <p><span className={styles.preText}>Інноваційні технології:</span> Використовуємо сучасне обладнання та передові технології для створення металевих конструкцій, що відповідають викликам сучасної дійсності.</p>
                </li>
                <li>
                    <p><span className={styles.preText}>Комплексний підхід:</span> Від розробки проєктів до виробництва та постачання – надаємо повний цикл послуг, адаптованих до потреб клієнтів.</p>
                </li>
                <li>
                    <p><span className={styles.preText}>Місія:</span> Підтримувати безпеку, надаючи надійні металеві вироби для захисту та зміцнення країни.</p>
                </li>
                <li>
                    <p><span className={styles.preText}>Команда професіоналів:</span> Наші фахівці – це експерти з багаторічним досвідом у металургії, інженерії та оборонній промисловості.</p>
                </li>
                <li>
                    <p><span className={styles.preText}>Партнерство:</span> Співпрацюємо з державними структурами, міжнародними організаціями та приватними підприємствами для реалізації стратегічних проєктів.</p>
                </li>
                 <li>
                    <p><span className={styles.preText}>Гнучкість і швидкість:</span> Гарантуємо оперативне виконання замовлень, адаптуючись до термінових потреб різних сфер.</p>
                </li>
            </ul>
            <ul className={styles.buttonList}>
            <li>
                <Link href={'/about'}>
                    <button className={styles.btn}>
                        <p className={styles.btnText}>Більше про нас</p>
                    </button>
                </Link>
            </li>
            <li>
                <Link href={'/contacts'}>
                    <button className={styles.btn}>
                        <p className={styles.btnText}>Замовити консультацію</p>
                    </button>
                </Link>
            </li>
            </ul>
        </section>
    )
}

export default AboutCompany