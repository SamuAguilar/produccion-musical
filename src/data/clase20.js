export const clase20 = {
  id: 20,
  title: "Ecualización Avanzada, Truco Pultec y Análisis de Curvas",
  summary: "Técnica del barrido de frecuencias, ecualización sustractiva vs. aditiva, liberación de headroom contra el rumble, el truco del Pultec EQP-1A y auditoría de plugins con Bertom EQ Curve Analyzer.",
  sections: [
    {
      title: "Arquitectura Espectral: Frecuencia Fundamental y Componentes Secundarios",
      content: "Para intervenir una pista con ecualización de forma profesional, no podemos mover perillas al azar; es obligatorio comprender qué partes físicas constituyen el espectro sonoro de cada instrumento.\n\n• La Frecuencia Fundamental: Es la onda primaria más baja en hercios (Hz) que posee la mayor energía y define la nota musical que estamos escuchando.\n• Frecuencias Secundarias (Armónicos, Ataque y Formantes): Son los sobretonos que confieren el timbre, la textura y el carácter articular al instrumento.\n\nEjemplo Práctico 1: El Bombo de Batería\nEl bombo presenta su frecuencia fundamental concentrada en los graves (típicamente entre 60 Hz y 80 Hz), responsable de mover el aire, transmitir el peso y la presión subsónica. Sin embargo, posee una segunda zona crítica situada en los medios-agudos (alrededor de los 2.5 kHz a 3 kHz), que representa el chasquido (slap) o transitorio de ataque mecánico del mazo golpeando la membrana plástica. Si solo atendemos a los graves, el bombo desaparecerá por completo en auriculares pequeños o altavoces de teléfono; necesitamos ambas zonas para que tenga peso y corte a la vez.\n\nEjemplo Práctico 2: El Bajo Eléctrico\nComparte el carril grave del bombo (80 Hz a 120 Hz) para sostener el cuerpo armónico de la composición. No obstante, al ejecutarse con técnicas percusivas como el slap o el pop (pellizco de cuerda), genera picos transitorios agresivos en los medios-altos por el rebote del entorchado metálico contra los trastes del mástil.",
      image: {
        placeholder: true,
        comment: "Analizador de espectro mostrando la fundamental grave (60-80 Hz) y el ataque de medios-agudos (2.5 kHz) en una pista de bombo."
      },
      bulletPoints: [
        { label: "Frecuencia Fundamental", text: "Establece la afinación tonal y concentra la masa de energía acústica." },
        { label: "Sobretonos y Transitorios", text: "Definen la articulación mecánica para que el instrumento no se pierda en la mezcla." },
        { label: "Dualidad de Frecuencias", text: "Trabajar de forma independiente el cuerpo basal y la presencia de ataque." }
      ]
    },
    {
      title: "Técnica Operativa: El Barrido de Frecuencias (Frequency Sweeping)",
      content: "El barrido de frecuencias es el procedimiento auditivo estándar utilizado para localizar resonancias molestas, asperezas tímbricas o la fundamental de un instrumento cuando no disponemos de analizadores de espectro visuales de alta resolución (como FabFilter Pro-Q 4) o cuando mezclamos en consolas analógicas.\n\nProtocolo de Ejecución Paso a Paso:\n1. Insertar un filtro tipo campana (Bell Filter) en el ecualizador paramétrico.\n2. Ajustar el factor Q (Ancho de Banda / Bandwidth) a un valor alto para que la campana sea muy estrecha y actúe de forma quirúrgica.\n3. Aumentar la ganancia (Boost) de esa campana de forma exagerada (+10 dB a +15 dB).\n4. Desplazar (barrer) lentamente la perilla de frecuencia de izquierda a derecha a lo largo de todo el espectro mientras se reproduce la pista en bucle.\n5. Escuchar atentamente los puntos de resonancia: Si buscamos la fundamental, identificaremos el punto exacto donde la nota musical salte con máxima potencia armónica. Si buscamos eliminar un tono molesto —como el sonido hueco y acartonado de un bombo cerca de los 300 Hz—, ubicaremos el punto donde ese defecto resulte insoportable y distorsionado; acto seguido, detenemos el barrido e invertimos la ganancia hacia valores negativos para atenuarlo.",
      image: {
        placeholder: true,
        comment: "Ecualizador paramétrico mostrando una campana ultra estrecha (Q alto) con ganancia elevada barriendo el espectro."
      },
      bulletPoints: [
        { label: "Campana Estrecha (Q Alto)", text: "Aislar zonas milimétricas del espectro sin alterar las frecuencias circundantes." },
        { label: "Exageración Temporal", text: "Aumentar el volumen artificialmente para que el defecto acústico se revele al oído." },
        { label: "Atenuación Inversa", text: "Invertir el potenciómetro hacia valores de corte una vez identificada la frecuencia problemática." }
      ]
    },
    {
      title: "Ecualización Sustractiva vs. Ecualización Aditiva",
      content: "En una mezcla profesional, la ecualización se divide metodológicamente en dos etapas complementarias:\n\nA. Ecualización Sustractiva (Correctiva):\nConsiste en limpiar, atenuar y extirpar frecuencias sobrantes o molestas que enturbian el sonido y consumen energía innecesaria.\n• El Fango y el Rumble Subgrave: Son vibraciones mecánicas y retumbes por debajo de los 30-40 Hz que no aportan información musical útil pero desplazan los conos de los monitores con extrema violencia.\n• Ganancia de Headroom (Margen Dinámico): Si un micrófono de bombo o bajo acumula 25 dB de rumble inútil en la zona infrasónica y lo eliminamos mediante un filtro paso altos (HPF, High Pass Filter), liberamos de inmediato 25 dB de energía en ese canal. En consecuencia, el bus máster recupera ese mismo espacio libre (Headroom), permitiendo subir el volumen general de la canción para que suene potente, compacta y con pegada sin entrar en distorsión ni encender los indicadores de saturación digital (clipping).\n• Herramienta Óptima: Se ejecutan con Ecualizadores Digitales transparentes (como FabFilter Pro-Q 4) por su precisión quirúrgica y linealidad de fase, recortando fango sin inyectar coloraciones armónicas parásitas.\n\nB. Ecualización Aditiva (Creativa y Musical):\nConsiste en realzar (boostear) zonas espectrales para aportar brillo, presencia, calidez o pegada sobre señales que ya fueron saneadas previamente con ecualización sustractiva.\n• Herramienta Óptima: Se emplean emulaciones de Ecualizadores Analógicos vintage (como Pultec, Neve o SSL), diseñados con transformadores y válvulas que enriquecen la señal con distorsión armónica musical al elevar su ganancia.",
      image: {
        placeholder: true,
        comment: "Comparativa entre un corte paso altos quirúrgico en ecualizador digital (liberación de headroom) frente a una curva de realce amplio en emulador analógico."
      },
      bulletPoints: [
        { label: "Cortes de Rumble (HPF)", text: "Eliminar energía subsónica por debajo de 40 Hz para recuperar margen dinámico en el máster." },
        { label: "EQ Digital Quirúrgica", text: "Atenuación transparente y precisa sin coloración para la fase sustractiva." },
        { label: "EQ Analógica Aditiva", text: "Realces amplios y armónicos musicales para la fase de embellecimiento estético." }
      ]
    },
    {
      title: "El Hardware Clásico: Pultec EQP-1A y el 'Pultec Trick'",
      content: "El Pultec EQP-1A es un legendario ecualizador pasivo a válvulas de la década de 1950, célebre por otorgar una solidez de graves y una sedosidad de agudos inigualables. Su diseño electrónico presenta una particularidad única en la sección de bajas frecuencias: permite activar simultáneamente los potenciómetros de realce (Boost) y de atenuación (Atten) sobre la misma frecuencia seleccionada.\n\nEl Famoso 'Truco Pultec' (Pultec Trick):\nEn la física de circuitos analógicos pasivos, las curvas de realce y de recorte no son simétricas ni comparten la misma frecuencia de corte exacta. Al seleccionar una frecuencia grave (como 60 Hz) y girar al mismo tiempo las perillas de Boost y Atten hacia arriba, los circuitos interactúan creando una curva compleja imposible de lograr con un ecualizador estándar:\n1. Un Realce Profundo y Redondo en Graves: Otorga un peso subgrave macizo y controlado al bombo o al bajo.\n2. Un Vaciado Inmediato en Medios-Bajos: Justo por encima de la frecuencia elegida (entre 200 Hz y 300 Hz), la atenuación genera un valle que limpia la zona del fango o sonido acartonado (mud) de la sala.\n\nComportamiento del Ancho de Banda (Bandwidth / Q) en Agudos:\nEn las altas frecuencias, el potenciómetro de Boost opera como un filtro tipo campana (Bell Filter), donde la perilla de Bandwidth ensancha o afina la curva. En cambio, el control de atenuación de agudos (Atten) funciona como un filtro de estantería (High Shelf), recortando progresivamente todo el extremo superior desde el punto seleccionado.",
      image: {
        placeholder: true,
        comment: "Curva característica del 'Truco Pultec' en analizador: realce masivo en 60 Hz seguido de una caída en 200-300 Hz generada al subir Boost y Atten simultáneamente."
      },
      bulletPoints: [
        { label: "Interacción Boost y Atten", text: "La asimetría de los circuitos pasivos crea un refuerzo en graves y un vaciado correctivo en medios-bajos." },
        { label: "Limpieza del Mud (200-300 Hz)", text: "Suprime el tono pastoso y acartonado mientras solidifica el impacto del instrumento." },
        { label: "Bandwidth en Agudos", text: "Modulación del factor Q en la campana de realce frente al comportamiento Shelf del recorte." }
      ]
    },
    {
      title: "Auditoría de Plugins: El Método Bertom EQ Curve Analyzer",
      content: "Uno de los errores más graves en producción es insertar emulaciones analógicas a ciegas sin saber qué modificaciones están aplicando realmente sobre el audio. Para auditar su comportamiento interno, utilizamos el plugin gratuito Bertom EQ Curve Analyzer mediante la técnica del 'Sándwich':\n\n1. Primera Instancia: Se inserta Bertom al inicio del canal configurado en modo 'Generador' (emite una señal de prueba de ruido rosa calibrada).\n2. Plugin Bajo Análisis: Se inserta el procesador que queremos auditar en el medio (por ejemplo, una emulación de Pultec o un procesador de dinámica como el Drawmer S73).\n3. Tercera Instancia: Se inserta otra instancia de Bertom al final configurada como 'Analizador Visual'.\n\nLa Revelación de las Emulaciones Analógicas:\nAl encender el plugin analógico con absolutamente todas sus perillas en cero (en plano), la gráfica revela que la emulación ya está modificando la respuesta en frecuencia: introduce pequeñas caídas en subgraves, resaltos en presencia y saturación armónica por el simple hecho de estar activo en la pista.\n\nAsimismo, procesadores dinámicos como el Drawmer S73 en modo 'Clarity' aplican automáticamente un realce masivo en agudos mientras comprimen. Conocer este comportamiento evita el error de añadir un ecualizador posterior para dar brillo, lo que sobrecargaría la mezcla de asperezas y sibilancias estridentes.",
      image: {
        placeholder: true,
        comment: "Configuración del método sándwich: Bertom Generador -> Plugin Analógico -> Bertom Analizador mostrando la curva de coloración oculta con parámetros en cero."
      },
      bulletPoints: [
        { label: "Método del Sándwich", text: "Medición en tiempo real mediante generador de ruido rosa y analizador de curva de transferencia." },
        { label: "Coloración en Reposo", text: "Las emulaciones analógicas alteran frecuencias y generan armónicos aun con sus controles en cero." },
        { label: "Prevención de Sobreprocesamiento", text: "Comprender la curva interna de los plugins para no duplicar ecualizaciones innecesarias." }
      ]
    }
  ],
  quiz: [
    {
      id: 1,
      question: "¿En qué consiste la técnica del 'barrido de frecuencias' para localizar resonancias molestas o la fundamental de un instrumento?",
      options: [
        "En aplicar un filtro paso bajos muy pronunciado y escuchar en mono",
        "En configurar un filtro campana con Q estrecho, elevar la ganancia al extremo y desplazar la frecuencia lentamente buscando dónde resuena o molesta el sonido",
        "En invertir la polaridad de la pista mientras se barre el fader de volumen",
        "En pasar un generador de ruido blanco por un compresor multibanda"
      ],
      correct: 1,
      explanation: "Al usar una campana angosta con ganancia exagerada, las resonancias indeseadas (como el sonido acartonado a 300 Hz) o la fundamental se magnifican inmediatamente al pasar por ellas, facilitando su identificación para luego atenuarlas o ajustarlas."
    },
    {
      id: 2,
      question: "¿Por qué la ecualización sustractiva (cortar frecuencias inútiles como el 'rumble' subsónico) es el secreto para lograr una mezcla con pegada y volumen?",
      options: [
        "Porque satura los transistores del convertidor digital generando armónicos de cinta",
        "Porque elimina energía inaudible de gran amplitud por debajo de 40 Hz, liberando decibeles de Headroom en el máster para poder subir el volumen general sin saturar",
        "Porque convierte la pista en monofónica automáticamente",
        "Porque compensa las cancelaciones de fase provocadas por los cables balanceados"
      ],
      correct: 1,
      explanation: "Las frecuencias subsónicas consumen una cantidad enorme de energía eléctrica y digital sin aportar definición musical; al filtrarlas con ecualización sustractiva, se recupera margen dinámico (headroom) en el bus máster."
    },
    {
      id: 3,
      question: "¿Qué tipo de herramientas se recomienda utilizar para la ecualización sustractiva y por qué?",
      options: [
        "Ecualizadores a válvulas vintage porque agregan saturación en las frecuencias bajas",
        "Ecualizadores digitales quirúrgicos (como FabFilter Pro-Q), ya que realizan cortes precisos y limpios sin introducir distorsión armónica ni color no deseado",
        "Pedaleras de guitarra conectadas en serie con cajas directas pasivas",
        "Exclusivamente ecualizadores semiparamétricos de consolas analógicas en vivo"
      ],
      correct: 1,
      explanation: "Para limpiar frecuencias parásitas o resonancias estrechas se necesita la máxima precisión y transparencia; un plugin digital quirúrgico corta con exactitud sin teñir la señal."
    },
    {
      id: 4,
      question: "¿Qué ocurre en los circuitos del mítico ecualizador Pultec EQP-1A al aplicar el 'Pultec Trick' (subir Boost y Attenuation a la vez en 60 Hz)?",
      options: [
        "Las perillas se cancelan exactamente entre sí dejando la señal idéntica",
        "Genera un aumento masivo y redondo en los subgraves e inmediatamente después produce un corte pronunciado en medios-bajos (200-300 Hz), limpiando el sonido acartonado",
        "Produce una distorsión abrasiva que rompe el parlante del monitor",
        "El filtro pasa automáticamente a comportarse como un shelving de agudos en 10 kHz"
      ],
      correct: 1,
      explanation: "Por la interacción analógica de sus bobinas y circuitos pasivos, las curvas de amplificación y corte no son idénticas; se solapan creando un refuerzo sólido en graves y un vaciado automático en la zona turbia o acartonada de los medios-bajos."
    },
    {
      id: 5,
      question: "En las frecuencias agudas del Pultec EQP-1A, ¿cómo operan respectivamente las perillas de ganancia (Boost) y atenuación (Atten)?",
      options: [
        "Ambas funcionan como filtros pasa altos idénticos",
        "El Boost opera como un filtro campana (Bell) cuyo ancho se regula con Bandwidth, mientras que el Atten opera como un filtro de estantería (Shelf)",
        "Ambas funcionan como filtros de muesca (Notch) hiperestrechos",
        "El Boost solo afecta a señales estéreo y el Atten a señales monofónicas"
      ],
      correct: 1,
      explanation: "El refuerzo de agudos en el Pultec es una campana interactiva con control de ancho de banda, mientras que la atenuación actúa como un shelving que recorta suavemente desde la frecuencia seleccionada hacia arriba."
    },
    {
      id: 6,
      question: "¿En qué consiste el método del 'Sándwich' utilizando el plugin gratuito Bertom EQ Curve Analyzer?",
      options: [
        "Colocar un compresor antes y después de dos ecualizadores idénticos",
        "Insertar Bertom como Generador (emite ruido rosa), luego el plugin que se desea auditar, y al final otra instancia de Bertom como Analizador visual",
        "Comprimir una señal mono y duplicarla en dos canales estéreo",
        "Enviar la señal a dos buses auxiliares paneados al 100% a los extremos"
      ],
      correct: 1,
      explanation: "Este ruteo permite medir con precisión matemática la respuesta en frecuencia de cualquier procesador analógico o digital, revelando su curva real y comportamiento oculto."
    },
    {
      id: 7,
      question: "¿Qué revela la auditoría de curvas al analizar emulaciones analógicas (como el Pultec o compresores clásicos) incluso con sus perillas en cero?",
      options: [
        "Que los plugins no consumen memoria RAM si no se mueven sus controles",
        "Que muchos de ellos ya están ecualizando y agregando distorsión armónica no lineal a la señal simplemente por estar activos en la cadena",
        "Que invierten la fase acústica cada 30 segundos",
        "Que el conversor A/D se apaga de forma preventiva"
      ],
      correct: 1,
      explanation: "El modelado de componentes reales incluye transformadores, válvulas y circuitos que imprimen una curva tonal y contenido armónico permanente, coloreando el audio desde el momento en que se insertan."
    },
    {
      id: 8,
      question: "Si utilizas un compresor como el Drawmer S73 en modo 'Clarity' y desconoces su curva interna, ¿qué error común cometerías en mezcla?",
      options: [
        "Filtrar todos los graves del bajo por accidente",
        "Agregar un ecualizador para dar brillo, arruinando la pista por exceso de agudos estridentes ya que el compresor los realza automáticamente",
        "Dejar la pista totalmente fuera de fase en el canal central",
        "Reducir el buffer size a 64 muestras"
      ],
      correct: 1,
      explanation: "Modos como 'Clarity' aplican un realce generoso en frecuencias agudas además de comprimir; si el ingeniero lo ignora y añade otro ecualizador para dar aire, terminará provocando fatiga auditiva por sobrebrillo."
    },
    {
      id: 9,
      question: "¿Cuál es la anatomía espectral típica de un bajo eléctrico tocado con técnica de 'Slap/Pop'?",
      options: [
        "Toda su energía está contenida exclusivamente entre 20 Hz y 50 Hz",
        "Cuerpo en el rango grave (80 Hz a 120 Hz) y transitorios rápidos muy intensos en la zona de medios-agudos por el chasquido y latigazo de la cuerda",
        "Ausencia total de frecuencias armónicas por encima de 500 Hz",
        "Frecuencia fundamental fija en 10 kHz"
      ],
      correct: 1,
      explanation: "El bajo comparte el peso subgrave con el bombo, pero el golpe percusivo del pulgar y el tirón de cuerda del slap proyectan picos agresivos en los medios-altos que deben ser tratados con ecualización y compresión."
    },
    {
      id: 10,
      question: "¿Cuál es el propósito y la herramienta predilecta para la Ecualización Aditiva en una mezcla profesional?",
      options: [
        "Eliminar resonancias estrechas con ecualizadores gráficos de 31 bandas",
        "Aumentar frecuencias para embellecer, dar cuerpo, calidez o brillo musical mediante emulaciones analógicas (como Pultec) sobre pistas previamente limpias",
        "Atenuar el sangrado de platillos en los micrófonos de toms",
        "Calibrar la respuesta acústica de los monitores de campo cercano"
      ],
      correct: 1,
      explanation: "La ecualización aditiva busca musicalidad y textura tímbrica; se realiza tras limpiar la señal y se beneficia del color armónico suave que entregan las emulaciones de circuitos vintage."
    }
  ],
  flashcards: [
    {
      front: "Diferencia entre frecuencia fundamental y frecuencias secundarias",
      back: "La fundamental define la nota y la masa de energía principal; las secundarias (armónicos y transitorios) aportan el ataque, textura y timbre distintivo."
    },
    {
      front: "Frecuencias clave en el bombo acústico",
      back: "Fundamental en 60-80 Hz para el peso y cuerpo; zona de 2.5 kHz para el 'slap' o ataque de la maza impactando el parche."
    },
    {
      front: "Pasos de la técnica del 'Barrido de Frecuencias'",
      back: "Filtro Bell, Q muy estrecho, ganancia al máximo y desplazamiento horizontal buscando el punto de máxima resonancia o molestia."
    },
    {
      front: "¿Qué es el 'Rumble' subsónico?",
      back: "Energía inútil en el extremo subgrave (bajo 40 Hz) producida por vibraciones mecánicas y rebotes que consume potencia sin aportar tono musical."
    },
    {
      front: "Impacto de recortar el Rumble en el Headroom del Máster",
      back: "Al suprimir graves inaudibles de gran amplitud se liberan decibeles en el bus principal, permitiendo subir el volumen general sin distorsión."
    },
    {
      front: "Herramienta ideal para Ecualización Sustractiva",
      back: "Ecualizadores digitales quirúrgicos (ej. FabFilter Pro-Q) por su precisión milimétrica y total transparencia sin distorsión armónica."
    },
    {
      front: "Herramienta ideal para Ecualización Aditiva",
      back: "Emulaciones de ecualizadores analógicos (ej. Pultec EQP-1A) por sus curvas musicales amplias y su coloración armónica agradable."
    },
    {
      front: "¿En qué consiste el 'Truco Pultec' (Pultec Trick)?",
      back: "Subir simultáneamente las perillas de Boost y Attenuation en la misma frecuencia grave (ej. 60 Hz)."
    },
    {
      front: "Efecto acústico del Truco Pultec en la señal",
      back: "Refuerza profundamente los graves y crea un corte inmediato en los medios-bajos (200-300 Hz), limpiando el sonido acartonado ('mud')."
    },
    {
      front: "Tipo de filtro de la perilla Boost en agudos del Pultec",
      back: "Filtro tipo campana (Bell) con ancho de banda variable mediante el control Bandwidth."
    },
    {
      front: "Tipo de filtro de la perilla Attenuation en agudos del Pultec",
      back: "Filtro tipo estantería (Shelf) que atenúa de forma continua desde la frecuencia seleccionada en adelante."
    },
    {
      front: "Configuración del 'Método Sándwich' con Bertom EQ Curve Analyzer",
      back: "1. Bertom (generador de ruido rosa) -> 2. Plugin analógico a examinar -> 3. Bertom (analizador gráfico visual)."
    },
    {
      front: "Revelación analógica al auditar plugins con perillas en cero",
      back: "Muchas emulaciones vintage modifican la respuesta de frecuencia e inyectan armónicos con solo estar insertadas en el canal."
    },
    {
      front: "Riesgo de ignorar el comportamiento del Drawmer S73 en modo 'Clarity'",
      back: "Añadir ecualización de agudos extra sin saber que el plugin ya produce un realce severo en esa zona, provocando fatiga auditiva."
    },
    {
      front: "Comportamiento del bajo eléctrico tocado con técnica Slap",
      back: "Demanda cuerpo en graves (80-120 Hz) y genera transitorios percusivos muy marcados en medios-altos por el chasquido metálico."
    },
    {
      front: "Zona típica del sonido 'acartonado' en tambores",
      back: "Alrededor de los 250 Hz a 350 Hz; área crítica para aplicar cortes sustractivos y ganar claridad."
    },
    {
      front: "Diferencia de objetivo: EQ Correctiva vs EQ Creativa",
      back: "La correctiva limpia imperfecciones y libera espacio; la creativa realza virtudes y aporta calidez y textura."
    },
    {
      front: "Ventaja del factor Q estrecho en barridos",
      back: "Aísla quirúrgicamente el armónico exacto o la resonancia parásita sin distorsionar el contexto musical aledaño."
    },
    {
      front: "Razón por la que los ecualizadores analógicos no se usan para cortes finos",
      back: "Poseen anchos de banda amplios y no lineales que modificarían zonas excesivas del espectro musical."
    },
    {
      front: "Regla de oro de la ecualización en mezcla",
      back: "Corta con precisión digital para ordenar la energía; añade con carácter analógico para vestir y emocionar."
    }
  ]
};