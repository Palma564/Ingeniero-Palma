/* ============================================================
   WEB PROFILE TEMPLATE - SCRIPT
   UniEspinal · Técnico Profesional en Programación Web

   THIS IS THE FILE YOU WILL WORK ON THE MOST.

   Below there are two dictionaries: ES and EN.
   They have exactly the same keys, but different texts.

   IMPORTANT: the English version is NOT a translation of the
   Spanish version. A professional profile in English follows
   different rules. Read NOTES.md before you write it.
   ============================================================ */


/* ------------------------------------------------------------
   1. SPANISH TEXTS
   ------------------------------------------------------------ */
const ES = {
  "nav.home":      "INICIO",
  "nav.about":     "SOBRE MÍ",
  "nav.skills":    "HABILIDADES",
  "nav.resume":    "FORMACIÓN",
  "nav.portfolio": "PROYECTOS",
  "nav.contact":   "CONTACTO",

  "hero.role": "Desarrollador Web · Soporte Técnico",

  "about.title":          "Sobre Mí",
  "about.text":           "Actualmente estudio Sistemas y me apasiona el desarrollo frontend, especialmente la creación de interfaces dinámicas e intuitivas con tecnologías como React y CSS. Busco una oportunidad laboral o de prácticas donde pueda aplicar mis conocimientos en proyectos reales y seguir creciendo profesionalmente.",
  "about.infoTitle":      "Información",
  "about.labelLocation":  "Ubicación",
  "about.valueLocation":  "Espinal-Tolima, Colombia",
  "about.labelEmail":     "Correo",
  "about.labelLanguages": "Idiomas",
  "about.valueLanguages": "Español (nativo) · Inglés (A2)",
  "about.labelStatus":    "Disponibilidad",
  "about.valueStatus":    "Abierto a prácticas",
  "about.interestsTitle": "Intereses",

  "interest.1": "CÓDIGO",
  "interest.2": "SOPORTE",
  "interest.3": "LECTURA",
  "interest.4": "JUEGOS",

  "skills.title":        "Habilidades",
  "skills.technical":    "Habilidades técnicas",
  "skills.professional": "Habilidades profesionales",
  "skill.support":       "Soporte al usuario",
  "skill.teamwork":      "Trabajo en equipo",
  "skill.problem":       "Resolución de problemas",
  "skill.english":       "Inglés técnico",

  "resume.title":      "Formación y experiencia",
  "resume.education":  "Formación",
  "resume.experience": "Experiencia",

  "edu.1.title": "Técnico Profesional en Programación Web",
  "edu.1.text":  "Actualmente me formo en la creación de sitios y aplicaciones web responsivas utilizando HTML, CSS, JavaScript y bases de datos SQL. Sé estructurar interfaces dinámicas e integrar la lógica básica de cliente y servidor para proyectos funcionales.",
  "edu.2.title": "        Curso o certificación",
  "edu.2.text":  "             Ninguno",

  "exp.1.title": "Rol o tipo de proyecto",
  "exp.1.text":  "Ninguno proyecto todavia",
  "exp.2.title": "Rol o tipo de proyecto",
  "exp.2.text":  "Ninguno proyecto todavia",

  "portfolio.title": "Proyectos",
  "project.1.title": "Ninguno todavia",
  "project.1.text":  "Ninguna",
  "project.2.title": "Ninguno todavia",
  "project.2.text":  "Ninguna",
  "project.3.title": "Ninguno todavia",
  "project.3.text":  "Ninguna",

  "contact.title":         "Contacto",
  "contact.intro":         "¿Tienes un proyecto en mente, una oportunidad laboral o simplemente quieres saludar? ¡Escríbeme y hablemos!",
  "contact.emailLabel":    "Correo",
  "contact.linkedinValue": "[Tu perfil profesional]",

  "footer.note": "Juan David Rdoriguez Palma · Técnico Profesional en Programación Web · UniEspinal"
};


/* ------------------------------------------------------------
   2. ENGLISH TEXTS

   Before writing this section, remember:
   - Use action verbs: built, configured, fixed, tested, supported.
   - Do not include age, marital status or a home address.
   - Do not translate word by word. Rewrite.
   ------------------------------------------------------------ */
