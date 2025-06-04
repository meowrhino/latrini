// script.js

import { plantas, propiedades } from "./plantas.js";

const plantasContainer     = document.getElementById("plantas-container");
const propiedadesContainer = document.getElementById("propiedades-filter");
const modal                = document.getElementById("plant-modal");
const modalTitle           = document.getElementById("modal-title");
const modalProps           = document.getElementById("modal-propiedades");
const modalClose           = document.getElementById("modal-close");

const propModal            = document.getElementById("prop-modal");
const propModalTitle       = document.getElementById("prop-modal-title");
const propModalDesc        = document.getElementById("prop-modal-desc");
const propModalClose       = document.getElementById("prop-modal-close");

let filtroActivo = null;

/** Retorna opacidad según intensidad */
function getOpacity(intensidad) {
  if (intensidad === 3) return "1";
  if (intensidad === 2) return "0.6";
  return "0.3";
}

/** Renderiza tarjetas de plantas según filtroActivo */
function renderPlantas() {
  plantasContainer.innerHTML = "";
  let anyMatch = false;

  plantas.forEach((planta) => {
    if (filtroActivo) {
      const prop = planta.propiedades.find((p) => p.nombre === filtroActivo);
      if (!prop) return;
    }
    anyMatch = true;
    const card = document.createElement("div");
    card.className = "planta-card";
    card.textContent = planta.nombre;

    if (filtroActivo) {
      const intensidad = planta.propiedades.find((p) => p.nombre === filtroActivo).intensidad;
      card.style.opacity = getOpacity(intensidad);
    }

    card.addEventListener("click", () => openModal(planta));
    plantasContainer.appendChild(card);
  });

  if (!anyMatch) {
    const mensaje = document.createElement("div");
    mensaje.textContent = "Aún no tenemos plantas para esta propiedad.";
    mensaje.className = "sin-resultados";
    plantasContainer.appendChild(mensaje);
  }
}

/** Renderiza lista de propiedades para filtrar */
function renderPropiedades() {
  propiedadesContainer.innerHTML = "";

  // Contenedor para el botón “Borrar filtro”
  const borrarDiv = document.createElement("div");
  const borrarBtn = document.createElement("button");
  borrarBtn.textContent = filtroActivo ? "◀ Borrar filtro" : "◀ Mostrar todas";
  borrarBtn.title = "Mostrar todas las plantas";
  borrarBtn.addEventListener("click", () => {
    filtroActivo = null;
    renderPlantas();
    renderPropiedades();
  });
  borrarDiv.appendChild(borrarBtn);
  propiedadesContainer.appendChild(borrarDiv);

  propiedades.forEach((prop) => {
    const item = document.createElement("div");
    item.className = "filter-item";
    item.textContent = prop.nombre;
    item.title = prop.descripcion;

    if (filtroActivo === prop.nombre) {
      item.classList.add("active-filter");
    }

    item.addEventListener("click", () => {
      filtroActivo = filtroActivo === prop.nombre ? null : prop.nombre;
      renderPlantas();
      renderPropiedades();
    });
    propiedadesContainer.appendChild(item);
  });
}

/** Abre modal de planta mostrando sus propiedades */
function openModal(planta) {
  modalTitle.textContent = planta.nombre;
  modalProps.innerHTML = "";

  planta.propiedades.forEach((p) => {
    const span = document.createElement("span");
    span.className = "propiedad-label";
    span.textContent = p.nombre;
    span.style.opacity = getOpacity(p.intensidad);

    const descripcion = propiedades.find((pr) => pr.nombre === p.nombre)?.descripcion;
    if (descripcion) {
      span.title = descripcion;
    }

    // Al hacer clic en la propiedad dentro del modal de planta, abrimos el modal de propiedad
    span.addEventListener("click", (e) => {
      e.stopPropagation();
      openPropModal(p.nombre, descripcion);
    });

    modalProps.appendChild(span);
  });

  modal.style.display = "flex";
}

/** Cierra modal de planta */
modalClose.addEventListener("click", () => {
  modal.style.display = "none";
});

/** Cierra modal si clicas fuera del contenido */
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

/** Abre modal de detalle de propiedad */
function openPropModal(nombre, descripcion) {
  propModalTitle.textContent = nombre;
  propModalDesc.textContent = descripcion || "";
  propModal.style.display = "flex";
}

/** Cierra modal de propiedad */
propModalClose.addEventListener("click", () => {
  propModal.style.display = "none";
});

/** Cierra modal de propiedad si clicas fuera del contenido */
propModal.addEventListener("click", (e) => {
  if (e.target === propModal) {
    propModal.style.display = "none";
  }
});

// Inicialización al cargar la página
renderPlantas();
renderPropiedades();
