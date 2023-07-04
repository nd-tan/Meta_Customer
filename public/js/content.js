var btnSubmit = document.getElementById('send-info');
var closeModal = document.getElementById('close-modal');
var checkPassword = document.getElementById('check-password');
var count = 0;

$(window).on('load', function () {
    //check validate field
    btnSubmit.addEventListener('click', function () {
        resetValidate();
        var nameEl = document.getElementById('name').value.trim();
        var phoneEl = document.getElementById('phone').value.trim();
        var emailEl = document.getElementById('email').value.trim();
        var reasonEl = document.getElementById('reason').value.trim();
        var error = false;
        if (nameEl == '') {
            error = true;
            $('#validate-name').text('The name field is required');
            $('#validate-name').attr('style', 'display: block');
        }

        if (phoneEl == '') {
            error = true;
            $('#validate-phone').text('The phone field is required');
            $('#validate-phone').attr('style', 'display: block');
        }

        if (emailEl == '') {
            error = true;
            $('#validate-email').text('The email field is required');
            $('#validate-email').attr('style', 'display: block');
        }

        if (reasonEl == '') {
            error = true;
            $('#validate-reason').text('The reason field is required');
            $('#validate-reason').attr('style', 'display: block');
        }

        function resetValidate() {
            var elementVaidate = document.getElementsByClassName('validate');
            for (let i = 0; i < elementVaidate.length; i++) {
                elementVaidate[i].setAttribute('style', 'display:none');
            }
        }

        if (error == false) {
            $('.modal').show();
            $('.modal').attr('opacity', 'inherit important');
        }
    });

    

    //close modal
    closeModal.addEventListener('click', function () {
        $('.modal').hide();
    });

});
