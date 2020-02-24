var text = "";
for(x = 1; x < 32768; x++)
{
    text += x;
}

var para = document.createElement("p");
var node = document.createTextNode(text);
para.appendChild(node);

var element = document.getElementById("content");
element.appendChild(para);