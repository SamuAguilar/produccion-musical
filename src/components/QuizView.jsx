import React, { useState, useEffect } from 'react';

export default function QuizView({ questions, title }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [showSummary, setShowSummary] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [currentIndex, showSummary]);

  const currentQ = questions[currentIndex];
  const progressPercent = Math.round(((currentIndex) / questions.length) * 100);

  const handleSelect = (optionIdx) => {
    if (isAnswered) return;
    setSelectedOption(optionIdx);
    setIsAnswered(true);

    if (optionIdx === currentQ.correct) {
      setScore(prev => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setShowSummary(true);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setShowSummary(false);
  };

  // Pantalla de resumen final
  if (showSummary) {
    const approved = score >= Math.ceil(questions.length * 0.7);

    return (
      <div className="max-w-md mx-auto text-center bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl space-y-6">
        <div className="text-5xl">
          {approved ? '🎉' : '📚'}
        </div>
        <div>
          <h2 className="text-2xl font-bold text-white">
            {approved ? '¡Excelente Trabajo!' : 'Buen Intento'}
          </h2>
          <p className="text-sm text-slate-400 mt-1">{title}</p>
        </div>

        <div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-6">
          <span className="text-4xl font-extrabold text-emerald-400">
            {score} / {questions.length}
          </span>
          <p className="text-xs text-slate-500 uppercase tracking-widest mt-1">
            Aciertos ({Math.round((score / questions.length) * 100)}%)
          </p>
        </div>

        <button
          onClick={handleRestart}
          className="w-full py-3.5 px-6 rounded-xl font-bold bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition shadow-lg shadow-emerald-500/10"
        >
          Repetir Examen
        </button>
      </div>
    );
  }

  const isCorrect = selectedOption === currentQ.correct;

  return (
    <div className="max-w-2xl mx-auto space-y-5 px-2 sm:px-0">
      {/* Barra de progreso */}
      <div className="space-y-2">
        <div className="flex justify-between items-center text-xs font-semibold text-slate-400">
          <span>Pregunta {currentIndex + 1} de {questions.length}</span>
          <span className="text-emerald-400 font-mono">{progressPercent}%</span>
        </div>
        <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-emerald-500 transition-all duration-300 ease-out"
            style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Tarjeta de la pregunta */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
        <div className="flex items-start gap-3">
          <span className="flex-shrink-0 w-8 h-8 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-sm font-bold text-emerald-400">
            {currentIndex + 1}
          </span>
          <h3 className="text-lg sm:text-xl font-semibold text-white leading-snug">
            {currentQ.question}
          </h3>
        </div>

        {/* Opciones */}
        <div className="space-y-3">
          {currentQ.options.map((opt, idx) => {
            let btnStyle = "w-full text-left p-4 rounded-2xl border text-sm sm:text-base transition-all flex items-start gap-3 ";

            if (!isAnswered) {
              btnStyle += "border-slate-800 bg-slate-950/60 hover:border-slate-700 hover:bg-slate-800/50 text-slate-200 cursor-pointer";
            } else {
              if (idx === currentQ.correct) {
                btnStyle += "border-emerald-500 bg-emerald-500/20 text-emerald-200 font-medium";
              } else if (idx === selectedOption) {
                btnStyle += "border-rose-500 bg-rose-500/20 text-rose-200 font-medium";
              } else {
                btnStyle += "border-slate-800/60 bg-slate-950/20 text-slate-500 opacity-50 cursor-not-allowed";
              }
            }

            return (
              <button
                key={idx}
                disabled={isAnswered}
                onClick={() => handleSelect(idx)}
                className={btnStyle}
              >
                <span className="text-xs font-mono text-slate-500 mt-1">
                  {String.fromCharCode(65 + idx)}.
                </span>
                <span className="flex-1">{opt}</span>
              </button>
            );
          })}
        </div>

        {/* Feedback visual y explicación (SOLO visible tras responder) */}
        {isAnswered && (
          <div className="space-y-4 pt-2 animate-fadeIn">
            {/* Mensaje de acierto / fallo */}
            <div
              className={`p-4 rounded-2xl border text-sm ${
                isCorrect
                  ? 'border-emerald-800/80 bg-emerald-950/40 text-emerald-200'
                  : 'border-rose-800/80 bg-rose-950/40 text-rose-200'
              }`}
            >
              <p className="font-bold mb-1">
                {isCorrect ? '✓ ¡Correcto!' : '✕ Incorrecto'}
              </p>
              <p className="text-xs sm:text-sm opacity-90">{currentQ.explanation}</p>
            </div>

            {/* Imagen técnica de refuerzo (Aparece únicamente al responder) */}
            {currentQ.image && (
              <div className="rounded-2xl overflow-hidden border border-slate-800 bg-slate-950">
                <img
                  src={currentQ.image.url}
                  alt={currentQ.image.caption || "Explicación visual"}
                  className="w-full max-h-56 object-cover object-center"
                />
                {currentQ.image.caption && (
                  <p className="text-xs text-slate-400 p-2.5 bg-slate-950 border-t border-slate-800">
                    💡 <strong>Referencia:</strong> {currentQ.image.caption}
                  </p>
                )}
              </div>
            )}

            {/* Botón Siguiente */}
            <button
              onClick={handleNext}
              className="w-full py-3.5 px-6 rounded-2xl font-bold bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition shadow-lg shadow-emerald-500/10"
            >
              {currentIndex + 1 < questions.length ? 'Siguiente Pregunta →' : 'Ver Resultados Finales'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}