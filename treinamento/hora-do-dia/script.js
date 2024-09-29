function carregar(){
    const msg = document.querySelector('div#msg')
    const foto = document.querySelector('img#img')
    const hora = new Date().getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 4 && hora <= 12){
        foto.src = '/imagens/bomdia.png'
        document.body.style.background = 'blue'
    }else if(hora <= 17){
        foto.src = '/imagens/tarde.png'
        document.body.style.background = 'yellow'
    }else{
        foto.src = '/imagens/noite.png'
        document.body.style.background = 'black'
    }
}