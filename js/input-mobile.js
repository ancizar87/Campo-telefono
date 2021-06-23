document.getElementById("basic-addon1").style.display='none';

function countrySelected() {
    var x = document.getElementById("paises").value;
    document.getElementById("basic-addon1").style.display='block';
    document.getElementById("basic-addon1").innerHTML = x;
  }