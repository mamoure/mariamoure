const proyectos = [
  {
    codigo: "23.",
    coord: "42.87823, -8.54482",
    nombre: "Compostela Xadrez",
    tema: "Espacio público, Territorios",
    servicios: "Plataformas de datos",
    toolbox: "Análisis de datos, Cartografía, Web mapping",
    año: "2026",
    equipo: "",
    descripcion: "Mapa web interactivo que cartografía los espacios destinados a la práctica del ajedrez en Santiago de Compostela. El proyecto incluye la digitalización y estructuración de una base de datos geográfica, el diseño de un mapa impreso y el desarrollo de una herramienta web interactiva para facilitar la localización y consulta de estos espacios.",
    img: ""
  },
  {
    codigo: "22.",
    coord: "41.35001, 2.05007",
    nombre: "Agenda Urbana del Baix Llobregat",
    tema: "Planificación urbana, Sostenibilidad, Territorios",
    servicios: "Diagnóstico integrado, Planificación estratégica",
    toolbox: "Análisis de datos, Cartografía, Metodología participativa",
    año: "2026",
    equipo: "Consell Comarcal Baix Llobregat, TECHfriendly",
    descripcion: "La Agenda Urbana del Baix Llobregat es un instrumento de planificación estratégica comarcal, alineado con la Agenda 2030, la Agenda Urbana Española y la Agenda de los Pueblos y Ciudades de Cataluña. Define un marco de actuación a largo plazo para avanzar hacia un territorio más sostenible, inclusivo y resiliente, e identificar proyectos estratégicos para el desarrollo de la comarca.",
    img: ""
  },
  {
    codigo: "21.",
    coord: "39.16532, -0.25594",
    nombre: "Plan de Actuación Integrado de Cullera",
    tema: "Cambio climático, Litoral, Resiliencia",
    servicios: "Captación de fondos, Planificación estratégica",
    toolbox: "Análisis de datos, Cartografía",
    equipo: "Ajuntament de Cullera, TECHfriendly",
    año: "2026",
    descripcion: "El Plan de Actuación Integrado de Cullera, presentado a la convocatoria de fondos FEDER para la reconstrucción y resiliencia urbana, impulsa la adaptación del frente marítimo ante riesgos ambientales e hídricos. El proyecto plantea actuaciones para reforzar la resiliencia urbana y mejorar la protección del municipio frente a temporales y otros fenómenos meteorológicos extremos. Proyecto beneficiario.",
    img: ""
  },
  {
    codigo: "20.",
    coord: "39.49131, -0.46353",
    nombre: "Plan de Actuación Integrado de Manises",
    tema: "Cambio climático, Regeneración urbana, Resiliencia",
    servicios: "Captación de fondos, Planificación estratégica",
    toolbox: "Análisis de datos, Cartografía",
    equipo: "Ajuntament de Manises, TECHfriendly",
    año: "2026",
    descripcion: "El Plan de Actuación Integrado de Manises, presentado a la convocatoria de fondos FEDER para la reconstrucción y resiliencia urbana, impulsa una estrategia de recuperación y resiliencia urbana frente a la emergencia. El proyecto plantea actuaciones transformadoras orientadas a mejorar la gestión del riesgo de inundación y reforzar la capacidad del municipio para afrontar futuros episodios extremos. Proyecto beneficiario.",
    img: ""
  },
  {
    codigo: "19.",
    coord: "41.48906, 2.35704",
    nombre: "Actualización Plan de Acción de Premià de Mar",
    tema: "Planificación urbana",
    servicios: "Diagnóstico integrado, Evaluación de políticas",
    toolbox: "Análisis de datos, Cartografía, Metodología participativa, Visualización de datos",
    equipo: "Ajuntament de Premiá de Mar, TECHfriendly",
    año: "2025",
    descripcion: "La actualización del Plan de Acción de la Agenda Urbana de Premià de Mar es un proceso de revisión estratégica impulsado por el Ayuntamiento para adaptar sus actuaciones a las necesidades actuales del municipio. Mediante sesiones transversales de trabajo con técnicos municipales de distintos servicios, se han identificado y priorizado las actuaciones que refuerzan su enfoque estratégico.",
    img: ""
  },
  {
    codigo: "18.",
    coord: "41.34369, 2.04195",
    nombre: "Pla de Barris de Sant Boi de Llobregat",
    tema: "Regeneración urbana",
    servicios: "Captación de fondos, Planificación estratégica",
    toolbox: "Análisis de datos, Cartografía",
    equipo: "Ajuntament de Sant Boi de Llobregat, TECHfriendly",
    año: "2025",
    descripcion: "El Programa Memoria de Intervención Integral de Sant Boi de Llobregat, presentado a la convocatoria de 2025 del Pla de Barris, se integra en la Estrategia de Ciudad 2030 y la Agenda Urbana local. El proyecto plantea una actuación integral en los barrios de Marianao y Centro para combatir la segregación urbana, reducir las desigualdades sociales y mejorar la adaptación ante los efectos de la crisis climática.",
    img: ""
  },
  {
    codigo: "17.",
    coord: "39.19304, -0.43601",
    nombre: "Agenda Urbana de Reconstrucción de Algemesí",
    tema: "Cambio climático, Planificación urbana, Resiliencia",
    servicios: "Diagnóstico integrado, Planificación estratégica",
    toolbox: "Análisis de datos, Cartografía",
    equipo: "Ajuntament de Algemesí, TECHfriendly",
    año: "2025",
    descripcion: "La Agenda Urbana de Reconstrucción de Algemesí es un instrumento estratégico promovido por el Ministerio de Vivienda y Agenda Urbana para guiar la recuperación sostenible y resiliente de los municipios afectados por la DANA de octubre de 2024. Amplía el Plan Urbano de Actuación Municipal reforzando la adaptación al cambio climático, la gestión eficiente de los recursos y la prevención del riesgo ambiental.",
    img: "img/14.png"
  },
  {
    codigo: "16.",
    coord: "43.55602, -5.92488",
    nombre: "Plan de Actuación Integrado de Avilés",
    tema: "Regeneración urbana",
    servicios: "Captación de fondos, Planificación estratégica",
    toolbox: "Análisis de datos, Cartografía",
    equipo: "Ayuntamiento de Avilés, TECHfriendly",
    año: "2025",
    descripcion: "El Plan de Actuación Integrado de Avilés, presentado a la convocatoria de fondos FEDER del Ministerio de Hacienda, prioriza la regeneración integral del barrio de La Carriona, uno de los ámbitos más vulnerables del municipio.  El PAI define actuaciones de transformación física, ambiental y social para mejorar su integración con el centro urbano. Proyecto beneficiario, primer puesto en su categoría.",
    img: ""
  },
  {
    codigo: "15.",
    coord: "41.49265, 2.03122",
    nombre: "Plan de Actuación Integrado de Rubí",
    tema: "Regeneración urbana",
    servicios: "Captación de fondos, Planificación estratégica",
    toolbox: "Análisis de datos, Cartografía",
    equipo: "Ajuntament de Rubí, TECHfriendly",
    año: "2025",
    descripcion: "El Plan de Actuación Integrado de Rubí, presentado a la convocatoria de fondos FEDER del Ministerio de Hacienda, impulsa la transformación del eje este de la ciudad, con la avenida Estatut como ámbito prioritario. El proyecto mejora la conexión entre barrios y el acceso al parque de Ca n’Oriol mediante actuaciones de renaturalización, movilidad sostenible y mejora de la accesibilidad. Proyecto beneficiario, segundo puesto en su categoría.",
    img: ""
  },
  {
    codigo: "14.",
    coord: "41.30303, 2.00127",
    nombre: "Plan de Actuación Integrado de Gavà",
    tema: "Regeneración urbana",
    servicios: "Captación de fondos, Planificación estratégica",
    toolbox: "Análisis de datos, Cartografía",
    equipo: "Ajuntament de Gavà, TECHfriendly",
    año: "2025",
    descripcion: "El Plan de Actuación Integrado de Gavà, presentado a la convocatoria de fondos FEDER del Ministerio de Hacienda, impulsa la regeneración del centro histórico mediante la Rambla como eje vertebrador. El proyecto tiene como actuación catalizadora la rehabilitación y transformación del Centro Cultural,junto con actuaciones de renaturalización, mejora de la conectividad y creación de nuevos espacios públicos. Proyecto beneficiario, segundo puesto en su categoría.",
    img: ""
  },
  {
    codigo: "13.",
    coord: "42.56187, -8.99154",
    nombre: "Plan de Actuación Integrado de Ribeira",
    tema: "Regeneración urbana",
    servicios: "Captación de fondos, Planificación estratégica",
    toolbox: "Análisis de datos, Cartografía",
    equipo: "Concello de Ribeira, TECHfriendly",
    año: "2025",
    descripcion: "El Plan de Actuación Integrado de Ribeira, presentado a la convocatoria de fondos FEDER del Ministerio de Hacienda, impulsa la regeneración urbana del barrio histórico de Banda ao Río y la transformación de Cerqueira en un nuevo espacio social, cultural y de innovación. El proyecto recupera el patrimonio industrial conservero y contempla la regeneración de la Praza de Pontevedra como espacio público verde, accesible y abierto al mar. Proyecto beneficiario, tercer puesto en su categoría.",
    img: ""
  },
  {
    codigo: "12.",
    coord: "6.72134, -4.42149",
    nombre: "Actualización Diagnóstico AU Málaga",
    tema: "Planificación urbana, Territorios",
    servicios: "Diagnóstico integrado",
    toolbox: "Análisis de datos, Cartografía",
    equipo: "Ayuntamiento de Málaga, TECHfriendly",
    año: "2024",
    descripcion: "Actualización del diagnóstico de la Agenda Urbana de Málaga mediante la revisión y cálculo de indicadores urbanos y territoriales, incorporando datos actualizados para evaluar la evolución del municipio. El proyecto incluye la elaboración de cartografía temática actualizada para representar espacialmente los principales indicadores y facilitar el análisis de la situación urbana.",
    img: "img/09.gif"
  },
  {
    codigo: "11.",
    coord: "41.35002, 2.05009",
    nombre: "PAC Baix Llobregat 2024-2027",
    tema: "Planificación urbana, Territorios",
    servicios: "Diagnóstico integrado, Planificación estratégica",
    toolbox: "Análisis de datos, Cartografía, Metodología participativa",
    equipo: "Consell Comarcal Baix Llobregat, TECHfriendly",
    año: "2024",
    descripcion: "El Plan de Actuación Comarcal del Baix Llobregat 2024-2027 define las principales líneas estratégicas y acciones para avanzar hacia una comarca más sostenible, cohesionada e inclusiva. Elaborado mediante un proceso participativo, estructura la actuación comarcal en cinco ejes estratégicos, 22 líneas de actuación y 123 acciones orientadas al desarrollo territorial sostenible, la cohesión social, la igualdad de oportunidades y la calidad de vida.",
    img: ""
  },
  {
    codigo: "10.",
    coord: "41.45005, 2.24748",
    nombre: "Badalona Estrategia 2030",
    tema: "Planificación urbana, Territorios",
    servicios: "Diagnóstico integrado, Planificación estratégica",
    toolbox: "Análisis de datos, Cartografía, Metodología participativa",
    equipo: "Ajuntament de Badalona, TECHfriendly",
    año: "2024",
    descripcion: "Badalona Estrategia 2030 establece un marco estratégico para orientar la transformación del municipio hacia un modelo urbano más sostenible, resiliente e inclusivo. Siguiendo la metodología de la Agenda Urbana Española, el proyecto realiza un diagnóstico transversal basado en sus 10 objetivos estratégicos e identifica los principales retos y ámbitos de actuación para el desarrollo futuro de la ciudad.",
    img: "img/07.png"
  },
  {
    codigo: "09.",
    coord: "41.35002, 2.05009",
    nombre: "Estudio turismo azul costa Barcelona Delta Llobreg",
    tema: "Cambio climático, Litoral, Resiliencia, Turismo",
    servicios: "Diagnóstico integrado, Evaluación de políticas, Planificación estratégica",
    toolbox: "Análisis de datos, Cartografía, Metodología participativa",
    equipo: "Diputació de Barcelona, TECHfriendly",
    año: "2024",
    descripcion: "Estudio para impulsar el turismo azul en la costa de Barcelona y el Delta del Llobregat, enmarcado en el PSTD Costa Barcelona Delta Llobregat. El proyecto analiza las oportunidades, necesidades y barreras para desarrollar una oferta turística sostenible vinculada al litoral y su capital natural, revisa el marco normativo y define un plan de acción para su implementación.",
    img: "img/06.gif"
  },
  {
    codigo: "08.",
    coord: "42.51268, -8.81293",
    nombre: "Palimpsesto Atlántico",
    tema: "Resiliencia, Territorios",
    servicios: "Diagnóstico integrado, Observatorios espaciales, Plataformas de datos",
    toolbox: "Análisis de datos, Cartografía, Visualización de datos, Web mapping",
    equipo: "",
    año: "2021",
    descripcion: "Investigación interseccional y multitemporal sobre la transformación de la costa atlántica de Galicia durante las últimas décadas del Antropoceno. El proyecto cartografía los cambios territoriales derivados de la actividad humana e identifica factores clave para orientar futuros escenarios de preservación ecológica y urbanística. Asimismo, la investigación opera como un palimpsesto que recoge la memoria de los agentes humanos y no humanos de las Rías Baixas.",
    img: "img/05.png"
  },
  {
    codigo: "07.",
    coord: "41.38514, 2.17346",
    nombre: "Metrópolis Verda",
    tema: "Infraestructura verde, Planificación urbana",
    servicios: "Diagnóstico integrado, Evaluación de políticas, Planificación estratégica",
    toolbox: "Análisis de datos, Cartografía, Visualización de datos",
    equipo: "Àrea Metropolitana de Barcelona",
    año: "2021",
    descripcion: "Metròpolis Verda desarrolla una metodología para evaluar la conectividad ecológica de la infraestructura verde del área metropolitana de Barcelona y definir una red de corredores verdes. El proyecto integra criterios de ecología del paisaje y planificación urbana para mejorar la conectividad territorial y reforzar las funciones ecológicas y sociales de los espacios verdes.",
    img: "img/04.gif"
  },
    {
    codigo: "06.",
    coord: "41.38514, 2.17346",
    nombre: "Indicadores Ámbitos Estadísticos Metropolitanos",
    tema: "Territorios",
    servicios: "Diagnóstico integrado, Evaluación de políticas, Observatorios espaciales",
    toolbox: "Análisis de datos, Cartografía, Visualización de datos, Web mapping",
    equipo: "Àrea Metropolitana de Barcelona",
    año: "2021",
    descripcion: "Delimitación de los 268 Ámbitos Estadísticos Metropolitanos del área metropolitana de Barcelona y cálculo de indicadores para caracterizar las condiciones de vida y el entorno urbano a escala inframunicipal. El proyecto integra indicadores de demografía, renta, vivienda, actividad económica, movilidad, calidad ambiental, sostenibilidad y resiliencia, facilitando la comparación territorial entre los distintos ámbitos metropolitanos.",
    img: ""
  },
  {
    codigo: "05.",
    coord: "41.38517, 2.17342",
    nombre: "Prioridades Invertidas",
    tema: "Espacio público, Movilidad",
    servicios: "Diagnóstico integrado, Evaluación de políticas",
    toolbox: "Análisis de datos, Cartografía, Visualización de datos",
    equipo: "Àrea Metropolitana de Barcelona",
    año: "2020",
    descripcion: "Prioridades Invertidas analiza la caminabilidad del área metropolitana de Barcelona para promover una movilidad más activa y sostenible. El proyecto desarrolla un indicador que relaciona el espacio destinado a peatones con el reservado al tráfico, permitiendo identificar las calles que priorizan cada modo de movilidad. La herramienta facilita el análisis urbano y la toma de decisiones para mejorar la accesibilidad, seguridad y sostenibilidad.",
    img: "img/03.gif"
  },
  {
    codigo: "04.",
    coord: "42.72416, -7.68338",
    nombre: "Auga Belesar",
    tema: "Cambio climático",
    servicios: "Diagnóstico integrado",
    toolbox: "Análisis de datos, Cartografía, Visualización de datos",
    equipo: "",
    año: "2020",
    descripcion: "Auga Belesar analiza la relación entre la variabilidad climática y los recursos hídricos de la cuenca del embalse de Belesar. El proyecto estudia la evolución de las precipitaciones, la superficie de agua y la vegetación mediante imágenes satelitales Landsat, identificando cómo las variaciones en el régimen pluviométrico afectan a la disponibilidad de agua y a la dinámica territorial de la cuenca.",
    img: "img/02.gif"
  },
    {
    codigo: "03.",
    coord: "42.87823, -8.54482",
    nombre: "Covid Compostela",
    tema: "Territorios",
    servicios: "Diagnóstico integrado",
    toolbox: "Análisis de datos, Cartografía, Visualización de datos",
    equipo: "",
    año: "2020",
    descripcion: "Covid Compostela analiza el impacto del confinamiento por la pandemia de COVID-19 en Santiago de Compostela mediante el cálculo y análisis de indicadores urbanos y habitacionales. El proyecto identifica y cartografía desigualdades territoriales vinculadas a las condiciones de vivienda, el acceso a espacios libres y otros factores de vulnerabilidad urbana, evidenciando su relación con la salud pública.",
    img: ""
  },
   {
    codigo: "02.",
    coord: "41.38517, 2.17342",
    nombre: "Escenarios de cambio climático para la costa metropolitana de Barcelona",
    tema: "Cambio climático, Espacio público, Litoral, Resiliencia",
    servicios: "Diagnóstico integrado",
    toolbox: "Análisis de datos, Cartografía",
    equipo: "Landlab, laboratorio de paisajes",
    año: "2019",
    descripcion: "Propuesta de adaptación al cambio climático de la costa metropolitana de Barcelona con horizonte 2100. El proyecto analiza la evolución histórica de los sistemas ecológicos, sociales y económicos del litoral y plantea diferentes escenarios de futuro y estrategias de respuesta. Se proponen soluciones estructurales, basadas en la naturaleza y no estructurales para reforzar la resiliencia costera y mejorar la relación entre la ciudad y el mar.",
    img: ""
  },
  {
    codigo: "01.",
    coord: "36.41075, -6.20334",
    nombre: "Constelación Refugio",
    tema: "Litoral, Territorios",
    servicios: "Diagnóstico integrado",
    toolbox: "Cartografía",
    equipo: "",
    año: "2018",
    descripcion: "",
    img: ""
  }
];

