import { useEffect, useState } from 'react';

import Description from './components/Description/Description';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';
import Notification from './components/Notification/Notification';

const App = () => {
  const isValidFeedback = obj =>
    obj &&
    typeof obj === 'object' &&
    typeof obj.good === 'number' &&
    typeof obj.neutral === 'number' &&
    typeof obj.bad === 'number';

  const loadFromStorage = (key, fallback) => {
    try {
      const data = localStorage.getItem(key);
      if (!data) return fallback;

      const parsed = JSON.parse(data);

      return isValidFeedback(parsed) ? parsed : fallback;
    } catch {
      return fallback;
    }
  };

  const [feedback, setFeedback] = useState(() =>
    loadFromStorage('feedback', {
      good: 0,
      neutral: 0,
      bad: 0,
    })
  );

  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback =
    totalFeedback === 0 ? 0 : Math.round((feedback.good / totalFeedback) * 100);

  const updateFeedback = feedbackType => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };
  const resetFeedback = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };
  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        resetFeedback={resetFeedback}
      />
      {totalFeedback > 0 && (
        <Feedback
          feedback={feedback}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      )}
      {totalFeedback === 0 && <Notification />}
    </>
  );
};

export default App;
