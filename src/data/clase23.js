export const clase23 = {
  id: 23,
  title: "Fundamentos y Familias de la Compresión",
  summary: "Rango dinámico y transientes, las 4 familias de hardware (VCA, Óptico, Vari-Mu, FET), los 5 parámetros clave del compresor y técnica de compresión paralela.",
  sections: [
    {
      title: "El Balance Dinámico y el Control del Rango Dinámico",
      content: "Dentro de los cinco pilares esenciales de la mezcla (Ecualización, Compresión, Reverberación, Paneo y Volumen), la compresión es la disciplina encargada de esculpir y gobernar el Balance Dinámico de la obra.\n\n• ¿Qué es el Rango Dinámico?:\nEs la diferencia física en decibeles (dB) existente entre el momento de menor energía (como un susurro íntimo de voz o el roce de una escobilla) y el momento de máxima amplitud acústica (como un grito desgarrado o el golpe frontal de un redoblante) dentro de una misma pista de audio.\n\n• La Función del Compresor como Fader Automático:\nSi una pista conserva un rango dinámico excesivamente amplio y descontrolado, resulta matemáticamente imposible ubicarla en una mezcla moderna: si ajustas el fader de volumen para que el susurro resulte audible, el grito saturará de inmediato el canal y romperá la mezcla; si calibras el fader para contener el grito, el susurro desaparecerá por debajo de la base instrumental. El compresor resuelve este conflicto operando como un atenuador de ganancia ultrarrápido y automático: detecta los picos más intensos, reduce su volumen de forma calculada y permite elevar la energía general de la señal, asegurando que los pasajes sutiles se escuchen con nitidez y presencia sin que los momentos explosivos saturen el bus máster.",
      image: {
        placeholder: true,
        comment: "Gráfica de forma de onda mostrando el rango dinámico antes y después de comprimir: reducción de los picos superiores y elevación de las partes débiles."
      },
      bulletPoints: [
        { label: "Rango Dinámico", text: "La brecha en decibeles entre el suelo más suave y el pico transitorio más potente de una pista." },
        { label: "Función de Fader Automático", text: "Contiene los picos de volumen para estabilizar la energía y facilitar la inserción en la mezcla." },
        { label: "Consistencia Auditiva", text: "Garantiza inteligibilidad en pasajes suaves sin provocar fatiga auditiva ni clipeo en secciones intensas." }
      ]
    },
    {
      title: "Transitorios (Transientes), Pegada y Musicalidad",
      content: "La compresión representa uno de los procesos técnicos más complejos de asimilar para el oído humano porque no se apoya en curvas visuales obvias como la ecualización; su impacto interactúa directamente con la intención expresiva y el clima de la interpretación artística.\n\n• Los Transitorios (o Transientes):\nSon las ráfagas o estallidos iniciales de energía acústica que ocurren en fracciones microscópicas de milisegundo al comenzar un sonido (por ejemplo, el chasquido percusivo del impacto del palo de madera contra el parche plástico del redoblante, justo antes de que el aire excite la cavidad del tambor y comience a resonar el cuerpo de madera).\n\n• La Preservación de la Musicalidad:\nEl cerebro humano utiliza los transitorios para decodificar la ubicación espacial, la agresividad, la definición y el sentido del ritmo (groove). El compresor actúa principalmente sobre estas crestas de ataque. Si configuras un tiempo de compresión excesivamente rápido, mutilarás el transitorio de raíz, destruyendo la pegada (punch) y la vida de la ejecución. En una orquesta clásica o en una batería orgánica, una compresión despiadada aniquilaría los matices de las notas fantasma y la respiración del arreglo.",
      image: {
        placeholder: true,
        comment: "Desglose temporal de un golpe de tambor identificando el transitorio inicial de impacto (milisegundos 0 a 10) frente a la resonancia del cuerpo y el decaimiento (decay)."
      },
      bulletPoints: [
        { label: "Naturaleza del Transitorio", text: "Pico de ataque inicial de muy alta velocidad que aporta definición y chasquido percusivo." },
        { label: "Riesgo de Sobrecompresión", text: "Tiempos de reacción mal calibrados aplastan la dinámica y extinguen la expresividad humana." },
        { label: "Protección del Groove", text: "Ajustar la envolvente para respetar notas fantasma y conservar la pegada frontal de los tambores." }
      ]
    },
    {
      title: "Las Cuatro Familias Tecnológicas de la Compresión",
      content: "En el audio profesional existen distintas topologías de circuitería analógica (y sus correspondientes emulaciones digitales por software), cada una con una impronta sonora, velocidad de respuesta y coloración armónica particulares:\n\nA. Compresores VCA (Voltage Controlled Amplifier / Amplificador Controlado por Voltaje):\n• Características: Utilizan un circuito integrado que responde de manera instantánea y lineal a los cambios de voltaje de la señal.\n• Conducta Sonora: Son extremadamente rápidos, precisos, limpios y confiables ante ataques abruptos.\n• Aplicación: Son la herramienta de elección para controlar transitorios rápidos, percusiones complejas, cajas de ritmos electrónicas, baterías acústicas y secuencias rítmicas.\n• Modelo Histórico de Referencia: dbx 160A (o el compresor de bus de las consolas Solid State Logic SSL G-Master Bus Compressor).\n\nB. Compresores Ópticos (Opto Compressors):\n• Características: Emplean una celda fotosensible acoplada a una pequeña bombilla lumínica interna (panel electroluminiscente). Cuanto mayor es el voltaje de la señal entrante, más brilla la bombilla, lo que activa la resistencia óptica que atenúa la señal. Dado que el filamento lumínico tarda milisegundos físicos en encenderse y enfriarse, sus tiempos de ataque y relajación son naturalmente pausados.\n• Conducta Sonora: Son sumamente musicales, suaves, orgánicos y aterciopelados. Resultan ineficaces para domar transitorios agresivos (como el golpe seco de un bombo), pero son el estándar indiscutido para 'arropamiento' armónico de voces líricas o pop, colchones de sintetizador (pads) e instrumentos acústicos lentos.\n• Modelo Histórico de Referencia: Teletronix LA-2A (o su clásica emulación CLA-2A).\n\nC. Compresores Vari-Mu (Variable Mu / Ganancia Variable por Válvulas):\n• Características: En la ingeniería electrónica clásica, la letra griega 'Mu' ($\mu$) designa el factor de amplificación o ganancia de una válvula de vacío. En estos compresores de válvulas, la propia intensidad del voltaje de entrada altera de forma continua el punto de trabajo del tubo termoiónico, incrementando la reducción de ganancia de forma proporcional y no lineal.\n• Conducta Sonora: No destacan por velocidades microscópicas, sino por su capacidad de actuar como el 'pegamento' acústico definitivo (Glue). Cohesionan múltiples pistas independientes en un único bloque musical coherente.\n• Aplicación: Se utilizan casi con exclusividad en Buses de subgrupo (como el Master Drum Bus o Mix Bus) y en la cadena de procesamiento de Mastering.\n• Modelos Históricos de Referencia: Manley Variable Mu y el icónico Fairchild 670.\n\nD. Compresores FET (Field Effect Transistor / Transistor de Efecto de Campo):\n• Características: Emplean transistores especiales FET para emular el comportamiento de una válvula pero con velocidades de conmutación de estado sólido ultramicroscópicas.\n• Conducta Sonora: Son sinónimo de agresividad, garra y velocidad fulminante. Su ataque es tan veloz (medido en microsegundos) que puede devorar los transitorios al instante si se desea. Además, sus transformadores de entrada y salida (como los famosos transformadores UTC) introducen una densa saturación por distorsión armónica analógica muy musical. Con solo insertar el plugin en la pista, incluso con la aguja de compresión en cero, la señal adquiere cuerpo, mordida y carácter.\n• Aplicación: Voces líderes de rock, bajos con actitud, guitarras agresivas y baterías paralelas explosivas.\n• Modelo Histórico de Referencia: Universal Audio 1176 (Urei 1176 Limiting Amplifier).\n\n(Familia Complementaria - Compresores Digitales Puros):\nDiseñados matemáticamente en software (como FabFilter Pro-C 2). Son transparentes, cristalinos, carecen de distorsión armónica analógica y ofrecen control milimétrico sobre cada parámetro; ideales para corrección quirúrgica invisible.",
      image: {
        placeholder: true,
        comment: "Esquema comparativo de las 4 familias analógicas: VCA (rápido/preciso), Óptico (luz/musical suave), Vari-Mu (válvula/pegamento) y FET (transistor/agresivo armónico)."
      },
      bulletPoints: [
        { label: "VCA (dbx 160A)", text: "Velocidad y control quirúrgico ante transitorios agresivos de percusión y bases rítmicas." },
        { label: "Ópticos (LA-2A)", text: "Atenuación lumínica suave y relajada, perfecta para empastar voces y fuentes melódicas." },
        { label: "Vari-Mu (Fairchild 670)", text: "Compresión dependiente del nivel valvular; actúa como el pegamento (glue) ideal en buses y master." },
        { label: "FET (1176)", text: "Reacción en microsegundos y rica distorsión armónica para inyectar actitud y peso en rock." }
      ]
    },
    {
      title: "Los Cinco Parámetros Operativos Fundamentales",
      content: "Salvo modelos vintage de controles reducidos (como el LA-2A, gobernado únicamente por ganancia y reducción), la mayoría de los compresores de estudio articulan su respuesta a través de cinco parámetros esenciales interactuantes:\n\n1. Threshold (Umbral):\nEs la línea divisoria o puerta de entrada dinámica medida en decibeles negativos (-dBFS). Le indica al circuito a partir de qué volumen exacto debe activarse. Mientras la señal viaje por debajo del umbral, el compresor no interviene en absoluto; en cuanto el audio sobrepasa ese valor, se dispara la atenuación de ganancia.\n\n2. Ratio (Relación de Compresión):\nDetermina la proporción matemática con la que se comprimirá la señal que haya superado el umbral:\n• 1:1 = Señal sin compresión; el nivel de salida es idéntico al de entrada.\n• 2:1 = Compresión suave; por cada 2 dB que crucen el umbral, el compresor solo permite la salida de 1 dB.\n• 4:1 = Compresión moderada; el estándar recomendado como punto de partida en mezclas de música moderna.\n• 8:1 a 20:1 = Compresión agresiva y densa.\n• $\\infty:1$ (Infinito a Uno) = Modo Limitador (Brickwall / Limiter); ningún transitorio puede cruzar el umbral bajo ningún concepto, aplanando la forma de onda de manera inflexible.\n\n3. Attack (Ataque):\nEs el tiempo —calibrado en milisegundos (ms) o microsegundos ($\mu\\text{s}$)— que demora el compresor en aplicar la totalidad de la atenuación fijada por el ratio una vez cruzado el umbral. Un ataque muy rápido (ej. 0.5 a 1 ms) aplasta el transitorio de golpe; un ataque más lento (ej. 30 a 50 ms) deja pasar el chasquido y la pegada inicial intactos, atenuando únicamente la resonancia posterior del cuerpo.\n\n4. Release (Relajación o Liberación):\nEs el lapso temporal (en milisegundos) que tarda el circuito en soltar la atenuación y restaurar la ganancia original a cero una vez que la señal cae por debajo del umbral. Es el parámetro más sensible y musical de calibrar: si el release es excesivamente rápido, se genera un efecto de bombeo o 'pumping' artificial desagradable; si es demasiado lento, el compresor nunca se recupera a tiempo para el siguiente golpe, dejando la señal sofocada y muerta. Los procesadores actuales ofrecen modos de Release Automático (Auto) que leen la rítmica del programa musical.\n\n5. Make-up Gain (Ganancia de Compensación):\nAl reducir los picos altos de una onda acústica (lo que equivale a bajar el techo de la pista), el nivel sonoro resultante disminuye en volumen percibido. El potenciómetro de Make-up Gain se encarga de reponer esa pérdida elevando el piso completo de la señal. Esto logra que la pista gane densidad, presencia y pegada masiva, manteniéndose en el mismo nivel de medidor pero con una energía percibida significativamente mayor.\n\n(Parámetro Adicional - El Knee o Rodilla):\nDefine la forma geométrica de la transición al cruzar el umbral: el 'Hard Knee' aplica el ratio completo de forma angular y abrupta al cruzar la línea; el 'Soft Knee' suaviza progresivamente la curva de entrada haciendo que el inicio de la compresión sea imperceptible para el oído.",
      image: {
        placeholder: true,
        comment: "Diagrama de controles de compresión: Umbral (Threshold) y pendientes de Ratio (2:1, 4:1, Infinito:1), envolvente de Attack y Release en milisegundos, y Knee suave vs duro."
      },
      bulletPoints: [
        { label: "Threshold", text: "Punto de corte en decibeles a partir del cual el circuito comienza a atenuar." },
        { label: "Ratio", text: "Factor matemático de reducción aplicado sobre la energía que excede el umbral." },
        { label: "Attack", text: "Regula cuánta pegada inicial del transitorio atraviesa el procesador antes de la compresión." },
        { label: "Release", text: "Tiempo de descompresión que debe respirar armónicamente con el compás de la canción." },
        { label: "Make-up Gain", text: "Compensación de salida que eleva las partes sutiles para maximizar la densidad sonora." },
        { label: "Hard vs. Soft Knee", text: "Transición angular inmediata frente a una curvatura gradual y transparente." }
      ]
    },
    {
      title: "Técnica Avanzada: Compresión Paralela (New York Compression)",
      content: "La compresión paralela —popularizada históricamente por ingenieros de las grandes salas de grabación de Nueva York— es un recurso avanzado de dinámica diseñado para obtener pegada, agresividad y sustain masivo sin destruir los transitorios naturales de la interpretación humana.\n\nProcedimiento de Ruteo en el DAW:\n1. Canal Directo Limpio: La pista original (por ejemplo, una toma sutil de violín, una voz solista o la batería completa) se reproduce sin compresión destructiva en su canal, manteniendo intactos todos sus transitorios de ataque y su dinámica expresiva.\n2. Envío a Bus Auxiliar: Mediante un envío post-fader (Send), derivamos una copia idéntica de la señal hacia un canal auxiliar estéreo independiente.\n3. Aplastamiento Dinámico en el Auxiliar: En este canal auxiliar insertamos un compresor de carácter sumamente rápido y agresivo (típicamente una emulación FET estilo 1176 con ratio alto como 8:1 o modo 'All Buttons In'). Se calibra con umbral bajo, forzando una reducción de ganancia severa (de -10 a -15 dB de atenuación): esto destruye por completo los transitorios de ataque, satura con armónicos densos y eleva el cuerpo y las colas de la reverberación del instrumento al máximo.\n4. Suma Equilibrada: Con el canal paralelo ultra-comprimido en solo, bajamos su fader a cero; luego, mientras la pista limpia suena en la mezcla general, elevamos progresivamente el fader del bus paralelo hasta amalgamar ambas señales por debajo.\n\nEl Resultado Acústico:\nObtenemos una pista donde los picos y ataques suenan completamente abiertos y transparentes gracias al canal limpio, mientras que el cuerpo, la calidez de baja frecuencia y la actitud dinámica se ven sostenidos de manera inquebrantable por el canal paralelo aplastado.",
      image: {
        placeholder: true,
        comment: "Flujo de ruteo de Compresión Paralela: Pista limpia -> Salida directa al bus / Envío auxiliar hacia compresor FET ultra-comprimido sumándose por debajo."
      },
      bulletPoints: [
        { label: "Canal Limpio Intacto", text: "Conserva el 100% de la claridad tímbrica y los transitorios de la ejecución original." },
        { label: "Bus Auxiliar Destructivo", text: "Aplastamiento agresivo con compresor FET para extraer armónicos y sostenimiento (sustain)." },
        { label: "Fusión Sonora", text: "Amalgama auditiva que entrega contundencia pesada manteniendo la fidelidad acústica." }
      ]
    }
  ],
  quiz: [
    {
      id: 1,
      question: "¿Cuál es la función principal de un compresor dinámico dentro de una mezcla?",
      options: [
        "Aumentar las frecuencias agudas por encima de 10 kHz de forma constante",
        "Actuar como un fader automático reduciendo los picos de volumen excesivos y permitiendo elevar el nivel general para estabilizar el rango dinámico",
        "Eliminar el sangrado acústico entre micrófonos mediante compuertas de ruido",
        "Invertir la polaridad de las notas fantasma en la pista"
      ],
      correct: 1,
      explanation: "El compresor disminuye la diferencia de amplitud entre pasajes débiles y fuertes, evitando saturaciones indeseadas y aportando consistencia y densidad a la pista."
    },
    {
      id: 2,
      question: "¿Qué ocurre con el sonido de una percusión si se configura un tiempo de ataque (Attack) excesivamente rápido (ej. 1 ms)?",
      options: [
        "Se acentúa el impacto y chasquido inicial del golpe",
        "Se destruye el transiente de ataque al instante, restando vida, pegada rítmica y dinámica a la interpretación",
        "Se produce un retardo de fase en los subgraves",
        "El ecualizador del canal se desactiva de forma preventiva"
      ],
      correct: 1,
      explanation: "Un ataque inmediato comprime antes de que el transitorio inicial complete su ciclo, aplastando el golpe seco de la baqueta y dejando solo la cola del tambor."
    },
    {
      id: 3,
      question: "¿Qué característica técnica y sonora define a los compresores de tipo VCA (Voltage Controlled Amplifier, ej. DBX 160A)?",
      options: [
        "Reaccionan con lentitud mediante filamentos incandescentes y paneles ópticos",
        "Son circuitos sumamente veloces que responden de forma precisa al voltaje, ideales para percusiones, baterías y secuencias rítmicas",
        "Solo comprimen frecuencias por debajo de 50 Hz",
        "Requieren recalibrar válvulas termoiónicas en cada sesión"
      ],
      correct: 1,
      explanation: "Los circuitos VCA ofrecen control dinámico quirúrgico y tiempos de reacción instantáneos, convirtiéndose en herramientas de referencia para transitorios percusivos rápidos."
    },
    {
      id: 4,
      question: "¿Por qué los compresores Ópticos (Opto, ej. Teletronix LA-2A) resultan ideales para voces y pads de sintetizador?",
      options: [
        "Porque tienen el ataque más rápido del mercado para atrapar transientes",
        "Porque su elemento fotosensible y bombilla interna reaccionan con suavidad e inercia física, generando una compresión musical, aterciopelada y orgánica",
        "Porque saturan la señal con distorsión de transistores metálicos",
        "Porque funcionan sin necesidad de conectarse a la interfaz"
      ],
      correct: 1,
      explanation: "El retardo natural del filamento al iluminarse y apagarse produce una envolvente dócil y libre de cortes agresivos, adaptándose al flujo natural de la voz humana."
    },
    {
      id: 5,
      question: "¿Cuál es el rol habitual de los compresores de válvulas Vari-Mu (ej. Fairchild 670 o Manley Variable Mu) en mezcla y mastering?",
      options: [
        "Eliminar ruidos de masa de 60 Hz en guitarras eléctricas",
        "Actuar como pegamento sonoro (glue) en buses de instrumentos y en el bus estéreo final, cohesionando múltiples pistas en un bloque sólido y musical",
        "Reemplazar a las compuertas de ruido en baterías en vivo",
        "Cortar frecuencias agudas con una pendiente de 48 dB/octava"
      ],
      correct: 1,
      explanation: "Al variar su compresión en función de la amplitud de entrada mediante polarización valvular, unifica mezclas complejas y subgrupos con sedosidad analógica."
    },
    {
      id: 6,
      question: "¿Qué distingue a los compresores tipo FET (Field Effect Transistor, ej. Universal Audio 1176)?",
      options: [
        "Su incapacidad para colorear o modificar el timbre del instrumento",
        "Ataques ultrarrápidos que doman transitorios al instante y una circuitería que añade rica distorsión armónica, garra y agresividad al sonido",
        "Tiempos de relajación que tardan varios segundos en soltar la señal",
        "Uso exclusivo en señales monofónicas de baja ganancia"
      ],
      correct: 1,
      explanation: "Los FET son reconocidos por su inmediatez, su pegada agresiva en bajos y guitarras de rock, y el carácter que imprimen incluso sin apenas comprimir."
    },
    {
      id: 7,
      question: "¿Qué determina el parámetro Threshold (Umbral) en un compresor?",
      options: [
        "La cantidad de agudos que pasan sin procesar",
        "El nivel de volumen en decibeles a partir del cual el compresor comienza a reducir ganancia",
        "El tiempo que tarda la señal en viajar a los auriculares",
        "La frecuencia central del filtro de campana"
      ],
      correct: 1,
      explanation: "El Threshold establece la frontera operativa: todo pasaje por debajo del umbral pasa intacto; en cuanto el audio lo sobrepasa, el circuito inicia la atenuación."
    },
    {
      id: 8,
      question: "Si configuras un Ratio de 4:1 en un compresor, ¿cómo se procesa una señal que sobrepasa el umbral por 8 dB?",
      options: [
        "Se eliminan los 8 dB por completo dejando la pista en silencio",
        "De los 8 dB excedentes solo se permite la salida de 2 dB (reduciendo los otros 6 dB)",
        "Se multiplica la amplitud por 4 alcanzando +32 dB",
        "El compresor entra en modo clipper con hard knee"
      ],
      correct: 1,
      explanation: "Un ratio de 4:1 divide el exceso de señal entre 4: de 8 dB por encima del umbral, 8 / 4 = 2 dB que cruzan hacia la salida, atenuando 6 dB de ganancia."
    },
    {
      id: 9,
      question: "¿Cuál es la función técnica del Make-up Gain (Ganancia de Salida)?",
      options: [
        "Aumentar el umbral dinámico de los convertidores A/D",
        "Compensar la pérdida de volumen producida por la reducción de picos, elevando el nivel general para ganar sonoridad, cuerpo y presencia",
        "Invertir la polaridad de las frecuencias subgraves",
        "Calibrar la velocidad de muestreo en el reloj maestro"
      ],
      correct: 1,
      explanation: "Al domesticar los picos altos, la pista queda con menor volumen relativo; el Make-up Gain recupera ese espacio libre subiendo el suelo de la señal comprimida."
    },
    {
      id: 10,
      question: "¿En qué consiste la técnica de Compresión Paralela (New York Compression)?",
      options: [
        "En comprimir dos canciones diferentes en el mismo proyecto con el mismo ratio",
        "En enviar una copia de la señal limpia a un bus auxiliar con compresión extrema y mezclarlo a bajo volumen con la pista natural, uniendo cuerpo y pegada sin perder dinámica",
        "En usar dos compresores en serie con filtros pasa altos desactivados",
        "En apagar la ganancia de salida del bus de masterización"
      ],
      correct: 1,
      explanation: "Conserva los transitorios y la articulación original de la pista seca a la vez que inyecta la densidad, armónicos y cuerpo sostenido de la copia hipercomprimida."
    }
  ],
  flashcards: [
    {
      front: "Definición de Rango Dinámico en audio",
      back: "Diferencia de volumen en decibeles entre el sonido más tenue (susurro) y el impacto más intenso (grito) de una señal."
    },
    {
      front: "Función operativa del compresor como 'fader automático'",
      back: "Atenúa picos transitorios y permite elevar el nivel general para que los detalles suaves ganen inteligibilidad sin saturar."
    },
    {
      front: "¿Qué es un Transiente o Transitorio?",
      back: "Explosión inicial de alta energía y corta duración al comienzo de una onda sonora que transmite la información de ataque y ritmo."
    },
    {
      front: "Peligro de utilizar un tiempo de ataque (Attack) excesivamente rápido",
      back: "Asfixia los transitorios iniciales de la interpretación, restando pegada rítmica, aire y vitalidad dinámica a tambores e instrumentos."
    },
    {
      front: "Características sonoras de los compresores VCA (ej. DBX 160A)",
      back: "Respuesta ultrarrápida, alta precisión lineal al voltaje y control enérgico sobre transitorios de baterías y percusiones."
    },
    {
      front: "Características sonoras de los compresores Ópticos (ej. LA-2A)",
      back: "Respuesta suave y aterciopelada gobernada por célula lumínica; ideal para voces y texturas continuas que no demandan ataque veloz."
    },
    {
      front: "Uso predilecto de los compresores Vari-Mu (ej. Fairchild 670)",
      back: "Aglutinar pistas como pegamento ('glue') en buses comunes, subgrupos de batería y mastering gracias a su compresión valvular adaptativa."
    },
    {
      front: "Características sonoras de los compresores FET (ej. 1176)",
      back: "Ataque instantáneo, distorsión armónica marcada y carácter enérgico para bajos, guitarras y voces agresivas de rock."
    },
    {
      front: "Parámetro Threshold (Umbral)",
      back: "Punto de corte en decibeles a partir del cual el circuito detecta exceso de nivel y comienza la reducción de ganancia."
    },
    {
      front: "Parámetro Ratio (Relación de compresión)",
      back: "Proporción matemática que establece cuánto se atenúa la señal excedente una vez rebasado el umbral (ej. 2:1 suave, 4:1 moderado, inf:1 limitador)."
    },
    {
      front: "Parámetro Attack (Ataque)",
      back: "Tiempo en milisegundos que demora el procesador en aplicar la reducción de ganancia completa tras cruzar el umbral."
    },
    {
      front: "Parámetro Release (Liberación o Relajación)",
      back: "Tiempo en milisegundos que tarda el compresor en soltar la señal y retornar al estado de ganancia unitaria tras caer bajo el umbral."
    },
    {
      front: "Función del Make-up Gain",
      back: "Restaurar el volumen tras la reducción de picos, otorgando mayor densidad, cuerpo percibido y sonoridad sin saturar el máster."
    },
    {
      front: "Diferencia entre Hard Knee y Soft Knee",
      back: "Hard Knee comprime abruptamente al cruzar el umbral; Soft Knee introduce una transición redondeada y progresiva en la pendiente."
    },
    {
      front: "Concepto de Compresión Paralela (New York Style)",
      back: "Mezclar una pista limpia con transitorios intactos junto a una réplica severamente comprimida para obtener pegada sin aplastar la dinámica."
    },
    {
      front: "Comportamiento del compresor con Ratio infinito:1 (∞:1)",
      back: "Opera como limitador estricto (*Brickwall* o *Clipper*), impidiendo que ningún pico cruce el techo establecido por el umbral."
    },
    {
      front: "Consecuencia de un Release excesivamente descalibrado",
      back: "Produce bombeo acústico indeseado (*pumping*) o frena los golpes rítmicos subsecuentes destruyendo el groove natural."
    },
    {
      front: "Cualidad de los Compresores Digitales puros",
      back: "Procesamiento transparente y quirúrgico sin coloración armónica analógica añadida, con control independiente de envolvente."
    },
    {
      front: "¿Por qué el 1176 aporta color aun con reducción de ganancia en cero?",
      back: "Por la impronta de sus transformadores de entrada/salida y circuitería a transistores de efecto de campo."
    },
    {
      front: "Regla de oro sobre la compresión en la mezcla",
      back: "La compresión no solo controla el volumen; define la envolvente temporal, el ritmo percibido y la actitud emocional del sonido."
    }
  ]
};