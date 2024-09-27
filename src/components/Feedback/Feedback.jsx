import styles from './Feedback.module.css';

const Feedback = ({ good, neutral, bad, total, percent }) => {
  return (
    <>
      <p className={styles.feedback_text}>Good: {good}</p>
      <p className={styles.feedback_text}>Neutral: {neutral}</p>
      <p className={styles.feedback_text}>Bad: {bad}</p>
      <p className={styles.feedback_text}>Total: {total}</p>
      <p className={styles.feedback_text}>Positive: {percent}%</p>
    </>
  );
};

export default Feedback;
