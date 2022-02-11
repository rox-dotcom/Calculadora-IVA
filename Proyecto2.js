var iva = 0.16;
var preciofinal;

function calcularIVA (precio) {
    var ivapoducto = precio * iva;
    console.log("El IVA del producto es $",(ivapoducto))
    preciofinal= precio - ivapoducto; 
}

