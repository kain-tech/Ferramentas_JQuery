//Manipulando elementos

$('h1').text('Novo texto');
$('#jquery').html('<h3>Novo texto<h3>');
$('.infoSecret').val('*********');
$('h1').css('color', 'blue')

//Plugin Mask JQ
$(document).ready(function () {
    $('.date').mask('00/00/0000');
    $('.time').mask('00:00:00');
    $('.date_time').mask('00/00/0000 00:00:00');
    $('.cep').mask('00000-000');
    $('.phone').mask('0000-0000');
    $('.phone_with_ddd').mask('(00) 0000-0000');
    $('.phone_us').mask('(000) 000-0000');
    $('.mixed').mask('AAA 000-S0S');
    $('.cpf').mask('000.000.000-00', { reverse: true });
    $('.cnpj').mask('00.000.000/0000-00', { reverse: true });
    $('.money').mask('000.000.000.000.000,00', { reverse: true });
    $('.money2').mask("#.##0,00", { reverse: true });
    $('.ip_address').mask('0ZZ.0ZZ.0ZZ.0ZZ', {
        translation: {
            'Z': {
                pattern: /[0-9]/, optional: true
            }
        }
    });
    $('.ip_address').mask('099.099.099.099');
    $('.percent').mask('##0,00%', { reverse: true });
    $('.clear-if-not-match').mask("00/00/0000", { clearIfNotMatch: true });
    $('.placeholder').mask("00/00/0000", { placeholder: "__/__/____" });
    $('.fallback').mask("00r00r0000", {
        translation: {
            'r': {
                pattern: /[\/]/,
                fallback: '/'
            },
            placeholder: "__/__/____"
        }
    });
    $('.selectonfocus').mask("00/00/0000", { selectOnFocus: true });
});

//funcção de soma em JS e JQ

document.getElementById('id do botao').addEventListener('click', function () {
    let v1 = document.getElementById('id do primeiro input').value;
    let v2 = document.getElementById('id do segundo input').value;
    soma = parseInt(v1) + parseInt(v2);
    let res = document.getElementById('id do input que mostra o resultado').value = soma;
});

$('#Id do botao').click(function () {
    let v1 = parseInt($('#id do primeiro input').val());
    let v2 = parseInt($('#id do segundo input').val());
    soma = v1 + v2;
    $('#id q exibe o resultado').val(soma);
});

// JQuery no head do documento html

<script src="https://code.jquery.com/jquery-3.7.1.js" integrity="sha256-eKhayi8LEQwp4NKxN+CfCh+3qOVUtJn3QNZ0TciWLP4="
        crossorigin="anonymous"></script>

// rodar uma funcao JQuery no head do documento html

<script>
   $(document).ready(rodar);
   function rodar(){
       $('#paragrafo').text('CBF Curso');
   }
 </script>

//função de evento com o mouse no JQ

$('#bloco').mouseenter(function () {
    $('#paragrafo').text('O mouse entrou no bloco');
})

$('#bloco').click(function () {
    $('#paragrafo').text('O bloco foi clickado');
})

$('#bloco').mouseleave(function () {
    $('#paragrafo').text('O mouse saiu do bloco');
})

$('#bloco').mousemove(function () {
    $('#paragrafo').text('O mouse esta se movendo no bloco');
})

//função de evento com o teclado no JQ

$('#nome').keyup(function () {
    $('#texto').text($('#nome').val());
})

//função de evento duplo no mesmo componente

$('#nome').on('keyup click', function () {
    $('#texto').text($('#nome').val());
    $('#texto2').text('input clickado')
})

$('#bloco').on({
    click: () => {
        $('#texto').text('Quadrado clickado');
    },

    mouseenter: () => {
        $('#texto').text('O mouse entrou no quadrado');
    },

    mouseleave: () => {
        $('#texto').text('O mouse saiu do quadrado');
    },

    dblclick: () => {
        $('#texto').text('Duble click no quadrado');
    }
})

//função de herança em JQ

$('#bloco1').click(() => {
    $('#bloco').trigger('click')
})

$('#bloco1').mouseenter(() => {
    $('#bloco').trigger('mouseenter');
})

$('#bloco1').mouseleave(() => {
    $('#bloco').trigger('mouseleave');
})

$('#bloco1').click(() => {
    $('#bloco').trigger('click');
})

$('#bloco1').dblclick(() => {
    $('#bloco').trigger('dblclick');
})

//methodo event

$(document).mousemove((event) => {
    $('#texto').text('Posição X: ' + event.pageX + 'px, Posição Y: ' + event.pageY + 'px');
})

$(document).click((event) => {
    $('#resultado').text('X: ' + event.pageX + ' Y: ' event.pageY);
})

$(document).on({
    click: () => {
        $('#resultado').text(event.type + ':' + event.which)
    },

    keydown: () => {
        $('#resultado').text(event.type + ':' + event.which)
        if (event.which == 13) {
            alert('A tecla ENTER foi clickada')
        }
    }
})
//methodo target

$(document).click((event) => {
    $('#resultado').text('O objeto clicado foi: ' + event.target.id);
    if (event.target.id == "resultado") {
        alert('O resultado foi clickado')
    }
})

$(document).click((event) => {
    $('#resultado').text('O objeto clicado foi: ' + event.target.tagName);
})

//evento de stop progation

$('div').click(() => { alert('Evento disparado na div!') })
$('p').click(() => { event.stopPropagation(); alert('Evento disparado no p!') })
$('span').click(() => { event.stopPropagation(); alert('Evento disparado no span!') })

//methodo parent

$('p').parent().css({ 'border': '1px solid red' })
$('li').parent().css({ 'border': '1px solid blue' })
$('ul').parent().css({ 'border': '1px solid green' })
$('div').parent().css({ 'border': '1px solid yelow' })
$('body').parent().css({ 'border': '1px solid black' })

$('p').parents().css({ 'border': '1px solid red' })

$('p').parentsUntil('div').css({ 'border': '1px solid red' })

//methodo children e find

$('ul').children().css({ 'border': '1px solid red' })

$('ul').children('div').css({ 'border': '1px solid red' })

$('div').find('ul').css({ 'border': '1px solid red' })

$('div').find('ul:first').css({ 'border': '1px solid red' })

$('div').find('ul:last').css({ 'border': '1px solid red' })

$('div').find('*').css({ 'border': '1px solid red' })

//methodo siblings

$('h3').siblings('p').css({ 'border': '1px solid red' })

//methodo next

$('h3').next().css({ 'border': '1px solid red' })

$('h3').nextAll().css({ 'border': '1px solid red' })

$('h3').nextUntil('h2').css({ 'border': '1px solid red' })

//methodo prev

$('h2').prevUntil('h3').css({ 'border': '1px solid red' })

$('h2').prevAll().css({ 'border': '1px solid red' })

$('h2').prev().css({ 'border': '1px solid red' })

//methodo first

$('p').first().css({ 'border': '1px solid red', 'background-color': 'blue' })

//methodo last

$('p').last().css({ 'border': '1px solid red', 'background-color': 'yellow' })

//methodo filter

$('p').filter('.borda').css({ 'color': 'red' })

//methodo not

$('p').not('.borda').css({ 'color': 'white' })