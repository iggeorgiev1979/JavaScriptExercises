function calculate([arg1, arg2, arg3, arg4, arg5]){
    let n = parseInt(arg1);
    let title_width = parseFloat(arg2);
    let title_length = parseFloat(arg3);
    let bench_width = parseInt(arg4);
    let bench_length = parseInt(arg5);
    let area = n**2;
    let title_area = title_length * title_width;
    let bench_area = bench_length * bench_width;
    area -= bench_area;
    let titles = area / title_area;
    let time_for_titles = titles * 0.2;
    console.log(Math.round(titles * 100) / 100);
    console.log(Math.round(time_for_titles * 100) / 100);
}
calculate([20, 5, 4, 1, 2])
