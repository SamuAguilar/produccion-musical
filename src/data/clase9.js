export const clase9 = {
  id: 9,
  title: "Afinación y Grabación de Baterías: Bombo, Redoblante y Hi-Hat",
  summary: "Anatomía y afinación del redoblante, clasificación de parches Remo, sordinas, configuraciones del parche frontal del bombo, microfonía para bombo y Subkick.",
  sections: [
    {
      title: "Los Pilares del Sonido: Anatomía y Afinación del Redoblante",
      content: "En cualquier producción musical contemporánea, el 90% del tiempo de una canción se encuentra gobernado por la interacción rítmica entre el bombo, el redoblante y el hi-hat. Si esta columna vertebral no suena con peso, afinación y coherencia técnica, la mezcla colapsará sin importar la cantidad de procesamiento posterior.\n\nEl redoblante es la pieza más expresiva y demandante del kit acústico. Para dominar su captura, primero debemos comprender su arquitectura mecánica:\n• Tornillos de tensión: Varillas roscadas encargadas de ejercer presión descendente sobre el aro para estirar el parche.\n• Torres (Lugs): Receptáculos roscados anclados al casco donde ingresan los tornillos de tensión. La cantidad de torres (típicamente 6, 8 o 10) determina la precisión milimétrica del ajuste; a mayor número de torres, más homogénea es la distribución de la tensión sobre la circunferencia.\n• Aros (Hoops): Estructura metálica o de madera que presiona el borde del parche contra el borde de corte (bearing edge) del casco.\n• Bordona (Snare Wire): Malla de alambres entorchados de acero o bronce fijada en la cara inferior; al vibrar contra el parche resonante produce el chasquido y crujido metálico característico.\n\nProtocolo de Afinación Profesional en 4 Pasos:\n1. Asentamiento previo: Los parches deben reemplazarse aproximadamente una semana antes de ingresar al estudio. El polímero de mylar requiere días de uso para estirarse, ceder y estabilizar su punto de afinación sin desafinarse a mitad de la sesión.\n2. Tensión basal a mano: Tras posicionar el parche y el aro, ajustamos todos los tornillos únicamente con los dedos hasta que hagan tope firme. Esto garantiza un punto de partida de tensión parejo en todas las torres.\n3. Patrón de apriete en cruz: Al usar la llave de afinar, jamás se gira de forma circular contigua. Se ajusta en cruz (arriba, abajo, izquierda, derecha, y sus vértices diagonales) en giros de media vuelta para evitar que el aro se incline o se deforme la membrana.\n4. Calibración tonal de oído: Apoyamos la yema de un dedo en el centro del parche para ahogar el armónico principal y golpeamos con la baqueta a unos dos centímetros de cada torre. Todas las torres deben emitir exactamente el mismo tono en frecuencia (Hz). Si una suena más grave o aguda, se corrige hasta obtener una superficie perfectamente simétrica.",
      image: {
        placeholder: true,
        comment: "Esquema anatómico de un redoblante señalando torres, aro, tornillos y el patrón de ajuste en cruz numerado del 1 al 8."
      },
      bulletPoints: [
        { label: "Columna Rítmica", text: "El 90% del tiempo musical descansa sobre el bombo, redoblante y hi-hat." },
        { label: "Cantidad de Torres", text: "8 o 10 torres brindan una afinación mucho más estable y precisa que configuraciones de 6." },
        { label: "Ajuste Cruzado", text: "Evita deformaciones mecánicas en el aro y asegura un descenso equilibrado del parche." },
        { label: "Asentamiento de Mylar", text: "Cambiar parches con días de anticipación para que la tensión se estabilice antes de grabar." }
      ]
    },
    {
      title: "Categorías de Parches según el Estándar Remo",
      content: "Aunque existen múltiples marcas de percusión en el mercado, la industria utiliza la nomenclatura histórica de Remo para clasificar el grosor, la resistencia y la densidad tímbrica de los parches:\n\n• Emperor (Doble Capa): Compuesto por dos láminas de mylar de 7 milésimas de pulgada cada una. Es el parche más grueso y resistente; proporciona un sonido enfocado, oscuro, con ataque denso, menor volumen de armónicos y un decaimiento (sustain) naturalmente corto. Es el estándar para rock, pop enérgico o bateristas de golpe pesado.\n• Ambassador (Capa Simple Media): Construido con una lámina simple de 10 milésimas de pulgada. Representa el término medio y es el parche más versátil y utilizado en la historia del audio profesional. Equilibra armónicos abiertos, ataque brillante y cuerpo.\n• Diplomat (Capa Simple Fina): Fabricado en una lámina de 7.5 milésimas de pulgada. Ofrece máxima sensibilidad a las articulaciones, brillo cristalino y mucha resonancia abierta, pero resulta frágil y difícil de controlar en situaciones de alto volumen.\n\nCriterio Correctivo de Producción:\nSi un redoblante produce un 'ring' excesivo (un armónico metálico descontrolado que resuena durante segundos tras el impacto), la solución técnica no consiste en tapar la mezcla con compuertas, sino en sustituir el parche por un modelo de mayor grosor (como un Emperor) o bajar sutilmente la afinación general de la membrana.",
      image: {
        placeholder: true,
        comment: "Comparativa de capas de parches: Diplomat (fina simple), Ambassador (media simple) y Emperor (doble capa)."
      },
      bulletPoints: [
        { label: "Remo Emperor", text: "Doble capa; sonido controlado, seco, resistente y libre de sobrearmónicos agudos." },
        { label: "Remo Ambassador", text: "Capa intermedia; el estándar universal de equilibrio tonal para estudio." },
        { label: "Remo Diplomat", text: "Capa fina; extrema resonancia y respuesta sensible ante dinámicas suaves de escobilla o jazz." },
        { label: "Control de Ring", text: "Resolver colas armónicas largas cambiando el calibre del parche en la sala." }
      ]
    },
    {
      title: "Control Físico del Decaimiento: Sordinas y Gelatinas",
      content: "El Decay (decaimiento) es el tiempo en milisegundos que tarda la vibración del tambor en extinguirse tras el impacto de la baqueta. En estudio requerimos un decaimiento contenido para que la energía del redoblante no enmascare a las guitarras ni ensucie el campo estéreo.\n\nHerramientas Profesionales de Apagado:\n• Gelatinas Adhesivas (Moongels): Pequeños polímeros viscosos que se adhieren cerca del borde del parche. Absorben la propagación de ondas superficiales en el aro, extinguiendo armónicos agudos indeseados sin apagar el golpe frontal.\n• Aros de Sordina (O-Rings): Aros periféricos de mylar o plástico (en ocasiones recortados artesanalmente de radiografías médicas) que reposan libres sobre la membrana. Producen un sonido extremadamente seco y enfocado al instante.\n• Soluciones de Emergencia en Cabina: Si no disponemos de sordinas dedicadas, podemos recurrir a recursos analógicos clásicos: apoyar la billetera de cuero del baterista sobre el parche, fijar un paquete de pañuelos con cinta aisladora o colocar motas de algodón dentro del casco. Sin embargo, las herramientas de estudio entregan una respuesta predecible y reproducible entre tomas.",
      image: {
        placeholder: true,
        comment: "Redoblante con gelatina Moongel adherida al borde del parche batidor y aro O-Ring superpuesto."
      },
      bulletPoints: [
        { label: "Gestión del Decay", text: "Controlar la duración de la cola armónica para despejar espacio dinámico en la mezcla." },
        { label: "Moongels", text: "Atenuación elástica selectiva que elimina resonancias agudas perimetrales sin matar el cuerpo." },
        { label: "O-Rings", text: "Apagado perimetral masivo para estéticas rítmicas de rock seco o funk de alta definición." }
      ]
    },
    {
      title: "Diseño Acústico del Bombo: Configuración del Parche Frontal",
      content: "El bombo establece el cimiento energético y subgrave del tema. Su respuesta transitoria y su extensión en bajas frecuencias dependen directamente de la presencia y configuración del parche frontal (resonante):\n\n1. Sin Parche Frontal (Open Kick): Otorga el máximo ataque, definición de maza y sequedad absoluta, ya que el aire desplazado escapa sin compresión interna. Estética obligada en funk de los 70 o estilos donde se busca un sonido seco y percusivo.\n2. Con Puerto de Salida (Orificio Lateral / Sound Port): Es el estándar moderno de la grabación profesional. Permite introducir el micrófono al interior del casco para capturar el 'clic' del parche batidor a la vez que retiene la resonancia y peso del aire comprimido dentro del cilindro de madera.\n3. Parche Cerrado (Sin Agujero): Estética vintage masiva (estilo John Bonham en Led Zeppelin). Entrega un tono redondo, embolsado, con graves gigantescos y una resonancia larga, pero con escasa definición de transitorio de ataque.\n\nAdvertencia Crítica de Producción:\nRetirar o perforar el parche frontal altera de inmediato la resistencia aerodinámica dentro del bombo. Al retirar el parche resonante, la masa de aire no rebota y el pedal se siente blando, desarmando la memoria muscular y el control dinámico del baterista. Jamás modifiques la configuración del parche frontal el día de la grabación sin previo entrenamiento del músico.",
      image: {
        placeholder: true,
        comment: "Las 3 configuraciones de bombo: sin parche frontal, con orificio de descompresión (puerto) y parche cerrado vintage."
      },
      bulletPoints: [
        { label: "Sin Parche Resonante", text: "Ataque seco de impacto puro con decaimiento inmediato; nula contrapresión de aire." },
        { label: "Puerto Frontal", text: "El compromiso técnico ideal: versatilidad de posicionamiento interno y resonancia del casco." },
        { label: "Parche Cerrado", text: "Masa subgrave profunda y sonido voluminoso con menor claridad en el chasquido del golpe." },
        { label: "Mecánica del Pedal", text: "La descompresión del parche frontal modifica el rebote físico de la maza para el ejecutante." }
      ]
    },
    {
      title: "Microfonía para Graves: Curvas Planas vs. Ecualización en V",
      content: "Los micrófonos especializados en captar fuentes de baja frecuencia integran respuestas acústicas moldeadas para soportar altos niveles de presión sonora (SPL) y definir el contorno del instrumento:\n\n• AKG D112 (El Todoterreno de la Industria):\nPosee una respuesta relativamente neutra y plana en los medios, complementada con dos realces estratégicos: un refuerzo en 80 Hz para capturar el cuerpo y empuje del casco, y un pico de presencia en 2.5 kHz para destacar el chasquido de la baqueta o maza. Es un micrófono versátil y dócil que entrega una señal orgánica lista para ser moldeada con ecualizadores en la mezcla.\n\n• Shure Beta 52A / Audix D6 (La Curva en 'V'):\nPresentan una curva de respuesta pre-ecualizada de fábrica con un vaciado agresivo en frecuencias medias (la zona acartonada de 300 a 500 Hz) y realces masivos en subgraves profundos y agudos punzantes. Son ideales para metal, rock moderno y géneros que demandan un bombo procesado, agresivo y directo desde la entrada sin requerir esculpido quirúrgico en el DAW.",
      image: {
        placeholder: true,
        comment: "Comparativa de curvas de respuesta en frecuencia: AKG D112 (curva balanceada con picos en 80 Hz y 2.5 kHz) vs Audix D6 (vaciado en V)."
      },
      bulletPoints: [
        { label: "AKG D112", text: "Refuerzos equilibrados en 80 Hz y 2.5 kHz con medios naturales para un modelado versátil." },
        { label: "Audix D6 y Beta 52A", text: "Diseño con curva en V que corta medios y dispara subgraves y ataque moderno al instante." },
        { label: "Criterio de Elección", text: "Optar por micrófonos neutros para géneros orgánicos y curvas en V para producciones pesadas." }
      ]
    },
    {
      title: "El Sistema Subkick: Extensión Psicoacústica Subgrave",
      content: "El Subkick (tecnología popularizada por Yamaha) es un dispositivo electroacústico consistente en un altavoz de bajas frecuencias (cono de 6.5 a 8 pulgadas) montado en un chasis cilíndrico de batería y utilizado en reversa como un transductor de entrada.\n\nFundamento Físico:\nUn altavoz y un micrófono dinámico comparten el mismo principio de inducción electromagnética. Al conectar las bornas del altavoz hacia una línea de microfonía (invirtiendo su sentido de trabajo), la gran masa superficial del cono entra en oscilación ante las ondas de presión más extensas, registrando frecuencias infrasónicas (por debajo de los 50 Hz) que los diafragmas de micrófonos pequeños no logran traducir.\n\nUso en el Estudio:\nSe sitúa centrado a pocos centímetros frente al parche frontal y se graba en un canal independiente. En la mezcla, este canal no se utiliza solo; se suma por debajo de la pista del micrófono interno del bombo para aportar esa presión física que resuena en el pecho del oyente.",
      image: {
        placeholder: true,
        comment: "Subkick posicionado frente al parche resonante del bombo capturando la salida de bajas frecuencias junto a un micrófono convencional."
      },
      bulletPoints: [
        { label: "Principio Inverso", text: "Altavoz utilizado como micrófono dinámico de gran diafragma gracias a la inducción electromagnética." },
        { label: "Captura Subsónica", text: "Capta la presión física por debajo de 50 Hz que un transductor habitual atenúa por diseño." },
        { label: "Sumatoria en Mezcla", text: "Se amalgama con el micrófono de ataque para combinar chasquido frontal con empuje subgrave." }
      ]
    },
    {
      title: "Buenas Prácticas, Mantenimiento y Sustitución por Muestras",
      content: "Un productor de élite cuida los factores mecánicos y la integridad física del instrumental antes de tender un solo cable de señal:\n\n• Prioridad de Sustitución de Parches: Si el presupuesto es ajustado, se debe priorizar el cambio de los parches batidores (los de arriba) del redoblante y del bombo. En segundo término se cambian los batidores de los toms. Los parches resonantes inferiores quedan relegados como última prioridad.\n• Afinadores Digitales de Tensión (Tune-Bot): Facilitan enormemente la afinación técnica al medir de forma digital la frecuencia exacta en Hercios (Hz) frente a cada torre, permitiendo concertar la fundamental del tambor con la escala armónica del tema musical.\n• La Realidad del Drum Replacement (Sustitución por Samples): Reforzar o reemplazar tomas acústicas mediante triggers o plugins de muestras (como Slate Trigger) es un recurso legítimo en la industria, pero suele delatar una deficiencia en la sala o una afinación defectuosa. El objetivo profesional es registrar una toma acústica estelar y reservar los samples únicamente para enriquecer texturas estéticas.\n• Integridad de Platillos y Fatiga de Material: Los platillos de bronce no se desafinan, pero acumulan microfisuras invisibles por estrés acústico. Evita comprar o utilizar instrumentos provenientes de salas de ensayo comerciales: el exceso de absorción fonoabsorbente de esos recintos obliga a los bateristas a golpear con fuerza desmedida para escucharse, dejando los metales con fatiga estructural y armónicos apagados.\n• Protección en el Bombo (Kick Pad): El parche de refuerzo plástico colocado en el centro del bombo protege la membrana contra el impacto continuo de la maza, pero introduce una pequeña barrera física de amortiguación. Para grabaciones de alta fidelidad donde se persiga el ataque puro de la madera o fieltro, es recomendable prescindir de protectores excesivamente gruesos.",
      bulletPoints: [
        { label: "Jerarquía de Recambio", text: "Priorizar batidores de redoblante y bombo antes de invertir en parches resonantes." },
        { label: "Tune-Bot", text: "Herramienta digital de medición en Hz para emparejar la tensión física de las torres." },
        { label: "Muestras de Apoyo", text: "Usar samples como aderezo creativo y no como parche para ocultar capturas pobres." },
        { label: "Fatiga Mecánica", text: "Descartar platillos fatigados de salas de ensayo por pérdida de brillo y sobrearmónicos ricos." }
      ]
    }
  ],
  quiz: [
    {
      id: 1,
      question: "Al afinar un tambor o redoblante, ¿por qué el ajuste de los tornillos debe realizarse obligatoriamente en un patrón cruzado?",
      options: [
        "Para comprimir el aire dentro del casco de forma asimétrica",
        "Para distribuir la tensión de forma pareja y evitar que el aro se tuerza o deforme",
        "Para cambiar el patrón polar del micrófono cercano",
        "Para eliminar la necesidad de usar bordonas metálicas"
      ],
      correct: 1,
      explanation: "Ajustar en cruz garantiza que el aro descienda de forma uniforme sobre el borde del casco, manteniendo una afinación estable sin torceduras estructurales."
    },
    {
      id: 2,
      question: "Según el estándar de parches Remo, ¿cuál es el modelo de doble capa ideal para lograr un sonido controlado y con menor presencia de sobretonos?",
      options: [
        "Diplomat",
        "Ambassador",
        "Emperor",
        "Powerstroke 77"
      ],
      correct: 2,
      explanation: "El modelo Emperor cuenta con dos capas de película plástica que aportan mayor masa, atenuando armónicos y entregando un ataque más controlado y oscuro."
    },
    {
      id: 3,
      question: "Si el redoblante genera demasiado 'ring' o sobretonos molestos tras el golpe, ¿cuál es la solución acústica primaria recomendada?",
      options: [
        "Invertir la polaridad en el previo del DAW",
        "Colocar un parche más grueso (doble capa) o bajar la afinación, complementando con sordinas o moongels",
        "Grabar exclusivamente con un micrófono omnidireccional de cinta",
        "Aumentar la ganancia de los overheads en 6 dB"
      ],
      correct: 1,
      explanation: "Controlar el sobretono desde el instrumento mediante un parche de mayor densidad o apagadores físicos (gelatinas) soluciona el problema antes de procesar digitalmente."
    },
    {
      id: 4,
      question: "¿Qué configuración estética del bombo ofrece un tono redondo y embolsado, típico de los años 70 (estilo John Bonham), pero con menor definición de ataque?",
      options: [
        "Bombo sin parche frontal",
        "Bombo con puerto de salida de 4 pulgadas",
        "Bombo con parche frontal completamente cerrado",
        "Bombo microfoneado únicamente con un Subkick"
      ],
      correct: 2,
      explanation: "El parche frontal cerrado contiene la masa de aire y genera una resonancia profunda y envolvente, sacrificando el ataque directo de la maza."
    },
    {
      id: 5,
      question: "¿Por qué no se debe quitar el parche frontal del bombo el mismo día de la grabación si el baterista no practicó previamente así?",
      options: [
        "Porque altera bruscamente la resistencia de aire y el rebote físico de la maza sobre el pedal, afectando la ejecución del músico",
        "Porque anula la señal Phantom Power en los micrófonos dinámicos",
        "Porque satura los conversores A/D de la interfaz automáticamente",
        "Porque destruye la afinación de los toms de piso"
      ],
      correct: 0,
      explanation: "Sin el parche frontal se pierde la contrapresión del aire; el pedal se siente blando o 'fofo', desorientando la memoria muscular y el tempo del baterista."
    },
    {
      id: 6,
      question: "¿Qué curva de respuesta en frecuencia caracteriza al clásico micrófono para bombo AKG D112?",
      options: [
        "Respuesta completamente plana en todo el espectro hasta 20 kHz",
        "Medios relativamente planos con dos realces intencionales: uno en graves cerca de 80 Hz y otro en ataque alrededor de 2.5 kHz",
        "Una curva en 'V' hiper-agresiva que elimina los 80 Hz",
        "Una caída profunda a partir de 100 Hz"
      ],
      correct: 1,
      explanation: "El D112 aporta cuerpo en los 80 Hz y presencia para el golpe de la maza en 2.5 kHz, conservando medios inteligibles para múltiples géneros."
    },
    {
      id: 7,
      question: "¿Qué diferencia sonora de fábrica presentan micrófonos como el Audix D6 o Shure Beta 52 frente a micrófonos más neutros?",
      options: [
        "Una ecualización en 'V' pronunciada que recorta medios y realza graves y agudos, ideal para metal y producciones modernas",
        "Un sonido carente de frecuencias graves por debajo de 200 Hz",
        "La necesidad de ser energizados por un preamplificador Unison a válvulas",
        "Un patrón polar omnidireccional con efecto de proximidad nulo"
      ],
      correct: 0,
      explanation: "Vienen preecualizados con una curva en 'V' agresiva (scooped mids), entregando un sonido procesado, pesado y con clic definido desde la toma inicial."
    },
    {
      id: 8,
      question: "¿Qué es y cómo funciona técnicamente el dispositivo 'Subkick' colocado frente al bombo?",
      options: [
        "Un ecualizador analógico de cuatro bandas acoplado al pedal",
        "Un cono de altavoz (usualmente de 6.5\") conectado a la inversa para funcionar como transductor y captar subgraves profundos",
        "Un pedal de reverberación que emula la acústica de salas grandes",
        "Un trigger piezoeléctrico pegado a la madera del casco"
      ],
      correct: 1,
      explanation: "Al emplear un parlante convencional como transductor electromagnético inverso, su gran membrana captura la oscilación de subgraves que un micrófono habitual no toma."
    },
    {
      id: 9,
      question: "Si el presupuesto no permite reemplazar todos los parches de la batería antes de grabar, ¿cuál es el orden estricto de prioridad?",
      options: [
        "1° Resonantes de toms, 2° Resonante de bombo, 3° Batidores",
        "1° Parches batidores (superiores) de bombo y redoblante, 2° Batidores de toms, 3° Parches resonantes inferiores",
        "1° Platillos, 2° Parche resonante de redoblante, 3° Maza del pedal",
        "Cambiar únicamente los parches resonantes inferiores de toda la batería"
      ],
      correct: 1,
      explanation: "Los parches batidores reciben el impacto directo de las baquetas y definen el 90% del tono y ataque; los resonantes se priorizan en último lugar."
    },
    {
      id: 10,
      question: "¿Por qué el profesor aconseja no comprar platillos ni redoblantes usados procedentes de salas de ensayo comerciales?",
      options: [
        "Porque suelen estar desmagnetizados en sus bobinas internas",
        "Porque el exceso de absorción acústica de esas salas obliga a los músicos a golpear con fuerza desmedida, generando microfracturas y fatiga en el material",
        "Porque los aros de metal pierden la conductividad eléctrica de tierra",
        "Porque las bordonas no se pueden afinar digitalmente"
      ],
      correct: 1,
      explanation: "En salas excesivamente secas o apagadas, los bateristas tocan con fuerza desproporcionada para escucharse, causando desgaste estructural y microfisuras que matan el tono."
    }
  ],
  flashcards: [
    {
      front: "¿Por qué es crucial el asentamiento de parches nuevos antes de grabar?",
      back: "Deben colocarse con unos días de anticipación para que el material ceda, pierda rigidez y mantenga la afinación estable durante las tomas."
    },
    {
      front: "Método correcto de ajuste en aros de redoblante y tambores",
      back: "Ajuste en patrón cruzado (arriba, abajo, izquierda, derecha) tras lograr tensión inicial a mano para no torcer el aro."
    },
    {
      front: "Diferencia de parches Remo: Diplomat vs. Ambassador vs. Emperor",
      back: "Diplomat: fino, brillante y resonante; Ambassador: una capa versátil; Emperor: doble capa, controlado y con menos sobretonos."
    },
    {
      front: "Función de las gelatinas (Moongels) o sordinas en parches",
      back: "Frenar la vibración periférica del parche para controlar el decay (duración) y amortiguar sobretonos molestos ('ring')."
    },
    {
      front: "Estética de bombo sin parche frontal",
      back: "Ataque seco y máxima definición del impacto de la maza sobre el parche batidor, ideal para funk o rock directo."
    },
    {
      front: "Estética de bombo con puerto de salida (agujero)",
      back: "Estándar contemporáneo: permite colocar micrófonos internos para ataque capturando a la vez la resonancia del cuerpo."
    },
    {
      front: "Estética de bombo con parche frontal cerrado",
      back: "Sonido clásico de los 70 (tipo Bonham): envolvente, redondo y lleno de bajas frecuencias con menor presencia de ataque seco."
    },
    {
      front: "Efecto biomecánico de retirar el parche frontal de bombo",
      back: "Desaparece la contrapresión interna del aire, dejando el pedal flojo y afectando el rebote de la maza para el baterista."
    },
    {
      front: "Perfil de frecuencia del micrófono AKG D112",
      back: "Medios neutros y naturales con realce en 80 Hz (graves) y 2.5 kHz (ataque del parche)."
    },
    {
      front: "Perfil de frecuencia del Audix D6 / Shure Beta 52",
      back: "Curva preecualizada en 'V' (medios recortados, graves profundos y agudos de ataque prominentes)."
    },
    {
      front: "¿Cómo funciona el Yamaha Subkick?",
      back: "Un cono de altavoz de 6.5\" conectado a la inversa que actúa como transductor especializado en captar subgraves profundos."
    },
    {
      front: "Uso del Subkick en mezcla de bombo",
      back: "Se combina en paralelo con el micrófono principal de ataque para sumar presión física en frecuencias sub-bajas."
    },
    {
      front: "¿Qué herramienta digital asiste en la afinación precisa de parches?",
      back: "Afinadores de batería como el TuneBot, que miden la frecuencia exacta en Hercios (Hz) frente a cada torre."
    },
    {
      front: "Prioridad económica al renovar parches para una sesión",
      back: "1° Batidores de bombo y redoblante, 2° Batidores de toms, 3° Resonantes inferiores."
    },
    {
      front: "Postura frente al Drum Replacement (samples de batería)",
      back: "Recurso válido como refuerzo o estética, pero su uso obligatorio suele evidenciar deficiencias previas de afinación, sala o captura."
    },
    {
      front: "Riesgo de comprar instrumentos de salas de ensayo comerciales",
      back: "Fatiga del metal y microfracturas en platillos provocadas por golpes excesivos debido a salas con sobreabsorción acústica."
    },
    {
      front: "¿Afecta el parche protector (sticker) de bombo al sonido?",
      back: "Sí; suma masa y actúa como un amortiguador, reduciendo levemente el brillo pero protegiendo el parche del golpe continuo."
    },
    {
      front: "Comprobación auditiva al afinar un tambor",
      back: "Golpear a igual distancia frente a cada torre (lug) verificando que el tono fundamental sea idéntico en toda la circunferencia."
    },
    {
      front: "Influencia del número de torres (lugs) en el redoblante",
      back: "A mayor número de torres (ej. 10 frente a 6 u 8), mayor precisión y uniformidad para sostener la tensión del parche."
    },
    {
      front: "Regla de oro sobre la calidad de la toma de batería",
      back: "Si el instrumento no suena balanceado y libre de ruidos en la sala, no grabes; la mezcla no arregla defectos de origen."
    }
  ]
};