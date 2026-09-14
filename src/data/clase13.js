export const clase13 = {
  id: 13,
  title: "Grabación de Baterías en Estudio, Flujo y Análisis de Fase",
  summary: "Sesión de 8 micrófonos simultáneos, técnica del cable para alineación de Overheads (A/B), microfonía cuerpo a cuerpo, medidores Dorrough y gestión de sesiones multipista.",
  sections: [
    {
      title: "El Desafío Multipista: Filosofía y Flujo de Señal en Espacios Reducidos",
      content: "La grabación de una batería acústica completa con ocho micrófonos simultáneos en una sala pequeña (como un recinto de 3x3 metros) representa una prueba de fuego para cualquier ingeniero de sonido. Al multiplicar la cantidad de transductores abiertos en un espacio cerrado, el riesgo de cancelaciones de fase, ondas estacionarias y filtraciones (bleeding) se incrementa de forma exponencial.\n\nAnte cualquier anomalía en la sesión (un canal que no marca señal, un zumbido eléctrico o una caída de ganancia), el productor debe rastrear el flujo de señal paso a paso de forma metódica:\n1. Emisión Acústica: El impacto físico de la baqueta o maza sobre el parche genera una onda de presión molecular en el aire de la sala.\n2. Micrófono (Transductor): La cápsula intercepta esa perturbación mecánica y la transforma en una corriente eléctrica de muy bajo voltaje (Mic Level).\n3. Pachera (Patchbay Normalizado): La señal viaja por cables balanceados XLR (Canon) desde la sala de grabación hasta la central de conexiones (Patchbay). En un estudio bien estructurado, el patchbay está 'normalizado', lo que significa que el canal físico 1 de la sala se conecta de forma directa e interna con la entrada 1 de la interfaz de audio.\n4. Consola o Interfaz de Audio: Recibe el voltaje analógico procedente de la sala.\n5. Preamplificador: Aplica ganancia limpia para acondicionar la señal al nivel estándar de línea (Line Level).\n6. DAW (Digital Audio Workstation): El conversor A/D digitaliza la señal y la deposita en el software de grabación (donde Pro Tools representa el estándar de la industria internacional, utilizándose también Logic Pro).",
      image: {
        placeholder: true,
        comment: "Diagrama de flujo de señal en estudio: Tambor -> Micrófono -> Patchbay normalizado -> Entrada de Interfaz -> Preamplificador -> Conversor A/D -> Pistas del DAW."
      },
      bulletPoints: [
        { label: "Patchbay Normalizado", text: "Correspondencia directa uno a uno entre los conectores físicos de la sala y los canales de entrada de la interfaz de audio." },
        { label: "Estándar de Conversión", text: "Sesión configurada a 48 kHz de frecuencia de muestreo y 24-bit de profundidad de cuantificación." },
        { label: "Diagnóstico Metódico", text: "Rastrear la cadena eslabón por eslabón ante cualquier pérdida de señal o fallo de conexión." }
      ]
    },
    {
      title: "Set Up Previo: Afinación, Sordinas y Confort del Baterista",
      content: "El éxito de una sesión multipista no comienza al presionar grabar, sino en la puesta a punto previa en la sala. Antes de montar trípodes y tender cables, la batería debe estar perfectamente afinada y con su decaimiento (decay) controlado mediante gelatinas adhesivas (MoonGels) colocadas en los bordes de los parches para disipar armónicos excesivos (ring).\n\nAsimismo, la psicología de sesión y el confort del músico son determinantes para una interpretación sólida:\n• Pista Guía sin Distractores: Se alimenta al baterista en sus auriculares con una pista de referencia minimalista (un track rítmico/melódico limpio) junto a un pulso de metrónomo (click) inmutable.\n• Balance en Auriculares (Cue Mix): Es mandatorio ingresar a la cabina y acordar pacientemente con el baterista el nivel y balance de sus auriculares. Si el baterista no se escucha cómodo o el click lo aturde, tocará a destiempo y con dinámicas descontroladas.",
      image: {
        placeholder: true,
        comment: "Baterista en cabina con auriculares recibiendo la mezcla de monitoreo, con parches preparados con MoonGels."
      },
      bulletPoints: [
        { label: "Control de Decay", text: "Uso de MoonGels para atenuar colas armónicas largas antes de colocar micrófonos." },
        { label: "Monitoreo Personalizado", text: "Construir una mezcla de auriculares equilibrada entre claqueta y pista guía para garantizar una ejecución precisa." }
      ]
    },
    {
      title: "Microfonía Cuerpo por Cuerpo: El Set de 8 Canales",
      content: "Para registrar el kit completo en esta sesión de estudio se configuraron 8 puntos de captura estratégicos:\n\n1. Bombo (Kick) - AKG D112 (Dinámico especializado en graves):\nSe introduce levemente a través del orificio (sound port) del parche frontal, pero sin dejar la cápsula justo en la boca del agujero para que la ráfaga de aire directa no sobrecargue la membrana. Se angula apuntando hacia el punto de impacto donde la maza del pedal choca contra el parche batidor, capturando simultáneamente el peso grave del cuerpo y el chasquido del golpe.\n\n2. Redoblante Superior (Snare Top) - Shure SM57 (Dinámico de bobina móvil):\nSituado a unos dos dedos de altura sobre el parche batidor, orientado a 45 grados hacia el centro del tambor. Se monta con cuidado extremo fuera del radio de movimiento de las baquetas del músico y angulado para que el cuerpo y cable del micrófono no colisionen con el soporte del Hi-Hat.\n\n3. Redoblante Inferior (Snare Bottom / Bordona) - Shure Beta 57 (Dinámico supercardioide):\nApuntando a la malla metálica inferior para captar el crujido brillante de los alambres. Se angula dándole la espalda a la zona del bombo para que su patrón polar rechace la mayor cantidad posible de sangrado grave.\n\n4. Hi-Hat - Rode NT5 (Condensador de diafragma pequeño):\nRequiere alimentación Phantom Power (+48V). Se monta a 90 grados perpendicular apuntando hacia el tercio exterior del platillo (donde se concentran los agudos y el aire cristalino), evitando la campana central que generaría un timbre seco y estridente. Se mantiene a una distancia prudencial para no interferir con las manos del ejecutante.\n\n5. Tom Aéreo (Rack Tom) - Sennheiser MD 421 (Dinámico de diafragma grande):\nClásico histórico para toms por su pegada en frecuencias medias. Se orienta al centro del parche batidor, asegurando un emplazamiento seguro contra impactos accidentales.\n\n6. Tom de Piso (Floor Tom) - AKG C414 (Condensador de diafragma grande):\nSe elige un condensador de gran diafragma para extender la respuesta hacia el subgrave profundo que produce este tambor. Configuración en el chasis: Patrón polar Cardioide, Filtro Pasa Altos (HPF) apagado para retener todo el peso de los graves, y Pad atenuador activado en -20 dB para evitar que la enorme presión acústica del golpe sature el circuito interno del micrófono. Requiere Phantom Power (+48V).\n\n7 y 8. Platos Aéreos (Overheads L y R) - Aston Element (Dinámicos especiales):\nTransductores dinámicos diseñados con respuesta rápida similar a un condensador y una sedosidad que recuerda a los micrófonos de cinta. Exigen Phantom Power (+48V) para energizar su circuitería activa. Se disponen en configuración de par espaciado A/B a unos 50 cm de altura sobre los platos (calibrando la altura respecto al techo para evitar rebotes tempranos). Desde la perspectiva de control: el canal Left (izquierdo) cubre predominantemente el Ride y el Right (derecho) abarca el Crash y el Hi-Hat.",
      image: {
        placeholder: true,
        comment: "Plano cenital del set de batería identificando los 8 micrófonos: Kick (AKG D112), Snare Top (SM57), Snare Bottom (Beta 57), Hi-Hat (NT5), Tom 1 (MD421), Floor Tom (C414) y Overheads L/R (Aston Element)."
      },
      bulletPoints: [
        { label: "Kick Interno Angulado", text: "Evitar el borde del orificio para no captar turbulencias de aire directas." },
        { label: "Snare Bottom Supercardioide", text: "Orientar la parte posterior del Beta 57 hacia el bombo para aislar el canal." },
        { label: "AKG C414 con Pad -20 dB", text: "Atenuación pasiva indispensable para no saturar la electrónica ante el volumen del tom de piso." },
        { label: "Alimentación Phantom (+48V)", text: "Verificar encendido en canales 4 (Hi-Hat), 6 (Floor Tom) y 7/8 (Overheads)." }
      ]
    },
    {
      title: "Alineación Geométrica de Overheads: El Método del Cable",
      content: "En un arreglo espaciado A/B de micrófonos aéreos, el peligro más severo es que el sonido del redoblante llegue a una cápsula antes que a la otra, originando desfases temporales que destruyen la pegada y centrado del tambor en el plano estéreo.\n\nEl Método del Cable (Alineación Física de Fase):\nPara garantizar una coherencia de fase perfecta sin depender de cálculos matemáticos complejos, tomamos un cable largo de micrófono. Apoyamos un extremo del conector fijándolo exactamente en el centro geométrico del parche batidor del redoblante. Extendemos el cable tensado hasta la cápsula del Overhead izquierdo (OH L) y marcamos esa longitud con los dedos. Luego, manteniendo el punto de origen inamovible en el redoblante, pivotamos el cable hacia el Overhead derecho (OH R) y ajustamos la altura y posición de su soporte hasta que coincida al milímetro con la misma marca. Al igualar la distancia física, el frente de onda del redoblante arriba a ambos micrófonos aéreos en el mismo microsegundo exacto, garantizando una imagen en fase sólida y un redoblante clavado en el centro.",
      image: {
        placeholder: true,
        comment: "Esquema geométrico del método del cable: radio idéntico medido desde el centro del redoblante hacia las cápsulas de ambos Overheads."
      },
      bulletPoints: [
        { label: "Principio Físico", text: "A distancias idénticas en metros, el sonido recorre el aire en el mismo tiempo exacto." },
        { label: "Centrado del Redoblante", text: "Evita que el redoblante se ladee hacia un lateral del campo estéreo por diferencias de tiempo." },
        { label: "Prevención de Peine (Comb Filter)", text: "Suprime cancelaciones en medios-agudos al sumar los canales aéreos." }
      ]
    },
    {
      title: "Configuración en el DAW, Nomenclatura y Gain Staging",
      content: "Dentro del software de grabación (DAW), la disciplina visual y el control dinámico determinan la velocidad operativa:\n\nNomenclatura Estandarizada:\nSe crean 8 pistas de audio asignadas a sus entradas físicas correspondientes. Empleamos etiquetas cortas universales para optimizar la visualización en pantallas de mezcla estrechas:\n• Kick (Bombo)\n• SN (Snare / Redoblante Superior)\n• BD (Bordona / Snare Bottom)\n• HH (Hi-Hat)\n• Tom 1 (Rack Tom)\n• Tom 2 (Floor Tom)\n• OH L (Overhead Left / Izquierdo)\n• OH R (Overhead Right / Derecho)\n\nCalibración con Medidor Dorrough (Escala 14):\nPara auditar la ganancia de entrada se utiliza un medidor Dorrough configurado en la escala 14. Durante la prueba individual por tambor, calibramos la ganancia en el preamplificador buscando que los picos transitorios máximos se sitúen en la zona de -12 dB a -8 dBFS, reservando un margen de seguridad (headroom) amplio. Si una fuente de alto rendimiento dinámico (como el Hi-Hat) entra excesivamente fuerte aun tocando con suavidad, activamos el Pad atenuador (-20 dB) en el previo o micrófono para recuperar un recorrido de potenciómetro lineal y seguro.\n\nDistinción Crítica: Fader de DAW vs. Preamplificador:\nMover los faders de volumen en la consola virtual del software NO altera en absoluto el nivel de la señal que se está grabando en el disco duro. El fader solo modifica el volumen de monitoreo para los altavoces o auriculares. La salud, el tamaño y la resolución de la forma de onda grabada dependen exclusivamente de la ganancia física del preamplificador de entrada.",
      image: {
        placeholder: true,
        comment: "Consola del DAW mostrando las 8 pistas con su nomenclatura compacta y el medidor Dorrough promediando entre -12 dB y -8 dB."
      },
      bulletPoints: [
        { label: "Nomenclatura Profesional", text: "Uso de abreviaciones técnicas estandarizadas para una lectura veloz en sesión." },
        { label: "Rango Dorrough (-12 a -8 dB)", text: "Picos transitorios controlados sin peligro de clipeo en convertidores A/D." },
        { label: "Independencia de Faders", text: "El fader del DAW regula escucha; la ganancia del preamplificador define la grabación real." }
      ]
    },
    {
      title: "Análisis Espectral, Correlación de Fase y Mitigación Digital",
      content: "Antes de dar por definitiva la toma maestra, auditamos la respuesta de la señal en conjunto:\n\n• Análisis Espectral en Crudo (FabFilter Pro-Q):\nAl abrir un analizador espectral en el bus maestro de la batería sin insertar ecualización alguna (señal cruda balanceada solo por faders y paneos), la gráfica exhibe una curva lineal y armónicamente distribuida. Esto demuestra una ley de producción fundamental: cuando la física en la sala es correcta (parches nuevos, afinación en nota, micrófonos adecuados y ángulos libres de rebotes), la batería suena mezclada de forma natural y apenas requerirá correcciones quirúrgicas en la postproducción.\n\n• Correlación de Fase (Phase Analyzer en Stereo Output):\nEl medidor de correlación de fase muestra una escala que oscila entre +1 (zona azul, correlación positiva en fase) y -1 (zona roja, antifase o cancelación). En una batería multipista es completamente normal que la aguja salte fugazmente hacia la zona roja durante fracciones de milisegundo debido a la dispersión difusa de los platillos. No obstante, si el medidor se estaciona de forma continua en el área roja, delata una cancelación destructiva grave por micrófonos mal espaciados. Gracias al método de medición del cable en los Overheads, el set se sostiene de forma estable en la zona de fase positiva.\n\n• Mitigación en Postproducción:\nAunque el sangrado físico (bleeding) siempre existirá en tomas acústicas simultáneas, hoy disponemos de herramientas digitales avanzadas para perfeccionar la captura:\n- Procesadores de Separación por IA: Algoritmos de aprendizaje profundo que aíslan cada cuerpo percusivo eliminando el sangrado de sala al 100%.\n- Auto-Align (Sound Radix): Plugin de precisión de muestras que calcula los micro-retardos temporales entre pistas para encajar los frentes de onda y devolver el impacto máximo a los graves.",
      image: {
        placeholder: true,
        comment: "Medidor de correlación de fase en la salida Stereo Output indicando zona azul (+1) y curva espectral balanceada en FabFilter Pro-Q."
      },
      bulletPoints: [
        { label: "Ecualización Natural", text: "Una toma acústica bien ejecutada genera una respuesta espectral lista para mezcla sin retoques." },
        { label: "Correlación Estable", text: "La aguja debe residir predominantemente en la zona azul (+1) para garantizar compatibilidad mono." },
        { label: "Alineación por Software", text: "Herramientas como Auto-Align para sincronizar microdesfases temporales tras la grabación." }
      ]
    },
    {
      title: "El Rol del Productor: Gestión de Tiempos y Psicología de Sesión",
      content: "El productor musical es, ante todo, el administrador estratégico de los tiempos y de la energía humana dentro del estudio. El montaje físico, la alineación de fases, el ruteo de cables y la prueba de sonido de una batería de 8 canales demanda entre una hora y media y dos horas completas de trabajo ininterrumpido.\n\nLa Regla de Oro en la Citación de Músicos:\nJamás cites a toda la banda a la misma hora si primero vas a registrar la batería. Citar a guitarristas, bajistas o cantantes a esperar sentados durante dos horas mientras el técnico calibra pies de micrófono genera aburrimiento, frustración, tensión y pérdida de dinero en el presupuesto del estudio. La pauta profesional consiste en convocar exclusivamente al baterista temprano por la mañana, realizar el montaje con calma y citar al resto del grupo un par de horas más tarde.\n\nAsimismo, hacer una pausa de quince minutos para tomar un café tras finalizar el set up físico no es una pérdida de tiempo: es una inversión que permite al baterista despejar su mente y entrar a la cabina con la máxima energía y concentración para clavar la toma definitiva.",
      bulletPoints: [
        { label: "Cronograma Escalonado", text: "Convocar al baterista en solitario para el montaje y citar al resto del grupo horas después." },
        { label: "Presupuesto y Rendimiento", text: "Evitar el desgaste psicológico y la impaciencia de músicos inactivos en la sala de control." },
        { label: "Pausas Estratégicas", text: "Descansar antes de grabar para abordar las tomas maestras con frescura mental y física." }
      ]
    }
  ],
  quiz: [
    
    {
      id: 1,
      question: "¿En qué consiste la 'técnica del cable' para alinear físicamente los micrófonos Overheads en un arreglo A/B?",
      options: [
        "Usar cables balanceados con baño de oro para evitar interferencias electromagnéticas",
        "Medir con un cable la distancia exacta desde el centro del redoblante hacia cada micrófono overhead para que la señal llegue a ambos al mismo tiempo",
        "Atar ambos micrófonos entre sí a una distancia fija de 120 grados",
        "Conectar ambos micrófonos a la misma entrada de preamplificador en serie"
      ],
      correct: 1,
      explanation: "Al igualar con precisión física la distancia desde el centro del redoblante hacia el micrófono overhead izquierdo y el derecho, el transitorio del golpe llega al mismo tiempo a ambos diafragmas, evitando cancelaciones de fase severas en el bus estéreo."
    },
    {
      id: 2,
      question: "Al microfonear el bombo con un AKG D112 a través del orificio del parche resonador, ¿cuál es la colocación correcta?",
      options: [
        "Colocarlo a 1 metro de distancia apuntando al suelo",
        "Introducirlo ligeramente por el orificio evitando el golpe directo de aire y apuntar hacia el punto donde la maza impacta el parche batidor",
        "Pegar la cápsula al borde exterior de la madera del aro",
        "Apuntar hacia el techo de la sala para captar las reflexiones de la habitación"
      ],
      correct: 1,
      explanation: "Situar la cápsula justo en el plano del orificio expone el diafragma a la turbulencia violenta de aire; colocarlo dentro y angulado hacia el parche batidor captura el clic de la maza y la resonancia interna."
    },
    {
      id: 3,
      question: "Para microfonear el Tom de piso (Floor Tom) con un condensador de diafragma grande (AKG C414), ¿qué configuración crítica se debe aplicar?",
      options: [
        "Patrón Omnidireccional y filtro pasa altos en 200 Hz",
        "Patrón Cardioide, filtro pasa altos desactivado y Pad atenuador en -20 dB",
        "Patrón Figura de 8 con el realce de presencia encendido",
        "Desactivar el Phantom Power para que actúe como micrófono dinámico"
      ],
      correct: 1,
      explanation: "El patrón cardioide aísla el cuerpo, el filtro pasa altos debe estar apagado para retener todo el subgrave profundo y el Pad de -20 dB evita que el alto SPL sature el circuito interno del condensador."
    },
    {
      id: 4,
      question: "¿Cómo debe orientarse el micrófono inferior del redoblante (Snare Bottom) para minimizar el sangrado del bombo?",
      options: [
        "Apuntando hacia la maza del pedal de bombo",
        "Apuntando hacia la bordona y orientando la parte posterior (rechazo) en dirección al bombo",
        "Paralelo al aro apuntando hacia el Hi-Hat",
        "En contacto físico con los alambres metálicos"
      ],
      correct: 1,
      explanation: "Al angular la cápsula hacia la malla metálica dándole la espalda al bombo, la zona de mínimo rechazo del patrón direccional frena la penetración de frecuencias graves del bombo."
    },
    {
      id: 5,
      question: "¿Por qué mover los faders de la mezcladora en el DAW durante la toma NO modifica la forma de onda grabada?",
      options: [
        "Porque los faders solo controlan el monitoreo de escucha; la ganancia que imprime la onda digital depende exclusivamente del preamplificador analógico",
        "Porque el software Pro Tools bloquea los faders automáticamente al grabar",
        "Porque los cables balanceados impiden cambios de amplitud en tiempo real",
        "Porque los faders únicamente afectan a los plugins de reverberación"
      ],
      correct: 0,
      explanation: "El nivel impreso en el disco duro está determinado por el preamplificador y el conversor A/D; los faders de mezcla son una etapa de monitoreo posterior a la captura."
    },
    {
      id: 6,
      question: "En un analizador de correlación de fase estéreo, ¿qué indica que la medición caiga y permanezca en la zona roja?",
      options: [
        "Que la señal tiene un exceso de frecuencias agudas por encima de 15 kHz",
        "Que existe una antifase o cancelación de fase destructiva generada por mala colocación física de micrófonos",
        "Que el sistema de monitoreo en auriculares está funcionando en mono",
        "Que la interfaz está grabando a 96 kHz"
      ],
      correct: 1,
      explanation: "Si bien los platillos generan transitorios que oscilan hacia valores negativos brevemente, un valor constante en rojo revela que los canales estéreo se están restando y anulando mutuamente."
    },
    {
      id: 7,
      question: "Si el micrófono del Hi-Hat (Rode NT5) ingresa con un nivel excesivo incluso tocando suave, ¿cuál es la solución técnica?",
      options: [
        "Bajar el fader máster del DAW 12 dB",
        "Activar un Pad atenuador en el micrófono o en el preamplificador para recuperar rango de ganancia útil",
        "Invertir la polaridad con el botón de fase",
        "Mover el micrófono hacia la campana central del plato"
      ],
      correct: 1,
      explanation: "El Pad reduce físicamente la amplitud de la señal entrante antes de que sobrecargue el circuito de entrada, permitiendo ajustar el previo de forma lógica y holgada."
    },
    {
      id: 8,
      question: "¿Cuál es la regla de oro del productor respecto a la citación horaria de los músicos cuando se graba una batería multipista?",
      options: [
        "Citar a todos los integrantes al mismo tiempo para que ayuden a tirar cables",
        "Citar al baterista temprano para el armado, afinación y prueba de sonido, y citar al resto de la banda un par de horas más tarde",
        "Grabar a toda la banda junta sin hacer prueba de sonido previa",
        "Hacer que el cantante grabe sus voces mientras se ajustan los micrófonos de la batería"
      ],
      correct: 1,
      explanation: "El armado, ajuste de fases y prueba de una batería toma entre 1.5 y 2 horas; citar a toda la banda genera cansancio, pérdida de tiempo y frustración en el estudio."
    },
    {
      id: 9,
      question: "¿Qué micrófono de tom aéreo representa un estándar de bobina móvil clásico por su respuesta en medios y graves?",
      options: [
        "Rode NT5",
        "Sennheiser MD 421",
        "Shure Beta 57",
        "AKG C414"
      ],
      correct: 1,
      explanation: "El Sennheiser MD 421 es un micrófono dinámico clásico de diafragma grande ampliamente reconocido por su pegada, tolerancia a presiones altas y respuesta controlada en toms."
    },
    {
      id: 10,
      question: "¿Qué parámetros de resolución estándar se utilizaron en la sesión de captura multipista de esta clase?",
      options: [
        "44.1 kHz / 16-bit",
        "48 kHz / 24-bit",
        "96 kHz / 32-bit float",
        "192 kHz / 64-bit"
      ],
      correct: 1,
      explanation: "48 kHz de frecuencia de muestreo y 24 bits de profundidad representan la norma técnica estándar para producción audiovisual y grabación musical profesional."
    }
  ],
  flashcards: [
    {
      front: "Objetivo de la 'técnica del cable' en Overheads",
      back: "Garantizar distancia física idéntica desde el redoblante a ambos micrófonos aéreos para que la señal llegue alineada en fase."
    },
    {
      front: "Colocación del AKG D112 en el bombo",
      back: "Dentro del orificio del parche resonador, fuera de la corriente directa de aire y apuntado al impacto de la maza en el parche batidor."
    },
    {
      front: "Orientación del Shure Beta 57 en la bordona",
      back: "Apuntando a la malla metálica y dando la espalda al bombo para maximizar el rechazo a sangrados graves."
    },
    {
      front: "Configuración del AKG C414 en el Tom de piso",
      back: "Patrón Cardioide, filtro pasa altos apagado para retener frecuencias subgraves y Pad en -20 dB para tolerar la alta presión sonora."
    },
    {
      front: "Posicionamiento del micrófono de Hi-Hat (Rode NT5)",
      back: "A 90 grados apuntando al borde exterior del plato para captar brillo y articulación aguda, evitando la campana."
    },
    {
      front: "Diferencia operativa: Faders del DAW vs Ganancia de Preamp",
      back: "La ganancia del preamplificador graba la señal física en el conversor; los faders solo atenúan o suben el volumen de monitoreo."
    },
    {
      front: "¿Qué indica un medidor de fase en zona roja constante?",
      back: "Problemas graves de cancelación por desfase destructivo entre los micrófonos en la sala."
    },
    {
      front: "Función del Patchbay en un estudio normalizado",
      back: "Centralizar conexiones de sala de modo que la entrada física 1 coincida de forma directa y ordenada con el canal 1 de la interfaz."
    },
    {
      front: "Solución ante señales excesivamente potentes en la entrada",
      back: "Activar el botón de atenuación Pad (-10 o -20 dB) en el micrófono o en el canal del previo."
    },
    {
      front: "Canales que requirieron +48V en la sesión de 8 micrófonos",
      back: "Canal 4 (Hi-Hat), canal 6 (Floor Tom C414) y canales 7 y 8 (Overheads Aston Element)."
    },
    {
      front: "Particularidad técnica del Aston Element",
      back: "Micrófono dinámico activo con cápsula especial que requiere alimentación Phantom Power (+48V) para su funcionamiento."
    },
    {
      front: "Gestión horaria de citaciones para grabar batería",
      back: "Citar primero al baterista para el armado de 2 horas y llamar al resto de los músicos cuando el sonido esté seteado."
    },
    {
      front: "Abreviaciones estándar de pistas en sesión",
      back: "Kick (bombo), SN (snare top), BD (bordona), HH (hi-hat), Tom 1, Tom 2, OH L y OH R."
    },
    {
      front: "¿Por qué un previo con Pro-Q muestra un espectro equilibrado sin EQ?",
      back: "Porque una correcta afinación, microfonía y angulación entregan un balance tonal sano desde la física del instrumento."
    },
    {
      front: "Software estándar para la segunda mitad de la carrera",
      back: "Pro Tools, consolidado como la plataforma hegemónica de la industria discográfica mundial."
    },
    {
      front: "Función del plugin Sound Radix Auto-Align",
      back: "Detectar y corregir automáticamente microdesfases de tiempo entre múltiples canales de batería tras la toma."
    },
    {
      front: "Ventaja de la técnica espaciada A/B en platos",
      back: "Brinda una imagen estéreo amplia y diferenciada entre la zona del Ride y la zona del Crash/Hi-Hat."
    },
    {
      front: "Altura recomendada para micrófonos aéreos (Overheads)",
      back: "Aproximadamente 50 cm sobre los platos, condicionada por la altura del techo para evitar rebotes tempranos."
    },
    {
      front: "Pista de referencia para el baterista de sesión",
      back: "Guía musical limpia sin instrumentos conflictivos (ej. voces y claqueta) para asegurar comodidad y tempo sólido."
    },
    {
      front: "Resolución digital estándar de la sesión multipista",
      back: "48 kHz de tasa de muestreo a 24 bits de resolución en profundidad."
    }
  ]
};