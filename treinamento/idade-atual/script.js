function verificar(){
    const nasc = document.querySelector('input#ano')
    const na = Number(nasc.value)
    const ano = new Date().getFullYear()
    const res = document.querySelector('div#res')

    if(na == 0 || na > ano){
        alert('[Erro] algo está errado. Por favor verifique os dados!')
    }else{
        const fsex = document.getElementsByName('sex')
        const idade = ano - na
        var genero = ''
        const img = document.createElement('img')
        img.setAttribute('id', 'foto')
        
        
        if(fsex[0].checked){
            genero = 'Masculino'
            if(idade >= 0 && idade <= 11){
                //criança
                img.setAttribute('src','imagens/riana.png')
            }else if(idade < 19){
                img.setAttribute('src', 'imagens/joh.png')
            }else if(idade < 50){
                img.setAttribute('src', 'imagens/homem.png')
            }else{
                img.setAttribute('src', 'imagens/idoso.png')
            }
        }

        else if(fsex[1].checked){
            genero = 'Femenino'
            if(idade >= 0 && idade <= 11){
                //criança
                img.setAttribute('src','imagens/rebequinha.png')
            }else if(idade < 19){
                img.setAttribute('src', 'imagens/rebeca.png')
            }else if(idade < 50){
                img.setAttribute('src', 'imagens/mulher.png')
            }else{
                img.setAttribute('src', '   imagens/idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Idade: ${idade} anos, Genero: ${genero}.`
        res.appendChild(img)
    }
}