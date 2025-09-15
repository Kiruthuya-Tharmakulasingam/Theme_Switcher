const themeSelect = document.getElementById("themeSelect");

themeSelect.addEventListener("change", function () {
  // Remove all theme classes
  document.body.className = "";

  // Add the selected theme
  const selectedTheme = themeSelect.value;
  document.body.classList.add("theme-" + selectedTheme);
});
