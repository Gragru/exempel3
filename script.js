


var text = "Temperature: " + temp + " Humidity: " + hum;

text += "Lorem ipsum dolor sit amet, faucibus vestibulum. Exercitationem dolor quis, porttitor nisl purus nam pellentesque maecenas, ut nibh fusce. Vehicula vehicula ipsum quis iaculis, ut sed wisi orci donec, accusantium in accumsan lacinia commodo non. A mattis, nunc interdum amet felis sodales eget a, in et a mollis pulvinar, nunc molestie erat, quis et orci magna faucibus eu aenean. Purus imperdiet ligula maecenas sit, viverra amet urna, lobortis suspendisse sed, vulputate lectus nascetur. Amet diam morbi in imperdiet non. Congue blandit placerat cursus, massa suspendisse vitae lacus turpis ut proin. Phasellus phasellus praesent eu pede enim risus. Sed vitae morbi, lectus pretium sapien ut adipiscing nec, in elementum, amet platea metus congue, natoque justo inceptos sed varius fermentum. Euismod aliquam tincidunt sit, velit sociosqu in, mattis augue ultricies commodo. Vestibulum sem suspendisse blandit quisque lectus. Id ridiculus montes ex iaculis at.";
for(x = 1; x < 32768; x++)
{
    text += x + " ";
}
 
var para = document.createElement("h1");
var node = document.createTextNode(text);
para.appendChild(node);

var element = document.getElementById("content");
element.appendChild(para);