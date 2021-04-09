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

    //SKIPPARE LE IMG CON I TASTI DIREZIONALI DELLA TASTIERA 
    $(document).keydown(function(e){

        if(e.keyCode == 37){          //37 E' IL VALORE PREDEFINITO DEL TASTO DIREZIONALE SINISTRO
            nextPrevSlide('prev');
        }else if (e.keyCode == 39){   //39 E' IL VALORE PREDEFINITO DEL TASTO DIREZIONALE DESTRO
            nextPrevSlide('next');
        }
 
    });

    //FINE DOC READY
});

/******************************************************************************
 * FUNZIONI
 ******************************************************************************/

function nextPrevSlide (direction){                //NEL PARAMETRO SI METTE DIRECTION PER DARE LA DIREZIONE DI SLIDE

    var imgActive = $('.images img.active');
    var circle = $('.nav i.active');







    //TOGLIE LA CLASSE ACTIVE COSI DA POTERSI SPOSTARE TRA LE IMG / PALLINI
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