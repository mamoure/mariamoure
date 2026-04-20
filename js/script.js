const proyectos = [
  {
    codigo: "20.",
    coord: "00.0000000, 00.0000000",
    nombre: "Compostela Xadrez",
    servicios: "Plataforma de datos",
    toolbox: "Cartografía, Desarrollo web",
    equipo: "",
    img: ""
  },
  {
    codigo: "19.",
    coord: "00.0000000, 00.0000000",
    nombre: "Agenda Urbana del Baix Llobregat (AUBL)",
    servicios: "Evaluación de políticas, Diagnóstico integrado",
    toolbox: "Análisis de datos, Cartografía",
    equipo: "Consell Comarcal Baix Llobregat, TECHfriendly",
    img: ""
  },
  {
    codigo: "18.",
    coord: "00.0000000, 00.0000000",
    nombre: "Plan de Actuación Integrado Cullera",
    servicios: "Candidatura programa de financiación",
    toolbox: "",
    equipo: "Ajuntament de Cullera, TECHfriendly",
    img: ""
  },
  {
    codigo: "17.",
    coord: "00.0000000, 00.0000000",
    nombre: "Plan de Actuación Integrado Manises",
    servicios: "Candidatura programa de financiación",
    toolbox: "",
    equipo: "Ajuntament de Manises, TECHfriendly",
    img: ""
  },
  {
    codigo: "16.",
    coord: "00.0000000, 00.0000000",
    nombre: "Actualización Plan de Acción de Premià de Mar",
    servicios: "Evaluación de políticas, Diagnóstico Integrado",
    toolbox: "Análisis de datos, Cartografía",
    equipo: "Ajuntament de Premiá de Mar, TECHfriendly",
    img: ""
  },
  {
    codigo: "15.",
    coord: "00.0000000, 00.0000000",
    nombre: "Pla de Barris Sant Boi de Llobregat",
    servicios: "Candidatura programa de financiación",
    toolbox: "",
    equipo: "Ajuntament de Sant Boi de Llobregat, TECHfriendly",
    img: ""
  },
  {
    codigo: "14.",
    coord: "00.0000000, 00.0000000",
    nombre: "Agenda Urbana de Reconstrucción de Algemesí",
    servicios: "Evaluación de políticas, Diagnóstico integrado",
    toolbox: "Análisis de datos, Cartografía",
    equipo: "Ajuntament de Algemesí, TECHfriendly",
    img: ""
  },
  {
    codigo: "13.",
    coord: "00.0000000, 00.0000000",
    nombre: "Plan de Actuación Integrado Avilés",
    servicios: "Candidatura programa de financiación",
    toolbox: "",
    equipo: "Ayuntamiento de Avilés, TECHfriendly",
    img: ""
  },
  {
    codigo: "12.",
    coord: "00.0000000, 00.0000000",
    nombre: "Plan de Actuación Integrado Rubí",
    servicios: "Candidatura programa de financiación",
    toolbox: "",
    equipo: "Ajuntament de Rubí, TECHfriendly",
    img: ""
  },
  {
    codigo: "11.",
    coord: "00.0000000, 00.0000000",
    nombre: "Plan de Actuación Integrado Gavà",
    servicios: "Candidatura programa de financiación",
    toolbox: "",
    equipo: "Ajuntament de Gavà, TECHfriendly",
    img: ""
  },
  {
    codigo: "10.",
    coord: "00.0000000, 00.0000000",
    nombre: "Plan de Actuación Integrado Ribeira",
    servicios: "Candidatura programa de financiación",
    toolbox: "",
    equipo: "Concello de Ribeira, TECHfriendly",
    img: ""
  },
  {
    codigo: "09.",
    coord: "00.0000000, 00.0000000",
    nombre: "Actualización Diagnóstico AU Málaga",
    servicios: "Diagnóstico integrado",
    toolbox: "Análisis de datos, Cartografía",
    equipo: "Ayuntamiento de Málaga, TECHfriendly",
    img: ""
  },
  {
    codigo: "08.",
    coord: "00.0000000, 00.0000000",
    nombre: "PAC Baix Llobregat 2024-2027",
    servicios: "Evaluación de políticas, Diagnóstico integrado",
    toolbox: "Análisis de datos, Cartografía",
    equipo: "Consell Comarcal Baix Llobregat, TECHfriendly",
    img: ""
  },
  {
    codigo: "07.",
    coord: "00.0000000, 00.0000000",
    nombre: "Badalona Estrategia 2030",
    servicios: "Evaluación de políticas, Diagnóstico integrado",
    toolbox: "Análisis de datos, Cartografía",
    equipo: "Ajuntament de Badalona, TECHfriendly",
    img: "img/07.png"
  },
  {
    codigo: "06.",
    coord: "00.0000000, 00.0000000",
    nombre: "Estudio turismo azul costa Barcelona",
    servicios: "Evaluación de políticas, Diagnóstico integrado",
    toolbox: "Análisis de datos, Cartografía",
    equipo: "Diputació de Barcelona, TECHfriendly",
    img: "img/13.jpg"
  },
  {
    codigo: "05.",
    coord: "00.0000000, 00.0000000",
    nombre: "Palimpsesto Atlántico",
    servicios: "Diagnóstico integrado",
    toolbox: "Análisis de datos, Cartografía",
    equipo: "",
    img: "img/05.png"
  },
  {
    codigo: "04.",
    coord: "00.0000000, 00.0000000",
    nombre: "Análisis de la conectividad ecológica",
    servicios: "Diagnóstico integrado",
    toolbox: "Análisis de datos, Cartografía",
    equipo: "Àrea Metropolitana de Barcelona",
    img: "img/04.gif"
  },
  {
    codigo: "03.",
    coord: "00.0000000, 00.0000000",
    nombre: "Prioridades Invertidas",
    servicios: "Diagnóstico integrado",
    toolbox: "Análisis de datos, Cartografía",
    equipo: "Àrea Metropolitana de Barcelona",
    img: "img/03.gif"
  },
  {
    codigo: "02.",
    coord: "00.0000000, 00.0000000",
    nombre: "Gestión del agua",
    servicios: "Diagnóstico integrado",
    toolbox: "Análisis de datos, Cartografía",
    equipo: "",
    img: "img/02.gif"
  },
  {
    codigo: "01.",
    coord: "00.0000000, 00.0000000",
    nombre: "Constelación Refugio",
    servicios: "Diagnóstico integrado",
    toolbox: "Cartografía",
    equipo: "",
    img: ""
  }
];

