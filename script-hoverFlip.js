$(document).ready(function(){
    $('form').submit(function(){
        var fNameVar = $('input.fNameInput').val();
        var lNameVar = $('input.lNameInput').val();
        var descVar = $('input.textAreaInput').val();
        var fullTextArea = $('textarea').val();
        var fullEntry = '<div class="cardHolder"><div class="userCard"><div class="userCardFront"><h3 class="userName">'+fNameVar+' '+lNameVar+'</h3><p class="hoverFooter">Hover for desription</p></div><div class="userCardBack"><p class="userDescription">'+fullTextArea+'</p></div></div></div>';
        $('.contactList').append(fullEntry);
        return false;
    });
});