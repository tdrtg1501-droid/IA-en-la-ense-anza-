(function () {
  // THEME
  const themeBtn = document.getElementById("themeBtn");
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) document.documentElement.setAttribute("data-theme", savedTheme);

  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme") || "light";
      const next = current === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      localStorage.setItem("theme", next);
    });
  }

  // LANGUAGE (alpha)
  const dict = {
    es: {
      nav_home: "Inicio",
      nav_tdr: "¿Qué es un TDR?",
      nav_theory: "Marco teórico",
      nav_why: "¿Por qué IA?",
      nav_study: "Estudio",
      nav_gpt: "GPT",
      nav_resources: "Recursos",
      kicker: "Treball de Recerca (TDR)",
      title_1: "Inteligencia Artificial",
      title_2: "en la Enseñanza",
      subtitle: "Guía práctica y crítica para integrar IA en el aula: beneficios, límites, estudio real y un GPT asistente para docentes.",
      cta_1: "Ver el apartado clave",
      cta_2: "Ir al GPT",
      badge_1: "Seriedad + innovación",
      badge_2: "Evidencia + práctica",
      badge_3: "Docentes + alumnado",
      panel_title: "Accesos rápidos",
      panel_t1: "¿Qué es un TDR?",
      panel_t1s: "Explicación clara + ampliación desplegable.",
      panel_t2: "Marco teórico",
      panel_t2s: "IA, ChatGPT, usos y límites.",
      panel_t3: "Estudio",
      panel_t3s: "Datos, Excel y correlaciones.",
      panel_t4: "Recursos",
      panel_t4s: "PDF, links y herramientas.",
      panel_note: "*Versión alpha: iremos añadiendo tus imágenes, el PDF y los links reales.",
      scroll: "Desliza para explorar",
      tdr_h2: "¿Qué es un TDR?",
      tdr_intro: "Un trabajo de investigación de bachillerato: planteas una pregunta real, aplicas una metodología y llegas a conclusiones propias.",
      tdr_q: "La pregunta que guía el proyecto",
      tdr_p1: "¿Cómo está cambiando la IA el aprendizaje y el trabajo docente, y cuándo tiene sentido implementarla en el aula sin perder calidad educativa?",
      tdr_more: "Leer en detalle",
      tdr_detail: "Un TDR no es “copiar y pegar información”: es formular un problema, recoger datos (encuestas, entrevistas, observación), analizar resultados y construir una propuesta o producto final. En este caso, el producto no es una maqueta: es una guía práctica y un GPT asistente docente, con una mirada crítica y aplicada.",
      img_placeholder: "Imagen aquí (placeholder)",
      img_hint: "Cuando me pases imágenes, las coloco y ajusto tamaños.",
      theory_h2: "Marco teórico (resumen + ampliación)",
      theory_intro: "Explicaciones cortas, y si quieres profundizar: desplegable con “más info” (sin salir de la página).",
      theory_1t: "¿Qué es la IA?",
      theory_1s: "Sistemas que aprenden patrones para tomar decisiones o generar contenido.",
      theory_1l: "Aquí pondremos tu explicación larga y, si quieres, el enlace al apartado exacto del TDR.",
      theory_2t: "¿Cómo funciona ChatGPT?",
      theory_2s: "Predice la siguiente palabra a partir de contexto, entrenado con muchos textos.",
      theory_2l: "Explicación ampliada: modelos de lenguaje, prompts, alucinaciones, verificación y límites.",
      theory_3t: "¿Qué permite hacer?",
      theory_3s: "Personalizar, resumir, generar ejercicios, feedback y apoyo docente.",
      theory_3l: "Aquí conectaremos con tu práctica: adaptaciones, rúbricas, programación, burocracia.",
      more_info: "Más info",
      why_h2: "¿Por qué implementar IA en la enseñanza?",
      why_intro: "La tesis: usar IA cuando aporte más beneficios que riesgos y descargue trabajo real al docente, sin sustituir la pedagogía.",
      why_1t: "Criterio: más pros que contras",
      why_1s: "Tiene sentido si mejora aprendizaje, reduce carga y mantiene supervisión humana (y no genera dependencia).",
      why_2t: "Cuando el entorno “obliga”",
      why_2s: "Si el alumnado ya usa IA, ignorarlo es perder la oportunidad de enseñar criterio, verificación y ética.",
      why_3t: "Metáfora: mechero y calculadora",
      why_3s: "No es magia: acelera procesos, pero si no entiendes el fundamento, te puede quemar o dar resultados sin sentido.",
      why_4t: "Diversidad y personalización",
      why_4s: "Facilita adaptaciones (NEE/PI), accesibilidad y diferentes ritmos sin multiplicar la carga.",
      why_5t: "Competencias del futuro",
      why_5s: "Alfabetización en IA, pensamiento crítico, evaluación de fuentes, y comunicación con herramientas.",
      why_6t: "Acompañamiento, no sustitución",
      why_6s: "La IA apoya; el docente decide: objetivos, evaluación, contexto emocional y didáctica.",
      why_more: "Ver el desarrollo completo (alpha)",
      why_long: "Aquí añadiremos tu texto largo, con estructura de argumentación y referencias al TDR (y luego el link al PDF / apartado exacto).",
      study_h2: "Estudio: datos y correlaciones",
      study_intro: "Aquí irá el acceso a Excel, gráficos y una explicación entendible de las correlaciones encontradas.",
      study_1t: "Descargas / enlaces",
      study_1s: "Añadiremos: Excel, correlaciones, visualizaciones y capturas.",
      study_2t: "Correlaciones (resumen)",
      study_2s: "Pendiente: lista de correlaciones clave + explicación “qué significa y por qué importa”.",
      gpt_h2: "GPT asistente docente",
      gpt_intro: "Qué es, para qué sirve, a quién va dirigido y ejemplos listos de uso.",
      gpt_1t: "¿Qué es un GPT?",
      gpt_1s: "Un asistente configurado con instrucciones y recursos para una tarea concreta.",
      gpt_2t: "¿Para qué sirve?",
      gpt_2s: "Adaptaciones, actividades, rúbricas, planificación, y apoyo en burocracia.",
      gpt_3t: "Ejemplos",
      gpt_3s: "Casos reales: “adaptar examen”, “PI/NEE”, “situación de aprendizaje”.",
      gpt_more: "Añadir link del GPT + ejemplos (alpha)",
      gpt_long: "Cuando me pases el link oficial del GPT, lo pongo aquí con botones y capturas.",
      res_h2: "Recursos",
      res_intro: "PDF del trabajo, NotebookLM, Aula de Medios, bibliografía y herramientas.",
      res_1t: "PDF / enlaces",
      res_1s: "Añadiremos botones cuando tengas los links finales.",
      res_2t: "Bibliografía",
      res_2s: "Lista limpia (APA) y links relevantes."
    },

    ca: {
      nav_home: "Inici",
      nav_tdr: "Què és un TDR?",
      nav_theory: "Marc teòric",
      nav_why: "Per què IA?",
      nav_study: "Estudi",
      nav_gpt: "GPT",
      nav_resources: "Recursos",
      kicker: "Treball de Recerca (TDR)",
      title_1: "Intel·ligència Artificial",
      title_2: "a l'Ensenyament",
      subtitle: "Guia pràctica i crítica per integrar IA a l’aula: beneficis, límits, estudi real i un GPT assistent per a docents.",
      cta_1: "Veure l’apartat clau",
      cta_2: "Anar al GPT",
      badge_1: "Seriositat + innovació",
      badge_2: "Evidència + pràctica",
      badge_3: "Docents + alumnat",
      panel_title: "Accessos ràpids",
      panel_t1: "Què és un TDR?",
      panel_t1s: "Explicació clara + ampliació desplegable.",
      panel_t2: "Marc teòric",
      panel_t2s: "IA, ChatGPT, usos i límits.",
      panel_t3: "Estudi",
      panel_t3s: "Dades, Excel i correlacions.",
      panel_t4: "Recursos",
      panel_t4s: "PDF, enllaços i eines.",
      panel_note: "*Versió alpha: hi afegirem imatges, el PDF i els enllaços reals.",
      scroll: "Desplaça per explorar",
      tdr_h2: "Què és un TDR?",
      tdr_intro: "Un treball de recerca de batxillerat: planteges una pregunta real, apliques metodologia i arribes a conclusions pròpies.",
      tdr_q: "La pregunta que guia el projecte",
      tdr_p1: "Com està canviant la IA l’aprenentatge i la feina docent, i quan té sentit implementar-la a l’aula sense perdre qualitat educativa?",
      tdr_more: "Llegir en detall",
      tdr_detail: "Un TDR no és “copiar i enganxar”: és formular un problema, recollir dades, analitzar resultats i construir una proposta o producte final. Aquí: guia pràctica + GPT assistent docent, amb mirada crítica i aplicada.",
      img_placeholder: "Imatge aquí (placeholder)",
      img_hint: "Quan em passis imatges, les col·loco i ajusto mides.",
      theory_h2: "Marc teòric (resum + ampliació)",
      theory_intro: "Explicacions curtes i, si vols aprofundir: desplegable amb “més info” (sense sortir de la pàgina).",
      theory_1t: "Què és la IA?",
      theory_1s: "Sistemes que aprenen patrons per decidir o generar contingut.",
      theory_1l: "Aquí hi posarem la teva explicació llarga i l’enllaç a l’apartat del TDR.",
      theory_2t: "Com funciona ChatGPT?",
      theory_2s: "Preveu la paraula següent segons el context, entrenat amb molts textos.",
      theory_2l: "Ampliació: models de llenguatge, prompts, al·lucinacions, verificació i límits.",
      theory_3t: "Què permet fer?",
      theory_3s: "Personalitzar, resumir, generar activitats, feedback i suport docent.",
      theory_3l: "Connectarem amb la pràctica: adaptacions, rúbriques, programació, burocràcia.",
      more_info: "Més info",
      why_h2: "Per què implementar IA a l’ensenyament?",
      why_intro: "La tesi: usar IA quan aporti més beneficis que riscos i descarregui feina real al docent, sense substituir la pedagogia.",
      why_1t: "Criteri: més pros que contres",
      why_1s: "Té sentit si millora aprenentatge, redueix càrrega i manté supervisió humana (i evita dependència).",
      why_2t: "Quan l’entorn “obliga”",
      why_2s: "Si l’alumnat ja usa IA, ignorar-ho és perdre l’oportunitat d’ensenyar criteri i ètica.",
      why_3t: "Metàfora: encenedor i calculadora",
      why_3s: "No és màgia: accelera processos, però sense base pot “cremar” o donar resultats sense sentit.",
      why_4t: "Diversitat i personalització",
      why_4s: "Facilita adaptacions (NEE/PI), accessibilitat i ritmes diferents sense multiplicar la càrrega.",
      why_5t: "Competències de futur",
      why_5s: "Alfabetització en IA, pensament crític, avaluació de fonts i comunicació amb eines.",
      why_6t: "Acompanyament, no substitució",
      why_6s: "La IA acompanya; el docent decideix: objectius, avaluació, context i didàctica.",
      why_more: "Veure el desenvolupament complet (alpha)",
      why_long: "Aquí hi afegirem el teu text llarg amb estructura i referències al TDR.",
      study_h2: "Estudi: dades i correlacions",
      study_intro: "Aquí hi haurà l’accés a Excel, gràfics i una explicació clara de les correlacions.",
      study_1t: "Descarregues / enllaços",
      study_1s: "Afegirem: Excel, correlacions, visualitzacions i captures.",
      study_2t: "Correlacions (resum)",
      study_2s: "Pendent: llista de correlacions clau + què vol dir i per què importa.",
      gpt_h2: "GPT assistent docent",
      gpt_intro: "Què és, per a què serveix, a qui va dirigit i exemples d’ús.",
      gpt_1t: "Què és un GPT?",
      gpt_1s: "Un assistent configurat amb instruccions i recursos per a una tasca concreta.",
      gpt_2t: "Per a què serveix?",
      gpt_2s: "Adaptacions, activitats, rúbriques, planificació i suport en burocràcia.",
      gpt_3t: "Exemples",
      gpt_3s: "Casos reals: “adaptar examen”, “PI/NEE”, “situació d’aprenentatge”.",
      gpt_more: "Afegir enllaç del GPT + exemples (alpha)",
      gpt_long: "Quan em passis l’enllaç oficial del GPT, el poso aquí amb botons i captures.",
      res_h2: "Recursos",
      res_intro: "PDF, NotebookLM, Aula de Mitjans, bibliografia i eines.",
      res_1t: "PDF / enllaços",
      res_1s: "Afegirem botons quan tinguis els enllaços finals.",
      res_2t: "Bibliografia",
      res_2s: "Llista neta (APA) i enllaços rellevants."
    }
  };

  const langBtns = document.querySelectorAll(".lang__btn");
  const applyLang = (lang) => {
    document.documentElement.setAttribute("lang", lang === "ca" ? "ca" : "es");
    localStorage.setItem("lang", lang);
    langBtns.forEach(b => b.classList.toggle("is-active", b.dataset.lang === lang));

    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      const value = dict[lang]?.[key];
      if (value) el.textContent = value;
    });
  };

  const savedLang = localStorage.getItem("lang") || "es";
  applyLang(savedLang);

  langBtns.forEach(btn => {
    btn.addEventListener("click", () => applyLang(btn.dataset.lang));
  });

  // Active link highlight on scroll (simple)
  const sections = Array.from(document.querySelectorAll("section[id]"));
  const navLinks = Array.from(document.querySelectorAll(".nav__link"));

  const setActive = () => {
    const y = window.scrollY + 120;
    let current = sections[0]?.id || "inicio";
    for (const s of sections) {
      if (s.offsetTop <= y) current = s.id;
    }
    navLinks.forEach(a => {
      const href = a.getAttribute("href") || "";
      a.classList.toggle("is-active", href === `#${current}`);
    });
  };
  window.addEventListener("scroll", setActive, { passive: true });
  setActive();
})();
