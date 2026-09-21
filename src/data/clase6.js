export const clase6 = {
  id: 6,
  title: "Microfonía Avanzada, Patrones Polares y Mezcla Física",
  summary: "Los dos filtros analógicos, deformación del patrón polar por frecuencia, comportamiento logarítmico de atenuación angular y aislamiento de fuentes en sala.",
  sections: [
    {
      title: "El Concepto de los Dos Filtros en la Cadena de Grabación",
      content: "Al ingresar al estudio, todo evento acústico producido por músicos, voces o amplificadores debe atravesar obligatoriamente dos filtros físicos antes de convertirse en datos dentro del ordenador:\n\n1. El Micrófono: Es el primer transductor de la cadena; traduce las ondas de presión mecánica en impulsos de voltaje e imprime una respuesta frecuencial y polar particular sobre la fuente.\n2. El Preamplificador: Es la etapa electrónica encargada de elevar la débil señal de micrófono (Mic Level) al nivel de línea estándar de trabajo (Line Level), aportando textura, velocidad ante transitorios o distorsión armónica.\n\nSi la interacción entre estos dos componentes no se planifica con criterio técnico en función del instrumento, el ingeniero de mezcla no podrá potenciar la estética de la obra; quedará atrapado corrigiendo defectos de fase, sangrados excesivos y asperezas tímbricas que no debieron entrar en la toma.",
      image: {
        placeholder: true,
        comment: "Diagrama de bloques: Fuente sonora -> Filtro 1 (Micrófono) -> Filtro 2 (Preamplificador) -> Conversor A/D -> DAW."
      },
      bulletPoints: [
        { label: "Decisiones irreversibles", text: "La textura y dinámica condicionadas por el transductor y el previo quedan impresas de forma definitiva en el archivo de audio." },
        { label: "Criterio de captura", text: "Resolver el sonido desde la física de la sala para no depender de procesos correctivos invasivos en el DAW." }
      ]
    },
    {
      title: "El Ensamble Físico (Blend) y la Preproducción Acústica",
      content: "Antes de tender líneas de audio o calibrar ganancias, la tarea medular de la producción consiste en asegurar el ensamble acústico o 'blend' del grupo dentro de la sala de grabación.\n\nEl ensamble físico representa la capacidad de los intérpretes para balancear dinámicas de toque, articulación y planos sonoros de manera natural en el propio espacio. Cuando una banda posee un ensamble sólido y controlado, un único micrófono bien ubicado puede registrar una toma que suene prácticamente mezclada y con profundidad coherente. La preproducción consiste en definir arreglos, dosificar silencios y evitar colisiones espectrales antes de presionar el botón de grabación.",
      bulletPoints: [
        { label: "Balance orgánico", text: "Ajustar la fuerza interpretativa de los músicos en la sala en lugar de compensar desequilibrios con faders." },
        { label: "Gestión de silencios", text: "Evitar acumulaciones de notas en las mismas octavas para que el arreglo respire de origen." }
      ]
    },
    {
      title: "Anatomía de los Patrones Polares Fundamentales",
      content: "El patrón polar es la representación geométrica tridimensional que describe la sensibilidad de la cápsula según la dirección de incidencia de la onda acústica. Dominar su comportamiento permite aislar fuentes, rechazar ruidos parásitos y controlar el equilibrio acústico sin ecualizadores:",
      image: {
        url: "/images/clase6/clase6-patrones-polares.webp",
        comment: "Comparativa de patrones polares: Omnidireccional (360°), Cardioide (rechazo posterior 180°), Hipercardioide (haz estrecho) y Figura de 8 (rechazo lateral 90°)."
      },
      bulletPoints: [
        { label: "Omnidireccional (360°)", text: "Sensibilidad uniforme en todas las direcciones angulares. Ideal para captar cuartetos de cuerdas, coros o mesas redondas donde se requiere integrar la acústica natural de la sala y mantener el contacto visual de los músicos." },
        { label: "Cardioide (Unidireccional)", text: "Sensibilidad frontal predominante con un punto de máximo rechazo en su parte posterior (180°). Estándar para voces e instrumentos individuales donde se busca aislar la fuente del ruido o rebotes traseros." },
        { label: "Hipercardioide", text: "Frente de captación sumamente estrecho y enfocado con un pequeño lóbulo de sensibilidad trasero. Indispensable para minimizar el sangrado o bleeding entre fuentes muy próximas, como toms de batería pegados entre sí." },
        { label: "Figura de 8 (Bidireccional)", text: "Sensibilidad idéntica por el frente (0°) y por atrás (180°), con zonas nulas de rechazo absoluto en los laterales (90° y 270°). Estándar en micrófonos de cinta para captar diálogos enfrentados o registrar una guitarra acústica combinada con el aire de la sala." }
      ]
    },
    {
      title: "La Deformación Frecuencial del Patrón Polar",
      content: "Un principio físico que suele pasarse por alto en el estudio es que los patrones polares de los micrófonos no se mantienen rígidos ni estables a lo largo del espectro: la directividad se deforma y transmuta en función de la frecuencia que incide en la membrana.\n\n• Comportamiento en Graves (ej. 125 Hz): Por la gran longitud de las ondas de baja frecuencia, el diafragma no puede generar suficiente diferencia de presión entre sus caras. En consecuencia, un micrófono cardioide estándar (como el Shure SM58) pierde direccionalidad y se vuelve prácticamente omnidireccional. Los subgraves entran con idéntica facilidad por atrás, por los costados y por el frente.\n• Comportamiento en Agudos (ej. 8 kHz): Al acortarse las longitudes de onda, el cuerpo físico de la cápsula bloquea y sombrea el sonido. El micrófono se vuelve sumamente directivo, cerrando su haz de captación de forma similar a un hipercardioide o un haz láser.\n\nImplicancia Crítica en Vivo y Estudio:\nSi situamos al vocalista cerca del amplificador de bajo eléctrico, el patrón cardioide del micrófono vocal rechazará sin inconvenientes los agudos y el chasquido del bajo. Sin embargo, como el micrófono se vuelve omnidireccional en bajas frecuencias, la fundamental grave del bajo penetrará por la parte trasera de la cápsula sin oposición alguna. El resultado será una pista vocal contaminada con un retumbe pastoso y sucio imposible de separar en la mezcla.",
      image: {
        url: "/images/clase6/clase6-deformacion-frecuencial.webp",
        comment: "Deformación del patrón polar cardioide: apertura omnidireccional en 125 Hz frente a captación direccional cerrada en 8 kHz."
      },
      bulletPoints: [
        { label: "Fuga de graves traseros", text: "Los micrófonos cardioides no rechazan bajas frecuencias por detrás con la misma eficacia que los medios y agudos." },
        { label: "Aislamiento espacial", text: "Alejar físicamente los micrófonos vocales de amplificadores de bajo o bombos para evitar contaminación por omnidireccionalidad en graves." }
      ]
    },
    {
      title: "Escala Logarítmica en Decibeles y Atenuación Angular",
      content: "El oído humano no percibe la intensidad acústica de forma lineal (donde 2 es el doble de 1), sino mediante una escala logarítmica gobernada por el Decibel (dB). Por esta razón, pequeñas variaciones angulares en la colocación de un micrófono provocan caídas drásticas de energía sonora:\n\n• En el Eje (0° / On-Axis): Punto de sensibilidad máxima donde ingresa el 100% de la energía de la señal frontal.\n• En los Costados (90°): En una cápsula cardioide, la señal decae típicamente entre -5 dB y -6 dB. Aunque en números parezca poco, representa una reducción a menos de la mitad de la potencia acústica.\n• El Ángulo Crítico (120°): Zona donde la atenuación alcanza un salto abrupto de hasta -15 dB. Ubicar una fuente contaminante (como el retorno de un monitor o un plato ruidoso) a 120° respecto al eje del micrófono reduce drásticamente su presencia en la toma.\n• Rechazo Posterior (180°): Zona nula en patrones cardioides puros, ideal para apuntar la parte trasera hacia la dirección de donde proviene el ruido principal.\n\nComprender esta atenuación permite aplicar la 'mezcla física': equilibrar instrumentos y silenciar filtraciones en la sala mediante giros milimétricos de soporte, antes de que la señal ingrese al preamplificador.",
      image: {
        url: "/images/clase6/clase6-atenuacion-angular.webp",
        comment: "Caída logarítmica angular en cardioide: 0 dB en eje, -6 dB a 90° y aislamiento crítico de -15 dB en el ángulo de 120°."
      },
      bulletPoints: [
        { label: "No linealidad", text: "La pérdida de energía en decibeles no responde a pasos proporcionales simétricos." },
        { label: "El punto de 120°", text: "Ángulo estratégico para atenuar hasta -15 dB fuentes secundarias en patrones direccionales." },
        { label: "Mezcla física en sala", text: "Aprovechar los puntos de rechazo angular para equilibrar la toma antes del previo." }
      ]
    },
    {
      title: "Captación de Instrumentos con Complejidad Acústica",
      content: "No todos los instrumentos radian el sonido desde un único orificio o plano focal; muchos exigen considerar su geometría física completa:\n\n• Instrumentos de Viento (Saxo, Clarinete): El sonido no emana exclusivamente de la campana final; gran parte del cuerpo y los formantes se proyectan a través de las llaves y orificios del tubo. Si apuntamos el micrófono solo a la campana obtendremos un timbre estridente y nasal; la cápsula debe orientarse hacia el cuerpo para registrar un timbre balanceado.\n• Piano Acústico de Cola: Al disponer de un arpa extensa donde conviven cuerdas graves de varios metros con cuerdas agudas cortas, demanda microfonía aérea estéreo (Overheads) para abarcar el registro armónico completo.\n• Percusión Latina (Congas): Ubicar un micrófono cenital perpendicular capta el cuero pero pierde articulación; la cápsula debe angularse hacia el centro del parche para equilibrar el chasquido del impacto (slap) con la resonancia del casco.",
      image: {
        placeholder: true,
        comment: "Esquema de microfoneo: Angulación hacia el cuerpo de un saxofón vs captura cenital angulada en congas."
      },
      bulletPoints: [
        { label: "Vientos de madera y metal", text: "Evitar microfonear únicamente la campana para no perder la resonancia del cuerpo de llaves." },
        { label: "Plano estéreo en piano", text: "Distribución de micrófonos aéreos para registrar con fidelidad la extensión del arpa." },
        { label: "Angulación en parches", text: "Orientar la cápsula hacia el centro para registrar pegada y resonancia simultáneamente." }
      ]
    }
  ],
  quiz: [
    {
      id: 1,
      question: "¿Cuáles son los 'dos filtros físicos' por los que pasa obligatoriamente cualquier señal acústica al ingresar al estudio?",
      options: [
        "El ecualizador digital y el limitador de mastering",
        "El micrófono (transductor) y el preamplificador (circuito de ganancia/color)",
        "El cable USB y el driver ASIO de la placa",
        "El filtro antipop y el soporte amortiguador (spider)"
      ],
      correct: 1,
      explanation: "El micrófono convierte la energía mecánica en electricidad y el preamplificador la eleva y colorea; si estos dos filtros no se eligen bien, la señal queda condicionada de origen."
    },
    {
      id: 2,
      question: "¿Qué define el concepto de 'Ensamble Físico' (blend) de una banda antes de grabar?",
      options: [
        "La afinación digital por software en post-producción",
        "La capacidad de los músicos de sonar equilibrados en dinámica y balance espectral de forma natural en la sala",
        "Conectar todos los instrumentos al mismo bus auxiliar",
        "Usar exactamente el mismo modelo de micrófono en todas las tomas"
      ],
      correct: 1,
      explanation: "Un ensamble acústico correcto permite que los instrumentos convivan en volumen, silencios y frecuencias de manera orgánica antes de encender un preamplificador."
    },
    {
      id: 3,
      question: "¿Qué patrón polar es el más indicado para aislar toms de batería que se encuentran muy próximos entre sí y evitar el sangrado (bleeding)?",
      options: [
        "Omnidireccional (360°)",
        "Figura de 8 (Bidireccional)",
        "Hipercardioide",
        "Cardioide amplio"
      ],
      correct: 2,
      explanation: "El patrón hipercardioide tiene un lóbulo frontal muy estrecho y enfocado que rechaza los instrumentos adyacentes, minimizando el derrame lateral."
    },
    {
      id: 4,
      question: "¿Cómo se comporta la polaridad de un micrófono cardioide estándar ante frecuencias graves profundas (ej. 125 Hz)?",
      options: [
        "Se vuelve sumamente estrecho como un láser direccional",
        "Se deforma físicamente y se comporta prácticamente como un micrófono omnidireccional",
        "Invierte su polaridad eléctrica a 180°",
        "Rechaza el 100% de los sonidos que provengan de los lados"
      ],
      correct: 1,
      explanation: "Las longitudes de onda largas no interactúan con el laberinto acústico del micrófono; por eso en frecuencias graves casi todo micrófono direccional pierde su rechazo y capta en 360°."
    },
    {
      id: 5,
      question: "¿Cómo reacciona el mismo micrófono cardioide ante frecuencias agudas (ej. 8 kHz)?",
      options: [
        "Se vuelve omnidireccional y capta todo el rebote de la sala",
        "Se vuelve mucho más direccional y enfocado, comportándose casi como un hipercardioide",
        "Cancela por completo la frecuencia fundamental",
        "Produce una atenuación lineal constante en todos los ángulos"
      ],
      correct: 1,
      explanation: "En altas frecuencias, la longitud de onda es tan corta que la cápsula actúa como pantalla física, volviendo la captación frontal mucho más cerrada y direccional."
    },
    {
      id: 6,
      question: "Por la deformación del patrón en graves, ¿por qué es un grave error colocar a un cantante cerca de un amplificador de bajo en una toma simultánea?",
      options: [
        "Porque el bajo quemará la cinta pasiva del micrófono",
        "Porque los graves del bajo entrarán sin rechazo por la parte posterior del mic vocal, ensuciando la toma con 'barro' difícil de corregir",
        "Porque los agudos del bajo generarán acoples instantáneos",
        "Porque el bajo satura el conversor D/A antes del previo"
      ],
      correct: 1,
      explanation: "El micrófono cardioide rechazará el brillo del bajo pero absorberá todos sus graves por detrás al volverse omnidireccional en esa zona del espectro."
    },
    {
      id: 7,
      question: "En un micrófono cardioide, ¿qué atenuación aproximada experimenta una señal no deseada ubicada en el ángulo crítico de 120°?",
      options: [
        "Apenas -1 a -2 dB",
        "Aproximadamente -5 a -6 dB",
        "Una caída drástica de hasta -15 dB",
        "0 dB (se mantiene intacta)"
      ],
      correct: 2,
      explanation: "Debido a la escala logarítmica, a 120° la captación cae cerca de 15 dB, lo que representa un aislamiento masivo de la fuente indeseada sin necesidad de filtros."
    },
    {
      id: 8,
      question: "¿Por qué el decibel (dB) requiere pensar en términos logarítmicos y no lineales?",
      options: [
        "Porque el audio se calcula multiplicando siempre por 2",
        "Porque pequeños giros de ángulo o ajustes no bajan una cuota fija de energía, sino que producen caídas masivas en la presión percibida",
        "Porque solo se aplica a sistemas estéreo",
        "Porque el oído humano mide de forma proporcional y plana"
      ],
      correct: 1,
      explanation: "La percepción humana del volumen es logarítmica; mover el micrófono unos pocos grados fuera del eje produce una reducción de energía sonora drástica que no es lineal."
    },
    {
      id: 9,
      question: "Al microfonear instrumentos de viento madera como el clarinete o saxofón, ¿cuál es el error común?",
      options: [
        "Usar micrófonos de condensador con +48V",
        "Apuntar el micrófono únicamente a la salida de la campana, ignorando el sonido y cuerpo que emana de las llaves",
        "Colocar el micrófono a 90° respecto al suelo",
        "Poner un filtro antipop rígido de tela"
      ],
      correct: 1,
      explanation: "El sonido de estos instrumentos se produce a lo largo de toda la columna de aire; apuntar solo a la campana entrega un timbre desbalanceado y nasal."
    },
    {
      id: 10,
      question: "Para microfonear percusiones como congas y capturar tanto el ataque del golpe como su cuerpo, ¿cómo se posiciona el micrófono?",
      options: [
        "Completamente horizontal paralelo al suelo",
        "Angulado hacia el centro del parche en lugar de apuntar recto hacia abajo",
        "A un metro por encima apuntando al borde exterior",
        "En el interior de la abertura inferior de resonancia"
      ],
      correct: 1,
      explanation: "Ubicar la cápsula inclinada hacia el centro del parche registra el chasquido del impacto (slap) y la resonancia del cuerpo sin tapar las manos del músico."
    }
  ],
  flashcards: [
    {
      front: "¿Cuáles son los 'dos filtros físicos' de entrada al estudio?",
      back: "1. El Micrófono (interpreta energía acústica en eléctrica) y 2. El Preamplificador (eleva la señal y añade color armónico)."
    },
    {
      front: "¿Qué es el 'Ensamble Físico' de una banda?",
      back: "El balance natural acústico de dinámica, silencios y espectro que los músicos logran tocando juntos en la sala antes de grabar."
    },
    {
      front: "Características del patrón Omnidireccional (360°)",
      back: "Captura uniforme desde todas las direcciones; no tiene efecto de proximidad y capta el espacio natural de la sala."
    },
    {
      front: "Características del patrón Cardioide",
      back: "Captura frontal en forma de corazón con amplio rechazo en su zona posterior (180°)."
    },
    {
      front: "Uso clave del patrón Hipercardioide",
      back: "Aislamiento quirúrgico frontal; ideal para evitar sangrado (bleeding) entre toms muy cercanos o fuentes ruidosas contiguas."
    },
    {
      front: "Características del patrón Figura de 8 (Bidireccional)",
      back: "Captura idéntica por el frente y por atrás, con rechazo total (cancelación absoluta) en sus ángulos laterales de 90°."
    },
    {
      front: "¿Cómo se deforma un cardioide en frecuencias graves (125 Hz)?",
      back: "Pierde su direccionalidad y se vuelve prácticamente omnidireccional, captando los graves desde cualquier ángulo."
    },
    {
      front: "¿Cómo se deforma un cardioide en agudos (8 kHz)?",
      back: "Se vuelve mucho más cerrado y direccional (similar a un hipercardioide), captando casi exclusivamente lo que está en su eje frontal."
    },
    {
      front: "¿Por qué no colocar un amplificador de bajo detrás del cantante?",
      back: "Porque el micrófono vocal captará los graves del bajo por su parte trasera al volverse omnidireccional en bajas frecuencias."
    },
    {
      front: "Atenuación a 90° en un micrófono cardioide",
      back: "Aproximadamente -5 dB a -6 dB respecto al eje frontal."
    },
    {
      front: "Atenuación en el ángulo crítico de 120° en un cardioide",
      back: "Una caída drástica de hasta -15 dB; es la zona ideal para aislar instrumentos ruidosos no deseados."
    },
    {
      front: "Diferencia entre escala lineal y escala logarítmica en audio",
      back: "La lineal avanza en pasos proporcionales iguales; la logarítmica (dB) refleja saltos drásticos de presión sonora con pequeños ajustes."
    },
    {
      front: "Captación correcta de instrumentos de viento (saxo, clarinete)",
      back: "Apuntar hacia el cuerpo y llaves además de la campana, capturando el tono equilibrado y no solo la salida de aire ruidosa."
    },
    {
      front: "¿Por qué el piano acústico requiere captación estéreo?",
      back: "Por su gran tamaño físico y la separación espacial entre las cuerdas graves (izquierda) y agudas (derecha)."
    },
    {
      front: "Posicionamiento de micrófono en congas",
      back: "Angulado hacia el centro del parche para balancear el transitorio de ataque con la resonancia y peso del cuerpo."
    },
    {
      front: "Punto de máxima sensibilidad del micrófono",
      back: "0° (On-axis / en el eje), donde la cápsula recibe el 100% de la energía y detalle acústico."
    },
    {
      front: "Punto de máximo rechazo en cardioide",
      back: "180° (parte posterior), ideal para darle la espalda a monitores o instrumentos secundarios."
    },
    {
      front: "Definición de 'Bleeding' o sangrado acústico",
      back: "La filtración no deseada del sonido de un instrumento dentro del micrófono de otro instrumento cercano."
    },
    {
      front: "¿Qué significa 'mezclar con la sala'?",
      back: "Usar distancias, ángulos polares y posición física de los músicos para equilibrar la mezcla acústicamente antes del DAW."
    },
    {
      front: "Regla del productor sobre el balance espectral",
      back: "Distribuir frecuencias en el espacio para evitar que las fuentes con masa de graves invadan micrófonos destinados a agudos o voces."
    }
  ]
};