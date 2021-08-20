function loadingBar(num){
    let message = (num == 100) ? `100% Complete!\n[%%%%%%%%%%]` : `${num}% [${"%".repeat(num / 10)}${".".repeat(10 - num / 10)}]\nStill loading...`
    console.log(message);
}
loadingBar(30)