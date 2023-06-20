let INDEX_PREGUNTA = 0;
let puntaje = 0;

cargarPregunta(INDEX_PREGUNTA);

function cargarPregunta(index) {
  objetoPregunta = baseDePreguntas[index];

  opciones = [...objetoPregunta.distractores];
  opciones.push(objetoPregunta.respuesta);
  for (let i = 0; i < 4; i++) {
    opciones.sort(() => Math.random() - 0.5);
  }

  document.getElementById("pregunta").innerHTML = objetoPregunta.pregunta;
  document.getElementById("opcion-1").innerHTML = opciones[0];
  document.getElementById("opcion-2").innerHTML = opciones[1];
  document.getElementById("opcion-3").innerHTML = opciones[2];
  document.getElementById("opcion-4").innerHTML = opciones[3];

  // Obtener el nivel correspondiente al índice de la pregunta
  const nivel = obtenerNivelPregunta(index);

  if (nivel) {
    mostrarMensajeNivel(nivel);
  }
}

function obtenerNivelPregunta(index) {
  // Obtener el nivel del comentario asociado a la pregunta
  const comentario = baseDePreguntas[index].comentario;

  // Extraer el nivel del comentario (nivel X)
  const nivelRegex = /nivel (\d+)/i;
  const match = comentario.match(nivelRegex);

  if (match) {
    // El nivel está presente en el comentario
    return match[1];
  }

  return null; // No se encontró un nivel
}

function mostrarMensajeNivel(nivel) {
  const mensaje = `¡Nuevo nivel: ${nivel}!`;
  // Aquí puedes mostrar el mensaje en un elemento HTML o utilizar librerías como SweetAlert para mostrarlo como un popup
  // Ejemplo con SweetAlert:
  Swal.fire({
    title: mensaje,
    text: "¿Listo?",
    icon: "info",
  });
}

async function seleccionarOpción(index) {
  let validezRespuesta = opciones[index] == objetoPregunta.respuesta;
  if (validezRespuesta) {
    await Swal.fire({
      title: "Respuesta correcta",
      text: "La respuesta ha sido correcta",
      icon: "success",
    });
    puntaje++;
  } else {
    await Swal.fire({
      title: "Respuesta Incorrecta",
      html: `La respuesta correcta es ${objetoPregunta.respuesta}`,
      icon: "error",
    });
  }
  INDEX_PREGUNTA++;
  if (INDEX_PREGUNTA >= baseDePreguntas.length) {
    await Swal.fire({
      title: "Juego terminado",
      text: `Tu puntaje fue de: ${puntaje}/${baseDePreguntas.length}`,
    });
    INDEX_PREGUNTA = 0;
    puntaje = 0;
  }
  cargarPregunta(INDEX_PREGUNTA);
}
