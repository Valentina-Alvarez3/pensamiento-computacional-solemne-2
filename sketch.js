// VARIABLES GLOBALES
let cantidadLineas;
let tamañoCirculo;
let cantidadPuntos;

// arrays para partículas
let posicionesX = [];
let posicionesY = [];
let tamaños = [];
let formas = [];

function setup() {

  createCanvas(600, 600);

  smooth();

  // crear partículas
  for (let i = 0; i < 60; i++) {

    posicionesX[i] = random(width);
    posicionesY[i] = random(height);

    tamaños[i] = random(15, 35);

    // 0 círculo / 1 cuadrado
    formas[i] = int(random(2));
  }
}

function draw() {

  // FONDO NARANJO CLARO
  background(255, 220, 190);

  // INPUT CONTINUO
  cantidadLineas = int(map(mouseX, 0, width, 12, 120));

  tamañoCirculo = map(mouseY, 0, height, 80, 260);

  cantidadPuntos = int(map(mouseX, 0, width, 10, 50));

  // dibujar partículas
  dibujarParticulas();

  // dibujar mandala
  dibujarPatron(mouseX, mouseY);
}

// FUNCIÓN PARTÍCULAS
function dibujarParticulas() {

  for (let i = 0; i < posicionesX.length; i++) {

    // distancia respecto al mouse
    let distancia = dist(
      mouseX,
      mouseY,
      posicionesX[i],
      posicionesY[i]
    );

    // CONDICIONAL
    // si el mouse está cerca se alejan
    if (distancia < 120) {

      posicionesX[i] += random(-8, 8);
      posicionesY[i] += random(-8, 8);

    } else {

      // vuelven lentamente
      posicionesX[i] += random(-1, 1);
      posicionesY[i] += random(-1, 1);
    }

    // color naranjo
    fill(255, 140, 80);

    noStroke();

    // CONDICIONAL
    // cambia forma
    if (formas[i] == 0) {

      ellipse(
        posicionesX[i],
        posicionesY[i],
        tamaños[i]
      );

    } else {

      rectMode(CENTER);

      rect(
        posicionesX[i],
        posicionesY[i],
        tamaños[i],
        tamaños[i]
      );
    }
  }
}

// FUNCIÓN PRINCIPAL
function dibujarPatron(x, y) {

  push();

  translate(x, y);

  // círculo central
  noStroke();

  fill(0, 220, 160);

  ellipse(0, 0, tamañoCirculo);

  // líneas radiales
  for (let i = 0; i < cantidadLineas; i++) {

    rotate(TWO_PI / cantidadLineas);

    stroke(0, 220, 160);

    line(0, 0, tamañoCirculo, 0);

    // colores dinámicos
    fill(
      map(mouseX, 0, width, 100, 255),
      150,
      255
    );

    noStroke();

    // FORMAS VARIABLES
    if (mouseX < width / 3) {

      ellipse(tamañoCirculo, 0, 28);

    } else if (mouseX < width / 1.5) {

      rectMode(CENTER);

      rect(tamañoCirculo, 0, 28, 28);

    } else {

      triangle(
        tamañoCirculo - 15, -15,
        tamañoCirculo + 15, 0,
        tamañoCirculo - 15, 15
      );
    }
  }

  // puntos exteriores
  let distanciaExterior = tamañoCirculo * 1.4;

  for (let i = 0; i < cantidadPuntos; i++) {

    let angulo = map(
      i,
      0,
      cantidadPuntos,
      0,
      TWO_PI
    );

    let px = cos(angulo) * distanciaExterior;

    let py = sin(angulo) * distanciaExterior;

    // colores alternados
    if (i % 2 == 0) {

      fill(120, 230, 255);

    } else {

      fill(180, 120, 255);
    }

    ellipse(px, py, 12);

    // X decorativa
    if (i % 3 == 0) {

      stroke(255);

      line(px - 4, py - 4, px + 4, py + 4);

      line(px + 4, py - 4, px - 4, py + 4);

      noStroke();
    }
  }

  pop();
}
