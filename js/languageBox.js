const linkCVLanguage = document.getElementById("cv");
const languageBox = document.getElementById("lang-box");
const languageSelected = document.getElementById("lang-selected");
const languageSelection = document.getElementById("lang-selection");
const languages = languageSelection.getElementsByTagName("li")
const textElements = document.querySelectorAll("[data-section]")

document.body.onload = () => {
    const language = localStorage.getItem('language').toUpperCase();
    languageSelected.innerHTML = language;
    linkCVLanguage.href = `../assets/docs/Curriculum-${language}.pdf`;
    fetch(`../languages/${language}.json`).then(json => json.json()).then(json => changeLanguage(json));
}

document.addEventListener('click', (event) => {
    if (languageBox.contains(event.target)) {
        if (languageSelection.classList.contains("visible")) {
            languageSelection.classList.remove("visible");
        } else {
            languageSelection.classList.add("visible");
        }
    } else {
        languageSelection.classList.remove("visible");        
    }
});

for (const language of languages) {
    let data;
    fetch(`../languages/${language.id}.json`).then(json => json.json()).then(json => data = json);
    language.addEventListener('click', (event) => {
        localStorage.setItem('language', language.id);
        languageSelected.innerHTML = language.id.toUpperCase();
        linkCVLanguage.href = `../assets/docs/Curriculum-${language.id.toUpperCase()}.pdf`;
        changeLanguage(data);
    });
}

function changeLanguage(data) {
    for (const textElement of textElements) {
        const section = textElement.dataset.section;
        const group = textElement.dataset.group;
        const value = textElement.dataset.value;

        if (group === undefined) {
            textElement.innerHTML = data[section][value]
        } else {
            textElement.innerHTML = data[section][group][value]
        }
    }
}