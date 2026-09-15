const STORAGE_KEY = 'audio_academy_progress';

const initialProgress = {
  classes: {} 
  // Cada clase guardará: { theoryRead: boolean, flashcardsDone: boolean, quizPassed: boolean, quizScore: number | null }
};

export const getProgress = () => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : initialProgress;
  } catch {
    return initialProgress;
  }
};

export const saveClassProgress = (classId, updates) => {
  const current = getProgress();
  const classProgress = current.classes[classId] || {
    theoryRead: false,
    flashcardsDone: false,
    quizPassed: false,
    quizScore: null
  };

  current.classes[classId] = { ...classProgress, ...updates };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(current));
  return current;
};

export const resetProgress = (classId = null) => {
  if (classId) {
    const current = getProgress();
    delete current.classes[classId];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(current));
    return current;
  } else {
    localStorage.removeItem(STORAGE_KEY);
    return initialProgress;
  }
};