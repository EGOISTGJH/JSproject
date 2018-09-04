/**
 * Created by 54983 on 2017/11/25.
 */
function showPic(whichpic) {
    //对象检测
    if (!document.getElementById("placeholder")) return false;
    var source = whichpic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    if (placeholder.nodeName != "IMG") return false;
    placeholder.setAttribute("src", source);
//对象检测
    if (document.getElementById("description")) {
        if (whichpic.getAttribute("title")) {
            var title = whichpic.getAttribute("title");
        } else {
            title = " ";
        }
        var description = document.getElementById("description");
        if (description.firstChild.nodeType == 3) {
            description.childNodes[0].nodeValue = title;//description.firstChild.nodeValue = title.
        }
    }
    return true;
}
function countBodyChildren() {
    var body_element = document.getElementsByTagName("body")[0];
    alert(body_element.childNodes.length);
    for(var i = 0; i< 10;i++){
        alert(body_element.childNodes[i].nodeType);
    }
}
// window.onload = countBodyChildren();
// window.onload  = preparelink();
function popUp(winURL) {
    window.open(winURL, "popup", "width = 320,height = 480");
}
function preparelink() {
    if (!document.getElementsByTagName) return false;//浏览器对JS支持程度的检测：对象检测。
    var links = document.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
        if (links[i].getAttribute("title") == 1) {
            links[i].onclick = function () {
                popUp(this.getAttribute("href"));
                return false;
            }
        }
    }
}
// window.onload = preparegallery();
function preparegallery() {
    //浏览器对象检测
    if (!document.getElementsByTagName) {
        return false;
    }
    if (!document.getElementById) {
        return false;
    }
    if (!document.getElementById("imageGallery")) {
        return false;
    }
    var gallery = document.getElementById("imageGallery");
    var links = gallery.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
        links[i].onclick = function () {
            return !showPic(this);//showPic(this)如果返回false，说明图片切换没有成功，则不取消onclick的默认行为（弹出新窗口）；
            // 返回true，则说明图片切换成功，则取消弹窗。
        }
    }
}
//在网页加载完毕时加载多个事件处理函数
function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function () {
            oldonload();
            func();
        }
    }
}

function  prepareplaceholder() {
    //对象检测
    if(!document.createElement) return false;
    if(!document.createTextNode) return false;
    if(!document.getElementById) return false;
    if(!document.getElementById("imageGallery")) return false;
    // var body = document.getElementsByTagName("body");
    var img = document.createElement("img");
    img.setAttribute("id","placeholder");
    img.setAttribute("src","images/4.jpg");
    img.setAttribute("alt","my image gallery");
    var para = document.createElement("p");
    para.setAttribute("id","description");
    var txt1 = document.createTextNode("Choose an image");
     para.appendChild(txt1);
    // body[0].appendChild(img);
    // body[0].appendChild(para);
    var gallery = document.getElementById("imageGallery");
    // body[0].insertBefore(para,gallery);//body[0] = gallery.parentNode
    // body[0].insertBefore(img,gallery);

    insertAfter(img,gallery);// gallery.parentNode.insertAfter(img,gallery);错误，自己构造的函数
    insertAfter(para,gallery);
}

function  insertAfter(newElement,targetElement){//在目标元素后面插入新元素
    var parent = targetElement.parentNode;
    if(parent.lastChild == targetElement){
        parent.appendChild(newElement);
    }else {
        parent.insertBefore(newElement,targetElement.nextSibling);
    }
}
addLoadEvent(preparegallery);
addLoadEvent(prepareplaceholder());
addLoadEvent(countBodyChildren());
