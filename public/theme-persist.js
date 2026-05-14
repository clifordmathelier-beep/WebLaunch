(function () {
    function themeFromStorage() {
        var saved = localStorage.getItem("theme");
        var prefersDark = window.matchMedia(
            "(prefers-color-scheme: dark)",
        ).matches;
        return saved ?? (prefersDark ? "dark" : "light");
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
