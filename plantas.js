// plantas.js

// Array de todas las propiedades con su descripción
const propiedades = [
  { nombre: "diurético", descripcion: "Aumenta la producción de orina, ayudando a eliminar líquidos y toxinas." },
  { nombre: "digestivo", descripcion: "Estimula y facilita la digestión, aliviando pesadez y malestar estomacal." },
  { nombre: "amargo", descripcion: "Sabor amargo que estimula el apetito y la producción de bilis y jugos gástricos." },
  { nombre: "sedante", descripcion: "Efecto calmante que ayuda a reducir la ansiedad y facilita el descanso." },
  { nombre: "antiespasmódico", descripcion: "Alivia espasmos y calambres musculares, especialmente en el tracto digestivo." },
  { nombre: "demulcente", descripcion: "Suaviza e hidrata las mucosas, aliviando la irritación en garganta y sistema digestivo." },
  { nombre: "expectorante", descripcion: "Favorece la expulsión de mucosidad de las vías respiratorias." },
  { nombre: "emoliente", descripcion: "Suaviza y protege las mucosas irritadas." },
  { nombre: "antiséptico respiratorio", descripcion: "Combate microorganismos en las vías respiratorias, previniendo infecciones." },
  { nombre: "carminativo", descripcion: "Ayuda a expulsar gases intestinales, reduciendo la hinchazón y los cólicos." },
  { nombre: "galactógeno", descripcion: "Estimula la producción de leche materna." },
  { nombre: "suavizante", descripcion: "Proporciona alivio al reducir la irritación de las mucosas." },
  { nombre: "depurativo", descripcion: "Ayuda a limpiar y desintoxicar el organismo, especialmente hígado y piel." },
  { nombre: "antiinflamatorio", descripcion: "Reduce la inflamación y alivia el dolor asociado." },
  { nombre: "calmante", descripcion: "Efecto relajante, reduce nerviosismo y palpitaciones." },
  { nombre: "antiséptico urinario", descripcion: "Previene y combate infecciones en el tracto urinario." },
  { nombre: "hipoglucemiante", descripcion: "Ayuda a reducir los niveles de glucosa en sangre." },
  { nombre: "ansiolítico", descripcion: "Reduce la ansiedad y el estrés sin causar somnolencia excesiva." },
  { nombre: "diaforético", descripcion: "Estimula la sudoración, ayudando al cuerpo a eliminar toxinas." },
  { nombre: "hipotensor", descripcion: "Ayuda a reducir la presión arterial." },
  { nombre: "antioxidante", descripcion: "Combate los radicales libres, protegiendo las células del daño oxidativo." },
  { nombre: "regulador colesterol", descripcion: "Contribuye a mantener niveles de colesterol saludables." },
  { nombre: "antiulceroso", descripcion: "Protege la mucosa gástrica y ayuda en la curación de úlceras." },
  { nombre: "tónico digestivo", descripcion: "Tonifica y fortalece el sistema digestivo." },
  { nombre: "tónico hormonal", descripcion: "Ayuda a equilibrar y regular el sistema hormonal." },
  { nombre: "estimulante circulatorio", descripcion: "Mejora la circulación sanguínea, aportando vitalidad." },
  { nombre: "tónico general", descripcion: "Tonifica el organismo, aportando energía y vigor." },
  { nombre: "antiséptico", descripcion: "Previene la proliferación de gérmenes en diversas partes del cuerpo." },
  { nombre: "venotónico", descripcion: "Refuerza y mejora la función de las venas, aliviando sensación de pesadez." },
  { nombre: "depurativo hepático", descripcion: "Específico para la limpieza y desintoxicación del hígado." },
  { nombre: "depurativo cutáneo", descripcion: "Ayuda a tratar afecciones de la piel eliminando toxinas." },
  { nombre: "antivomitivo", descripcion: "Previene y reduce las náuseas y vómitos." },
  { nombre: "circulatorio", descripcion: "Mejora la circulación y aporta calor al cuerpo." },
  { nombre: "refrescante", descripcion: "Proporciona sensación de frescor y alivio en la digestión." },
  { nombre: "descongestionante", descripcion: "Alivia la congestión de las vías respiratorias." }
];

