export const clase4 = {
  id: 4,
  title: "Técnica Vocal, Preamplificadores y Microfonía",
  summary: "Medición Dorough, colorimetría de preamps (Neve vs. Manley), tecnología Unison, tipos de transductores y gestión de cabina.",
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
      image: {
        url: "/images/clase4/clase4-medicion-dorrough.webp",
        comment: "Escala Dorrough: nivel de señal promedio sostenido en la zona verde (-18 dB) y picos contenidos por debajo de -6 dB."
      },
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
      image: {
        url: "/images/clase4/clase4-tecnica-vocal-cabina.webp",
        comment: "Disposición en cabina: distancia de 15 cm, filtro antipop y micrófono angulado apuntando hacia abajo desde la altura de los ojos."
      },
      bulletPoints: [
        { label: "Dinámica física", text: "Ajustar la distancia corporal según la intensidad para regular la presión sonora." },
        { label: "Angulación elevada", text: "Desvía plosivas mecánicas y preserva la claridad del registro." },
        { label: "Regla del Talkback", text: "Desactivar la comunicación al pulsar grabar para no ensuciar la captura." }
      ]
    },
    {
      title: "Tipologías de Micrófonos: Dinámicos, Condensador y Cinta",
      content: "La elección del transductor condiciona la respuesta a transitorios y la textura de la toma:\n\n1. Dinámicos (Bobina Móvil): Funcionan mediante una membrana solidaria a una bobina de cobre sumergida en un campo magnético. Son robustos, toleran niveles de presión sonora (SPL) muy altos sin romperse y no requieren alimentación eléctrica externa (con excepciones activas como el Aston Element). Estándar en cajas, amplificadores y directos.\n2. De Condensador (Capacitivos): Emplean dos placas metálicas muy próximas formando un condensador electrostático. Son ultrarrápidos en transitorios y detallados en agudos. Exigen alimentación Phantom Power (+48V) para polarizarse y energizar su previo interno. Estándar en voces principales (ej. Neumann U87, AKG C414, Rode NT1).\n3. De Cinta (Ribbon): Suspenden un filamento corrugado de aluminio dentro de un campo magnético. Brindan una respuesta sedosa y lineal muy similar a la curva de audición humana, eliminando asperezas. Los modelos pasivos (como el Royer R-121) son sumamente delicados: jamás activemos +48V en un micrófono de cinta pasivo porque la corriente rompería físicamente la lámina. Para evitar accidentes en el instituto se emplean alternativas activas (como el Rode NTR), que integran circuitería protegida.",
      image: {
        url: "/images/clase4/clase4-tipos-microfonos-estudio.webp",
        comment: "Comparativa visual de las tres familias de micrófonos de estudio: Dinámico, Condensador y Cinta."
      },
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
      question: "En un medidor profesional tipo Dorrough configurado en -18 dB, ¿cuál es el comportamiento de señal esperado?",
      options: [
        "Llegar de forma constante a 0 dB para aprovechar la saturación digital",
        "Llenar el área verde de persistencia normal y nunca superar los -6 dB de pico máximo",
        "Mantenerse por debajo de -30 dB para que no actúe el conversor",
        "Picar exclusivamente en el rango rojo durante toda la toma"
      ],
      correct: 1,
      explanation: "El estándar sitúa la referencia en -18 dBFS; la señal debe sostenerse en el área verde y dejar margen (headroom) sin pasar de -6 dB de pico."
    },
    {
      id: 2,
      question: "Si la señal entra demasiado baja o saturando en el medidor del DAW, ¿dónde debe corregirse?",
      options: [
        "Subiendo o bajando el fader del canal en el DAW",
        "Ajustando la ganancia (Gain) física en el preamplificador de la placa",
        "Subiendo el volumen de los auriculares del cantante",
        "Insertando un limitador en el bus de salida máster"
      ],
      correct: 1,
      explanation: "El fader del DAW solo atenúa o amplifica señal ya digitalizada; la ganancia se calibra en el previo analógico antes de la conversión."
    },
    {
      id: 3,
      question: "¿Qué característica tonal y de manejo distingue al preamplificador clásico Neve 1073?",
      options: [
        "Es 100% transparente y no añade color ni distorsión armónica",
        "Añade cuerpo, distorsión armónica musical y sus pasos de ganancia van de 5 en 5 dB",
        "Es un micrófono dinámico con patrón omnidireccional integrado",
        "Requiere corriente trifásica obligatoria para no saturar"
      ],
      correct: 1,
      explanation: "El Neve 1073 es famoso por su coloración armónica en medios-graves y su potenciómetro escalonado por pasos de 5 dB."
    },
    {
      id: 4,
      question: "¿Qué define al Manley Voxbox en una cadena de grabación vocal?",
      options: [
        "Un conversor digital pasivo sin controles físicos",
        "Un Channel Strip valvular que aporta calidez e integra previo, EQ y compresión",
        "Un micrófono dinámico de bobina móvil para redoblantes",
        "Un cable balanceado con blindaje doble contra Wi-Fi"
      ],
      correct: 1,
      explanation: "El Manley Voxbox es un channel strip a válvulas que reúne preamp, compresor optoelectrónico y ecualizador en una sola unidad."
    },
    {
      id: 5,
      question: "¿En qué consiste la tecnología Unison de las placas Universal Audio?",
      options: [
        "Permite afinar la voz en tiempo real con latencia cero",
        "Adapta la impedancia física de la entrada para grabar emulaciones de previos clásicos desde el origen",
        "Elimina la necesidad de usar cables balanceados XLR",
        "Convierte micrófonos de condensador en micrófonos de cinta"
      ],
      correct: 1,
      explanation: "Unison reconfigura la impedancia física de los preamps analógicos de la interfaz para que interactúen con el micro como el hardware real modelado."
    },
    {
      id: 6,
      question: "Si grabas una toma usando un previo Unison y luego quieres cambiar a otro emulador distinto:",
      options: [
        "Basta con cambiar el plugin en el DAW porque el efecto es no destructivo",
        "Debes grabar la toma nuevamente, ya que la coloración quedó fijada en el audio capturado",
        "Se invierte la polaridad con un cable TS",
        "Solo hace falta subir el fader máster 6 dB"
      ],
      correct: 1,
      explanation: "El procesamiento Unison se imprime directamente en la grabación durante la conversión; no es un proceso de mezcla a posteriori."
    },
    {
      id: 7,
      question: "¿Qué micrófono dinámico de estudio representa una excepción al requerir obligatoriamente +48V?",
      options: [
        "Shure SM57",
        "Aston Element",
        "Royer R-121",
        "Neumann U87"
      ],
      correct: 1,
      explanation: "El Aston Element es un micrófono dinámico con cápsula activa de bobina móvil que requiere alimentación Phantom para su etapa interna."
    },
    {
      id: 8,
      question: "¿Qué diferencia crítica de seguridad existe entre un micro de cinta pasivo (ej. Royer R121) y uno activo (ej. Rode NTR)?",
      options: [
        "El pasivo requiere +48V para encender y el activo se quema con corriente",
        "El pasivo se destruye si recibe Phantom Power; el activo requiere +48V y está protegido contra accidentes",
        "El pasivo solo funciona con cables no balanceados TS",
        "El activo no tolera fuentes acústicas con transitorios rápidos"
      ],
      correct: 1,
      explanation: "Los micros de cinta pasivos no toleran voltaje Phantom; los activos llevan electrónica interna que usa +48V y protege la cinta de descargas."
    },
    {
      id: 9,
      question: "¿Cuál es la regla fundamental respecto al canal de Talkback durante la sesión de grabación?",
      options: [
        "Dejarlo encendido siempre para acompañar al cantante en el estribillo",
        "Silenciarlo al grabar para que el audio del control room no se filtre por la toma o auriculares",
        "Restaura la impedancia del previo valvular",
        "Conectarlo en serie mediante una caja directa DI"
      ],
      correct: 1,
      explanation: "El canal de comunicación debe mutearse durante la toma para evitar fugas acústicas de la sala de control hacia el micrófono principal."
    },
    {
      id: 10,
      question: "¿Qué fenómeno acústico incrementa los graves al acercar la fuente a un micrófono con patrón cardioide?",
      options: [
        "Cancelación por fase",
        "Efecto de proximidad",
        "Saturación de cinta",
        "Enmascaramiento de agudos"
      ],
      correct: 1,
      explanation: "El efecto de proximidad es una respuesta física inherente a los micrófonos direccionales de gradiente de presión (como el cardioide)."
    }
  ],
  flashcards: [
    {
      front: "¿Qué función cumple el Patch Bay en el estudio?",
      back: "Centraliza todas las entradas y salidas de la sala y los equipos en un panel frontal para rutear señales sin mover cables traseros."
    },
    {
      front: "Límites recomendados de señal en el medidor Dorrough",
      back: "Referencia en -18 dBFS, señal promedio en zona verde y picos máximos sin exceder los -6 dBFS."
    },
    {
      front: "¿Dónde se ajusta el nivel si la toma entra baja o satura?",
      back: "En la perilla física de ganancia (Gain) del preamplificador, nunca compensando desde el fader digital del DAW."
    },
    {
      front: "Características del previo Neve 1073",
      back: "Aporta color armónico musical y peso en frecuencias medias-graves; su control de ganancia opera por pasos fijos de 5 dB."
    },
    {
      front: "Características del Manley Voxbox",
      back: "Channel strip a válvulas que aporta calidez y grosor, reuniendo previo, ecualizador y compresor en una misma unidad."
    },
    {
      front: "¿Qué distingue a la tecnología Unison de Universal Audio?",
      back: "Modifica la impedancia física analógica de la interfaz para emular previos clásicos de hardware directamente en la toma original."
    },
    {
      front: "¿Se puede modificar un previo Unison después de grabar?",
      back: "No; el color queda impreso en el archivo de audio. Si se desea cambiar, es necesario volver a grabar la toma."
    },
    {
      front: "Técnica de dinámica vocal con el micrófono",
      back: "El cantante da un paso atrás en fragmentos potentes (estribillos) y se aproxima en susurros o estrofas para mantener señal estable."
    },
    {
      front: "Función higiénica y acústica del antipop",
      back: "Dispersa los impactos de aire de consonantes plosivas (P, B) y frena la saliva para evitar la oxidación del diafragma."
    },
    {
      front: "Ubicación recomendada del micro para voz",
      back: "A la altura de los ojos y angulado hacia la boca a 10-20 cm, reduciendo golpes de aire directos contra la cápsula."
    },
    {
      front: "Regla del Talkback en grabación",
      back: "Apagarlo o mutearlo siempre mientras se graba para no contaminar la toma con ruidos o voces de la sala de control."
    },
    {
      front: "Principio de los micrófonos dinámicos",
      back: "Transducción mediante diafragma unido a una bobina móvil sumergida en un imán; resisten altísimo SPL sin alimentación externa."
    },
    {
      front: "Excepción del Aston Element",
      back: "Micrófono dinámico activo con cápsula especial que sí requiere Phantom Power (+48V) para energizar su circuito."
    },
    {
      front: "Características de los micrófonos de condensador",
      back: "Cápsula capacitiva de alta sensibilidad y respuesta rápida en agudos; requieren +48V (ej. Neumann U87, AKG C414)."
    },
    {
      front: "Riesgo de +48V en micrófonos de cinta pasivos",
      back: "La corriente directa puede estirar, fundir o destruir físicamente la lámina de aluminio interna (ej. Royer R-121)."
    },
    {
      front: "Diferencia del micrófono de cinta activo",
      back: "Incorpora electrónica interna activa que exige +48V y evita roturas por errores de conexión (ej. Rode NTR)."
    },
    {
      front: "¿Qué es el Patrón Polar de un micrófono?",
      back: "El diagrama direccional que describe con qué sensibilidad capta el sonido según el ángulo de incidencia (cardioide, omni, etc.)."
    },
    {
      front: "¿Qué es el Efecto de Proximidad?",
      back: "El aumento progresivo de las frecuencias graves cuando una fuente sonora se acerca mucho a un micrófono direccional."
    },
    {
      front: "Preamplificador de Stock vs Preamplificador con Color",
      back: "El de stock busca fidelidad transparente y neutral; los de color (valvulares/transformadores) agregan armónicos y grosor."
    },
    {
      front: "Protocolos habituales interfaz-computadora",
      back: "USB (estándar común multiplataforma) y Thunderbolt (alta velocidad de transferencia y baja latencia, habitual en Mac)."
    }
  ]
};