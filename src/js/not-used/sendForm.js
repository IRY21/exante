function sendForm(form) {
    var reachgoal = form.dataset.reachgoal;

    var formData = new FormData(form);

    var formBtn = form.querySelector('.Btn');
    formBtn.classList.add('Btn_disabled');
    formBtn.disabled = true;

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/ok.php");
    xhr.send(formData);
    xhr.onreadystatechange = function() { // (3)
        if (xhr.readyState != 4) return;

        if (xhr.status != 200) {
            alert(xhr.status + ': ' + xhr.statusText);
        } else {
            //yaCounter33093903.reachGoal(reachgoal);
            parent.$.fancybox.close();
            jQuery.fancybox( jQuery('.ImThanks').html(xhr.responseText) );

            formBtn.classList.remove('Btn_disabled');
            formBtn.disabled = false;
        }

    };
    return false;
}