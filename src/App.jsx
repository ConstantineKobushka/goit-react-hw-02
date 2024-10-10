import { useState, useEffect } from 'react';
import Description from './components/Description/Description';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';
import Notification from './components/Notification/Notification';

function App() {
  function initialFeedback() {
    const feedbackFromLocalStorage = localStorage.getItem('feedbackData');
    return feedbackFromLocalStorage ? JSON.parse(feedbackFromLocalStorage) : { good: 0, neutral: 0, bad: 0 };
  }

  const [feedback, setFeedback] = useState(initialFeedback());

  useEffect(() => {
    localStorage.setItem('feedbackData', JSON.stringify(feedback));
  }, [feedback]);

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positivePercent = Math.round((feedback.good / totalFeedback) * 100);

  function updateFeedback(feedbackType) {
    setFeedback((prevFeedback) => ({ ...prevFeedback, [feedbackType]: prevFeedback[feedbackType] + 1 }));
  }

  function resetFeedback() {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  }

  return (
    <>
      <Description />
      <Options onUpdateFeedback={updateFeedback} onResetFeedback={resetFeedback} totalFeedback={totalFeedback} />
      {totalFeedback > 0 && (
        <Feedback
          good={feedback.good}
          neutral={feedback.neutral}
          bad={feedback.bad}
          total={totalFeedback}
          percent={positivePercent}
        />
      )}
      {totalFeedback === 0 && <Notification />}
    </>
  );
}

export default App;
