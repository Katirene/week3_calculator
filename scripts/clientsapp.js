$(document).ready(function() {
    console.log("working");
        $('.num-button').on('click', function() {
            var $pressedNumber = $(this).val();
            $('.display').val($pressedNumber);
            //Xappend value of button in display
            //store value of each button. maybe by adding data method
            //data attr could be 1st entry, 1st entry locked.  2nd entry, 2nd entry locked

        });

        $('.func-button').on('click', function() {
            ///locks the first num-buttons clicked as value one.
            ///the func-button is used for routing in the POST request
        });

        $('.equal-button').on('click', function() {
                ////locks the previously entered numbers as value two
                ///executes function that gets sent as an POST request. routed depending on func button


        });

        $('.clear-button').on('click', function() {
            ////execute function that clears the display.
            ('.display').replaceWith('[placeholder]')

        });
});