/* =====================================================
   ELEMENTOS PRINCIPALES
===================================================== */

const tabla = document.querySelector(".tabla");
const preview = document.getElementById("preview");
const previewImg = preview.querySelector("img");

const tagsPanel = document.getElementById("tags-panel");
const tagsList = document.getElementById("tags-list");



/* =====================================================
   CREAR FILAS DE PROYECTOS
===================================================== */

proyectos.forEach(p => {

    const fila = document.createElement("div");

    fila.classList.add("fila");


    /* =================================================
       SERVICIOS
    ================================================= */

    const serviciosHTML = p.servicios
        ? p.servicios
            .split(",")
            .map(s => `<span class="servicio-item">${s.trim()}</span>`)
            .join(", ")
        : "";

    fila.dataset.servicios = p.servicios || "";


    /* =================================================
       TOOLBOX
    ================================================= */

    const toolboxHTML = p.toolbox
        ? p.toolbox
            .split(",")
            .map(t => `<span class="toolbox-item">${t.trim()}</span>`)
            .join(", ")
        : "";

    fila.dataset.toolbox = p.toolbox || "";


    /* =================================================
       TEMA
    ================================================= */

    const temaHTML = p.tema
        ? p.tema
            .split(",")
            .map(t => `<span class="tema-item">${t.trim()}</span>`)
            .join(", ")
        : "";

    fila.dataset.tema = p.tema || "";


    /* =================================================
       DESCRIPCIÓN
    ================================================= */

    fila.dataset.descripcion = p.descripcion || "";


    /* =================================================
       HTML DE LA FILA

       1 → Coordenadas
       2 → Nombre
       3 → Vacía
       4 → Tema
       5 → Servicios
       6 → Toolbox
       7-9 → Descripción
    ================================================= */

    fila.innerHTML = `

        <div class="col-coordenadas">
            <p>${p.coord}</p>
        </div>

        <div class="col-nombre">
            <p>${p.nombre}</p>
        </div>

        <div class="col-tema">
            <p>${temaHTML}</p>
        </div>

        <div class="col-servicios">
            <p>${serviciosHTML}</p>
        </div>

        <div class="col-toolbox">
            <p>${toolboxHTML}</p>
        </div>


        <div class="col-año">
            <p>${p.año}</p>
        </div>



        <div class="descripcion-proyecto">

            <p>${p.descripcion || ""}</p>

            ${
                p.equipo
                    ? `<p class="equipo-proyecto">${p.equipo}</p>`
                    : ""
            }

            ${
                p.nombre === "Compostela Xadrez"
                    ? `
                        <p>
                            <a
                                href="https://mamoure.github.io/compostela-xadrez/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Visitar Compostela Xadrez
                            </a>
                        </p>
                    `
                    : ""
            }

        </div>

    `;


    /* =================================================
       HOVER IMAGEN
    ================================================= */

    fila.addEventListener("mouseenter", () => {

        if (p.img && p.img.trim() !== "") {

            previewImg.src = p.img;

            const rect = fila.getBoundingClientRect();

            /* Mantener la imagen centrada */
            preview.style.left = "50%";

            /* Posición inicial: debajo de la fila */
            preview.style.top = `${rect.bottom + 5}px`;

            /* Mostrar temporalmente para calcular altura */
            preview.style.opacity = 0;

            requestAnimationFrame(() => {

                const alturaImagen = preview.offsetHeight;
                const espacioAbajo = window.innerHeight - rect.bottom;

                /* Si cabe debajo */
                if (espacioAbajo >= alturaImagen + 5) {

                    preview.style.top = `${rect.bottom + 5}px`;

                /* Si no cabe, colocar encima */
                } else {

                    preview.style.top = `${rect.top - alturaImagen - 5}px`;

                }

                preview.style.opacity = 1;

            });

        }

    });


    fila.addEventListener("mouseleave", () => {

        preview.style.opacity = 0;

    });

    /* =================================================
       INSERTAR FILA EN LA TABLA
    ================================================= */

    tabla.appendChild(fila);

});



