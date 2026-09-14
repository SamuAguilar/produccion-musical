export const clase3 = {
  id: 3,
  title: "Flujo de Señal, Gain Staging y Cables Balanceados",
  summary: "Conversión AD/DA, controles del preamplificador, margen de headroom, posicionamiento de micrófonos y cancelación de ruido por fase.",
  sections: [
    {
      title: "El Flujo de Señal Físico en la Sala de Grabación",
      content: "Para tener el control de una sesión y diagnosticar problemas al instante, tenemos que dominar cada punto del recorrido de la señal desde la cabina hasta el software:\n\n1. Micrófono: Es el transductor primario que capta la energía acústica de la voz y genera un voltaje débil (Mic Level).\n2. Patchbay (Pachera): La central de conexiones del estudio donde desembocan todas las líneas físicas de la sala.\n3. Entrada de Micrófono (XLR): Ingresa a la interfaz o preamplificador dedicado para elevar el voltaje a nivel de línea.\n4. Protocolo de Comunicación Digital: El enlace físico e idioma por el cual la interfaz transfiere los paquetes de datos a la computadora. Usamos comúnmente USB para compatibilidad amplia o Thunderbolt para un ancho de banda y velocidad extremos en entornos profesionales.\n5. DAW (Digital Audio Workstation): El software multipista donde la señal digitalizada se graba y procesa.",
      bulletPoints: [
        { label: "Patchbay centralizado", text: "Permite rutear y puentear canales sin tener que conectar y desconectar cables detrás de los racks o consolas." },
        { label: "Protocolos digitales", text: "Thunderbolt y USB gestionan la latencia del buffer de entrada durante la toma." }
      ]
    },
    {
      title: "Medición Técnica: Escala Dorrough y Ganancia Sana",
      content: "Un error habitual en producción es guiarse únicamente por los picos visuales del DAW sin entender la densidad energética. El estándar en los estudios de referencia es el medidor Dorrough (Dorrough Loudness Monitor).\n\nEl punto de calibración estándar para grabar se fija en la escala de -18 dB. La señal vocal debe sostenerse de forma continua dentro de la zona verde (rango de persistencia normal) y reservar un margen de seguridad donde los transitorios más intensos jamás superen un techo de -6 dB de pico.\n\nSi el medidor indica que la señal entra demasiado baja o con riesgo de saturar, la corrección debe aplicarse exclusivamente en la perilla de ganancia del preamplificador físico o de la interfaz. Jamás toquemos el fader del canal en el DAW: mover el fader del software solo cambia el volumen de escucha en monitores, no el nivel real con el que la señal está siendo digitalizada e impresa en el disco.",
      bulletPoints: [
        { label: "Referencia Dorrough", text: "Calibrar en escala de -18 dB para asegurar un rango dinámico óptimo." },
        { label: "Margen de seguridad", text: "Mantener la energía en la franja verde y evitar superar los -6 dBFS de pico máximo." },
        { label: "Regulación de ganancia", text: "El nivel de grabación se ajusta en el previo analógico de entrada, nunca en el fader de la pista del DAW." }
      ]
    },
    {
      title: "Colorimetría y Topología de Preamplificadores",
      content: "El preamplificador no es un simple potenciómetro de ganancia; su circuitería electrónica 'impregna' de color armónico a la toma. Evaluamos tres perfiles tímbricos fundamentales:\n\n1. Preamplificador de Stock (Transparente): Es el previo integrado de serie en la interfaz. Ofrece una respuesta lineal, cristalina y neutra, ideal si buscamos registrar la fuente exactamente como suena en la sala sin colorear.\n2. Neve 1073 (Color Británico y Armónicos): Clásico indiscutido en la historia del rock y del pop. Introduce saturación armónica musical y peso contundente que rellena los medios-graves. Su selector de ganancia opera por pasos fijos (clics) de 5 dB, lo que condiciona un ajuste escalonado muy característico.\n3. Manley Voxbox (Calidez Valvular): Combina una respuesta suave y orgánica gracias a su circuito a válvulas, que otorga cuerpo y redondez en medios. Se trata de un Channel Strip integral que incorpora preamplificador, ecualizador pasivo y compresor optoelectrónico en un solo chasis.",
      bulletPoints: [
        { label: "Previos Transparentes", text: "Máxima fidelidad sin distorsión armónica agregada." },
        { label: "Neve 1073", text: "Transformadores de entrada que aportan pegada, textura gruesa y pasos de ganancia de 5 dB." },
        { label: "Manley Voxbox", text: "Calidez de válvulas en un canal completo de grabación de alta gama." }
      ]
    },
    {
      title: "Tecnología Unison: Interacción de Impedancia Real",
      content: "En plataformas como Universal Audio, la tecnología Unison va más allá de un plugin de procesamiento digital convencional.\n\nAl cargar una emulación de previo clásico (como un Neve, API o Manley) en la ranura Unison, la interfaz conmuta físicamente sus relés de entrada analógicos. Esto hace que el micrófono 'vea' la impedancia física exacta, la resistencia de carga y la curva de saturación del hardware original antes de la conversión digital. La señal se graba con ese color directamente desde la fuente: no es un efecto de postproducción intercambiable a posteriori; si cambiamos de emulador Unison, tenemos que volver a cantar la toma.",
      bulletPoints: [
        { label: "Acoplamiento físico", text: "Modifica la impedancia analógica de entrada para emparejarse con el micrófono." },
        { label: "Impresión en la toma", text: "El procesamiento queda grabado en el archivo de audio de forma destructiva." }
      ]
    },
    {
      title: "Técnica Vocal en Cabina, Monitoreo y Talkback",
      content: "Ningún preamplificador de boutique compensa una mala técnica frente al diafragma. El control del sonido comienza con la postura física y el confort del artista:\n\n• Gestión Dinámica Corporal: El cantante debe alejarse unos centímetros hacia atrás en pasajes intensos o estribillos y aproximarse en estrofas íntimas o susurros. Esto ayuda mecánicamente al preamplificador a mantener un nivel de señal estable.\n• Posicionamiento e Inclinación: Colocamos el micrófono de condensador a la altura de los ojos, inclinado ligeramente hacia abajo apuntando a la boca. Esta angulación desvía las ráfagas de aire de las consonantes plosivas (P, B) por debajo del diafragma, evitando ruidos de choque.\n• Filtro Antipop: Cumple una función de dispersión aerodinámica y un rol higiénico crítico: actuar como escudo contra la saliva, protegiendo las placas de condensador de la corrosión molecular.\n• Talkback y Monitoreo: El canal de Talkback nos permite comunicarnos desde el control con la cabina. La regla de oro es mutear el Talkback antes de dar 'Record' para evitar que ruidos de la consola se filtren en la toma. Asimismo, el cantante debe tener su propia mezcla balanceada de auriculares para rendir con comodidad.",
      bulletPoints: [
        { label: "Dinámica física", text: "Ajustar la distancia corporal según la intensidad para regular la presión sonora." },
        { label: "Angulación elevada", text: "Desvía plosivas mecánicas y preserva la claridad del registro." },
        { label: "Regla del Talkback", text: "Desactivar la comunicación al pulsar grabar para no ensuciar la captura." }
      ]
    },
    {
      title: "Tipologías de Micrófonos: Dinámicos, Condensador y Cinta",
      content: "La elección del transductor condiciona la respuesta a transitorios y la textura de la toma:\n\n1. Dinámicos (Bobina Móvil): Funcionan mediante una membrana solidaria a una bobina de cobre sumergida en un campo magnético. Son robustos, toleran niveles de presión sonora (SPL) muy altos sin romperse y no requieren alimentación eléctrica externa (con excepciones activas como el Aston Element). Estándar en cajas, amplificadores y directos.\n2. De Condensador (Capacitivos): Emplean dos placas metálicas muy próximas formando un condensador electrostático. Son ultrarrápidos en transitorios y detallados en agudos. Exigen alimentación Phantom Power (+48V) para polarizarse y energizar su previo interno. Estándar en voces principales (ej. Neumann U87, AKG C414, Rode NT1).\n3. De Cinta (Ribbon): Suspenden un filamento corrugado de aluminio dentro de un campo magnético. Brindan una respuesta sedosa y lineal muy similar a la curva de audición humana, eliminando asperezas. Los modelos pasivos (como el Royer R-121) son sumamente delicados: jamás activemos +48V en un micrófono de cinta pasivo porque la corriente rompería físicamente la lámina. Para evitar accidentes en el instituto se emplean alternativas activas (como el Rode NTR), que integran circuitería protegida.",
      bulletPoints: [
        { label: "Dinámicos", text: "Baja sensibilidad, resistencia a altos SPL, sonido con pegada y cuerpo." },
        { label: "Condensadores", text: "Alta sensibilidad, respuesta rápida en agudos y necesidad obligatoria de +48V." },
        { label: "Cinta Pasivos", text: "Respuesta suave y natural; riesgo crítico de destrucción por Phantom Power (+48V)." },
        { label: "Efecto de Proximidad", text: "Incremento acusado de frecuencias graves al aproximar la fuente a una cápsula cardioide." }
      ]
    }
  ],
  quiz: [
    {
      id: 1,
      question: "¿Cuál es la función principal del conversor A/D (Analógico a Digital) en la interfaz de audio?",
      options: [
        "Comprimir la dinámica de la señal para que no distorsione",
        "Transformar la corriente eléctrica analógica en código binario (ceros y unos)",
        "Elevar la señal de micrófono al nivel de línea (Line Level)",
        "Eliminar el ruido electromagnético de los cables"
      ],
      correct: 1,
      explanation: "El conversor A/D toma la variación de voltaje continuo y la cuantifica en muestras binarias (0 y 1) para que el DAW pueda procesarla."
    },
    {
      id: 2,
      question: "¿Qué tipo de preamplificador tiende a ser más rápido y transparente, capturando la fuente de manera más fiel?",
      options: [
        "Preamplificador Valvular",
        "Preamplificador Transistorizado",
        "Preamplificador Pasivo de Cinta",
        "Preamplificador de Modelado Dinámico"
      ],
      correct: 1,
      explanation: "Los circuitos a transistores suelen ofrecer una respuesta rápida y muy limpia (transparente), mientras que los valvulares añaden coloración y armónicos cálidos."
    },
    {
      id: 3,
      question: "¿Para qué sirve el botón 'Pad' (-15 dB o -20 dB) en un preamplificador?",
      options: [
        "Para invertir la polaridad de la señal cuando hay problemas de fase",
        "Para recortar las frecuencias graves no deseadas",
        "Para atenuar señales de entrada excesivamente potentes y evitar la saturación del circuito",
        "Para alimentar micrófonos de condensador con voltaje constante"
      ],
      correct: 2,
      explanation: "El Pad es un atenuador pasivo que reduce la señal antes de entrar al circuito del preamplificador, ideal para fuentes de alto volumen como un redoblante."
    },
    {
      id: 4,
      question: "¿Por qué debes tener extrema precaución al activar Phantom Power (+48V) con micrófonos Ribbon (de cinta pasivos)?",
      options: [
        "Porque invierte la polaridad acústica del diafragma",
        "Porque puede estirar o quemar físicamente la cinta de aluminio interna",
        "Porque descalibra los conversores de la interfaz",
        "Porque genera una compresión agresiva irreversible"
      ],
      correct: 1,
      explanation: "Los micrófonos de cinta pasivos no necesitan alimentación; una descarga de 48V en su transformador puede desgarrar físicamente su delgada cinta metálica."
    },
    {
      id: 5,
      question: "En la grabación digital, ¿cuál es el rango promedio ideal de Gain Staging para mantener un Headroom sano?",
      options: [
        "Promedio en -1 dB con picos tocando 0 dB",
        "Promedio entre -14 y -10 dBFS, con picos máximos alrededor de -6 dBFS",
        "Promedio en -30 dBFS con picos no superiores a -24 dBFS",
        "Mantener siempre la señal clipeando en rojo para aprovechar el piso de ruido"
      ],
      correct: 1,
      explanation: "Trabajar promediando -14 a -10 dBFS con picos de -6 dBFS deja un margen de seguridad (Headroom) suficiente para agregar EQ y compresión posterior sin saturar."
    },
    {
      id: 6,
      question: "¿Qué tipo de medición se enfoca en el promedio de energía y se asemeja más a cómo percibe el oído humano la sonoridad?",
      options: [
        "Peak Meter (Picos instantáneos)",
        "RMS (Root Mean Square)",
        "BPM (Beats Per Minute)",
        "Medición THD"
      ],
      correct: 1,
      explanation: "El medidor RMS calcula la raíz cuadrática media, representando el cuerpo y la energía sostenida más que los transitorios rápidos."
    },
    {
      id: 7,
      question: "Al microfonear una guitarra acústica, ¿cuál es el 'punto dulce' recomendado para lograr un sonido equilibrado y evitar exceso de graves?",
      options: [
        "Directamente apuntando a la boca de la guitarra",
        "Apuntando al traste 12 (unión del mástil con el cuerpo)",
        "En la parte posterior de la caja de resonancia",
        "Pegado a las clavijas de afinación"
      ],
      correct: 1,
      explanation: "Apuntar al traste 12 captura el balance perfecto entre el brillo de las cuerdas y la resonancia del cuerpo, evitando la saturación grave que produce la boca."
    },
    {
      id: 8,
      question: "¿Por qué un cable no balanceado (TS de 1/4\" o RCA) es susceptible al ruido en recorridos largos mayores a 5 metros?",
      options: [
        "Porque carece de cable caliente (vivo)",
        "Porque solo tiene 2 conductores (señal + masa) y capta interferencias electromagnéticas sin mecanismo de cancelación",
        "Porque invierte la polaridad en trayectos largos",
        "Porque reduce el voltaje a niveles de micrófono"
      ],
      correct: 1,
      explanation: "Al tener solo el vivo y la malla, el ruido electromagnético que penetra la malla ingresa directamente a la señal de audio sin posibilidad de anularse."
    },
    {
      id: 9,
      question: "¿Cómo elimina el ruido externo un cable balanceado (XLR o TRS) mediante cancelación de fase?",
      options: [
        "Filtra digitalmente las frecuencias mayores a 10 kHz",
        "Envía la señal en vivo y en frío (polaridad invertida); al recibirse, se reinvierte el frío y el ruido se cancela por oposición",
        "Aumenta la resistencia del cobre para repeler el electromagnetismo",
        "Aplica una compresión continua sobre los 3 conductores"
      ],
      correct: 1,
      explanation: "El ruido entra con la misma fase en ambos conductores internos; al reinvertir el cable 'frío' en el destino, las señales de audio se suman y el ruido se cancela."
    },
    {
      id: 10,
      question: "Si necesitas conectar un instrumento no balanceado (como un bajo o guitarra eléctrica) a lo largo de un escenario extenso:",
      options: [
        "Usas un cable TS de 25 metros sin procesar",
        "Usas una Caja Directa (DI Box) para convertir la señal en balanceada",
        "Activas el Phantom Power en el amplificador",
        "Colocas un filtro antipop en el jack del instrumento"
      ],
      correct: 1,
      explanation: "La Caja Directa adapta la impedancia y convierte la señal no balanceada del instrumento en una señal balanceada (XLR) capaz de viajar tramos largos sin ruido."
    }
  ],
  flashcards: [
    {
      front: "¿Qué función cumple el chip conversor AD/DA?",
      back: "Convierte corriente analógica en ceros y unos binarios (A/D) para el DAW, y código binario en electricidad (D/A) para los monitores."
    },
    {
      front: "¿Qué diferencia sonora existe entre un preamp a válvulas y uno transistorizado?",
      back: "El valvular añade calidez armónica y peso; el transistorizado es más veloz, lineal y transparente."
    },
    {
      front: "¿Para qué se usa el botón Pad (-15 / -20 dB) en el preamplificador?",
      back: "Para atenuar señales de entrada muy intensas (ej. batería) y evitar que saturen el circuito antes de regular la ganancia."
    },
    {
      front: "¿Qué función tiene el filtro HPF (High Pass Filter) en el preamplificador?",
      back: "Deja pasar agudos y recorta frecuencias subgraves para limpiar ruidos de sala y evitar sangrados indeseados."
    },
    {
      front: "¿Qué riesgo existe al aplicar Phantom Power (+48V) a un micrófono de cinta pasivo?",
      back: "Se puede estirar, deformar o quemar físicamente su delgada lámina de cinta interna."
    },
    {
      front: "¿Qué es el Gain Staging?",
      back: "El proceso de gestionar los niveles de ganancia a través de cada eslabón de la cadena para que la señal viaje limpia y sin distorsión."
    },
    {
      front: "¿Qué es el Headroom en el entorno digital?",
      back: "El margen de seguridad dinámico entre el pico más alto de la señal grabada y el límite máximo digital de distorsión (0 dBFS)."
    },
    {
      front: "¿Cuáles son los niveles recomendados de Gain Staging para grabar?",
      back: "Señal promediando entre -14 y -10 dBFS, manteniendo picos máximos controlados alrededor de -6 dBFS."
    },
    {
      front: "Diferencia fundamental entre medidor Peak y RMS",
      back: "Peak mide los picos instantáneos rápidos (transitorios); RMS mide el promedio continuo de energía perceptible por el oído."
    },
    {
      front: "¿Qué mide el estándar LUFS?",
      back: "La sonoridad global integrada combinando picos y medias según la curva de percepción auditiva humana."
    },
    {
      front: "¿Cómo influye colocar un micrófono On-axis (en eje) vs Off-axis (fuera de eje)?",
      back: "On-axis (al centro) resulta más brillante y agresivo; Off-axis (hacia los bordes) atenúa agudos y suena más suave."
    },
    {
      front: "¿Cuál es el 'Sweet Spot' al microfonear una guitarra acústica?",
      back: "Apuntar hacia el traste 12 (unión del mástil con el cuerpo) para obtener un balance natural sin saturación de graves."
    },
    {
      front: "¿Por qué no se debe apuntar el micrófono a la boca de la guitarra acústica?",
      back: "Porque acumula un exceso incontrolable de frecuencias graves y turbulencias de aire que ensucian la toma."
    },
    {
      front: "Estructura de un cable No Balanceado (TS / RCA)",
      back: "Cuenta con 2 conductores: uno central que transporta la señal y una malla externa que actúa como masa y retorno."
    },
    {
      front: "Estructura de un cable Balanceado (XLR / TRS)",
      back: "Cuenta con 3 conductores: dos cables internos (vivo y frío) y una malla exterior de blindaje conectada a tierra."
    },
    {
      front: "¿Cómo funciona la cancelación de ruido por fase en un cable balanceado?",
      back: "Envía la señal invertida por el conductor frío. Al llegar, se reinvierte: las señales de audio se suman y el ruido entrante se cancela."
    },
    {
      front: "Distancia máxima recomendada para un cable no balanceado (TS)",
      back: "Aproximadamente 5 a 6 metros; más allá de esa distancia la malla no evita la inducción de interferencias audibles."
    },
    {
      front: "¿Por qué los micrófonos requieren obligatoriamente conexión balanceada?",
      back: "Porque generan voltajes minúsculos que quedarían completamente tapados por el ruido electromagnético ambiental."
    },
    {
      front: "¿Qué función cumple una Caja Directa (DI Box)?",
      back: "Transforma una señal de instrumento no balanceada y de alta impedancia en una señal balanceada de baja impedancia apta para tramos largos."
    },
    {
      front: "¿Por qué es importante alejar al vocalista de las paredes durante la toma?",
      back: "Para evitar que las reflexiones tempranas y rebotes de la sala ensucien la respuesta de frecuencia en el micrófono."
    }
  ]
};