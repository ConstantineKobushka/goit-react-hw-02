import styles from './Options.module.css';

const Options = ({ onUpdateFeedback, onResetFeedback, totalFeedback }) => {
  function getTypeFeedback(event) {
    let typeOfFeedback = event.currentTarget.textContent.toLowerCase();
    onUpdateFeedback(typeOfFeedback);
  }
  return (
    <>
      <button className={styles.options_btn} onClick={getTypeFeedback} type='button'>
        Good
      </button>
      <button className={styles.options_btn} onClick={getTypeFeedback} type='button'>
        Neutral
      </button>
      <button className={styles.options_btn} onClick={getTypeFeedback} type='button'>
        Bad
      </button>
      {totalFeedback > 0 && (
        <button className={styles.options_btn} onClick={onResetFeedback} type='button'>
          Reset
        </button>
      )}
    </>
  );
};

export default Options;
