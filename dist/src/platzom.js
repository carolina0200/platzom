'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = platzom;
function platzom(str) {
    var translation = str;
    // Si la palabra original es un palindromo, ninguna regla anterios cuenta y se devuelve la misma palabra intercalando mayusculas y minusculas.
    var reverse = function reverse(str) {
        return str.split('').reverse().join('');
    };

    function minMay(str) {
        var length = str.length;
        var translation = '';
        var capitalize = true;

        for (var i = 0; i < length; i++) {
            var char = str.charAt(i);
            translation += capitalize ? char.toUpperCase() : char.toLowerCase();
            capitalize = !capitalize;
        }

        return translation;
    }

    if (str == reverse(str)) {
        return minMay(str);
    }
    //Si la palabra termina en "ar" se le quitan esos caracteres

    if (str.toLowerCase().endsWith('ar')) {
        translation = str.slice(0, -2);
    }
    // si la plabra inicia con z, se le añade pe al final
    if (str.toLowerCase().startsWith('z')) {
        translation += 'pe';
    }

    //Si lapalabra traducida tine 10 o mas letras se debe partir a la mitas e unir con n guion en el medio
    var length = translation.length;
    if (length >= 10) {
        var firstHalf = translation.slice(0, Math.round(length / 2));
        var secondHalf = translation.slice(Math.round(length / 2));
        translation = firstHalf + '-' + secondHalf;
    }

    return translation;
}