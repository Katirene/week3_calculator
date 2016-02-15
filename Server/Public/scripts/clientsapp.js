var url = '';
var mathProblem = '';
var displayedNumber = '';

$(document).ready(function() {
    console.log("working");

    $('.num-button').on('click', function() {
        displayedNumber += $(this).val();
        $('.display').val(displayedNumber);

        if (mathProblem !== '' || $(this).val() !=='0') {
            mathProblem += $(this).val();
        }
        console.log($(this).val());
        console.log(mathProblem);
    });


    $('.func-button').on('click', function () {
        displayedNumber += $(this).val();
        $('.display').val(displayedNumber);
        mathProblem += $(this).val();
    });

    $('.equal-button').on('click', postValues)

    $('.clear-button').on('click', function () {
        $('.display').val('');
        mathProblem = '';
        displayedNumber = '';

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


