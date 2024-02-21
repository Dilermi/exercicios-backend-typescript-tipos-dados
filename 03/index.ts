const fazerTabuada = (numeros: number[]) => {
    numeros.forEach(numero => {
        for (let i = 0; i <= 10; i++) {
            console.log(`${numero} x ${i} = ${numero * i}`)
        }
        console.log('---------------')
    })
}

fazerTabuada([4, 2, 6])