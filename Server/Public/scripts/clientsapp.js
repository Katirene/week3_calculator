
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
        mathProblem += $(this).val();
        console.log(mathProblem);
    });

    $('.equal-button').on('click', function() {
        if(mathProblem.includes('+')) {
            console.log("plus found.");
        }
        else if(mathProblem.includes('-')) {
            console.log("minus found.");
        }
        else if(mathProblem.includes('x')) {
            console.log("multiply found.");
        }
        else if(mathProblem.includes('/')) {
            console.log("divide found.");
        }
    });


    $('.clear-button').on('click', function () {
      mathProblem = '';
    });

    function appendResult() {

    }


    function postValues() {
        event.preventDefault();
        var mergedfirstValue = {};
        //var mergedsecondValue = {};
        mergedfirstValue = (firstValue.join(''));
        //mergedsecondValue = (secondValue.join(''));
        console.log('inside function:', mergedfirstValue);
        //console.log('inside function:', mergedsecondValue);

            $.ajax({
            type: 'POST',
            url: '/addition',
            data: {firstvalue: mergedfirstValue},
            success: function (data) {
                console.log('made the return trip with addition')
                console.log(data);
                //need append DOM function

                }
            });
    }

});


