$(document).ready(function () { 
    var $seuCampoCpf = $("#cpf");
    var $cep = $("#cep");
    var $tel = $("#tel");
    $seuCampoCpf.mask('000.000.000-00', {reverse: true});
    $cep.mask('00000-000',{reverse: true});
    
    $tel.mask(' (00)00000-0000',{reverse: true});
}); 
$(function(){

    $("#rg").mask("AA - 99.999.999");
                          

});