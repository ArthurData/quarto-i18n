function translateNode(node, dic, language) {
  node.innerHTML = dic[language][node.dataset.i18nKey];
}

function applyTranslations(nodes, dic, language) {
  nodes.forEach((el) => {
    translateNode(el, dic, language);
  });
}

async function loadYAMLFile(filePath) {
  try {
    const response = await fetch(filePath);
    const yamlText = await response.text();
    return jsyaml.load(yamlText);
  } catch (error) {
    console.error("Error when loading YAML file", error);
    return null;
  }
}

window.RevealI18n = function () {
  return {
    id: "RevealI18n",
    init: async function (deck) {
      const config = deck.getConfig();

      const defaultLocale = config.i18n.defaultLocale;
      const i18n = config.i18n || {};
      let keys_text = {};

      const nodes = document.querySelectorAll("[data-i18n-key]");

      if (i18n.dictionaryPath) {
        keys_text = await loadYAMLFile(i18n.dictionaryPath);
        if (!keys_text) {
          console.error("Error loading dictionary file");
          return;
        }
      } else {
        keys_text = i18n;
      }

      applyTranslations(nodes, keys_text, defaultLocale);

      const selectElement =
        document.getElementById("data-i18n-switcher") ||
        document.createElement("select");

      selectElement.addEventListener("change", (e) => {
        const language = e.target.value;
        applyTranslations(nodes, keys_text, language);
      });
    },
  };
};
