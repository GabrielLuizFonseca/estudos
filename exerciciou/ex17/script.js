function raiz(){
    const num = document.querySelector('input#num')
    
    const res = document.getElementById('res')
    if(num.value.length == 0){
        window.alert('[ErroOO] informe algun numero!')
    }
    else{
        const nu = Number(num.value)
        res.innerHTML = ''
        for (let c = 1; c <= 10; c++ ){
            console.log(c)
            let li = document.createElement('li')
            let soma = nu*c
            li.innerHTML = (`[${nu} X ${c} = ${soma}]`)
            res.appendChild(li)
        }
    }
}