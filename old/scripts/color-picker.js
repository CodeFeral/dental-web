// Get the color picker element
const primary = document.getElementById('input-color-primary');
const light = document.getElementById('input-color-light');
const dark = document.getElementById('input-color-dark');

function updateBackgroundColorPrimary(color) {
    document.documentElement.style.setProperty('--color-primary', color);
}

primary.addEventListener('input', (event) => {
    updateBackgroundColorPrimary(event.target.value);
});

function updateBackgroundColorLight(color) {
    document.documentElement.style.setProperty('--color-light', color);
}

light.addEventListener('input', (event) => {
    updateBackgroundColorLight(event.target.value);
});

function updateBackgroundColorDark(color) {
    document.documentElement.style.setProperty('--color-dark', color);
}

dark.addEventListener('input', (event) => {
    updateBackgroundColorDark(event.target.value);
});