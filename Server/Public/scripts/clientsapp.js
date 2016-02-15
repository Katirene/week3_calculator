
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
    });
        //if bound event is addition, execute postValuesAddition

        ////locks the previously entered numbers as value two
        ///executes function that gets sent as an POST request. routed depending on func button




    $('.clear-button').on('click', function () {
        ////execute function that clears the display.
        $('.display').val('');
        firstValue = [];
        secondValue = [];
        console.log(firstValue, secondValue);

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


