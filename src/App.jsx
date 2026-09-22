import React, { useState, useEffect } from 'react';
import { classesData } from './data';
import TheoryView from './components/TheoryView';
import QuizView from './components/QuizView';
import FlashcardView from './components/FlashcardView';
import SearchModal from './components/SearchModal';
import { getProgress, saveClassProgress, resetProgress } from './services/progressService';

export default function App() {
  const [selectedClassId, setSelectedClassId] = useState(null); // null muestra la galería inicial
  const [activeTab, setActiveTab] = useState('theory'); // 'theory' | 'flashcards' | 'quiz'
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [highlightSectionIdx, setHighlightSectionIdx] = useState(null);
  const [targetCardIdx, setTargetCardIdx] = useState(null);
  const [userProgress, setUserProgress] = useState(getProgress());

  // Sincronización con el botón Atrás del celular y navegador
  useEffect(() => {
    const handlePopState = () => {
      if (selectedClassId !== null) {
        setSelectedClassId(null);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [selectedClassId]);

  // Escuchar eventos automáticos de completado
  React.useEffect(() => {
    const handleTheoryRead = (e) => {
      const updated = saveClassProgress(e.detail.classId, { theoryRead: true });
      setUserProgress({ ...updated });
    };

    const handleQuizCompleted = (e) => {
      if (selectedClassId) {
        const updated = saveClassProgress(selectedClassId, {
          quizPassed: e.detail.passed,
          quizScore: e.detail.score
        });
        setUserProgress({ ...updated });
      }
    };

    window.addEventListener('markTheoryRead', handleTheoryRead);
    window.addEventListener('quizCompleted', handleQuizCompleted);

    return () => {
      window.removeEventListener('markTheoryRead', handleTheoryRead);
      window.removeEventListener('quizCompleted', handleQuizCompleted);
    };
  }, [selectedClassId]);

  // Atajo global Ctrl+K o Cmd+K para abrir el buscador
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const currentClass = selectedClassId ? classesData[selectedClassId] : null;

  const handleSelectClass = (id) => {
    if (!selectedClassId) {
      window.history.pushState({ classOpen: true }, '');
    }
    setSelectedClassId(Number(id));
    setActiveTab('theory'); // Al entrar a una clase, inicia siempre en Teoría
  };

  const handleBackToGallery = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      {/* Barra superior de navegación */}
      <header className="border-b border-slate-800 bg-slate-900/80 backdrop-blur sticky top-0 z-30 px-4">
        <div className="max-w-5xl mx-auto py-3.5 flex flex-wrap justify-between items-center gap-3">
          <div
            onClick={handleBackToGallery}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center font-black text-slate-950 text-lg group-hover:scale-105 transition">
              ♪
            </div>
            <div>
              <h1 className="text-base font-bold text-white tracking-wide">INSTITUTO</h1>
              <p className="text-[10px] text-slate-400 uppercase tracking-wider">Entrenamiento de Producción</p>
            </div>
          </div>

          {/* Botón de acceso rápido al buscador */}
          <button
            onClick={() => setIsSearchOpen(true)}
            className="flex items-center gap-2 bg-slate-800/90 hover:bg-slate-700 text-slate-300 px-3 py-1.5 rounded-xl border border-slate-700 text-xs transition ml-auto sm:ml-0"
          >
            <span>🔍</span>
            <span className="hidden sm:inline">Buscar apunte...</span>
          </button>

          {/* Controles visibles únicamente cuando se está dentro de una clase */}
          {selectedClassId && (
            <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 mt-2 sm:mt-0">
              <div className="flex items-center gap-2 w-full sm:w-auto">
                {/* Botón para volver a la galería */}
                <button
                  onClick={handleBackToGallery}
                  className="shrink-0 text-xs bg-slate-800 hover:bg-slate-700 text-slate-300 px-3 py-2 rounded-xl border border-slate-700 transition"
                >
                  ← Galería
                </button>

                {/* Selector directo de clase */}
                <select
                  value={selectedClassId}
                  onChange={(e) => handleSelectClass(e.target.value)}
                  className="flex-1 sm:w-48 bg-slate-800 border border-slate-700 text-white text-xs rounded-xl px-2.5 py-2 outline-none focus:border-emerald-500 transition cursor-pointer truncate"
                >
                  {Object.keys(classesData).map((id) => (
                    <option key={id} value={id}>
                      Clase {id}: {classesData[id].title.slice(0, 20)}...
                    </option>
                  ))}
                </select>

                {/* Botón para reiniciar progreso de la clase actual */}
                <button
                  onClick={() => {
                    if (window.confirm(`¿Reiniciar el progreso de la Clase ${selectedClassId}?`)) {
                      const updated = resetProgress(selectedClassId);
                      setUserProgress({ ...updated });
                    }
                  }}
                  className="shrink-0 p-2 text-slate-500 hover:text-rose-400 bg-slate-900 border border-slate-800 hover:border-rose-900/50 rounded-xl transition text-xs"
                  title="Reiniciar progreso de esta clase"
                >
                  ↺
                </button>
              </div>

              {/* Switch de 3 Modos (Distribuido parejo en móviles) */}
              <div className="grid grid-cols-3 bg-slate-950 border border-slate-800 rounded-xl p-1 gap-1 w-full sm:w-auto">
                <button
                  onClick={() => setActiveTab('theory')}
                  className={`py-2 sm:py-1.5 px-2 rounded-lg text-xs font-semibold text-center transition truncate ${
                    activeTab === 'theory'
                      ? 'bg-emerald-500 text-slate-950 font-bold shadow'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  📖 Teoría
                </button>
                <button
                  onClick={() => setActiveTab('flashcards')}
                  className={`py-2 sm:py-1.5 px-2 rounded-lg text-xs font-semibold text-center transition truncate ${
                    activeTab === 'flashcards'
                      ? 'bg-emerald-500 text-slate-950 font-bold shadow'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  🃏 Tarjetas
                </button>
                <button
                  onClick={() => setActiveTab('quiz')}
                  className={`py-2 sm:py-1.5 px-2 rounded-lg text-xs font-semibold text-center transition truncate ${
                    activeTab === 'quiz'
                      ? 'bg-emerald-500 text-slate-950 font-bold shadow'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  📝 Examen
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Contenedor principal */}
      <main className="flex-1 w-full max-w-5xl mx-auto py-6 sm:py-8 px-4">
        {/* VISTA 1: Galería Principal de Clases */}
        {!selectedClassId ? (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">Módulos del Curso</h2>
              <p className="text-sm text-slate-400 mt-1">Selecciona una clase para ingresar a la teoría, flashcards y examen de evaluación.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {Object.keys(classesData).map((id) => {
                const item = classesData[id];
                return (
                  <div
                    key={id}
                    onClick={() => handleSelectClass(id)}
                    className="bg-slate-900 border border-slate-800 hover:border-emerald-500/50 rounded-2xl p-5 cursor-pointer transition flex flex-col justify-between group hover:shadow-lg hover:shadow-emerald-950/20"
                  >
                    <div>
                      <div className="flex justify-between items-start mb-3">
                        <span className="text-xs font-mono font-bold bg-emerald-950 border border-emerald-800 text-emerald-400 px-2.5 py-0.5 rounded-md">
                          CLASE {id}
                        </span>
                        <span className="text-xs text-slate-500 group-hover:text-emerald-400 transition">
                          Entrar →
                        </span>
                      </div>
                      <h3 className="font-bold text-white text-base group-hover:text-emerald-300 transition line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-400 mt-2 line-clamp-3 leading-relaxed">
                        {item.summary}
                      </p>
                    </div>

                    {/* Indicadores de progreso guardado */}
                    <div className="flex items-center justify-between text-[11px] font-mono mt-4 pt-3 border-t border-slate-800/80">
                      <div className="flex items-center gap-2">
                        <span className={`px-2 py-0.5 rounded ${
                          userProgress.classes[id]?.theoryRead 
                            ? 'bg-emerald-950 text-emerald-400 border border-emerald-800/60 font-semibold' 
                            : 'text-slate-500 bg-slate-950/40'
                        }`}>
                          {userProgress.classes[id]?.theoryRead ? '✓ Teoría' : 'Teoría'}
                        </span>
                        <span className={`px-2 py-0.5 rounded ${
                          userProgress.classes[id]?.quizPassed 
                            ? 'bg-emerald-950 text-emerald-400 border border-emerald-800/60 font-semibold' 
                            : 'text-slate-500 bg-slate-950/40'
                        }`}>
                          {userProgress.classes[id]?.quizPassed 
                            ? `✓ Examen (${userProgress.classes[id].quizScore} pts)` 
                            : 'Examen'}
                        </span>
                      </div>
                      
                      {userProgress.classes[id]?.theoryRead && userProgress.classes[id]?.quizPassed && (
                        <span className="text-emerald-400 font-bold">100%</span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          /* VISTA 2: Vista Interna de la Clase */
          <div>
            {activeTab === 'theory' && (
              <TheoryView
                data={currentClass}
                isRead={userProgress.classes[currentClass.id]?.theoryRead}
                onToggleRead={() => {
                  const currentlyRead = !!userProgress.classes[currentClass.id]?.theoryRead;
                  const updated = saveClassProgress(currentClass.id, { theoryRead: !currentlyRead });
                  setUserProgress({ ...updated });
                }}
                highlightSectionIdx={highlightSectionIdx}
                onStartFlashcards={() => setActiveTab('flashcards')}
                onStartQuiz={() => setActiveTab('quiz')}
              />
            )}
            {activeTab === 'flashcards' && (
              <FlashcardView
                cards={currentClass.flashcards}
                title={currentClass.title}
                initialIndex={targetCardIdx}
              />
            )}
            {activeTab === 'quiz' && (
              <QuizView questions={currentClass.quiz} title={currentClass.title} />
            )}
          </div>
        )}
      </main>

      {/* Modal de Búsqueda Global */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        classesData={classesData}
        onSelectResult={(classId, tab, sectionIdx, cardIdx) => {
          handleSelectClass(classId);
          setActiveTab(tab);
          setHighlightSectionIdx(sectionIdx !== undefined ? sectionIdx : null);
          setTargetCardIdx(cardIdx !== undefined ? cardIdx : 0);
        }}
      />
    </div>
  );
}