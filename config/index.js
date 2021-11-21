const doc = document
doc.onload = addEventListener('load', ()=>{
    $('#sucesso').hide()
    $('#vazio').hide()
    $('#servidor').hide()
})

$('#enviar').click(function(){
    
    let nome     = doc.getElementById('nome').value
    let email    = doc.getElementById('email').value
    let mensagem = doc.getElementById('exampleFormControlTextarea1').value

   if(mensagem === '' || mensagem === null){
        $('#vazio').show(100)
    }else if(mensagem){
        
        const url = 'http://192.168.100.20:3000/app'

        const dados = {nome, email, mensagem}
    
        const config = {
            method:'POST',
            body: JSON.stringify(dados),
            headers :{
                'Content-Type': 'application/json'
            }
        }
    
        fetch(url, config)
               .then(resposta => {
                   resposta.json()
                   $('#sucesso').show(100)  
                })
               .catch(_ =>  $('#servidor').show(100))
    
        limpar()

    }


})

$('#vazio').click(function(){
    $($(this)).hide(100)
})

$('#sucesso').click(function(){
    $($(this)).hide(100)
})

$('#servidor').click(function(){
    $($(this)).hide(100)
})


function limpar(){
    let nome     = doc.getElementById('nome')
    let email    = doc.getElementById('email')
    let mensagem = doc.getElementById('exampleFormControlTextarea1')

    nome.value      = ''
    email.value     = ''
    mensagem.value  = ''
}
