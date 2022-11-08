var inputProduto = document.getElementById("produto");
var inputTel = document.getElementById("telefone");
var inputEmail = document.getElementById('email');
var inputMensagem = document.getElementById('mensagem');
var sub = document.getElementById('subForm');
var titulo = document.getElementById('titulocard');
var toast = document.getElementById('buttontoast');

function enviarform() {

    if (document.getElementById('produto').value == '') {
        alert('Por favor, preencha o campo produto ');
        document.getElementById('produto').focus();
        return false
    } else if (document.getElementById('telefone').value == '') {
        alert('Por favor, preencha o campo Telefone');
        document.getElementById('telefone').focus();
        return false
    } else if (document.getElementById('email').value == '') {
        alert('Por favor, preencha o campo email');
        document.getElementById('email').focus();
        return false
    } else if (document.getElementById('mensagem').value == '') {
        alert('Por favor, Preencha a descrição sobre seu produto');
        document.getElementById('mensagem').focus();
        return false
    }
    alert(`Olá, ficamos extremamente feliz e gratos por dedicar o seu tempo e confiança em nossa divulgação. Em breve iremos entrar em contato para concluir o processo da sua divulgação!`);
}