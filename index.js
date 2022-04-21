function VerificaEssential() {
  var seismicity = parseInt(
    document.querySelector('input[name="question-4"]:checked').value
  );
  var fracturing = parseInt(
    document.querySelector('input[name="question-5"]:checked').value
  );
  var areal = parseInt(
    document.querySelector('input[name="question-6"]:checked').value
  );
  var intermed = parseInt(
    document.querySelector('input[name="question-7"]:checked').value
  );
  var soma = seismicity + fracturing + areal + intermed;
  if (soma == 4) {
    alert("So next setp is the calculation the basin ranking");
    window.location.href = "15criterio.html";
  } else {
    if (soma == 3) {
      alert(
        "One of these  essential criteria is not being met, but all the others are, such a basin may still be considered for CO2 storage (base on the eliminatory criteria developed by Valer (2010)) So next setp is the calculation the basin ranking"
      );
    } else {
      alert(
        "More than one of the essential suitability criteria is not being met, then that basin or region should not be considered for CO2 storage (base on the eliminatory criteria developed by Valer (2010))"
      );
    }
  }
  return false;
}
