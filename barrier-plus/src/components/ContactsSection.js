import styles from '../styles/ContactsSection.module.css';

const ContactsSection = () => {
  return (
    <section className={styles.contactsSection}>
      
      <div className={styles.contactsContainer}>
        <h2>OUR CONTACTS</h2>
        <div className={styles.contactBlock}>
          <h3>Department of support for private clients</h3>
          <p>Phone: <a href="tel:+380500575960">+38 050 057-59-60</a></p>
          <p>E-mail: <a href="mailto:network_shelter@ukr.net">network_shelter@ukr.net</a></p>
        </div>
        <div className={styles.contactBlock}>
          <h3>Support department for corporate clients</h3>
          <p>Phone: <a href="tel:+380632899886">+38 063 289-98-86</a></p>
          <p>Phone: <a href="tel:+380674593946">+38 067 459-39-46</a></p>
          <p>E-mail: <a href="mailto:shelterukraine.sale@ukr.net">shelterukraine.sale@ukr.net</a></p>
          <p>E-mail: <a href="mailto:shelterukraine.sale2@ukr.net">shelterukraine.sale2@ukr.net</a></p>
        </div>
        <div className={styles.contactBlock}>
          <h3>Main office</h3>
          <p>Phone: <a href="tel:+380734220391">+38 073 422-03-91</a></p>
          <p>E-mail: <a href="mailto:shelter.ukraine.23@gmail.com">shelter.ukraine.23@gmail.com</a></p>
          <p>Address: м. Київ, вул. Бориспільська, 9</p>
        </div>
      </div>

      <div className={styles.formContainer}>
        <h3>ORDER A CALL</h3>
        <form className={styles.contactForm}>
          <label htmlFor="name">Your name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Steve"
            required
          />
          <label htmlFor="email">Your E-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="steve@mail.com"
            required
          />
          <label htmlFor="phone">Phone number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="+38(0"
            required
          />
          <button type="submit">Order</button>
        </form>
      </div>
    </section>
  );
};

export default ContactsSection;