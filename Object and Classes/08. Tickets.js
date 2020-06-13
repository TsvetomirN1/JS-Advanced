function solve(tickets, criteria) {
    class Ticket {
        constructor(descriptor) {
            const [destination, price, status] = descriptor.split('|');
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }

    return tickets.map(t => new Ticket(t)).sort(comparator);

    function comparator(a, b) {
        try {
            return a[criteria].localCompare(b[criteria]);
        } catch (e) {
           return a[criteria] - b[criteria];
        }
    }
}
console.log(solve(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination'
));