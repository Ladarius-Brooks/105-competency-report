$(function(){
    $('#shower').on('click',function(){
        $('#shower p').show();
        $('#tail p').hide();
        $('#toes p').hide();
        $('#shower img').show();
        $('#tail img').hide();
        $('#toes img').hide();
    })

    $('#tail').on('click',function(){
        $('#tail p').show();
        $('#shower p').hide();
        $('#toes p').hide();
        $('#tail img').show();
        $('#shower img').hide();
        $('#toes img').hide();
    })
    
    $('#toes').on('click',function(){
        $('#toes p').show();
        $('#tail p').hide();
        $('#shower p').hide();
        $('#toes img').show();
        $('#tail img').hide();
        $('#shower img').hide();
    })
});
