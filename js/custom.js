// instancia jquery e evita conflitos
// jQuery( function($){
$(document).ready(function () {

   /* $('.owl-carousel').owlCarousel();

    let titulos = $('h4') // tag

    let itens = $('.featured-item') // class

    let destaques = $('#featured') // id

    console.log(titulos.first());

    // Configuração de produtos

    $('.featured-item a').addClass('btn btn-dark stretch-link');

    // $('.featured-item:first h4').append('<span class="badge bg-secondary">Novo</span>')
    // $('.featured-item:first h4').start('<span class="badge bg-secondary">Novo</span>')
    // $('.featured-item:first h4').html('<span class="badge bg-secondary">Novo</span>')
    // $('.featured-item:first h4').addClass('active')
    // $('.featured-item:first h4').removeClass('active')
    // $('.featured-item:first h4').toggleClass('active')
    // $('.featured-item:first h4').hide()
    // $('.featured-item:first h4').show()
    // $('.featured-item:first h4').fadeIn(2000)
    // $('.featured-item:first h4').fadeOut()
    //  $('.featured-item:first h4').css('color', '#f00')

    $('.featured-item h4').dblclick(function () {

        $(this).css({
            'color': '#f00',
            'background': '#ff0',
            'font-weight': '100',
        });

    });

    /*
     * Manipulação de eventos
     */
    /*$('.featured-item a').on('blur', function (event) {

        event.preventDefault();

        alert('Produto esgotado');

    })*/




    /*
     *Ouvinte de eventos .nav-modal-open
    */

     $('.nav-modal-open').on('click', function(e){

        e.preventDefault();

        let elem = $(this).attr('rel')

        $('.modal-body').html($('#'+elem).html())

        $('.modal-header h5.modal-title').html($(this).text())

        let myModal = new bootstrap.Modal($('#modalId'))

        myModal.show()

     })


     /*
        * Validação de Formulário
     */

     function validate(elem){
        if(elem.val() == ''){
            console.log('O campo de '+ elem.attr('name') +' é obrigatório')
            elem.parent().find('.text-muted').show()
            elem.addClass('invalid')

            return false
        } else {
            elem.parent().find('.text-muted').hide()
            elem.removeClass('invalid')
        }
     }

     $('body').on('submit', '.modal-body .form', function(e){
        e.preventDefault()

        const inputName = $('#nome')
        const inputEmail = $('#email')

        validate(inputName)
        validate(inputEmail)

        
        if(inputEmail.hasClass('invalid') || inputName.hasClass('invalid')){
            console.log('Verifique os campos obrigatrios')
            return false
        } else {
            $(this).submit()
        }
     })

     $('body').on('blur', '#nome', function (){
        validate($(this))
     })
     $('body').on('blur', '#email', function (){
        validate($(this))
     })
     $('body').on('blur', '#date', function (){
        $(this).datepicker()
        validate($(this))
        $(this).mask('00/00/0000')
     })
     $('body').on('blur', '#hour', function (){
        validate($(this))
        $(this).mask('00:00')
     })
     $('body').on('keyup', '#cep', function (){
        validate($(this))
        $(this).mask('00000-000')
     })
     $('body').on('keyup', '#phone', function (){
        validate($(this))
        $(this).mask('(00) 00000-0000');
     })
     $('body').on('keyup', '#cpf', function (){
        validate($(this))
        $(this).mask('000.000.000-00')
     })


     

})




/* ********************** */

/*btn top */

const scrollTop = document.getElementById('scrolltop')

window.onload = () => {
    scrollTop.style.visibility = 'hidden';
    scrollTop.style.opacity = 0;
}
window.onscroll = () => {
    if (window.scrollY > 200)
    {
        scrollTop.style.visibility = 'visible';
        scrollTop.style.opacity = 1;
    } else {
        scrollTop.style.visibility = 'hidden';
        scrollTop.style.opacity = 0;
    }
};

function menuB () {
    var menu = document.getElementById("menu-active");
    if (menu.classList.contains('no_active')) {
        menu.classList.remove("no_active");
    } else {
        menu.classList.add("no_active");
    }

    var headerCem = document.getElementById("hg_300");
    if (headerCem.classList.contains('hgc')) {
        headerCem.classList.remove("hgc");
        } else {
        headerCem.classList.add("hgc");
    }
}
//     }
//     // menu.classList.add("active");
//     menu.classList.remove("no_active");
// }


