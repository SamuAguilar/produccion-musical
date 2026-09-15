import React, { useState, useMemo, useEffect } from 'react';
import Fuse from 'fuse.js';

export default function SearchModal({ isOpen, onClose, classesData, onSelectResult }) {
  const [query, setQuery] = useState('');

  // 1. Aplanar todo el contenido de las clases en un índice único de búsqueda
  const searchableItems = useMemo(() => {
    const items = [];

    Object.keys(classesData).forEach((classId) => {
      const cls = classesData[classId];

      // A) Teoría (Secciones y Viñetas)
      cls.sections?.forEach((sec, idx) => {
        const bulletsText = sec.bulletPoints?.map((bp) => `${bp.label}: ${bp.text}`).join(' ') || '';
        items.push({
          type: 'Teoría',
          classId: Number(classId),
          classTitle: cls.title,
          title: sec.title,
          content: `${sec.content || ''} ${bulletsText}`,
          targetTab: 'theory',
          sectionIdx: idx,
        });
      });

      // B) Flashcards (con índice de tarjeta)
      cls.flashcards?.forEach((fc, idx) => {
        items.push({
          type: 'Tarjeta',
          classId: Number(classId),
          classTitle: cls.title,
          title: fc.front,
          content: fc.back,
          targetTab: 'flashcards',
          cardIdx: idx,
        });
      });
    });

    return items;
  }, [classesData]);

  // 2. Configurar Fuse.js para búsqueda difusa y normalización
  const fuse = useMemo(() => {
    return new Fuse(searchableItems, {
      keys: [
        { name: 'title', weight: 0.6 },
        { name: 'content', weight: 0.3 },
        { name: 'classTitle', weight: 0.1 },
      ],
      threshold: 0.35, // Tolerancia a errores de tipeo y acentos
      ignoreLocation: true,
      minMatchCharLength: 2,
    });
  }, [searchableItems]);

  // Atajo ESC para cerrar
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const results = query.trim() ? fuse.search(query).slice(0, 10) : [];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 sm:pt-20 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
      <div
        className="w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Input del Buscador */}
        <div className="flex items-center px-4 py-3 border-b border-slate-800 gap-3 bg-slate-900/90">
          <span className="text-slate-400 text-lg">🔍</span>
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar concepto rápido (ej: fantom, microfono dinamico, hass)..."
            className="w-full bg-transparent text-sm sm:text-base text-white outline-none placeholder:text-slate-500"
          />
          <button
            onClick={onClose}
            className="text-xs bg-slate-800 text-slate-400 px-2 py-1 rounded-md border border-slate-700 hover:text-white"
          >
            ESC
          </button>
        </div>

        {/* Lista de Resultados */}
        <div className="overflow-y-auto p-3 space-y-2 flex-1">
          {query.trim() === '' ? (
            <div className="text-center py-10 text-slate-500 text-xs sm:text-sm">
              Escribe cualquier término técnico, concepto o duda para encontrar la lección exacta.
            </div>
          ) : results.length === 0 ? (
            <div className="text-center py-10 text-slate-500 text-xs sm:text-sm">
              No se encontraron coincidencias para "{query}".
            </div>
          ) : (
            results.map(({ item }, idx) => (
              <div
                key={idx}
                onClick={() => {
                  onSelectResult(item.classId, item.targetTab, item.sectionIdx, item.cardIdx);
                  onClose();
                }}
                className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 hover:border-emerald-500/50 hover:bg-slate-800/40 cursor-pointer transition flex flex-col gap-1.5"
              >
                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-emerald-400 font-mono font-bold">
                    Clase {item.classId} • {item.classTitle}
                  </span>
                  <span className="bg-slate-800 text-slate-300 px-2 py-0.5 rounded uppercase tracking-wider text-[10px] font-semibold border border-slate-700">
                    {item.type}
                  </span>
                </div>
                <h4 className="text-sm font-semibold text-white leading-snug">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                  {item.content}
                </p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}