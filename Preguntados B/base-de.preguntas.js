let baseDePreguntas = [
  {
    //Pregunta 1
    //Nivel 1
    pregunta:
      "Elige la opción con las graficas que completan correctamente el siguiente enunciado: \n Es tu de_er ser _ene_olente con los am_i_alentes y _olu_les",
    respuesta: "b - b - v - b - v - v - b",
    distractores: [
      "v - b - v - v - b - b - v",
      "v- v - v - b - b - b - v",
      "b - v - b - v - v - v – b",
    ],
    comentario: "// Nivel 1",
  },
  {
    //Pregunta 2
    //Nivel 2
    pregunta:
      "Completa el enunciado con las graficas correstas: Como entonces me condu_e indul_entemente, ahora me chanta_ea.",
    respuesta: "j - g - j",
    distractores: ["g - g - g", "g - j - j", "j - j - g"],
    comentario: "// Nivel 2",
  },
  {
    //Pregunta 3
    pregunta:
      "Elige la opción con las palabras que completan correctamente el siguiente enunciado: Recuerda que los _ plásticos no son _ fácilmente por las máquinas trituradoras de basura",
    respuesta: "deshechos - desechos",
    distractores: [
      "deshechos - deshechos",
      "desechos - desechos",
      "desechos - deshechos",
    ],
  },
  {
    //Pregunta 4
    pregunta: "¿Cuál de los siguientes enunciados está escrito correctamente?",
    respuesta: "Cubre el prerrequisito y llegarás al puesto de vicerrector.",
    distractores: [
      "Cubre el prerequisito y llegarás al puesto de vicerrector.",
      "Cubre el prerrequisito y llegarás al puesto de vicerector.",
      "Cubre el prerequisito y llegarás al puesto de vicerector.",
    ],
  },
  {
    //Pregunta 5
    //Nivel 3
    pregunta:
      "De los siguientes enunciados con variamtes ortigráficas, elige el que tiene la ortografía correcta.",
    respuesta: "En esencia, todavía a los dieciséis años se es adolescente.",
    distractores: [
      "En escencia, todavía a los dieciséis años se es adolescente.",
      "En escencia, todavía a los diesiséis años se es adolecente.",
      "En esencia, todavia a los diesiseis años se es adolescente.",
    ],
    comentario: "// Nivel 3",
  },
  {
    //Pregunta 6
    pregunta:
      "Elige la combinación de grafías que completen correctamente el siguiente enunciado: El _ecretario de cultura fue el portavo_ de que El cascanue_es se presentará en Bellas Artes.",
    respuesta: "S - Z - C",
    distractores: ["C - S - C", "C - Z - C", "S - S - C"],
  },
  {
    //Pregunta 7
    pregunta:
      "De los siguientes enunciados con variamtes ortigráficas, elige el que tiene la ortografía correcta.",
    respuesta:
      "Antes el himno nacional me parecía ambiguo, pero luego adquirí conocimientos imborrables que me ayudaron a comprenderlo.",
    distractores: [
      "Antes el himno nacional me parecía anbiguo, pero luego adquirí conocimientos imvorrables que me ayudaron a comprenderlo.",
      "Antes el himno nacional me parecía anviguo, pero luego adquirí conocimientos imborrables que me ayudaron a comprenderlo.",
      "Antes el himno nacional me parecía ambiguo, pero luego adquirí conocimientos imborrables que me ayudaron a conprenderlo.",
    ],
  },
  {
    //Pregunta 8
    pregunta:
      "Selecciona la opción que complete correctamente la siguiente oración: ¡_, _ _ una piedra que no vi y me tropecé!",
    respuesta: "Ay - ahí - hay",
    distractores: ["Ay - ahí - ay", "Ahí - ahí - ay", "Hay - ahí - ay"],
  },
  {
    //Pregunta 9
    //Nivel 4
    pregunta: "¿Cómo se escribe?",
    respuesta: "Berenjena",
    distractores: ["Berengena", "", ""],
    comentario: "// Nivel 4",
  },
  {
    //Pregunta 10
    pregunta: "¿Qué palabra está bien escrita?",
    respuesta: "jengibre",
    distractores: ["gengibre", "", ""],
  },
  {
    //Pregunta 11
    pregunta: "¿Cómo se escribe?",
    respuesta: "Absorber",
    distractores: ["Absorver", "", ""],
  },
  {
    //Pregunta 12
    pregunta: "¿Cómo se escribe?",
    respuesta: "Jirafa",
    distractores: ["Girafa", "", ""],
  },
  {
    //Pregunta 13
    pregunta: "¿Cómo se escribe?",
    respuesta: "Te echo de menos",
    distractores: ["Te hecho de menos", "", ""],
  },
  {
    //Pregunta 14
    pregunta: "¿Cuál de estas dos palabras está mal escrita?",
    respuesta: "Expectacular",
    distractores: ["Espectacular", "", ""],
  },
  {
    //Pregunta 15
    pregunta: "¿Cuál de estas dos es la correcta?",
    respuesta: "Invención",
    distractores: ["Inbención", "", ""],
  },
  {
    //Pregunta 16
    //Nivel 5
    pregunta: "¿Cuál de los dos verbos está escrito correctamente?",
    respuesta: "Convenir",
    distractores: ["Combenir", "", ""],
    comentario: "// Nivel 5",
  },
  {
    //Pregunta 17
    pregunta: "¿Dónde lleva tilde la palabra superheroe?",
    respuesta: "Superhéroe",
    distractores: ["No lleva tilde", "Súperheore", ""],
  },
  {
    //Pregunta 18
    pregunta: "¿Cuál de las siguientes frases es correcta?",
    respuesta: "Tienes que pintar esa valla de blanco",
    distractores: ["Tienes que pintar esa vaya de blanco", "", ""],
  },
  {
    //Pregunta 19
    pregunta: "¿Cuál de estas dos frases es la correcta?",
    respuesta: "Un rayo destruyó el granero.",
    distractores: ["Un rayo destrulló el granero.", "", ""],
  },
  {
    //Pregunta 20
    pregunta: "Escoge la frase correcta",
    respuesta: "Tienes que prever las dificultades que tendremos este año.",
    distractores: [
      "Tienes que preveer las dificultades que tendremos este año.",
      "",
      "",
    ],
  },
  {
    //Pregunta 21
    pregunta: "Qué frase es la correcta",
    respuesta: "Me sorprendió que no viniera.",
    distractores: ["Me sorprendió de que no viniera.", "", ""],
  },
  {
    //Pregunta 22
    pregunta: "Escoge la frase correcta",
    respuesta: "Eva calló porque no tenía nada que decir.",
    distractores: ["Eva cayó porque no tenía nada que decir.", "", ""],
  },
  {
    //Pregunta 23
    pregunta: "¿A o ha?, ¿cuál es la correta?",
    respuesta: "Carlos ha venido a cenar, pero ha tenido que salir pronto.",
    distractores: [
      "Carlos a venido a cenar, pero a tenido que salir pronto.",
      "",
      "",
    ],
  },
];
