// Formula for converting Kilgograms
document.getElementById('kgInput').addEventListener("input", function() {
	var kg = document.getElementById("kgInput").value;
	document.getElementById("gramsInput").value = kg * 1000;
	document.getElementById("poundsInput").value = kg * 2.2046226218488;
	document.getElementById("ouncesInput").value = kg * 35.27396194958;
	document.getElementById("stoneInput").value = kg * 0.15747304441777;	
});

// Formula for converting Grams
document.getElementById('gramsInput').addEventListener("input", function() {
	var grams = document.getElementById("gramsInput").value;
	document.getElementById("kgInput").value = grams / 1000;
	document.getElementById("poundsInput").value = grams * 0.0022046226218488;
	document.getElementById("ouncesInput").value = grams * 0.03527396194958;
	document.getElementById("stoneInput").value = grams * 0.00015747304441777;	
});

// Formula for converting Pounds
document.getElementById('poundsInput').addEventListener("input", function() {
	var pounds = document.getElementById("poundsInput").value;
	document.getElementById("kgInput").value = pounds * 0.45359237;
	document.getElementById("gramsInput").value = pounds * 453.59237;
	document.getElementById("ouncesInput").value = pounds * 16;
	document.getElementById("stoneInput").value = pounds / 14;	
});

// Formula for converting Ounces
document.getElementById('ouncesInput').addEventListener("input", function() {
	var ounces = document.getElementById("ouncesInput").value;
	document.getElementById("kgInput").value = ounces * 0.028349523125;
	document.getElementById("gramsInput").value = ounces * 28.349523125;
	document.getElementById("poundsInput").value = ounces * 0.0625;
	document.getElementById("stoneInput").value = ounces * 0.004464285714285714;	
});

// Formula for converting Stone
document.getElementById('stoneInput').addEventListener("input", function() {
	var stone = document.getElementById("stoneInput").value;
	document.getElementById("kgInput").value = stone * 6.350293179999988;
	document.getElementById("gramsInput").value = stone * 6350.29318;
	document.getElementById("poundsInput").value = stone * 14;
	document.getElementById("ouncesInput").value = stone * 224;	
});
