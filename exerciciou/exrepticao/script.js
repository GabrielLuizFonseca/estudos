function contar(){
    let ini = document.querySelector('input#ini')
    let fim = document.querySelector('input#fim')
    let pas = document.querySelector('input#pas')
    let res = document.querySelector('div.res')
    
    
if(ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0){
    res.innerHTML = 'Impossivel contar.'
    window.alert('[ERRoO] algo está errado por favor verificar os dados!')
}
    else{
        res.innerHTML = 'Contando: <br>'
       let i = Number(ini.value)
       let fi = Number(fim.value)
       let pso = Number(pas.value)
       if(pso <=0){
        window.alert('Passo invalido, concidere o passo 1')
        pso=1
       }

       if(i < fi){
        for(let c = i ; c <= fi ; c += pso ){
            //let la= document.createElement('label')
            res.innerHTML += ` ${c} \u{1f449}`
            //res.appendChild(la)
        }
    } else{
        for(let c = i; c >= fi; c -=pso){
            res.innerHTML += ` ${c} \u{1f449}`
        }
    }
        res.innerHTML += `\u{1f3c1}`
    }
       
}