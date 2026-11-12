const themeToggle = document.querySelector("#theme-toggle");

themeToggle.addEventListener("click", () => {
    const isLightMode = document.body.classList.toggle("light-mode");
    themeToggle.setAttribute("aria-pressed", String(isLightMode));
    themeToggle.textContent = isLightMode ? "Switch to dark mode" : "Switch to light mode";
});

/* I asked my AI agent how to make the light/dark mode switch, and it produced this code, along with changes in my CSS and HTML files
I also asked it to make the light/dark mode switch seperate from my navigation, which it did as well in my HTML file. */
ScrollReveal().reveal("#headline, #title, #about, #work, #contact", {
    delay: 300,
    distance: "50px",
    origin: "bottom"
});

/*Originally I had 5-6 individual ScrollReveal functions that all had the same delay, distance, and origin, so I asked the AI agent to combine them all into one function. */