// consulta el precio teniendo en cuenta la distancia y la estadia
function consultarPrecio() {
    // variables a utilizar
    const valorKm = 35;
    var total = 0;
    var distancia = document.getElementById('distancia').value;
    var dias = document.getElementById('dias').value;
    document.open();
    const dcto = parseFloat(0.3);

    //   condicion si menor de 1000km y 7 dias
    if (distancia < 1000 && dias < 7) {
        total = (distancia * valorKm);
        document.write('<div class="col-md-12">' +
            '<p>$' + total + '</p>' +
            '</div>'

        );

    } else {
        // encaso de mayor a 1000KM y mas de 7 dias se aplica descuento
        total = (distancia * valorKm) - ((distancia * valorKm * dcto));
        document.write('<div><p>$' + total + '</p></div>');
    }
    document.close();
}