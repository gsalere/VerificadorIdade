function result(){
    var res = document.getElementById('res')
    var F = document.getElementById('F')
    var M = document.getElementById('M')
    var img = document.getElementById('imagem')
    var anoNasc = document.getElementById('ano').value
    var data = new Date()
    var anoAtual = Number(data.getFullYear())
    var calc = anoAtual - anoNasc

    if(anoNasc >= 2024 || anoNasc < 1900){
            res.innerHTML = "Por favor, insira sua data de nascimento corretamente"
            img.setAttribute('src', '')
    }else{
          if(F.checked){
            res.innerHTML = `Você é uma mulher de ${calc} anos`
            img.setAttribute('src', './imagens/mulher.jfif')
        }else if(M.checked){
            res.innerHTML = `Você é um homem de ${calc} anos`
            img.setAttribute('src', './imagens/homem.jfif')
        } else{
            res.innerHTML = "Preencha os campos corretamente"
        }
    }
}  