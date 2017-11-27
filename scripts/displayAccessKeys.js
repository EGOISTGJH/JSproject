/**
 * Created by 54983 on 2017/11/26.
 */
function displayAccessKeys() {
    if (!document.getElementsByTagName) return false;
    if (!document.createElement) return false;
    if (!document.createTextNode) return false;
    //取得文档中所有的链接
    var links = document.getElementsByTagName("a");
    //创建一个数组保存访问键
    var akeys = new Array();
    //遍历链接
    for (var i = 0; i < links.length; i++){
        var current_link = links[i];
        //如果没有accesskey的值，开始下一个循环
        if (!current_link.getAttribute("accesskey")) continue;
        //取得accesskey的值
        var key = current_link.getAttribute("accesskey");
        //取得链接文本
        var text = current_link.lastChild.nodeValue;
        //添加到数组
        akeys[key] = text;
    }
    //创建列表
    var list = document.createElement("ul");
    //遍历访问键
    for (key in akeys){
        var text = akeys[key];
        //创建放到列表项中的字符串
        var str = key + ":" + text;
        //创建列表项
        var item = document.createElement("li");
        var item_text = document.createTextNode(str);
        item.appendChild(item_text);
        list.appendChild(item);
    }
    //创建标题
    var header = document.createElement("h3");
    var header_text = document.createTextNode("AccessKeys");
    header.appendChild(header_text);
    document.body.appendChild(header);
    document.body.appendChild(list);
}
addLoadEvent(displayAccessKeys());
