var pages=[
"clocks/mathclock/index.html",
"clocks/partyclock/index.html",
"clocks/barcodeclock/index.html",
"clocks/textclock/index.html",
"clocks/treeclock/index.html"];

var len = pages.length;
var random_num = Math.floor(Math.random() * len);

var iframe = document.createElement("iframe");
iframe.setAttribute("src", pages[random_num]);
iframe.setAttribute("name", "testiframe");

window.onload=function()
{
	var div = document.getElementById("iframe_div");
	div.appendChild(iframe);

};
