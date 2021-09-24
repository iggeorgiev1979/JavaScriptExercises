function editElement(el, match, replacement) {
    let newText = el.textContent.split(`${match}`).join(`${replacement}`)
    el.textContent = newText;
}
