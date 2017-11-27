/**
 * Created by 54983 on 2017/11/25.
 */
window.onload = function () {
    var testdiv = document.getElementById("testdiv");
    // testdiv.innerHTML = "<p> I inserted <em>this</em> content</p>";
    var para = document.createElement("p");
    var emphasis = document.createElement("em");
    var txt1 = document.createTextNode("I inserted ");
    var txt2 = document.createTextNode("this ");
    var txt3 = document.createTextNode("content");
    para.appendChild(txt1);
    emphasis.appendChild(txt2);
    para.appendChild(emphasis);
    para.appendChild(txt3);
    testdiv.appendChild(para);
}