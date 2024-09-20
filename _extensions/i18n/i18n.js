function translateNode(node, dic, language) {
  node.innerHTML = dic[language][node.dataset.i18nKey];
}

window.RevealI18n = function () {
  return {
    id: "RevealI18n",
    init: function (deck) {
      const config = deck.getConfig();

      const defaultLocale = config.i18n.defaultLocale;
      const i18n = config.i18n || {};

      const nodes = document.querySelectorAll("[data-i18n-key]");
      const selectElement =
        document.getElementById("data-i18n-switcher") ||
        document.createElement("select");

      nodes.forEach((el) => {
        translateNode(el, i18n, defaultLocale);
      });

      selectElement.addEventListener("change", (e) => {
        const language = e.target.value;
        nodes.forEach((el) => {
          translateNode(el, i18n, language);
        });
      });

      console.log("i18n", i18n);
    },
  };
};
