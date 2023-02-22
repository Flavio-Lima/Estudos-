function mult(values, func) {
    for (let i = 0; i < values.length; i++) {
        //values[i] *= values[i] // mas posso dar mais liberdade e fazer da seguinte maneira
        values[i] = func(values[i])
    }

    return values
}

const values = [1, 2, 3, 4, 10, 20]
const func = (n) => n * n

console.log(mult(values, func))

// callbacks: usada em map, filter, reduce