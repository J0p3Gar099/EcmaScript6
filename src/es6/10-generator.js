function* iterate(array) {
    for (let valor of array) {
        yield valor;
    }
}

const it  = iterate(["Pedro","Cesar","Jorge"])
console.log(it.next().value);
console.log(it.next().value);