const tabla = document.querySelector(".tabla");
const preview = document.getElementById("preview");
const previewImg = preview.querySelector("img");

/* =========================
   FUNCIÓN DE FILTRADO GLOBAL
========================= */
function filtrar(tipo, valor) {
  document.querySelectorAll(".fila:not(.header)").forEach(f => {
    const data = f.dataset[tipo] || "";
    f.style.display = data.includes(valor) ? "grid" : "none";
  });
}

/* =========================
   RESET FILTRO
========================= */
document.querySelector(".header").addEventListener("click", () => {
  document.querySelectorAll(".fila").forEach(f => {
    f.style.display = "grid";
  });
});

/* =========================
   CREAR FILAS
========================= */
proyectos.forEach(p => {
  const fila = document.createElement("div");
  fila.classList.add("fila");

  /* ===== SERVICIOS ===== */
  const serviciosHTML = p.servicios
    ? p.servicios
        .split(",")
        .map(s => `<span class="servicio-item">${s.trim()}</span>`)
        .join(", ")
    : "";

  fila.dataset.servicios = p.servicios || "";

  /* ===== TOOLBOX ===== */
  const toolboxHTML = p.toolbox
    ? p.toolbox
        .split(",")
        .map(t => `<span class="toolbox-item">${t.trim()}</span>`)
        .join(", ")
    : "";

  fila.dataset.toolbox = p.toolbox || "";

  /* ===== HTML ===== */
  fila.innerHTML = `
    <div><p>${p.codigo}</p></div>
    <div><p>${p.coord}</p></div>
    <div><p>${p.nombre}</p></div>
    <div><p>${serviciosHTML}</p></div> 
    <div><p>${toolboxHTML}</p></div>
    <div><p>${p.equipo}</p></div>
    <div><p>${p.extra1 || ''}</p></div>
    <div><p>${p.extra2 || ''}</p></div>
    <div><p>${p.extra3 || ''}</p></div>
  `;

  /* ===== HOVER IMAGEN ===== */
  fila.addEventListener("mouseenter", () => {
    if (p.img && p.img.trim() !== "") {
      previewImg.src = p.img;
      preview.style.opacity = 1;
    }
  });

  fila.addEventListener("mouseleave", () => {
    preview.style.opacity = 0;
  });

  /* ===== EVENTOS SERVICIOS ===== */
  fila.querySelectorAll(".servicio-item").forEach(item => {
    item.addEventListener("click", (e) => {
      e.stopPropagation();
      const valor = item.textContent.trim();
      filtrar("servicios", valor);
    });
  });

  /* ===== EVENTOS TOOLBOX ===== */
  fila.querySelectorAll(".toolbox-item").forEach(item => {
    item.addEventListener("click", (e) => {
      e.stopPropagation();
      const valor = item.textContent.trim();
      filtrar("toolbox", valor);
    });
  });

  /* ===== INSERTAR FILA ===== */
  tabla.appendChild(fila);
});

