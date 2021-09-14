function autoEngineeringCompany(data) {
    const cars = data.map(x => x.split('|').map(x => x.trim()))
        .reduce((acc, [brand, model, cars]) => {
            if (!acc[brand]) {
                acc[brand] = {};
            }
            if (!acc[brand][model]) {
                acc[brand][model] = 0;
            }
            acc[brand][model] += +cars;
            return acc;
        }, []);
   
    for (let [brand, model] of Object.entries(cars)) {
        console.log(brand);
        let cars = Object.entries(model).map(a => `###${a[0]} -> ${a[1]}`);
        console.log(cars.join('\n'));
    }
}