$(document).ready(function(){
    $('form').submit(function(){
        var fNameVar = $('input.fNameInput').val();
        var lNameVar = $('input.lNameInput').val();
        var fullTextArea = $('textarea').val();
        var fullEntry = '<div class="userCard"><div class="cardFront"><h3 class="cardH3">'+fNameVar+' '+lNameVar+'</h3><p style="margin-top:20px; text-align:center;">Click for description</p></div><div class="cardBack"><p class="descText" style="display:inline-block">'+fullTextArea+'</p></div>';
        $('.userList').append(fullEntry);
        $('div.cardBack').hide();
        return false;
    });
    $(document).on('click','div.userCard',function(){
        $(this).children().toggle();
    });
});
