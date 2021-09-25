function colorize() {
    // let list = document.querySelectorAll('table tr')
    // for(let index = 0; index < list.length; index ++){
    //     if(index % 2 != 0){
    //         list[index].style.background = 'teal';
    //     }
    // }
    let list = document.getElementsByTagName('tr')
    for(let index = 0; index < list.length; index ++){
        if(index % 2 != 0 ){
            list[index].style.backgroundColor = 'teal'
        }
    }
}
