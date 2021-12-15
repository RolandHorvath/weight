//document.getElementById("result").style.visibility = "hidden";

function converter() {
    if (document.getElementById('gradio').checked) {
        g();
    } else if (document.getElementById('kgradio').checked) {
        kg();
    } else if (document.getElementById('ozradio').checked) {
        oz();
    } else if (document.getElementById('lbsradio').checked) {
        lbs();
    }
}


function g() {
    document.getElementById("result").style.visibility = "visible";

    let grams = document.getElementById("in").value;

    document.getElementById("h2kg").innerHTML = grams * 0.001 + "<sub>kg</sub>";

    document.getElementById("h2oz").innerHTML = grams * 0.035274 + "<sub>oz</sub>";

    document.getElementById("h2lbs").innerHTML = grams * 0.00220462 + "<sub>lbs</sub>";

}


function kg() {
    document.getElementById("result").style.visibility = "visible";
    let kilograms = document.getElementById("in").value;
    document.getElementById("h2g").innerHTML = kilograms * 1000 + "<sub>g</sub>";

    document.getElementById("h2oz").innerHTML = kilograms * 35.274 + "<sub>oz</sub>";

    document.getElementById("h2lbs").innerHTML = kilograms * 2.20462 + "<sub>lbs</sub>";

}


function oz() {
    document.getElementById("result").style.visibility = "visible";
    let ounces = document.getElementById("in").value;
    document.getElementById("h2g").innerHTML = ounces * 28.3495 + "<sub>g</sub>";

    document.getElementById("h2kg").innerHTML = ounces * 0.0283495 + "<sub>kg</sub>";

    document.getElementById("h2lbs").innerHTML = ounces * 0.0625 + "<sub>lbs</sub>";

}


function lbs() {
    document.getElementById("result").style.visibility = "visible";
    let pounds = document.getElementById("in").value;
    document.getElementById("h2g").innerHTML = pounds / 0.0022046 + "<sub>g</sub>";

    document.getElementById("h2kg").innerHTML = pounds / 2.2046 + "<sub>kg</sub>";

    document.getElementById("h2oz").innerHTML = pounds * 60 + "<sub>oz</sub>";


}