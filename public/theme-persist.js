(function () {
    try {
        localStorage.removeItem("theme");
    } catch (e) {}
    function themeFromStorage() {
        var saved = sessionStorage.getItem("theme");
        return saved === "dark" || saved === "light" ? saved : "light";
    }
    document.documentElement.setAttribute("data-theme", themeFromStorage());
    if (window.__oneSpaceThemeNavListeners) return;
    window.__oneSpaceThemeNavListeners = true;
    document.addEventListener("astro:before-swap", function (event) {
        var theme = themeFromStorage();
        var nd = event.newDocument;
        var root = nd && nd.documentElement;
        if (root) root.setAttribute("data-theme", theme);
    });
    document.addEventListener("astro:after-swap", function () {
        document.documentElement.setAttribute(
            "data-theme",
            themeFromStorage(),
        );
    });
})();
