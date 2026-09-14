export const clase12 = {
  id: 12,
  title: "Flujo de Señal y Afinación Práctica en Vivo",
  summary: "Cadena completa de señal, relación entre fases y síntesis/ADSR, afinación paso a paso en patrón cruzado, análisis espectral con Pro-Q 4, control de sustain y calibración con TuneBot.",
  sections: [
    {
      title: "El Recorrido Completo del Flujo de Señal: De la Acústica al DAW",
      content: "Para diagnosticar fallas técnicas y tomar decisiones acústicas con criterio profesional, debemos dominar el camino exacto que recorre la información sonora desde que nace en la sala hasta que queda almacenada como código digital en la computadora:\n\n1. Fuerza Acústica Original: Se produce un evento mecánico en el espacio físico, como la emisión de la voz o el golpe seco de la baqueta sobre el parche de un tambor.\n2. Transmisión Molecular: La energía cinética del impacto comprime y descomprime las partículas del aire, propagándose en forma de ondas de presión sonora esféricas.\n3. Transducción (El Micrófono): La cápsula intercepta la vibración de las moléculas de aire; su diafragma oscila y transfiere esa energía mecánica a una corriente eléctrica diminuta de muy bajo voltaje (Mic Level, nivel de micrófono).\n4. Transmisión Eléctrica Analógica: La débil señal eléctrica viaja a través de un cable balanceado con conectores XLR (comúnmente llamado Canon) hacia la pachera (patchbay) o interfaz.\n5. El Preamplificador (Etapa de Entrada): El impulso eléctrico ingresa al preamplificador de la consola o placa de sonido. Su misión técnica obligatoria es suministrar ganancia para elevar ese voltaje al nivel de línea estándar de trabajo (Line Level).\n6. Conversión A/D e Ingreso al DAW: La señal eléctrica preamplificada entra al convertidor A/D (Analógico a Digital), que muestrea y cuantifica el voltaje continuo transformándolo en cadenas binarias (ceros y unos) legibles por el DAW (Digital Audio Workstation, la estación de trabajo de audio digital).",
      image: {
        placeholder: true,
        comment: "Diagrama de flujo de señal completo: Impacto mecánico -> Onda molecular en aire -> Cápsula XLR -> Preamplificador -> Conversor A/D -> DAW."
      },
      bulletPoints: [
        { label: "Transducción Acústica", text: "Transformación de energía cinética del aire en microvoltaje analógico dentro de la cápsula." },
        { label: "Mic Level a Line Level", text: "El preamplificador acondiciona el voltaje para que el conversor opere en su rango dinámico ideal." },
        { label: "Digitalización A/D", text: "Codificación binaria precisa de la onda analógica para su procesamiento no destructivo en el DAW." }
      ]
    },
    {
      title: "Fase Acústica, Síntesis de Sonido y Modulación ADSR",
      content: "Comprender la alineación de fase y la física de las ondas no solo sirve para evitar cancelaciones al colocar micrófonos en baterías; es el cimiento conceptual indispensable para la síntesis de sonido, el diseño sonoro y el beatmaking moderno.\n\nEn un sintetizador analógico o digital, el oscilador genera una onda periódica fundamental pura (como una onda senoidal). Al sumarla con otras formas de onda ricas en armónicos (como una onda cuadrada o diente de sierra), se originan timbres complejos. La articulación temporal de ese sonido se modela mediante la envolvente ADSR:\n• Attack (Ataque): Tiempo que tarda el sonido en alcanzar su amplitud máxima tras ser disparado. Un ataque largo y progresivo genera texturas etéreas, colchones y pads ambientales.\n• Decay (Decaimiento): Tiempo que demora la señal en caer desde el pico de ataque hasta el nivel de sostenimiento.\n• Sustain (Sostenido): Nivel de amplitud constante que se mantiene mientras la nota permanece pulsada. Un sostenido reducido a cero produce golpes percusivos cortos y secos.\n• Release (Liberación o Relajación): Tiempo que tarda la cola del sonido en extinguirse por completo una vez que se suelta la tecla.\n\nEl productor profesional no se limita a utilizar presets (ajustes predeterminados de fábrica); esculpe sus propios instrumentos desde la física del oscilador y la envolvente, asegurando que cada elemento ocupe un lugar armónico exacto en el arreglo.",
      image: {
        placeholder: true,
        comment: "Gráfica de la envolvente ADSR detallando las fases de Attack, Decay, Sustain y Release sobre la amplitud y el tiempo."
      },
      bulletPoints: [
        { label: "Osciladores y Armónicos", text: "Superposición de ondas simples y complejas para diseñar timbres exclusivos desde cero." },
        { label: "Envolvente ADSR", text: "Control milimétrico del tiempo de ataque, caída, nivel de sostenido y cola de extinción." },
        { label: "Criterio de Producción", text: "Rechazar la dependencia pasiva de presets comerciales para dotar a la obra de identidad sonora propia." }
      ]
    },
    {
      title: "Anatomía y Mecánica del Redoblante de Estudio",
      content: "Antes de colocar una llave o un micrófono, debemos analizar minuciosamente los componentes mecánicos del redoblante en la sala:\n\n• El Casco (Shell): Cilindro estructural que define el cuerpo. En el estudio trabajamos comúnmente con cascos de madera maciza o multilaminada (como arce o abedul), apreciados por su resonancia cálida, redonda y orgánica, aunque también conviven cascos metálicos (acero, latón o aluminio) que aportan mayor volumen y ataque cortante.\n• Parche Batidor (Superior): Membrana superior que recibe el golpe directo de la baqueta. Empleamos un parche de alta resistencia (marca Evans) equipado con un refuerzo central metálico/polimérico (power dot) y dos anillos de sordina perimetrales integrados para controlar armónicos agudos desbocados desde la propia física del material.\n• Parche Resonador (Inferior / Snare Side): Membrana ultrafina y transparente (de apenas 2 a 3 milésimas de pulgada) diseñada para transferir la oscilación del aire hacia la bordona sin oponer resistencia mecánica.\n• La Bordona (Snare Wire): Conjunto de alambres de acero entorchados que rozan el parche inferior produciendo el crujido metálico articular. Cuenta con una palanca de desenganche rápido (throw-off) y un tornillo de ajuste fino lateral que calibra la presión de los alambres contra el parche.",
      image: {
        placeholder: true,
        comment: "Despiece mecánico del redoblante mostrando casco de madera, parche batidor con refuerzo central, parche resonador fino y mecanismo de bordona."
      },
      bulletPoints: [
        { label: "Casco de Madera", text: "Resonancia cálida y profundidad armónica dócil para géneros acústicos y pop/rock." },
        { label: "Parche con Refuerzo", text: "Control de armónicos y tolerancia ante impactos continuos de baqueta." },
        { label: "Parche Resonador Fino", text: "Membrana delgada indispensable para excitar la bordona con extrema sensibilidad." },
        { label: "Ajuste de Bordona", text: "Regulación de tensión para evitar zumbidos flojos o asfixia del golpe por exceso de presión." }
      ]
    },
    {
      title: "Taller Práctico: Protocolo de Afinación Paso a Paso",
      content: "Una afinación profesional no se deja librada al azar; sigue un procedimiento sistemático para garantizar que el parche baje con tensión simétrica:\n\nPaso 1: Desarmado y Asentamiento Limpio\nSe retiran los tornillos superiores con la llave, se limpia el borde de apoyo (bearing edge) del casco y se monta el parche nuevo. Se asienta el aro verificando que sus orificios coincidan visualmente en el centro de las torres roscadas.\n\nPaso 2: Ajuste Manual a Dedos (Nivelación Basal)\nSe enroscan todos los tornillos utilizando exclusivamente las yemas de los dedos, sin emplear la llave de afinación. Se aprietan hasta que los dedos no puedan girar más. Este paso garantiza que todas las torres comiencen exactamente con la misma resistencia basal y previene dañar o falsear las roscas metálicas. El patrón de apriete debe ser estrictamente en cruz (norte, sur, oeste, este y diagonales enfrentadas). Apretar en círculo deformaría el aro de forma asimétrica, arruinando la tensión.\n\nPaso 3: Tensión Pareja con Llave\nPartiendo de la base apretada a mano, introducimos la llave de afinar y aplicamos exactamente dos vueltas completas de llave a cada tornillo, manteniendo rigurosamente el recorrido en cruz. El estiramiento mecánico uniforme incrementa la rigidez superficial de la membrana, elevando su frecuencia de resonancia.\n\nPaso 4: Ecualización de Torres de Oído\nTomamos una baqueta y percutimos con suavidad a unos 2 centímetros hacia el interior frente a cada torre de afinación. Si una torre suena más grave que las demás, se le aplica un pequeño giro de compensación (un octavo o un cuarto de vuelta de llave) hacia arriba. Se recorre el perímetro hasta que el golpe frente a cada torre produzca exactamente el mismo tono auditivo.\n\nPaso 5: La Sordina Temporal de la Billetera\nDurante la ecualización de torres, el parche emite colas de vibración prolongadas (decay y ring) que confunden la percepción del tono central. Para evaluar cómo se sentirá el impacto en la mezcla seca, apoyamos momentáneamente una billetera de cuero sobre el borde del parche batidor. La billetera disipa los sobrearmónicos al instante. Una vez chequeado el cuerpo del golpe, se retira para seguir afinando las torres.",
      image: {
        placeholder: true,
        comment: "Secuencia fotográfica del proceso: 1. Ajuste a dedos, 2. Recorrido en cruz con llave, 3. Prueba de baqueta frente a cada torre, 4. Billetera como sordina temporal."
      },
      bulletPoints: [
        { label: "Apriete Inicial a Mano", text: "Punto de partida homogéneo que protege las roscas y nivela la membrana." },
        { label: "Ajuste Cruzado Obligatorio", text: "Garantiza un descenso paralelo del aro metálico sin torsiones mecánicas." },
        { label: "Igualación Perimetral", text: "Mismo tono en Hz frente a cada torre para lograr un parche afinado en simpatía." },
        { label: "Truco de la Billetera", text: "Apagado temporal de sobrearmónicos para juzgar el tono del golpe central sin estorbos." }
      ]
    },
    {
      title: "Refinamiento Espectral con Analizador Visual: De 175 Hz a 223 Hz",
      content: "Para corroborar que la afinación coincida con las necesidades de la sesión, recurrimos al analizador de espectro en tiempo real del ecualizador digital FabFilter Pro-Q 4:\n\nEl Diagnóstico de los 175 Hz (Nota Fa / F3):\nTras la primera fase de ajuste parejo, el analizador muestra un pico de energía resonante clavado en 175 Hz. En el contexto del estudio, los 175 Hz representan una zona peligrosa. Aunque no colisiona directamente con el bombo (cuyo cuerpo vive en los 80 Hz), queda peligrosamente encima de las notas fundamentales del bajo eléctrico (120 Hz a 130 Hz), provocando un enmascaramiento pastoso en el canal central.\n\nLa Transición hacia los 223 Hz (Nota Sol# / G#3):\nPara despejar el espacio del bajo y conferirle al redoblante mayor chasquido y mordida articular (crunchiness), aplicamos media vuelta adicional de llave en cruz a todas las torres. Volvemos a golpear y el analizador ubica el pico fundamental en 223 Hz, correspondiente a la nota Sol sostenido en la tercera octava.\n\nCriterio Armónico de Producción:\nRegistrar el redoblante en Sol sostenido (223 Hz) es una decisión de diseño acústico perfecta si la canción se encuentra en la tonalidad de Mi Mayor (E). La nota Sol# es la tercera mayor de la escala de Mi, lo que hace que el redoblante resuene en consonancia armónica con los acordes de la banda. Si la composición estuviera en Mi Menor, bastaría con destensar sutilmente las torres hasta asentar el parche en Sol natural (G, 196 Hz).\n\nSordinas Definitivas con MoonGels:\nConseguida la afinación en 223 Hz, retiramos la billetera provisional y fijamos dos gelatinas adhesivas (MoonGels) sobre el borde periférico del parche batidor. Esto elimina el ring excesivo de forma controlada y entrega un golpe central compacto, agresivo y enfocado.",
      image: {
        placeholder: true,
        comment: "Captura de pantalla de FabFilter Pro-Q 4 comparando el pico inicial en 175 Hz (zona conflictiva con el bajo) y el pico definitivo en 223 Hz (Sol#3)."
      },
      bulletPoints: [
        { label: "Conflicto en 175 Hz", text: "Proximidad excesiva con las fundamentales del bajo que genera turbidez rítmica en la mezcla." },
        { label: "Claridad en 223 Hz", text: "Mayor rigidez que despeja el subgrave y resalta el chasquido del impacto." },
        { label: "Concordancia Armónica", text: "Afinar en la tercera de la tonalidad (Sol# para Mi Mayor) integra el tambor con los instrumentos armónicos." },
        { label: "Fijación con MoonGels", text: "Control definitivo del decaimiento superficial sin apagar la respuesta de transitorios." }
      ]
    },
    {
      title: "Control del Sustain y Dispositivos de Medición Física (Tune-Bot)",
      content: "La duración del sonido del redoblante no depende solo de las sordinas; se regula físicamente mediante la relación de tensión entre ambas membranas:\n\n• Sustain Prolongado: Se obtiene cuando el parche batidor (arriba) y el parche resonador (abajo) están afinados exactamente a la misma tensión y frecuencia. La masa de aire rebota en sincronía generando una resonancia simpática extendida.\n• Sonido Seco y Decaimiento Corto: Se logra rompiendo intencionalmente esa simetría acústica, tensando el parche inferior considerablemente más apretado que el parche batidor. El parche inferior frena el movimiento del aire, acortando el decay de forma mecánica.\n• Procedimiento para Afinar el Parche Resonador: Desenganchamos la bordona con la palanca lateral, invertimos el tambor y colocamos un almohadón pesado sobre el parche batidor para enmudecerlo por completo. De este modo evaluamos las torres del parche fino de abajo con la baqueta sin interferencias del parche superior ni de los alambres metálicos.\n\nEl Afinador Digital Físico (Tune-Bot):\nEn situaciones de gira o sesiones donde no podemos conectar el redoblante al DAW para abrir un ecualizador, utilizamos el Tune-Bot. Es un dispositivo electrónico que se pinza directamente en el aro del tambor. Funciona como un afinador piezoeléctrico de guitarra: capta la vibración directa y entrega lecturas duales conmutables, indicando el valor numérico en Hercios (Hz) o la nota musical exacta, permitiendo igualar torres en cuestión de minutos bajo presión.",
      image: {
        placeholder: true,
        comment: "Tune-Bot enganchado en el aro del redoblante mostrando la frecuencia en Hz y esquema de acolchado sobre el parche batidor para afinar el resonador."
      },
      bulletPoints: [
        { label: "Tensiones Idénticas", text: "Máxima resonancia simpática y sustain largo entre ambas caras del tambor." },
        { label: "Resonador Ultratenso", text: "Frena la oscilación interna para conseguir un golpe seco y enfocado." },
        { label: "Aislamiento por Almohadón", text: "Técnica obligatoria para apagar el parche superior mientras se calibra la cara inferior." },
        { label: "Hardware Tune-Bot", text: "Medición rápida de frecuencia en aro para entornos de directo y preproducción en sala." }
      ]
    },
    {
      title: "Operativa de Estudio: El Pit Stop y la Microfonía Física",
      content: "La gestión del tiempo y los recursos mecánicos define el profesionalismo en la cabina:\n\n• La Filosofía del Pit Stop: Poner a punto una batería acústica en el estudio debe operar con la precisión y rapidez del recambio de neumáticos en boxes de Fórmula 1. Se requiere como mínimo una hora completa para la inspección mecánica y afinación de cascos, y otra hora adicional para el emplazamiento de trípodes, alineación de fases y balance de ganancias. Asumir que la batería viene 'lista' desde el domicilio del músico es un grave error: el traslado en automóvil desajusta los tensores de los cascos por vibración y cambios térmicos.\n• El Micrófono como Ecualizador Físico: El emplazamiento del Shure SM57 en el redoblante modela el tono de forma directa. Acercar la cápsula a pocos milímetros del parche incrementa los graves por Efecto de Proximidad, engrosando el cuerpo. Apuntar perpendicularmente al centro enfatiza el impacto de la madera, mientras que inclinar la cápsula hacia el aro exterior introduce el canto armónico y la apertura del metal.\n• Preamplificadores Transparentes de Stock: En la práctica de afinación se utilizan preamps transparentes y lineales (como los previos de serie de las interfaces Universal Audio). Su electrónica limpia garantiza que el tono evaluado en los monitores sea el resultado real de la tensión del parche y la madera, sin coloraciones de transformadores que enmascaren la afinación.\n• Sordinas Caseras de Emergencia: Ante la falta de MoonGels comerciales, podemos doblar un trozo de papel absorbente en un pequeño cuadrado y fijarlo al borde del parche con cinta de carrocero o cinta aislante. Si bien el abuso de cintas delata una afinación defectuosa, este recurso resuelve tomas secas en situaciones imprevistas.",
      bulletPoints: [
        { label: "Tiempo de Setup", text: "Reservar dos horas mínimas para afinación estructural y balance de microfonía antes de grabar." },
        { label: "Desajuste por Traslado", text: "La vibración del transporte descalibra siempre la tensión mecánica de las torres." },
        { label: "Preamplificación Neutra", text: "Monitorear con previos lineales para calibrar el tono acústico genuino de la madera." },
        { label: "Sordina de Papel y Cinta", text: "Recurso de emergencia para controlar colas de armónicos ante falta de accesorios comerciales." }
      ]
    }
  ],
  quiz: [
    {
      id: 1,
      question: "En el flujo de señal analógica hacia el DAW, ¿cuál es el orden secuencial correcto que recorre la energía sonora?",
      options: [
        "Fuerza acústica -> Preamplificador -> Transmisión molecular -> Conversor A/D -> Micrófono",
        "Fuerza acústica -> Transmisión molecular -> Transducción (Micrófono) -> Transmisión eléctrica (XLR) -> Preamplificador -> Conversor A/D -> DAW",
        "Micrófono -> Conversor D/A -> Preamplificador -> Cable de altavoz -> DAW",
        "Fuerza acústica -> Conversor A/D -> Preamplificador -> Transducción -> DAW"
      ],
      correct: 1,
      explanation: "El evento mecánico en sala desplaza moléculas de aire; el micrófono transluce la vibración a microvoltaje por cable XLR hacia el previo, para luego ser digitalizado por el conversor A/D antes de entrar al software."
    },
    {
      id: 2,
      question: "¿Por qué el estudio de la interacción de fases y la física de micrófonos es fundamental también para el Beatmaking y la síntesis de sonido?",
      options: [
        "Porque los sintetizadores solo pueden conectarse mediante cables de micrófono balanceados",
        "Porque la combinación de osciladores, cancelación de ondas y modulación de envolventes ADSR operan bajo los mismos principios físicos de sumatoria y cancelación de fase",
        "Porque sin un preamplificador físico a válvulas no se pueden cargar plugins VST",
        "Porque la inteligencia artificial anula automáticamente las fases en los sintetizadores virtuales"
      ],
      correct: 1,
      explanation: "Construir timbres combinando ondas senoidales, cuadradas o complejas y moldear la envolvente dinámica ADSR comparte la misma base física que la interacción de fase acústica entre micrófonos."
    },
    {
      id: 3,
      question: "Al cambiar el parche de un redoblante, ¿por qué los tornillos se deben apretar primero exclusivamente con los dedos de la mano?",
      options: [
        "Para afinar el instrumento directamente en la Octava 2 sin herramientas",
        "Para establecer una tensión base idéntica en todo el perímetro del aro y evitar falsear o robar las roscas de las torres",
        "Para calentar el aro metálico mediante fricción manual",
        "Para silenciar por completo la bordona inferior"
      ],
      correct: 1,
      explanation: "Apretar a mano hasta el tope natural iguala la base de tensión en todas las torres y asegura que los tornillos entren perpendiculares sin morder las roscas internas."
    },
    {
      id: 4,
      question: "¿Qué consecuencia negativa se produce si se ajustan los tornillos de afinación de forma lineal consecutiva en vez de un patrón cruzado?",
      options: [
        "El micrófono dinámico de redoblante pierde su rechazo cardioide",
        "El aro desciende de forma asimétrica, torsionando y deformando permanentemente el metal y desequilibrando la tensión del parche",
        "Se produce un bucle de masa de 50 Hz en la consola",
        "La frecuencia fundamental desciende inmediatamente a la Octava 1"
      ],
      correct: 1,
      explanation: "El ajuste en cruz (arriba, abajo, izquierda, derecha) garantiza que el aro baje perfectamente paralelo respecto al casco, impidiendo deformaciones mecánicas irreversibles."
    },
    {
      id: 5,
      question: "Durante la ecualización auditiva torre por torre, ¿por qué se apoya transitoriamente una billetera sobre el parche?",
      options: [
        "Para cambiar el tono de la nota fundamental dos semitonos arriba",
        "Para apagar de inmediato los sobretonos molestos (decay y ring largo) y evaluar de forma aislada el tono seco del golpe central",
        "Para magnetizar las ondas estacionarias del casco de madera",
        "Para proteger el parche de fracturas mecánicas por baquetazos"
      ],
      correct: 1,
      explanation: "La billetera actúa como sordina temporal: seca el timbre para evaluar el cuerpo del tambor en contexto de grabación y luego se retira para seguir afinando torres con su resonancia."
    },
    {
      id: 6,
      question: "En el análisis espectral con FabFilter Pro-Q 4, ¿por qué una fundamental de 175 Hz (nota Fa) en el redoblante se considera conflictiva para mezclar?",
      options: [
        "Porque satura los conversores de la interfaz en frecuencias de agudos",
        "Porque se sitúa peligrosamente cerca del rango fundamental del bajo eléctrico (120 Hz - 130 Hz), provocando un empaste rítmico en la mezcla",
        "Porque colisiona de forma directa con los 80 Hz del bombo",
        "Porque los monitores de estudio no reproducen los 175 Hz"
      ],
      correct: 1,
      explanation: "Aunque no invade el bombo (~80 Hz), los 175 Hz quedan pegados a las notas fundamentales del bajo, ensuciando la definición de la base; elevarlo a ~220 Hz limpia ese espacio."
    },
    {
      id: 7,
      question: "Si una canción está en la tonalidad de Mi Mayor (E), ¿por qué es una decisión de producción acertada afinar el redoblante en Sol Sostenido (223 Hz)?",
      options: [
        "Porque Sol Sostenido es la tercera mayor de la escala de Mi, logrando que el golpe resuene en perfecta concordancia armónica con el arreglo",
        "Porque 223 Hz es la frecuencia de máxima atenuación del Hi-Hat",
        "Porque a 223 Hz el micrófono cardioide rechaza todo el sangrado lateral",
        "Porque los parches Evans solo soportan esa frecuencia exacta"
      ],
      correct: 0,
      explanation: "Afinar la fundamental del tambor en intervalos clave como la tercera mayor (G# para la escala de E) integra el instrumento orgánicamente a la armonía de la producción."
    },
    {
      id: 8,
      question: "¿Cómo se manipula la relación de tensión física entre parche batidor (arriba) y resonador (abajo) para regular el sustain?",
      options: [
        "Tensión idéntica en ambos maximiza el sustain; tensar significativamente más el resonador inferior acorta el decay logrando un sonido seco",
        "Aflojar al máximo el parche resonador inferior alarga la cola del sonido",
        "El parche inferior no influye en la duración ni en el timbre del tambor",
        "Afinar el parche inferior en Octava 1 duplica la resonancia"
      ],
      correct: 0,
      explanation: "Tensiones parejas favorecen la resonancia simpática interna prolongando el sustain; desfasar tensiones aumentando la rigidez del resonador corta el decaimiento de forma controlada."
    },
    {
      id: 9,
      question: "Al afinar el parche resonador inferior de forma aislada, ¿cuál es el procedimiento técnico para que no interfieran otros elementos?",
      options: [
        "Activar el Phantom Power en el micrófono de la bordona",
        "Desenganchar la bordona, dar vuelta el tambor y apoyar un almohadón pesado sobre el parche batidor para enmudecer su vibración",
        "Dejar la bordona tensada y golpear exclusivamente con baquetas de fieltro",
        "Quitar el parche batidor superior"
      ],
      correct: 1,
      explanation: "Liberar la malla metálica evita ruidos de alambre y amortiguar el parche batidor con un objeto denso aísla el tono del parche fino para afinar torre por torre sin resonancias parásitas."
    },
    {
      id: 10,
      question: "¿Por qué en el taller práctico de captura se optó por utilizar preamplificadores de interfaz transparentes (de stock)?",
      options: [
        "Porque eran los únicos compatibles con micrófonos dinámicos",
        "Para asegurar una respuesta ultra neutra y limpia, garantizando que el color provenga de la física del instrumento y la microfonía, sin coloración del circuito",
        "Para comprimir la señal antes de ingresar al conversor digital",
        "Porque los preamps valvulares están prohibidos para instrumentos percusivos"
      ],
      correct: 1,
      explanation: "Un preamplificador transparente y de respuesta lineal permite verificar el timbre genuino del tambor y evaluar la posición del micrófono sin artefactos armónicos añadidos."
    }
  ],
  flashcards: [
    {
      front: "Recorrido del flujo de señal de audio profesional",
      back: "Fuerza acústica -> vibración molecular de aire -> transducción (micrófono) -> transmisión eléctrica (XLR) -> preamplificador -> conversión A/D -> DAW."
    },
    {
      front: "¿Por qué el control de fase impacta en la síntesis y beatmaking?",
      back: "Porque combinar osciladores de sintetizador y perfilar envolventes ADSR responde a las mismas leyes de sumatoria, cancelación y dinámica de ondas acústicas."
    },
    {
      front: "Propósito del ajuste manual con dedos en las torres de afinación",
      back: "Igualar la tensión base de arranque en todos los puntos del aro y prevenir que los tornillos entren torcidos y rompan las roscas."
    },
    {
      front: "Riesgo de apretar tornillos de afinación en orden circular",
      back: "Baja el aro desalineado, deforma la estructura metálica permanentemente y crea tensiones desiguales en la superficie del parche."
    },
    {
      front: "Uso de la billetera como sordina de prueba",
      back: "Elimina de inmediato el ring y armónicos molestos para escuchar el tono central real antes de aplicar sordinas definitivas."
    },
    {
      front: "¿Por qué 175 Hz (nota Fa) es conflictivo para el redoblante?",
      back: "Queda peligrosamente próximo al rango de las frecuencias fundamentales del bajo (120-130 Hz), provocando empastamiento en la mezcla."
    },
    {
      front: "Concordancia armónica a 223 Hz en tono de Mi Mayor (E)",
      back: "223 Hz corresponde a Sol Sostenido (G#), tercera mayor de la escala de Mi, logrando que el tambor encaje musicalmente con la armonía."
    },
    {
      front: "¿Cómo lograr el máximo sustain acústico en el redoblante?",
      back: "Ajustando exactamente a la misma tensión y frecuencia el parche batidor (superior) y el resonador (inferior)."
    },
    {
      front: "¿Cómo acortar el decay del redoblante mecánicamente?",
      back: "Tensando el parche resonador inferior notablemente más apretado que el parche batidor superior."
    },
    {
      front: "Técnica para afinar el parche resonador inferior",
      back: "Desenganchar la bordona, voltear el tambor y silenciar el parche superior con un almohadón para evaluar torre por torre sin acoples."
    },
    {
      front: "¿Qué funciones cumple el afinador físico TuneBot?",
      back: "Mide por vibración de contacto la frecuencia exacta en Hercios (Hz) de cada torre o identifica directamente la nota musical del parche."
    },
    {
      front: "Tiempo estimado de setup y afinación de batería en estudio",
      back: "Aproximadamente una hora para calibración mecánica/afinación y otra hora para microfonía, chequeo de fases y prueba de señal."
    },
    {
      front: "¿Por qué no asumir que la batería llega afinada al estudio?",
      back: "El transporte, cambios de temperatura y apilamiento de cascos dentro de vehículos descalibra la tensión de los aros y parches."
    },
    {
      front: "Efecto de inclinar el micrófono hacia el aro del redoblante",
      back: "Capta más armónicos metálicos y el chasquido del aro; apuntar al centro enfatiza el impacto seco de la baqueta."
    },
    {
      front: "Criterio de preamps limpios de stock en afinación",
      back: "Brindan transparencia y linealidad absoluta, permitiendo juzgar el sonido real de la sala sin adición de armónicos del previo."
    },
    {
      front: "Sordina casera de emergencia para redoblante",
      back: "Un trozo de papel doblado en cuadrado acolchado fijado al borde del parche con cinta para frenar armónicos no deseados."
    },
    {
      front: "Función del centro de refuerzo en parches de redoblante",
      back: "Aumenta la durabilidad ante baquetazos constantes y controla de forma natural el exceso de sobretonos en el punto de contacto."
    },
    {
      front: "Mecanismo de la bordona del redoblante",
      back: "Malla de alambres con palanca de desenganche rápido y tornillo lateral para graduar la presión de contacto contra el parche inferior."
    },
    {
      front: "Efecto de la tensión de la llave en la altura tonal",
      back: "A mayor rigidez por estiramiento mecánico, mayor es la velocidad de oscilación y más aguda es la frecuencia fundamental generada."
    },
    {
      front: "Regla del productor sobre el espacio del redoblante en mezcla",
      back: "Afinar el redoblante por encima de los 200 Hz para otorgar crujido y dejar el espectro medio-grave despejado para bajo y guitarras."
    }
  ]
};