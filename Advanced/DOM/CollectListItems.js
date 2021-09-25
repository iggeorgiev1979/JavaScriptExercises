function extractText() {
    let element = document.getElementsByTagName('li')
    let newText = document.getElementById('result')
    let newEl = ""
    for(let el of element){
        let tmp = el.textContent +'\n'
        newEl += tmp;
    }
    newText.textContent = newEl
}