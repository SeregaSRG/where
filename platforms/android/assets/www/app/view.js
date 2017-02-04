function alertDone(code) {
    switch (code){
        case '100':
            myalert("Тикет создан успешно");
            break;
        case '200':
            myalert("Вы успешно зарегистрированы");
            break;
        case '300':
            myalert("Вход выполнен успешно");
            break;
        case '500':
            myalert("Вы успешно откликнулись");
            break;
        default:
            myalert("Неверный код: "+code);
    }
}

function alertError(code) {
    switch (code){
        case "101":
            myalert("Вы уже создали тикет");
            break;
        case "110":
            myalert("Ошибка добавленя в БД");
            break;
        case "201":
            myalert("Номер телефона занят");
            break;
        case "202":
            myalert("Номер не найден");
            break;
        case "203":
            myalert("Неверный пароль");
            break;
        case "400":
            myalert("Ошибка подключения к БД");
            break;
        case "-1":
            myalert("Неверный токен");
            break;
        case "-2":
            myalert("Ошибка SQL");
            break;
        default:
            myalert("Неверный код ошибки"+code);
    }
}

function openMain() {
    $("#log-menu").hide();
    $("#reg-menu").hide();
    $("#main-menu").show();
}

function openRegistration() {
    $("#reg-menu").show();
    $("#log-menu").hide();
    $("#main-menu").hide();
}

function openLogin() {
    $("#log-menu").show();
    $("#reg-menu").hide();
    $("#main-menu").hide();
}

function openFriends() {
    $("#friends-subcard").show();
    $("#friends-tab").addClass('active');
    $("#transport-subcard").hide();
    $("#transport-tab").removeClass('active');
}

function openTransport() {
    $("#friends-subcard").hide();
    $("#friends-tab").removeClass('active');
    $("#transport-subcard").show();
    $("#transport-tab").addClass('active');
}

function myalert(text) {
    var notification = document.querySelector('.mdl-js-snackbar');
    notification.MaterialSnackbar.showSnackbar({
        message: text
    });
}

function switchOnMr() {
    $('#mr_control').css({
        'color':'#009688',
        'border':'1px solid #009688'
    });
}

function switchOffMr() {
    $('#mr_control').css({
        'color':'darkgray',
        'border':'1px dotted darkgray'
    });
}

function switchOnTr() {
    $('#tr_control').css({
        'color':'#009688',
        'border':'1px solid #009688'
    });
}

function switchOffTr() {
    $('#tr_control').css({
        'color':'darkgray',
        'border':'1px dotted darkgray'
    });
}

function switchOnAv() {
    $('#av_control').css({
        'color':'#009688',
        'border':'1px solid #009688'
    });
}

function switchOffAv() {
    $('#av_control').css({
        'color':'darkgray',
        'border':'1px dotted darkgray'
    });
}