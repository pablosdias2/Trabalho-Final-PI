function validar() {
    
    var x = document.forms["Form"]["Nome"].value;
    
    if (x == "") {
      alert("Nome precisa ser preenchido.");
      return false;
    }
    
    x = document.forms["Form"]["rg"].value;
    
    if (x == "") {
      alert("RG precisa ser preenchido.");
      return false;
    }
    
    x = document.forms["Form"]["cpf"].value;

    if (x == "") {
    
      alert("CPF precisa ser preenchido.");
      return false;
    
    }
    
    x = document.forms["Form"]["rua"].value;

    if (x == "") {
    
      alert("Rua precisa ser preenchido.");
      return false;
    
    }
    
    x = document.forms["Form"]["bairro"].value;

    if (x == "") {
    
      alert("Bairro precisa ser preenchido.");
      return false;
    
    }
    
    x = document.forms["Form"]["cidade"].value;

    if (x == "") {
    
      alert("Cidade precisa ser preenchido.");
      return false;
    
    }

    x = document.forms["Form"]["cep"].value;

    if (x == "") {
    
      alert("Cep precisa ser preenchido.");
      return false;
    
    }

    x = document.forms["Form"]["email"].value;
    
    var  atpos=x.indexOf("@");
    var  dotpos=x.lastIndexOf(".");

    if (atpos<1  ||  dotpos<atpos +2 ||  dotpos +2>=x.length || x=="") {
        
        alert("Enereço e-mail inválido.");
        return  false;

    }
    x = document.forms["Form"]["login"].value;

    if (x == "") {
    
      alert("Login precisa ser preenchido.");
      return false;
    
    }

    x = document.forms["Form"]["pass"].value;

    if (x == "") {
    
      alert("Senha precisa ser preenchido.");
      return false;
    
    }
    x = document.forms["Form"]["passconfirm"].value;

    if (x == "") {
    
        alert("Confirme a senha.");
        return false;
      
      }
  }

function validaForm() {

    var x = document.forms["myForm"]["username"].value;
    if (x == "") {
      alert("Usuário precisa ser preenchido.");
      return false;
    }
  
}