var texttemp = "Temperature: " + temp + " Humidity: " + hum;
var text = "";
text += "Some text about the project...";


var para = document.createElement("h1");
var nodetemp = document.createTextNode(texttemp);
para.appendChild(nodetemp);
var linebreak = document.createElement("br");
para.appendChild(linebreak);

var node = document.createTextNode(text);
para.appendChild(node);

var element = document.getElementById("content");
//element.innerHTML = para.innerHTML;
element.appendChild(para);