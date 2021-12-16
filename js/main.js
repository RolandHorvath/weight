
function converter() {
    if (document.getElementById('gradio').checked) {
        g();
        character();
    } else if (document.getElementById('kgradio').checked) {
        kg();
        character();
    } else if (document.getElementById('ozradio').checked) {
        oz();
        character();
    } else if (document.getElementById('lbsradio').checked) {
        lbs();
        character();
    } else if (document.getElementById('dkgradio').checked) {
        dkg();
        character();
    } else if (document.getElementById('tradio').checked) {
        t();
        character();
    }
}


function g() {
    document.getElementById("result").style.visibility = "visible";

    let grams = document.getElementById("in").value;

    document.getElementById("h2kg").innerHTML = grams * 0.001 + "<sub>kg</sub>";

    document.getElementById("h2oz").innerHTML = grams * 0.035274 + "<sub>oz</sub>";

    document.getElementById("h2lbs").innerHTML = grams * 0.00220462 + "<sub>lbs</sub>";

    document.getElementById("h2dkg").innerHTML = grams * 0.1 + "<sub>dkg</sub>";

    document.getElementById("h2t").innerHTML = grams * 0.000001 + "<sub>t</sub>";

    document.getElementById("h2g").innerHTML = grams * 1 + "<sub>g</sub>";

}


function kg() {
    document.getElementById("result").style.visibility = "visible";
    let kilograms = document.getElementById("in").value;
    document.getElementById("h2g").innerHTML = kilograms * 1000 + "<sub>g</sub>";

    document.getElementById("h2oz").innerHTML = kilograms * 35.274 + "<sub>oz</sub>";

    document.getElementById("h2lbs").innerHTML = kilograms * 2.20462 + "<sub>lbs</sub>";

    document.getElementById("h2dkg").innerHTML = kilograms * 0.01 + "<sub>dkg</sub>";

    document.getElementById("h2t").innerHTML = kilograms * 0.001 + "<sub>t</sub>";

    document.getElementById("h2kg").innerHTML = kilograms * 1 + "<sub>kg</sub>";

}


function oz() {
    document.getElementById("result").style.visibility = "visible";
    let ounces = document.getElementById("in").value;
    document.getElementById("h2g").innerHTML = ounces * 28.3495 + "<sub>g</sub>";

    document.getElementById("h2kg").innerHTML = ounces * 0.0283495 + "<sub>kg</sub>";

    document.getElementById("h2lbs").innerHTML = ounces * 0.0625 + "<sub>lbs</sub>";

    document.getElementById("h2dkg").innerHTML = ounces * 2.8349523125 + "<sub>dkg</sub>";

    document.getElementById("h2t").innerHTML = ounces * 0.000028349523125 + "<sub>t</sub>";

    document.getElementById("h2oz").innerHTML = ounces * 1 + "<sub>oz</sub>";

}


function lbs() {
    document.getElementById("result").style.visibility = "visible";
    let pounds = document.getElementById("in").value;
    document.getElementById("h2g").innerHTML = pounds / 0.0022046 + "<sub>g</sub>";

    document.getElementById("h2kg").innerHTML = pounds / 2.2046 + "<sub>kg</sub>";

    document.getElementById("h2oz").innerHTML = pounds * 60 + "<sub>oz</sub>";

    document.getElementById("h2dkg").innerHTML = pounds * 45.359237 + "<sub>dkg</sub>";

    document.getElementById("h2t").innerHTML = pounds * 0.000045359237 + "<sub>t</sub>";

    document.getElementById("h2lbs").innerHTML = pounds * 1 + "<sub>lbs</sub>";
}

function dkg() {
    document.getElementById("result").style.visibility = "visible";
    let dkg = document.getElementById("in").value;
    document.getElementById("h2g").innerHTML = dkg * 10 + "<sub>g</sub>";

    document.getElementById("h2kg").innerHTML = dkg * 0.1 + "<sub>kg</sub>";

    document.getElementById("h2oz").innerHTML = dkg * 0.35274 + "<sub>oz</sub>";

    document.getElementById("h2lbs").innerHTML = dkg * 0.0220462262 + "<sub>lbs</sub>";

    document.getElementById("h2t").innerHTML = dkg * 0.00001 + "<sub>t</sub>";

    document.getElementById("h2dkg").innerHTML = dkg * 1 + "<sub>dkg</sub>";
}

function t() {
    document.getElementById("result").style.visibility = "visible";
    let t = document.getElementById("in").value;
    document.getElementById("h2g").innerHTML = t * 1000000 + "<sub>g</sub>";

    document.getElementById("h2kg").innerHTML = t * 1000 + "<sub>kg</sub>";

    document.getElementById("h2oz").innerHTML = t * 35273.94 + "<sub>oz</sub>";

    document.getElementById("h2lbs").innerHTML = t * 2205 + "<sub>lbs</sub>";

    document.getElementById("h2dkg").innerHTML = t * 100000 + "<sub>dkg</sub>";

    document.getElementById("h2t").innerHTML = t * 1 + "<sub>t</sub>";
}

number = 0;
var animations = ['img/weight.gif',
    'img/weight.gif',
    'img/weight.gif'
];


function character() {
    image = document.getElementById('gif');
    image.src = animations[number];
}
