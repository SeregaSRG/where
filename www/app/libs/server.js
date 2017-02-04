function sendRegistration() {
    $('#loading').show();
    $.ajax({
        type: "GET",
        url: "http://transport-core.microfox.ru/api/user.register",
        dataType: "json",
        data: {
            'name': 	$('#registration_name').val(),
            'surname': 	$('#registration_surname').val(),
            'phone': 	$('#registration_phone').val(),
            'password': $('#registration_password').val(),
            'email': 	$('#registration_email').val()
        },
        success: function(response) {
            $('#loading').hide();
            if (response.status == "done") {
                openLogin();
                alertDone(response.data.code);
            } else {
                alertError(response.errorcode);
            }
        },
        error: function(request, status, err) {
            $('#loading').hide();
            myalert("Не получен ответ от сервера");
        }
    });
}

function sendLogin() {
    $('#loading').show();
    $.ajax({
        type: "GET",
        url: "http://transport-core.microfox.ru/api/user.login",
        dataType: "json",
        data: {
            'phone': 	$('#log_phone').val(),
            'password': $('#log_password').val()
        },
        success: function(response) {
            $('#loading').hide();
            if (response.status == "done") {
                setItem("token", response.data.token);
                checkLogin();
            } else {
                alertError(response.errorcode);
            }
        },
        error: function(request, status, err) {
            $('#loading').hide();
            myalert("Не получен ответ от сервера");
        }
    });
}

function checkLogin() {
    if (getItem("token") != 'null' || null) {
        $('#loading').show();
        $.ajax({
            type: "GET",
            url: "http://transport-core.microfox.ru/api/user.checkLogin",
            dataType: "json",
            data: {
                'token': getItem("token")
            },
            success: function(response) {
                $('#loading').hide();
                if (response.status == "done") {
                    openMain();
                    applySettings();
                    $("#userName").html(response.data.name)
                    alertDone(response.data.code);
                } else {
                    openLogin();
                    setItem("token", null);
                    $("#userName").html("**Название**");
                    alertError(response.errorcode);
                }
            },
            error: function(request, status, err) {
                $('#loading').hide();
                myalert("Не получен ответ от сервера");
            }
        });
    } else {
        openLogin();
    }
}