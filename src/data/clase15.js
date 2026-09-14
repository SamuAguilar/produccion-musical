export const clase15 = {
  id: 15,
  title: "Microfonía para Pianos, Vientos, Cuerdas y Percusión",
  summary: "Técnicas estéreo (X/Y, A/B) en piano de cola, microfonía en cuerpo de saxofón, ensamble con fader humano, captación cenital de violín con alfombra y percusión latina.",
  sections: [
    {
      title: "Grabación de Piano Acústico y Complejidad Resonante",
      content: "El piano de cola es uno de los instrumentos más desafiantes en el estudio debido a sus dimensiones físicas y a que toda su arquitectura mecánica (el arpa metálica, las cuerdas tensadas y la caja armónica de madera) resuena simultáneamente. La decisión de cómo capturarlo depende directamente del rol que cumpla dentro del arreglo musical:\n\nA. Técnicas Estéreo (Cuando el Piano es Protagonista):\nSi el instrumento lidera la composición, la captura estéreo es mandatoria para abrir el panorama y brindar espacialidad. Es indispensable emplear un par emparejado (matched pair), es decir, dos micrófonos del mismo modelo, marca y respuesta en frecuencia.\n• Par Coincidente (Técnica X/Y): Se cruzan las cápsulas de dos micrófonos direccionales (cardioides) formando un ángulo de 90 grados, situando una cápsula justo encima de la otra. Al estar en el mismo punto físico en el espacio, el sonido arriba a ambas membranas al mismo tiempo, garantizando una imagen estéreo sólida, natural y con inmunidad ante cancelaciones de fase. Si se amplía el ángulo de apertura más allá de los 90 grados, se logra una imagen estéreo más ancha a costa de perder solidez en el centro.\n• Arreglo Espaciado (Técnica A/B): Se separan dos micrófonos a una distancia fija (por ejemplo, 50 cm). Se puede orientar un micrófono hacia el registro grave y el otro hacia el agudo, o bien apuntar uno a los martillos y otro a la resonancia de las cuerdas en la cola. Regla crítica de fase: ambos micrófonos deben estar situados a la misma distancia exacta del arpa vibrante, respetando la Regla del 3 a 1 para evitar filtrado de peine (comb filtering).\n\nB. Técnicas Monoaurales (Un Solo Micrófono Cercano):\nSe utilizan cuando el piano cumple un rol secundario de acompañamiento rítmico. El arpa posee distintas zonas tonales: apuntar al centro genera un timbre nasal; apuntar hacia el teclado registra el 'ataque' del martillo de fieltro contra la cuerda; y apuntar hacia la cola captura la resonancia profunda y el decaimiento de las cuerdas.\n• Condensador de Diafragma Pequeño: Ideal para capturar el ataque veloz de los martillos y el brillo cristalino con gran definición.\n• Condensador de Diafragma Grande (ej. Neumann U87): Entrega una imagen más redonda, equilibrada y con graves profundos.\n• Shure SM57 (Dinámico): Sorprende por su realce en agudos, aportando un sonido picante y mordiente para que el piano perfore mezclas densas de rock. Recordar siempre que acercar cualquier micrófono direccional al arpa aumentará los graves por Efecto de Proximidad.\n\nC. Control de Sangrado Acústico (Bleeding):\nLa enorme caja abierta del piano actúa como un receptor acústico que absorbe el sonido de baterías o amplificadores en la misma sala. En estos casos se debe bajar la tapa del piano o cerrarla, o bien recurrir a micrófonos PZM (Pressure Zone Microphone / Micrófonos de Zona de Presión), que son cápsulas planas diseñadas para adherirse directamente a la madera interna del arpa eliminando reflexiones de fase.",
      image: {
        placeholder: true,
        comment: "Esquema del interior del piano de cola mostrando el arreglo X/Y a 90° sobre los martillos y la técnica espaciada A/B orientada a graves y agudos."
      },
      bulletPoints: [
        { label: "Par Coincidente X/Y", text: "Cápsulas a 90° una sobre otra; elimina problemas de fase y mantiene un centro sólido." },
        { label: "Arreglo Espaciado A/B", text: "Separación física orientada a graves y agudos respetando la misma distancia al arpa." },
        { label: "Zonas del Arpa", text: "Martillos para ataque, cola para resonancia y centro para medios definidos." },
        { label: "Micrófonos PZM y Tapa Cerrada", text: "Estrategia para evitar filtraciones de batería en tomas conjuntas en la sala." }
      ]
    },
    {
      title: "Instrumentos de Viento (Metales y Maderas): Presión Sonora y Ensamble",
      content: "Trompetas, trombones y saxofones generan una altísima presión sonora (SPL, Sound Pressure Level), lo que condiciona la ubicación física y la respuesta del transductor:\n\nA. Acústica en Sala y Retorno Natural:\nLos vientos deben agruparse alejados de la percusión. Dado su elevado volumen físico, el propio instrumentista suele tener dificultades para escucharse con auriculares cerrados. Una técnica efectiva consiste en colocar al músico a corta distancia frente a una pared reflectante de la sala para que el rebote de su propio instrumento le sirva como retorno acústico natural.\n\nB. Microfonía de Saxofón (El Error de la Campana):\n• El Error Clásico: Jamás apuntes el micrófono directamente dentro de la campana (la boca de salida). El sonido que emana de allí es estridente, nasal y artificial.\n• El Sonido Completo: El saxofón no proyecta su cuerpo solo por la campana; el tono se genera a través de los orificios y llaves a lo largo de todo el cuerpo de metal.\n• Posicionamiento Profesional: Se coloca el micrófono a un costado, a una distancia de 40 a 50 cm, orientado hacia el centro del cuerpo del instrumento. Acercarse en exceso registrará el ruido mecánico indeseado del golpeteo de las llaves (clic-clac).\n• Combinación Avanzada: Colocar un condensador pequeño cerca de la campana para registrar el brillo del ataque, y un micrófono de cinta (Ribbon) al costado apuntando al cuerpo. El micrófono de cinta es la herramienta por excelencia para metales: su respuesta suave doma las frecuencias agudas hirientes y entrega un cuerpo aterciopelado.\n\nC. Grabación de Secciones de Vientos (El Fader Humano):\nCuando no disponemos de suficientes micrófonos o canales para aislar cada instrumento, agrupamos a la sección en un semicírculo alrededor de un único micrófono de diafragma grande configurado en patrón Omnidireccional o Figura de 8. La mezcla se resuelve físicamente mediante el 'Fader Humano': si el trombón tapa a la trompeta, el trombonista da un paso atrás y el trompetista un paso adelante. En estéreo, se utiliza un par espaciado A/B agrupando instrumentos por tesitura (por ejemplo, saxos a la izquierda y trompetas a la derecha), abriendo la imagen en los laterales y dejando libre el centro para la voz principal.",
      image: {
        placeholder: true,
        comment: "Microfonía en saxofón: Cápsula lateral a 40 cm apuntando al centro del cuerpo, y esquema de sección de vientos en semicírculo con fader humano."
      },
      bulletPoints: [
        { label: "Peligro en la Campana", text: "Apuntar a la boca del saxofón produce un timbre estridente y nasal." },
        { label: "Captura al Cuerpo (40-50 cm)", text: "Registra la resonancia de las llaves y evita ruidos mecánicos de dedos." },
        { label: "Micrófonos de Cinta en Vientos", text: "Suavizan los armónicos metálicos punzantes aportando calidez orgánica." },
        { label: "El Fader Humano", text: "Equilibrio dinámico de ensamble mediante pasos de distancia en la sala." }
      ]
    },
    {
      title: "Instrumentos de Cuerda Frotada: Violín, Viola y Violonchelo",
      content: "A diferencia del contrabajo (donde gran parte del grave emana de las aberturas en F), en instrumentos más pequeños como el violín la mayor riqueza tímbrica proviene de la vibración de toda la tapa armónica superior de madera:\n\n• Posicionamiento Superior Cenital: El micrófono debe montarse por encima del instrumento, orientado en ángulo hacia la tapa superior de madera.\n• Factor de Movimiento del Intérprete: Los violinistas se mueven constantemente por expresión corporal. El micrófono debe situarse a una distancia prudente con pies de micrófono largos y firmes para evitar que el arco golpee accidentalmente la cápsula.\n• Selección de Micrófonos:\n  - Condensador de Diafragma Pequeño: Ideal para registrar la fricción y el raspado de la cerda del arco contra la cuerda, indispensable en pasajes rápidos de staccato.\n  - Micrófono de Cinta (Ribbon): El violín tiende a sonar hiriente en altas frecuencias; la cinta actúa como un filtro natural que redondea los agudos y entrega calidez sedosa.\n• Acondicionamiento Acústico (El Truco de la Alfombra): Dado que el micrófono apunta desde arriba hacia abajo (hacia el instrumento y el suelo), el primer rebote acústico provendrá del piso. Si la sala tiene piso cerámico o madera reflectante, es obligatorio colocar una alfombra gruesa debajo del músico para absorber reflexiones tempranas que provocarían cancelaciones.",
      image: {
        placeholder: true,
        comment: "Violinista con micrófono superior cenital apuntando a la tapa armónica y alfombra en el suelo para absorber rebotes directos."
      },
      bulletPoints: [
        { label: "Captura a la Tapa Armónica", text: "Orientar la cápsula hacia la madera superior donde vibra el cuerpo del instrumento." },
        { label: "Distancia de Seguridad del Arco", text: "Ubicar el soporte fuera del rango de movimiento físico del músico." },
        { label: "Cinta contra Asperezas", text: "Doma las frecuencias altas estridentes típicas de las cuerdas agudas." },
        { label: "Truco de la Alfombra", text: "Frena rebotes del suelo que ingresarían al micrófono cenital fuera de fase." }
      ]
    },
    {
      title: "Percusión Latina: Congas y Bongós",
      content: "La percusión latina se caracteriza por ataques de transitorios sumamente rápidos generados por el impacto directo de las palmas y dedos sobre el cuero tensado:\n\n• Posicionamiento Central: Se puede utilizar un único micrófono situado entre ambos tambores (macho y hembra) para captar el ensamble rítmico.\n• Selección de Cápsulas:\n  - Par de Condensadores de Diafragma Pequeño en Estéreo: La opción de máxima fidelidad para captar el chasquido del slap y la articulación de los golpes rápidos.\n  - Shure SM57 (Dinámico): La opción todoterreno; brinda presencia de rango medio y resistencia si el percusionista golpea con alta energía.\n  - Condensador de Diafragma Grande: Aporta profundidad y peso a las frecuencias graves de la caja de madera.",
      image: {
        placeholder: true,
        comment: "Set de congas con un micrófono dinámico central enfocado al ataque del cuero y opción de par estéreo cenital."
      },
      bulletPoints: [
        { label: "Transitorios Rápidos de Cuero", text: "Demandan transductores ágiles para no desdibujar la articulación del golpe." },
        { label: "Par Lápiz Estéreo", text: "Máxima resolución espacial y ataque para pasajes percusivos protagonistas." },
        { label: "SM57 en Percusión", text: "Robustez mecánica y pegada en frecuencias medias para mezclas densas." }
      ]
    },
    {
      title: "Criterios de Producción: Micrófonos Esenciales, Fase y Drum Replacement",
      content: "Para consolidar una cadena de grabación versátil y profesional, debemos dominar decisiones de equipamiento y postproducción:\n\n• La Tríada Esencial para Empezar un Estudio:\n1. Shure SM57: Dinámico indestructible y versátil, estándar en guitarras, tambores y vientos.\n2. Par Emparejado (Matched Pair) de Condensadores Pequeños (ej. Rode NT5 o M1): Indispensables para tomas estéreo X/Y o A/B en pianos, guitarras acústicas y percusiones.\n3. Aston Element: Micrófono híbrido con diafragma dinámico activo que combina sensibilidad de condensador con el timbre aterciopelado de una cinta.\n\n• Corrección Física de Fase en Piano Multipista:\nAl usar más de un micrófono dentro del arpa del piano, se debe respetar la Regla del 3 a 1. Si en la prueba de monitoreo se detecta un sonido hueco o pérdida de graves (cancelación de fase), el procedimiento correcto consiste en escuchar en mono y desplazar físicamente uno de los micrófonos unos pocos centímetros hasta que la onda vuelva a sumar cuerpo y plenitud.\n\n• Drum Replacement (Sustitución por Muestras):\nConsiste en emplear software basado en triggers para detectar los impactos débiles o defectuosos de una batería acústica y sustituirlos o reforzarlos automáticamente con samples (muestras) de alta fidelidad, corrigiendo dinámicas irregulares del ejecutante.",
      bulletPoints: [
        { label: "Equipamiento Clave", text: "SM57, par matched de condensadores lápiz e híbridos versátiles." },
        { label: "Ajuste Físico de Fase", text: "Mover el micrófono centímetros en la sala antes de aplicar plugins correctivos." },
        { label: "Drum Replacement", text: "Refuerzo mediante software de muestras para subsanar golpes defectuosos." }
      ]
    }
  ],
  quiz: [
    {
      id: 1,
      question: "¿Cuál es la principal ventaja de utilizar la técnica coincidente X/Y al microfonear un piano de cola?",
      options: [
        "Aumenta la ganancia del preamplificador 6 dB automáticamente",
        "Ofrece una imagen estéreo sólida y coherente prácticamente libre de problemas graves de fase",
        "Convierte la señal en balanceada mediante un transformador pasivo",
        "Aísla por completo el sangrado de una batería que toque al lado"
      ],
      correct: 1,
      explanation: "Al ubicar las cápsulas una encima de la otra en un ángulo de 90°, el sonido llega casi de forma simultánea a ambos diafragmas, eliminando diferencias de tiempo y cancelaciones de fase."
    },
    {
      id: 2,
      question: "Al microfonear un piano con la técnica espaciada A/B, ¿qué regla física es obligatoria para garantizar coherencia acústica?",
      options: [
        "Ambos micrófonos deben estar a la misma distancia exacta del arpa vibrante y respetar la Regla del 3 a 1",
        "Uno de los micrófonos debe ser de cinta y el otro dinámico de bobina móvil",
        "Se debe aplicar una compresión multibanda antes de los conversores A/D",
        "Las cápsulas deben mirar en ángulo opuesto hacia el techo de la sala"
      ],
      correct: 0,
      explanation: "Igualar la distancia física respecto al plano del arpa y mantener una separación triple entre micros evita desfases de peine destructivos al sumar la señal estéreo."
    },
    {
      id: 3,
      question: "¿Por qué el Shure SM57 puede funcionar de manera destacada en un piano dentro de una mezcla densa de rock?",
      options: [
        "Porque reproduce subgraves por debajo de 30 Hz",
        "Por su realce natural en frecuencias agudas, que aporta un sonido brillante y definido que permite al piano cortar la mezcla",
        "Porque tiene un patrón omnidireccional que capta toda la sala",
        "Porque elimina la necesidad de cerrar la tapa del piano"
      ],
      correct: 1,
      explanation: "Su curva con presencia en medios-agudos resalta el chasquido y ataque del instrumento, evitando que quede sepultado por capas de guitarras distorsionadas."
    },
    {
      id: 4,
      question: "Si se graba un piano de cola en una sala junto a una batería y amplificadores, ¿cómo se mitiga el excesivo sangrado?",
      options: [
        "Invertir la polaridad de los overheads de la batería",
        "Bajar o cerrar la tapa del piano colocando micrófonos dentro o usar micrófonos planos de zona de presión (PZM)",
        "Subir los faders del DAW en +12 dB",
        "Reemplazar las cuerdas del piano por cuerdas de nylon"
      ],
      correct: 1,
      explanation: "La caja del piano actúa como resonador acústico; cerrar la tapa y usar micros internos o sensores de superficie PZM aísla la fuente de filtraciones externas."
    },
    {
      id: 5,
      question: "Al microfonear un saxofón, ¿por qué es un error grave apuntar el micrófono de cerca dentro de la campana?",
      options: [
        "Porque se produce una señal monofónica invertida",
        "Porque el sonido resulta nasal, estridente y artificial, omitiendo el cuerpo real que emana de las llaves y orificios del tubo",
        "Porque rompe la membrana de cualquier micrófono dinámico",
        "Porque los micrófonos de cinta exigen captación en 360°"
      ],
      correct: 1,
      explanation: "El instrumento emite sonido a lo largo de toda su columna de aire; apuntar solo a la salida entrega un timbre chillón y prescinde de la resonancia del cuerpo."
    },
    {
      id: 6,
      question: "¿Cuál es la colocación recomendada para registrar el sonido pleno y natural de un saxofón?",
      options: [
        "A 2 metros de altura apuntando al techo",
        "A un costado, a unos 40 o 50 cm de distancia, apuntando hacia el centro del cuerpo del instrumento",
        "Pegado a 2 cm de la boquilla del saxofonista",
        "Dentro del pabellón con un clip de contacto rígido"
      ],
      correct: 1,
      explanation: "Ubicarse a 40-50 cm hacia el cuerpo equilibra el aire de la columna, suaviza la estridencia de la campana y evita captar el ruido mecánico excesivo de las llaves."
    },
    {
      id: 7,
      question: "En la grabación de un ensamble de vientos a un solo micrófono, ¿en qué consiste el 'Fader Humano'?",
      options: [
        "En comprimir dinámicamente el bus máster con un plugin de emulación analógica",
        "En balancear los volúmenes moviendo físicamente a los músicos (ej. el que suena fuerte da un paso atrás y el débil da un paso adelante)",
        "En automatizar el volumen del previo con una pedalera MIDI",
        "En pedirle al trompetista que toque con sordina metálica"
      ],
      correct: 1,
      explanation: "Al registrar en una pista mono o par simple, la mezcla se efectúa en la sala mediante la distancia física de cada instrumentista respecto a la cápsula."
    },
    {
      id: 8,
      question: "Al colocar el micrófono por encima de un violín apuntando a la tapa superior, ¿por qué es indispensable colocar una alfombra en el piso?",
      options: [
        "Para calentar las cuerdas del instrumento por rozamiento",
        "Para absorber las reflexiones inmediatas del suelo que el micrófono captaría directamente al estar orientado hacia abajo",
        "Para evitar que el pie de micrófono transmita ruidos subsónicos del metrónomo",
        "Para anular la inductancia eléctrica de las pastillas"
      ],
      correct: 1,
      explanation: "El eje del micrófono mira a la tapa del violín y continúa en línea recta hacia el piso; la alfombra atenúa el primer rebote acústico indeseado de una sala no tratada."
    },
    {
      id: 9,
      question: "¿Por qué el micrófono de cinta (Ribbon) suele ser una excelente elección para instrumentos de arco como el violín?",
      options: [
        "Porque acentúa los armónicos por encima de 15 kHz",
        "Porque su respuesta suave y natural recorta asperezas y contrarresta la estridencia aguda típica del frotamiento del arco",
        "Porque soporta mayores niveles de presión sonora que un micrófono dinámico",
        "Porque no capta el ambiente de la habitación"
      ],
      correct: 1,
      explanation: "La calidez y respuesta transitoria sedosa de la cinta atenúa el raspado metálico punzante, otorgando un tono aterciopelado y equilibrado."
    },
    {
      id: 10,
      question: "Para capturar de forma óptima el ataque seco y los transitorios rápidos de bongós o congas, ¿qué microfonía se recomienda prioritariamente?",
      options: [
        "Un micrófono subkick invertido en el suelo",
        "Un par de micrófonos de condensador de diafragma pequeño por su veloz respuesta a transitorios de mano y parche",
        "Un micrófono de carbón pasivo a 3 metros",
        "Micrófonos de cinta apuntando hacia el suelo"
      ],
      correct: 1,
      explanation: "Los diafragmas pequeños tienen una masa ultraligera que responde de inmediato al impacto y chasquido (slap) de las manos sobre el cuero."
    }
  ],
  flashcards: [
    {
      front: "Ventaja de la técnica estéreo X/Y en piano",
      back: "Cápsulas coincidentes a 90° que proporcionan una imagen estéreo estable y libre de cancelaciones de fase complejas."
    },
    {
      front: "Efecto de abrir el ángulo más allá de 90° en técnica X/Y",
      back: "Ensancha la imagen estéreo a los laterales pero resta solidez y definición en el centro de la mezcla."
    },
    {
      front: "Condición de coherencia en técnica A/B para piano",
      back: "Distancia idéntica de ambos micrófonos respecto al arpa vibrante y respeto riguroso de la regla 3 a 1."
    },
    {
      front: "Diferencia de enfoque mono en piano: teclado vs cola",
      back: "Apuntar hacia el teclado enfatiza el impacto del martillo (ataque); apuntar hacia la cola resalta la resonancia profunda de cuerdas."
    },
    {
      front: "Cualidad del condensador de diafragma grande en piano",
      back: "Captura una imagen amplia, equilibrada, con graves profundos y respuesta tonal cálida de toda el arpa (ej. U87)."
    },
    {
      front: "Uso del Shure SM57 en pianos de rock",
      back: "Su curva con realce en frecuencias altas entrega un tono brillante y agresivo ideal para destacar en mezclas saturadas."
    },
    {
      front: "Solución contra sangrado en pianos de cola",
      back: "Cerrar o bajar la tapa colocando micrófonos en su interior o emplear micrófonos planos de zona de presión (PZM)."
    },
    {
      front: "Error crítico al microfonear un saxofón",
      back: "Introducir el micrófono en la campana, generando un sonido nasal, estridente y perdiendo el tono que emana de las llaves."
    },
    {
      front: "Posicionamiento óptimo para saxofón",
      back: "A 40-50 cm de distancia orientado al centro del cuerpo, logrando un balance entre aire, columna resonante y llaves."
    },
    {
      front: "¿Por qué evitar acercar excesivamente el micro a las llaves de viento?",
      back: "Porque captura el chasquido y ruido mecánico molesto de apertura y cierre de las zapatillas metálicas."
    },
    {
      front: "Técnica combinada para metales (campana y cuerpo)",
      back: "Un condensador pequeño en la campana para transitorio de ataque y un micrófono de cinta al costado para cuerpo cálido."
    },
    {
      front: "Concepto de 'Fader Humano' en ensambles de vientos",
      back: "Ajustar el balance de volumen pidiendo a los músicos acercarse o alejarse físicamente del micrófono según su intensidad."
    },
    {
      front: "Dispersión acústica en cuerdas agudas (violín)",
      back: "El sonido se proyecta fundamentalmente desde la vibración de la tapa superior de madera y no desde los agujeros en 'F'."
    },
    {
      front: "Precaución física al microfonear violinistas",
      back: "Mantener una distancia prudente para que el movimiento constante del intérprete no golpee la cápsula con el arco."
    },
    {
      front: "El 'truco de la alfombra' al grabar violines",
      back: "Colocar una alfombra bajo el ejecutante para frenar el rebote directo del piso hacia el micrófono orientado desde arriba."
    },
    {
      front: "¿Por qué usar micrófono de cinta en violín?",
      back: "Suaviza la aspereza del roce del arco y compensa la estridencia aguda, brindando un color orgánico y dulce."
    },
    {
      front: "Micrófono de condensador pequeño en percusión latina",
      back: "Masa reducida en diafragma que registra con precisión quirúrgica el impacto y chasquido de dedos sobre el cuero."
    },
    {
      front: "Efecto de proximidad en pianos con micrófonos direccionales",
      back: "Acercar el micrófono cardioide al plano de cuerdas infla artificialmente las frecuencias graves por gradiente de presión."
    },
    {
      front: "Trío de micrófonos recomendado para arrancar un estudio",
      back: "Un Shure SM57 (dinámico versátil), un par calibrado de condensadores pequeños (estéreo/acústicas) y un Aston Element (híbrido)."
    },
    {
      front: "Retorno natural para músicos de viento en estudio",
      back: "Ubicar al ejecutante cerca de una pared reflectante para que el rebote de su propio instrumento le sirva de referencia sin taponar auriculares."
    }
  ]
};