function result(){
    var res = document.getElementById('res')
    var F = document.getElementById('F')
    var M = document.getElementById('M')
    var img = document.getElementById('imagem')
    var anoNasc = document.getElementById('ano').value
    var data = new Date()
    var anoAtual = Number(data.getFullYear())
    var calc = anoAtual - anoNasc
    var alterar = document.getElementById('alterar')

    if(anoNasc >= 2024 || anoNasc < 1900){
            res.innerHTML = "Por favor, insira sua data de nascimento corretamente"
            img.setAttribute('src', '')
    }else{
          if(F.checked){
            if(calc>60){
                
                img.setAttribute('src', './imagens/idosa.jfif')
                
            }else if(calc >13){
                img.setAttribute('src', './imagens/mulher.jfif')
            }else{
                img.setAttribute('src', './imagens/criancaF.jfif')
            }
            res.innerHTML = `Você é uma mulher de ${calc} anos`
            alterar.style.backgroundColor='#ff007f'
            
        }
        else if(M.checked){
            if(calc>60){
                img.setAttribute('src', './imagens/idoso.jpg    ')
            }else if(calc>13){
                img.setAttribute('src', './imagens/homem.jfif')
            }else{
                img.setAttribute('src', './imagens/criancaM.jfif')
            }
            res.innerHTML = `Você é um homem de ${calc} anos`
            
            alterar.style.backgroundColor='rgb(18, 86, 138)'
        } else{
            res.innerHTML = "Preencha os campos corretamente"
        }
    }
}  
