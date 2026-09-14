export const clase16 = {
  id: 16,
  title: "Práctica de Grabación: Bajos, Guitarras, Cajas Directas y Fase",
  summary: "Técnica dual en bajo eléctrico, configuración de tres canales para guitarra rítmica, aplicación práctica de la Regla 3 a 1, afinación silenciosa en Standby y Reamping con Neural DSP.",
  sections: [
    {
      title: "Objetivos de Sesión y Fundamentos de Grabación en Rock Ochentero",
      content: "Esta sesión práctica nos posiciona en la sala de control para abordar la captura de la sección rítmica de cuerdas (bajo eléctrico y guitarras rítmicas de base) orientada a una producción de rock con estética sonora de los años ochenta. El objetivo técnico central es llevar a la práctica la combinación de cajas directas activas, microfonía cercana en gabinetes de alta potencia y el control físico de cancelaciones de fase mediante la Regla del 3 a 1.\n\nEl material registrado en estas pistas formará parte del proyecto multitrack definitivo que utilizaremos para aprender los procesos de mezcla y procesamiento dinámico. Comprender que la calidad de una mezcla depende en un 90% de cómo fue capturada la señal en esta etapa es la diferencia entre un productor profesional y un aficionado que intenta corregir errores acústicos con plugins.",
      image: {
        placeholder: true,
        comment: "Esquema general del estudio mostrando la disposición de la cabina de control y la sala de amplificadores para la sesión de rock ochentero."
      },
      bulletPoints: [
        { label: "Enfoque Estético", text: "Sonido de rock ochentero con gran pegada rítmica, peso en graves y definición cortante en medios-agudos." },
        { label: "Destino Multitrack", text: "Las tomas alimentarán el proyecto integral de mezcla del siguiente semestre académico." },
        { label: "Premisa Operativa", text: "Resolver el sonido en la fuente mediante posicionamiento físico y control de ganancias antes de pulsar grabar." }
      ]
    },
    {
      title: "Grabación de Bajo Eléctrico: La Estrategia Dual",
      content: "Al enfrentarnos al bajo eléctrico en una producción profesional, no elegimos entre grabar por línea o microfonear el amplificador: ejecutamos ambas técnicas simultáneamente para sumar las virtudes de ambos mundos:\n\n1. Canal 1 - La Caja Directa Activa (DI Box / Direct Injection):\nConectamos el instrumento al Input (entrada) de una Caja Directa Activa. Su circuito toma la señal de alta impedancia (Hi-Z) generada por las pastillas del bajo y la balancea a baja impedancia (Low-Z), enviándola por su salida XLR (Canon) hacia el preamplificador de la consola o interfaz. Como se trata de una DI activa con circuitería electrónica interna, requiere obligatoriamente que encendamos el Phantom Power (+48V) desde el canal de la interfaz. Esta pista directa es indispensable cuando grabamos bajos de gama alta donde el amplificador físico podría enmascarar la calidad pura del instrumento, asegurando una señal con estabilidad dinámica inquebrantable y transitorios intactos.\n\n2. Canal 2 - Microfonía del Amplificador en Sala:\nDesde la salida puente no balanceada (Through / Thru) de la misma caja directa, derivamos un cable hacia la entrada de un amplificador cabezal valvular/transistorizado de 100W reales acoplado a su gabinete de bafles. Para registrar el cono, colocamos un micrófono AKG D112 (transductor dinámico de gran diafragma optimizado para bajas frecuencias con una curva de realce en 80 Hz y 2.5 kHz) apuntando directamente a la tela del altavoz.",
      image: {
        placeholder: true,
        comment: "Diagrama de conexiones de bajo: Bajo -> Input de DI Activa (+48V) -> Salida XLR a Canal 1 Interfaz / Salida Through hacia Cabezal 100W -> Bafle -> Micrófono AKG D112 a Canal 2."
      },
      bulletPoints: [
        { label: "DI Activa (+48V)", text: "Convierte la impedancia y protege el rango dinámico puro del instrumento de alta gama." },
        { label: "Salida Through (Puente)", text: "Deriva la señal idéntica hacia el amplificador sin degradación eléctrica ni pérdida de volumen." },
        { label: "AKG D112 en Parlante", text: "Captura el empuje y coloración del gabinete de 100W con respuesta enérgica en graves." }
      ]
    },
    {
      title: "Gain Staging en Bajo, Pad Atenuador y Afinación Continua",
      content: "Durante la prueba de sonido (Soundcheck), la calibración de la estructura de ganancias (Gain Staging) debe ser estricta para evitar la distorsión no lineal en el previo:\n\n• Activación del Pad Atenuador:\nAl evaluar la señal de la caja directa activa, se detectó que el nivel de voltaje entraba con excesiva potencia, llevando el vúmetro digital cerca del área roja aun con la ganancia del preamplificador casi al mínimo. La solución técnica consistió en activar el botón Pad (-20 dB) en el canal de la interfaz. Este atenuador pasivo reduce el voltaje de entrada antes de alcanzar la etapa de ganancia activa, permitiendo abrir el potenciómetro del previo en un recorrido lineal y seguro.\n\n• Protocolo de Afinación Obligatorio:\nLa afinación no se negocia jamás en el estudio. El músico debe vaciar sus bolsillos de llaves o teléfonos para operar cómodo, y se conecta a un afinador de precisión (hardware o mediante plugins de alta resolución como Brainworx). El productor tiene la responsabilidad de chequear y exigir la comprobación de afinación antes de cada toma.\n\n• Sinergia de Mezcla entre Línea y Amplificador:\nAl comparar ambas señales en la sala de control descubrimos que el amplificador aporta grano, actitud y distorsión armónica, pero su respuesta varía de volumen según la nota tocada en el mástil. La caja directa, en cambio, mantiene una pulsación homogénea y definición de cuerda. En la mezcla definitiva podemos sumar ambas pistas o aplicar emuladores de preamplificadores a válvulas (como el Aguilar Tone Hammer) exclusivamente sobre la pista limpia de la DI para colorear con precisión quirúrgica sin alterar la toma microfoneada.",
      image: {
        placeholder: true,
        comment: "Medidor del DAW mostrando la reducción de nivel tras encender el Pad de -20 dB y captura del plugin afinador Brainworx en acción."
      },
      bulletPoints: [
        { label: "Uso del Pad (-20 dB)", text: "Atenúa señales excesivamente calientes para que el preamplificador trabaje en su rango óptimo." },
        { label: "Afinación entre Tomas", text: "Comprobación sistemática con afinador de precisión para evitar desajustes tonales acumulativos." },
        { label: "Balance Tímbrico", text: "La línea directa aporta regularidad dinámica y definición; el micrófono aporta actitud y peso orgánico." },
        { label: "Emulación Aguilar Tone Hammer", text: "Modelado tonal insertado selectivamente en la pista DI limpia para sumar carácter valvular." }
      ]
    },
    {
      title: "Guitarras Eléctricas Rítmicas: Configuración de Tres Canales Simultáneos",
      content: "Para registrar las guitarras rítmicas de base aumentamos la complejidad del ruteo grabando tres canales simultáneos para una sola interpretación. Utilizamos un amplificador Blackstar compuesto por un cabezal valvular de 100W y una caja acústica 2x12 (dos altavoces de doce pulgadas).\n\nPara prevenir el Base Loading (la sobrecarga y acumulación de graves subsónicos provocada por el contacto con el suelo), elevamos el amplificador apoyándolo sobre un segundo gabinete inactivo que sirve como tarima desacopladora.\n\nLos Tres Canales de Grabación:\n1. Canal 1 (Guitar DI): Señal pura tomada de una caja directa activa interpuesta entre la guitarra y el amplificador (requiere Phantom Power +48V).\n2. Canal 2 (Shure SM57): Micrófono dinámico estándar pegado a la tela de uno de los conos.\n3. Canal 3 (AKG C414): Micrófono de condensador de diafragma grande configurado en patrón cardioide apuntando al segundo cono (requiere Phantom Power +48V).\n\nFlujo de Trabajo Silencioso en Afinación:\nAntes de encender la etapa de potencia del amplificador (manteniéndolo en modo Standby), aprovechamos la señal limpia que ingresa por la DI para afinar la guitarra en absoluto silencio a través de los monitores de la cabina, evitando ruidos y fatiga auditiva en el estudio.",
      image: {
        placeholder: true,
        comment: "Setup de guitarra eléctrica: Cabezal Blackstar 100W sobre caja 2x12 elevada, con SM57 y AKG C414 al frente y conexión a DI activa."
      },
      bulletPoints: [
        { label: "Desacople del Suelo", text: "Gabinete 2x12 elevado sobre tarima para cortar la sobrecarga de graves por rebote en el piso." },
        { label: "Tríada de Captura", text: "Pista directa limpia (DI), micrófono dinámico enfocado (SM57) y condensador amplio (C414)." },
        { label: "Standby para Afinación", text: "Afinar la guitarra usando la entrada directa en monitores sin activar el volumen del bafle." }
      ]
    },
    {
      title: "Posicionamiento Físico y la Regla del 3 a 1 en el Bafle",
      content: "Cuando colocamos dos micrófonos simultáneos frente a una misma caja acústica, la diferencia de milisegundos en la llegada del sonido a cada cápsula genera cancelaciones de frecuencias destructivas por desfase (filtro de peine). Para controlarlo en el espacio físico aplicamos la Regla del 3 a 1:\n\nLa Regla del 3 a 1:\nLa distancia de separación lateral que separa al Micrófono A del Micrófono B debe ser al menos el triple de la distancia que existe entre los micrófonos y la fuente emisora (la tela del parlante).\n\n$$\\text{Distancia entre Micrófonos} \\ge 3 \\times \\text{Distancia al Parlante}$$\n\nAplicación Práctica en la Caja 2x12:\nUbicamos el Shure SM57 frente al cono izquierdo en posición central On-Axis (en el eje del cono, para máxima definición y filo de púa) a una distancia de 5 cm de la tela. Siguiendo la fórmula, multiplicamos esa distancia por tres ($5\\text{ cm} \\times 3 = 15\\text{ cm}$). Por lo tanto, el micrófono de condensador AKG C414 se posiciona frente al cono derecho asegurando una separación lateral mínima de 15 cm respecto al SM57. Esta separación física garantiza que las reflexiones cruzadas entre conos queden atenuadas y no provoquen cancelaciones audibles al sumar los canales.",
      image: {
        placeholder: true,
        comment: "Diagrama métrico de la Regla del 3 a 1: SM57 a 5 cm del cono izquierdo y AKG C414 separado a 15 cm sobre el cono derecho."
      },
      bulletPoints: [
        { label: "Fórmula Geométrica", text: "La separación entre cápsulas debe triplicar la distancia hacia la rejilla del altavoz." },
        { label: "Alineación On-Axis", text: "Apuntar al centro del cono para captar el ataque agresivo y los armónicos cortantes del rock." },
        { label: "Inmunidad Acústica", text: "Evita que la radiación del cono contiguo llegue desfasada al micrófono principal." }
      ]
    },
    {
      title: "Auditoría de Correlación de Fase en el DAW y Reamping",
      content: "Una vez grabada la toma con los tres canales, pasamos a la cabina de control para auditar matemáticamente la relación de fase:\n\n• Análisis con Medidor de Fase (Phase Analyzer):\nPaneamos el Shure SM57 al 100% a la izquierda (Hard Panning L) y el AKG C414 al 100% a la derecha (Hard Panning R) en el bus estéreo. Al insertar un medidor de correlación de fase, la gráfica se sostiene de manera continua en la zona azul (+1, perfecta correlación en fase). Las fugas transitorias hacia la zona roja (-1, antifase) que duran apenas milisegundos son naturales en señales estéreo complejas, pero la ausencia de permanencia en el área roja certifica que la Regla del 3 a 1 funcionó con precisión milimétrica. Al cerrar el panorama a un 35% hacia cada lateral, la solidez de la fase se vuelve aún más homogénea y densa.\n\n• El Seguro de Vida del Reamping:\nTener registrada la pista 1 con la guitarra limpia tomada por la DI es el recurso más valioso para el productor. Si durante la etapa de mezcla el tono del amplificador físico no encaja con los teclados o la voz, tomamos esa señal limpia grabada, la extraemos por una salida física de la interfaz, la enviamos a una caja de Reamp y la inyectamos en otro amplificador real en la sala o la procesamos digitalmente a través de simuladores por software modernos (como Neural DSP). Esto permite esculpir texturas masivas y sumarlas por debajo de los micrófonos acústicos originales sin obligar al guitarrista a regrabar su ejecución.\n\n• Mirada hacia la Mezcla Profesional (Pro Tools):\nTodo el material capturado en estas sesiones culminará en el entorno de Pro Tools, software que representa el estándar indiscutido en los grandes estudios comerciales del mundo y sobre el cual se estructurará todo el aprendizaje de mezcla avanzada.",
      image: {
        placeholder: true,
        comment: "Medidor de fase en el DAW mostrando correlación positiva en zona azul (+1) con paneos estéreo y cadena de Reamping hacia Neural DSP."
      },
      bulletPoints: [
        { label: "Hard Panning de Prueba", text: "Paneo a los extremos (L/R) para verificar la compatibilidad de fase de ambos micrófonos." },
        { label: "Zona Azul Predominante", text: "Certifica que las señales se suman de forma constructiva sin perder peso en mono." },
        { label: "Reamping y Neural DSP", text: "Flexibilidad infinita para rediseñar tonos y sumar capas modernas sobre la señal limpia." },
        { label: "Estándar Pro Tools", text: "Entorno de referencia de la industria donde se consolidará todo el flujo de mezcla." }
      ]
    }
  ],
  quiz: [
    {
      id: 1,
      question: "En la técnica dual para bajo eléctrico, ¿cómo se conecta la señal hacia el amplificador y la interfaz al mismo tiempo?",
      options: [
        "Conectando dos cables balanceados XLR en paralelo a la misma entrada de la consola",
        "El bajo ingresa al Input de la DI Box activa; la salida XLR va a la interfaz y la salida Through (puente) envía la copia al amplificador",
        "Usando un cable divisor en Y conectado a la salida de auriculares del amplificador",
        "Conectando el bajo al envío auxiliar del DAW y retornándolo por Bluetooth"
      ],
      correct: 1,
      explanation: "La salida Through de la caja directa puentea la señal analógica directa del instrumento sin alteración hacia el amplificador, mientras la salida balanceada XLR alimenta la interfaz."
    },
    {
      id: 2,
      question: "¿Por qué se utiliza una Caja Directa Activa en el bajo y qué requerimiento eléctrico exige en la interfaz de audio?",
      options: [
        "Para invertir la polaridad de las pastillas; requiere corriente de 220V",
        "Para mantener una impedancia de entrada sumamente alta y señal limpia; requiere activar Phantom Power (+48V) desde la interfaz",
        "Para saturar los conversores A/D; requiere cables no balanceados TS de 15 metros",
        "Para comprimir la señal acústica de la sala; no requiere ningún tipo de alimentación"
      ],
      correct: 1,
      explanation: "Las cajas directas activas contienen circuitería preamplificadora interna que preserva la dinámica y el brillo de instrumentos pasivos o activos, energizándose mediante la alimentación Phantom (+48V)."
    },
    {
      id: 3,
      question: "Durante la prueba de bajo por línea, si la señal de la DI entra con un volumen excesivamente potente al previo, ¿cómo se corrige limpiamente?",
      options: [
        "Atenuando el máster del DAW en -12 dB",
        "Activando el botón 'Pad' atenuador en el canal de entrada de la interfaz",
        "Bajando el tono del bajo al mínimo desde su potenciómetro físico",
        "Apagando el interruptor de Ground Lift"
      ],
      correct: 1,
      explanation: "El botón Pad introduce una resistencia calibrada que reduce el nivel de entrada en dB antes de que sobrecargue el preamplificador, evitando distorsión armónica no deseada."
    },
    {
      id: 4,
      question: "¿Qué ventaja ofrece disponer por separado de la pista de DI y la pista de micrófono del bajo en la etapa de mezcla?",
      options: [
        "Permite borrar una de las dos pistas para ahorrar almacenamiento en disco",
        "El amplificador aporta color, calidez y actitud, mientras la DI garantiza dinámica estable, definición y la opción de insertar plugins emuladores (como Tone Hammer)",
        "Convierte la señal del bajo automáticamente a un archivo MIDI monofónico",
        "Elimina por completo la necesidad de ecualizar el bombo de la batería"
      ],
      correct: 1,
      explanation: "La combinación suma el cuerpo agresivo del altavoz con la solidez de transitorios de la línea pura, permitiendo además procesar la DI con simuladores específicos sin desarmar la toma de sala."
    },
    {
      id: 5,
      question: "Para la guitarra eléctrica rítmica, ¿cuáles son los 3 canales simultáneos que se grabaron en la sesión práctica?",
      options: [
        "1. Micrófono de voz, 2. Micrófono de ambiente lejano, 3. Auriculares del músico",
        "1. Caja Directa limpia (Guitar DI), 2. Shure SM57 pegado al cono, 3. AKG C414 apuntando al amplificador",
        "1. Entrada auxiliar estéreo, 2. Micrófono de cinta en el suelo, 3. Salida de afinador",
        "1. Tres micrófonos Shure SM58 colocados en triángulo sobre el techo"
      ],
      correct: 1,
      explanation: "Este esquema de tres vías captura la señal seca por DI para respaldo/reamp, la mordida clásica media-aguda del dinámico SM57 y la extensión de frecuencias del condensador C414."
    },
    {
      id: 6,
      question: "¿Cómo se aprovecha la señal limpia de la Caja Directa antes de empezar a grabar guitarras con el amplificador en Standby?",
      options: [
        "Para calibrar la latencia del software Pro Tools en 2048 muestras",
        "Para afinar el instrumento en absoluto silencio por los monitores del control room sin aturdir a la sala",
        "Para calentar los conos del altavoz con señales subsónicas",
        "Para comprobar si el cable de red tiene conexión a internet"
      ],
      correct: 1,
      explanation: "Al mantener el cabezal en reposo (Standby), la señal pasa directa de la DI a la interfaz, permitiendo revisar la afinación de forma precisa sin generar ruidos molestos por el altavoz."
    },
    {
      id: 7,
      question: "Si colocas el Shure SM57 y el AKG C414 a 5 cm de la tela de los parlantes (distancia X), ¿cuál debe ser la separación lateral entre ambos según la Regla 3 a 1?",
      options: [
        "Exactamente 5 cm",
        "Al menos 15 cm (3 veces la distancia al cono)",
        "30 cm de separación vertical respecto al piso",
        "No requiere separación si ambos usan patrón cardioide"
      ],
      correct: 1,
      explanation: "La regla estipula que la distancia entre micrófonos debe ser como mínimo el triple de la distancia entre la fuente y el micrófono (3 × 5 cm = 15 cm) para evitar cancelaciones de fase perceptibles."
    },
    {
      id: 8,
      question: "Al realizar un análisis de fase en el DAW con el SM57 paneado a la izquierda y el C414 a la derecha, ¿qué comportamiento ratifica el éxito de la técnica?",
      options: [
        "El gráfico se mantiene de forma permanente en la zona roja de antifase",
        "El gráfico oscila firmemente en la zona azul (en fase), exhibiendo solo excursiones fugaces y volviéndose aún más sólido al cerrar el paneo al 35%",
        "El medidor se apaga por completo al pulsar el botón mono",
        "La forma de onda de ambos canales se vuelve una línea recta plana"
      ],
      correct: 1,
      explanation: "La persistencia en el cuadrante azul confirma correlación positiva y sumatoria coherente; las incursiones milimétricas momentáneas son transitorios normales que no degradan el timbre."
    },
    {
      id: 9,
      question: "¿Por qué el amplificador Blackstar se montó elevado sobre un gabinete inactivo durante la sesión?",
      options: [
        "Para permitir que el aire caliente de las válvulas descienda hacia el suelo",
        "Para evitar el fenómeno de base loading (refuerzo descontrolado de frecuencias graves por acople con el piso)",
        "Para que los micrófonos queden alineados con la altura de los ojos del guitarrista",
        "Para transformar el circuito del amplificador en balanceado de baja impedancia"
      ],
      correct: 1,
      explanation: "El piso actúa como una superficie reflectante y límite físico masivo; desacoplar el bafle del suelo limpia la respuesta en graves y evita resonancias artificiales."
    },
    {
      id: 10,
      question: "¿Qué utilidad práctica tiene el Reamping moderno con la pista limpia de guitarra grabada por DI?",
      options: [
        "Aumentar la afinación de la toma en un tono completo",
        "Inyectar la señal limpia a simuladores digitales de alta gama (como Neural DSP) o reamplificarla en cabezales reales para sumar capas sonoras masivas",
        "Eliminar la necesidad de usar cables en las sesiones posteriores",
        "Convertir la pista de audio en un patrón de compresión para el bombo"
      ],
      correct: 1,
      explanation: "Permite rediseñar el tono tras la sesión sin desgastar al músico, explorando amplificadores reales o motores DSP de alta fidelidad para engrosar la mezcla."
    }
  ],
  flashcards: [
    {
      front: "Objetivo de la técnica dual en grabación de bajo",
      back: "Registrar a la vez la señal limpia directa por DI Box (dinámica estable y definición) y el micrófono del amplificador (carácter, cuerpo y saturación)."
    },
    {
      front: "Conexión física del bajo a la Caja Directa",
      back: "Bajo al Input de la DI; la salida XLR va a la interfaz con +48V y la salida Through envía una réplica limpia directa al amplificador."
    },
    {
      front: "Función del interruptor Pad en la toma de bajo",
      back: "Atenuar en decibeles una señal entrante excesivamente potente de la DI antes de que sobrecargue el circuito del preamplificador."
    },
    {
      front: "Ventaja de la señal DI limpia en mezcla de bajo",
      back: "Brinda transitorios nítidos y permite aplicar emulaciones de previos específicos (ej. Aguilar Tone Hammer) sin afectar la pista microfoneada."
    },
    {
      front: "Microfonía para el gabinete de bajo en la sesión",
      back: "Un micrófono dinámico AKG D112 orientado al cono del parlante para captar el impacto y la pegada en frecuencias bajas."
    },
    {
      front: "Configuración de 3 canales para guitarra rítmica",
      back: "1. Caja Directa limpia (DI con +48V), 2. Shure SM57 en el cono y 3. AKG C414 de condensador frente al bafle."
    },
    {
      front: "Afinación silenciosa en modo Standby",
      back: "Dejar el amplificador en espera y usar la señal pura de la DI para afinar mediante monitores o plugins sin generar ruidos molestos en sala."
    },
    {
      front: "Fórmula de la Regla del 3 a 1 en bafles de guitarra",
      back: "La distancia lateral entre dos micrófonos debe ser al menos el triple de la distancia que separa a los micrófonos de la tela del parlante."
    },
    {
      front: "Ejemplo numérico de la Regla 3 a 1 (5 cm al parlante)",
      back: "Si los micrófonos están a 5 cm de la tela, la separación lateral mínima entre el SM57 y el C414 debe ser de 15 cm."
    },
    {
      front: "Verificación de fase estéreo en el DAW",
      back: "Panear los dos micrófonos a los extremos y chequear el Phase Analyzer: debe sostenerse firmemente en la zona azul (fase positiva)."
    },
    {
      front: "Efecto de cerrar el paneo al 35% por lado",
      back: "Refuerza la cohesión tímbrica y consolida la imagen central reduciendo aún más las excursiones a la zona roja de antifase."
    },
    {
      front: "¿Por qué desacoplar el amplificador combo del piso?",
      back: "Para eliminar el acople acústico con el suelo y prevenir el 'base loading' (acumulación excesiva y confusa de frecuencias graves)."
    },
    {
      front: "Concepto de Reamping aplicado a guitarras",
      back: "Tomar la pista limpia grabada por DI y procesarla a través de amplificadores físicos reales o modeladores virtuales como Neural DSP."
    },
    {
      front: "¿Por qué el SM57 y el C414 se complementan en guitarra?",
      back: "El SM57 aporta el filo y ataque clásico en frecuencias medias; el C414 extiende la respuesta en graves y añade textura detallada de sala."
    },
    {
      front: "Requisito eléctrico de la DI Activa y del AKG C414",
      back: "Ambos canales exigen la activación obligatoria de Phantom Power (+48V) desde la consola o interfaz de audio."
    },
    {
      front: "Cuidado de bolsillos y accesorios del músico al grabar",
      back: "Vaciar bolsillos y retirar pulseras para garantizar comodidad postural y evitar ruidos parásitos mecánicos durante la ejecución."
    },
    {
      front: "Alineación On-Axis en parlantes de guitarra",
      back: "Apuntar directamente al centro del cono para capturar el mayor ataque de púa, agresividad y contenido armónico brillante."
    },
    {
      front: "Revisión constante de afinación entre tomas",
      back: "Verificar la afinación antes de cada toma para evitar registrar desafinaciones acumuladas que arruinen el multitrack de mezcla."
    },
    {
      front: "Importancia de Pro Tools en la formación técnica",
      back: "Es el estándar hegemónico global en estudios comerciales, indispensable para el intercambio fluido de sesiones multitrack."
    },
    {
      front: "Destino pedagógico de las tomas de la Clase 16",
      back: "Servirán como material multipista real para las prácticas analíticas y técnicas de mezcla en el siguiente período lectivo."
    }
  ]
};