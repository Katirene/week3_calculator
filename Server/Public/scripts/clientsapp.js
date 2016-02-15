var url = '';
var mathProblem = '';

$(document).ready(function() {
    console.log("working");

    $('.num-button').on('click', function() {
        if (mathProblem !== '' || $(this).val() !=='0') {
            mathProblem += $(this).val();
        }
        console.log($(this).val());
        console.log(mathProblem);
    });

        var $pressedNumber = $(this).val();
        $('.display').val($pressedNumber);


    $('.func-button').on('click', function () {
        if(mathProblem.includes('+', '-', 'x', '/')) {
            $('.func-button').prop('disabled', true);
        }
        else {
            mathProblem += $(this).val();
            console.log(mathProblem);
        }
    });

    $('.equal-button').on('click', postValues)

    $('.clear-button').on('click', function () {
      mathProblem = '';
    });

    function appendResult() {

    }


    function postValues() {
        event.preventDefault();
        if(mathProblem.includes('+')) {
            url = '/addition';
            mathProblem = encodeURIComponent(mathProblem);
        }
        else if(mathProblem.includes('-')) {
            url = '/subtraction';
            mathProblem = encodeURIComponent(mathProblem);
        }
        else if(mathProblem.includes('x')) {
            url = '/multiplication';
            mathProblem = encodeURIComponent(mathProblem);
        }
        else if(mathProblem.includes('/')) {
            url = '/division';
            mathProblem = encodeURIComponent(mathProblem);
        }

        $.ajax({
        type: 'POST',
        url: url,
        data: mathProblem,
        success: function (data) {
            console.log('made the return trip with addition')
            console.log(data);
            //need append DOM function

            }
        });
    }

});


