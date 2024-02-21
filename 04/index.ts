const gerarEtiqueta = (produto: { produto: string, lote: number, ano: number, qtd: number }) => {
    const etiquetas: string[] = []
    const { lote, ano, qtd } = produto

    for (let i = 1; i <= qtd; i++) {
        const numeroEtiqueta = i.toString().padStart(3, '0')
        etiquetas.push(`${lote}-${ano}-${numeroEtiqueta}`)
    }

    return etiquetas
}

console.log(gerarEtiqueta({
    produto: 'CPU Dual Core 3.0GHZ',
    lote: 321,
    ano: 2022,
    qtd: 10
}))