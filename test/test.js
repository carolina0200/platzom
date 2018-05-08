const expect = require('chai').expect
const platzom = require('..').default

describe('#platzom', function(){
    it('Si la palabra termina en "ar" se le quitan esos caracteres', function(){
        const translation = platzom("Programar")
        expect(translation).to.equal("Program")
    })
    it('si la plabra inicia con z, se le añade pe al final', function(){
        const translation = platzom("Zorro")
        const translation1 = platzom("Zarpar")

        expect(translation).to.equal("Zorrope")
        expect(translation1).to.equal("Zarppe")
    })
    it('Si la palabra traducida tine 10 o mas letras se debe partir a la mitad e unir con un guion en el medio', function(){
        const translation = platzom("Abecedario")

        expect(translation).to.equal("Abece-dario")
    })
    it('Si la palabra original es un palindromo, ninguna regla anterios cuenta y se devuelve la misma palabra intercalando mayusculas y minusculas.', function(){
        const translation = platzom("sometemos")

        expect(translation).to.equal("SoMeTeMoS")
    })
    
})