function main() {
    
    function base(text, mode) {

        if (mode == 'encrypt') {

            return btoa(text);

        } else if (mode == 'decrypt') {

            return atob(text);
        };

    }; 

    
    function cifraDeCesar(text, incrementar, mode) {

        var numIncremento = parseInt(incrementar);

        if (mode == 'encrypt') {

            var FraseCod = [];

            for (var i = 0; i < text.length; i++) {
                var caracters = text[i].charCodeAt();
                var inserir = String.fromCharCode(caracters + numIncremento);

                FraseCod.push(inserir);
            };

            FraseCod = FraseCod.toString().replace(/,/g, '');

            return FraseCod;

        } else if (mode == 'decrypt') {

            var FraseCod = [];


            for (var i = 0; i < text.length; i++) {
                var caracters = text[i].charCodeAt();
                var inserirDecod = String.fromCharCode(caracters- numIncremento);

                FraseCod.push(inserirDecod);
                console.log(caracters)
            };

            FraseCod = FraseCod.toString().replace(/,/g, '');
            
            return FraseCod;

        };

    };


    var form = document.querySelector('#form');
    var opcoes = document.querySelector('#opcoes');
    var IncreCifra = document.querySelector('#IncreCifra');
    var incremento = document.querySelector('#incremento');
    var submit = document.querySelector('#submit');
    var text = document.querySelector('#textCod');
    var Codific = document.querySelector('#Codific');
    var Descodific = document.querySelector('#Descodific');

    opcoes.addEventListener('click', function () {

        if (opcoes.value == 'base') {
            incremento.style.visibility = 'hidden';

        } else if (opcoes.value == 'cifra') {
            incremento.style.visibility = 'visible';
        };
    });


    Codific.addEventListener('click', function () {
        submit.innerText = 'Codificar';
    });


    Descodific.addEventListener('click', function () {
        submit.innerText = 'Descodificar';
    });


    submit.addEventListener('click', function (event) {
        event.preventDefault();

        if (submit.innerText == 'Codificar') {

            if (text.value == '') {

                text.placeholder = 'Digite um valor';

            } else {

                var  textCod = document.querySelector('#textCod');

                if (form.opcoes.value == 'cifra') {

                    textCod.value = cifraDeCesar(text.value, IncreCifra.value, 'encrypt');

                } else if (form.opcoes.value == 'base') {

                    textCod.value = base(text.value, 'encrypt');
                };
            };

        } else if (submit.innerText == 'Descodificar') {

            if (text.value == '') {

                text.placeholder = 'Digite um valor';
 
            } else {

                var textCod = document.querySelector('#textCod');

                if (form.opcoes.value == 'cifra') {

                    textCod.value = cesar(text.value, IncreCifra.value, 'decrypt');

                } else if (form.opcoes.value == 'base') {

                    textCod.value = base(text.value, 'decrypt');
                };
            };
        };
    });
};

main();



