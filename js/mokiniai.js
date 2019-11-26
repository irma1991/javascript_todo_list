var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
    if(xhr.readyState === 4){
        var mokiniai = JSON.parse(xhr.responseText);

        let output = '';
        for (var i = 0; i < mokiniai.length; i++) {
            // console.log(mokiniai[i].vardas + ' : ' + mokiniai[i].lokacija);
            if(mokiniai[i].lokacija === true){
                output += '<li>'+mokiniai[i].vardas+'</li>';
            }
        }
        document.getElementById('mokiniai').innerHTML = output;
    }

};

xhr.open('GET', 'duomenys/mokiniai.json');

xhr.send();
