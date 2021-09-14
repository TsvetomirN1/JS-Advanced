function solve() {

    function fighter(name) {
        const instance = {
            name,
            health: 100,
            stamina: 100,
            fight
        };

        function fight() {
            instance.stamina--;
            console.log(`${instance.name} slashes at the foe!`);
        }
        return instance;
    }

    function mage(name) {

        const instance = {
            name,
            health: 100,
            mana: 100,
            cast
        };

        function cast(spell) {

            instance.mana--;
            console.log(`${instance.name} cast ${spell}`);
        }
        return instance;

    }
    return {

        fighter,
        mage
    };
}

let create = solve();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball")
scorcher.cast("thunder")
scorcher.cast("light")

const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight()

console.log(scorcher2.stamina);
console.log(scorcher.mana);