// Array de todas las plantas, cada una con su lista de propiedades e intensidad (1 = bajo, 2 = medio, 3 = alto)
const plantas = [
  {
    nombre: "Estigma de maíz",
    propiedades: [
      { nombre: "diurético", intensidad: 2 }
    ]
  },
  {
    nombre: "Genciana",
    propiedades: [
      { nombre: "amargo", intensidad: 3 },
      { nombre: "digestivo", intensidad: 3 }
    ]
  },
  {
    nombre: "Hierbaluisa",
    propiedades: [
      { nombre: "sedante", intensidad: 2 },
      { nombre: "digestivo", intensidad: 2 },
      { nombre: "antiespasmódico", intensidad: 2 }
    ]
  },
  {
    nombre: "Erísimo",
    propiedades: [
      { nombre: "demulcente", intensidad: 2 }
    ]
  },
  {
    nombre: "Gordolobo",
    propiedades: [
      { nombre: "expectorante", intensidad: 2 },
      { nombre: "suavizante", intensidad: 2 }
    ]
  },
  {
    nombre: "Malva",
    propiedades: [
      { nombre: "emoliente", intensidad: 2 },
      { nombre: "suavizante", intensidad: 2 }
    ]
  },
  {
    nombre: "Eucalipto",
    propiedades: [
      { nombre: "antiséptico respiratorio", intensidad: 3 },
      { nombre: "descongestionante", intensidad: 3 },
      { nombre: "expectorante", intensidad: 2 }
    ]
  },
  {
    nombre: "Hinojo",
    propiedades: [
      { nombre: "carminativo", intensidad: 2 },
      { nombre: "digestivo", intensidad: 2 },
      { nombre: "galactógeno", intensidad: 2 }
    ]
  },
  {
    nombre: "Malvavisco",
    propiedades: [
      { nombre: "emoliente", intensidad: 3 },
      { nombre: "suavizante", intensidad: 3 }
    ]
  },
  {
    nombre: "Fumaria",
    propiedades: [
      { nombre: "depurativo hepático", intensidad: 2 },
      { nombre: "depurativo cutáneo", intensidad: 2 }
    ]
  },
  {
    nombre: "Jengibre",
    propiedades: [
      { nombre: "antiinflamatorio", intensidad: 2 },
      { nombre: "digestivo", intensidad: 2 },
      { nombre: "antivomitivo", intensidad: 2 },
      { nombre: "circulatorio", intensidad: 2 }
    ]
  },
  {
    nombre: "Manzanilla",
    propiedades: [
      { nombre: "digestivo", intensidad: 2 },
      { nombre: "antiinflamatorio", intensidad: 2 },
      { nombre: "calmante", intensidad: 2 }
    ]
  },
  {
    nombre: "Gayuba",
    propiedades: [
      { nombre: "antiséptico urinario", intensidad: 3 }
    ]
  },
  {
    nombre: "Judía (vaina)",
    propiedades: [
      { nombre: "diurético", intensidad: 2 },
      { nombre: "hipoglucemiante", intensidad: 2 },
      { nombre: "depurativo", intensidad: 1 }
    ]
  },
  {
    nombre: "Melisa",
    propiedades: [
      { nombre: "sedante", intensidad: 2 },
      { nombre: "ansiolítico", intensidad: 2 },
      { nombre: "digestivo", intensidad: 1 }
    ]
  },
  {
    nombre: "Menta",
    propiedades: [
      { nombre: "digestivo", intensidad: 2 },
      { nombre: "carminativo", intensidad: 2 },
      { nombre: "refrescante", intensidad: 2 }
    ]
  },
  {
    nombre: "Rabo de gato",
    propiedades: [
      { nombre: "antiinflamatorio", intensidad: 2 },
      { nombre: "digestivo", intensidad: 1 },
      { nombre: "antiséptico respiratorio", intensidad: 1 }
    ]
  },
  {
    nombre: "Saúco",
    propiedades: [
      { nombre: "diaforético", intensidad: 2 },
      { nombre: "depurativo", intensidad: 1 }
    ]
  },
  {
    nombre: "Olivo",
    propiedades: [
      { nombre: "hipotensor", intensidad: 2 },
      { nombre: "antioxidante", intensidad: 2 },
      { nombre: "regulador colesterol", intensidad: 2 }
    ]
  },
  {
    nombre: "Regaliz",
    propiedades: [
      { nombre: "antiulceroso", intensidad: 2 },
      { nombre: "antiinflamatorio", intensidad: 2 },
      { nombre: "suavizante", intensidad: 2 },
      { nombre: "digestivo", intensidad: 2 }
    ]
  },
  {
    nombre: "Tila",
    propiedades: [
      { nombre: "sedante", intensidad: 3 },
      { nombre: "ansiolítico", intensidad: 2 },
      { nombre: "digestivo", intensidad: 1 }
    ]
  },
  {
    nombre: "Pasiflora",
    propiedades: [
      { nombre: "ansiolítico", intensidad: 3 },
      { nombre: "sedante", intensidad: 2 }
    ]
  },
  {
    nombre: "Romero",
    propiedades: [
      { nombre: "estimulante circulatorio", intensidad: 2 },
      { nombre: "digestivo", intensidad: 2 },
      { nombre: "tónico general", intensidad: 2 }
    ]
  },
  {
    nombre: "Tomillo",
    propiedades: [
      { nombre: "antiséptico", intensidad: 2 },
      { nombre: "expectorante", intensidad: 2 },
      { nombre: "digestivo", intensidad: 2 }
    ]
  },
  {
    nombre: "Pino",
    propiedades: [
      { nombre: "expectorante", intensidad: 2 },
      { nombre: "antiséptico respiratorio", intensidad: 2 }
    ]
  },
  {
    nombre: "Ruscus",
    propiedades: [
      { nombre: "venotónico", intensidad: 3 }
    ]
  },
  {
    nombre: "Tavadera",
    propiedades: [
      { nombre: "emoliente", intensidad: 2 },
      { nombre: "suavizante", intensidad: 2 }
    ]
  },
  {
    nombre: "Poleo menta",
    propiedades: [
      { nombre: "carminativo", intensidad: 2 },
      { nombre: "digestivo", intensidad: 2 },
      { nombre: "sedante", intensidad: 1 }
    ]
  },
  {
    nombre: "Salvia",
    propiedades: [
      { nombre: "tónico digestivo", intensidad: 2 },
      { nombre: "tónico hormonal", intensidad: 2 },
      { nombre: "antiséptico", intensidad: 2 }
    ]
  },
  {
    nombre: "Zarzaparrilla",
    propiedades: [
      { nombre: "depurativo", intensidad: 3 }
    ]
  }
];

// Exportamos ambos arrays para que puedan importarse en script.js
export { propiedades, plantas };
