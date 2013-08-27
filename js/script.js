$(document).ready(function(){
  $('#myModal').on('show', function (e) {
    $("#myModal").find("input").val("");
    $("#myModal").find(".contentform").show();
    $("#myModal").find(".contentsuccess").hide();
    $("#myModal").find(".btninvia").show();
    $("#myModal").find(".btnclose").hide();
    $("#myModal").find("input:checkbox").attr("checked", false);
  }).on('hidden', function (e) {
    $("#myModal").find("input").val("");
    $("#myModal").find(".contentform").show();
    $("#myModal").find(".contentsuccess").hide();
    $("#myModal").find(".btninvia").show();
    $("#myModal").find(".btnclose").hide();
    $("#myModal").find("input:checkbox").attr("checked", false);
  });
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
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    email = $.trim(email);
    if (!re.test(email)) { 
      alert("Scrivi un indirizzo email valido");
      return false;
    };
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
        var modal = $("#myModal");
        modal.find(".contentform").hide();
        modal.find(".contentsuccess").show();
        modal.find(".btninvia").hide();
        modal.find(".btnclose").show();
      }
    });
  });
});