const EN = {
  "nav.home":      "HOME",
  "nav.about":     "ABOUT",
  "nav.skills":    "SKILLS",
  "nav.resume":    "RESUME",
  "nav.portfolio": "PROJECTS",
  "nav.contact":   "CONTACT",

  "hero.role": "Web Developer · Technical Support",

  "about.title":          "About Me",
  "about.text":           "I am currently studying Systems and am passionate about frontend development, especially creating dynamic and intuitive interfaces using technologies like React and CSS. I am looking for a job or internship opportunity where I can apply my knowledge to real-world projects and continue growing professionally.",
  "about.infoTitle":      "Information",
  "about.labelLocation":  "Location",
  "about.valueLocation":  "Espinal-Tolima, Colombia",
  "about.labelEmail":     "Email",
  "about.labelLanguages": "Languages",
  "about.valueLanguages": "Spanish (native) · English (A2)",
  "about.labelStatus":    "Availability",
  "about.valueStatus":    "Open to internships",
  "about.interestsTitle": "Interests",

  "interest.1": "CODE",
  "interest.2": "SUPPORT",
  "interest.3": "READING",
  "interest.4": "GAMING",

  "skills.title":        "Skills",
  "skills.technical":    "Technical skills",
  "skills.professional": "Professional skills",
  "skill.support":       "User support",
  "skill.teamwork":      "Teamwork",
  "skill.problem":       "Problem solving",
  "skill.english":       "Technical English",

  "resume.title":      "Education and experience",
  "resume.education":  "Education",
  "resume.experience": "Experience",

  "edu.1.title": "Professional Technician in Web Programming",
  "edu.1.text":  "I am currently training in the creation of responsive websites and web applications using HTML, CSS, JavaScript, and SQL databases. I know how to structure dynamic interfaces and integrate basic client-side and server-side logic for functional projects.",
  "edu.2.title": "       Course or certificate",
  "edu.2.text":  "               none",

  "exp.1.title": "Role or type of project",
  "exp.1.text":  "No projects yet.",
  "exp.2.title": "Role or type of project",
  "exp.2.text":  "No projects yet.",

  "portfolio.title": "Projects",
  "project.1.title": "None yet.",
  "project.1.text":  "None",
  "project.2.title": "None yet.",
  "project.2.text":  "None",
  "project.3.title": "None yet.",
  "project.3.text":  "None",

  "contact.title":         "Contact",
  "contact.intro":         "[One sentence inviting people to write to you. Example: Have a project or a vacancy? Send me a message.]",
  "contact.emailLabel":    "Email",
  "contact.linkedinValue": "[Your professional profile]",

  "footer.note": "[Your name] · Professional Technician in Web Programming · UniEspinal"
};


/* ============================================================
   3. LANGUAGE SWITCHER
   You do not need to change the code below.
   ============================================================ */

const DICCIONARIOS = { es: ES, en: EN };
let idiomaActual = "es";

function aplicarIdioma(idioma) {
  const textos = DICCIONARIOS[idioma];
  if (!textos) return;

  document.querySelectorAll("[data-i18n]").forEach(elemento => {
    const clave = elemento.getAttribute("data-i18n");
    if (textos[clave] !== undefined) {
      elemento.textContent = textos[clave];
    } else {
      console.warn("Missing translation key:", clave);
    }
  });

  document.documentElement.lang = idioma;

  const boton = document.getElementById("btn-idioma");
  if (boton) {
    const otro = idioma === "es" ? "en" : "es";
    boton.innerHTML =
      '<span class="idioma-activo">'   + idioma.toUpperCase() + '</span>' +
      '<span class="idioma-sep">/</span>' +
      '<span class="idioma-inactivo">' + otro.toUpperCase()   + '</span>';
    boton.setAttribute("aria-label",
      idioma === "es" ? "Switch to English" : "Cambiar a español");
  }

  idiomaActual = idioma;
}

function cambiarIdioma() {
  aplicarIdioma(idiomaActual === "es" ? "en" : "es");
}


/* ============================================================
   4. RESPONSIVE MENU
   ============================================================ */

let menuVisible = false;

function mostrarOcultarMenu() {
  const nav = document.getElementById("nav");
  menuVisible = !menuVisible;
  nav.className = menuVisible ? "responsive" : "";
}

function cerrarMenu() {
  document.getElementById("nav").className = "";
  menuVisible = false;
}


/* ============================================================
   5. SKILL BARS

   The width comes from the data-percent attribute in index.html.
   You can add or remove skills freely: this code does not depend
   on how many there are.
   ============================================================ */

function animarHabilidades() {
  const barras = document.querySelectorAll(".progreso");

  const mostrar = barra => {
    const porcentaje = barra.getAttribute("data-percent") || "0";
    barra.style.width = porcentaje + "%";
    const etiqueta = barra.querySelector("span");
    if (etiqueta) etiqueta.textContent = porcentaje + "%";
  };

  if (!("IntersectionObserver" in window)) {
    barras.forEach(mostrar);
    return;
  }

  const observador = new IntersectionObserver((entradas, obs) => {
    entradas.forEach(entrada => {
      if (entrada.isIntersecting) {
        mostrar(entrada.target);
        obs.unobserve(entrada.target);
      }
    });
  }, { threshold: 0.4 });

  barras.forEach(barra => observador.observe(barra));
}


/* ============================================================
   6. START
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  aplicarIdioma("es");
  animarHabilidades();
});
