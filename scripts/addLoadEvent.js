/**
 * Created by 54983 on 2017/11/26.
 */
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