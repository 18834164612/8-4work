// nav开始
var navlist = document.querySelectorAll(".nav-list li")
var nava = document.querySelectorAll(".nav-list li>a")
var box = document.querySelectorAll(".nav-list .box")
var moreone = document.querySelector(".nav-list .more-1")

for (let i = 0; i < navlist.length; i++) {
    navlist[i].onmouseover = function () {
        nava[i].style.color = "#fff";
        animate(box[i], {
            "height": 70
        }, 300)
    }
    navlist[i].onmouseout = function () {
        nava[i].style.color = "#666";
        animate(box[i], {
            "height": 0
        }, 300)

    }

}
//nav结束
// content开始

window.onscroll = function () {
    var text = document.querySelector(".us-p")
    var st = document.documentElement.scrollTop;

    if (st > 100) {
        animate(text, {
            opacity: 1
        }, 500)
    }
}
// content结束