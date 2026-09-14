import React, { useState } from 'react';
import { classesData } from './data';
import TheoryView from './components/TheoryView';
import QuizView from './components/QuizView';
import FlashcardView from './components/FlashcardView';

export default function App() {
  const [selectedClassId, setSelectedClassId] = useState(null); // null muestra la galería inicial
  const [activeTab, setActiveTab] = useState('theory'); // 'theory' | 'flashcards' | 'quiz'

  const currentClass = selectedClassId ? classesData[selectedClassId] : null;

  const handleSelectClass = (id) => {
    setSelectedClassId(Number(id));
    setActiveTab('theory'); // Al entrar a una clase, inicia siempre en Teoría
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      {/* Barra superior de navegación */}
      <header className="border-b border-slate-800 bg-slate-900/80 backdrop-blur sticky top-0 z-30 px-4 sm:px-8 py-3.5 flex flex-wrap justify-between items-center gap-3">
        <div 
          onClick={() => setSelectedClassId(null)} 
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center font-black text-slate-950 text-lg group-hover:scale-105 transition">
            ♪
          </div>
          <div>
            <h1 className="text-base font-bold text-white tracking-wide">AUDIO ACADEMY</h1>
            <p className="text-[10px] text-slate-400 uppercase tracking-wider">Entrenamiento de Producción</p>
          </div>
        </div>

        {/* Controles visibles únicamente cuando se está dentro de una clase */}
        {selectedClassId && (
          <div className="flex items-center gap-3 ml-auto sm:ml-0">
            {/* Botón para volver a la galería */}
            <button
              onClick={() => setSelectedClassId(null)}
              className="text-xs bg-slate-800 hover:bg-slate-700 text-slate-300 px-3 py-2 rounded-xl border border-slate-700 transition"
            >
              ← Galería
            </button>

            {/* Selector directo de clase */}
            <select
              value={selectedClassId}
              onChange={(e) => handleSelectClass(e.target.value)}
              className="bg-slate-800 border border-slate-700 text-white text-xs sm:text-sm rounded-xl px-3 py-2 outline-none focus:border-emerald-500 transition cursor-pointer"
            >
              {Object.keys(classesData).map((id) => (
                <option key={id} value={id}>
                  Clase {id}: {classesData[id].title.slice(0, 20)}...
                </option>
              ))}
            </select>

            {/* Switch de 3 Modos */}
            <div className="flex bg-slate-950 border border-slate-800 rounded-xl p-1 gap-1">
              <button
                onClick={() => setActiveTab('theory')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                  activeTab === 'theory'
                    ? 'bg-emerald-500 text-slate-950 shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                📖 Teoría
              </button>
              <button
                onClick={() => setActiveTab('flashcards')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                  activeTab === 'flashcards'
                    ? 'bg-emerald-500 text-slate-950 shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                🃏 Flashcards
              </button>
              <button
                onClick={() => setActiveTab('quiz')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                  activeTab === 'quiz'
                    ? 'bg-emerald-500 text-slate-950 shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                📝 Examen
              </button>
            </div>
          </div>
        )}
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

                    <div className="flex items-center gap-2 text-[11px] text-slate-500 font-mono mt-4 pt-3 border-t border-slate-800/80">
                      <span>{item.sections?.length || 0} temas</span>
                      <span>•</span>
                      <span>{item.flashcards?.length || 0} tarjetas</span>
                      <span>•</span>
                      <span>{item.quiz?.length || 0} preguntas</span>
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
                onStartFlashcards={() => setActiveTab('flashcards')}
                onStartQuiz={() => setActiveTab('quiz')}
              />
            )}
            {activeTab === 'flashcards' && (
              <FlashcardView cards={currentClass.flashcards} title={currentClass.title} />
            )}
            {activeTab === 'quiz' && (
              <QuizView questions={currentClass.quiz} title={currentClass.title} />
            )}
          </div>
        )}
      </main>
    </div>
  );
}