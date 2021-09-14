(function solution() {
    return {
        add: (vec1, vec2) => {
            return [vec1[0] + vec2[0], vec1[1] + vec2[1]];
        },
        multiply: (vec1, scalar) => {
            return [vec1[0] * scalar, vec1[1] * scalar];
        },
        length: (vec1) => {
            return Math.sqrt(Math.pow(vec1[0], 2) + Math.pow(vec1[1], 2));
        },
        dot: (vec1, vec2) => {
            return vec1[0] * vec2[0] + vec1[1] * vec2[1];
        },
        cross: (vec1, vec2) => {
            return vec1[0] * vec2[1] - vec1[1] * vec2[0];
        }
    };
})();