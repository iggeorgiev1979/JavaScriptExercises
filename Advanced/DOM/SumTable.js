function sumTable() {
    let list = document.querySelectorAll('table tr');
    result = 0;
    for(let index = 1; index < list.length; index ++){
        let rows = list[index].children;
        result += Number(rows[1].textContent);
    }
    document.getElementById('sum').textContent = result;
}