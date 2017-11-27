/**
 * Created by 54983 on 2017/11/25.
 */
function  insertAfter(newElement,targetElement){//在目标元素后面插入新元素
    var parent = targetElement.parentNode;
    if(parent.lastChild == targetElement){
        parent.appendChild(newElement);
    }else {
        parent.insertBefore(newElement,targetElement.nextSibling);
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