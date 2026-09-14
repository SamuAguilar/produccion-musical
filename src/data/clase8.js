export const clase8 = {
  id: 8,
  title: "Ingeniería en la Grabación de Baterías y Afinación Tonal",
  summary: "Acústica y base loading, vibraciones simpatéticas, afinación por octavas y tónica, selección de parches, balance de platillos y microfonía avanzada.",
  sections: [
    {
      title: "La Filosofía de la Captura: La Batería como la Frontera Final",
      content: "La grabación de una batería acústica representa la 'frontera final' en la formación de un productor o ingeniero de audio. Es el instrumento más complejo de registrar debido a la cantidad simultánea de cuerpos resonantes, las colisiones espectrales y los desafíos críticos de fase acústica entre múltiples micrófonos. Si aprendes a capturar una batería con solvencia, cualquier otro instrumento acústico o eléctrico te resultará sumamente sencillo.\n\nEl principio rector del estudio es innegociable: la mezcla se utiliza exclusivamente para embellecer, nunca para arreglar tomas deficientes. Una grabación es un registro permanente que acompañará la trayectoria del artista durante toda su vida. Si el instrumento presenta problemas acústicos, parches desgastados o ruidos mecánicos (chirridos en pedales, holguras en torres o herrajes sueltos), la regla de oro del técnico es no grabar hasta solucionar mecánicamente el problema en la sala.",
      image: {
        placeholder: true,
        comment: "Set de batería acústica profesional microfoneado en sala de grabación con pies desacoplados y parches asentados."
      },
      bulletPoints: [
        { label: "Prioridad en la Fuente", text: "La calidad final del master depende al 100% de la pureza acústica emitida en la sala." },
        { label: "Cero Ruidos Mecánicos", text: "Lubricar pedales de bombo/hi-hat y apretar herrajes antes de montar el primer soporte de micrófono." },
        { label: "Criterio de Producción", text: "Suspender la grabación si el sonido base de los tambores no posee el timbre o afinación deseados." }
      ]
    },
    {
      title: "Acústica Física Aplicada: Longitud de Onda y Sobrecarga de Graves",
      content: "La primera decisión crítica de una sesión no es qué micrófono conectar, sino en qué punto exacto de la sala se ubicará el drumset. Las ondas de sonido no se propagan de forma lineal como una flecha; viajan de manera omnidireccional y concéntrica a través del aire.\n\nPara calcular la dimensión física real de un sonido, empleamos la fórmula de longitud de onda:\n\n$$\\lambda = \\frac{v}{f}$$\n\nDonde $v$ es la velocidad del sonido en el aire ($340\\text{ m/s}$) y $f$ es la frecuencia en Hercios (Hz). Si tenemos un bombo cuya frecuencia fundamental resuena en $80\\text{ Hz}$, calculamos su longitud física:\n\n$$\\lambda = \\frac{340}{80} = 4{,}25\\text{ metros}$$\n\nUna onda de $80\\text{ Hz}$ requiere $4{,}25\\text{ metros}$ en el espacio para completar un solo ciclo de oscilación. Si situamos la batería pegada a una pared, la onda rebotará de inmediato y se sumará a la señal original con desfases y cancelaciones destructivas. Por esta razón, el set debe situarse alejado al menos un par de metros de los límites de la sala.\n\nEl Fenómeno del 'Base Loading' (Sobrecarga de Graves):\nLas bajas frecuencias se acumulan de forma masiva en las esquinas y uniones de paredes. Colocar la batería contra un rincón genera un refuerzo artificial incontrolable de subgraves que empasta la mezcla. La solución técnica consiste en desacoplar el instrumento de las paredes y orientar el set en un ángulo de $45^{\circ}$ respecto a los muros para romper reflexiones paralelas.\n\nControl de Superficies y Test del Aplauso:\nLos ventanales y vidrios de cabina son superficies rígidas altamente reflectantes que generan ecos metálicos flotantes (flutter echo). Podemos controlarlos cubriéndolos con cortinados gruesos de pana densa. Para verificar la salud acústica del recinto antes de armar, caminamos por el área aplaudiendo enérgicamente: si percibimos un decaimiento suave y seco, la sala es apta; si escuchamos un zumbido o repiqueteo agudo, debemos colocar paneles fonoabsorbentes móviles.",
      image: {
        placeholder: true,
        comment: "Diagrama de dispersión de longitud de onda de 80 Hz (4.25 m) y posicionamiento del drumset a 45° respecto a las esquinas para mitigar el base loading."
      },
      bulletPoints: [
        { label: "Cálculo de Lambda (\\lambda)", text: "La longitud de onda equivale a la velocidad de propagación dividida por la frecuencia." },
        { label: "Base Loading", text: "Acumulación desmedida de energía grave al encajonar el instrumento en esquinas reflectantes." },
        { label: "Angulación a 45 Grados", text: "Disposición recomendada para desviar rebotes perpendiculares hacia zonas de absorción." },
        { label: "Test del Aplauso", text: "Diagnóstico empírico de sala para detectar reflexiones tempranas metálicas indeseadas." }
      ]
    },
    {
      title: "Vibraciones Simpatéticas y Aislamiento Mecánico",
      content: "La vibración simpatética es la resonancia involuntaria por la cual la energía acústica generada por un tambor (por ejemplo, el impacto del bombo o un tom) excita físicamente la membrana de otro cuerpo cercano (como la bordona del redoblante o un platillo).\n\nEste fenómeno no es una cualidad musical: es una fuente de suciedad acústica provocada comúnmente por una mala afinación relativa entre cuerpos, una sala con resonancias modales descontroladas o micrófonos mal angulados. Si el micrófono del redoblante capta continuamente el zumbido de la bordona cada vez que el baterista pisa el bombo, la mezcla perderá definición, pegada y claridad en el canal central.",
      bulletPoints: [
        { label: "Resonancia Simpatética", text: "Transferencia de energía acústica entre parches acoplados que ensucia la captura." },
        { label: "Consecuencia en Mezcla", text: "Pérdida de separación (bleeding) y acumulación de armónicos parásitos en pistas individuales." },
        { label: "Prevención Técnica", text: "Desfasar las frecuencias fundamentales de los tambores contiguos y ajustar la tensión de la bordona." }
      ]
    },
    {
      title: "Afinación Tonal por Frecuencias y Gestión de Octavas",
      content: "Aunque la batería no se perciba como un instrumento melódico tradicional, cada uno de sus tambores produce una frecuencia fundamental dominante (la vibración por segundo en Hz con mayor energía). Afinar la batería en relación armónica con la tonalidad de la canción es lo que separa una toma amateur de una producción de nivel internacional.\n\nEstructura Armónica del Set:\n• Bombo (Kick): Se afina para que su frecuencia fundamental coincida exactamente con la Tónica de la canción (por ejemplo, en la nota Re si el tema está en Re).\n• Redoblante (Snare): Se busca su fundamental en una Tercera (mayor o menor según el carácter emocional de la obra) o en una Quinta justa.\n• Toms: Se afinan en intervalos melódicos escalonados (Tónica, Tercera, Cuarta y Quinta) para que los rellenos (fills) desciendan con musicalidad y no como ruidos percusivos inconexos.\n\nLa Disyuntiva del Bombo: Octava 1 vs. Octava 2:\n• Octava 2 ($65\\text{ Hz}$ a $125\\text{ Hz}$ - El Cuerpo y Punch): Es el estándar absoluto para música pop, rock y producciones acústicas. En este rango ($80\\text{ Hz}$, entre Re# y Mi) reside el golpe que se reproduce con claridad en cualquier sistema comercial, desde auriculares hasta teléfonos y altavoces de coche.\n• Octava 1 ($32\\text{ Hz}$ a $61\\text{ Hz}$ - El Sub-bajo Sísmico): Esta octava no se escucha como nota; se siente como una presión física visceral en el pecho. Es indispensable en géneros urbanos como Trap, Hip-Hop o música electrónica (kicks tipo 808). Sin embargo, exige una sala de gran volumen y tratamiento especializado: una onda de $40\\text{ Hz}$ supera los $8\\text{ metros}$ de longitud, y si el parche queda excesivamente suelto perderá definición de baqueta convirtiéndose en un sonido apagado (flap mecánico).\n\n¿Por qué los Toms y el Redoblante evitan la Octava 1?\nLos toms y el redoblante no pueden trabajar en la Octava 1 porque su física exige tensión para proyectar tono. Si destensamos un tom de rack para forzarlo a $50\\text{ Hz}$, el parche quedará suelto, sin ataque ni afinación reconocible, y el enorme desplazamiento de aire activará las vibraciones simpatéticas de toda la batería.",
      image: {
        placeholder: true,
        comment: "Tabla de correspondencia nota musical a frecuencia en Hz para Octavas 1 (subgraves), 2 (bombo/bajo) y 3 (redoblante)."
      },
      bulletPoints: [
        { label: "Afinación en la Tónica", text: "Garantiza que el bombo trabaje en armonía consonante con el bajo eléctrico." },
        { label: "Octava 2 (Estándar)", text: "Aporta presencia, impacto percusivo (punch) y garantiza traducción fiel en altavoces comerciales." },
        { label: "Octava 1 (Sub-bass)", text: "Presión física subsónica reservada para géneros urbanos, exigiendo parches firmes y salas amplias." },
        { label: "Consistencia Melódica", text: "Afinar toms en cuartas o terceras asegura pasajes rítmicos concertados con la tonalidad de la base." }
      ]
    },
    {
      title: "Distribución Espectral en el Rock Alternativo",
      content: "Para evitar el empastamiento espectral y lograr que cada cuerpo mantenga su carril limpio en la mezcla, dividimos el rango de frecuencias de forma estratégica:\n\n1. Bombo (Kick) -> Octava 2: Frecuencia fundamental situada entre $65\\text{ Hz}$ y $90\\text{ Hz}$ para garantizar solidez y pegada sin chocar con los subgraves profundos. Si la canción está en Re (D), buscamos su fundamental exacta en $73{,}42\\text{ Hz}$.\n2. Tom de Piso (Floor Tom) -> Frontera entre Octava 2 y 3: Se afina comúnmente entre $90\\text{ Hz}$ y $110\\text{ Hz}$ (notas Fa# a La de la Octava 2), actuando como bisagra entre la zona grave del bombo y los tambores medios.\n3. Redoblante (Snare) -> Octava 3: Un redoblante estándar de 14 pulgadas debe vivir en la Octava 3, entre $180\\text{ Hz}$ y $240\\text{ Hz}$. Afinarlo en la Octava 2 lo haría sonar blando, flojo y en colisión directa con el bombo; en la Octava 3 gana el chasquido (crack), filo y cuerpo necesarios para cortar mezclas de guitarras distorsionadas. Si el tema está en Re, afinamos en su quinta (La a $220\\text{ Hz}$) o en su tercera mayor (Fa# a $185\\text{ Hz}$).\n4. Toms Aéreos (Rack Toms) -> Octava 3: Se sitúan por encima del tom de piso en intervalos de cuarta justa (por ejemplo, afinando a $146\\text{ Hz}$ en Re de la Octava 3).",
      image: {
        placeholder: true,
        comment: "Gráfico de distribución espectral: Bombo en Octava 2 (70-90 Hz), Tom de Piso (100 Hz) y Redoblante en Octava 3 (180-240 Hz)."
      },
      bulletPoints: [
        { label: "Reparto de Octavas", text: "El bombo domina el espectro grave (Octava 2) y el redoblante gobierna el rango medio (Octava 3)." },
        { label: "Prevención de Choques", text: "Separar las fundamentales del bombo y redoblante por una octava completa evita el enmascaramiento." },
        { label: "Corte en Mezcla", text: "Un redoblante afinado entre 180 Hz y 240 Hz penetra a través de guitarras de rock con máxima pegada." }
      ]
    },
    {
      title: "Diseño Físico: Parches, Aleaciones de Platillos y Microfonía",
      content: "El timbre de una batería comienza en la elección de sus componentes físicos antes de intervenir con ecualizadores:\n\nTipologías de Parches:\n• Arenados (Coated): Recubrimiento rugoso blanco; entregan un timbre cálido, ataque dulce, grano orgánico y armónicos controlados.\n• Hidráulicos (Con capa interna de aceite): Eliminan armónicos agudos de raíz; sonido sumamente seco, pegada densa y sostenimiento (sustain) muy corto.\n• Transparentes (Clear): Sonido brillante, transitorios de ataque muy pronunciados y amplia resonancia armónica abierta.\n\nEquilibrio Físico de Platillos frente a los Overheads:\nUn problema clásico en la mezcla es que los platillos Crash, al ubicarse físicamente más cerca de los micrófonos aéreos (Overheads), saturan la toma con un volumen desmedido que tapa al Hi-Hat y al Ride. La solución acústica consiste en equilibrar las aleaciones: utilizar platos finos y ligeros (de menor volumen relativo) en las posiciones altas próximas a los micrófonos, y platos de aleación pesada o más gruesa (de mayor volumen) para el Hi-Hat y el Ride, logrando un balance homogéneo natural en los aéreos.\n\nInnovaciones de Microfonía:\n• Micrófonos Dual-Element: Cápsulas combinadas en un solo chasis (un transductor de condensador para transitorios agudos y uno dinámico para presión en graves) ubicados dentro del bombo para captar el rango íntegro del parche.\n• Técnica de Harding: Consiste en colocar el micrófono apuntando lateralmente al casco (madera o metal) del redoblante en vez de apuntar al parche batidor; se utiliza para suavizar tambores con ataques excesivamente duros o agresivos.\n• Triggers de Contacto: Sensores piezoeléctricos montados en el aro que traducen la vibración en impulsos para disparar samplers en el DAW, permitiendo reforzar tomas o sustituir golpes de forma sincronizada.",
      image: {
        placeholder: true,
        comment: "Cápsula de micrófono Dual-Element dentro del bombo y esquema de la Técnica de Harding apuntando al casco del redoblante."
      },
      bulletPoints: [
        { label: "Parches Coated", text: "Timbre cálido y natural con reducción orgánica de asperezas en agudos." },
        { label: "Compensación de Platillos", text: "Platos finos arriba y aleaciones pesadas en Ride/Hi-Hat para emparejar niveles hacia los Overheads." },
        { label: "Técnica de Harding", text: "Captura lateral orientada al casco para domesticar un ataque percusivo demasiado áspero." },
        { label: "Los 3 Pilares Críticos", text: "El 90% de la energía de una producción rítmica se sustenta en el Bombo, Redoblante y Hi-Hat." }
      ]
    }
  ],
  quiz: [
    {
      id: 1,
      question: "¿Por qué se considera a la batería la 'frontera final' en la ingeniería de grabación?",
      options: [
        "Porque requiere cables no balanceados obligatoriamente",
        "Por la cantidad de cuerpos, la interrelación de frecuencias, el sangrado y los problemas de fase entre micrófonos",
        "Porque solo puede grabarse con micrófonos de carbón pasivos",
        "Porque debe comprimirse con limitador antes de los preamplificadores"
      ],
      correct: 1,
      explanation: "Microfonear múltiples fuentes acústicas simultáneas con alto rango dinámico y transitorios rápidos desafía el control de fase, sangrado y respuesta de sala."
    },
    {
      id: 2,
      question: "¿Qué fenómeno acústico negativo ocurre si ubicas la batería pegada a una esquina o pared trasera del estudio?",
      options: [
        "Cancelación total de armónicos en 5 kHz",
        "Base Loading: una sobrecarga artificial y descontrolada de frecuencias graves",
        "Inversión automática de la polaridad en los overheads",
        "Aumento del umbral de Phantom Power"
      ],
      correct: 1,
      explanation: "Las esquinas y paredes concentran las ondas estacionarias graves; esto genera un incremento artificial de frecuencias bajas que enturbia la toma."
    },
    {
      id: 3,
      question: "Según el cálculo de longitud de onda (λ = 340 m/s / F), ¿cuánto espacio físico necesita aproximadamente un bombo a 80 Hz para disipar su onda?",
      options: [
        "Menos de 50 centímetros",
        "Aproximadamente 4.25 metros",
        "Exactamente 12 metros",
        "Apenas 1.5 metros"
      ],
      correct: 1,
      explanation: "Dividiendo 340 m/s entre 80 Hz se obtienen 4.25 metros, evidenciando por qué el drumset debe alejarse al menos un par de metros de los límites de la sala."
    },
    {
      id: 4,
      question: "¿Qué son las 'vibraciones simpatéticas' durante la captura de batería?",
      options: [
        "La interacción armónica voluntaria entre dos guitarras afinadas en quintas",
        "Cuando la energía acústica del golpe de un cuerpo (ej. bombo o toms) hace vibrar indeseadamente otro cuerpo (ej. la bordona del redoblante)",
        "El rebote de los platillos en paneles absorbentes de espuma",
        "La compresión paralela generada en los envíos auxiliares"
      ],
      correct: 1,
      explanation: "Ocurre cuando la resonancia mecánica o aérea excita componentes adyacentes, introduciendo zumbidos o suciedad en canales cercanos."
    },
    {
      id: 5,
      question: "¿Por qué en géneros como el Rock la frecuencia fundamental del bombo se afina predominantemente en la Octava 2 (65 Hz a 125 Hz)?",
      options: [
        "Porque la Octava 2 aporta el golpe (punch) y cuerpo audible en casi cualquier altavoz, desde monitores hasta teléfonos móviles",
        "Porque en la Octava 2 no existen vibraciones secundarias",
        "Porque los micrófonos dinámicos no captan por debajo de 120 Hz",
        "Para evitar tener que usar cables balanceados XLR"
      ],
      correct: 0,
      explanation: "La Octava 2 concentra el impacto y definición audible general; la Octava 1 (30-60 Hz) produce presión física de subgraves que muchos altavoces comerciales no reproducen."
    },
    {
      id: 6,
      question: "Para evitar empastamiento y competencia espectral en Rock, ¿en qué octavas se distribuyen habitualmente el bombo y el redoblante?",
      options: [
        "Ambos afinados en la Octava 1 para máximo sub-bajo",
        "Bombo dominando los graves en Octava 2 (~70-90 Hz) y redoblante dominando los medios en Octava 3 (~180-240 Hz)",
        "Redoblante en Octava 1 y bombo en Octava 4",
        "Ambos en Octava 3 compartiendo la misma frecuencia fundamental"
      ],
      correct: 1,
      explanation: "Esta separación espectral garantiza que el redoblante aporte su chasquido y cuerpo característico en Octava 3 sin enturbiar la fundamental del bombo en Octava 2."
    },
    {
      id: 7,
      question: "¿Qué características tonales aportan los parches Hidráulicos (de aceite) frente a los Transparentes (Clear)?",
      options: [
        "Aportan brillo extremo y sustain largo con armónicos resonantes",
        "Atenúan armónicos indeseados, entregando un sonido seco, mucho 'punch' y sustain corto",
        "Transforman el tambor en un transductor capacitivo activo",
        "Impiden que el parche se desafine con cambios de clima"
      ],
      correct: 1,
      explanation: "La capa interna de aceite amortigua las oscilaciones periféricas del parche, reduciendo colas de armónicos y concentrando el ataque seco."
    },
    {
      id: 8,
      question: "Para evitar que los platillos más cercanos a los Overheads saturen la toma respecto al Ride o Hi-Hat, ¿qué estrategia de aleaciones se utiliza?",
      options: [
        "Usar platillos finos (menor volumen) arriba y platillos de aleación pesada/gruesa (mayor volumen) para Hi-Hat y Ride",
        "Poner cinta adhesiva cubriendo el 100% de la campana de todos los platos",
        "Grabar los platillos en tomas separadas después de la batería",
        "Elevar los micrófonos aéreos a 6 metros de altura"
      ],
      correct: 0,
      explanation: "Al usar platos superiores más delgados se equilibra la presión sonora captada por proximidad respecto a los platos inferiores de aleación densa."
    },
    {
      id: 9,
      question: "¿En qué consiste la técnica de microfonía de 'Dual Element' en el bombo?",
      options: [
        "Colocar dos micrófonos de cinta pasivos enfrentados en 180°",
        "Un micrófono combinado con doble cápsula (condensador para transitorios/agudos y dinámica para graves de impacto)",
        "Conectar dos cables TS a una sola entrada balanceada XLR",
        "Usar dos altavoces invertidos como cajas de inyección pasiva"
      ],
      correct: 1,
      explanation: "Integra ambas cápsulas en fase dentro de un mismo cuerpo: la dinámica soporta la presión del golpe grave y el condensador captura el clic de la maza."
    },
    {
      id: 10,
      question: "Si el presupuesto o tiempo son muy limitados en una sesión, ¿cuáles son los 3 pilares indispensables que suenan el 90% del tiempo?",
      options: [
        "Tom 1, Tom 2 y Gong",
        "Bombo (Kick), Redoblante (Snare) y Hi-Hat",
        "Micrófonos de ambiente (Room), Splash y Cencerro",
        "Overheads, Pandereta y Bombo"
      ],
      correct: 1,
      explanation: "El bombo, redoblante y hi-hat sostienen el pulso rítmico vertebral de prácticamente cualquier producción moderna."
    }
  ],
  flashcards: [
    {
      front: "¿Por qué la batería es el instrumento más complejo de grabar?",
      back: "Por la multiplicidad de piezas cercanas interactuando acústicamente, el sangrado mutuo y la coherencia de fase entre micrófonos directos y aéreos."
    },
    {
      front: "¿Qué es el 'Base Loading' en el drumset?",
      back: "La acumulación artificial excesiva de frecuencias bajas al situar la batería en esquinas o muy pegada a paredes reflectantes."
    },
    {
      front: "Distancia mínima recomendada de la batería a las paredes",
      back: "Al menos dos metros para permitir la dispersión libre de ondas graves y mitigar reflexiones directas tempranas."
    },
    {
      front: "¿Qué provoca las vibraciones simpatéticas en la batería?",
      back: "La excitación acústica o mecánica de un cuerpo secundario (como el entorchado del redoblante) provocada por el golpe del bombo o los toms."
    },
    {
      front: "¿Qué beneficio aporta afinar el bombo en la tónica de la canción?",
      back: "Concierta el piso rítmico con la progresión armónica y el bajo, reduciendo conflictos de enmascaramiento."
    },
    {
      front: "Diferencia acústica entre afinar el bombo en Octava 1 vs. Octava 2",
      back: "Octava 2 (65-125 Hz) aporta el golpe audible en cualquier sistema; Octava 1 (30-60 Hz) genera presión de subgraves física sentida en el pecho."
    },
    {
      front: "Rango habitual de afinación para el Redoblante (Snare)",
      back: "Octava 3 (~180 Hz a 240 Hz), asegurando pegada y articulación sin invadir la zona del bombo."
    },
    {
      front: "Cualidad de los parches Arenados (Coated)",
      back: "Sonido cálido, respuesta balanceada y transitorio de ataque más suave."
    },
    {
      front: "Cualidad de los parches Hidráulicos (Oil)",
      back: "Atenuación severa de sobretonos, ataque seco, pegada densa y sustain muy corto."
    },
    {
      front: "Cualidad de los parches Transparentes (Clear)",
      back: "Sonido abierto, ataque brillante definido y riqueza de armónicos superiores."
    },
    {
      front: "Compensación de aleaciones en platillos",
      back: "Platillos superiores delgados (menos volumen relativo hacia los overheads) y platillos inferiores pesados (mayor volumen en Hi-Hat/Ride)."
    },
    {
      front: "¿Qué es un micrófono Dual Element para bombo?",
      back: "Un micro que reúne una cápsula dinámica (para presión grave) y una de condensador (para ataque del golpe) perfectamente alineadas en fase."
    },
    {
      front: "¿En qué consiste la técnica de Harding en redoblante?",
      back: "Microfonear lateralmente el casco (shell) del tambor en lugar del parche para suavizar ataques excesivamente agresivos."
    },
    {
      front: "¿Qué función cumple un Trigger de batería?",
      back: "Captura el pulso mecánico del impacto y emite una señal para disparar muestras (samples) desde un módulo o sampler."
    },
    {
      front: "Los tres pilares esenciales de la base rítmica",
      back: "Bombo (Kick), Redoblante (Snare) y Hi-Hat."
    },
    {
      front: "¿Por qué evitar afinar Toms de rack en Octava 1?",
      back: "El parche queda excesivamente flojo generando un chasquido inarmónico ('flap') y activando vibraciones simpatéticas en la sala."
    },
    {
      front: "Objetivo del 'Test del Aplauso' en sala",
      back: "Identificar reflexiones flotantes metálicas (flutter echo) y verificar el control acústico del entorno antes de armar micrófonos."
    },
    {
      front: "Tratamiento rápido contra ventanas reflectantes en cabina",
      back: "Cortinados densos y pesados de pana para absorber reflexiones agudas molestas."
    },
    {
      front: "Distribución armónica entre Toms",
      back: "Afinación escalonada en intervalos musicales reconocibles (terceras o cuartas) sobre la escala del tema."
    },
    {
      front: "Máxima técnica de grabación en baterías",
      back: "Asegurar afinación perfecta y ausencia de ruidos mecánicos en la sala antes de posicionar el primer micrófono."
    }
  ]
};