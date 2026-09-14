export const clase17 = {
  id: 17,
  title: "Baterías (Técnica ORTF), Edición Avanzada y Principios de Mezcla",
  summary: "Las cinco etapas de producción, técnica estéreo ORTF (17 cm y 110°), monitoreo independiente, edición por comping agrupado, ruteo en buses y desangrado por IA con Silencer.",
  sections: [
    {
      title: "La Cadena de Producción Musical: Del Tracking a la Mezcla",
      content: "La producción de audio profesional no es un bloque homogéneo de trabajo; es un engranaje sistemático dividido en cinco etapas encadenadas e interdependientes: Preproducción, Producción, Grabación (Tracking), Mezcla y Mastering.\n\nCualquier error, negligencia o deficiencia arrastrada desde los primeros eslabones —como una batería mal afinada en la sala, una mala angulación de cápsula o una distorsión digital en el convertidor A/D— afectará negativamente y de forma irreversible a las fases posteriores. La mezcla no existe para reparar grabaciones defectuosas; su función exclusiva es balancear, cohesionar y embellecer tomas que ya nacieron acústicamente sanas.",
      image: {
        placeholder: true,
        comment: "Diagrama de bloques de la cadena de producción: 1. Preproducción -> 2. Producción -> 3. Grabación (Tracking) -> 4. Mezcla -> 5. Mastering."
      },
      bulletPoints: [
        { label: "Carácter Irreversible", text: "Un error cometido en la etapa de captura no puede subsanarse con plugins sin degradar el audio." },
        { label: "Misión del Tracking", text: "Registrar la máxima fidelidad, peso y balance acústico directamente desde la sala de grabación." },
        { label: "Transición hacia Mezcla", text: "Completar la captura multipista para iniciar el tratamiento de balance espectral y dinámico." }
      ]
    },
    {
      title: "Planta de Microfonía y Ruteo Estandarizado en el DAW",
      content: "Para abordar la captura de una batería de rock acústica en el DAW (Digital Audio Workstation, la estación de trabajo de audio digital como Pro Tools o Logic Pro), la disciplina de organización es el primer requisito. Creamos ocho pistas de audio mono y estéreo aplicando una nomenclatura estandarizada y compacta para agilizar la lectura visual en consolas saturadas:\n\n1. Bombo (Kick) - AKG D112: Micrófono dinámico especializado en frecuencias subgraves y bajas, ubicado en el parche batidor.\n2. Redoblante Arriba (Snare Top / SN) - Shure SM57: Dinámico clásico de bobina móvil apuntando al parche superior para captar el ataque.\n3. Redoblante Abajo (Snare Bottom / BD) - Shure Beta 57: Dinámico supercardioide enfocado a la bordona metálica inferior para captar el crujido brillante.\n4. Hi-Hat (HH) - AKG C1000: Micrófono de condensador de diafragma pequeño; requiere alimentación Phantom Power (+48V) para captar el filo metálico del plato.\n5. Tom Aéreo (Tom de Rack / Tom 1) - Sennheiser MD 421: Dinámico de diafragma amplio para una pegada contundente en frecuencias medias.\n6. Tom de Piso (Floor Tom / Tom 2) - AKG C414: Condensador de diafragma grande con patrón cardioide y Pad de -20 dB activado; requiere Phantom Power (+48V) para capturar la extensión grave del tambor.\n7 y 8. Platos Aéreos (Overheads / OH L y OH R) - Par de Rode NT5: Micrófonos de condensador de diafragma pequeño (formato lápiz) que exigen Phantom Power (+48V) montados en configuración estéreo.",
      image: {
        placeholder: true,
        comment: "Consola de pistas del DAW mostrando la nomenclatura estandarizada: Kick, SN, BD, HH, Tom 1, Tom 2, OH L y OH R."
      },
      bulletPoints: [
        { label: "Nomenclatura Compacta", text: "Uso de abreviaciones universales para operar con velocidad en sesiones multipista complejas." },
        { label: "Canales con Phantom Power", text: "Verificar la activación de +48V en Hi-Hat (C1000), Tom de Piso (C414) y Overheads (Rode NT5)." },
        { label: "Criterio de Selección", text: "Combinar transductores dinámicos robustos en tambores con condensadores rápidos en platillos." }
      ]
    },
    {
      title: "La Técnica Estéreo ORTF para Overheads",
      content: "A diferencia del arreglo espaciado A/B utilizado comúnmente, en esta sesión implementamos la técnica estéreo ORTF (desarrollada originalmente por la Oficina de Radiodifusión y Televisión Francesa) para los micrófonos aéreos.\n\n• Configuración Geométrica Exacta:\nSe utiliza un par emparejado (matched pair) de condensadores de diafragma pequeño idénticos (Rode NT5) ubicados por encima de la cabeza del baterista apuntando hacia el kit. Las cápsulas de los micrófonos deben situarse a una distancia física de exactamente 17 centímetros entre sí, abriéndose hacia afuera con un ángulo de 110 grados.\n\n• Fundamento Acústico y Psicoacústico:\nLa distancia de 17 cm emula matemáticamente la distancia interaural (el ancho promedio de una cabeza humana entre ambos oídos), mientras que el ángulo de 110 grados replica la dispersión de los pabellones auditivos. Esta geometría combina diferencias de tiempo de llegada (fase) con diferencias de intensidad (amplitud), generando una imagen estéreo hiperrealista de cómo el oído humano percibe el espacio en la sala.\n\n• Ventajas en Batería:\nCon solo este par ORTF obtenemos una imagen estéreo amplia, dimensional y coherente de toda la batería (platillos, toms, redoblante y bombo), manteniendo una excelente estabilidad de fase que suma perfectamente al conmutar la escucha a mono.",
      image: {
        placeholder: true,
        comment: "Esquema geométrico de la técnica ORTF: dos micrófonos lápiz con cápsulas separadas por 17 cm y orientadas en un ángulo de 110°."
      },
      bulletPoints: [
        { label: "Geometría Estricta", text: "Separación exacta de 17 cm entre cápsulas y apertura angular de 110 grados." },
        { label: "Modelo Interaural", text: "Recrea la percepción psicoacústica del cerebro humano mediante retardos de tiempo e intensidad." },
        { label: "Estabilidad en Mono", text: "Preserva la compatibilidad de fase de toda la batería sin las cancelaciones típicas del par espaciado A/B." }
      ]
    },
    {
      title: "Monitoreo Independiente y Captura del Decaimiento",
      content: "Antes de pulsar 'Record', la configuración de la mezcla de auriculares (Cue Mix) para el baterista es crítica. El músico necesita dos señales fundamentales para rendir con precisión: la pista musical de referencia y el metrónomo (click).\n\nEnrutamiento en Sala de Control:\nEl ingeniero no debe enviar una mezcla fija sumada. Las señales se rutean por canales y salidas virtuales independientes (por ejemplo, salidas 1-2 para la pista guía musical y salidas 3-4 para el metrónomo). Esto permite ajustar el volumen relativo de cada elemento al instante según lo que el baterista solicite para tocar cómodo y relajado.\n\nRegla de Oro en la Finalización de la Toma:\nAl concluir la canción, el técnico jamás debe detener la grabación inmediatamente después del último golpe de platillo. Se deben dejar correr un par de compases completos en absoluto silencio en la sala para capturar el decaimiento natural (fade out y sustain) de la resonancia de los platillos y el aire del recinto. Cortar antes de tiempo arruina los finales de tema en la etapa de mezcla.",
      bulletPoints: [
        { label: "Ruteo de Salidas Virtuales", text: "Separar metrónomo y música en buses independientes para calibrar el monitoreo del músico." },
        { label: "Sostén del Fade Out", text: "Grabar compases adicionales de silencio tras el último impacto para registrar la cola de los platos." },
        { label: "Psicología de Cabina", text: "Garantizar una escucha limpia en auriculares para afianzar el tempo y la dinámica." }
      ]
    },
    {
      title: "Edición Avanzada: El Arte del Comping en Baterías Multipista",
      content: "El Comping (compilación de tomas) es una herramienta de edición estructural indispensable presente en los principales secuenciadores (DAW) como Logic Pro o Pro Tools.\n\n• ¿En qué consiste el Comping?:\nConsiste en grabar varias tomas completas sucesivas de una misma sección o tema (Toma 1, Toma 2, Toma 3) dentro de un mismo carril de pista. El software las apila visualmente en capas. El ingeniero puede desplegar estas capas y seleccionar con el puntero los fragmentos más destacados de cada toma para construir una única 'Toma Maestra' perfecta (por ejemplo, combinar el compás 1 de la Toma 2 con el compás 2 de la Toma 1).\n\n• La Regla de Oro Inquebrantable en Baterías:\nSi vas a realizar comping sobre una batería grabada con múltiples micrófonos simultáneos, es obligatorio seleccionar, agrupar y editar absolutamente todas las pistas del instrumento al mismo tiempo.\n\n• Fundamento del Desastre de Fase por Sangrado:\nSi cometes el error de cortar y seleccionar únicamente el bombo de la Toma 1 y dejas los micrófonos aéreos (Overheads) en la Toma 2, se escuchará el bombo directo de la Toma 1, pero los micrófonos aéreos seguirán reproduciendo el sangrado del golpe del bombo de la Toma 2. Como el baterista nunca toca dos tomas con precisión de milisegundo idéntica, el resultado será un desfase rítmico incontrolable (un doble golpe o eco) y cancelaciones de fase destructivas que destruirán el sonido de la batería.",
      image: {
        placeholder: true,
        comment: "Interfaz del DAW mostrando las pistas agrupadas de batería editadas en bloque con cortes sincronizados entre tomas."
      },
      bulletPoints: [
        { label: "Construcción de la Toma Maestra", text: "Seleccionar los mejores pasajes de diversas ejecuciones para consolidar una pista perfecta." },
        { label: "Agrupamiento Obligatorio", text: "Editar en bloque todas las pistas del kit acústico para mover los cortes temporalmente al unísono." },
        { label: "Peligro del Sangrado Cruzado", text: "Editar tambores aislados genera choques de fase irreparables con los micrófonos aéreos." }
      ]
    },
    {
      title: "Principios de Mezcla: Buses Auxiliares, Fase Espectral y Silencer",
      content: "Al completar el tracking y abordar la mezcla inicial, aplicamos criterios de ruteo eficiente, control de sangrado y distribución en el espectro:\n\nA. Optimización Mediante Canales Bus (Subgrupos):\nUn Bus es un canal auxiliar donde convergen y se suman múltiples pistas de audio. En lugar de insertar un ecualizador y un compresor independiente en el Overhead Izquierdo y replicar los mismos plugins en el Overhead Derecho, enviamos ambas pistas a un canal agrupador estéreo llamado 'Bus ORTF'. Insertar un único proceso en el Bus ahorra procesamiento de CPU (unidad central de procesamiento) y asegura un tratamiento idéntico para ambos canales.\n\nB. Auditoría de Fase en la Salida Estéreo (Stereo Output):\nAl panear los Overheads (por ejemplo, a un 30% a cada lado del panorama), insertamos un analizador de correlación de fase en el canal Master. La señal debe residir de forma predominante en la Zona Azul (+1, correlación positiva). Pequeñas oscilaciones transitorias hacia la Zona Roja (-1, antifase) durante milisegundos son naturales por la dispersión de los platillos. Sin embargo, trazos permanentes en la zona roja delatan cancelaciones graves que exigen mover físicamente los micrófonos en la sala. En esta sesión, problemas de fase detectados en la pantalla general provenían de guitarras de maqueta con pedales de modulación; al mutearlas y solear la batería ORTF, la fase demostró ser perfecta.\n\nC. Control de Sangrado Mediante Inteligencia Artificial (Silencer):\nEl micrófono del bombo capta inevitablemente el sangrado del redoblante y platillos. En lugar de una compuerta de ruido clásica (Gate) —que solo abre o cierra por umbral de decibeles y suele amputar notas suaves o colas naturales—, se utiliza Silencer (de Black Salt Audio). Este procesador emplea algoritmos de Inteligencia Artificial entrenados para reconocer la morfología del golpe del bombo, eliminando el sangrado de fondo sin cortar las frecuencias subsónicas ni el decaimiento orgánico del tambor.\n\nD. Hueco Espectral Natural para Guitarras (1 kHz a 2 kHz):\nAl analizar el espectro de la batería cruda en FabFilter Pro-Q, se observa una pequeña depresión o valle natural entre los 1.000 Hz y 2.000 Hz (1 kHz a 2 kHz). En una producción de rock este comportamiento es perfecto: ese rango es exactamente el carril espectral donde se asientan el cuerpo y la mordida de las guitarras eléctricas distorsionadas, garantizando que cada instrumento conviva sin disputar espacio en la mezcla.",
      image: {
        placeholder: true,
        comment: "Analizador de fase marcando en zona azul (+1), interfaz del plugin Silencer aislando el bombo y curva de Pro-Q mostrando el hueco en 1-2 kHz."
      },
      bulletPoints: [
        { label: "Buses Auxiliares", text: "Agrupación estéreo de pistas afines para ahorrar CPU y aplicar procesamiento unificado." },
        { label: "Monitoreo en Zona Azul", text: "Correlación de fase positiva que certifica una mezcla estéreo compatible con mono." },
        { label: "Silencer con IA", text: "Compuerta inteligente que aísla el golpe específico del tambor sin truncar su sustain." },
        { label: "Espacio en 1-2 kHz", text: "Valle espectral natural de la batería que deja libre el carril para las guitarras de rock." }
      ]
    }
  ],
  quiz: [
    {
      id: 1,
      question: "¿Cuáles son las cinco etapas consecutivas que estructuran la cadena de producción musical profesional?",
      options: [
        "Composición, Afinación, Ecualización, Compresión y Distribución",
        "Preproducción, Producción, Grabación (Tracking), Mezcla y Mastering",
        "Edición, Reamping, Automatización, Renderizado y Streaming",
        "Microfonía, Preamplificación, Conversión A/D, Sumatoria y Dithering"
      ],
      correct: 1,
      explanation: "El trabajo de estudio se divide en estas cinco fases; cualquier fallo arrastrado desde las primeras etapas perjudica de forma irreversible las instancias posteriores."
    },
    {
      id: 2,
      question: "¿Cuáles son las especificaciones físicas exactas de la técnica estéreo ORTF para micrófonos aéreos (Overheads)?",
      options: [
        "Cápsulas cruzadas a 90 grados separadas por 5 cm",
        "Dos micrófonos idénticos con cápsulas separadas exactamente 17 cm y abiertas en un ángulo de 110 grados",
        "Dos micrófonos colocados en paralelo a 1 metro de distancia (técnica A/B)",
        "Un micrófono apuntando al techo y otro apuntando al suelo en 180 grados"
      ],
      correct: 1,
      explanation: "La separación de 17 cm emula la distancia interaural humana promedio y la apertura de 110° recrea diferencias de tiempo y nivel con gran estabilidad de fase."
    },
    {
      id: 3,
      question: "¿Por qué la técnica ORTF brinda una imagen estéreo sumamente natural y tridimensional de toda la batería?",
      options: [
        "Porque elimina el uso de cables balanceados mediante señales ópticas",
        "Porque recrea las diferencias de tiempo y volumen con las que el sistema auditivo humano percibe y localiza las fuentes en el espacio real",
        "Porque invierte automáticamente la polaridad de las bajas frecuencias",
        "Porque cancela al 100% el sangrado de los platillos en los toms"
      ],
      correct: 1,
      explanation: "Al combinar diferencias de tiempo (por los 17 cm) y diferencias de intensidad (por el ángulo de 110° fuera de eje), imita la audición binaural humana."
    },
    {
      id: 4,
      question: "Al finalizar la toma de una batería, ¿por qué nunca se debe detener la grabación inmediatamente después del último golpe?",
      options: [
        "Para permitir que los preamplificadores descarguen el voltaje residual",
        "Para dejar correr un par de compases de silencio y capturar el decaimiento natural (fade out) y la resonancia de los platillos",
        "Para calibrar la latencia del software de grabación en tiempo real",
        "Para que el metrónomo se desactive automáticamente en el master"
      ],
      correct: 1,
      explanation: "Cortar la toma bruscamente trunca la cola de reverberación natural de los platillos, impidiendo transiciones fluidas durante la etapa de mezcla."
    },
    {
      id: 5,
      question: "¿En qué consiste la técnica de edición digital denominada 'Comping' (compilación)?",
      options: [
        "En comprimir dinámicamente todas las pistas con un compresor VCA de bus",
        "En grabar múltiples tomas consecutivas de una sección y seleccionar los mejores compases de cada una para armar una toma maestra definitiva",
        "En afinar automáticamente las frecuencias del redoblante mediante síntesis granular",
        "En convertir señales analógicas en código binario para Logic o Pro Tools"
      ],
      correct: 1,
      explanation: "El comping permite seleccionar los fragmentos más logrados de varias ejecuciones para ensamblar una pista sin fisuras rítmicas ni técnicas."
    },
    {
      id: 6,
      question: "¿Cuál es la 'Regla de Oro' obligatoria al hacer comping en pistas de batería multipista?",
      options: [
        "Editar únicamente el canal del bombo y dejar el resto intacto",
        "Agrupar y cortar absolutamente todas las pistas de la batería en simultáneo",
        "Separar las tomas de los overheads para editarlas en un compás diferente",
        "Aplicar compresión destructiva antes de realizar los cortes"
      ],
      correct: 1,
      explanation: "Si se edita un tambor de una toma y los aéreos de otra, el sangrado del golpe anterior no coincidirá en tiempo, generando desfases destructivos y tropiezos rítmicos."
    },
    {
      id: 7,
      question: "¿Qué ventaja operativa y técnica ofrece rutear los micrófonos de Overheads a un canal auxiliar (Bus)?",
      options: [
        "Permite procesar ambas pistas con un único ecualizador o compresor, asegurando coherencia tímbrica y ahorrando procesamiento de CPU",
        "Convierte la señal estéreo en una pista monofónica de alta ganancia",
        "Elimina por completo la necesidad de medir la correlación de fase",
        "Aumenta la tasa de bits de 24 a 32 bits en tiempo real"
      ],
      correct: 0,
      explanation: "El canal auxiliar reúne ambas señales bajo un mismo control de fader e inserciones, permitiendo ecualizar y comprimir el plano estéreo de forma idéntica y eficiente."
    },
    {
      id: 8,
      question: "En un analizador de fase colocado en el canal Master, ¿cómo se interpreta una lectura saludable?",
      options: [
        "Líneas continuas y estables marcando dentro de la zona roja",
        "Predominio constante en la zona azul (en fase), aceptando únicamente excursiones fugaces y breves a la zona roja producto de las reflexiones de los platos",
        "El medidor debe permanecer estático en el valor -1 en todo momento",
        "La correlación debe oscilar exclusivamente entre 90 y 180 grados"
      ],
      correct: 1,
      explanation: "El rango azul refleja sumatoria positiva en mono; pequeños saltos a la zona roja son habituales por la dispersión de altas frecuencias, pero no deben ser sostenidos."
    },
    {
      id: 9,
      question: "¿Cuál es la diferencia fundamental entre una compuerta tradicional (Gate) y el plugin 'Silencer' de Black Salt Audio?",
      options: [
        "El Gate clásico funciona con Inteligencia Artificial y Silencer solo por volumen",
        "El Gate tradicional corta señales por umbral de amplitud, mientras que Silencer utiliza IA para identificar el cuerpo específico y eliminar el sangrado sin cortar colas naturales",
        "Silencer solo funciona con cables balanceados TRS",
        "El Gate tradicional añade armónicos cálidos de válvula a la señal"
      ],
      correct: 1,
      explanation: "Silencer reconoce el timbre exacto del instrumento (ej. el bombo) mediante redes neuronales, suprimiendo la filtración de redoblante o platos sin apagar el decay natural."
    },
    {
      id: 10,
      question: "Al analizar el espectro de la batería cruda con FabFilter Pro-Q, ¿por qué la caída natural entre 1 kHz y 2 kHz es beneficiosa para una producción de rock?",
      options: [
        "Porque evita que la batería suene demasiado brillante en dispositivos móviles",
        "Porque despeja el rango medio donde habitualmente se asientan las guitarras eléctricas distorsionadas, evitando enmascaramiento espectral",
        "Porque a 1 kHz los micrófonos de condensador pierden la polarización eléctrica",
        "Porque en esa zona se sitúa la frecuencia fundamental del bombo"
      ],
      correct: 1,
      explanation: "Dejar un hueco natural en los medios-agudos permite que las guitarras rítmicas encajen en la mezcla con presencia sin pelear por espacio con el kit percusivo."
    }
  ],
  flashcards: [
    {
      front: "Las 5 etapas de la producción musical",
      back: "1. Preproducción, 2. Producción, 3. Grabación (Tracking), 4. Mezcla y 5. Mastering."
    },
    {
      front: "Parámetros físicos de la técnica estéreo ORTF",
      back: "Dos micrófonos idénticos colocados a 17 cm de distancia entre cápsulas y abiertos en un ángulo hacia afuera de 110°."
    },
    {
      front: "Fundamento acústico de los 17 cm en la técnica ORTF",
      back: "Emular la distancia promedio interaural entre los dos oídos de la cabeza humana para una escucha estéreo natural."
    },
    {
      front: "Ventaja de la técnica ORTF frente al par espaciado A/B",
      back: "Mayor estabilidad y coherencia de fase, combinando diferencias de tiempo y nivel con excelente apertura y centro sólido."
    },
    {
      front: "Canales de monitoreo para el baterista durante el Tracking",
      back: "Pista musical de referencia y metrónomo (click) enrutados en canales auxiliares separados para regular su volumen de forma independiente."
    },
    {
      front: "Regla del fade out al finalizar una toma de batería",
      back: "Dejar correr dos o tres compases tras el último golpe para registrar la cola de decaimiento y resonancia completa de los platillos."
    },
    {
      front: "¿Qué es el 'Comping' en edición de audio?",
      back: "Compilar fragmentos selectos de múltiples tomas grabadas consecutivamente para conformar una única toma maestra perfecta."
    },
    {
      front: "Regla de oro del Comping en baterías multipista",
      back: "Agrupar y cortar todas las pistas del drumset juntas para evitar desfases rítmicos y acústicos por sangrado entre tomas distintas."
    },
    {
      front: "Consecuencia de editar solo una pista de batería sin agrupar",
      back: "El sangrado del golpe original permanecerá en los demás micrófonos abiertos (ej. overheads), provocando flam rítmico y cancelaciones de fase."
    },
    {
      front: "Uso práctico de un canal Bus en Overheads",
      back: "Sumar las pistas izquierda y derecha en un solo canal auxiliar para procesarlas con un ecualizador o compresor común, ahorrando CPU."
    },
    {
      front: "Interpretación de la zona azul en un analizador de fase",
      back: "Señal en fase positiva y coherente; garantiza compatibilidad mono y suma energética consistente."
    },
    {
      front: "Significado de líneas rojas continuas en el medidor de correlación",
      back: "Cancelación severa por antifase acústica; exige revisar la alineación y posición física de los micrófonos en la sala."
    },
    {
      front: "Diferencia entre compuerta (Gate) e IA con Silencer",
      back: "El Gate actúa solo por nivel de amplitud; Silencer analiza el patrón tímbrico para separar el tambor deseado del sangrado de platos y sala."
    },
    {
      front: "Rango espectral libre entre 1 kHz y 2 kHz en la batería",
      back: "Espacio natural ideal para alojar el ataque y la mordida de las guitarras eléctricas distorsionadas sin generar barro en la mezcla."
    },
    {
      front: "Microfonía para Hi-Hat en la sesión de la Clase 17",
      back: "AKG C1000, micrófono de condensador de diafragma pequeño que requiere alimentación Phantom Power (+48V)."
    },
    {
      front: "Microfonía para el Tom de Piso en la sesión de la Clase 17",
      back: "AKG C414, condensador de diafragma grande (+48V) para captar la extensión profunda de frecuencias graves."
    },
    {
      front: "Microfonía para los Overheads en la sesión ORTF",
      back: "Par calibrado de micrófonos Rode NT5 (condensadores de diafragma pequeño con respuesta transitoria rápida)."
    },
    {
      front: "Causa común de falsos positivos en el analizador de fase máster",
      back: "Pistas guía temporales de teclados o simuladores estéreo mal desfasados que ensucian la medición de la sala acústica."
    },
    {
      front: "Nomenclatura abreviada recomendada en pistas de batería",
      back: "Kick (bombo), SN (snare top), BD (bordona), HH (hi-hat), Tom 1, Tom 2, OH L y OH R."
    },
    {
      front: "Principio de arrastre de errores en producción",
      back: "Una deficiencia en preproducción o grabación se amplifica de forma exponencial en la mezcla y el mastering."
    }
  ]
};