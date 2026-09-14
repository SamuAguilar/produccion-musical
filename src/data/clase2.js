export const clase2 = {
  id: 2,
  title: "Fundamentos del Sonido y del Estudio de Grabación",
  summary: "Acústica básica, características del sonido, flujo de señal, microfonía y técnicas vocales.",
  sections: [
    {
      title: "La Naturaleza Física del Sonido y el Medio de Propagación",
      content: "El sonido no viaja de forma abstracta; es una vibración mecánica que requiere indispensablemente de un medio físico elástico (aire, agua o sólidos) para propagarse mediante la colisión de sus moléculas. Sin partículas que oscilen, no existe la transmisión sonora.",
      bulletPoints: [
        { label: "En el vacío", text: "No hay sonido posible debido a la ausencia de materia molecular que transmita la onda mecánica." },
        { label: "En sólidos", text: "El sonido viaja con mucha mayor velocidad y eficacia que en el aire por la proximidad y cohesión molecular (ejemplo histórico de escuchar el tren apoyando el oído en los rieles)." },
        { label: "Acústica de salas", text: "Aislar no es solo tapar rendijas; la energía se propaga mecánicamente por paredes, suelos y techos si las estructuras no están desvinculadas o flotantes." }
      ]
    },
    {
      title: "Las Cuatro Cualidades del Sonido",
      content: "Cada evento sonoro posee una identidad física determinada por cuatro parámetros fundamentales que dictan cómo conviven los instrumentos en la mezcla.",
      bulletPoints: [
        { label: "Frecuencia (Altura)", text: "Medida en Hercios (Hz). Define si un tono es grave, medio o agudo. El espectro audible humano sano abarca desde 20 Hz hasta 20.000 Hz (20 kHz)." },
        { label: "Enmascaramiento Espectral", text: "Ocurre cuando dos fuentes compiten en el mismo rango de frecuencias con alta energía (ej. bombo y bajo), haciendo que una tape a la otra." },
        { label: "Amplitud (Intensidad)", text: "Determina la presión acústica y la energía de la onda, percibiéndose como volumen sonoro." },
        { label: "Timbre (Identidad)", text: "Permite distinguir instrumentos sonando a igual nota e intensidad; está formado por la frecuencia fundamental y su serie única de armónicos." },
        { label: "Duración", text: "Permanencia temporal del sonido en el espacio, analizada a través del Sustain (sostenimiento) y el Release (liberación)." }
      ]
    },
    {
      title: "El Recorrido del Flujo de Señal (Signal Flow)",
      content: "Comprender la transformación de la energía desde la fuente hasta la computadora es mandatorio para diagnosticar fallos técnicos y optimizar la fidelidad de captura.",
      bulletPoints: [
        { label: "1. Fuente Sonora", text: "Generación de energía acústica en el aire (voz, instrumento)." },
        { label: "2. Micrófono (Transductor)", text: "Convierte la vibración acústica del aire en una señal eléctrica de bajo voltaje (Mic Level)." },
        { label: "3. Preamplificador", text: "Eslabón crítico que eleva la señal eléctrica débil a un voltaje operativo estándar de trabajo (Line Level) sin añadir ruido indeseado." },
        { label: "4. Conversor A/D", text: "Transforma el voltaje analógico continuo en código binario (ceros y unos) para el ordenador." },
        { label: "5. DAW", text: "Software multipista donde se procesa, edita y mezcla la señal registrada." },
        { label: "6. Monitoreo", text: "Conversión D/A inversa que restituye la señal a impulsos eléctricos para mover los monitores o auriculares." }
      ]
    },
    {
      title: "Tipologías de Micrófonos en el Estudio",
      content: "La elección del transductor condiciona la respuesta en frecuencia y la tolerancia dinámica de la captura.",
      bulletPoints: [
        { label: "Dinámicos", text: "Mecánicamente robustos y resistentes a presiones sonoras muy elevadas (SPL); estándar en escenarios, redoblantes y amplificadores de guitarra." },
        { label: "De Condensador", text: "Altamente sensibles, rápidos y detallados en transitorios; estándar para voces e instrumentos acústicos, requiriendo Phantom Power (+48V) para polarizarse." },
        { label: "De Cinta (Ribbon)", text: "Entregan una respuesta suave, cálida y sedosa en frecuencias altas, muy similar a la percepción del oído humano." }
      ]
    },
    {
      title: "Arquitectura de Ruteo: Auxiliares vs. Buses",
      content: "Diferenciar el envío en paralelo del agrupamiento en serie es la base del orden y procesamiento profesional.",
      bulletPoints: [
        { label: "Canales Auxiliares (Sends)", text: "Envían una porción duplicada de la señal hacia otro destino sin retirarla del canal original; se emplean para efectos temporales (Reverbs, Delays) o mezclas de auriculares." },
        { label: "Buses (Subgrupos)", text: "Agrupan físicamente múltiples señales para que viajen juntas hacia un destino común y se procesen con un único fader (ej. todos los micrófonos de la batería)." }
      ]
    },
    {
      title: "Técnica Microfónica y Posicionamiento Vocal",
      content: "La interacción física entre el intérprete y la cápsula define la limpieza acústica de la toma antes de recurrir a procesos correctivos.",
      bulletPoints: [
        { label: "Distancia de Trabajo", text: "Entre 10 y 20 cm de la cápsula para equilibrar el efecto de proximidad con el aire de la sala." },
        { label: "Eje y Angulación", text: "Alinear el micrófono a la altura de los ojos e inclinarlo sutilmente hacia la boca para que el flujo de plosivas (P, B) no golpee perpendicularmente el diafragma." },
        { label: "Filtro Antipop", text: "Esencial como escudo contra la humedad de la saliva, pero no reemplaza una angulación correcta para frenar ráfagas de aire." },
        { label: "Control Dinámico Corporal", text: "El cantante debe alejarse ligeramente unos centímetros al emitir pasajes de máxima intensidad para no saturar el preamplificador." }
      ]
    }
  ],
  quiz: [
    {
      id: 1,
      question: "¿Por qué el sonido no puede propagarse en el vacío del espacio?",
      options: [
        "Porque la gravedad cero neutraliza las ondas acústicas",
        "Porque requiere obligatoriamente de un medio elástico o material para vibrar",
        "Porque la velocidad de la luz cancela las vibraciones acústicas",
        "Porque la radiación espacial desintegra la oscilación mecánica"
      ],
      correct: 1,
      explanation: "El sonido es una vibración mecánica que depende de la colisión entre partículas de un medio elástico.",
      image: {
        url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=80",
        caption: "En el vacío espacial no existen moléculas que permitan la propagación mecánica."
      }
    },
    {
      id: 2,
      question: "Si comparamos la transmisión del sonido en sólidos frente al aire:",
      options: [
        "En el aire viaja más rápido debido a menor densidad",
        "Viaja exactamente a la misma velocidad en ambos medios",
        "En los sólidos viaja mucho más rápido y con mayor eficiencia",
        "En los sólidos se atenúa inmediatamente por fricción molecular"
      ],
      correct: 2,
      explanation: "La proximidad y enlace de las moléculas en sólidos permite transferir la energía cinética mucho más rápido que en gases.",
      image: {
        url: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=800&auto=format&fit=crop&q=80",
        caption: "Los rieles metálicos conducen el sonido a gran velocidad frente a la menor densidad del aire."
      }
    },
    {
      id: 3,
      question: "¿Cuál es el rango audible promedio del oído humano sano?",
      options: [
        "0 Hz a 10,000 Hz",
        "20 Hz a 20,000 Hz (20 kHz)",
        "100 Hz a 50,000 Hz",
        "1 kHz a 100 kHz"
      ],
      correct: 1,
      explanation: "El espectro perceptible estándar abarca desde 20 Hz (subgraves) hasta 20 kHz (agudos extremos).",
      image: {
        url: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&auto=format&fit=crop&q=80",
        caption: "Espectro audible de 20 Hz a 20 kHz."
      }
    },
    {
      id: 4,
      question: "¿Qué ocurre cuando dos fuentes (como bombo y bajo) compiten por la misma frecuencia?",
      options: [
        "Transducción cruzada",
        "Enmascaramiento espectral",
        "Saturación armónica",
        "Efecto Haas"
      ],
      correct: 1,
      explanation: "El enmascaramiento se produce cuando dos señales ocupan la misma zona del espectro, ocultándose mutuamente.",
      image: {
        url: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&auto=format&fit=crop&q=80",
        caption: "Separación espectral entre elementos percusivos y armónicos en mezcla."
      }
    },
    {
      id: 5,
      question: "¿Qué factor determina que distingamos un piano de una guitarra tocando la misma nota al mismo volumen?",
      options: [
        "La amplitud pura de la fundamental",
        "El timbre (frecuencia fundamental combinada con sus armónicos)",
        "La impedancia del preamplificador",
        "El tipo de filtro antipop utilizado"
      ],
      correct: 1,
      explanation: "El timbre es la huella digital acústica compuesta por los armónicos y formantes característicos del instrumento.",
      image: {
        url: "https://images.unsplash.com/photo-1520523839898-50712825e3a7?w=800&auto=format&fit=crop&q=80",
        caption: "El contenido armónico define el timbre distintivo de cada fuente sonora."
      }
    },
    {
      id: 6,
      question: "¿Cuál es la función del preamplificador en la cadena de captura?",
      options: [
        "Transformar la señal analógica en ceros y unos binarios",
        "Elevar la señal débil de micrófono a un nivel de línea estándar (Line Level)",
        "Cortar las frecuencias subsónicas automáticamente",
        "Monitorear la señal con latencia cero"
      ],
      correct: 1,
      explanation: "La cápsula genera una señal milivoltica (mic level) que el preamplificador eleva a nivel de línea.",
      image: {
        url: "https://images.unsplash.com/photo-1598653222000-6b7b7a552625?w=800&auto=format&fit=crop&q=80",
        caption: "Etapa de preamplificación y ganancia de señal."
      }
    },
    {
      id: 7,
      question: "¿Qué tipo de micrófono necesita alimentación Phantom Power (+48V) para funcionar?",
      options: [
        "Micrófono Dinámico estándar (ej. Shure SM58)",
        "Micrófono de Condensador",
        "Micrófono de Cinta Pasivo (Ribbon)",
        "Micrófono Piezocerámico"
      ],
      correct: 1,
      explanation: "Los micrófonos de condensador requieren voltaje externo para polarizar la cápsula y alimentar su circuito interno.",
      image: {
        url: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=800&auto=format&fit=crop&q=80",
        caption: "Micrófono de condensador para voz que opera con alimentación Phantom (+48V)."
      }
    },
    {
      id: 8,
      question: "¿Qué micrófono se caracteriza por aguantar gran presión sonora y ser ideal para fuentes fuertes como redoblantes?",
      options: [
        "Micrófono Dinámico",
        "Micrófono de Condensador miniatura",
        "Micrófono Ribbon de cinta ultrafina",
        "Micrófono PZM de superficie"
      ],
      correct: 0,
      explanation: "Los dinámicos poseen diafragmas y bobinas resistentes aptos para fuentes de alto SPL sin saturar ni deteriorarse.",
      image: {
        url: "https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?w=800&auto=format&fit=crop&q=80",
        caption: "Micrófono dinámico robusto para instrumentos con transitorios intensos."
      }
    },
    {
      id: 9,
      question: "En el DAW, ¿cuál es la diferencia de ruteo entre un canal Auxiliar de envío y un Bus?",
      options: [
        "El Bus solo acepta señales monofónicas y el Auxiliar señales estéreo",
        "El Auxiliar envía una copia en paralelo; el Bus agrupa señales completas en un destino común",
        "El Auxiliar sustituye la señal original y el Bus la destruye",
        "No existe ninguna diferencia técnica entre ambos"
      ],
      correct: 1,
      explanation: "Los auxiliares procesan en paralelo sin cortar la señal principal; los buses consolidan pistas en grupo.",
      image: {
        url: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&auto=format&fit=crop&q=80",
        caption: "Ruteo de mezcla: procesamiento paralelo vs sumatoria de buses."
      }
    },
    {
      id: 10,
      question: "Para evitar que el aire de las plosivas (P, B) golpee directamente la cápsula, se recomienda:",
      options: [
        "Pegar los labios a la rejilla a 1 cm",
        "Alinear el micrófono a la altura de los ojos e inclinarlo hacia la boca a 10-20 cm",
        "Colocar el micrófono en la nuca del cantante",
        "Cantar apuntando el micrófono hacia el techo en ángulo de 90°"
      ],
      correct: 1,
      explanation: "La angulación elevada desvía la columna directa de aire fuera del diafragma manteniendo claridad.",
      image: {
        url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=800&auto=format&fit=crop&q=80",
        caption: "Posicionamiento vocal profesional con filtro antipop a 15 cm."
      }
    }
  ],
  flashcards: [
    {
      front: "¿Qué es el sonido físicamente?",
      back: "Una vibración mecánica que se propaga a través de un medio elástico (aire, agua o sólidos).",
      image: {
        url: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&auto=format&fit=crop&q=80",
        caption: "Onda acústica en propagación física."
      }
    },
    {
      front: "¿Por qué no hay sonido en el vacío?",
      back: "Porque no existen partículas materiales o moléculas cuya vibración transmita la perturbación mecánica.",
      image: {
        url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=80",
        caption: "En el vacío no hay soporte físico para la vibración."
      }
    },
    {
      front: "¿Cómo viaja el sonido en sólidos respecto al aire?",
      back: "Viaja mucho más rápido y con mayor transferencia energética debido a la proximidad y cohesión de las partículas sólidas."
    },
    {
      front: "¿Por qué la insonorización exige desacople mecánico?",
      back: "Porque el sonido estructural se transmite por suelos, techos y paredes si no existen juntas elásticas o estructuras flotantes."
    },
    {
      front: "¿Cuál es el espectro audible humano sano?",
      back: "Rango de frecuencias comprendido entre 20 Hz y 20,000 Hz (20 kHz)."
    },
    {
      front: "¿Qué es el enmascaramiento espectral?",
      back: "Fenómeno en el cual un sonido de gran energía en cierto rango de frecuencias tapa a otro elemento ubicado en esa misma zona."
    },
    {
      front: "¿Qué es la amplitud sonora?",
      back: "La magnitud física o altura de la onda que determina la presión sonora y se percibe como volumen o intensidad."
    },
    {
      front: "¿Qué constituye el timbre de un instrumento?",
      back: "La frecuencia fundamental sumada al conjunto particular de armónicos y formantes característicos de la fuente.",
      image: {
        url: "https://images.unsplash.com/photo-1520523839898-50712825e3a7?w=800&auto=format&fit=crop&q=80",
        caption: "Estructura armónica sobre la frecuencia fundamental."
      }
    },
    {
      front: "¿Qué representan Sustain y Release?",
      back: "Sustain es la permanencia del sonido mientras la nota se mantiene pulsada; Release es la cola de extinción una vez liberada."
    },
    {
      front: "¿Qué es un transductor acústico?",
      back: "Un dispositivo capaz de convertir energía acústica mecánica en energía eléctrica (y viceversa, como los altavoces)."
    },
    {
      front: "¿Cuál es la función del preamplificador?",
      back: "Amplificar la débil señal de micrófono al voltaje estándar de trabajo de línea (Line Level) con la menor distorsión y ruido posibles.",
      image: {
        url: "https://images.unsplash.com/photo-1598653222000-6b7b7a552625?w=800&auto=format&fit=crop&q=80",
        caption: "Etapa de preamplificación analógica profesional."
      }
    },
    {
      front: "¿Qué realiza el conversor A/D?",
      back: "Muestrea y cuantifica la señal eléctrica continua para codificarla en valores binarios (0 y 1) legibles por el software DAW."
    },
    {
      front: "¿Por qué los micrófonos dinámicos son tan usados en baterías?",
      back: "Por su bobina móvil resistente que tolera picos extremos de presión sonora (SPL) sin saturar internamente ni romperse.",
      image: {
        url: "https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?w=800&auto=format&fit=crop&q=80",
        caption: "Cápsula dinámica frente a fuentes de alta presión."
      }
    },
    {
      front: "¿Por qué el micrófono de condensador requiere Phantom Power (+48V)?",
      back: "Para cargar electrostáticamente el condensador de la cápsula y alimentar su etapa preamplificadora interna activa.",
      image: {
        url: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=800&auto=format&fit=crop&q=80",
        caption: "Micrófono de condensador de estudio."
      }
    },
    {
      front: "¿Qué características de sonido tiene un micrófono Ribbon (de cinta)?",
      back: "Una respuesta en agudos muy suave y natural, con un comportamiento transitorio veloz similar a la audición humana."
    },
    {
      front: "¿Para qué se utiliza un canal Auxiliar de envío en mezcla?",
      back: "Para enviar copias de audio a procesadores paralelos (reverb, delay) o a mezclas independientes de auriculares sin cortar la señal directa."
    },
    {
      front: "¿Para qué se utiliza un canal Bus?",
      back: "Para juntar varias señales relacionadas (por ejemplo, todos los micrófonos de la batería) y procesarlas con un solo juego de faders y plugins."
    },
    {
      front: "¿Cuál es la distancia recomendada para grabar voces?",
      back: "Entre 10 y 20 cm respecto a la cápsula, manteniendo control de tono y rango dinámico.",
      image: {
        url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=800&auto=format&fit=crop&q=80",
        caption: "Distancia óptima de trabajo vocal en cabina."
      }
    },
    {
      front: "¿Cómo ayuda angular el micrófono a la altura de los ojos frente a las plosivas?",
      back: "Evita que las ráfagas de aire de las consonantes P y B golpeen perpendicularmente el diafragma, dispersando la energía mecánica."
    },
    {
      front: "¿Cómo debe modular su distancia un cantante profesional en tomas dinámicas?",
      back: "Alejarse unos centímetros en pasajes de volumen alto para no sobrecargar el preamplificador y acercarse en susurros para ganar cuerpo."
    }
  ]
};