$(document).ready(function(){
  $("#invia-form").on('click', function(e){
    e.preventDefault();
    var nome = $("#nome").val();
    var cognome = $("#cognome").val();
    var nomeagenzia = $("#nomeagenzia").val();
    var indirizzo = $("#indirizzo").val();
    var citta = $("#citta").val();
    var cap = $("#cap").val();
    var piva = $("#piva").val();
    var tel = $("#tel").val();
    var email = $("#email").val();
    var privacy1 = $("#privacy1").is(":checked");
    var privacy2 = $("#privacy2").is(":checked");
    if((nome == "") || (cognome == "") || (nomeagenzia == "") || (indirizzo == "") || (citta == "") || (cap == "") || (piva == "") || (tel == "") || (email == "")) { 
      alert("Compila tutti i campi");
      return false; 
    }
    if (!privacy1 || !privacy2 ) {
      alert("Non hai accettato le condizioni");
      return false;  
    };
    console.log("ciao!");

    $.ajax({
      url: "invia-dati.php",
      type: "post",
      dataType: "json",
      data: {
        nome: nome, 
        cognome: cognome,
        nomeagenzia: nomeagenzia,
        indirizzo: indirizzo,
        citta: citta,
        cap: cap,
        piva: piva,
        tel: tel,
        email: email,
        privacy1: privacy1,
        privacy2: privacy2
      },
      success: function(data){
        alert("Fatto!");
      }
    });
  });
});