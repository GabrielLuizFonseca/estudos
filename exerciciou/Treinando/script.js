function multiplica(){
    let num = document.querySelector('input#num')
    let res = document.querySelector('div#res')

    if(num.value.length == 0){
        window.alert('[ErroO]')
    }else {
        let nm = Number(num.value)
        res.innerHTML = ('')
        for(let c = 0; c <= 10; c++){
            console.log(c)
            const li = document.createElement('li')
            const soma = nm*c
            li.innerHTML = (`[ ${nm} X ${c} = ${soma} ]`)
            res.appendChild(li)
        }
    }
}