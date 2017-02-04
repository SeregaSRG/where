function Settings() {
    this.transType = null;
    this.transNumber = null;
    this.isBackground = false;
}

function applySettings() {
    if (getItem('isMr')=='true'){   switchOnMr();  } else {    switchOffMr();   }
    if (getItem('isTr')=='true'){   switchOnTr();  } else {    switchOffTr();   }
    if (getItem('isAv')=='true'){   switchOnAv();  } else {    switchOffAv();   }
}

/* Управление блоком выбора типа транспорта */
function openTypeSelect() {
    if (settings.isBackground === true) {
        myalert("Отслеживание уже запущено");
    } else {
        $('#transport-card').show();
    }
}

function closeTypeSelect() {
    $('#transport-card').hide();
}

function selectType() {
    closeTypeSelect();
    if (settings.isBackground === true) {
        myalert("Отслеживание уже запущено");
    } else {
        settings.transType = $('input[type=radio][name=category]:checked').val().substring(0,2);
        settings.transNumber = $('input[type=radio][name=category]:checked').val().substring(2);
        if ((settings.transType != undefined || null) && (settings.transNumber != undefined || null)) {
            $('#transportType').val(whoById(settings.transType+settings.transNumber));
            $('#who_label').addClass('is-dirty');
        } else {
            myalert("Выберите транспорт");
        }
    }
}
/* !Управление блоком выбора типа транспорта */

/* Управление фильтрами*/
function mrToggle() {
    if (getItem('isMr')=='true'){
        setItem('isMr','false');
        switchOffMr();
    } else {
        setItem('isMr','true');
        switchOnMr();
    }
}

function trToggle() {
    if (getItem('isTr')=='true'){
        setItem('isTr','false');
        switchOffTr();
    } else {
        setItem('isTr','true');
        switchOnTr();
    }
}

function avToggle() {
    if (getItem('isAv')=='true'){
        setItem('isAv','false');
        switchOffAv();
    } else {
        setItem('isAv','true');
        switchOnAv();
    }
}
/* !Управление фильтрами*/