$(document).ready(function(){

    var nextBtn = $('.next');
    var prevBtn = $('.prev');

    //NAVIGARE TRA LE IMG
    nextBtn.click(function(){
        nextPrevSlide('next');
    });

    prevBtn.click(function(){
        nextPrevSlide('prev');
    });


    //FINE DOC READY
});

/******************************************************************************
 * FUNZIONI
 ******************************************************************************/

function nextPrevSlide (direction){                //NEL PARAMETRO SI METTE DIRECTION PER DARE LA DIREZIONE DI SLIDE

    var imgActive = $('.images img.active');
    var circle = $('.nav i.active');

    //TOGLIE LA CLASSE ACTIVE COSI DA POTERSI SPOSTARE TRA LE IMG
    imgActive.removeClass('active');
    circle.removeClass('active');

    //AGGIUNGE LA CLASSE ACTIVE ALLE ALTRE IMG MENTRE SCENDE NEL DOM
    if(direction === 'next'){

        //QUANDO ARRIVA ALLA CLASSE LAST TORNA SU ALLA PRIMA
        if(imgActive.hasClass('last')){
            $('.images img.first').addClass('active');
            $('.nav i.first').addClass('active');
        }else{
            imgActive.next('img').addClass('active');
            circle.next('i').addClass('active');
        }
    }

    //PREV
    else if(direction === 'prev'){
        if(imgActive.hasClass('first')){
            $('.images img.last').addClass('active');
            $('.nav i.last').addClass('active');
        }else{
            imgActive.prev('img').addClass('active');
            circle.prev('i').addClass('active');
        }
    }
}