export const clase19 = {
  id: 19,
  title: "Fundamentos de Mezcla, Curvas Isofónicas y Ecualización",
  summary: "Balances innegociables, la guerra del volumen (Loudness War) y LUFS, curvas de Fletcher-Munson, tipos de ecualizadores (Gráfico, Paramétrico, Semiparamétrico) y calibración acústica con Ruido Rosa.",
  sections: [
    {
      title: "Fundamentos de la Mezcla: Los Dos Balances Innegociables",
      content: "Al completar la etapa de captura y grabación (tracking), ingresamos formalmente al proceso de mezcla de audio. Una mezcla con estándar profesional no se define por la cantidad de efectos insertados, sino por alcanzar y sostener dos equilibrios técnicos obligatorios:\n\n1. Balance Espectral: Consiste en garantizar una distribución armónica proporcional en todo el espectro audible humano (desde 20 Hz en los subgraves hasta 20.000 Hz o 20 kHz en los agudos extremos), impidiendo que una zona de frecuencias domine de forma desmedida y opaque a las demás. Se modela primordialmente mediante el uso de ecualizadores (EQ).\n\n2. Balance Dinámico: Se encarga de gobernar y estabilizar las variaciones de energía y los picos transitorios (el ataque inicial y abrupto de un sonido) para que la señal sea consistente a lo largo del tiempo, permitiendo que la obra transmita impacto, pegada y peso sin sobrecargar ni clipear el bus máster final. Se modela primordialmente a través de compresores.",
      image: {
        placeholder: true,
        comment: "Esquema comparativo entre Balance Espectral (curva de 20 Hz a 20 kHz en analizador de espectro) y Balance Dinámico (control de crestas y transitorios en forma de onda)."
      },
      bulletPoints: [
        { label: "Balance Espectral", text: "Distribución equilibrada de energía entre graves, medios y agudos mediante ecualización." },
        { label: "Balance Dinámico", text: "Control milimétrico del rango dinámico y los transitorios para otorgar consistencia con compresores." },
        { label: "Interacción Sistémica", text: "Toda modificación en la respuesta en frecuencia altera la energía dinámica, y viceversa." }
      ]
    },
    {
      title: "La Guerra de los Volúmenes (Loudness War) y el Estándar LUFS",
      content: "Durante las últimas décadas, la industria musical cayó en una competencia comercial desmedida conocida como la 'Guerra de los Volúmenes' (Loudness War), donde sellos discográficos e ingenieros buscaban que sus discos sonaran más fuertes que los de la competencia a costa de destruir la fidelidad acústica.\n\nEl Rango Dinámico y la Destrucción Musical:\nEl rango dinámico es la distancia física en decibeles entre el golpe o pasaje más sutil y el impacto más potente de una pieza musical (un cuarteto de jazz, por ejemplo, posee un rango dinámico inmenso con pianissimos delicados seguidos de crescendos enérgicos). Al sobrecomprimir y limitar un tema para forzar un volumen percibido aplastante, se extermina esa diferencia, transformando la música en un bloque denso, plano y fatigante para el oído.\n\nEl Caso Histórico de Death Magnetic (Metallica, 2008):\nEste álbum representa el punto crítico de la Loudness War. Fue masterizado a niveles de sobrecompresión tan brutales (rozando los -3 LUFS) que la distorsión por intersample y el clipeo digital eran evidentes en cualquier reproductor comercial. La compresión fue tan agresiva que provocó quejas masivas de la audiencia y fallos técnicos al incluir las pistas en el videojuego Guitar Hero, donde la onda saturaba físicamente los altavoces de los televisores.\n\n¿Qué son los LUFS (Loudness Units relative to Full Scale)?:\nEs la unidad de medida internacional de sonoridad percibida que combina la integración de energía RMS (Root Mean Square, el valor eficaz promedio) con el comportamiento de picos intersample sobre una escala que emula la curva de audición humana. Se lee en valores negativos (donde 0 LUFS representaría un bloque puro continuo de onda cuadrada sin rango dinámico alguno).\n\nLa Solución de las Plataformas de Streaming (Spotify):\nPara proteger al usuario de saltos bruscos de volumen, plataformas como Spotify implementaron algoritmos de normalización obligatoria. Si un productor entrega un máster sobrecomprimido a -6 LUFS, la plataforma le aplicará una atenuación automática hacia abajo hasta situarlo en su estándar operativo de -14 LUFS. En consecuencia, hipercomprimir una mezcla moderna ya no hace que suene más fuerte en plataformas; únicamente consigue que suene aplastada, sin pegada y fatigante al mismo nivel que una producción con dinámica intacta.",
      image: {
        placeholder: true,
        comment: "Comparativa visual de forma de onda: señal dinámica con transitorios preservados vs bloque sobrecomprimido estilo Death Magnetic a -3 LUFS, y gráfico de normalización a -14 LUFS en streaming."
      },
      bulletPoints: [
        { label: "Rango Dinámico Aplastado", text: "La sobrecompresión masiva destruye los transitorios naturales y agota al sistema auditivo." },
        { label: "Medición LUFS", text: "Estándar de sonoridad percibida que calcula la densidad energética promedio real." },
        { label: "Normalización a -14 LUFS", text: "Las plataformas atenúan temas sobrecomprimidos, anulando la ventaja de hiperlimitar." }
      ]
    },
    {
      title: "Psicoacústica: Las Curvas de Fletcher-Munson y la Regla 80/20",
      content: "Para ecualizar con autoridad técnica, es mandatorio comprender cómo el oído humano interpreta la presión sonora en función del volumen de escucha, principio descubierto por los investigadores Fletcher y Munson mediante las 'Curvas Isofónicas' de igual sonoridad.\n\nEl Rango Medio y la Sensibilidad Evolutiva:\nPor diseño evolutivo de supervivencia, el sistema auditivo humano no responde de manera lineal; es extremadamente sensible al rango de frecuencias medias (entre 1 kHz y 4 kHz), que es la zona donde residen las consonantes y la inteligibilidad de la voz hablada. Por el contrario, a niveles de escucha bajos somos notablemente insensibles a los extremos de subgraves y agudos.\n\nLa Regla de Oro de la Escucha (80% a Volumen Bajo / 20% a Volumen Alto):\n• Monitoreo a Volumen Bajo (80% del Tiempo): A niveles moderados o bajos (alrededor de 70-75 dB SPL, Sound Pressure Level), el oído acentúa de forma natural las frecuencias medias. Como casi todos los instrumentos compiten y viven en esa franja (cuerpos de guitarras, teclados, redoblantes, voces), mezclar a bajo volumen fuerza al ingeniero a limpiar quirúrgicamente ese rango para que la voz principal no resulte enmascarada. Si la mezcla se percibe articulada y clara a volumen bajo, funcionará en cualquier sistema.\n• Monitoreo a Volumen Alto (20% del Tiempo): Cuando elevamos la presión de los monitores a niveles elevados (85-90 dB SPL), las curvas isofónicas se aplanan. El oído percibe repentinamente graves y agudos con idéntica potencia que los medios. Si cometes el error de mezclar todo el tiempo a volumen alto, tu cerebro se autoengañará sintiendo graves contundentes y agudos brillantes que en realidad no existen en la pista, arruinando las decisiones de ecualización y provocando fatiga auditiva prematura.",
      image: {
        placeholder: true,
        comment: "Gráfica de las curvas isofónicas de Fletcher-Munson mostrando la sensibilidad en el rango vocal (1-4 kHz) a bajos volúmenes y el aplanamiento de la curva a volúmenes altos."
      },
      bulletPoints: [
        { label: "Curvas Isofónicas", text: "Demuestran que la respuesta frecuencial del oído cambia radicalmente según la presión sonora." },
        { label: "Monitoreo al 80% (Bajo)", text: "Permite resolver colisiones en frecuencias medias donde conviven casi todos los instrumentos." },
        { label: "Chequeo al 20% (Alto)", text: "Verificación esporádica de pegada y subgraves sin comprometer la objetividad auditiva." }
      ]
    },
    {
      title: "Ecualizadores: Origen Histórico y las Tres Tipologías Clave",
      content: "La ecualización (EQ) nació originalmente en las telecomunicaciones de principios del siglo XX para compensar (igualar o ecualizar) las pérdidas de agudos provocadas por la resistencia en tendidos telefónicos de larga distancia. En la década de 1950, diseños legendarios como el ecualizador pasivo a válvulas Pultec adoptaron este principio para el modelado musical. Un axioma básico de la física de audio: un ecualizador solo puede atenuar o amplificar frecuencias que ya existen en la señal capturada; jamás puede generar frecuencias de la nada si el micrófono no las registró de origen.\n\nLas Tres Tipologías Fundamentales:\n\nA. Ecualizador Gráfico:\n• Funcionamiento: Divide el espectro en bandas de frecuencia fijas (comúnmente 15 o 31 bandas de tercio de octava), cada una controlada por un deslizador (fader o slider) vertical.\n• Aplicación Principal: Sonido en vivo y calibración acústica de salas. Se inyecta 'Ruido Rosa' (Pink Noise, señal con la misma densidad de energía por octava), se mide la respuesta del recinto con un micrófono de análisis RTA (Real Time Analyzer) y el técnico ajusta los deslizadores para aplicar la 'contracurva' exacta de los rebotes y valles de la sala hasta dejar la respuesta plana.\n• En el Estudio Digital: Esta función la asumen plugins de calibración como SoundID Reference de Sonarworks, que generan una contracurva correctiva para la sala o auriculares. Regla operativa crítica: este plugin de escucha debe desactivarse siempre antes de hacer el render o exportación del máster final para no imprimir esa ecualización en el archivo de audio.\n\nB. Ecualizador Paramétrico:\n• Funcionamiento: Es la tipología de máxima precisión y flexibilidad en la mezcla de estudio. Ofrece control continuo sobre tres parámetros indispensables en cualquier banda: Frecuencia (selección exacta del punto en Hz), Ganancia (Gain, cantidad de decibeles a realzar o atenuar) y Ancho de Banda o Factor Q (determina la amplitud de campana, desde curvas amplias y musicales hasta muescas quirúrgicas ultraestrechas).\n\nC. Ecualizador Semiparamétrico:\n• Funcionamiento: Presenta parámetros fijos de fábrica. Típicamente el Ancho de Banda (Q) —y en ocasiones los puntos de frecuencia— vienen predeterminados por el fabricante, permitiendo al usuario manipular únicamente la perilla de ganancia. Es el diseño clásico en consolas analógicas de directo y en controles de tono (Low, Mid, High) de amplificadores de guitarra y bajo.",
      image: {
        placeholder: true,
        comment: "Comparativa visual de los 3 tipos de ecualizadores: Gráfico (deslizadores fijos), Paramétrico (curvas con control de Hz, Gain y Q) y Semiparamétrico (perillas de consola tradicional)."
      },
      bulletPoints: [
        { label: "Ecualizador Gráfico", text: "Bandas fijas para calibración acústica de recintos y PA en sonido en vivo mediante contracurva." },
        { label: "Ecualizador Paramétrico", text: "Control total de Frecuencia, Ganancia y Factor Q para esculpido quirúrgico en mezcla." },
        { label: "Ecualizador Semiparamétrico", text: "Factor Q fijo de fábrica optimizado musicalmente en consolas y previos tradicionales." },
        { label: "Sonarworks y Exportación", text: "El plugin de corrección acústica de sala debe apagarse obligatoriamente al exportar el máster." }
      ]
    },
    {
      title: "Frecuencias Fundamentales y Estructura Armónica",
      content: "Para ecualizar con criterio técnico, el productor no mueve perillas por tanteo visual; opera entendiendo la arquitectura acústica del instrumento. A excepción de una onda senoidal digital pura de laboratorio, todos los instrumentos generan ondas complejas constituidas por:\n\n• Frecuencia Fundamental: Es la onda primaria más baja y de mayor energía que define la altura o nota musical ejecutada. En un analizador de espectro, se visualiza como el primer pico resonante dominante.\n• Serie Armónica y Formantes: Son múltiplos matemáticos enteros que se desarrollan por encima de la fundamental. Esta estructura es la que compone el timbre característico que permite distinguir un piano de una trompeta en la misma nota.\n\nCaso Práctico: Desglose Espectral del Bombo de Batería:\nUn bombo acústico no vive en una única zona del espectro. Su frecuencia fundamental —responsable de la masa de aire, el empuje físico y el peso del casco— reside en el rango de los 75 Hz a 90 Hz. Sin embargo, el transitorio de ataque (el chasquido mecánico de la maza de fieltro o madera chocando contra el parche plástico) se ubica mucho más arriba, en la zona de medios-agudos entre los 2.5 kHz y los 3 kHz. Conocer esta dualidad permite ecualizar de forma independiente el peso subgrave por un lado y la definición y ataque por el otro sin enturbiar las frecuencias medias.",
      image: {
        placeholder: true,
        comment: "Desglose espectral de un bombo en analizador: pico de la frecuencia fundamental en 80 Hz (cuerpo/peso) y pico de armónicos en 2.5-3 kHz (chasquido/ataque)."
      },
      bulletPoints: [
        { label: "Frecuencia Fundamental", text: "Determina la afinación musical y aporta el cuerpo basal del sonido." },
        { label: "Estructura de Armónicos", text: "Múltiplos superiores que otorgan identidad tímbrica y brillo a la fuente." },
        { label: "Diseño en Bombo", text: "Esculpir graves (75-90 Hz) para pegada física y medios-altos (2.5-3 kHz) para definición." }
      ]
    },
    {
      title: "Criterios de Selección: Ecualizadores Quirúrgicos vs. Musicales",
      content: "En la sesión de mezcla disponemos de dos grandes familias de ecualizadores digitales, y su implementación responde a su rol en el ruteo:\n\n• Canales Individuales (Procesamiento Quirúrgico y Asertivo):\nEn pistas individuales crudas que presentan resonancias parásitas, agresividad o falta de peso (por ejemplo, un micrófono de bombo o redoblante que requiere carácter y limpieza), empleamos ecualizadores quirúrgicos o emulaciones analógicas angulares con curvas marcadas. Permiten filtrar subgraves inútiles con cortes paso altos (HPF, High Pass Filter), vaciar frecuencias acartonadas (entre 300 y 500 Hz) con factores Q estrechos y modelar transitorios de forma directa.\n\n• Buses y Grupos (Procesamiento Suave y Musical):\nCuando múltiples canales convergen en un canal auxiliar o bus (como el Bus de Batería o el Mix Bus), el criterio cambia radicalmente. Aquí no aplicamos cortes quirúrgicos que desarticulen la fase del grupo; insertamos ecualizadores pasivos emulados (como las modelaciones del clásico Pultec EQP-1A). Sus curvas de campana sumamente anchas, interactuantes y musicales permiten insuflar brillo sedoso en agudos (10 kHz a 16 kHz) y redondez en graves sin generar asperezas tímbricas.",
      image: {
        placeholder: true,
        comment: "Comparativa de plugins: Ecualizador paramétrico quirúrgico (FabFilter Pro-Q) en pista individual vs emulación de ecualizador pasivo musical (Pultec EQP-1A) en un canal bus."
      },
      bulletPoints: [
        { label: "EQ Quirúrgico en Pistas", text: "Cortes con Q estrecho para extirpar resonancias y limpiar fango espectral." },
        { label: "EQ Pasivo en Buses", text: "Curvas amplias (estilo Pultec) para amalgamar grupos con agudos sedosos y graves plenos." },
        { label: "Economía de Procesamiento", text: "Corregir en pistas individuales y embellecer de forma colectiva en subgrupos." }
      ]
    }
  ],
  quiz: [
    {
      id: 1,
      question: "¿Cuál es la diferencia fundamental entre el Balance Espectral y el Balance Dinámico en la etapa de mezcla?",
      options: [
        "El balance espectral se controla con paneo y el dinámico con faders de volumen",
        "El espectral asegura que ninguna zona de frecuencias domine de forma desproporcionada (usando EQ); el dinámico controla los picos y transitorios a lo largo del tiempo (usando compresores)",
        "El balance espectral es digital a 32 bits y el balance dinámico es analógico de 24 bits",
        "El espectral solo se aplica al bus máster y el dinámico a las pistas individuales"
      ],
      correct: 1,
      explanation: "El equilibrio espectral distribuye los 20 Hz a 20 kHz evitando choques de tono mediante ecualizadores, mientras el dinámico administra la energía y el rango entre sonidos suaves y fuertes mediante compresores."
    },
    {
      id: 2,
      question: "¿Por qué en la actualidad sobrecomprimir un máster a niveles extremos (ej. -6 LUFS) resulta contraproducente para plataformas como Spotify?",
      options: [
        "Porque las plataformas rechazan los archivos que superen los -10 LUFS",
        "Porque la normalización automática baja el volumen general hasta el estándar de -14 LUFS, haciendo que el tema suene aplastado, sin dinámica y al mismo volumen que canciones bien mezcladas",
        "Porque la sobrecompresión borra automáticamente la frecuencia fundamental del bajo",
        "Porque los compresores digitales introducen latencia en la transmisión por streaming"
      ],
      correct: 1,
      explanation: "Al existir normalización por sonoridad percibida (LUFS), aplastar la señal para ganar volumen aparente no sirve: el sistema atenúa la pista, evidenciando la falta de impacto y la fatiga auditiva sin ganancia de volumen."
    },
    {
      id: 3,
      question: "Según las Curvas Isofónicas de Fletcher-Munson, ¿por qué se recomienda mezclar el 80% del tiempo a volumen bajo y solo el 20% a volumen alto?",
      options: [
        "Para evitar el sobrecalentamiento de los amplificadores de monitoreo",
        "Porque a volumen bajo el oído prioriza los medios, obligando a limpiar esa zona donde compiten la voz y los instrumentos; a volumen alto las curvas se aplanan y engañan al ingeniero",
        "Para que los transitorios rápidos de la batería se compriman automáticamente en el aire",
        "Porque los plugins de ecualización analógica solo procesan fielmente a presiones acústicas mínimas"
      ],
      correct: 1,
      explanation: "El oído humano es más sensible al rango medio (donde vive la inteligibilidad del habla) a presiones bajas. Mezclar bajito expone el enmascaramiento; a presiones altas, el oído percibe falsamente más graves y agudos."
    },
    {
      id: 4,
      question: "¿Cuál es una limitación técnica y física inmutable de cualquier ecualizador en la etapa de mezcla?",
      options: [
        "No puede procesar señales grabadas con micrófonos dinámicos",
        "Altera la ganancia de frecuencias preexistentes, pero no puede crear frecuencias que el micrófono no haya capturado de origen",
        "Invierte automáticamente la polaridad acústica de la sala en 180 grados",
        "Requiere corriente Phantom Power (+48V) desde la interfaz para encender sus bandas"
      ],
      correct: 1,
      explanation: "La ecualización es un atenuador/amplificador selectivo por bandas; si una toma carece de peso o información en los subgraves, el ecualizador solo levantará ruido de piso o armónicos no deseados."
    },
    {
      id: 5,
      question: "¿Cómo se calibra acústicamente una sala de sonido en vivo utilizando un Ecualizador Gráfico y Ruido Rosa?",
      options: [
        "Se reproduce ruido rosa y se recortan los agudos en todas las bandas impares",
        "Se emite ruido rosa con energía balanceada, se mide la respuesta irregular de la sala con un micrófono de análisis y se aplica la 'contracurva' exacta con los sliders",
        "Se apagan los monitores y se ajusta el ancho de banda Q en agudo",
        "Se comprimen los picos del ruido rosa en el bus máster"
      ],
      correct: 1,
      explanation: "El ruido rosa excita todas las frecuencias por igual; el micrófono captura qué zonas absorbe o infla la arquitectura de la sala, permitiendo al técnico atenuar o compensar con los controles deslizantes fijos."
    },
    {
      id: 6,
      question: "Al utilizar un plugin de calibración de monitores o auriculares en el estudio (como SoundID Reference), ¿qué precaución crítica debe tomar el ingeniero?",
      options: [
        "Insertarlo exclusivamente en canales mono",
        "Apagar o desactivar el plugin antes de exportar (bouncings) el máster final para no imprimir la contracurva correctiva en el archivo de audio",
        "Configurar el buffer de la interfaz en 1024 muestras para que no sature",
        "Usarlo únicamente con cables de cobre libre de oxígeno"
      ],
      correct: 1,
      explanation: "El software corrige las deficiencias de escucha de la habitación o de los audífonos particulares del usuario; si se exporta activado, el oyente recibirá una ecualización invertida y deformada."
    },
    {
      id: 7,
      question: "¿Cuáles son los tres parámetros de control total que definen a un Ecualizador Paramétrico completo?",
      options: [
        "Threshold (Umbral), Ratio (Proporción) y Knee (Codo)",
        "Frecuencia (punto exacto en Hz), Ganancia (Gain en dB) y Factor Q (ancho de banda afectado)",
        "Ataque (Attack), Decaimiento (Decay) y Liberación (Release)",
        "Impedancia de entrada, Polaridad y Retardo de tiempo"
      ],
      correct: 1,
      explanation: "Un paramétrico permite seleccionar la frecuencia central precisa, determinar cuántos decibeles subir o bajar, y graduar el factor Q para abarcar una curva suave o quirúrgica."
    },
    {
      id: 8,
      question: "¿Qué caracteriza a un Ecualizador Semiparamétrico como los encontrados en consolas analógicas convencionales o amplificadores?",
      options: [
        "Solo permite cortar frecuencias y no amplificarlas",
        "El ancho de banda (factor Q) y en ocasiones las frecuencias centrales vienen prefijados por el fabricante, permitiendo al usuario regular únicamente la ganancia",
        "Funciona mediante inteligencia artificial predictiva",
        "Añade modulación de fase a la señal entrante"
      ],
      correct: 1,
      explanation: "En diseños semiparamétricos (o de bandas fijas), el ancho de campana o los puntos de cruce son definidos por hardware musicalmente predeterminado, limitando la intervención manual."
    },
    {
      id: 9,
      question: "En el diseño acústico de un bombo de batería, ¿en qué zonas espectrales se sitúan su peso fundamental y el chasquido del ataque?",
      options: [
        "Peso en 20 Hz y ataque en 300 Hz",
        "Peso fundamental entre 75 Hz y 90 Hz; transitorio de ataque (chasquido del mazo contra el parche) en la zona de 2.5 kHz a 3 kHz",
        "Peso en 500 Hz y ataque en 15 kHz",
        "Toda su energía se concentra exclusivamente por debajo de los 100 Hz"
      ],
      correct: 1,
      explanation: "Conocer la anatomía acústica del bombo permite esculpir con EQ su cuerpo profundo (75-90 Hz) sin perder la inteligibilidad del impacto de la baqueta o maza (2.5-3 kHz)."
    },
    {
      id: 10,
      question: "¿Cuál es el criterio técnico para elegir entre un ecualizador quirúrgico/limpio y uno de emulación analógica (como Pultec) en un proyecto?",
      options: [
        "Los quirúrgicos se usan solo en voces y los de emulación analógica en bajos",
        "Los ecualizadores quirúrgicos o ásperos se eligen para dar carácter, corte o limpieza en canales individuales; los analógicos musicales y suaves se prefieren para cohesionar buses y grupos",
        "Los analógicos solo procesan audio estéreo",
        "No existe ninguna diferencia perceptual entre ambos tipos"
      ],
      correct: 1,
      explanation: "En pistas crudas individuales se requiere a menudo modelado incisivo o agresivo; en buses y subgrupos se utilizan curvas amplias, pasivas o valvulares para suavizar agudos y redondear graves."
    }
  ],
  flashcards: [
    {
      front: "Definición de Balance Espectral",
      back: "Distribución armónica y equilibrada de frecuencias (20 Hz a 20 kHz) para que ningún rango ensucie o enmascare a los demás."
    },
    {
      front: "Definición de Balance Dinámico",
      back: "Control de los niveles de amplitud y transitorios a lo largo de la obra para mantener estabilidad y pegada sin saturación."
    },
    {
      front: "Consecuencia sonora de la 'Guerra del Volumen' (Loudness War)",
      back: "Aplastamiento de la dinámica natural, pérdida de impacto en transitorios, sonido plano y fatiga auditiva prematura."
    },
    {
      front: "¿Qué mide la unidad moderna LUFS?",
      back: "La sonoridad percibida real por el oído humano integrando volumen promedio (RMS) y picos de presión (Full Scale)."
    },
    {
      front: "Efecto de la normalización de Spotify en másters sobrecomprimidos",
      back: "Atenúa la canción hasta su estándar (-14 LUFS), haciendo que suene sin dinámica y débil frente a pistas con volumen dinámico sano."
    },
    {
      front: "Comportamiento del oído según las Curvas de Fletcher-Munson a volumen bajo",
      back: "Prioriza de forma acusada las frecuencias medias (área de la voz humana) y atenúa la percepción de extremos graves y agudos."
    },
    {
      front: "Efecto de mezclar a presiones sonoras excesivamente altas",
      back: "Las curvas isofónicas se aplanan artificialmente, engañando al oído al percibir más graves y agudos de los que realmente tiene la mezcla."
    },
    {
      front: "Regla del 80/20 en el volumen de escucha en estudio",
      back: "Mezclar el 80% del tiempo a presiones acústicas moderadas/bajas y comprobar el impacto a volumen alto solo el 20% del tiempo."
    },
    {
      front: "Origen histórico del ecualizador (EQ)",
      back: "Creado en telecomunicaciones para corregir la pérdida de frecuencias de señal telefónica a lo largo de extensos tendidos de cable de cobre."
    },
    {
      front: "Limitación fundamental de un ecualizador",
      back: "Aumenta o reduce volumen en zonas espectrales existentes; no puede inventar frecuencias ausentes en la toma original."
    },
    {
      front: "Estructura de un Ecualizador Gráfico",
      back: "Conjunto de filtros con frecuencias y anchos de banda fijos distribuidos por octavas, controlados por deslizadores verticales."
    },
    {
      front: "Uso del Ruido Rosa en calibración de salas",
      back: "Emite energía balanceada en todas las frecuencias para medir picos y valles acústicos de la sala y aplicar una contracurva plana."
    },
    {
      front: "Precaución con plugins de calibración (SoundID Reference)",
      back: "Desactivar el plugin antes de exportar el archivo definitivo para evitar imprimir la contracurva correctiva del recinto en el master."
    },
    {
      front: "Los tres controles clave de un Ecualizador Paramétrico",
      back: "1. Frecuencia central (Hz), 2. Ganancia (+/- dB) y 3. Factor Q o ancho de banda (amplitud de la campana)."
    },
    {
      front: "Características de un Ecualizador Semiparamétrico",
      back: "El ancho de campana (Q) y/o las frecuencias centrales están fijos de fábrica, permitiendo al operador actuar únicamente sobre la ganancia."
    },
    {
      front: "Frecuencia fundamental vs. Armónicos de un instrumento",
      back: "La fundamental marca la altura de la nota musical y masa principal; los armónicos y formantes definen su color y timbre distintivo."
    },
    {
      front: "Frecuencias estratégicas del bombo acústico",
      back: "75 Hz a 90 Hz para el peso y profundidad de aire; 2.5 kHz a 3 kHz para el chasquido y definición del impacto de la maza."
    },
    {
      front: "Criterio de EQ en pistas individuales crudas",
      back: "Filtros quirúrgicos y ecualizadores con carácter o coloración que aporten actitud y limpien resonancias puntuales molestas."
    },
    {
      front: "Criterio de EQ en Buses de instrumentos (ej. Bus Batería)",
      back: "Ecualizadores de curvas suaves y musicales (tipo Pultec) para pulir el conjunto, endulzar agudos y redondear la masa global."
    },
    {
      front: "Concepto de Enmascaramiento Acústico en frecuencias medias",
      back: "Fenómeno por el cual instrumentos densos (guitarras, teclados, redoblante) ocultan la inteligibilidad de la voz al compartir el mismo carril espectral."
    }
  ]
};