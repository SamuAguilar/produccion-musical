import React, { useEffect } from 'react';

export default function TheoryView({ data, onStartFlashcards, onStartQuiz }) {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [data?.id]);

  if (!data.sections || data.sections.length === 0) {
    return (
      <div className="max-w-3xl mx-auto p-6 bg-slate-900 border border-slate-800 rounded-3xl text-center text-slate-400">
        <p>No hay contenido teórico cargado para esta clase.</p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto space-y-8 text-slate-300">
      {/* Encabezado */}
      <div className="border-b border-slate-800 pb-6">
        <span className="text-xs font-bold tracking-wider text-emerald-400 uppercase bg-emerald-950/60 border border-emerald-800/60 px-2.5 py-1 rounded-md">
          Apunte de Estudio • Clase {data.id}
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold text-white mt-3">{data.title}</h2>
        <p className="text-sm text-slate-400 mt-2 leading-relaxed">{data.summary}</p>
      </div>

      {/* Secciones de contenido */}
      <div className="space-y-6">
        {data.sections.map((sec, idx) => (
          <article
            key={idx}
            className="bg-slate-900/70 border border-slate-800/80 rounded-2xl p-6 space-y-3"
          >
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="text-emerald-400 text-sm font-mono">{idx + 1}.</span>
              {sec.title}
            </h3>
            <div className="text-sm text-slate-300 leading-relaxed space-y-2 whitespace-pre-line">
              {sec.content}
            </div>
            {sec.bulletPoints && sec.bulletPoints.length > 0 && (
              <ul className="list-disc list-inside space-y-1 text-sm text-slate-400 pt-2">
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

      {/* Botones de acción inferior */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-800">
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
  );
}