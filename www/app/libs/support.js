function getItem(name) {
    return window.localStorage.getItem(name);
}

function setItem(name, data) {
    return window.localStorage.setItem(name, data);
}

function whoById(id) {
    switch (id){
        case 'tr9':
            return "Трамвай №9";
        case 'tr8':
            return "Трамвай №8";
        case 'mr73':
            return "Маршрутка №73";
    }
}