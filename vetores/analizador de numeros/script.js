    let nm = document.querySelector('input#nm')
    let list = document.querySelector('select#list')
    let res = document.querySelector('div#res')
    let valor = []
function innumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else {
        return false
    }
}

function inlist(n, l){
    if(l.indexOf(Number(n)) != - 1){
        return true
    } else {
        return false
    }
}

function adicionar(){
    if(innumero(Number(nm.value)) != inlist(Number(nm.value), valor) ){
        valor.push(Number(nm.value))
        let item = document.createElement('option')
        item.text = `Valor ${nm.value} adicionado.`
        list.appendChild(item)
    }else {
        window.alert('[ErrooO] Número inválido! ou adicionado na lista!')
    }
    nm.value = ''
    nm.focus()
}

function fim(){
    let tot = valor.length
    let maior = valor[0]
    let menor = valor[0]
    let soma = 0
    let media = 0
    for(let pos in valor){
        soma += valor[pos]
        if(valor[pos] > maior){
            maior = valor[pos]
        }
        if(valor[pos] < menor){
            menor = valor[pos]
        }
    }
    media = soma/tot

    res.innerHTML = ''
    res.innerHTML += `<p>O total númerico: ${tot}.</p>`
    res.innerHTML += `<p>O menor número: ${menor}.</p>`
    res.innerHTML += `<p>O maior número: ${maior}.</p>`
    res.innerHTML += `<p>A soma entre os números: ${soma}.</p>`
    res.innerHTML += `<p>A media total: ${media}</p>`
}











