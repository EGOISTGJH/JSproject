/**
 * Created by 54983 on 2017/11/25.
 */
function  getNewContent() {
    var request  = getHTTPObject();
    if(request){
        request.open("GET","example.txt",true);
        request.onreadystatechange = function () {
            if (request.readyState == 4){
                alert("Response Received");
                var para = document.createElement("p");
                var txt = document.createTextNode(request.responseText);
                para.appendChild(txt);
                document.getElementById("new").appendChild(para);
            }
        };
        request.send(null);
    }else {
        alert("Sorry,your browser doesn't support XMLHttpRequest");
    }
    alert("function done");
}
addLoadEvent(getNewContent());