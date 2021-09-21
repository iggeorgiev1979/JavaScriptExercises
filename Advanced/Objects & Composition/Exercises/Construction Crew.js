function solve(worker = {}){
    if(worker.dizziness){
        let water = worker.weight * worker.experience * 0.1;
        worker.levelOfHydrated += water;
        worker.dizziness = false;
    }
    return worker
}
console.log(solve({ weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true }));