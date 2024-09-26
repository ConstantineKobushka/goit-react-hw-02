import styles from './Description.module.css';

const Description = () => {
  return (
    <>
      <h1 className={styles.description_title}>Sip Happens Café</h1>
      <p className={styles.description_text}>
        Please leave your feedback about our service by selecting one of the options below.
      </p>
    </>
  );
};

export default Description;
