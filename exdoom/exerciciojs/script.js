function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas.`

    if(hora > 3 && hora < 12){
        //bom dia!
        img.src='bomdia.png'
        document.body.style.background='#dfbfa8'
    }else if(hora > 11 && hora < 18){
        //Boa Tarde!
        img.src='tarde.png'
        document.body.style.background='#263214'
    }else{
        //boa noite
        img.src='noite.png'
        document.body.style.background='#142932'
    }

}