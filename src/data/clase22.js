export const clase22 = {
  id: 22,
  title: "Ecualización Práctica II: Redoblante, Toms, Overheads y Bus Maestro",
  summary: "Función Ghost en compuertas, bandas dinámicas, Air Band en Hi-Hat/Ride, Amek EQ 200 con Mono Maker y TMT en toms, filtrado de Overheads, micro de sala y Glue EQ con Avalon 737.",
  sections: [
    {
      title: "Filosofía de la Ecualización y Criterio de No Intervención",
      content: "Al encarar la segunda fase de ecualización en baterías acústicas, el principio rector es la templanza técnica. Un error común en ingenieros principiantes es encadenar ecualizadores por simple inercia o costumbre visual. La verdadera madurez en mezcla radica en saber cuándo una pista no necesita ser procesada. Si la etapa de grabación (tracking) en el estudio fue rigurosa —utilizando la microfonía adecuada, parches asentados y fases alineadas—, el instrumento apenas requerirá intervenciones mínimas. La regla de oro es 'preguntarle a la pista' qué carencia presenta antes de mover un solo potenciómetro. Además, al inicio de la sesión se debe auditar la alineación de fase temporal mediante plugins especializados como Sound Radix Auto-Align, el cual calcula los milisegundos de retardo entre micrófonos cercanos y aéreos, logrando que los graves se sumen con solidez y el impacto se vuelva compacto. Como compuerta inteligente de alta gama se destaca también el Oxford Drum Gate 2 de Sonnox.",
      image: {
        placeholder: true,
        comment: "Interfaz de Sound Radix Auto-Align mostrando la correlación de fase y el cálculo de retardo en muestras sobre el kit de batería."
      },
      bulletPoints: [
        { label: "Criterio de No Intervención", text: "Evitar el sobreprocesamiento sistemático si la captura original en la sala fue óptima." },
        { label: "Auto-Align en Vivo", text: "Alineación de micro-retardos que consolida el cuerpo grave y la pegada del set acústico." },
        { label: "Oxford Drum Gate 2", text: "Procesador de referencia para discriminar transitorios y aislar tambores con precisión espectral." }
      ]
    },
    {
      title: "Tratamiento del Redoblante: Snare Top, Notas Fantasma y Bandas Dinámicas",
      content: "El redoblante se registra mediante un sistema dual que abordamos de forma diferenciada:\n\nA. Redoblante Superior (Snare Top):\n• Gestión de Sangrado con Silencer (Función Ghost): Para aislar el tambor de los platos circundantes sin amputar la interpretación del baterista, es mandatorio encender la función 'Ghost' en el plugin Silencer de Black Salt Audio. Las notas fantasma (ghost notes) son golpes sutiles de baqueta intercalados entre los acentos principales que definen el 'groove' y balance rítmico del tema; una compuerta tradicional las suprimiría por caer debajo del umbral, pero el algoritmo inteligente las preserva intactas.\n• Diagnóstico Espectral en FabFilter Pro-Q 4: La gráfica revela una pronunciada caída natural por debajo de su frecuencia fundamental (ubicada en 211 Hz), lo que certifica que no hay acumulación de retumbe mecánico (rumble) que obligue a aplicar filtros paso altos invasivos.\n• Carácter Analógico con API EQ: Como la señal está limpia, se inyecta color armónico mediante la emulación del ecualizador clásico API (Automated Processes, Inc.). Su circuitería discreta aporta mordida, pegada frontal y un empuje contundente en el rango medio.\n• Bandas Dinámicas Correctivas: En el ecualizador digital Pro-Q 4 se configura una banda dinámica sobre los 211 Hz. Funciona como un ecualizador quirúrgico interactivo: la banda se mantiene inactiva en pasajes suaves y solo atenúa decibeles cuando el baterista impacta con máxima fuerza, evitando que el parche sature la mezcla sin quitarle grosor al cuerpo.\n\nB. Redoblante Inferior (Snare Bottom / Bordona):\nEsta pista capta predominantemente ruido blanco y sangrado masivo del bombo. Se procesa con Silencer en modo 'Bordona' y se le aplica un filtro paso altos (HPF, High Pass Filter) agresivo para eliminar por completo la fundamental y resonancia grave del bombo colado. Su objetivo técnico no es dar cuerpo, sino aportar el crujido metálico y agudo de los alambres al sumarse por debajo del micrófono superior.",
      image: {
        placeholder: true,
        comment: "Esquema del Snare Top procesado con banda dinámica en 211 Hz y emulación de API EQ, contrastado con el HPF extremo en el canal de la bordona."
      },
      bulletPoints: [
        { label: "Modo Ghost en Silencer", text: "Conserva las notas fantasma suaves esenciales para la musicalidad del groove." },
        { label: "Bandas Dinámicas en Pro-Q 4", text: "Atenúan resonancias graves exclusivamente cuando el golpe supera el umbral de volumen." },
        { label: "Coloración API EQ", text: "Agresividad y presencia en medios para situar el redoblante al frente del plano auditivo." },
        { label: "HPF en Snare Bottom", text: "Eliminación absoluta de graves para dejar pasar únicamente el crujido de los entorchados." }
      ]
    },
    {
      title: "Esculpido del Hi-Hat y el Platillo Ride: Control de Asperezas y Air Band",
      content: "Los platos directos suelen registrarse con estridencias en la zona de medios-agudos que agotan la audición si no se tratan con criterio:\n\n• El Canal del Hi-Hat:\nEl micrófono capturó un timbre excesivamente hiriente y metálico. En primer lugar se ejecutaron recortes sustractivos quirúrgicos con Pro-Q 4 para mitigar las frecuencias punzantes. Acto seguido se insertó el ecualizador Maag EQ4 para utilizar su célebre función 'Air Band' (banda de aire). La Air Band no es una ecualización estándar: es un filtro de estantería muy abierto que realza suavemente frecuencias ultra-altas (por encima de 10 kHz a 20 kHz), inyectando un brillo dulce, tridimensional y cristalino sin devolver la aspereza áspera previamente recortada.\n\n• El Platillo Ride:\nEl micrófono dedicado al Ride presentaba un carácter excesivamente oscuro, pesado y sin definición de campana. Se replicó la cadena del Hi-Hat: recortes de frecuencias acartonadas con FabFilter Pro-Q 4 y activación de la Air Band en el Maag EQ4 para otorgarle ligereza, apertura y un ataque limpio de baqueta que no ensucie el plano estéreo.",
      image: {
        placeholder: true,
        comment: "Interfaz del ecualizador Maag EQ4 destacando el control de la Air Band operando a 10 kHz en los canales de Hi-Hat y Ride."
      },
      bulletPoints: [
        { label: "Sustracción Previa", text: "Extirpar picos metálicos hirientes antes de aplicar cualquier realce tímbrico." },
        { label: "Maag EQ4 y Air Band", text: "Realce abierto en el extremo agudo que aporta aire cristalino sin dureza auditiva." },
        { label: "Rescate del Ride", text: "Apertura espectral para devolver articulación y brillo a un platillo naturalmente oscuro." }
      ]
    },
    {
      title: "Tratamiento de Toms: Amek EQ 200, Tecnología TMT y Mono Maker",
      content: "Al abordar los tambores secundarios (Rack Tom y Floor Tom), la regla es no ecualizarlos con curvas desconectadas para preservar su coherencia tímbrica conjunta. Al auditar la grabación original, la caída de frecuencias hacia los subgraves demostró una captura impecable sin fango.\n\nPara su procesamiento se implementa el plugin Amek EQ 200 (de Plugin Alliance), un procesador de precisión que combina ergonomía digital con modelado de transformadores analógicos. En este canal se activan dos herramientas indispensables:\n\n1. Función Mono Maker:\nEn una mezcla estéreo, los toms se panean a izquierda y derecha del panorama. Si las frecuencias graves de estos tambores quedan abiertas en estéreo, generarán cancelaciones de fase severas y restarán energía al centro de la mezcla. La herramienta Mono Maker soluciona este conflicto forzando a que todo el contenido espectral situado por debajo de una frecuencia de corte elegida (como 560 Hz) se colapse estrictamente al centro en Mono, mientras que todo el ataque y armónicos superiores permanecen en estéreo amplio.\n\n2. Tecnología TMT (Tolerance Modeling Technology):\nDesarrollada por Brainworx para el Amek EQ 200, la tecnología TMT modela matemáticamente las tolerancias de desviación de componentes reales (resistencias y condensadores que varían entre un 1% y un 5% en consolas físicas). Al asignar distintos canales virtuales TMT al Tom 1 y al Tom 2, los canales adquieren sutiles imperfecciones y variaciones de fase orgánicas idénticas a las de una mesa de mezcla de gran formato, enriqueciendo la musicalidad.",
      image: {
        placeholder: true,
        comment: "Plugin Amek EQ 200 señalando el selector Mono Maker fijado en 560 Hz y el módulo TMT asignando canales analógicos diferenciados."
      },
      bulletPoints: [
        { label: "Mono Maker en 560 Hz", text: "Fuerza los graves a mono para evitar problemas de fase y deja los armónicos abiertos en estéreo." },
        { label: "Tecnología TMT", text: "Simulación de tolerancias analógicas entre canales que aporta microvariaciones musicales." },
        { label: "Coherencia de Toms", text: "Tratamiento tímbrico balanceado para que los recorridos de baquetas no sufran saltos tonales." }
      ]
    },
    {
      title: "Overheads y Micrófono de Sala (Room Mic): Espacialidad y Control Dinámico",
      content: "La gestión de los micrófonos de ambiente y aéreos define el espacio tridimensional de la batería:\n\n• Overheads (Aéreos):\nLos micrófonos de platillos captan inevitablemente un sangrado masivo del redoblante. Si este cuerpo grave no se retira, se sumará descontroladamente al canal directo duplicando el volumen de medios-graves de forma turbia. Se aplica un filtro paso altos (HPF) agresivo calibrado en 270 Hz para despojar a los aéreos del cuerpo de los tambores. Para domesticar los impactos hirientes de platillos Crash, se inserta una banda espectral dinámica en FabFilter Pro-Q 4 que atenúa los ultra-agudos exclusivamente durante los golpes intensos, complementándose luego con el brillo suave del Maag EQ4.\n\n• Micrófono de Sala (Room Mic):\nEs un micrófono situado a gran distancia que absorbe la reverberación natural y el aire acústico del recinto. Por su condición lejana, no debe competir con los micrófonos cercanos (Close Mics) ni generar picos dinámicos impredecibles. Se procesa insertando múltiples bandas dinámicas para aplanar picos resonantes, se colorea sutilmente mediante un ecualizador Solid State Logic (SSL) y se balancea a un volumen muy bajo en la mezcla: su función no es estar al frente, sino brindar un colchón de reverberación física que arrope a la batería seca.",
      image: {
        placeholder: true,
        comment: "Gráfica de Pro-Q 4 en Overheads con HPF en 270 Hz y banda espectral dinámica en agudos, sumado al ruteo sutil del Room Mic."
      },
      bulletPoints: [
        { label: "HPF en 270 Hz en Overheads", text: "Elimina el cuerpo del redoblante en aéreos para evitar que se engorde artificialmente la mezcla." },
        { label: "Filtro Espectral Dinámico", text: "Atenúa transitorios agudos abrasivos de platillos solo cuando el golpe excede el umbral." },
        { label: "Room Mic Subordinado", text: "Reverberación natural procesada con EQ dinámico y situada a bajo volumen detrás del kit." }
      ]
    },
    {
      title: "Master Drum, Amalgama con Avalon 737 y Ley de Gain Staging",
      content: "La etapa culminante de la batería reúne las pistas individuales en un canal agrupador estéreo común denominado 'Master Drum' (o Bus de Batería):\n\n• Ecualización Global de Amalgama ('Glue EQ') con Avalon 737:\nUna vez que los tambores individuales ya poseen ataque, limpieza y pegada, el bus maestro no debe someterse a ecualizaciones agresivas que despedacen la fase. El objetivo es cohesionar o 'pegar' (glue) todos los elementos en un solo instrumento vivo. Se elige una emulación del canal clásico a válvulas Avalon VT-737sp. Sus circuitos optoelectrónicos y de bulbos entregan curvas de campana muy anchas, abiertas y suaves, aportando calidez aterciopelada en graves y un aire sedoso de alta fidelidad (Hi-Fi) sin alterar el balance interno.\n\n• La Ley Inquebrantable del Gain Staging en Ecualización:\nAl insertar cualquier ecualizador, es obligatorio cumplir la regla de oro: el volumen de entrada (Input Gain) debe ser exactamente idéntico al volumen percibido de salida (Output Gain).\n\nSi aplicas realces en graves y agudos, la señal incrementará mecánicamente su nivel en decibeles. Si no compensas esa ganancia reduciendo el potenciómetro de Output del plugin, tu cerebro se autoengañará mediante un sesgo psicoacústico creyendo que la pista 'suena mejor' simplemente porque 'suena más fuerte'. Además, ese exceso de ganancia saturará los compresores y limitadores posteriores en la cadena, devorándose el margen dinámico (Headroom) de la mezcla general.",
      image: {
        placeholder: true,
        comment: "Esquema del Master Drum con inserción del Avalon 737 y vúmetro mostrando la compensación de Output Gain para mantener el Gain Staging parejo."
      },
      bulletPoints: [
        { label: "Glue EQ en Master Drum", text: "Uso del Avalon 737 con curvas amplias a válvulas para amalgamar el set sin agresividad." },
        { label: "Compensación de Output", text: "Reducir la salida del ecualizador para neutralizar el aumento de volumen artificial." },
        { label: "Prevención del Sesgo Auditivo", text: "Comparar con Bypass manteniendo el mismo volumen para juzgar la mejora tímbrica real." }
      ]
    }
  ],
  quiz: [
    {
      id: 1,
      question: "Al utilizar el plugin Silencer en el micrófono superior del redoblante (Snare Top), ¿por qué es indispensable activar la función 'Ghost'?",
      options: [
        "Para invertir automáticamente la polaridad en 180 grados",
        "Para preservar las notas fantasma (golpes suaves de articulación entre acentos) que una compuerta tradicional cortaría, destruyendo el groove",
        "Para saturar los transitorios en 2.5 kHz con armónicos valvulares",
        "Para transformar la señal analógica en un patrón MIDI monofónico"
      ],
      correct: 1,
      explanation: "Las notas fantasma poseen una amplitud muy baja comparada con los golpes secos principales; activar la detección de ghost notes impide que el algoritmo las confunda con sangrado de fondo y las mutée."
    },
    {
      id: 2,
      question: "¿Cómo funciona y qué ventaja aporta una 'banda dinámica' configurada en el ecualizador Pro-Q 4 sobre la fundamental del redoblante (211 Hz)?",
      options: [
        "Actúa como un micro-compresor selectivo que atenúa la resonancia solo cuando el golpe excede un umbral, controlando picos sin matar el tono constante",
        "Aumenta el ancho de banda Q en 12 dB de forma ininterrumpida",
        "Convierte la pista en monofónica por debajo de 500 Hz",
        "Añade distorsión armónica modelada por transformadores"
      ],
      correct: 0,
      explanation: "A diferencia de un corte estático que adelgaza el tambor en pasajes suaves, la banda dinámica solo interviene cuando el baterista golpea con excesiva fuerza, conteniendo la resonancia sin restar cuerpo natural."
    },
    {
      id: 3,
      question: "En el micrófono inferior del redoblante (Snare Bottom o Bordona), ¿cuál es el filtrado sustractivo primario indispensable?",
      options: [
        "Un filtro pasa bajos en 5 kHz para apagar el crujido metálico",
        "Un filtro pasa altos agresivo para suprimir por completo la fundamental y el sangrado del bombo, conservando únicamente el crujido brillante de los alambres",
        "Un realce tipo campana de +10 dB en 100 Hz",
        "Una compuerta de ruido sin umbral dinámico"
      ],
      correct: 1,
      explanation: "La cápsula inferior capta vibración sucia de los tambores graves y el impacto del bombo; aplicar un filtro pasa altos severo elimina esa masa confusa y deja el brillo articular de la bordona."
    },
    {
      id: 4,
      question: "Para compensar la estridencia del Hi-Hat o rescatar un platillo Ride excesivamente opaco, ¿qué función distintiva ofrece el ecualizador Maag EQ4?",
      options: [
        "Un compresor multibanda óptico de tres etapas",
        "La función 'Air Band', que realza suavemente frecuencias ultra-altas (ej. 10 kHz o superior) aportando brillo cristalino y apertura sin asperezas",
        "Un conmutador para transformar señales estéreo en Mid/Side",
        "Un filtro pasa altos con caída de 96 dB por octava"
      ],
      correct: 1,
      explanation: "La Air Band del Maag EQ4 es un diseño patentado de estantería muy musical y abierta que eleva el extremo agudo generando sensación de aire y amplitud limpia sin la fatiga de campanas estrechas."
    },
    {
      id: 5,
      question: "En el ecualizador Amek EQ 200 aplicado a los Toms, ¿qué problema de fase resuelve la herramienta 'Mono Maker'?",
      options: [
        "Elimina las frecuencias por encima de 10 kHz en los platos",
        "Fuerza a que todas las frecuencias por debajo del punto seleccionado (ej. 560 Hz) se sumen estrictamente al centro en Mono, evitando desfasajes graves al panear los tambores",
        "Convierte la batería acústica en un kit de percusión electrónica",
        "Invierte la polaridad eléctrica de los cables balanceados"
      ],
      correct: 1,
      explanation: "Los toms suelen ubicarse abiertos en el panorama estéreo; hacer que su cuerpo y fundamentales graves sean mono por debajo del punto de cruce previene cancelaciones destructivas al reproducir en mono o cortar vinilo."
    },
    {
      id: 6,
      question: "¿Qué aporta la tecnología TMT (Tolerance Modeling Technology) presente en procesadores como el Amek EQ 200?",
      options: [
        "Calcula la latencia de la memoria RAM en tiempo real",
        "Modela las tolerancias y variaciones microscópicas de componentes electrónicos entre canales independientes de una consola analógica, entregando imperfecciones musicales orgánicas",
        "Elimina al 100% el sangrado de los micrófonos de condensador",
        "Compensa automáticamente la ganancia RMS a -14 LUFS"
      ],
      correct: 1,
      explanation: "En consolas físicas reales nunca existen dos tiras de canal idénticas debido a tolerancias en condensadores y resistencias; el TMT modela esas desviaciones para conferir tridimensionalidad analógica real."
    },
    {
      id: 7,
      question: "¿Por qué se aplica un filtro Pasa Altos agresivo hasta los 270 Hz en los micrófonos aéreos (Overheads) durante la mezcla?",
      options: [
        "Para eliminar el sonido de los platillos crash y ride",
        "Para suprimir el cuerpo grave invasivo del redoblante y toms en los aéreos, evitando que su suma descontrole el balance de volumen del tambor principal",
        "Para apagar la respuesta de los transitorios agudos",
        "Para corregir ruidos parásitos de 50 Hz del suministro eléctrico"
      ],
      correct: 1,
      explanation: "Los micrófonos aéreos captan una cantidad enorme de masa del redoblante y bombos; limpiar hasta 270 Hz garantiza que el peso de los tambores provenga de sus micrófonos directos sin colisiones."
    },
    {
      id: 8,
      question: "En el micrófono de sala (Room Mic), ¿cómo se controla la energía y cuál es su ubicación jerárquica en la mezcla?",
      options: [
        "Se comprime con limitador brickwall y se coloca con el fader más alto que el bombo",
        "Se ecualiza con bandas dinámicas para domar picos de tambores y se mezcla a bajo volumen para brindar sensación tridimensional de espacio sin enturbiar las tomas cercanas",
        "Se muta durante toda la canción y solo se activa en los solos de guitarra",
        "Se envía a un envío auxiliar con paneo cerrado en mono en el canal central"
      ],
      correct: 1,
      explanation: "El micrófono de sala es un ambientador acústico; domesticar sus transitorios bruscos y sumarlo por detrás a bajo nivel añade profundidad orgánica sin restar pegada ni definición frontal."
    },
    {
      id: 9,
      question: "En el canal agrupador estéreo 'Master Drum', ¿qué objetivo cumple insertar una emulación del Avalon 737 como 'Glue EQ'?",
      options: [
        "Hacer cortes quirúrgicos de 24 dB en frecuencias medias",
        "Pegar y cohesionar todo el set con curvas valvulares y ópticas muy suaves y amplias, aportando calidez y aire de alta fidelidad sin desarmar el balance previo",
        "Saturar agresivamente para emular una grabadora de cinta rota",
        "Filtrar todos los subgraves por debajo de 80 Hz"
      ],
      correct: 1,
      explanation: "Con los tambores ya ecualizados individualmente, el bus común solo requiere un toque sutil de acople armónico; el Avalon actúa con curvas pasivas dóciles que unifican el conjunto con sedosidad."
    },
    {
      id: 10,
      question: "¿Por qué el Gain Staging dentro del propio ecualizador (igualar volumen de entrada y salida con el Output Gain) es una regla inquebrantable?",
      options: [
        "Porque si no se iguala, el ecualizador consume el doble de procesamiento de CPU",
        "Para evitar el autoengaño psicoacústico de creer que la pista suena mejor solo porque suena más fuerte, y evitar saturar el rango dinámico de los siguientes plugins",
        "Porque los plugins analógicos se apagan si detectan cambios de volumen",
        "Para ajustar automáticamente la frecuencia de muestreo a 48 kHz"
      ],
      correct: 1,
      explanation: "El oído humano percibe mayor volumen como mayor calidad o claridad; compensar la ganancia de salida asegura comparar la textura tímbrica real y preserva el headroom de la cadena."
    }
  ],
  flashcards: [
    {
      front: "Premisa fundamental de la ecualización en mezcla",
      back: "No sobreprocesar por inercia; escuchar la pista y actuar solo si el diseño de sonido de la captura original lo demanda."
    },
    {
      front: "Función 'Ghost' en compuertas inteligentes (Silencer)",
      back: "Evita que el algoritmo confunda notas fantasma suaves del redoblante con sangrado de fondo, preservando la dinámica del groove."
    },
    {
      front: "Ventaja de bandas dinámicas en la fundamental del redoblante (211 Hz)",
      back: "Atenúan resonancias solo en impactos excesivamente fuertes, conservando el cuerpo y peso en golpes moderados o suaves."
    },
    {
      front: "Filtrado indispensable en la bordona (Snare Bottom)",
      back: "Filtro pasa altos enérgico para extirpar la masa grave del bombo y toms, reteniendo el crujido metálico de los alambres."
    },
    {
      front: "Aporte del API EQ en el redoblante superior",
      back: "Imprime pegada con carácter analógico y presencia agresiva en frecuencias medias-altas para situar el tambor al frente."
    },
    {
      front: "Función de la 'Air Band' en el Maag EQ4",
      back: "Realce en estantería sobre frecuencias ultra-altas (ej. 10 kHz o más) que aporta brillo sedoso y apertura sin provocar asperezas."
    },
    {
      front: "Tratamiento tímbrico correctivo en el platillo Ride",
      back: "Recorte sustractivo de medios turbios con Pro-Q 4 y realce de aire cristalino en agudos con la Air Band de Maag EQ4."
    },
    {
      front: "Herramienta 'Mono Maker' en el Amek EQ 200",
      back: "Suma a Mono todas las frecuencias situadas por debajo de un umbral (ej. 560 Hz), evitando cancelaciones de fase en toms paneados."
    },
    {
      front: "Tecnología TMT (Tolerance Modeling Technology)",
      back: "Simula las discrepancias e imperfecciones de componentes entre canales de consolas analógicas, generando riqueza espacial real."
    },
    {
      front: "¿Por qué cortar hasta 270 Hz en micrófonos Overheads?",
      back: "Para eliminar la masa grave del redoblante y tambores que se suma de forma incontrolada a las tomas cercanas directas."
    },
    {
      front: "Uso del 'Filtro Espectral' en platillos (Pro-Q 4)",
      back: "Atenúa quirúrgicamente picos ultra-agudos estridentes cuando el baterista golpea con fuerza, protegiendo el oído de fatiga auditiva."
    },
    {
      front: "Rol del micrófono de sala (Room Mic) en mezcla",
      back: "Se doma con ecualización dinámica y se suma a bajo nivel detrás de los micros directos para imprimir sensación tridimensional de sala."
    },
    {
      front: "Objetivo del bus 'Master Drum'",
      back: "Reunir todas las pistas del kit percusivo procesadas en un único canal estéreo para aplicar pegamento y balance final."
    },
    {
      front: "Concepto de 'Glue EQ' en el bus de batería",
      back: "Ecualización sutil y musical diseñada para unificar y amalgamar los cuerpos de la batería sin alterar el balance individual."
    },
    {
      front: "Cualidad del ecualizador Avalon 737 en el bus maestro de batería",
      back: "Curvas óptico-valvulares muy suaves y musicales que aportan calidez analógica hi-fi sin recortar transitorios bruscos."
    },
    {
      front: "Regla del Gain Staging interno en ecualizadores",
      back: "Igualar el volumen de entrada (Input) y salida (Output) con el control de ganancia para no autoengañarse por saltos de presión sonora."
    },
    {
      front: "Engaño psicoacústico del volumen en ecualización",
      back: "El cerebro humano tiende a percibir cualquier señal con mayor nivel de decibeles como 'mejor', ocultando si el timbre empeoró."
    },
    {
      front: "Efecto de Auto-Align al activarse en la batería en vivo",
      back: "Alinea temporalmente las pistas por milisegundos: el sonido pasa de ser hueco y difuso a sentirse compacto y con graves firmes."
    },
    {
      front: "Comportamiento del micrófono de Hi-Hat en tomas crudas",
      back: "Frecuentemente presenta estridencias metálicas hirientes en medios-altos que exigen atenuación sustractiva antes de dar brillo."
    },
    {
      front: "Criterio de ecualización en conjunto para Toms",
      back: "Se procesan con ajustes emparejados para preservar coherencia de timbre y escala tonal entre el tom aéreo y el de piso."
    }
  ]
};