import React, { useState, useEffect, useCallback } from 'react';

export default function FlashcardView({ cards, title, initialIndex = 0 }) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex || 0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [shouldPulse, setShouldPulse] = useState(false);

  useEffect(() => {
    if (initialIndex !== undefined && initialIndex !== null) {
      setCurrentIndex(initialIndex);
      setIsFlipped(false);
      setShouldPulse(true);
      const timer = setTimeout(() => setShouldPulse(false), 2200);
      return () => clearTimeout(timer);
    }
  }, [initialIndex]);

  const handleNext = useCallback(() => {
    setIsFlipped(false);
    setCurrentIndex(prev => (prev + 1) % cards.length);
  }, [cards.length]);

  const handlePrev = useCallback(() => {
    setIsFlipped(false);
    setCurrentIndex(prev => (prev - 1 + cards.length) % cards.length);
  }, [cards.length]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [currentIndex]);

  // Atajos de teclado: Espacio para voltear, Flechas para navegar
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === 'Space') {
        e.preventDefault();
        setIsFlipped(prev => !prev);
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev]);

  const currentCard = cards[currentIndex];

  return (
    <div className="max-w-xl mx-auto px-3 sm:px-0 space-y-6 select-none w-full overflow-x-clip">
      <div className="text-center">
        <span className="text-xs font-bold tracking-wider text-emerald-400 uppercase bg-emerald-950/60 border border-emerald-800/60 px-2.5 py-1 rounded-md">
          Tarjetas de Memorización
        </span>
        <h2 className="text-xl sm:text-2xl font-bold text-white mt-2">{title}</h2>
        <p className="text-xs text-slate-400 mt-1">
          Presiona la tarjeta o la barra espaciadora para girar.
        </p>
      </div>

{/* Contenedor con Perspectiva 3D */}
      <div
        className="perspective-1000 w-full max-w-full cursor-pointer overflow-hidden py-2"
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <div
          className={`relative w-full min-h-[320px] transition-transform duration-500 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''
            }`}
        >
          {/* CARA FRONTAL (Pregunta) */}
          <div className={`absolute inset-0 w-full h-full backface-hidden bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl transition-all duration-300 ${
            shouldPulse ? 'highlight-pulse' : ''
          }`}>
            <div className="flex justify-between items-center text-xs font-semibold text-slate-500">
              <span>Tarjeta {currentIndex + 1} de {cards.length}</span>
              <span className="px-2.5 py-1 rounded-md border border-slate-800 text-slate-400 bg-slate-950/50 uppercase tracking-wider text-[11px]">
                Pregunta
              </span>
            </div>

            <div className="my-auto py-4 text-center">
              <p className="text-xl sm:text-2xl font-semibold text-white leading-relaxed">
                {currentCard.front}
              </p>
            </div>

            <div className="text-center">
              <span className="text-[11px] text-slate-500">
                Toca o presiona [Espacio] para voltear
              </span>
            </div>
          </div>

          {/* CARA DORSAL (Respuesta) */}
          <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-slate-900 border border-emerald-500/30 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl">
            <div className="flex justify-between items-center text-xs font-semibold text-slate-500">
              <span>Tarjeta {currentIndex + 1} de {cards.length}</span>
              <span className="px-2.5 py-1 rounded-md border border-emerald-500/40 text-emerald-300 bg-emerald-950/40 uppercase tracking-wider text-[11px]">
                Respuesta
              </span>
            </div>

            <div className="my-auto py-4 text-center">
              <p className="text-lg sm:text-xl font-medium text-emerald-100 leading-relaxed">
                {currentCard.back}
              </p>
            </div>

            <div className="text-center">
              <span className="text-[11px] text-slate-500">
                Toca para volver a la pregunta
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Controles Inferiores */}
      <div className="flex items-center justify-between gap-3">
        <button
          onClick={handlePrev}
          className="flex-1 py-3 px-4 bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-300 hover:text-white rounded-xl text-sm font-semibold transition"
        >
          ← Anterior
        </button>
        <button
          onClick={() => setIsFlipped(!isFlipped)}
          className="py-3 px-5 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20 rounded-xl text-sm font-semibold transition"
        >
          {isFlipped ? 'Voltear' : 'Ver Respuesta'}
        </button>
        <button
          onClick={handleNext}
          className="flex-1 py-3 px-4 bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-300 hover:text-white rounded-xl text-sm font-semibold transition"
        >
          Siguiente →
        </button>
      </div>
    </div>
  );
}