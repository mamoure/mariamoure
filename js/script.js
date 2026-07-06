const proyectos = [
  {
    codigo: "20.",
    coord: "42.8782347, -8.5448265",
    nombre: "Compostela Xadrez",
    tema: "Territorios",
    servicios: "Plataforma de datos",
    toolbox: "Cartografía, Desarrollo web",
    equipo: "",
    img: ""
  },
  {
    codigo: "19.",
    coord: "41.3500184, 2.0500732",
    nombre: "Agenda Urbana del Baix Llobregat (AUBL)",
    tema: "Agenda Urbana, Territorios",
    servicios: "Evaluación de políticas, Diagnóstico integrado",
    toolbox: "Análisis de datos, Cartografía",
    equipo: "Consell Comarcal Baix Llobregat, TECHfriendly",
    img: ""
  },
  {
    codigo: "18.",
    coord: "39.1653271, -0.2559486",
    nombre: "Plan de Actuación Integrado Cullera",
    tema: "Gobernanza, Regeneración urbana, Resiliencia urbana",
    servicios: "Candidatura programa de financiación",
    toolbox: "",
    equipo: "Ajuntament de Cullera, TECHfriendly",
    img: ""
  },
  {
    codigo: "17.",
    coord: "39.4913158, -0.4635374",
    nombre: "Plan de Actuación Integrado Manises",
    tema: "Gobernanza, Regeneración urbana, Resiliencia urbana",
    servicios: "Candidatura programa de financiación",
    toolbox: "",
    equipo: "Ajuntament de Manises, TECHfriendly",
    img: ""
  },
  {
    codigo: "16.",
    coord: "41.4890635, 2.3570421",
    nombre: "Actualización Plan de Acción de Premià de Mar",
    tema: "Gobernanza, Regeneración urbana, Resiliencia urbana",
    servicios: "Evaluación de políticas, Diagnóstico Integrado",
    toolbox: "Análisis de datos, Cartografía",
    equipo: "Ajuntament de Premiá de Mar, TECHfriendly",
    img: "img/16.png"
  },
  {
    codigo: "15.",
    coord: "41.3436918, 2.0419536",
    nombre: "Pla de Barris Sant Boi de Llobregat",
    tema: "Gobernanza, Regeneración urbana",
    servicios: "Candidatura programa de financiación",
    toolbox: "Gobernanza",
    equipo: "Ajuntament de Sant Boi de Llobregat, TECHfriendly",
    img: ""
  },
  {
    codigo: "14.",
    coord: "39.1930442, -0.4360189",
    nombre: "Agenda Urbana de Reconstrucción de Algemesí",
    tema: "Agenda Urbana, Resiliencia urbana, Territorios",
    servicios: "Evaluación de políticas, Diagnóstico integrado",
    toolbox: "Análisis de datos, Cartografía",
    equipo: "Ajuntament de Algemesí, TECHfriendly",
    img: "img/14.png"
  },
  {
    codigo: "13.",
    coord: "43.5560276, -5.9248831",
    nombre: "Plan de Actuación Integrado Avilés",
    tema: "Gobernanza, Regeneración urbana",
    servicios: "Candidatura programa de financiación",
    toolbox: "",
    equipo: "Ayuntamiento de Avilés, TECHfriendly",
    img: ""
  },
  {
    codigo: "12.",
    coord: "41.4926549, 2.0312287",
    nombre: "Plan de Actuación Integrado Rubí",
    tema: "Gobernanza, Regeneración urbana",
    servicios: "Candidatura programa de financiación",
    toolbox: "",
    equipo: "Ajuntament de Rubí, TECHfriendly",
    img: ""
  },
  {
    codigo: "11.",
    coord: "41.3030394, 2.0012768",
    nombre: "Plan de Actuación Integrado Gavà",
    tema: "Gobernanza, Regeneración urbana",
    servicios: "Candidatura programa de financiación",
    toolbox: "",
    equipo: "Ajuntament de Gavà, TECHfriendly",
    img: ""
  },
  {
    codigo: "10.",
    coord: "42.5618785, -8.9915432",
    nombre: "Plan de Actuación Integrado Ribeira",
    tema: "Gobernanza, Regeneración urbana",
    servicios: "Candidatura programa de financiación",
    toolbox: "",
    equipo: "Concello de Ribeira, TECHfriendly",
    img: ""
  },
  {
    codigo: "09.",
    coord: "6.7213468, -4.4214917",
    nombre: "Actualización Diagnóstico AU Málaga",
    tema: "Agenda Urbana, Territorios",
    servicios: "Diagnóstico integrado",
    toolbox: "Análisis de datos, Cartografía",
    equipo: "Ayuntamiento de Málaga, TECHfriendly",
    img: "img/09.gif"
  },
  {
    codigo: "08.",
    coord: "41.3500267, 2.0500948",
    nombre: "PAC Baix Llobregat 2024-2027",
    tema: "Agenda Urbana, Territorios",
    servicios: "Evaluación de políticas, Diagnóstico integrado",
    toolbox: "Análisis de datos, Cartografía",
    equipo: "Consell Comarcal Baix Llobregat, TECHfriendly",
    img: ""
  },
  {
    codigo: "07.",
    coord: "41.4500521, 2.2474865",
    nombre: "Badalona Estrategia 2030",
    tema: "Agenda Urbana, Territorios",
    servicios: "Evaluación de políticas, Diagnóstico integrado",
    toolbox: "Análisis de datos, Cartografía",
    equipo: "Ajuntament de Badalona, TECHfriendly",
    img: "img/07.png"
  },
  {
    codigo: "06.",
    coord: "41.3500267, 2.0500948",
    nombre: "Estudio turismo azul costa Barcelona",
    tema: "Territorios, Turismo",
    servicios: "Evaluación de políticas, Diagnóstico integrado",
    toolbox: "Análisis de datos, Cartografía",
    equipo: "Diputació de Barcelona, TECHfriendly",
    img: "img/06.gif"
  },
  {
    codigo: "05.",
    coord: "42.5126813, -8.8129375",
    nombre: "Palimpsesto Atlántico",
    tema: "Territorios",
    servicios: "Diagnóstico integrado",
    toolbox: "Análisis de datos, Cartografía",
    equipo: "",
    img: "img/05.png"
  },
  {
    codigo: "04.",
    coord: "41.3851492, 2.1734617",
    nombre: "Análisis de la conectividad ecológica",
    tema: "Territorios",
    servicios: "Diagnóstico integrado",
    toolbox: "Análisis de datos, Cartografía",
    equipo: "Àrea Metropolitana de Barcelona",
    img: "img/04.gif"
  },
  {
    codigo: "03.",
    coord: "41.3851738, 2.1734284",
    nombre: "Prioridades Invertidas",
    tema: "Movilidad, Territorios",
    servicios: "Diagnóstico integrado",
    toolbox: "Análisis de datos, Cartografía",
    equipo: "Àrea Metropolitana de Barcelona",
    img: "img/03.gif"
  },
  {
    codigo: "02.",
    coord: "42.7241695, -7.6833872",
    nombre: "Gestión del agua",
    tema: "Agua, Territorios",
    servicios: "Diagnóstico integrado",
    toolbox: "Análisis de datos, Cartografía",
    equipo: "",
    img: "img/02.gif"
  },
  {
    codigo: "01.",
    coord: "36.4107581, -6.2033496",
    nombre: "Constelación Refugio",
    tema: "Territorios",
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

const temaHTML = p.tema
  ? p.tema
      .split(",")
      .map(t => `<span class="tema-item">${t.trim()}</span>`)
      .join(", ")
  : "";

fila.dataset.tema = p.tema || "";


  /* ===== HTML ===== */
  fila.innerHTML = `
    <div><p>${p.coord}</p></div>
    <div><p>${p.nombre}</p></div>
    <div><p>${temaHTML}</p></div>
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

  /* ===== EVENTOS TEMA ===== */
fila.querySelectorAll(".tema-item").forEach(item => {
  item.addEventListener("click", (e) => {
    e.stopPropagation();
    const valor = item.textContent.trim();
    filtrar("tema", valor);
  });
});

  /* ===== INSERTAR FILA ===== */
  tabla.appendChild(fila);
});

