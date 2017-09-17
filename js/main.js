document.getElementById('kgInput').addEventListener("input", function() {
	var kg = document.getElementById("kgInput").value;
	document.getElementById("gramsInput").value = kg * 1000;
	document.getElementById("poundsInput").value = kg * 2.2046226218488;
	document.getElementById("ouncesInput").value = kg * 35.27396194958;
});