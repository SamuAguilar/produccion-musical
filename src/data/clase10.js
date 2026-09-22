export const clase10 = {
  id: 10,
  title: "Técnicas de Grabación y Física del Redoblante",
  summary: "Microfonía superior e inferior, gestión crítica de fase y polaridad (Ø), afinación espectral visual, técnica de Harding y control de sangrado del Hi-Hat.",
  sections: [
    {
      title: "El Micrófono Estándar: Shure SM57 y Criterio de Selección",
      content: "El redoblante (snare drum) es el componente de la batería que más define la identidad rítmica, la época y la estética de una producción musical. En la industria profesional, el Shure SM57 es el estándar absoluto para el parche superior por tres razones mecánicas y acústicas:\n\n1. Resistencia Mecánica y Tolerancia a Alto SPL: Al ser un micrófono dinámico de bobina móvil, soporta niveles de presión sonora (SPL, Sound Pressure Level) colosales sin distorsionar y tolera sin romperse el impacto accidental de las baquetas del baterista.\n2. Patrón Polar Cardioide: Su arquitectura rechaza la energía proveniente de su parte trasera (180°), lo cual resulta indispensable para aislar el tambor de las filtraciones (bleeding) de bombos y platos.\n3. Respuesta en Frecuencia: Posee una curva con realce natural en los medios-agudos (presencia entre 3 kHz y 6 kHz) que ayuda a que el redoblante corte con claridad y filo en la mezcla sin necesidad de sobreprocesar con ecualizadores.",
      image: {
        placeholder: true,
        comment: "Shure SM57 montado sobre el aro del redoblante apuntando al parche batidor."
      },
      bulletPoints: [
        { label: "Tolerancia Mecánica", text: "Chasis robusto capaz de resistir golpes directos de baqueta y altos picos de presión sonora." },
        { label: "Patrón Cardioide", text: "Atenuación trasera que limpia la señal de ruidos del bombo y rebotes de sala." },
        { label: "Pico de Presencia", text: "Curva de fábrica que entrega ataque y mordida de transitorio directa al previo." }
      ]
    },
    {
      title: "Posicionamiento Técnico Superior y Rechazo del Hi-Hat",
      content: "La colocación física de la cápsula actúa como el ecualizador primario y más natural: mover el micrófono un par de centímetros altera drásticamente el contenido tímbrico de la toma.\n\n• Ángulo de 45 Grados: Es la angulación de referencia. Al inclinar la cápsula apuntando hacia el centro del parche, se registra el equilibrio ideal entre el 'ataque' o chasquido seco del golpe de la baqueta y la resonancia del cuerpo.\n• Distancia al Aro: La posición habitual se ubica a unos 2 o 3 dedos (aproximadamente 3 a 5 cm) hacia el interior desde el aro hacia el parche.\n• Efecto de Proximidad: Cuanto más se aproxime la cápsula a la membrana batidora, mayor será el refuerzo en frecuencias bajas (sonido más grueso y con peso), aunque se reduce la captura del aire y la articulación global del instrumento.\n• Seguridad Operativa: El micrófono debe situarse fuera de la trayectoria física del baterista; un golpe que desvíe la cápsula arruinará la consistencia tímbrica entre tomas.\n• Rechazo del Hi-Hat mediante Punto Nulo: Como el SM57 es cardioide, su punto de máximo rechazo (punto nulo) se sitúa exactamente a sus espaldas (180°). El técnico debe orientar la parte trasera del micrófono apuntando directamente hacia el Hi-Hat. De esta manera, el sangrado del platillo queda atenuado mecánicamente en el canal del redoblante.\n• Montura por Clips (Ganchos de Aro): Para evitar la acumulación de trípodes y pies de micrófono en el suelo que limiten el movimiento de las piernas del músico, se pueden emplear ganchos o mordazas de aro (como los clips Mayapex) que sujetan el micrófono firmemente al hardware del tambor.",
      image: {
        url: "/images/clase10/clase10-posicionamiento-rechazo-hihat.webp",
        comment: "Geometría superior: orientación a 45° del SM57 y aprovechamiento del punto nulo posterior (180°) para cancelar el sangrado del Hi-Hat."
      },
      bulletPoints: [
        { label: "Angulación a 45°", text: "Equilibra el ataque del golpe en el centro con la resonancia periférica del parche." },
        { label: "Control de Proximidad", text: "Acercar la cápsula suma cuerpo en graves; alejarla integra el aire de la sala." },
        { label: "Cancelación del Hi-Hat", text: "Orientar la parte posterior del micrófono cardioide hacia el plato para suprimir su filtración." },
        { label: "Clips de Montaje", text: "Sistemas de fijación al aro que despejan el espacio físico alrededor del kit." }
      ]
    },
    {
      title: "Captura de la Bordona (Micrófono Inferior)",
      content: "Para obtener una estética de redoblante moderna, completa y con presencia, se implementa una técnica dual colocando un segundo micrófono en la parte inferior del tambor apuntando al parche resonante (Snare Bottom).\n\n• Objetivo Acústico: Capturar el crujido brillante, articular y metálico que emiten los alambres de la bordona al vibrar.\n• Criterio de Mezcla: Este canal inferior jamás se utiliza como fuente solista; se mezcla a un volumen subordinado por debajo del micrófono superior para inyectar definición y aire crujiente al impacto sordo del parche batidor.\n• Alternativas de Microfonía: Aunque suele emplearse un segundo SM57 dinámico por consistencia, en muchas producciones se prefiere utilizar un micrófono de condensador de diafragma pequeño (como el AKG C451). Su respuesta rápida ante transitorios captura con mayor extensión y detalle el espectro ultra-agudo de los alambres.",
      image: {
        placeholder: true,
        comment: "Micrófono inferior apuntando a los alambres de la bordona en la base del redoblante."
      },
      bulletPoints: [
        { label: "Función de la Bordona", text: "Aportar el crujido metálico y la textura aguda de los alambres entorchados." },
        { label: "Balance en DAW", text: "Canal secundario mezclado por debajo de la pista superior para dar brillo y mordida." },
        { label: "Condensadores de Diafragma Pequeño", text: "Uso de micrófonos como el AKG C451 para obtener transitorios ultra-rápidos en agudos." }
      ]
    },
    {
      title: "Gestión de Fase y Polaridad: Física de Micrófonos Enfrentados",
      content: "Este es el concepto físico-técnico más crítico en la captura de percusión. Cuando dos micrófonos apuntan en sentidos opuestos hacia una misma fuente (uno por arriba y otro por abajo), sus cápsulas experimentan el movimiento del aire de forma invertida:\n\n• El Conflicto Mecánico: Al golpear el parche superior con la baqueta, la membrana se desplaza físicamente hacia abajo. El micrófono superior interpreta este movimiento como una compresión positiva de aire (onda hacia arriba). En ese mismo instante exacto, ese desplazamiento empuja el aire alejándolo de la cápsula inferior, registrando una rarefacción o descompresión negativa (onda hacia abajo).\n• Cancelación Destructiva: Si ambas pistas se reproducen simultáneamente sin corregir su relación temporal, las ondas se restan entre sí por oposición de fase. El resultado acústico es un redoblante débil, sin graves, hueco y con un timbre nasal metálico desagradable.\n• La Solución (Inversión de Polaridad): Se debe invertir la Polaridad eléctrica del canal del micrófono inferior mediante el botón de fase en el preamplificador, la interfaz o el software (representado universalmente por el símbolo de un círculo tachado con una barra diagonal: Ø). Al conmutar la polaridad 180°, las dos señales pasan a empujar en la misma dirección, sumando su energía y recuperando el peso grave y la pegada contundente del tambor.\n• Comprobación Auditiva en Mono: Para confirmar la alineación de fase, se deben escuchar ambos canales sumados en Mono en el DAW y pulsar el botón Ø: la posición que entregue mayor volumen, presencia de graves y cuerpo será la posición correcta.",
      image: {
        url: "/images/clase10/clase10-fase-polaridad-redoblante.webp",
        comment: "Física de fase: cancelación por desplazamiento opuesto de aire y recuperación de pegada mediante inversión de polaridad (Ø)."
      },
      bulletPoints: [
        { label: "Mecánica del Golpe", text: "El parche desciende generando compresión positiva arriba y descompresión negativa abajo." },
        { label: "Cancelación por Fase", text: "Pérdida drástica de peso en frecuencias graves y medios si no se alinean las polaridades." },
        { label: "Símbolo de Polaridad (Ø)", text: "Conmutador de 180° en consolas e interfaces para sumar las formas de onda." },
        { label: "Chequeo en Mono", text: "La configuración con mayor pegada y plenitud tonal en graves determina la fase correcta." }
      ]
    },
    {
      title: "Afinación Visual y Correspondencia Tonal con el Tema",
      content: "Para integrar la batería como un elemento melódico dentro del arreglo y evitar que el redoblante compita o desentone con las armonías de guitarras y teclados, se busca que su frecuencia fundamental coincida con un intervalo clave de la canción:\n\n• Intervalos Armónicos Recomendados: La fundamental del redoblante debe afinarse para coincidir con la Tónica, la Tercera (mayor o menor según el clima) o la Quinta justa de la escala del tema.\n• Afinación Visual mediante Analizador Espectral: Se utiliza el analizador de espectro de alta resolución de un ecualizador digital (como FabFilter Pro-Q 4):\n  1. Detección de la Fundamental: Al golpear el redoblante, observamos el pico resonante más alto ubicado en la zona de medios (Octava 3, entre 180 Hz y 240 Hz).\n  2. Lectura en Frecuencia y Nota: El software muestra tanto el valor exacto en Hercios (Hz) como la nota musical asociada (por ejemplo, La a 220 Hz o Fa# a 185 Hz).\n  3. Calibración Mecánica: Si el analizador indica que el tambor está por debajo de la nota buscada, se ajustan uniformemente los tornillos del parche en cruz hasta que el pico visual coincida exactamente con la frecuencia objetivo.",
      image: {
        url: "/images/clase10/clase10-afinacion-visual-espectro.webp",
        comment: "Afinación visual en analizador espectral: calibración del pico fundamental en la Octava 3 (220 Hz / Nota La3)."
      },
      bulletPoints: [
        { label: "Integración Armónica", text: "Afinar la fundamental en la Tónica, Tercera o Quinta de la tonalidad de la canción." },
        { label: "Rango en Octava 3", text: "El redoblante de rock/pop debe residir entre 180 Hz y 240 Hz para tener cuerpo y definición." },
        { label: "Ajuste Asistido", text: "Uso del analizador espectral para comprobar que la tensión mecánica coincida con la nota en Hz." }
      ]
    },
    {
      title: "Criterios Avanzados: Dinámica, Condensadores y Técnica de Harding",
      content: "La gestión de matices tímbricos y la adaptación a diferentes estilos musicales exige soluciones acústicas específicas en el set:\n\n• Micrófonos de Condensador en el Parche Superior: Aunque el dinámico es el estándar por robustez, en géneros acústicos, jazz o baladas sutiles se puede emplear un micrófono de condensador de diafragma grande o pequeño arriba. Entrega una fidelidad de transitorios y una textura de escobillas inigualable, pero exige un baterista con excelente control dinámico, ya que el condensador captará mucho más sangrado de platillos.\n• Técnica de Harding (Microfonía al Casco): Cuando un redoblante resulta excesivamente duro, seco o hiriente al golpear el parche batidor, se puede aplicar la técnica de Harding. Consiste en apuntar el micrófono lateralmente hacia la madera o metal del casco (shell) en lugar del parche. Esto atenúa el chasquido punzante del plástico y captura una resonancia balanceada, más redonda y con cuerpo cálido.",
      image: {
        placeholder: true,
        comment: "Técnica de Harding: micrófono orientado hacia el casco lateral del redoblante para suavizar el ataque."
      },
      bulletPoints: [
        { label: "Condensadores en Jazz", text: "Mayor resolución para escobillas y golpes sutiles, a costa de mayor sangrado de platos." },
        { label: "Técnica de Harding", text: "Captura en el lateral del casco para suavizar redoblantes con transitorio excesivamente agresivo." },
        { label: "Jerarquía de Canales", text: "Si los canales son limitados, priorizar siempre el micrófono superior sobre el de la bordona." }
      ]
    }
  ],
  quiz: [
    {
      id: 1,
      question: "¿Por qué el Shure SM57 es el estándar por excelencia para microfonear la parte superior del redoblante?",
      options: [
        "Porque es un micrófono de cinta pasivo con figura de 8",
        "Por su resistencia a impactos mecánicos/altos SPL, patrón cardioide para aislar sangrados y realce en medios-agudos que da presencia",
        "Porque incorpora un convertidor A/D y compresor óptico dentro de su carcasa",
        "Porque requiere alimentación Phantom Power obligatoria para no distorsionar"
      ],
      correct: 1,
      explanation: "El SM57 soporta golpes directos accidentales de baqueta, tolera presiones sonoras extremas y su curva acentúa el ataque en los medios-altos sin procesamiento extra."
    },
    {
      id: 2,
      question: "Al posicionar el micrófono superior del redoblante a 45 grados y a 2-3 dedos del aro hacia el centro:",
      options: [
        "Se cancela la frecuencia fundamental del casco",
        "Se captura el ataque seco de la baqueta equilibrado con el cuerpo del tambor",
        "Se anula por completo el sonido del entorchado inferior",
        "El micrófono se vuelve omnidireccional automáticamente"
      ],
      correct: 1,
      explanation: "El ángulo de 45° orientado al centro del parche registra con precisión el impacto directo de la baqueta, preservando definición y pegada."
    },
    {
      id: 3,
      question: "¿Cómo debe aprovecharse el patrón polar cardioide del micrófono superior del redoblante para reducir el sangrado del Hi-Hat?",
      options: [
        "Apuntando la cápsula frontal directamente al borde del plato",
        "Orientando la parte posterior del micrófono (punto nulo de 180°) en dirección al Hi-Hat",
        "Colocando un cable no balanceado de 10 metros",
        "Inclinando el micrófono 90° hacia el suelo"
      ],
      correct: 1,
      explanation: "El patrón cardioide tiene su máximo rechazo a 180°; dirigir la cola del micrófono hacia el Hi-Hat minimiza drásticamente su filtración indeseada."
    },
    {
      id: 4,
      question: "¿Cuál es el objetivo acústico de colocar un segundo micrófono debajo del redoblante (Snare Bottom)?",
      options: [
        "Captar los subgraves de la Octava 1 producidos por el aro",
        "Registrar el crujido metálico y el brillo de los alambres de la bordona",
        "Monitorear la señal del baterista en vivo",
        "Sustituir por completo al micrófono superior en la mezcla final"
      ],
      correct: 1,
      explanation: "El micrófono inferior se encarga de captar la articulación brillante y el chasquido metálico de la bordona, sumándose en paralelo al micro superior."
    },
    {
      id: 5,
      question: "Al enfrentar dos micrófonos (uno arriba y otro abajo del redoblante), ¿por qué se produce una cancelación física de fase?",
      options: [
        "Porque ambos micrófonos consumen corriente Phantom simultáneamente",
        "Porque al golpear el parche superior este desciende (presión positiva), mientras que el inferior capta ese mismo alejamiento como presión negativa",
        "Porque la madera del casco absorbe los electrones de la señal",
        "Porque el cable del micrófono inferior invierte el orden de los bits"
      ],
      correct: 1,
      explanation: "Los diafragmas se mueven en direcciones opuestas respecto a la onda acústica inicial; si no se compensa, las frecuencias graves y medias se restan por desfase."
    },
    {
      id: 6,
      question: "¿Cómo se soluciona de inmediato el problema de cancelación de fase entre el micrófono superior y el inferior del redoblante?",
      options: [
        "Aumentando 10 dB en el fader del micrófono inferior",
        "Invirtiendo la polaridad (botón de fase Ø) en el canal del micrófono inferior",
        "Cambiando el parche batidor por uno hidráulico",
        "Alejando el micrófono superior a un metro de distancia"
      ],
      correct: 1,
      explanation: "Al presionar el botón de inversión de polaridad (Ø), la señal inferior se alinea en polaridad con la superior, sumando potencia y recuperando los graves perdidos."
    },
    {
      id: 7,
      question: "¿Cómo se identifica auditivamente que la polaridad del redoblante está bien ajustada al escuchar en mono?",
      options: [
        "El redoblante suena delgado, hueco y pierde todo el impacto en graves",
        "Al activar la inversión de polaridad el tambor gana cuerpo, volumen y graves contundentes",
        "Aparece una distorsión abrasiva en 15 kHz",
        "El sonido desaparece por completo del canal máster"
      ],
      correct: 1,
      explanation: "Al escuchar en mono y alinear la fase, la sumatoria acústica refuerza la respuesta en bajas frecuencias y el tambor adquiere peso y consistencia."
    },
    {
      id: 8,
      question: "¿Cómo se utiliza un ecualizador con analizador de espectro visual (ej. Pro-Q) para verificar la afinación física del redoblante?",
      options: [
        "Se aplica un filtro paso altos en 500 Hz para recortar armónicos",
        "Se observa el pico de la frecuencia fundamental en la Octava 3 y se ajustan uniformemente las torres hasta coincidir con la nota objetivo",
        "Se saturan las frecuencias medias para verificar si clipea",
        "Se limita la señal a -0.1 dBFS durante la prueba"
      ],
      correct: 1,
      explanation: "El analizador muestra en tiempo real el pico en Hz de la fundamental; si está desafinado respecto a la nota buscada, se calibran físicamente los tornillos."
    },
    {
      id: 9,
      question: "¿En qué intervalos armónicos respecto a la tonalidad de la canción se recomienda afinar la fundamental del redoblante?",
      options: [
        "En una segunda menor o séptima mayor",
        "En la Tónica, la Tercera o la Quinta nota de la escala del tema",
        "Siempre dos octavas por debajo del bombo",
        "Exclusivamente en notas microtonales intermedias"
      ],
      correct: 1,
      explanation: "Afinar en consonancias como la tónica, tercera o quinta permite que el golpe del redoblante encaje melódicamente con la tonalidad de la obra."
    },
    {
      id: 10,
      question: "Si el sonido del redoblante resulta excesivamente agresivo o duro al golpear el parche, ¿qué recurso técnico físico se puede aplicar?",
      options: [
        "La Técnica de Harding: microfonear el costado (casco/shell) del tambor en lugar de apuntar al parche",
        "Subir la ganancia del previo hasta saturar en rojo",
        "Quitar el micrófono superior y usar únicamente el de la bordona",
        "Usar un micrófono de cinta pasivo con Phantom Power activado"
      ],
      correct: 0,
      explanation: "La técnica de Harding capta la resonancia leñosa o metálica del casco, suavizando el chasquido punzante del punto de contacto directo baqueta-parche."
    }
  ],
  flashcards: [
    {
      front: "¿Por qué el Shure SM57 lidera la microfonía de redoblante?",
      back: "Por su extrema robustez ante baquetazos, tolerancia a presiones sonoras muy altas (SPL), patrón cardioide y presencia clara en medios-altos."
    },
    {
      front: "Ángulo y distancia estándar para el micro superior de redoblante",
      back: "Ángulo de 45° apuntando hacia el centro del parche, situado a 2 o 3 dedos de distancia hacia el interior del aro."
    },
    {
      front: "¿Cómo aprovechar el punto nulo cardioide contra el sangrado del Hi-Hat?",
      back: "Orientando la parte trasera del micrófono (180°) directamente en dirección al Hi-Hat para aislar el plato del canal del redoblante."
    },
    {
      front: "Función del micrófono inferior (Snare Bottom)",
      back: "Capturar el brillo articulado y el crujido metálico de los alambres de la bordona; se mezcla en paralelo con la señal superior."
    },
    {
      front: "¿Qué genera el problema de fase entre micro superior e inferior?",
      back: "El parche batidor baja al recibir el golpe (presión positiva), mientras que el micro inferior percibe ese mismo movimiento alejándose (presión negativa)."
    },
    {
      front: "¿Cómo suena un redoblante con fase cancelada?",
      back: "Flaco, hueco, sin peso en graves ni pegada, con una textura metálica desagradable."
    },
    {
      front: "Solución técnica para el desfase en el redoblante",
      back: "Invertir la polaridad de la señal inferior pulsando el conmutador de fase (símbolo Ø) en la consola, previo o DAW."
    },
    {
      front: "Símbolo universal de inversión de polaridad",
      back: "Un círculo atravesado por una línea diagonal (Ø)."
    },
    {
      front: "Prueba auditiva en mono para verificar la fase del redoblante",
      back: "Escuchar en mono y conmutar la polaridad: la posición correcta es aquella donde el tambor suma cuerpo y graves contundentes."
    },
    {
      front: "¿Cómo afinar el redoblante con un ecualizador espectral (Pro-Q)?",
      back: "Se golpea el tambor, se identifica el pico de la frecuencia fundamental en Octava 3 y se ajustan las torres hasta alcanzar la frecuencia de la nota buscada."
    },
    {
      front: "Intervalos musicales recomendados para afinar el redoblante",
      back: "Afinar la fundamental en la Tónica, Tercera o Quinta de la tonalidad de la canción."
    },
    {
      front: "¿En qué consiste la técnica de Harding en redoblante?",
      back: "Ubicar el micrófono apuntando al costado del casco (shell) en lugar del parche para suavizar un ataque excesivamente cortante o duro."
    },
    {
      front: "Ventaja de usar clips de montaje en el aro (ej. Mayapex)",
      back: "Elimina pies de micrófono voluminosos, optimiza el espacio y da mayor libertad física al baterista."
    },
    {
      front: "¿Cuándo usar micrófono de condensador en redoblante?",
      back: "En estilos de alta dinámica como el jazz con bateristas de toque controlado, asumiendo mayor sangrado de los platillos."
    },
    {
      front: "Alternativa de microfonía para la bordona (Snare Bottom)",
      back: "Micrófono de condensador de diafragma pequeño (ej. AKG C451) para capturar mayor definición y detalle en los alambres metálicos."
    },
    {
      front: "Efecto de proximidad en el micrófono superior",
      back: "A menor distancia del parche se incrementan los graves (sonido más grueso), pero se reduce la captación del aire del instrumento."
    },
    {
      front: "Prioridad en la microfonía del redoblante",
      back: "Si los canales son limitados, priorizar siempre el micrófono superior del parche, que aporta el 80% del cuerpo y definición."
    },
    {
      front: "Riesgo de ubicar el micrófono en la trayectoria de la baqueta",
      back: "Un impacto accidental descalibra la angulación, altera la respuesta en frecuencias y compromete la uniformidad de la toma."
    },
    {
      front: "Octava de trabajo natural para la fundamental del redoblante",
      back: "Octava 3 (~180 Hz a 240 Hz), asegurando pegada nítida sin enturbiar los graves del bombo."
    },
    {
      front: "Máxima de captura profesional en redoblante",
      back: "Un SM57 angulado a 45°, fuera de la línea de golpeo, y polaridad invertida en la bordona para sumar energía acústica."
    }
  ]
};