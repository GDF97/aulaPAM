    
const btn = document.getElementById('btn');

btn.addEventListener('click', function(){
    var Valor1 = document.getElementById('V1').value;
    var Valor2 = document.getElementById('V2').value;
    var Valor3 = document.getElementById('V3').value;
    var Valor4 = ((Valor2*Valor3)/Valor1);
    
    var Resultado = document.getElementById('Res');
    Resultado.innerText += " = " + Valor4;
})