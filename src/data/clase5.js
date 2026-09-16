export const clase5 = {
  id: 5,
  title: "El Universo de los Micrófonos y Respuesta en Frecuencia",
  summary: "Curvas de respuesta, dinámica de bobina móvil, patrones polares, micrófonos de cinta, arreglos estéreo (XY, AB, ORTF) y física aplicada.",
  sections: [
    {
      title: "La Curva de Respuesta en Frecuencia: El Mapa Sonoro",
      content: "Elegir un micrófono no es una cuestión de intuición ni de marcas caras; es una decisión técnica fundada en la física acústica. Cada transductor reacciona de manera distinta ante el espectro audible (20 Hz a 20.000 Hz), y esa conducta queda registrada en su Curva de Respuesta en Frecuencia.\n\nAl analizar esta gráfica técnica observamos dos ejes indispensables:\n• Eje X (Horizontal): Mapea las frecuencias en escala logarítmica; a la izquierda los graves profundos, al centro el rango medio y a la derecha los agudos.\n• Eje Y (Vertical): Mide la sensibilidad relativa en decibeles (dB). Cuando la curva transita de forma lineal sobre el valor cero, estamos ante una respuesta plana, lo que significa que el micrófono capta la realidad acústica con neutralidad y fidelidad absoluta.\n\nSi la curva muestra una elevación intencional (comúnmente situada entre los 4 kHz y los 6 kHz), nos encontramos frente a un 'Pico de Presencia' diseñado por el fabricante para dar claridad, articulación y brillo a la voz sin requerir ecualización externa. Por el contrario, una depresión o caída en los extremos indica atenuación; por ejemplo, un roll-off en graves para evitar que vibraciones mecánicas o ruidos de suelo ensucien la captura. Saber leer este mapa nos permite anticipar el timbre exacto de una toma antes de encender la interfaz.",
      bulletPoints: [
        { label: "Respuesta Plana", text: "Fidelidad lineal en 0 dB; registra el instrumento tal como resuena en la sala sin colorear." },
        { label: "Pico de Presencia", text: "Realce en medios-agudos (~5 kHz) para asegurar inteligibilidad vocal y ayudar a cortar la mezcla." },
        { label: "Criterio Técnico", text: "Prever la conducta acústica mediante la gráfica para no depender de correcciones quirúrgicas en el DAW." }
      ]
    },
    {
      title: "Micrófonos Dinámicos de Bobina Móvil",
      content: "Son las herramientas de trabajo más duras y confiables de la industria. Su mecanismo interno se apoya en una membrana solidaria a una bobina de cobre inmersa en un campo magnético. Al recibir la onda de presión sonora, la bobina se desplaza y corta las líneas magnéticas, generando corriente eléctrica por inducción electromagnética.\n\nSon transductores sumamente resistentes a impactos físicos, variaciones bruscas de temperatura, humedad y niveles de presión sonora (SPL) colosales sin distorsionar. Salvo contadas excepciones activas, operan de forma pasiva sin necesidad de alimentación Phantom Power (+48V). Presentan una caída natural y pronunciada a partir de los 10 kHz; esta limitación en el extremo agudo es precisamente su mayor ventaja en vivo, ya que previene acoples (feedback) con los sistemas de monitoreo.\n\nModelos de Referencia:\n• Shure SM58: El estándar mundial en voces de escenario; incluye recorte de graves y realce de presencia en medios-agudos.\n• Shure SM57: El estándar indiscutido para redoblantes y amplificadores de guitarra eléctrica por su respuesta rápida y pegada de rango medio.\n• Sennheiser MD 421: Diafragma grande dinámico, ideal para toms de batería, instrumentos de viento y gabinetes de bajo.\n• Shure SM7B: Micrófono dinámico blindado de baja sensibilidad; estándar en broadcasting, locución y voces pesadas. Requiere preamplificadores de muy alta ganancia limpia o pre-previos en línea (como el Cloudlifter) para no introducir siseo de fondo.",
      bulletPoints: [
        { label: "Robustez Mecánica", text: "Toleran presiones sonoras extremas (alto SPL) y maltrato en vivo sin sufrir deformaciones." },
        { label: "Roll-off en 10 kHz", text: "Atenuación natural en agudos que actúa como escudo contra la retroalimentación." },
        { label: "Shure SM7B y Ganancia", text: "Genera un voltaje infinitesimal que exige previos potentes o elevadores pasivos de señal." }
      ]
    },
    {
      title: "Micrófonos de Cinta (Ribbon): Calidez Vintage y Figura de 8",
      content: "Los micrófonos de cinta representan la respuesta más orgánica y suave que podemos registrar. Su elemento transductor consiste en una delgadísima lámina corrugada de aluminio suspendida entre los polos de un imán permanente. Al no tener una bobina pesada pegada al diafragma, la cinta reacciona con extrema agilidad a los transitorios.\n\nPor diseño físico abierto en ambas caras, su patrón polar natural es la Figura de 8 (Bidireccional): captan con idéntica sensibilidad por el frente y por la parte posterior, mientras que anulan de forma absoluta cualquier sonido que provenga de los costados (puntos nulos a 90° y 270°). Esto los convierte en la herramienta perfecta para capturar el instrumento de frente y absorber simultáneamente la reverberación natural de la sala por detrás.\n\nProtocolo de Seguridad Eléctrica y Mecánica:\n• Cintas Pasivos: Es mandatorio verificar que el Phantom Power (+48V) esté completamente apagado antes de conectarlos. Enviar corriente continua a una cinta pasiva puede recalentar, deformar o pulverizar la lámina metálica en milisegundos.\n• Cintas Activos: Incorporan circuitos electrónicos protegidos que sí demandan +48V para operar (ej. Rode NTR), brindando mayor nivel de salida y seguridad en el estudio.\n• Fragilidad ante ráfagas de aire: Jamás expongas una cinta a un golpe directo de aire (como el orificio de un bombo a corta distancia), ya que el desplazamiento brusco fracturará el elemento metálico. Además, deben guardarse con su tornillo de traba mecánica ajustado para su traslado.",
      bulletPoints: [
        { label: "Patrón Bidireccional (Figura de 8)", text: "Captación frontal y trasera simétrica con rechazo absoluto en los laterales." },
        { label: "Peligro de +48V", text: "El Phantom Power destruye la cinta de aluminio en modelos pasivos." },
        { label: "Cuidado Mecánico", text: "Proteger de corrientes intensas de aire y utilizar anclajes de fijación para transporte." }
      ]
    },
    {
      title: "Micrófonos de Condensador: Diafragma Grande vs. Diafragma Pequeño",
      content: "Operan mediante un capacitor electrostático formado por una membrana móvil paralela a una placa trasera fija, alimentados por corriente continua (+48V). Se dividen funcionalmente en dos familias principales:\n\n1. Condensadores de Diafragma Grande (ej. Neumann U87, AKG C414):\nPoseen una masa superficial mayor que entrega graves profundos, cuerpo armónico y un piso de ruido electrónico extremadamente bajo. Casi siempre incorporan selectores multipatrón (Cardioide, Omni, Figura de 8). Son la opción de referencia para voces líderes, doblajes, guitarras acústicas y pianos de cola. Al ser tan sensibles al detalle fino de sala, exigen cabinas con tratamiento acústico riguroso.\n\n2. Condensadores de Diafragma Pequeño ('Tipo Lápiz'):\nSu membrana minúscula tiene una inercia de masa casi nula, lo que les permite reaccionar de inmediato ante transitorios de alta velocidad y ofrecer una dispersión polar sumamente consistente. Son ideales para fuentes con ataques punzantes y riqueza en agudos: platillos de batería (Overheads), instrumentos de cuerda punteada y ensambles. Resultan indispensables para técnicas de captura estéreo en pares emparejados (Matched Pairs).",
      bulletPoints: [
        { label: "Diafragma Grande", text: "Sonido robusto, calidez, bajo ruido de fondo y versatilidad multipatrón para voces." },
        { label: "Diafragma Pequeño", text: "Velocidad absoluta ante transitorios rápidos y precisión milimétrica en platillos y acústicas." },
        { label: "Mantenimiento contra Humedad", text: "La saliva altera la capacitancia de las placas; se deben almacenar con silica gel desecante en su estuche." }
      ]
    },
    {
      title: "Física Acústica Aplicada: Longitud de Onda y Control en el Bombo",
      content: "En el estudio no colocamos elementos por costumbre; las decisiones de producción se rigen por las leyes de la física ondulatoria. Para comprender cómo se mueve la energía en la sala, calculamos la Longitud de Onda mediante la fórmula:\n\nλ = v / f\n\nDonde «v» es la velocidad del sonido en el aire (340 m/s) y «f» es la frecuencia en Hercios. Si tenemos un bombo cuya fundamental resuena en 60 Hz, la longitud de onda de ese sonido mide:\n\nλ = 340 / 60 ≈ 5,66 metros\n\nLa onda tarda más de cinco metros y medio en completar un solo ciclo de compresión y rarefacción. Por eso, cuando colocamos mantas pesadas o túneles de absorción frente al bombo, no estamos 'apagando' el sonido: estamos frenando mecánicamente la velocidad del aire para que la masa molecular de graves no sature violentamente la cápsula del micrófono exterior, garantizando una captura controlada y con pegada seca.",
      bulletPoints: [
        { label: "Cálculo de Lambda", text: "Longitud de onda = Velocidad de propagación (340 m/s) dividida por la frecuencia." },
        { label: "Graves Gigantescos", text: "A menor frecuencia, mayor dimensión física de la onda acústica en la sala." },
        { label: "Función de las Mantas", text: "Freno y desaceleración molecular para evitar sobrecarga aerodinámica en el transductor." }
      ]
    },
    {
      title: "Ingeniería de Posicionamiento: La Mezcla Física con un Solo Micrófono",
      content: "Un productor entrenado puede entregar una mezcla balanceada sin mover un solo fader en la consola, valiéndose exclusivamente de un micrófono de cinta en Figura de 8 y una disposición geométrica estratégica en la sala:\n\n• Manejo de Fuentes Invasivas: Elementos de gran energía dinámica como el bajo y la batería se distribuyen en los extremos opuestos de la sala para que no enmascaren al resto. El amplificador de bajo debe situarse lejos y, preferentemente, detrás de la espalda del cantante.\n• Jerarquía Espacial: El vocalista se sitúa en el punto más próximo al eje frontal de la cápsula para retener definición, calidez por proximidad y presencia en medios.\n• Mezcla Dinámica Humana: Los propios músicos controlan el balance mediante su técnica corporal; en los pasajes de coro o intensidades elevadas, los instrumentistas elevan o apartan ligeramente su posición para dar paso al liderazgo de la voz principal.",
      bulletPoints: [
        { label: "Aislamiento por Distancia", text: "Separar físicamente los instrumentos dominantes para equilibrar presiones en la sala." },
        { label: "Frente Vocal Directo", text: "Alineación en el eje central de máxima sensibilidad de la cinta." },
        { label: "Autorregulación del Ensamble", text: "La dinámica musical se resuelve en la sala y no mediante automatizaciones posteriores." }
      ]
    },
    {
      title: "Configuraciones Estéreo y Técnica Vocal de Escenario",
      content: "Para registrar planos estéreo coherentes y dominar el sonido en vivo, aplicamos criterios geométricos estrictos:\n\nArreglos Estéreo Fundamentales:\n• Técnica A/B: Dos micrófonos en paralelo separados a una distancia fija; genera gran amplitud a costa de posibles desfases si no se calibra.\n• Técnica X/Y (Coincidente): Dos cápsulas cruzadas en un ángulo de 90° situadas una justo sobre la otra; garantiza compatibilidad mono y elimina cancelaciones de fase.\n• Técnica ORTF: Cápsulas orientadas hacia afuera en ángulo de 110° a 120° con una separación de 17 cm entre ellas, emulando la distancia interaural humana para una imagen espacial hiperrealista.\n\nTécnica de Escenario: El 'Punto de Morán':\nAl utilizar micrófonos dinámicos cardioides en vivo (como el Shure SM58), la cápsula no debe apuntar perpendicular a los labios. Debe orientarse hacia el Punto de Morán, ubicado en el paladar justo detrás de los incisivos frontales superiores. Esta angulación ascendente utiliza la bóveda del paladar como resonador natural para proyectar la energía de la voz directamente a la membrana. Al mismo tiempo, hace que la parte trasera del micrófono (la zona de 180° de máximo rechazo polar) apunte directo al monitor de suelo, impidiendo la entrada de retroalimentación acústica y eliminando acoples en el show.",
      bulletPoints: [
        { label: "Técnica X/Y", text: "Cápsulas a 90° coincidentes; estabilidad de fase y consistencia estéreo." },
        { label: "Técnica ORTF", text: "Separación de 17 cm y apertura de 110-120°; sensación de espacialidad binaural." },
        { label: "Punto de Morán", text: "Dirección hacia el paladar superior para canalizar la voz y orientar el rechazo polar hacia el monitor." },
        { label: "On-Axis vs. Off-Axis", text: "Apuntar al centro aporta brillo y transitorio; inclinar hacia el borde suaviza frecuencias ásperas." }
      ]
    }
  ],
  quiz: [
    {
      id: 1,
      question: "Al leer una curva de respuesta en frecuencia, ¿qué indica que la línea se mantenga en el valor 0 dB?",
      options: [
        "Que el micrófono tiene una distorsión armónica elevada",
        "Que el micrófono tiene una respuesta plana y captura la fuente de forma neutra",
        "Que el micrófono solo capta frecuencias por debajo de 20 Hz",
        "Que la señal está clipeando en el preamplificador"
      ],
      correct: 1,
      explanation: "Una respuesta en 0 dB a lo largo del espectro significa neutralidad (respuesta plana), sin realces ni atenuaciones en ninguna banda."
    },
    {
      id: 2,
      question: "¿Por qué el Shure SM7B suele requerir un previo de alta ganancia o un dispositivo como el Cloudlifter?",
      options: [
        "Porque opera con válvulas de alto voltaje",
        "Porque genera un voltaje de salida sumamente bajo que necesita amplificación limpia adicional",
        "Porque debe transformar la señal digital a analógica",
        "Porque invierte la polaridad si no recibe +48V"
      ],
      correct: 1,
      explanation: "El SM7B es un micrófono dinámico con una sensibilidad de salida muy baja; requiere preamps potentes o activadores de señal limpios para no meter ruido de fondo."
    },
    {
      id: 3,
      question: "¿Cuál es el patrón polar característico de casi todos los micrófonos de cinta (Ribbon)?",
      options: [
        "Cardioide estrecho",
        "Omnidireccional en 360°",
        "Figura de 8 (Bidireccional)",
        "Hipercardioide con rechazo frontal"
      ],
      correct: 2,
      explanation: "La cinta metálica suspendida en el campo magnético queda expuesta por delante y por detrás por igual, captando en Figura de 8 y rechazando los laterales."
    },
    {
      id: 4,
      question: "¿Qué ventaja ofrecen los micrófonos de condensador de diafragma pequeño (tipo 'lápiz') frente a los de diafragma grande?",
      options: [
        "Soportan caídas y golpes sin romperse como un dinámico",
        "Tienen una masa menor en su diafragma que reacciona con extrema rapidez a los transitorios",
        "No requieren alimentación Phantom Power (+48V)",
        "Tienen un patrón polar exclusivamente omnidireccional"
      ],
      correct: 1,
      explanation: "Al tener una membrana pequeña y liviana, capturan los ataques rápidos (transientes) de guitarras acústicas, platillos de batería y percusiones con gran definición."
    },
    {
      id: 5,
      question: "Si la guitarra eléctrica en un amplificador suena demasiado chillona o hiriente en agudos, ¿qué ajuste físico se debe hacer?",
      options: [
        "Acercarla al centro exacto del cono del parlante (On-Axis)",
        "Mover el micrófono hacia el borde del cono o angularlo (Off-Axis)",
        "Activar el Phantom Power en la interfaz",
        "Insertar un compresor antes del preamplificador"
      ],
      correct: 1,
      explanation: "El centro del cono (on-axis) entrega mayor brillo y transitorios agresivos; al mover el mic hacia los extremos (off-axis) la respuesta se vuelve más opaca y cálida."
    },
    {
      id: 6,
      question: "Según la fórmula de longitud de onda (λ = 340 m/s / Frecuencia), ¿cuánto mide aproximadamente la onda de un bombo afinado en 60 Hz?",
      options: [
        "Aproximadamente 0.5 metros",
        "Aproximadamente 5.6 metros",
        "Exactamente 20 metros",
        "Menos de 10 centímetros"
      ],
      correct: 1,
      explanation: "Dividiendo 340 m/s entre 60 Hz obtenemos 5.66 metros; por eso las frecuencias graves ocupan grandes espacios físicos y acumulan tanta energía en la sala."
    },
    {
      id: 7,
      question: "¿Qué función cumple colocar una manta o túnel acústico frente al bombo de la batería?",
      options: [
        "Aumentar el volumen de los agudos del pedal",
        "Producir una desaceleración de la energía molecular de los graves antes de golpear la cápsula",
        "Transformar el micrófono en balanceado",
        "Eliminar por completo el sonido de la sala para que no se escuchen los platos"
      ],
      correct: 1,
      explanation: "La manta actúa como freno mecánico a la gran masa de aire expulsada, controlando el impacto sobre el micrófono sin ahogar la afinación del bombo."
    },
    {
      id: 8,
      question: "¿Cómo se posicionan los micrófonos en la técnica estéreo ORTF?",
      options: [
        "Cápsulas cruzadas en ángulo recto de 90°",
        "Cuerpos orientados con las cápsulas separadas en un ángulo de 120° para simular la audición humana",
        "Dos micrófonos colocados completamente en paralelo (AB)",
        "Uno en el techo apuntando al suelo y otro a la altura de los ojos"
      ],
      correct: 1,
      explanation: "La técnica de la radio francesa (ORTF) separa las cápsulas 17 cm con un ángulo abierto de 120° para recrear las diferencias de tiempo y nivel del oído humano."
    },
    {
      id: 9,
      question: "¿Qué es el 'Punto de Morán' en la técnica de microfonía para sonido en directo?",
      options: [
        "La base del soporte del micrófono para evitar ruidos de suelo",
        "La zona ubicada detrás de los dos dientes frontales superiores donde resuena el paladar",
        "La salida directa XLR detrás de la consola de mezcla",
        "El botón de encendido del sistema inalámbrico"
      ],
      correct: 1,
      explanation: "Apuntar hacia la zona post-incisiva superior aprovecha el paladar como resonador y orienta la parte posterior del micrófono cardioide hacia el monitor de suelo."
    },
    {
      id: 10,
      question: "Al angular el micrófono hacia el Punto de Morán en vivo, ¿qué beneficio se obtiene respecto a los monitores de piso?",
      options: [
        "Aumenta la ganancia del monitor 12 dB automáticamente",
        "La parte trasera del micrófono (zona de máximo rechazo cardioide) apunta al monitor, evitando acoples (feedback)",
        "Se convierte la señal en figura de 8",
        "Se cancela el sangrado de la guitarra acústica"
      ],
      correct: 1,
      explanation: "Un micrófono cardioide rechaza el sonido proveniente de 180° (atrás); al apuntar hacia arriba a la boca, la cola del mic mira al suelo protegiéndose del monitor."
    }
  ],
  flashcards: [
    {
      front: "¿Qué representa el eje horizontal (X) en una curva de respuesta en frecuencia?",
      back: "Las frecuencias audibles de izquierda a derecha, desde los 20 Hz (graves) hasta los 20,000 Hz (agudos)."
    },
    {
      front: "¿Qué es el 'Pico de Presencia' en la curva de un micrófono?",
      back: "Una elevación intencional (comúnmente cerca de los 5 kHz) que otorga claridad, articulación y brillo a la voz."
    },
    {
      front: "¿Por qué los micrófonos dinámicos son el estándar en vivo?",
      back: "Por su alta resistencia a golpes, tolerancia a picos extremos de SPL y estabilidad ante cambios de clima y humedad."
    },
    {
      front: "Uso característico del Shure SM57",
      back: "Redoblantes de batería y gabinetes de guitarra eléctrica por su pegada media-aguda directa."
    },
    {
      front: "Uso característico del Sennheiser MD421",
      back: "Toms de batería, instrumentos de viento metal (trompetas, saxos) y amplificadores de bajo eléctrico."
    },
    {
      front: "¿Por qué el Shure SM7B requiere Cloudlifter o preamps potentes?",
      back: "Porque entrega un voltaje de salida muy bajo que exige ganancia limpia adicional para evitar soplo de previo."
    },
    {
      front: "¿Cómo capta el sonido el patrón polar Figura de 8?",
      back: "Capta la señal por el frente y por la parte trasera con igual sensibilidad, mientras rechaza los laterales por completo."
    },
    {
      front: "Peligro crítico de los micrófonos de cinta pasivos",
      back: "El Phantom Power (+48V) o ráfagas directas de aire pueden deformar, estirar o romper irreversiblemente la cinta de metal."
    },
    {
      front: "Ventaja del diafragma grande en condensadores",
      back: "Mayor sensibilidad global y riqueza armónica con bajo ruido propio; ideal para voces principales, pianos y acústicas."
    },
    {
      front: "Ventaja del diafragma pequeño ('lápiz') en condensadores",
      back: "Excelente velocidad de respuesta a transitorios y respuesta polar consistente en frecuencias agudas."
    },
    {
      front: "¿Qué diferencia sonora hay entre On-Axis y Off-Axis?",
      back: "On-Axis (al centro) es directo, agresivo y brillante; Off-Axis (angulado o al borde) es más cálido, suave y oscuro."
    },
    {
      front: "Fórmula de longitud de onda acústica (λ)",
      back: "λ = Velocidad del sonido (340 m/s) / Frecuencia (Hz)."
    },
    {
      front: "¿Por qué las ondas graves son complejas de aislar en estudio?",
      back: "Por su enorme longitud física (ej. 60 Hz mide ~5.6 metros) y la gran cantidad de energía cinética que transmiten."
    },
    {
      front: "En una sesión con un solo micrófono en Figura de 8, ¿dónde se ubican bajo y batería?",
      back: "En extremos opuestos de la sala y alejados de la cápsula para que su volumen masivo no tape la voz principal."
    },
    {
      front: "Configuración del par coincidente estéreo XY",
      back: "Dos micrófonos de condensador pequeños cuyas cápsulas se cruzan en un ángulo cerrado de 90°."
    },
    {
      front: "Configuración del arreglo estéreo ORTF",
      back: "Dos micrófonos separados 17 cm con un ángulo abierto de 120°, emulando la separación y recepción de los oídos humanos."
    },
    {
      front: "¿Qué es el 'Punto de Morán'?",
      back: "La zona interna del paladar detrás de los incisivos frontales superiores que actúa como cámara resonadora hacia el micro."
    },
    {
      front: "¿Cómo ayuda el ángulo hacia el Punto de Morán a evitar acoples?",
      back: "Dirige la parte posterior del micrófono (punto sordo cardioide) hacia el monitor de escenario en el suelo."
    },
    {
      front: "¿Por qué es clave el gel desecante (Silica Gel) en micrófonos de condensador?",
      back: "Porque la humedad de la saliva condensada en la cápsula altera la respuesta en agudos y degrada la electrónica."
    },
    {
      front: "Regla de oro de la producción: microfonía vs ecualización",
      back: "Ecualiza cambiando la posición del micrófono y mezcla manejando la distancia; reserva el EQ del DAW para detalles sutiles."
    }
  ]
};