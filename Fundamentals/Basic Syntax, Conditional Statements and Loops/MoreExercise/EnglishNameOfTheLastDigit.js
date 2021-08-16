function solve(num){
    let dict = {0:"zero",1:"one",2:"two",3:"three",4:"four",5:"five",6:"six",7:"seven",8:"eight",9:"nine"};
    let num_string = String(num);
    console.log(dict[num_string[num_string.length - 1]]);
}
solve(512)
