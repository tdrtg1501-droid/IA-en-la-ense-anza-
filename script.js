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
      kicker: "Treball de Recerca (TDR)",
      title_1: "Inteligencia Artificial",
      title_2: "en la Enseñanza",
      subtitle: "Guía práctica y crítica para integrar IA en el aula: beneficios, límites, estudio real y un GPT asistente para docentes.",
      scroll: "Desliza para explorar",
      portals_h2: "Panel principal",
      portals_sub: "Dos accesos: el portal del trabajo (TDR) y el portal del GPT.",
      tdr_portal_title: "Portal del trabajo de investigación",
      tdr_portal_text: "Accede al PDF del TDR, a los enlaces clave y a una versión resumida del marco teórico.",
      tdr_btn_primary: "Entrar al portal del TDR",
      tdr_btn_secondary: "Ver preguntas",
      gpt_portal_title: "Portal del GPT",
      gpt_portal_text: "Qué es el GPT, para quién va dirigido, ejemplos de uso y acceso directo al asistente.",
      gpt_btn_primary: "Acceder al portal del GPT",
      gpt_btn_secondary: "Ver ejemplos",
      faq_h2: "Puedes encontrar respuestas a…",
      faq_sub: "(Alpha) Esto será el “índice rápido” de dudas típicas. Luego lo conectamos con secciones reales.",
      q1: "¿Qué es la IA y por qué cuesta definirla?",
      a1: "Explicación corta + ampliación. Aquí irá el texto largo del TDR y, si quieres, un enlace al apartado exacto.",
      q2: "¿Cómo funciona ChatGPT y cuáles son sus límites?",
      a2: "Modelos de lenguaje, prompts, alucinaciones, verificación y uso responsable en educación.",
      q3: "¿Por qué implementar IA en la enseñanza?",
      a3: "Criterio “más pros que contras”, metáfora mechero/calculadora, diversidad, competencias de futuro y acompañamiento."
    },
    ca: {
      kicker: "Treball de Recerca (TDR)",
      title_1: "Intel·ligència Artificial",
      title_2: "a l'Ensenyament",
      subtitle: "Guia pràctica i crítica per integrar IA a l’aula: beneficis, límits, estudi real i un GPT assistent per a docents.",
      scroll: "Desplaça per explorar",
      portals_h2: "Panell principal",
      portals_sub: "Dos accessos: el portal del TDR i el portal del GPT.",
      tdr_portal_title: "Portal del treball de recerca",
      tdr_portal_text: "Accedeix al PDF del TDR, als enllaços clau i a un resum del marc teòric.",
      tdr_btn_primary: "Entrar al portal del TDR",
      tdr_btn_secondary: "Veure preguntes",
      gpt_portal_title: "Portal del GPT",
      gpt_portal_text: "Què és el GPT, per a qui va dirigit, exemples d’ús i accés directe a l’assistent.",
      gpt_btn_primary: "Accedir al portal del GPT",
      gpt_btn_secondary: "Veure exemples",
      faq_h2: "Pots trobar respostes a…",
      faq_sub: "(Alpha) Això serà l’índex ràpid de dubtes típics. Després ho connectem amb seccions reals.",
      q1: "Què és la IA i per què costa definir-la?",
      a1: "Explicació curta + ampliació. Aquí hi anirà el text llarg del TDR i l’enllaç a l’apartat exacte.",
      q2: "Com funciona ChatGPT i quins límits té?",
      a2: "Models de llenguatge, prompts, al·lucinacions, verificació i ús responsable en educació.",
      q3: "Per què implementar IA a l’ensenyament?",
      a3: "Criteri “més pros que contres”, metàfora encenedor/calculadora, diversitat, competències de futur i acompanyament."
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
})();
