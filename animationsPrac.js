
function reset() {
    setTimeout(function () {
        $('#bounceTitle').removeClass('bounce'),
        $('.ball').removeClass('bounce-ball'),
            $('#slideleftDiv').removeClass('slideInLeft'),
            $('#sliderightDiv').removeClass('slideInRight'),
            $('#flipDiv').removeClass('flipOutY')
    }, 4000);
}

function hideContent(){
    setTimeout(function(){
        $('#bounceDiv').hide()
        $('#slideleftDiv').hide()
        $('#sliderightDiv').hide()
        $('#flipDiv').hide()
    },2000);
}

function popAgain() {
    setTimeout(function () {
        $('#slideleftDiv').fadeIn(),
        $('#sliderightDiv').fadeIn()
    }, 6000);
}

$(document).ready(() => {

    $('#modal').fadeIn();

    $('#bounceTitle').click(function () {
        $(this).addClass('bounce');
        reset();
    })

    $('.ball').mouseover(function () {
        $(this).addClass('bounce-ball');
        reset();
    })

    $('#slideleftDiv').click(function () {
        $(this).addClass('slideInLeft');
        reset();
        // popAgain();
    })

    $('#sliderightDiv').click(function () {
        $(this).addClass('slideInRight');
        reset();
        // popAgain();
    })

    $('#flipDiv').click(function () {
        $(this).addClass('flipOutY');
        reset();
    })


    $('#removeCards').click(function(){
        $('#bounceDiv').addClass('zoomOutDown');
        $('#slideleftDiv').addClass('lightSpeedOutLeft');
        $('#sliderightDiv').addClass('lightSpeedOutRight');
        $('#flipDiv').addClass('zoomOutDown');

        hideContent();
    })

    $('#showCards').click(function(){
        $('#bounceDiv').removeClass('zoomOutDown');
        $('#slideleftDiv').removeClass('lightSpeedOutLeft');
        $('#sliderightDiv').removeClass('lightSpeedOutRight');
        $('#flipDiv').removeClass('zoomOutDown');

        $('#bounceDiv').fadeIn() ;  
        $('#slideleftDiv').fadeIn();
        $('#sliderightDiv').fadeIn();
        $('#flipDiv').fadeIn();
    })

    $('.close').click(function() {
        $('.modalDiv').fadeOut();
      })


})