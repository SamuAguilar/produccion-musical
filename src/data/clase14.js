export const clase14 = {
  id: 14,
  title: "Grabación de Guitarras Eléctricas y Acústicas",
  summary: "Aislamiento y elevación de combos, On-Axis vs. Off-Axis, técnica Old School, Regla 3 a 1, Marshall Trick, Sweet Spot en traste 12 y gestión de Buffer/Latencia.",
  sections: [
    {
      title: "Disposición Espacial en el Estudio y Aislamiento Acústico",
      content: "Antes de ajustar un ecualizador o mover un potenciómetro de ganancia, la captura profesional se define en la distribución física de los músicos y los amplificadores dentro del estudio.\n\nAl registrar una banda en vivo, el guitarrista y el bajista deben situarse cerca del baterista dentro de la sala principal para mantener el contacto visual y la sincronía rítmica corporal. Sin embargo, el amplificador de guitarra eléctrica jamás debe compartir esa misma sala: debe aislarse en una cabina cerrada independiente (Iso-Booth) para evitar que su presión sonora se filtre como sangrado (bleeding) incontrolable en los micrófonos de la batería.\n\nAsimismo, la colocación física del gabinete dentro de la cabina sigue leyes acústicas estrictas:\n• Distancia a Paredes y Esquinas: Los bafles nunca deben situarse arrinconados ni pegados a los muros. Encajonar el amplificador genera el fenómeno de Base Loading (sobrecarga artificial de bajas frecuencias), un retumbe pastoso que enturbia la mezcla.\n• Desacople y Elevación de Combos: En amplificadores de formato Combo (donde el cabezal y el altavoz comparten el mismo mueble), apoyarlos directamente sobre el piso hace que la superficie actúe como una pared reflectante masiva, inflando los graves. Es mandatorio elevar el combo colocándolo sobre una silla pesada, tarima o soporte desacoplador.\n• Aislamiento Absoluto en Acústicas: La guitarra acústica es un instrumento de volumen bajo y campo acústico delicado. Debe grabarse con el guitarrista completamente solo en la sala, permitiendo que la tapa armónica y la madera respiren en el espacio sin contaminaciones externas.",
      image: {
        placeholder: true,
        comment: "Plano de distribución del estudio: Músicos en sala principal con contacto visual y amplificadores aislados en cabinas independientes elevados del suelo."
      },
      bulletPoints: [
        { label: "Contacto Visual Rítmico", text: "Guitarrista y bajista agrupados junto al baterista para asegurar el ensamble temporal de la toma." },
        { label: "Prevención de Base Loading", text: "Alejar los amplificadores de esquinas para no amplificar subgraves descontrolados." },
        { label: "Elevación de Combos", text: "Desacoplar el gabinete del suelo para evitar que el piso refuerce artificialmente las frecuencias graves." },
        { label: "Cabina Solitaria en Acústica", text: "Registrar guitarras acústicas sin otros instrumentos sonando en la misma sala para evitar sangrado." }
      ]
    },
    {
      title: "La Naturaleza Dinámica de la Señal de Guitarra Eléctrica",
      content: "Comparada con la percusión acústica, la guitarra eléctrica a través de un amplificador valvular o transistorizado es una señal noble y estable de capturar.\n\nLos circuitos analógicos del preamplificador, la etapa de potencia y la propia saturación física del altavoz aplican una compresión natural continua sobre la onda. Esto reduce drásticamente el rango dinámico (la brecha de volumen entre los golpes más suaves y los más intensos), entregando un nivel parejo y predecible que no satura fácilmente los convertidores A/D (Analógico a Digital).\n\nEn guitarras con distorsión pesada (High Gain, distorsión por saturación de válvulas), la compresión es casi absoluta. Al visualizar la forma de onda en el DAW (Digital Audio Workstation), la señal no exhibe picos bruscos (transientes de ataque pronunciados); se presenta como un bloque uniforme y denso (visualmente similar a un chorizo), lo que facilita enormemente el Gain Staging de entrada.",
      image: {
        placeholder: true,
        comment: "Comparativa de forma de onda en el DAW: transientes hiperdinámicos de batería frente al bloque denso y comprimido de una guitarra con distorsión."
      },
      bulletPoints: [
        { label: "Compresión Natural Valvular", text: "Los circuitos del amplificador suavizan picos dinámicos reduciendo la necesidad de compresión correctiva." },
        { label: "Ausencia de Transientes Abruptos", text: "La distorsión aplasta las crestas de ataque generando una envolvente constante y compacta." },
        { label: "Facilidad de Captura", text: "Señal térmicamente predecible que permite fijar la ganancia de entrada con amplio margen de seguridad." }
      ]
    },
    {
      title: "Microfonía Cercana (Close Miking): Selección de Cono y Angulación",
      content: "La microfonía cercana (Close Miking), situando la cápsula a pocos centímetros de la rejilla protectora del altavoz, es el estándar indiscutido por su aislamiento y pegada directa:\n\nA. Selección del Cono Óptimo en Cajas Múltiples:\nEn recintos equipados con varios altavoces (como los clásicos gabinetes 4x12 de cuatro conos de doce pulgadas), nunca existen dos altavoces que suenen idénticos, a pesar de compartir el mismo modelo y lote de fabricación. El ingeniero debe colocarse protectores auditivos, aproximarse a la caja mientras el músico ejecuta y evaluar con el oído cuál de los conos entrega la respuesta más musical, cálida y equilibrada. En amplificadores legendarios de sesión, el cono con mejor respuesta suele ser el más desgastado por la fatiga mecánica del uso continuo.\n\nB. Geometría Polar: En el Eje (On-Axis) vs. Fuera del Eje (Off-Axis):\nEl altavoz cuenta con una cúpula central (dust cap) y un borde cónico perimetral. Desplazar el micrófono entre estos puntos actúa como el ecualizador analógico más puro:\n• En el Eje (On-Axis): Apuntando perpendicularmente al centro del cono. Entrega la máxima definición, transitorios filosos de púa, brillo punzante y graves secos. Es un tono agresivo y cortante, indispensable para que los solos de guitarra y riffs principales perforen la mezcla.\n• Fuera del Eje (Off-Axis): Desplazando o angulando la cápsula hacia el borde exterior del cono. Produce un timbre mucho más 'mellow' (suave, dulce y oscuro), perdiendo agresividad en altas frecuencias. Es el emplazamiento ideal para guitarras rítmicas de acompañamiento que deben sentarse detrás de la voz principal sin disputar su espacio espectral.\n\nC. Selección del Transductor:\n• Shure SM57 (Dinámico): El estándar absoluto de la industria. Su curva de ecualización nativa (corte suave en subgraves y pico de presencia en medios-agudos entre 3 kHz y 6 kHz) calza de forma exacta con la zona donde reside el carácter del instrumento.\n• AKG C414 (Condensador de diafragma grande): Ofrece una respuesta en frecuencia extendida y lineal, capturando una dimensión con mayor peso en frecuencias bajas, cuerpo y fidelidad de estudio.",
      image: {
        placeholder: true,
        comment: "Diagrama del altavoz mostrando la posición del micrófono: On-Axis (al centro, brillante/agresivo) y Off-Axis (al borde, cálido/suave)."
      },
      bulletPoints: [
        { label: "Inspección de Conos en 4x12", text: "Elegir el mejor cono mediante escucha crítica directa con protección en cabina." },
        { label: "Posición On-Axis", text: "Alineación central que maximiza el ataque y los agudos para guitarras solistas." },
        { label: "Posición Off-Axis", text: "Desplazamiento perimetral que atenúa asperezas para guitarras rítmicas." },
        { label: "Shure SM57 Dinámico", text: "Respuesta en frecuencia diseñada de fábrica para encajar el rango medio de la guitarra eléctrica." },
        { label: "AKG C414 de Gran Diafragma", text: "Captura extendida con peso y definición de alta fidelidad en los extremos del espectro." }
      ]
    },
    {
      title: "Microfonía Distante, Regla del 3 a 1 y el Truco Marshall",
      content: "Para enriquecer la toma y dotarla de tridimensionalidad, recurrimos a técnicas de espacialidad y captura de resonancias estructurales:\n\n• Microfonía Distante ('Old School'):\nConsiste en situar el micrófono a unos 30 o 40 cm del bafle. A esta distancia, las longitudes de onda del sonido completan su ciclo en el aire antes de incidir en la membrana, registrando el 'pleno' o la suma armónica de todo el gabinete en lugar de un punto focalizado. Esta técnica absorbe las reflexiones tempranas de la habitación, por lo que exige obligatoriamente una sala con excelente acústica; si la sala es pequeña o tiene reflexiones secas y descontroladas, debe descartarse en favor de la microfonía cercana.\n\n• La Regla del 3 a 1 (Gestión de Fase en Multimicrófono):\nAl combinar un micrófono cercano junto a un micrófono de sala o distante, las ondas llegan en milisegundos distintos a cada cápsula, provocando cancelaciones de fase acústica (filtro de peine). Para evitarlo, aplicamos la Regla del 3 a 1: por cada unidad de distancia que exista entre el amplificador y el primer micrófono, debe haber al menos tres unidades de distancia entre ese primer micrófono y el segundo micrófono. (Por ejemplo: si el micrófono cercano está a 10 cm del bafle, el micrófono distante debe ubicarse como mínimo a 30 cm de separación respecto al primero).\n\n• El 'Truco Marshall' (Marshall Trick):\nEn gabinetes cerrados 4x12 (como la histórica caja Marshall 1960), los guitarristas extrañan en la grabación la sacudida física de aire que experimentan al tocar en el escenario. El truco consiste en mantener un micrófono dinámico frontal en el cono (como un SM57) y colocar un micrófono de cinta (o condensador) apuntando a las esquinas traseras de la madera de la caja cerrada. Este micrófono posterior captura la flexión mecánica y el retumbe de la madera maciza, inyectando un peso masivo y una resonancia profunda al sonido final al sumarlo en la mezcla.",
      image: {
        placeholder: true,
        comment: "Esquema de la Regla del 3 a 1 en microfonía y diagrama del Truco Marshall con micrófono frontal en cono y micrófono de cinta en la esquina trasera del bafle."
      },
      bulletPoints: [
        { label: "Desarrollo de Onda (Old School)", text: "Alejar el micrófono a 30-40 cm para captar la respuesta acústica completa del mueble." },
        { label: "Exigencia de Sala Tratada", text: "La microfonía distante depende de un recinto sin reflexiones parásitas metálicas." },
        { label: "Regla Geométrica del 3 a 1", text: "Separación proporcional entre micrófonos para prevenir cancelaciones de fase." },
        { label: "Marshall Trick Trasero", text: "Cápsula orientada a la madera trasera para absorber la resonancia y peso del chasis cerrado." }
      ]
    },
    {
      title: "Grabación por Línea (DI), Reamping y Gestión de Buffer",
      content: "La producción actual aprovecha la captura limpia por inyección directa como un salvavidas estético y una herramienta de modelado digital inagotable:\n\n• La Señal Dividida con Caja Directa (DI Box):\nSe conecta la guitarra a una Caja Directa Activa (alimentada por Phantom Power de +48V o batería de 9V, como la clásica Samson S-Direct). La DI transforma la impedancia del instrumento (Hi-Z) a nivel de micrófono balanceado (Low-Z), reteniendo la respuesta de frecuencias en instrumentos con afinaciones graves o barítonas. Desde su salida directa enviamos la señal limpia al DAW, mientras que por su salida puente (Through) alimentamos el amplificador real microfoneado en la cabina. Conservar la pista limpia garantiza una copia de seguridad perfecta.\n\n• El Proceso de Reamping:\nSi el tono del amplificador grabado con micrófonos no encaja con el resto de los instrumentos al mezclar, tomamos la pista limpia de DI grabada en el DAW, la enviamos hacia una salida analógica de la interfaz, la convertimos con una caja de reamp y la inyectamos en un amplificador real en la sala o la procesamos mediante simuladores por software de alta gama (AmpliTube, Guitar Rig). Allí podemos reajustar saturación, cambiar cajas acústicas virtuales o modificar la posición de micrófonos sin exigirle al guitarrista volver a tocar.\n\n• Gestión del Buffer Size y Latencia:\nAl registrar guitarras por línea monitoreando a través de simuladores virtuales, la latencia (el retardo en milisegundos entre que se pulsa la cuerda y suena en los auriculares) se controla con el Buffer de la interfaz:\n- Buffer Bajo (32 a 128 muestras): Se utiliza estrictamente durante la etapa de grabación. Exige mayor velocidad al procesador del ordenador pero reduce la latencia a niveles inaudibles para que el músico toque cómodo.\n- Buffer Alto (512 a 1024 muestras): Se utiliza durante la etapa de mezcla y postproducción. Introduce latencia pero libera al procesador para calcular decenas de plugins pesados simultáneamente sin saturar el sistema.\n\n• Mito del Sonido Digital:\nGrabar una guitarra eléctrica directo a la interfaz no le resta un carácter 'orgánico'. La guitarra eléctrica es, por diseño físico, un circuito pasivo de voltajes electromagnéticos generados por imanes. Con un buen conversor y simuladores modernos basados en impulsos IR (Impulse Responses), los resultados son indistinguibles de una captura valvular tradicional en prueba a ciegas.",
      image: {
        placeholder: true,
        comment: "Flujo de Reamping: Guitarra -> DI Activa -> Canal 1 DI Limpia al DAW / Salida Through a Amplificador -> Micrófono a Canal 2. Retorno desde DAW a caja de Reamp."
      },
      bulletPoints: [
        { label: "DI Activa de Calidad", text: "Preserva el rango dinámico y los transitorios puros de guitarras estándar y barítonas." },
        { label: "Seguridad por Reamping", text: "Permite cambiar el tono, amplificador o pantalla en la mezcla utilizando la toma limpia." },
        { label: "Buffer Bajo en Grabación", text: "32-128 muestras para eliminar el retardo de monitoreo en los auriculares del intérprete." },
        { label: "Buffer Alto en Mezcla", text: "512-1024 muestras para permitir la carga masiva de plugins sin caídas de audio." }
      ]
    },
    {
      title: "Grabación de Guitarra Acústica: El Sweet Spot y la Selección de Cápsulas",
      content: "La guitarra acústica es un instrumento orgánico de gran complejidad dinámica y riqueza en transitorios de cuerda que exige un protocolo minucioso:\n\nPreparación Mecánica y Ropa del Músico:\nEl instrumento debe calibrarse y montar cuerdas nuevas estabilizadas. Antes de sentarse, el músico debe despojarse de pulseras, relojes de muñeca, anillos y prendas de vestir con cremalleras metálicas o botones rígidos que puedan rozar la madera de la caja y arruinar una toma acústica.\n\nEl Punto Dulce (Sweet Spot) en el Traste 12:\n• El Error Crítico: Jamás apuntes el micrófono directamente hacia la boca o agujero de resonancia de la guitarra acústica. En esa abertura se concentra una masa de turbulencia de aire y frecuencias graves descontroladas que satura la cápsula con un sonido retumbante, hueco y sin definición.\n• La Posición de Referencia: El Sweet Spot se localiza a la altura del traste número 12, en la zona de unión física entre el mástil y la caja armónica. Allí se obtiene el equilibrio perfecto entre el cuerpo de la madera, la resonancia grave controlada y el brillo de las cuerdas. Apuntar excesivamente hacia el clavijero o mitad del mástil genera un sonido nasal, flaco y con exceso de chasquido de púa.\n\nCriterio de Elección de Micrófonos:\n• Condensador de Diafragma Pequeño (Micrófono Lápiz): Es el transductor de elección indiscutido. Su membrana ultraligera reacciona con agilidad absoluta a los transitorios rápidos de la púa o las yemas, entregando un brillo natural y aire cristalino.\n• Shure SM57 (Dinámico): Funciona como una alternativa funcional y cálida, pero debido al Efecto de Proximidad puede engordar en exceso las frecuencias graves si se acerca a menos de 10 cm.\n• Micrófonos de Cinta (Ribbon): Entregan un timbre suave y muy oscuro. No se recomiendan en guitarras que ya son naturalmente cálidas y corpulentas (como las guitarras acústicas de la marca Martin), ya que apagarían el brillo.\n\nConfiguraciones con Múltiples Micrófonos:\nCuando la guitarra acústica sostiene el protagonismo exclusivo del tema, podemos utilizar un arreglo de dos micrófonos: uno en el Sweet Spot del traste 12 (para transitorios y ataque) y un segundo micrófono de diafragma grande apuntando a la zona inferior del cuerpo del puente (para el peso grave). Para planos orquestales, se puede añadir un par estéreo de sala respetando estrictamente la Regla del 3 a 1.",
      image: {
        placeholder: true,
        comment: "Guitarra acústica señalando la zona prohibida (la boca) frente a la alineación óptima del micrófono en el traste 12 (Sweet Spot)."
      },
      bulletPoints: [
        { label: "Eliminar Ruidos Mecánicos", text: "Retirar pulseras, relojes y prendas con cremalleras antes de sentarse frente al diafragma." },
        { label: "Peligro en la Boca", text: "Evitar el agujero central para impedir la sobrecarga de aire y subgraves sordos." },
        { label: "Sweet Spot en Traste 12", text: "Punto de balance acústico ideal entre brillo de cuerdas y calidez de la madera." },
        { label: "Condensador Lápiz Primario", text: "Velocidad de respuesta para retratar los transitorios rápidos de rasgueo y arpegio." }
      ]
    },
    {
      title: "Captura de Acústica por Línea (Piezoeléctrico) y Refuerzo Tonal",
      content: "Aunque el micrófono captura la riqueza tridimensional del aire, registrar la guitarra electroacústica conectada por su salida de línea (preamplificador piezoeléctrico de contacto) es una necesidad operativa en tres escenarios:\n\n1. Entornos Acústicamente Hostiles: Cuando la sala de grabación carece de tratamiento acústico o existen ruidos parásitos externos de calle o ventilación que contaminarían un micrófono abierto.\n2. Situaciones de Sonido en Vivo: Para eliminar el peligro de acople (feedback) y suprimir el sangrado masivo de la batería y monitores en el escenario, donde la caja de resonancia actuaría como un receptor de ruido. Por este motivo en vivo se insertan tapones plásticos de goma (Feedback Busters) en la boca del instrumento.\n3. Refuerzo Tonal en Mezcla: En guitarras clásicas o criollas de cuerdas de nylon que suelen sonar apagadas o excesivamente oscuras al microfonearse, registrar simultáneamente la línea piezoeléctrica aporta un ataque de agudos brillante y directo. Al mezclar la pista del micrófono (que aporta el cuerpo y madera) con una pequeña proporción de la señal de línea por debajo, se rescata la claridad y articulación del rasgueo sin desnaturalizar el instrumento.",
      image: {
        placeholder: true,
        comment: "Doble captura en guitarra acústica: micrófono condensador en traste 12 sumado a cable de línea desde el jack de la pastilla piezoeléctrica."
      },
      bulletPoints: [
        { label: "Inmunidad ante Ruido de Sala", text: "La salida de línea independiza la toma frente a recintos con mala acústica." },
        { label: "Supresión de Feedback en Directo", text: "Uso de señal piezoeléctrica y tapabocas para evitar acoples en el escenario." },
        { label: "Refuerzo Tímbrico Híbrido", text: "Sumar el chasquido brillante de la pastilla a la toma cálida del micrófono para ganar definición." }
      ]
    }
  ],
  quiz: [
    {
      id: 1,
      question: "¿Por qué es fundamental elevar un amplificador tipo combo del suelo sobre una silla o tarima al grabar?",
      options: [
        "Para mejorar la ventilación de las válvulas de potencia",
        "Porque el suelo actúa acústicamente como una pared, generando una sobrecarga artificial de graves (base loading)",
        "Para invertir la polaridad de la señal antes de entrar al micrófono",
        "Para reducir el consumo eléctrico del preamplificador"
      ],
      correct: 1,
      explanation: "El contacto directo con el suelo acopla mecánicamente la caja y genera un refuerzo descontrolado de frecuencias bajas que enturbia la captura."
    },
    {
      id: 2,
      question: "¿Qué diferencia sonora existe entre posicionar el micrófono en el centro del cono (On-Axis) versus en el borde (Off-Axis)?",
      options: [
        "On-Axis atenúa los agudos; Off-Axis satura el conversor digital",
        "On-Axis entrega máxima definición, ataque de púa y brillo agresivo; Off-Axis produce un sonido más suave ('mellow'), dulce y oscuro",
        "On-Axis elimina el rango medio; Off-Axis vuelve el micrófono omnidireccional",
        "No existe diferencia tímbrica si se utiliza el mismo Shure SM57"
      ],
      correct: 1,
      explanation: "El domo central del cono proyecta los transitorios rápidos y altas frecuencias; hacia el borde de la membrana la respuesta decae en brillo, ganando redondez."
    },
    {
      id: 3,
      question: "En una caja 4x12 (cuatro parlantes), ¿qué debe hacer el técnico antes de colocar el micrófono?",
      options: [
        "Colocar un micrófono en cada uno de los cuatro conos obligatoriamente",
        "Escuchar individualmente con protección auditiva para elegir el parlante con mejor respuesta, ya que nunca suenan idénticos",
        "Desconectar tres parlantes para no sobrecalentar el amplificador",
        "Grabar únicamente con micrófonos de cinta pasivos"
      ],
      correct: 1,
      explanation: "Debido a tolerancias de fabricación, desgaste de la tela o envejecimiento de la suspensión de cartón, cada cono desarrolla un matiz tímbrico propio."
    },
    {
      id: 4,
      question: "¿En qué consiste la técnica 'Old School' de microfonía de amplificadores y qué requisito acústico exige?",
      options: [
        "Pegar la cápsula a la madera trasera; requiere amplificadores sin válvulas",
        "Alejar el micrófono entre 30 y 40 cm para captar el plano integrado del parlante; requiere obligatoriamente una sala bien tratada acústicamente",
        "Usar micrófonos de carbón del siglo XIX conectados en serie",
        "Colocar el amplificador dentro de un cajón sellado sin ventilación"
      ],
      correct: 1,
      explanation: "Permite que la onda se desarrolle en el aire y capte la dispersión global del amplificador, pero absorbe reverberación que en salas no tratadas arruinaría la toma."
    },
    {
      id: 5,
      question: "¿Cómo se define la 'Regla del 3 a 1' para mitigar problemas de cancelación de fase con múltiples micrófonos?",
      options: [
        "Por cada micrófono dinámico se deben utilizar tres de condensador",
        "Por cada unidad de distancia entre la fuente y el primer micrófono, debe haber al menos tres unidades de distancia entre el primer y el segundo micrófono",
        "El volumen del micrófono principal debe ser tres veces superior al secundario",
        "Grabar siempre tres tomas consecutivas antes de elegir la definitiva"
      ],
      correct: 1,
      explanation: "Mantener una separación al menos tres veces superior a la distancia fuente-primer micro asegura que la señal filtrada llegue atenuada, evitando cancelaciones de peine perceptibles."
    },
    {
      id: 6,
      question: "¿En qué consiste el 'Marshall Trick' aplicado en cajas acústicas cerradas 4x12?",
      options: [
        "Invertir la fase del altavoz superior izquierdo",
        "Combinar un micrófono frontal cercano con un micrófono de cinta o condensador en las esquinas traseras para captar la resonancia y peso de la madera",
        "Quitar la tela frontal protectora para incrementar los 10 kHz",
        "Colocar dos cajas directas pasivas en el bucle de efectos"
      ],
      correct: 1,
      explanation: "Capta la presión física y el retumbe subsónico de la madera trasera del gabinete sellado, sumando masa y cuerpo que el micro frontal no registra."
    },
    {
      id: 7,
      question: "Al microfonear una guitarra acústica, ¿dónde se ubica el punto dulce (Sweet Spot) y por qué se evita la boca del instrumento?",
      options: [
        "En la pala de afinación; se evita la boca porque no emite frecuencias agudas",
        "Cerca del traste 12 (unión mástil-cuerpo); se evita la boca para no capturar una acumulación incontrolable de graves y turbulencias de aire",
        "En el cuerpo posterior; se evita la boca porque absorbe el brillo de las cuerdas",
        "A 2 metros del suelo orientado hacia el puente de madera"
      ],
      correct: 1,
      explanation: "El traste 12 brinda equilibrio entre el ataque de púa/cuerda y el cuerpo acústico; la boca actúa como cavidad resonante con exceso de energía grave confusa."
    },
    {
      id: 8,
      question: "¿Por qué un micrófono de cinta (Ribbon) generalmente no se recomienda para una guitarra acústica de tono oscuro (ej. marca Martin)?",
      options: [
        "Porque la presión sonora de las cuerdas rompe la cinta interna",
        "Porque ofrece un timbre cálido y suave que atenúa los agudos, haciendo que el instrumento pierda definición y suene empastado",
        "Porque requiere +48V y puede magnetizar las cuerdas de bronce",
        "Porque su patrón polar siempre se vuelve hipercardioide en acústicas"
      ],
      correct: 1,
      explanation: "Los micrófonos de cinta suavizan las frecuencias altas; en guitarras que ya son densas y oscuras de fábrica, resta el brillo y la articulación necesarios."
    },
    {
      id: 9,
      question: "¿En qué situaciones resulta conveniente registrar en simultáneo la señal de línea (piezoeléctrico) de una guitarra electroacústica?",
      options: [
        "Para afinar automáticamente la guitarra con un pedal MIDI",
        "En salas con mala acústica/ruido, en vivo para evitar acoples, o como refuerzo de ataque rápido para combinar con la calidez del micrófono",
        "Para transformar cuerdas de nylon en cuerdas de acero por software",
        "Exclusivamente cuando el preamplificador de la placa es valvular"
      ],
      correct: 1,
      explanation: "La cápsula piezoeléctrica o de línea entrega transitorios directos inmunes al ruido de sala, permitiendo recuperar brillo o salvar tomas en entornos complejos."
    },
    {
      id: 10,
      question: "¿Cómo se gestiona el parámetro del 'Buffer Size' para evitar latencia al monitorear guitarras en el DAW?",
      options: [
        "Ajustar un buffer alto (1024 muestras) para grabar y bajo (64 muestras) para mezclar",
        "Ajustar un buffer bajo (ej. 64 o 128 muestras) para grabar con mínima latencia y elevarlo al mezclar para que el procesador soporte los plugins",
        "Mantener siempre el buffer en cero deshabilitando los drivers ASIO",
        "Cambiar los cables de guitarra por cables balanceados TRS"
      ],
      correct: 1,
      explanation: "Un buffer reducido procesa paquetes rápidos sin retardo audible al ejecutar; al mezclar se amplía para desahogar la CPU y procesar cadenas de plugins pesadas."
    }
  ],
  flashcards: [
    {
      front: "¿Por qué aislar el amplificador de guitarra en una sala separada al grabar con banda?",
      back: "Para evitar que su volumen se filtre (sangrado/bleeding) en los micrófonos abiertos de la batería y el bajo."
    },
    {
      front: "¿Por qué se deben elevar los amplificadores combo del piso?",
      back: "Para desacoplarlos del suelo y evitar el 'base loading' (acumulación artificial y resonante de frecuencias graves)."
    },
    {
      front: "Comportamiento dinámico de la guitarra eléctrica distorsionada",
      back: "Alta compresión natural originada en las etapas del circuito y los conos, con rango dinámico estrecho y pocos transitorios bruscos."
    },
    {
      front: "Diferencia tímbrica On-Axis vs Off-Axis en parlantes de guitarra",
      back: "On-Axis (centro) entrega ataque agresivo, mordida y brillo; Off-Axis (borde) atenúa altas frecuencias dando un timbre suave y dulce."
    },
    {
      front: "¿Por qué el Shure SM57 encaja con el amplificador de guitarra eléctrica?",
      back: "Por su recorte natural en subgraves y su realce en la zona de medios-agudos donde radica la energía principal del instrumento."
    },
    {
      front: "Técnica 'Old School' en amplificadores de guitarra",
      back: "Alejar el micrófono 30-40 cm para registrar la suma integrada del altavoz y el aire de la sala (exige óptima acústica ambiental)."
    },
    {
      front: "¿Qué enuncia la Regla del 3 a 1 en microfonía?",
      back: "La distancia entre dos micrófonos debe ser al menos el triple de la distancia existente entre la fuente emisora y el primer micrófono."
    },
    {
      front: "¿En qué consiste el 'Marshall Trick'?",
      back: "Combinar un micrófono frontal cercano con uno de cinta o condensador en las esquinas traseras del gabinete 4x12 para captar la resonancia del mueble."
    },
    {
      front: "Ventaja de la toma directa limpia (DI) en guitarras",
      back: "Permite conservar un respaldo puro para aplicar Reamping físico o procesar con emuladores digitales si la toma de amplificador no convence."
    },
    {
      front: "Sweet Spot estándar para microfonear guitarra acústica",
      back: "Alrededor del traste 12 (unión de mástil y caja), balanceando el brillo de cuerdas con el cuerpo de madera."
    },
    {
      front: "¿Por qué evitar apuntar el micrófono a la boca de la guitarra acústica?",
      back: "Porque genera acumulación descontrolada de graves sordos (boominess) y turbulencias de aire que tapan la articulación."
    },
    {
      front: "Tipo de micrófono ideal para guitarra acústica solista",
      back: "Condensador de diafragma pequeño por su respuesta rápida a transitorios rápidos y definición de agudos naturales."
    },
    {
      front: "Riesgo de microfonear acústica oscura con micrófono de cinta",
      back: "Acentúa la falta de brillo entregando una textura opaca y empastada sin presencia en la mezcla."
    },
    {
      front: "Uso de la señal piezoeléctrica por línea en acústicas",
      back: "Salva grabaciones en entornos ruidosos, previene acoples en directo y aporta transitorios definidos para sumar al micro de aire."
    },
    {
      front: "Ajuste de Buffer Size: Grabación vs. Mezcla",
      back: "Buffer bajo (64-128 samples) al grabar para eliminar retardo; Buffer alto (512-1024 samples) al mezclar para dar rendimiento a la CPU."
    },
    {
      front: "Preparación corporal del guitarrista acústico antes de la toma",
      back: "Retirar pulseras, anillos, relojes o prendas con cremalleras metálicas para evitar ruidos parásitos por fricción sobre la madera."
    },
    {
      front: "Criterio de escucha en cajas 4x12",
      back: "Evaluar con detenimiento los 4 conos; siempre hay diferencias de desgaste y tono entre ellos a pesar de compartir modelo."
    },
    {
      front: "Función de la tapa de goma en la boca de guitarras acústicas en vivo",
      back: "Frenar la resonancia interna de la caja para evitar acoples (feedback) provocados por monitores o fuentes exteriores potentes."
    },
    {
      front: "¿Afecta la fidelidad grabar directo por línea a la interfaz?",
      back: "No; la guitarra eléctrica es una señal de voltaje que los conversores e IRs modernos reproducen con realismo profesional indiscutible."
    },
    {
      front: "Microfonía en triángulo estéreo para guitarra acústica",
      back: "Un micro puntual cercano y dos micrófonos aéreos en triángulo respetando la regla 3 a 1, exigiendo inmovilidad al instrumentista."
    }
  ]
};