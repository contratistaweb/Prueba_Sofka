// Funcion capacidad de carga de un Boing 747


function bultos() {

    document.open();

    document.write(
        '<table class="table mx-auto my-auto col-md-6">' +
        '<thead>' +
        '<tr>' +
        '<th>#</th>' +
        '<th>Peso</th>' +
        '<th>Tarifa</th>' +
        '</tr>' +
        '</thead>' +
        '<tbody>'
    );

    for (var i = 0; i <= 5; i++) {
        var x = parseInt(Math.random() * (500 - 0));
        var y = 0;
        var z = x * y;
        document.write(
            '<tr>' +
            '<th>' + [i] + '</th>' +
            '<td class="peso">' + x + '</td>'

        );
        if (x <= 25) {
            y = 0;
            z = x * y;
            document.write(
                '<td class="tarifa">' + z + '</td>' +
                '</tr>'
            );
        } else if (x >= 26 && x <= 300) {
            y = 1500;
            z = x * y;
            document.write(
                '<td class="tarifa">' + z + '</td>' +
                '</tr>'
            );
        } else if (x >= 301 && x <= 500) {
            y = 2500;
            z = x * y;
            document.write(
                '<td class="tarifa">' + z + '</td>' +
                '</tr>'
            );
        } else {
            alert('El peso maximo del bulto debe ser 500Kg')
        }

    }

    document.write(
        '</tbody>' +
        '</table>' +
        '<div class="alert alert-info col-md-12">' +
        '<p>Bultos en Total: ' + [i - 1] + '</p>'
    );
    var tarifa = document.querySelectorAll('.tarifa');
    var peso = document.querySelectorAll('.peso');
    var suma = 0;
    var promedioPeso = 0;
    var sumaPeso = 0;
    var xmax = 0;
    var xmin = 0;
    for (var w = 0; w < tarifa.length; w++) {
        suma = suma + parseInt(tarifa[w].textContent);
        xmax = Math.max(peso[0].textContent, peso[w].textContent);
        xmin = Math.min(peso[0].textContent, peso[w].textContent);
        sumaPeso = sumaPeso + parseInt(peso[w].textContent);
    }
    promedioPeso = sumaPeso / w;
    var dolar = parseInt(suma / 3300);
    document.write(
        '<p>Bulto más pesado: ' + xmax + '</p>' +
        '<p>Bulto más liviano: ' + xmin + '</p>' +
        '<p>Peso promedio de los bultos: ' + parseInt(promedioPeso) + '</p>' +
        '<p>El total de ingresos por carga en COP es: $ ' + suma + ' y en USD fue: $ ' + parseInt(dolar) + '</p>' +
        '</div>'
    );
    document.close();

}





//kelly.gomez@sofka.com.co