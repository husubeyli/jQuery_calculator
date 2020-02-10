let hesab = '';
let numero = '';
let operator = '';
let keep = false;

$('.number').on('click', function(){
    numero = this.value
    if(keep){
        return false;
    }
    
        if(!hesab){
            $('#first-number').append(numero);
        } else {
            $('#second-number').append(numero);
        }
})

$('.operator').on('click', function(){
    
    if(keep){
        return false;
    }
    if($('#first-number').html()){
        hesab = this.value;
    } else {
        return false;
    }
    if(hesab == 'plus'){    
        $('#operator').html('+');
    } else if(hesab == 'minus'){
        $('#operator').html('-');
    } else if (hesab == 'times'){
        $('#operator').html('&times;');
    } else if (hesab == 'divide'){
        $('#operator').html('&divide;')
    } else if (hesab == 'power'){
        $('#operator').html('^')
    } else if (hesab == 'equals'){
        $('#operator').html('=')
    } 
})

$('#button-equal').on('click', function(){
    let result = '';
    if(keep){
        return false;
    }
    if(hesab == 'plus'){
        result = parseInt($('#first-number').html()) + parseInt($('#second-number').html())
        $('#result').html(result)
    } else if(hesab == 'minus'){
        result = parseInt($('#first-number').html()) - parseInt($('#second-number').html())
        $('#result').html(result)
    } else if(hesab == 'times'){
        result = parseInt($('#first-number').html()) * parseInt($('#second-number').html())
        $('#result').html(result)
    } else if(hesab == 'divide'){
        result = parseInt($('#first-number').html()) / parseInt($('#second-number').html())
        $('#result').html(result)
    } else if(hesab == 'power'){
        result = Math.pow(parseInt($('#first-number').html()), parseInt($('#second-number').html()))
        $('#result').html(result)
    }
    keep = true;
})
$('#button-clear').on('click', function(){
    keep = false;
    hesab = '';
    $('#first-number, #second-number, #result, #operator').empty();
})
