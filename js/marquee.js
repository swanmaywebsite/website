
function setScrollText() {
    fetch('/static-content/tourdates.json')
        .then((response) => response.json())
        .then((json) => json.tourdates)
        .then((tourdates) => {
            const text = document.getElementById("marquee-content-1")
            tourdates.forEach(tourDate => {
                const h4 = document.createElement("h4")
                h4.innerText = tourDate
                text.appendChild(h4)
            });
            // text.innerText = tourdates.join(" - ")
            const textHidden = document.getElementById("marquee-content-2")
            tourdates.forEach(tourDate => {
                const h4 = document.createElement("h4")
                h4.innerText = tourDate
                textHidden.appendChild(h4)
            });
            // text.innerText = tourdates.join(" - ")
        })
}


window.onload = () => {
    setScrollText()
}