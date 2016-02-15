var url = '';
var mathProblem = '';

$(document).ready(function() {
    console.log("working");

    $('.num-button').on('click', function() {
        var $pressedNumber = $(this).val();
        $('.display').val($pressedNumber);

        if (mathProblem !== '' || $(this).val() !=='0') {
            mathProblem += $(this).val();
        }
        console.log($(this).val());
        console.log(mathProblem);
    });


    $('.func-button').on('click', function () {
        mathProblem += $(this).val();
    });

    $('.equal-button').on('click', postValues)

    $('.clear-button').on('click', function () {
      mathProblem = '';
    });

    function appendResult(result) {
      $('.display').val(result);
    }


    function postValues() {
        event.preventDefault();

        $.ajax({
        type: 'POST',
        url: '/calc',
        data: {expression: mathProblem},
        success: function (data) {
            console.log(data.result);
             appendResult(data.result);

            }
        //error: function() {

        //}
        });
    }

});


