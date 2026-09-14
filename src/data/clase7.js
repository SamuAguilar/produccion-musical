export const clase7 = {
  id: 7,
  title: "Patrones Polares II, Cajas Directas y Control Físico",
  summary: "Puntos ciegos (null points), jerarquía del efecto de proximidad, aislamiento guitarra/voz, cajas directas activas vs. pasivas y bucles de masa.",
  sections: [
    {
      title: "Arquitectura del Patrón Polar y Puntos Nulos (Null Points)",
      content: "El patrón polar no es un dibujo decorativo en la caja del fabricante; es el mapa bidimensional y tridimensional que describe la sensibilidad angular de la cápsula medida en grados (0° a 360°) y decibeles (dB). En producción profesional, lo verdaderamente importante no es solo por dónde capta el micrófono, sino identificar con precisión matemática dónde residen sus 'puntos ciegos' o puntos nulos (Null Points), que son los ángulos de rechazo absoluto. Utilizar estos puntos nulos en la sala nos permite eliminar el sangrado (bleeding) entre instrumentos y atenuar ruidos ambientales sin necesidad de recurrir a procesos digitales o compuertas destructivas en la mezcla.",
      image: {
        placeholder: true,
        comment: "Diagrama polar en 360° mostrando los puntos de máxima captación frontal (0°) y los puntos nulos de rechazo (Null Points)."
      },
      bulletPoints: [
        { label: "Puntos Nulos (Null Points)", text: "Zonas angulares donde el diafragma cancela la onda acústica por interferencia destructiva mecánica interna." },
        { label: "Shure SM7B", text: "Micrófono dinámico con patrón cardioide fijo y blindaje electromagnético masivo, ideal para voces en recintos no tratados o radiodifusión." }
      ]
    },
    {
      title: "Los Tres Patrones Esenciales y sus Zonas de Rechazo",
      content: "Dominar la geometría polar es la herramienta más eficaz para hacer la 'mezcla física' en el propio suelo del estudio antes de encender un preamplificador:\n\nA. Cardioide (Unidireccional / Forma de Corazón)\n• Sensibilidad: Máxima al frente en el eje axial (0°).\n• Punto Nulo: Rechazo máximo absoluto en la parte trasera a 180°.\n• Aplicación: Es el estándar para registrar cantantes o instrumentos solistas ignorando el ruido de ventiladores de ordenadores, fuentes lumínicas o reflexiones tempranas de la pared posterior.\n\nB. Omnidireccional (360° / Esférico)\n• Sensibilidad: Homogénea y uniforme en todos los ángulos de incidencia.\n• Puntos Nulos: Carece por completo de puntos de rechazo.\n• Aplicación: Captura del campo difuso y la reverberación natural de salas nobles, tomas de ambiente o ensambles orquestales y cuartetos de cuerdas donde se busca una respuesta de fase transparente y no invasiva.\n\nC. Figura de 8 (Bidireccional)\n• Sensibilidad: Idéntica en el lóbulo frontal (0°) y en el lóbulo posterior (180°).\n• Puntos Nulos: Rechazo total en los planos laterales (90° y 270°).\n• Aplicación: Posee el punto nulo más abrupto y profundo de la electroacústica (caídas superiores a -25 dB); permite aislar fuentes enfrentadas con precisión quirúrgica.",
      image: {
        placeholder: true,
        comment: "Comparativa gráfica de los 3 patrones: Cardioide (rechazo a 180°), Omnidireccional (esfera 360°) y Figura de 8 (rechazo nulo a 90° y 270°)."
      },
      bulletPoints: [
        { label: "Cardioide", text: "Aísla la señal frontal y protege la toma de ruidos ubicados a 180° a sus espaldas." },
        { label: "Omnidireccional", text: "Respuesta tímbrica lineal sin coloración fuera de eje ni puntos ciegos." },
        { label: "Figura de 8", text: "Muro de rechazo lateral en 90° y 270°, perfecto para cancelar interferencias perpendiculares." }
      ]
    },
    {
      title: "La Física del Efecto de Proximidad",
      content: "El Efecto de Proximidad es una respuesta acústica física donde las frecuencias graves se incrementan drásticamente a medida que la fuente emisora se acerca a la cápsula del micrófono. Este fenómeno se produce exclusivamente en micrófonos que operan por gradiente de presión (donde el sonido puede alcanzar ambas caras del diafragma).\n\nJerarquía de Sensibilidad al Efecto de Proximidad:\n1. Figura de 8: Es el transductor que experimenta la subida de graves más severa del mercado electroacústico. Si el vocalista canta pegado a la cinta, la señal sonará excesivamente oscura, cargada de subgraves descontrolados y empastada.\n2. Cardioide: Presenta una curva de proximidad marcada y muy aprovechada en radio y locución para otorgar peso, autoridad y cuerpo artificial a voces naturalmente delgadas.\n3. Omnidireccional: Como opera por presión pura (la onda solo entra por un lado sellado), el efecto de proximidad es nulo o prácticamente imperceptible. Se puede aproximar el micrófono a un milímetro de la fuente y la curva tonal se mantendrá intacta.",
      bulletPoints: [
        { label: "Gradiente de Presión", text: "Mecanismo físico causante de la amplificación de bajas frecuencias al acortar la distancia de captura." },
        { label: "Uso Creativo", text: "Aportar presencia grave a cantantes de registro agudo mediante acercamiento a cápsulas cardioides." },
        { label: "Inmunidad Omnidireccional", text: "Permite acercarse a fuentes percusivas sin generar saturación de graves por proximidad." }
      ]
    },
    {
      title: "Principios de Transducción Mecánica y Electrónica",
      content: "Antes de definir el patrón polar, debemos comprender cómo opera el motor interno del micrófono para convertir el sonido en voltaje:\n\n• Micrófonos Dinámicos (Bobina Móvil): Funcionan por inducción electromagnética; una membrana plástica solidaria a una bobina de cobre vibra dentro del entrehierro de un imán permanente. Operan como altavoces a la inversa. Son pasivos, casi indestructibles y toleran presiones sonoras (SPL) masivas sin deteriorarse. Suelen tener un patrón polar fijo de fábrica (comúnmente cardioide).\n• Micrófonos de Condensador (Capacitivos): Se basan en un capacitor electrostático compuesto por dos placas metálicas muy próximas; una fija y otra móvil ultrafina (diafragma). Al variar la distancia con las ondas sonoras, cambia la capacidad eléctrica de almacenamiento. Requieren alimentación continua Phantom Power (+48V). Son altamente sensibles, transparentes y muchos modelos (como el AKG C414) son multipatrón conmutables mediante relés internos.\n• Micrófonos de Cinta (Ribbon): Suspenden una lámina corrugada de aluminio microscópica en el centro de un campo magnético. Al ser extremadamente ligera, entrega la respuesta transitoria más fiel y aterciopelada de la industria, muy afín al oído humano. Son frágiles mecánicamente y los modelos pasivos pueden ser destruidos al instante si reciben accidentalmente +48V.",
      bulletPoints: [
        { label: "Bobina Móvil", text: "Robusta, pasiva e inmune a sobrecargas eléctricas habituales." },
        { label: "Capacitivo (+48V)", text: "Velocidad de transitorios y posibilidad de alternar patrones polares electrónicamente." },
        { label: "Lámina de Cinta", text: "Textura orgánica y patrón nativo en Figura de 8; vulnerabilidad ante tensiones Phantom pasivas." }
      ]
    },
    {
      title: "Estrategias de Sala: Cancelación Física sin Plugins",
      content: "Un productor de criterio utiliza la orientación espacial de los micrófonos para resolver problemas de captura antes de recurrir a ecualizadores o compuertas digitales:\n\nEscenario 1: Registro Simultáneo de Voz y Guitarra Acústica\nCuando un cantautor ejecuta su instrumento y canta a la vez, el micrófono vocal absorbe inevitablemente el sangrado brillante de la guitarra. La solución técnica consiste en montar un micrófono con patrón en Figura de 8 para la voz. Se orienta el eje frontal (0°) a la boca del intérprete y se calibran los laterales ciegos (90° y 270°) apuntando perpendicularmente hacia la boca de la guitarra. El rechazo lateral del patrón elimina casi por completo la señal de la guitarra en la pista de voz.\n\nEscenario 2: Sonido en Vivo y Supresión de Acoples (Feedback)\nEl acople se produce cuando la señal reamplificada por el monitor de suelo reingresa a la cápsula del micrófono generando un bucle oscilante infinito. Para evitarlo, el monitor debe situarse enfrentado de forma directa al ángulo de rechazo nulo del micrófono. Si el vocalista utiliza un transductor cardioide, la cuña de suelo debe ubicarse exactamente a sus pies apuntando a la parte trasera del micrófono (180°).",
      image: {
        placeholder: true,
        comment: "Esquema de microfoneo simultáneo: Micrófono en Figura de 8 para voz con sus puntos nulos de 90° orientados hacia la guitarra acústica."
      },
      bulletPoints: [
        { label: "Aislamiento Acústico en Voz/Guitarra", text: "Aprovechar la zona muerta de 90° de la Figura de 8 para suprimir la guitarra de la pista vocal." },
        { label: "Alineación de Monitores de Suelo", text: "Enfrentar los altavoces de retorno al punto nulo de 180° del micrófono cardioide para frenar el feedback." }
      ]
    },
    {
      title: "Cajas Directas (DI Boxes) y Desacoplo de Impedancias",
      content: "En el entorno del estudio, la Caja Directa (DI Box o Direct Injection) cumple la función crítica de transformar señales de alta impedancia (Hi-Z, procedentes de pastillas de guitarra o bajo) e instrumentos no balanceados en señales balanceadas de baja impedancia (Low-Z), compatibles con las entradas de micrófono de la consola o interfaz:\n\n• Cajas Directas Pasivas: Construidas sobre un transformador magnético pasivo. No necesitan pilas ni Phantom Power. Son ideales para fuentes que ya entregan un nivel eléctrico potente o poseen circuitos activos (sintetizadores, teclados, bajos activos con batería de 9V). El transformador satura musicalmente ante niveles muy altos.\n• Cajas Directas Activas: Incorporan un circuito preamplificador a transistores o amplificadores operacionales que requiere alimentación eléctrica (Phantom Power +48V o batería interna). Ofrecen una impedancia de entrada sumamente alta, indispensable para no degradar ni opacar las frecuencias agudas de instrumentos con pastillas pasivas tradicionales (bajos vintage, guitarras electroacústicas).",
      bulletPoints: [
        { label: "Acoplamiento de Impedancia", text: "Transforma señales Hi-Z de instrumentos en Low-Z de micrófono para el preamplificador." },
        { label: "DI Pasiva", text: "Aislamiento por transformador sin alimentación externa para instrumentos activos." },
        { label: "DI Activa (+48V)", text: "Ultra-alta impedancia de entrada para proteger la dinámica y agudos de pastillas pasivas." }
      ]
    },
    {
      title: "Control de Parásitos: Bucle de Masa, Arañas y Filtros",
      content: "Para preservar la pureza de la señal frente a ruidos parásitos mecánicos y eléctricos, recurrimos a herramientas de blindaje físico:\n\n• Interruptor Ground Lift (Desconexión de Masa):\nAl interconectar equipos conectados a distintas tomas eléctricas de red, se produce una diferencia de potencial que genera un Bucle de Tierra (Ground Loop), audible como un zumbido parásito continuo de 50 Hz o 60 Hz. El conmutador Ground Lift desconecta internamente la tierra del Pin 1 del conector XLR, quebrando el lazo de corriente y eliminando el zumbido de red en el acto.\n\n• Montura Antivibratoria (Shock Mount / 'Araña'):\nLos micrófonos de condensador son hipersensibles al 'Rumble' (vibraciones mecánicas de baja frecuencia transmitidas por el suelo mediante pasos o el retumbe de amplificadores). La araña suspende el chasis del micrófono en bandas elásticas desacopladas, absorbiendo la energía cinética y variando la frecuencia de resonancia para impedir que el golpe estructural excite la cápsula.\n\n• Filtro Antipop como Escudo Preventivo:\nAdemás de dispersar aerodinámicamente la energía de las consonantes oclusivas (P, B), el filtro antipop actúa como una barrera higiénica innegociable. Evita que las microgotas de saliva proyectadas por el intérprete alcancen la cápsula, protegiendo las láminas microscópicas de oro del condensador de la oxidación, corrosión y pérdida de polarización electrostática.",
      image: {
        placeholder: true,
        comment: "Esquema funcional de un Shock Mount elástico aislando el micrófono de vibraciones mecánicas y detalle del conmutador Ground Lift en una DI."
      },
      bulletPoints: [
        { label: "Bucle de Tierra (Ground Loop)", text: "Zumbido de 50/60 Hz suprimido al desconectar el Pin 1 con el botón Ground Lift." },
        { label: "Shock Mount (Araña)", text: "Suspensión elástica para frenar la transmisión de ruidos mecánicos subsónicos por el pie de micro." },
        { label: "Conservación del Diafragma", text: "El antipop detiene la humedad química que oxida y degrada las cápsulas de condensador." }
      ]
    }
  ],
  quiz: [
    {
      id: 1,
      question: "¿Dónde se ubica el punto de rechazo total (punto ciego o null point) en un patrón polar Figura de 8?",
      options: [
        "En la parte trasera a 180°",
        "En los laterales a 90° y 270°",
        "En el eje frontal a 0°",
        "No posee puntos de rechazo porque capta en 360°"
      ],
      correct: 1,
      explanation: "El patrón en Figura de 8 capta el frente (0°) y la parte posterior (180°), pero produce una cancelación prácticamente total en sus laterales exactos (90° y 270°)."
    },
    {
      id: 2,
      question: "¿Cuál es la jerarquía correcta de mayor a menor sensibilidad frente al Efecto de Proximidad?",
      options: [
        "1° Omnidireccional, 2° Cardioide, 3° Figura de 8",
        "1° Figura de 8, 2° Cardioide, 3° Omnidireccional (casi nulo)",
        "1° Cardioide, 2° Figura de 8, 3° Omnidireccional",
        "Todos los patrones reaccionan exactamente con el mismo incremento de graves"
      ],
      correct: 1,
      explanation: "El patrón Figura de 8 es el más sensible al aumento de graves al acercarse; le sigue el cardioide, mientras que el omnidireccional casi no exhibe efecto de proximidad."
    },
    {
      id: 3,
      question: "Al grabar a un cantautor tocando guitarra acústica y cantando al mismo tiempo, ¿cómo aísla la guitarra del micrófono de voz?",
      options: [
        "Usando un micrófono omnidireccional pegado a los labios",
        "Usando un micrófono en Figura de 8 con sus laterales (90°) apuntando hacia la boca de la guitarra",
        "Subiendo la ganancia del previo y aplicando un compresor agresivo",
        "Colocando un filtro antipop doble en la guitarra"
      ],
      correct: 1,
      explanation: "Al alinear el plano lateral sordo (90°) del patrón en Figura de 8 hacia la guitarra, la señal del instrumento queda cancelada en el canal de la voz."
    },
    {
      id: 4,
      question: "¿Por qué el patrón Omnidireccional es ideal para captar cuartetos de cuerdas o el ambiente de una sala?",
      options: [
        "Porque recorta automáticamente las frecuencias menores a 100 Hz",
        "Porque capta de manera uniforme en 360° sin puntos de rechazo y conserva una respuesta tímbrica natural",
        "Porque invierte la polaridad eléctrica de las ondas mecánicas",
        "Porque entrega el nivel de salida más alto de todos los transductores"
      ],
      correct: 1,
      explanation: "Al no tener directividad ni cancelaciones de fase acústica interna, el omnidireccional entrega un timbre sin coloración fuera de eje y capta todo el campo acústico."
    },
    {
      id: 5,
      question: "Para evitar acoples (feedback) en vivo con un monitor de piso frente a un cantante con micrófono cardioide:",
      options: [
        "El monitor debe apuntar a la parte trasera del micrófono (180°), que es su zona de máximo rechazo",
        "El monitor debe orientarse directamente a 0° en el eje del micrófono",
        "Se debe conectar el micrófono mediante un cable TS no balanceado",
        "Se debe activar el switch de Ground Lift en la interfaz"
      ],
      correct: 0,
      explanation: "El patrón cardioide ofrece su mínima sensibilidad a 180°; situar el monitor en ese ángulo evita que el sonido del altavoz reingrese a la cápsula."
    },
    {
      id: 6,
      question: "¿Cuál es la principal diferencia entre micrófonos dinámicos y de condensador respecto a sus patrones polares?",
      options: [
        "Los dinámicos siempre son multipatrón y los condensadores solo cardioides",
        "Los dinámicos suelen tener un patrón fijo (comúnmente cardioide), mientras que muchos condensadores de estudio son multipatrón seleccionables",
        "Los micrófonos dinámicos no poseen eje de captación frontal",
        "Los de condensador pierden la polaridad al encender el Phantom Power (+48V)"
      ],
      correct: 1,
      explanation: "Micrófonos como el SM7B tienen un diseño acústico fijo, mientras que micrófonos capacitivos como el AKG C414 combinan cápsulas dobles para alternar patrones."
    },
    {
      id: 7,
      question: "¿Qué tipo de Caja Directa (DI Box) es la más recomendada para un instrumento con pastillas pasivas (ej. bajo vintage)?",
      options: [
        "Caja Directa Pasiva con transformador simple",
        "Caja Directa Activa (con preamplificación interna que requiere +48V o batería)",
        "Un cable directo TS a XLR sin circuito",
        "Un pedal atenuador Pad de -20 dB"
      ],
      correct: 1,
      explanation: "Los instrumentos pasivos tienen alta impedancia de salida; una DI Activa ofrece una impedancia de entrada sumamente alta que evita la pérdida de nivel y brillo en agudos."
    },
    {
      id: 8,
      question: "¿Para qué instrumentos es especialmente adecuada una Caja Directa Pasiva?",
      options: [
        "Micrófonos de cinta delicados",
        "Instrumentos con salidas calientes o electrónica activa (teclados, sintetizadores, bajos activos)",
        "Guitarras electroacústicas con señal débil",
        "Monitores de estudio de campo cercano"
      ],
      correct: 1,
      explanation: "Al usar un transformador sin circuitos activos que saturen, las DI pasivas toleran señales intensas de instrumentos activos sin introducir distorsión armónica."
    },
    {
      id: 9,
      question: "¿Qué problema técnico resuelve el interruptor 'Ground Lift' en una Caja Directa?",
      options: [
        "Aumenta la ganancia del instrumento 20 dB",
        "Elimina zumbidos de 50/60 Hz desconectando la masa física (Pin 1) para romper un bucle de tierra (ground loop)",
        "Convierte la señal estéreo en dos señales mono idénticas",
        "Invierte la fase acústica de la sala"
      ],
      correct: 1,
      explanation: "Al desconectar la toma de tierra del cable balanceado, el interruptor interrumpe el lazo de corrientes parásitas causadas por diferencias de potencial eléctrico entre enchufes."
    },
    {
      id: 10,
      question: "¿Cuál es la función mecánica del soporte 'Shock Mount' (la araña de suspensión)?",
      options: [
        "Alinear la cápsula hacia el Punto de Morán",
        "Suspender el micrófono en bandas elásticas para absorber vibraciones del suelo (rumble) y evitar que se transmitan a la cápsula",
        "Sujetar el filtro antipop en ángulo de 45°",
        "Evitar que la humedad de la saliva ingrese al preamplificador"
      ],
      correct: 1,
      explanation: "La araña desacopla el micrófono mecánicamente del trípode, impidiendo que pisadas, tránsito o vibraciones de cajas amplificadoras lleguen como graves mecánicos indeseados."
    }
  ],
  flashcards: [
    {
      front: "¿Qué describe el diagrama de un Patrón Polar?",
      back: "La sensibilidad de captación de un micrófono en función de los grados de orientación espacial (0° a 360°) y el nivel de energía en decibeles (dB)."
    },
    {
      front: "Punto de rechazo del patrón Cardioide",
      back: "Máxima atenuación en la parte trasera a 180° (ideal para espaldas a monitores o fuentes ruidosas)."
    },
    {
      front: "Comportamiento del patrón Omnidireccional",
      back: "Capta en 360° sin puntos ciegos ni rechazo; conserva una respuesta uniforme y casi nulo efecto de proximidad."
    },
    {
      front: "Puntos de rechazo del patrón Figura de 8",
      back: "Rechazo total en sus ángulos laterales de 90° y 270°."
    },
    {
      front: "¿Por qué el patrón Figura de 8 aísla la guitarra en una toma de voz simultánea?",
      back: "Porque orientando los laterales a 90° hacia la caja del instrumento, el sonido de las cuerdas cae en el ángulo sordo absoluto."
    },
    {
      front: "Patrón con mayor incremento por Efecto de Proximidad",
      back: "Figura de 8 (se carga de frecuencias graves excesivas si la fuente se aproxima demasiado)."
    },
    {
      front: "Patrón con menor Efecto de Proximidad",
      back: "Omnidireccional (permite cantar muy cerca manteniendo un balance espectral natural)."
    },
    {
      front: "Principio del transductor Dinámico",
      back: "Una membrana mueve una bobina suspendida en un imán magnético generando corriente eléctrica (no requiere energía externa)."
    },
    {
      front: "Principio del transductor de Condensador",
      back: "Dos placas conductoras paralelas forman un capacitor cuya capacidad varía con la onda acústica; requiere Phantom Power (+48V)."
    },
    {
      front: "Principio del transductor de Cinta (Ribbon)",
      back: "Una delgada cinta de metal corrugado suspendida en un campo magnético que vibra con el aire; frágil ante picos de SPL y +48V."
    },
    {
      front: "¿Por qué los dinámicos suelen tener patrón polar fijo?",
      back: "Porque su direccionalidad depende de conductos acústicos mecánicos fijos labrados físicamente en su cápsula."
    },
    {
      front: "¿Cómo logran los condensadores ser Multipatrón?",
      back: "Combinan dos diafragmas contiguos y cambian el patrón variando la polarización de voltaje entre ambas placas mediante un selector."
    },
    {
      front: "Limitación del micrófono histórico de carbón",
      back: "Respuesta de frecuencia muy estrecha y siseo de fondo continuo por el roce de los gránulos de carbón."
    },
    {
      front: "¿Qué función cumple una Caja Directa (DI Box)?",
      back: "Adapta impedancias (de alta impedancia de instrumento a baja impedancia de micro) y desbalanceado (TS) a balanceado (XLR)."
    },
    {
      front: "Características de la Caja Directa Pasiva",
      back: "Funciona mediante un transformador sin alimentación externa; ideal para señales calientes como sintetizadores y bajos activos."
    },
    {
      front: "Características de la Caja Directa Activa",
      back: "Contiene un circuito preamplificador con alimentación (+48V o pila); ideal para instrumentos pasivos con baja salida o pastillas vintage."
    },
    {
      front: "¿Qué es un Bucle de Tierra (Ground Loop)?",
      back: "Un lazo de corriente generado por diferencias de voltaje en las tomas de tierra de equipos interconectados que causa zumbido de 50/60 Hz."
    },
    {
      front: "¿Qué hace el conmutador 'Ground Lift'?",
      back: "Desconecta la masa física (Pin 1 del XLR) para interrumpir el bucle de tierra y eliminar el zumbido eléctrico."
    },
    {
      front: "¿Qué ruido amortigua el Shock Mount (araña)?",
      back: "El 'Rumble': ruidos mecánicos de bajas frecuencias y vibraciones del suelo transmitidos por el pie de micrófono."
    },
    {
      front: "Doble función del filtro antipop",
      back: "1. Frena el impacto mecánico de ráfagas plosivas (P, B) y 2. Protege el diafragma de la humedad corrosiva de la saliva."
    }
  ]
};