let num = document.querySelector('input#nm')
let list = document.querySelector('select#list')
let res = document.querySelector('div#res')
let valor = []
let nm = Number(num.value)
function isnumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function inlist(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}
function adicionar(){
    if(isnumero(num.value) && !inlist(num.value, valor)){
        //window.alert('Tudo ok')
        valor.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        list.appendChild(item)
    }else{
        window.alert('Valor invalido ou encontrado na lista')
    }
    num.value = ''
    num.focus()
}
function fim(){
    if(valor.length == 0){
        window.alert('Adiciona um numero')
    } else {
    let tot = valor.length
    let maior = valor[0]
    let menor = valor[0]
    let soma = 0
    let media = 0

    for(let pos in valor){
        soma += valor[pos]
        if(valor[pos] > maior)
            maior = valor[pos]
        if(valor[pos] < menor)
            menor = valor[pos]
    }
    media = soma/tot

    res.innerHTML = ''
    res.innerHTML += `<p>Ao todo, temos: ${tot} números cadastrados.</p>`
    res.innerHTML += `<p>O menor valor: ${menor}.</p>`
    res.innerHTML += `<p>O maior valor: ${maior}.</p>`
    res.innerHTML += `<p>A soma dos valores adicionado: ${soma}.</p>`
    res.innerHTML += `<p>A media total: ${media}</p>`


    }
}











