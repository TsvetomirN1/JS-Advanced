class VeterinaryClinic {
    clinicName = '';
    capacity = 0;
    clients = [];

    totalProfit = 0;

    constructor(clinicName, capacity) {
        this.clinicName = clinicName;
        this.capacity = capacity;
    }

    newCustomer(ownerName, petName, kind, procedures) {
        kind = kind.toLowerCase();

        if (this.currentWorkload >= this.capacity) {
            throw new Error('Sorry, we are not able to accept more patients!');
        }

        const client = this._getClient(ownerName);

        if (!client) {
            return this._registerPet(ownerName, petName, kind, procedures);
        }

        const pet = this._getPet(client, petName);

        if (pet && this._isPetCurrentlyInClinic(pet)) {
            throw new Error(`This pet is already registered under ${ownerName} name! ${petName} is on our lists, waiting for ${pet.procedures.join(', ')}.`);
        }

        return this._registerPet(ownerName, petName, kind, procedures);
    }

    onLeaving(ownerName, petName) {
        const client = this._getClient(ownerName);

        if (!client) {
            throw new Error('Sorry, there is no such client!');
        }

        const pet = this._getPet(client, petName);

        if (pet && !this._isPetCurrentlyInClinic(pet)) {
            throw new Error(`Sorry, there are no procedures for ${petName}!`);
        }

        this.totalProfit += pet.procedures.length * 500;
        pet.procedures = [];

        return `Goodbye ${petName}. Stay safe!`;
    }

    toString() {
        const busyPercantage = (this.currentWorkload / this.capacity) * 100;
        const result = [
            `${this.clinicName} is ${busyPercantage}% busy today!`,
            `Total profit: ${this.totalProfit.toFixed(2)}$`
        ];

        this.clients.sort(this._sortAlphabetically).forEach(client => {
            result.push(`${client.name} with:`);

            client.pets.sort(this._sortAlphabetically).forEach(pet => {
                const hasProcedures = pet.procedures.length >= 1;
                const proceduresList = hasProcedures + pet.procedures.join(',');
                result.push(`---${pet.name} - a ${pet.kind} that needs:${proceduresList}`);
            });
        });

        return result.join('\n');
    }

    get currentWorkload() {
        return this.clients.reduce((total, client) => {
            return total + client.pets.filter(pet => pet.procedures.length > 0).length;
        }, 0);
    }

    _registerPet(ownerName, petName, kind, procedures) {
        const client = this._getClient(ownerName);

        if (!client) {
            this.clients.push({
                name: ownerName,
                pets: [
                    this._generatePet({ petName, kind, procedures })
                ]
            });
        } else {
            const pet = this._getPet(client, petName);

            if (!pet) {
                client.pets.push(
                    this._generatePet({ petName, kind, procedures })
                );
            } else {
                pet.procedures = procedures;
            }
        }

        return `Welcome ${petName}!`;
    }

    _generatePet({ petName, kind, procedures }) {
        return { name: petName, kind, procedures };
    }

    _getPet(client, petName) {
        return client.pets.find(pet => pet.name === petName);
    }

    _isPetCurrentlyInClinic(pet) {
        if (!pet) {
            return false;
        }

        return pet.procedures.length > 0;
    }

    _getClient(name) {
        return this.clients.find(client => {
            return client.name === name;
        })
    }

    _sortAlphabetically(a, b) {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
    }
}

let clinic = new VeterinaryClinic('SoftCare', 10);
console.log(clinic.newCustomer('Jim Jones', 'Tom', 'Cat', ['A154B', '2C32B', '12CDB']));
console.log(clinic.newCustomer('Anna Morgan', 'Max', 'Dog', ['SK456', 'DFG45', 'KS456']));
console.log(clinic.newCustomer('Jim Jones', 'Tiny', 'Cat', ['A154B']));
console.log(clinic.onLeaving('Jim Jones', 'Tiny'));
console.log(clinic.toString());
clinic.newCustomer('Jim Jones', 'Sara', 'Dog', ['A154B']);
console.log(clinic.toString());