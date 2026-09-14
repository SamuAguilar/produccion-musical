export const clase11 = {
  id: 11,
  title: "Grabación de Bajos, Instrumentos Acústicos y Señal Dual",
  summary: "Captura dual de bajo (DI + Amplificador), microfonía de cajón y contrabajo, gestión de sangrado, técnicas de reamping, respuestas de impulso (IR) y crossover de mezcla.",
  sections: [
    {
      title: "Filosofía de Captura y Puesta a Punto en Sala",
      content: "Antes de tender una sola línea de señal o calibrar preamplificadores, la condición indispensable en el estudio es la preparación mecánica del instrumento. Un error grave de producción es creer que un mal timbre se maquilla en la postproducción. En baterías, un juego de parches nuevo define la frescura, el brillo y la respuesta de transitorios de toda la obra; en producciones históricas de referencia (como los discos de Soda Stereo), la primera orden ejecutiva al entrar al estudio era desmontar y renovar todos los parches sin siquiera probarlos antes. Hoy en día no necesitamos equipamiento costoso para afinar; existen aplicaciones de análisis acústico para teléfonos móviles que calculan la frecuencia exacta en Hercios (Hz) frente a cada torre. Asimismo, para armar maquetas y preproducciones rápidas con balance estéreo natural, podemos implementar la técnica ORTF (Office de Radiodiffusion Télévision Française) con dos micrófonos de condensador de diafragma pequeño colocados sobre la cabeza del baterista para registrar una imagen completa y coherente del kit.",
      image: {
        placeholder: true,
        comment: "Esquema de afinación de parches con medidor de frecuencia digital y montaje aéreo estéreo ORTF con dos condensadores lápiz."
      },
      bulletPoints: [
        { label: "Mantenimiento Preventivo", text: "Renovar parches antes de la sesión para asegurar riqueza armónica y sostenimiento estable." },
        { label: "Afinación por Frecuencia", text: "Uso de medidores digitales en Hz para igualar la tensión mecánica en toda la circunferencia." },
        { label: "Técnica ORTF Rápida", text: "Par estéreo de condensadores de diafragma pequeño (17 cm a 110°) ideal para captar maquetas inmediatas." }
      ]
    },
    {
      title: "Instrumentos Acústicos Autóctonos: Cajón Peruano y Charango",
      content: "Al enfrentarnos a fuentes acústicas no convencionales, la regla de oro del ingeniero es apagar los preconceptos y caminar por la sala escuchando el instrumento en su espacio real:\n\n• El Cajón Peruano:\nPosee una dispersión bipolar muy marcada. El ataque percusivo, los agudos de las palmas y el chasquido del toque residen en la tapa delantera (frontal), mientras que el cuerpo denso, la resonancia de aire y los graves profundos emanan exclusivamente del orificio de descompresión posterior (sound port). La configuración técnica ideal consiste en colocar un micrófono de condensador de diafragma pequeño al frente enfocado al ataque, y un micrófono de diafragma grande (o dinámico para graves) detrás apuntando al orificio para registrar el empuje grave. Como alternativa todoterreno, un Shure SM57 ubicado a media distancia y ligeramente angulado puede entregar un balance óptimo entre impacto y cuerpo si disponemos de un solo canal.\n\n• El Charango:\nSu rasgo acústico determinante es un sostenimiento o 'sustain' sumamente breve: la cuerda emite energía y se apaga de inmediato. Para compensar esta falta de resonancia, los intérpretes tocan pasajes de rasgueo y trémolo a altísima velocidad, lo que genera un desgaste mecánico severo en sus uñas. Para capturarlo, debemos movernos alrededor del ejecutante mientras toca para encontrar el punto focal donde el timbre de la caja de madera resuene con mayor dulzura antes de colocar el soporte del micrófono.",
      image: {
        placeholder: true,
        comment: "Doble microfonía en Cajón Peruano: condensador de diafragma pequeño en la tapa frontal y diafragma grande en el puerto trasero."
      },
      bulletPoints: [
        { label: "Bipolaridad en Cajón", text: "Separación clara entre transitorio agudo frontal y masa de aire grave en el orificio posterior." },
        { label: "SM57 como Alternativa", text: "Solución monocanal colocada a distancia media para fusionar golpe y cuerpo." },
        { label: "Dinámica en Charango", text: "Sustain corto que exige rasgueos veloces y búsqueda empírica del sweet spot en la sala." }
      ]
    },
    {
      title: "Gestión de Interferencias: Sangrado (Bleeding) y Edición de Fase",
      content: "En sesiones acústicas con múltiples micrófonos abiertos (como una batería completa), el sangrado o filtración (bleeding) es un fenómeno físico inevitable. La energía de un cuerpo viajará por el aire y penetrará inevitablemente en los micrófonos aledaños con milisegundos de retardo, introduciendo filtros de peine (comb filtering) y cancelaciones de fase.\n\nEl 80% del éxito en el control del sangrado depende de la pericia en la colocación física y en la elección estricta de los patrones polares de los micrófonos (cardioides e hipercardioides orientados con sus puntos nulos de rechazo hacia los tambores vecinos). Las colisiones temporales residuales se pulen luego mediante software especializado de alineación de fase.\n\nAsimismo, en pistas como los toms de piso (Floor Toms) —que intervienen solo en momentos puntuales de la canción—, la técnica de edición mandatoria en el DAW (Digital Audio Workstation) consiste en cortar y silenciar manualmente las regiones vacías donde el tambor no está tocando. Esto suprime el ruido parásito y el sangrado residual acumulado en esos canales, limpiando de inmediato el campo estéreo general.",
      bulletPoints: [
        { label: "Rechazo Mecánico (80%)", text: "Uso de patrones direccionales apuntando zonas ciegas a las fuentes adyacentes para contener el sangrado." },
        { label: "Desfases Temporales", text: "El retardo acústico de un tambor entrando a otro micrófono genera cancelaciones corregibles con plugins de alineación." },
        { label: "Limpieza de Toms", text: "Mutear o borrar silencios en pistas secundarias para eliminar sangrados fantasma en la mezcla." }
      ]
    },
    {
      title: "Estrategia Dual en Bajo Eléctrico: Caja Directa (DI) y Amplificador",
      content: "El bajo eléctrico constituye, junto con el bombo, el cimiento armónico y rítmico de la producción moderna. Para registrarlo con la máxima flexibilidad, se aplica una técnica de captura dual en dos canales simultáneos:\n\n1. La Señal Directa (DI Box / Caja Directa):\nEl instrumento ingresa al Input de una Caja Directa (Direct Injection). Su función es transformar la señal de alta impedancia (Hi-Z, del orden de megaohmios) en una señal balanceada de baja impedancia (Low-Z, de unos cientos de ohmios) apta para el preamplificador. Si el instrumento es un Bajo Activo (con ecualizador integrado alimentado por una pila interna de 9V), entrega un nivel eléctrico potente. Si es un Bajo Pasivo tradicional, se recomienda emplear una DI Activa con circuito preamplificador propio (alimentada por Phantom Power de +48V) para evitar que la capacitancia del cable degrade las frecuencias agudas y la pegada del transitorio. Esta pista limpia por línea entrega el ataque de púa, la definición de notas y la estabilidad dinámica pura.\n\n2. Microfonía del Amplificador en Sala:\nDesde la salida Through (puente) de la DI, enviamos una réplica de la señal al cabezal y gabinete del bajo. Para evitar problemas acústicos graves en la sala, evitamos ubicar el gabinete en esquinas reflectantes para impedir el fenómeno de sobrecarga descontrolada de graves (base loading) y prevenimos salas con paredes paralelas que creen ondas estacionarias. En el cono, se emplean micrófonos de diafragma grande (como AKG C414 o Mojave MA300) o dinámicos especializados en baja frecuencia (como AKG D112). Un técnico experimentado nunca coloca el micrófono a ciegas: revisa individualmente los conos del bafle hasta hallar el que entregue la mejor respuesta y puede alejar el micrófono a unos 30-40 cm para captar la integración acústica de toda la caja en lugar de un punto aislado.",
      image: {
        placeholder: true,
        comment: "Ruteo dual de bajo: Bajo -> DI Box -> Canal 1 XLR a consola / Salida Through hacia Amplificador -> Micrófono de diafragma grande -> Canal 2."
      },
      bulletPoints: [
        { label: "Bajo Activo vs. Pasivo", text: "Instrumentos pasivos exigen DI activas (+48V) para retener agudos y rango dinámico íntegro." },
        { label: "Pista DI Limpia", text: "Garantiza definición de notas, estabilidad de transitorios y ataque frontal." },
        { label: "Pista de Amplificador", text: "Aporta la masa, distorsión armónica, calidez valvular y compresión de altavoz." },
        { label: "Botón Ground Lift", text: "Conmutador vital en la DI para desvincular el Pin 1 y anular zumbidos de masa al instante." }
      ]
    },
    {
      title: "Bajo Acústico y Contrabajo: Técnicas Tradicionales",
      content: "Al registrar instrumentos de cuerda frotada o pulsada de gran caja de resonancia (como el contrabajo acústico), el comportamiento cambia radicalmente respecto al bajo eléctrico:\n\n• Micrófonos de Cinta (Ribbon): Son la herramienta de excelencia (por ejemplo, un Royer R-121). Su respuesta en frecuencia lineal y aterciopelada capta la vibración del contrabajo de forma hiperrealista, libre de asperezas.\n• Posicionamiento hacia el Puente: El micrófono jamás debe apuntar perpendicularmente al interior de los orificios en 'F' (F-holes) del instrumento, ya que en esas cavidades se produce una acumulación masiva de aire que empasta el sonido en un retumbe incontrolable. La cápsula debe orientarse hacia el puente de madera. De este modo se equilibra el peso profundo del cuerpo con el chasquido y la articulación del roce de las yemas o la púa.\n• Soluciones de Contingencia: En escenarios en vivo o situaciones de recursos limitados, un micrófono dinámico Shure SM57 o SM58 colocado a corta distancia del puente entrega una toma sorprendentemente sólida y funcional.",
      image: {
        placeholder: true,
        comment: "Posicionamiento en contrabajo: Micrófono de cinta orientado al puente a 20 cm, evitando apuntar directo a las efes (F-holes)."
      },
      bulletPoints: [
        { label: "Micrófonos Ribbon", text: "Textura orgánica y respuesta dócil ante la resonancia profunda de cajas acústicas." },
        { label: "Apuntar al Puente", text: "Capturar el chasquido articular y evitar la trampa de aire de los orificios en F." },
        { label: "Alternativa Dinámica", text: "Un SM57 en el puente resuelve tomas en vivo con gran rechazo a la retroalimentación." }
      ]
    },
    {
      title: "Procesamiento Digital, Emulaciones e Integración Rítmica",
      content: "El flujo de trabajo moderno aprovecha la pista limpia de bajo como un lienzo de infinitas posibilidades estéticas:\n\n• Grabación sin Compuertas (No Gate en Tracking): Jamás insertes una compuerta de ruido (Gate) en la cadena de grabación directa. Si el umbral se calibra ligeramente alto, se cortarán notas fantasma, matices sutiles o el decaimiento natural del instrumento de forma destructiva e irreversible. Las compuertas se configuran exclusivamente durante la mezcla.\n• Comunicación Visual Bajo-Batería: En la sala de grabación, el bajista y el baterista deben mantenerse con contacto visual ininterrumpido. La coordinación no verbal entre ambos asegura que el impacto del mazo del bombo y la pulsación del bajo golpeen con perfecta sincronización en el tiempo, aportando cohesión rítmica a la pista.\n• Reamping e Impulsos IR (Impulse Responses): Disponer del canal grabado por DI limpia permite realizar Reamping: reenviar la señal desde la interfaz hacia amplificadores reales o alimentarla en emuladores avanzados de software (como AmpliTube o Guitar Rig). Mediante archivos de Respuesta de Impulso (IRs), podemos cargar la signatura acústica exacta de bafles de alta gama y modificar digitalmente micrófonos, angulaciones y distancias virtuales.\n• Técnica de Crossover en Mezcla: Una estrategia profesional para combinar la toma dual consiste en aplicar un filtro paso bajos al amplificador para retener el peso y la saturación grave, y un filtro paso altos a la señal de DI para dejar pasar únicamente el ataque y la definición en medios-altos, logrando una pared de sonido balanceada.",
      image: {
        placeholder: true,
        comment: "Esquema de Crossover en mezcla: pista de amplificador filtrada en graves sumada a la pista de DI filtrada en agudos."
      },
      bulletPoints: [
        { label: "Peligro de Compuertas en Vivo", text: "No comprimir ni truncar la dinámica con Gates durante el registro destructivo." },
        { label: "Sincronía Rítmica", text: "Contacto visual indispensable entre bajista y baterista para asentar el compás de la base." },
        { label: "Reamping y Muestras IR", text: "Procesamiento posterior flexible usando la toma limpia por línea como fuente maestra." },
        { label: "Crossover Espectral", text: "Combinar el empuje grave del bafle con la definición de transitorios de la línea." }
      ]
    }
  ],
  quiz: [
    {
      id: 1,
      question: "¿Por qué se recomienda grabar el bajo eléctrico utilizando simultáneamente una Caja Directa (DI) y un micrófono en el amplificador?",
      options: [
        "Para anular la señal del bombo mediante inversión de fase absoluta",
        "Para capturar el ataque y definición limpia por DI, combinándolo con el cuerpo, calor y peso armónico del amplificador",
        "Porque el estándar digital exige obligatoriamente dos pistas estéreo por instrumento",
        "Para evitar tener que afinar el instrumento antes de la sesión"
      ],
      correct: 1,
      explanation: "La señal limpia por DI entrega transitorios rápidos, presencia y articulación, mientras que la caja amplificada aporta compresión natural acústica, saturación y graves llenos."
    },
    {
      id: 2,
      question: "Al microfonear un Cajón Peruano, ¿cuál es la distribución de micrófonos recomendada para captar todo su rango sonoro?",
      options: [
        "Un micrófono de condensador de diafragma pequeño al frente (ataque/chasquido) y uno de diafragma grande atrás (cuerpo/graves)",
        "Dos micrófonos de cinta pasivos colocados en los costados laterales",
        "Un único micrófono pegado directamente al suelo debajo del cajón",
        "Un micrófono dinámico apuntando hacia el techo de la sala"
      ],
      correct: 0,
      explanation: "El chasquido de las manos emana de la madera frontal, requiriendo diafragma pequeño veloz, mientras que la masa de aire grave es expulsada por la abertura trasera."
    },
    {
      id: 3,
      question: "¿Por qué NO se aconseja insertar una compuerta de ruido (Noise Gate) destructiva durante la toma de grabación de una batería o bajo?",
      options: [
        "Porque consume demasiada corriente Phantom (+48V) de la placa",
        "Porque si se descalibra el umbral puede comerse notas fantasma, dinámicas sutiles o cortar el decay natural sin posibilidad de recuperarlo",
        "Porque invierte la polaridad eléctrica de los transductores",
        "Porque los plugins de compuerta solo funcionan a 44.1 kHz"
      ],
      correct: 1,
      explanation: "Procesar con compuerta en tiempo de captura destruye información acústica irremediable si el ejecutante toca con menor intensidad en pasajes suaves."
    },
    {
      id: 4,
      question: "Al ubicar un amplificador de bajo en la sala de grabación, ¿qué posición física debe evitarse de manera estricta?",
      options: [
        "Colocarlo en el centro elevado sobre una tarima aislante",
        "Pegarlo en una esquina, ya que genera sobrecarga descontrolada de graves (base loading)",
        "Situarlo frente al baterista manteniendo contacto visual",
        "Inclinarlo 45 grados respecto a las paredes opuestas"
      ],
      correct: 1,
      explanation: "Las esquinas concentran la presión acústica de bajas frecuencias, inflando artificialmente graves que no representan el tono real del instrumento."
    },
    {
      id: 5,
      question: "Al microfonear un bajo acústico o contrabajo, ¿hacia dónde conviene orientar el micrófono para evitar empastamiento?",
      options: [
        "Directamente dentro de las aberturas en 'F' (F-holes)",
        "Hacia el puente, logrando un balance natural entre el grave profundo y el ataque de los dedos",
        "Hacia la clavija de afinación superior",
        "En la parte trasera de la caja de resonancia"
      ],
      correct: 1,
      explanation: "Apuntar a los agujeros en 'F' satura la cápsula con aire turbulento y graves oscuros; orientar al puente entrega definición del pulso y madera equilibrada."
    },
    {
      id: 6,
      question: "¿En qué consiste el proceso de producción y mezcla denominado 'Reamping'?",
      options: [
        "En acelerar los BPM de la pista grabada mediante algoritmos elásticos",
        "En enviar una señal limpia de DI previamente grabada hacia un amplificador real mediante una caja de reamp, para volver a microfonearlo con nuevo color",
        "En duplicar la pista del bajo e invertirle la polaridad a 180°",
        "En afinar el bajo con un analizador espectral visual de agudos"
      ],
      correct: 1,
      explanation: "El reamping desacopla la ejecución de la búsqueda tímbrica: permite registrar la mejor toma por línea y probar amplificadores, micrófonos y pedales reales más tarde."
    },
    {
      id: 7,
      question: "¿Qué son y qué función cumplen las Respuestas de Impulso (IR) en el modelado digital de guitarras y bajos?",
      options: [
        "Cables balanceados con microchips de reducción de ruido",
        "Capturas acústicas que reproducen con fidelidad matemática el comportamiento, resonancia y filtrado de un bafle, parlante y micrófono específicos",
        "Archivos MIDI para programar sintetizadores de sub-bajo",
        "Parches de software que eliminan bucles de tierra analógicos"
      ],
      correct: 1,
      explanation: "Un archivo IR modela la respuesta acústica y convolución lineal de cajas reales de gama alta microfoneadas en entornos acústicos específicos."
    },
    {
      id: 8,
      question: "En la técnica avanzada de 'Crossover de Frecuencias' para mezclar bajo eléctrico:",
      options: [
        "Se mutan todos los graves de la batería en las estrofas",
        "Se filtran los agudos en el ampli para conservar cuerpo/saturación grave, y se filtran los graves en la DI para aportar ataque y definición limpia",
        "Se pasa la señal por un transformador de 60 Hz",
        "Se utiliza compresión paralela exclusivamente en el canal del bombo"
      ],
      correct: 1,
      explanation: "Separar bandas por canal permite que el amplificador mande en los medios-bajos con carácter y calidez, mientras la señal directa limpia da claridad a los transitorios sin colisionar."
    },
    {
      id: 9,
      question: "¿Por qué es fundamental que el bajista y el baterista mantengan contacto visual directo mientras graban en vivo en el estudio?",
      options: [
        "Para evitar que se desafine el parche batidor del redoblante",
        "Para asegurar comunicación no verbal y articulación conjunta, garantizando que el bombo y el bajo acoplen rítmicamente con solidez",
        "Para calibrar el medidor Dorrough en tiempo real",
        "Para mitigar el efecto de proximidad de los micrófonos aéreos"
      ],
      correct: 1,
      explanation: "El groove y la sincronía entre el golpe de maza del bombo y la pulsación de la cuerda dependen de la interacción visual y la complicidad interpretativa."
    },
    {
      id: 10,
      question: "Para limpiar la mezcla de batería en pistas con poco uso constante (como el Tom de piso), ¿cuál es la mejor práctica de edición?",
      options: [
        "Dejar el canal abierto con un compresor al máximo",
        "Recortar y silenciar los espacios vacíos donde el tom no interviene para eliminar el sangrado acumulado de otros cuerpos",
        "Invertir la fase en cada compás impar",
        "Convertir la pista a formato monofónico de 8 bits"
      ],
      correct: 1,
      explanation: "Cortar las regiones donde el tom no toca suprime la filtración parásita del bombo, redoblante y platos que ensucian el campo sonoro global."
    }
  ],
  flashcards: [
    {
      front: "¿Qué ventajas otorga grabar bajo por DI y amplificador a la vez?",
      back: "La DI aporta claridad, definición de ataque y transitorios nítidos; el amplificador entrega peso, calidez armónica y aire de sala."
    },
    {
      front: "Microfonía para Cajón Peruano",
      back: "Condensador de diafragma pequeño al frente para captar el ataque y chasquido de manos; diafragma grande atrás para el orificio de graves."
    },
    {
      front: "Particularidad sonora del Charango",
      back: "Instrumento con muy poco sustain natural que exige rasgueo continuo y búsqueda auditiva en sala para ubicar el sweet spot."
    },
    {
      front: "¿Por qué no usar compuerta (Gate) en la grabación?",
      back: "Un umbral erróneo corta colas de sonido (decay) y notas fantasma dinámicas de forma destructiva e irreparable."
    },
    {
      front: "Peligro de ubicar el ampli de bajo en una esquina",
      back: "Provoca 'base loading': una acumulación resonante desproporcionada de graves que falsea el tono real del instrumento."
    },
    {
      front: "Microfoneo óptimo de contrabajo o bajo acústico",
      back: "Apuntar hacia el puente para equilibrar ataque y madera; evitar los agujeros en 'F' que saturan con aire y graves empastados."
    },
    {
      front: "¿Qué es el proceso de Reamping?",
      back: "Tomar una pista de DI limpia grabada previamente, enviarla hacia un amplificador real en sala y registrarla microfoneada con nuevo color."
    },
    {
      front: "¿Qué es una Respuesta de Impulso (IR)?",
      back: "Un archivo de audio que reproduce con exactitud la respuesta acústica y convolución de un bafle, altavoz y micrófono específicos."
    },
    {
      front: "¿Qué es el 'Crossover de Frecuencias' en bajo?",
      back: "Filtrar agudos en la pista de amplificador (priorizando cuerpo y distorsión grave) y graves en la DI (priorizando ataque y definición)."
    },
    {
      front: "¿Por qué bajo pasivo exige preferentemente DI Activa?",
      back: "Para brindarle una impedancia de entrada sumamente alta que evite la caída de agudos, pérdida de dinámica y atenuación de nivel."
    },
    {
      front: "Función del interruptor Ground Lift en la DI de bajo",
      back: "Desconectar la tierra del Pin 1 para eliminar de raíz los zumbidos parásitos de bucle de masa (50/60 Hz)."
    },
    {
      front: "Técnica 'Old School' de microfoneo de amplificador de bajo",
      back: "Alejar el micrófono 30-40 cm de la rejilla para captar la integración acústica plena del cono y su dispersión natural."
    },
    {
      front: "Importancia del contacto visual bajo-batería",
      back: "Permite sincronización rítmica natural y enlace dinámico entre la maza del bombo y la pulsación de la nota del bajo."
    },
    {
      front: "Limpieza por edición en toms de batería",
      back: "Cortar y mutear los silencios entre golpes de toms para eliminar sangrados (bleeding) innecesarios en la mezcla general."
    },
    {
      front: "Ventaja de conservar la toma directa (DI) limpia",
      back: "Permite usar emuladores (Amplitube, Guitar Rig) o reamping físico posterior sin condicionar la mezcla a una sola textura."
    },
    {
      front: "Micrófono de cinta en instrumentos acústicos graves",
      back: "Aporta respuesta transitoria suave, agudos sedosos sin asperezas y una calidez lineal fiel al oído (ej. Royer R-121)."
    },
    {
      front: "Solución de emergencia para microfonear contrabajo",
      back: "Un Shure SM57 o SM58 colocado a corta distancia apuntando al puente sobre una montura elástica acolchada."
    },
    {
      front: "¿Cómo elegir el parlante en una caja 4x10 o 8x10 de bajo?",
      back: "Escuchar individualmente cada cono con la fuente sonando; casi siempre hay uno con mejor respuesta en frecuencia y menor distorsión."
    },
    {
      front: "Diseño de salas para control de graves en bajo",
      back: "Evitar geometrías de paredes paralelas para mitigar ondas estacionarias y modos resonantes agresivos."
    },
    {
      front: "Filosofía Soda Stereo citada en clase",
      back: "Cambiar y asentar parches nuevos antes de empezar la sesión para garantizar máxima proyección y riqueza armónica de origen."
    }
  ]
};