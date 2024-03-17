
function setScrollText() {
    fetch('/static-content/tourdates.json')
        .then((response) => response.json())
        .then((json) => json.tourdates)
        .then((tourdates) => {
            const text = document.getElementById("scroll_text")
            tourdates.forEach(tourDate => {
                const span = document.createElement("span")
                span.innerText = tourDate
                span.classList.add("m-5")
                text.appendChild(span)
            });
            // text.innerText = tourdates.join(" - ")
        })
}


window.onload = () => {
    setScrollText()
}