/* =====================================================
   CREAR LISTADO ÚNICO DE TAGS
===================================================== */

const todosLosTags = new Set();


proyectos.forEach(p => {


    /* =================================================
       TEMAS
    ================================================= */

    if (p.tema) {

        p.tema
            .split(",")
            .forEach(tag => {

                const tagLimpio = tag.trim();

                if (tagLimpio) {

                    todosLosTags.add(tagLimpio);

                }

            });

    }



    /* =================================================
       SERVICIOS
    ================================================= */

    if (p.servicios) {

        p.servicios
            .split(",")
            .forEach(tag => {

                const tagLimpio = tag.trim();

                if (tagLimpio) {

                    todosLosTags.add(tagLimpio);

                }

            });

    }



    /* =================================================
       TOOLBOX
    ================================================= */

    if (p.toolbox) {

        p.toolbox
            .split(",")
            .forEach(tag => {

                const tagLimpio = tag.trim();

                if (tagLimpio) {

                    todosLosTags.add(tagLimpio);

                }

            });

    }

});



/* =====================================================
   MOSTRAR TODOS LOS TAGS
===================================================== */

[...todosLosTags]
    .sort((a, b) => a.localeCompare(b, "es"))
    .forEach(tag => {


        /* =================================================
           CREAR ELEMENTO DEL TAG
        ================================================= */

        const elemento = document.createElement("div");

        elemento.classList.add("tag-filtro");


        /* Mostrar # delante del tag */

        elemento.textContent = `#${tag}`;


        /* Guardar el nombre original del tag */

        elemento.dataset.tag = tag;


        /* Añadir al listado */

        tagsList.appendChild(elemento);



        /* =================================================
           CLICK EN UN TAG
        ================================================= */

        elemento.addEventListener("click", (e) => {

            /* Evitar propagación */

            e.stopPropagation();


            /* Comprobar si ya estaba activo */

            const yaActivo =
                elemento.classList.contains("activo");


            /* =================================================
               SI YA ESTABA ACTIVO
               
               → QUITAR FILTRO
               → MOSTRAR TODOS LOS PROYECTOS
            ================================================= */

            if (yaActivo) {

                elemento.classList.remove("activo");


                document
                    .querySelectorAll(".fila:not(.header)")
                    .forEach(fila => {

                        fila.style.display = "grid";

                    });


                return;

            }


            /* =================================================
               DESACTIVAR TODOS LOS DEMÁS TAGS
            ================================================= */

            document
                .querySelectorAll(".tag-filtro")
                .forEach(tagElemento => {

                    tagElemento.classList.remove("activo");

                });


            /* =================================================
               ACTIVAR EL TAG SELECCIONADO
            ================================================= */

            elemento.classList.add("activo");


            /* =================================================
               OBTENER TAG ORIGINAL
            ================================================= */

            const valor = elemento.dataset.tag;


            /* =================================================
               FILTRAR PROYECTOS
            ================================================= */

            document
                .querySelectorAll(".fila:not(.header)")
                .forEach(fila => {


                    const temas =
                        fila.dataset.tema || "";


                    const servicios =
                        fila.dataset.servicios || "";


                    const toolbox =
                        fila.dataset.toolbox || "";


                    /* Convertir cada campo en un array */

                    const temasArray =
                        temas
                            .split(",")
                            .map(tag => tag.trim());


                    const serviciosArray =
                        servicios
                            .split(",")
                            .map(tag => tag.trim());


                    const toolboxArray =
                        toolbox
                            .split(",")
                            .map(tag => tag.trim());


                    /* Comprobar si el tag existe */

                    const coincide =
                        temasArray.includes(valor) ||
                        serviciosArray.includes(valor) ||
                        toolboxArray.includes(valor);


                    /* Mostrar / ocultar fila */

                    fila.style.display =
                        coincide ? "grid" : "none";

                });

        });

    });


    /* =====================================================
   PANTALLA INICIAL
===================================================== */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    /*
       Tiempo durante el que se muestra
       únicamente la retícula.
       1800 = 1,8 segundos.
    */

    setTimeout(() => {

        loader.classList.add("oculto");

        document.body.classList.add("cargado");

    }, 600);

});


/* =====================================================
   CAMBIAR COLOR DE RETÍCULA EN INFORMACIÓN
===================================================== */

const informacion = document.getElementById("informacion");

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                document.body.classList.add("en-informacion");
            } else {
                document.body.classList.remove("en-informacion");
            }

        });

    },
    {
        threshold: 0.1
    }
);

observer.observe(informacion);