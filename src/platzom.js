export default function platzom(str){
    let translation = str;
    // Si la palabra original es un palindromo, ninguna regla anterios cuenta y se devuelve la misma palabra intercalando mayusculas y minusculas.
const reverse = (str) => str.split('').reverse().join('')

function minMay(str){
    const length = str.length;
    let translation = '';
    let capitalize = true;

    for (let i = 0; i < length; i++){
        const char = str.charAt(i);
        translation+= capitalize ? char.toUpperCase() : char.toLowerCase();
        capitalize = !capitalize;
    }

    return translation; 
}

if(str == reverse(str)){
    return minMay(str);
} 
    //Si la palabra termina en "ar" se le quitan esos caracteres
    
    if(str.toLowerCase().endsWith('ar')){
        translation = str.slice(0, -2);
    }
    // si la plabra inicia con z, se le añade p al final
if(str.toLowerCase().startsWith('z')){
    translation += 'pe';
}


//Si la palabra traducida tine 10 o mas letras se debe partir a la mitad e unir con un guion en el medio
const length = translation.length;
if(length >= 10){
    let firstHalf = translation.slice(0, Math.round(length/2));
    let secondHalf = translation.slice(Math.round(length/2));
    translation = `${firstHalf}-${secondHalf}`
}

   
return translation;

}

