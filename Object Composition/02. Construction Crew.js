function solve(obj) {
    if (obj.dizziness) {
        obj.dizziness = false;
        let levelOfHydrated = obj.weight * obj.experience * 0.1;
        obj.levelOfHydrated += levelOfHydrated;
    }

    return obj;
}

console.log(solve({
    weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true
}

));

