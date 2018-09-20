$(document).ready(function(){
    $('.Accordion-Title').on('click', function () {
        $(this).parent().toggleClass('Accordion-Item_open');
    });
});