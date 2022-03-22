txtUrl = "";
async function  copiar(){
    var content = document.getElementById('link');
    content.disabled = false;
    await content.select();
    content.disabled = true;
    document.execCommand('copy');
    document.getElementById('txtStatus').innerHTML="✔️Copiado!"
}
function gerarLink(){
    txtUrl = "https://api.whatsapp.com/send?phone=55";
    numero=document.getElementById("telefone").value;
    numero = numero.replaceAll(' ','').replaceAll('(','').replaceAll(')','').replaceAll('-','')
    if(numero!=''){
        txtUrl+=numero;
        mensagem = document.getElementById("mensagem").value;
        if(mensagem!=''){
            mensagem = mensagem.replaceAll(' ',"%20");
            txtUrl +="&text="+ mensagem; 
        }
        document.getElementById("link").value =txtUrl;
        document.getElementById("divLink").style.display="block";
    }
    else{
        alert ("Digite o número do whatsapp!")
    }
    document.getElementById("txtStatus").innerHTML ="Copie e compartilhe!";
    document.getElementById("divLink").style.animation ="";
    setTimeout(() =>  document.getElementById("divLink").style.animation = "confirmaBackgroundColor 500ms linear", 0.5);
   
}
function verificarNumero(str){
    return str.replaceAll(/[^0-9]/g,'')
  }

function telefoneConfig(){
    telefone = document.getElementById('telefone');
    numero = verificarNumero(telefone.value);
    saida="";
    for(i =0 ; i <numero.length; i++){
        switch(i){
            case 0: saida = '('+numero[i]; break;
            case 1: saida += numero[i]+") "; break;
            case 6: saida += numero[i]+'-'; break;
            default: saida += numero[i];
        }
    }
    document.getElementById('telefone').value =saida;
}

