import React, { useEffect, useState } from 'react';

export default function TheoryView({ data, isRead, onToggleRead, highlightSectionIdx, onStartFlashcards, onStartQuiz }) {
  // Escala de tamaños: 'Normal' | 'Grande' | 'Extra'
  const [fontSizeLevel, setFontSizeLevel] = useState(0);

  const fontSizes = [
    { label: 'Normal', content: 'text-sm', bullet: 'text-sm', heading: 'text-lg' },
    { label: 'Grande', content: 'text-base', bullet: 'text-base', heading: 'text-xl' },
    { label: 'Extra', content: 'text-lg', bullet: 'text-lg', heading: 'text-2xl' }
  ];

  const currentSize = fontSizes[fontSizeLevel];

  const handleZoomIn = () => setFontSizeLevel(prev => Math.min(prev + 1, fontSizes.length - 1));
  const handleZoomOut = () => setFontSizeLevel(prev => Math.max(prev - 1, 0));

  useEffect(() => {
    if (highlightSectionIdx !== null && highlightSectionIdx !== undefined) {
      const el = document.getElementById(`section-${highlightSectionIdx}`);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [data?.id, highlightSectionIdx]);

  if (!data.sections || data.sections.length === 0) {
    return (
      <div className="max-w-3xl mx-auto p-6 bg-slate-900 border border-slate-800 rounded-3xl text-center text-slate-400">
        <p>No hay contenido teórico cargado para esta clase.</p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto space-y-8 text-slate-300">
      {/* Encabezado con Botonera de Zoom */}
      <div className="border-b border-slate-800 pb-6">
        <div className="flex items-center justify-between gap-3">
          <span className="text-xs font-bold tracking-wider text-emerald-400 uppercase bg-emerald-950/60 border border-emerald-800/60 px-2.5 py-1 rounded-md">
            Apunte de Estudio • Clase {data.id}
          </span>

          {/* Selector de tamaño de texto A- / A+ */}
          <div className="flex items-center gap-1 bg-slate-900 border border-slate-800 rounded-xl p-1 select-none">
            <button
              onClick={handleZoomOut}
              disabled={fontSizeLevel === 0}
              className="w-8 h-7 flex items-center justify-center rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 disabled:opacity-30 disabled:hover:bg-transparent font-bold text-xs transition"
              title="Achicar texto"
            >
              A-
            </button>
            <span className="text-[10px] font-mono text-slate-500 px-1">
              {currentSize.label}
            </span>
            <button
              onClick={handleZoomIn}
              disabled={fontSizeLevel === fontSizes.length - 1}
              className="w-8 h-7 flex items-center justify-center rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 disabled:opacity-30 disabled:hover:bg-transparent font-bold text-xs transition"
              title="Agrandar texto"
            >
              A+
            </button>
          </div>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold text-white mt-3">{data.title}</h2>
        <p className="text-sm text-slate-400 mt-2 leading-relaxed">{data.summary}</p>
      </div>

      {/* Secciones de contenido con tipografía adaptable */}
      <div className="space-y-6">
        {data.sections.map((sec, idx) => (
          <article
            key={idx}
            id={`section-${idx}`}
            className={`bg-slate-900/70 border border-slate-800/80 rounded-2xl p-6 space-y-3 transition-all duration-300 ${
              highlightSectionIdx === idx ? 'highlight-pulse' : ''
            }`}
          >
            <h3 className={`${currentSize.heading} font-bold text-white flex items-center gap-2 transition-all`}>
              <span className="text-emerald-400 text-sm font-mono">{idx + 1}.</span>
              {sec.title}
            </h3>
            <div className={`${currentSize.content} text-slate-300 leading-relaxed space-y-2 whitespace-pre-line transition-all`}>
              {sec.content}
            </div>
            {sec.bulletPoints && sec.bulletPoints.length > 0 && (
              <ul className={`list-disc list-inside space-y-1 ${currentSize.bullet} text-slate-400 pt-2 transition-all`}>
                {sec.bulletPoints.map((bp, bpIdx) => (
                  <li key={bpIdx} className="leading-snug">
                    <strong className="text-slate-200">{bp.label}: </strong>
                    {bp.text}
                  </li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>

      {/* Botones de acción inferior con persistencia directa */}
      <div className="space-y-4 pt-6 border-t border-slate-800">
        <button
          type="button"
          onClick={onToggleRead}
          className={`w-full py-3.5 px-4 rounded-xl text-sm font-bold transition flex items-center justify-center gap-2 border cursor-pointer ${
            isRead
              ? 'bg-emerald-500/20 border-emerald-500/60 text-emerald-300 hover:bg-rose-950/40 hover:border-rose-800/60 hover:text-rose-300'
              : 'bg-slate-900 border-slate-700 text-slate-300 hover:border-emerald-500/50 hover:bg-slate-800 hover:text-white'
          }`}
        >
          {isRead ? '✓ Apunte Teórico Completado (Clic para desmarcar)' : 'Marcar Apunte Teórico como Leído'}
        </button>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={onStartFlashcards}
            className="w-full sm:w-auto py-3 px-6 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-sm font-semibold transition"
          >
            🃏 Practicar con Flashcards
          </button>
          <button
            onClick={onStartQuiz}
            className="w-full sm:w-auto py-3 px-6 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl text-sm transition shadow-lg shadow-emerald-500/20"
          >
            📝 Rendir Examen →
          </button>
        </div>
      </div>
    </div>
  );
}