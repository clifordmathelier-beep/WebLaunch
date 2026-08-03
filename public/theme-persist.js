(function () {
    try {
        localStorage.removeItem("theme");
    } catch (e) {}
    function themeFromStorage() {
        var saved = sessionStorage.getItem("theme");
        return saved === "dark" || saved === "light" ? saved : "light";
    }
    document.documentElement.setAttribute("data-theme", themeFromStorage());
})();
