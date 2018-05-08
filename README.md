# Platzom

Platzom es un idioma inventado para el [curso de fundamentos de JavaScript](https://platzi.com/js)  de Platzi

## Descripción del idioma
 - Si la palabra original es un palindromo, ninguna regla anterios cuenta y se devuelve la misma palabra intercalando mayusculas y minusculas.
 - Si la palabra termina en "ar" se le quitan esos caracteres.
 - si la plabra inicia con z, se le añade p al final.
 - Si la palabra traducida tine 10 o mas letras se debe partir a la mitas e unir con n guion en el medio.

 ## Instalación 
```
 npm install platzom
```

## Uso

```
import platzom from 'platzom'

platzom("Programar") // Program 
platzom("zorro"); // zorrope
platzom("zarpar"); // zarppe
platzom("abecedario"); //abece-dario
platzom("sometemos"); //SoMeTeMoS
``` 

## Créditos 
- Carolina Giraldo


##Lincencia

[MIT](https://opensource.org/licenses/MIT)
