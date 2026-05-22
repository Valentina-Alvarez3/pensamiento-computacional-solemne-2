
# Pensamiento-computacional-solemne-2
Proceso de p5js de sistema interactivo

# OP ART "MANDALA"
**Autora:** Valentina Alvarez Rojas

---

## 1. Descripción general

Este proyecto consiste en un **sistema visual dinámico e interactivo** desarrollado en p5.js que integra una estructura geométrica radial con un sistema de partículas autónomas. El programa genera una composición que reacciona en tiempo real a las acciones del usuario, transformando datos de entrada en respuestas visuales complejas.

## 2. Descripción Conceptual

### Idea central del proyecto
La idea central es explorar la **tensión entre el orden y el caos** mediante un sistema interactivo. Mientras el centro (mandala) representa una estructura geométrica rígida y organizada, la periferia (partículas) introduce una naturaleza volátil que reacciona defensivamente ante la presencia del usuario. El proyecto busca que el espectador no sea solo un observador, sino un agente que altera el equilibrio del sistema visual.

### Corriente o referente de diseño
Este proyecto dialoga principalmente con el **Arte Cinético** y el **Op Art (Arte Óptico)**. Al igual que en estas corrientes, el foco no está en una imagen estática, sino en el **movimiento y la percepción dinámica** que se genera a través de la repetición de formas geométricas simples y el contraste de color.

### Listado de referentes
*   **Victor Vasarely:** Por su uso de estructuras geométricas repetitivas que generan vibración visual y profundidad a través de la variación de formas (círculos a cuadrados), similar a la lógica aplicada en los anillos del mandala.
    <img width="501" height="650" alt="9zzi_Vasarely_estampe_mars246" src="https://github.com/user-attachments/assets/1b8c23ef-3c22-4ee6-a0b1-20f0e8e6691a" />

*   **Julio Le Parc:** Como referente del arte cinético, influye en la búsqueda de un sistema que requiere del espectador (input) para completar su ciclo de movimiento y transformación visual.
    <img width="3600" height="3600" alt="le parc" src="https://github.com/user-attachments/assets/a0015cb8-43a2-42f6-a3e3-8561c318c160" />

*   **Diseño Generativo:** Se utiliza como base metodológica para traducir reglas de diseño (como la simetría radial) en algoritmos computacionales.
    
### Principio de diseño explorado
El principio de diseño fundamental es el **Ritmo y la Simetría Radial**. El sistema utiliza bucles anidados para distribuir elementos de forma equitativa alrededor de un eje central, pero rompe esa monotonía mediante la **variación y el contraste** (cambio de formas y colores dinámicos) cuando el sistema detecta la interacción del usuario.

### ¿Qué se ve en pantalla?
*   **Fondo:** Un lienzo de color naranja claro constante (`background`).
*   **Sistema Central (Mandala):** Una estructura geométrica compuesta por un círculo central verde, líneas radiales y anillos de puntos decorativos.
*   **Partículas:** Un grupo de 60 formas (círculos y cuadrados) de color naranja distribuidas por el lienzo.
*   **Elementos Visuales:** El sistema utiliza figuras básicas (elipses, rectángulos, triángulos y líneas) con variaciones de color en tonos celestes, morados y rosados.

---
## 3. Input / Output y Sistema

Esta sección detalla la lógica de programación que permite la interacción entre el usuario y la composición visual, siguiendo el modelo de **entrada → procesamiento → salida**.

### A. Entradas (Inputs)
El sistema recibe datos constantes a través de:
*   **Posición del mouse (`mouseX`, `mouseY`):** El usuario controla el sistema de forma continua al mover el puntero por el lienzo.

### B. Procesamiento y Reglas del Sistema (Lógica Computacional)
El "paso invisible" donde el sistema interpreta los datos y toma decisiones lógicas:

1.  **Mapeo de Variables:** Se utiliza la función `map()` para transformar los números de la posición del mouse en parámetros de diseño. `mouseX` define la cantidad de elementos (líneas y puntos), mientras que `mouseY` controla la escala del círculo central.
2.  **Lógica de Partículas (Condicionales):** 
    - El sistema calcula la **distancia** entre el mouse y cada partícula. 
    - **Decisión:** Si la distancia es menor a 120 píxeles, se activa una regla de repulsión (`random` de alta velocidad). Si no, se aplica un movimiento suave.
3.  **Zonas de Interacción:** Mediante estructuras `if / else if`, el lienzo se divide en tres franjas verticales. Dependiendo de en qué zona esté el `mouseX`, el sistema decide dibujar elipses, rectángulos o triángulos en los extremos del mandala.
4.  **Repetición y Alternancia (Bucles):** Se utilizan bucles `for` para generar la estructura radial. Dentro de estos, el operador de módulo (`i % 2`) permite alternar colores y detalles decorativos de forma automática.

### C. Respuestas Visuales (Outputs)
El resultado es una **composición generativa dinámica**:
*   **Transformación morfológica:** El mandala cambia su complejidad y forma estructural en tiempo real.
*   **Vibración cromática:** El color del relleno varía dinámicamente según el movimiento horizontal.
*   **Comportamiento reactivo:** Las partículas muestran una conducta de "huida" ante el cursor, creando una sensación de organismo vivo.

## Diagrama de flujo



  <img width="800" height="2000" alt="Diagrama de Flujo Mandala Interactiva p5 js (1)" src="https://github.com/user-attachments/assets/34069518-0823-40be-b4ed-79995eb82321" />




Este diagrama ha sido creado con canva https://canva.link/or9q2zaxsvpm25f

### ADJUNTO LINKS P5.JS
https://editor.p5js.org/vale.alvarez/full/62TjzOZqo

https://editor.p5js.org/vale.alvarez/sketches/62TjzOZqo

y agrego codigo de p5.js
![sketch.js](https://github.com/Valentina-Alvarez3/pensamiento-computacional-solemne-2/blob/119f226cf63309a10a0494a7cabd2d5c56b75581/sketch.js)

---
## 4. Reflexión Final

El desarrollo de este proyecto permitió comprender que la programación en el contexto del diseño no se trata únicamente de generar formas atractivas, sino de **construir sistemas lógicos que reaccionan** al entorno. La transición desde una idea estática hacia una composición dinámica mediada por el **input, procesamiento y output** fue el eje central del aprendizaje.

### Aprendizajes clave:
* **Traducción del referente:** El desafío no fue imitar la estética de Vasarely o Le Parc, sino **traducir sus lógicas de movimiento y vibración visual** a través de estructuras de control como bucles y condicionales.
* **El orden vs. el caos:** Lograr que el mandala mantuviera su simetría radial mientras las partículas interactuaban de forma volátil permitió explorar la **tensión visual** de manera algorítmica.

Este ejercicio reafirma que el **pensamiento computacional** es una capacidad crítica para el diseño contemporáneo, permitiendo que el espectador deje de ser un observador pasivo y se convierta en un agente activo que altera el equilibrio de la obra es decir que interactua directamente con la obra craeda.

