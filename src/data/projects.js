// Cada objeto genera una tarjeta y su página de detalle. Usa un slug único.
export const projects = [
  {
    slug: "movilidad-ecobici",
    title: "Análisis de movilidad ECOBICI",
    category: "Análisis de datos",
    description:
      "Explorar la ciudad a través de sus recorridos: una propuesta de análisis de movilidad en bicicleta.",
    tools: ["Python", "Pandas", "Visualización"],
    visual: "mobility",
    question:
      "¿Cómo podrían variar los patrones de uso de bicicletas según la hora y el día?",
    approach: [
      "Identificar y documentar una fuente pública de datos de ECOBICI.",
      "Revisar calidad, fechas, valores faltantes y condiciones de uso.",
      "Explorar recorridos y estaciones con visualizaciones reproducibles.",
    ],
    next: "Seleccionar el conjunto de datos y definir el alcance del análisis.",
  },
  {
    slug: "senales-wavelets",
    title: "Procesamiento digital de señales con wavelets",
    category: "Física y matemáticas",
    description:
      "Una exploración de las wavelets para estudiar señales en el tiempo y la frecuencia.",
    tools: ["Python", "NumPy", "PyWavelets"],
    visual: "waves",
    question:
      "¿Cómo ayudan las wavelets a describir cambios locales en una señal?",
    approach: [
      "Construir señales sintéticas con características conocidas.",
      "Comparar representaciones temporales y tiempo-frecuencia.",
      "Documentar los supuestos y límites de cada transformación.",
    ],
    next: "Preparar un cuaderno con señales sintéticas y una primera transformación.",
  },
  {
    slug: "estadistica-simulacion",
    title: "Laboratorio de estadística y simulación",
    category: "Estadística",
    description:
      "Experimentos computacionales para acercarse a la probabilidad, la variabilidad y la inferencia.",
    tools: ["Python", "SciPy", "Matplotlib"],
    visual: "statistics",
    question:
      "¿Qué podemos aprender de la incertidumbre al repetir un experimento?",
    approach: [
      "Definir experimentos aleatorios con semillas reproducibles.",
      "Explorar distribuciones y variabilidad mediante simulación.",
      "Relacionar las observaciones con los conceptos teóricos.",
    ],
    next: "Diseñar una simulación inicial sobre distribuciones muestrales.",
  },
];
