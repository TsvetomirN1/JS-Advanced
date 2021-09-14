function carFactory(descriptor) {
    const engines = [
        { power: 90, volume: 1800 },
        { power: 120, volume: 2400 },
        { power: 200, volume: 3500 }
    ];


    const car = {
        model: descriptor.model,
        carriage: {
            type: descriptor.carriage,
            color: descriptor.color
        }
    };

    for (let engine of engines) {
        if (engine.power >= descriptor.power) {
            car.engine = Object.assign(engine);
            break;
        }
    }

    if (descriptor.wheelsize % 2 == 0) {
        const wheelsize = descriptor.wheelsize - 1;
        car.wheels = [wheelsize, wheelsize, wheelsize, wheelsize];
    } else {
        const wheelsize = descriptor.wheelsize;
        car.wheels = [wheelsize, wheelsize, wheelsize, wheelsize];
    }


    return car;
}

const car = carFactory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
});
console.log(car);