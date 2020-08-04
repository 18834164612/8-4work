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
// banner开始
var banner = document.querySelector(".banner")
var banbox = document.querySelector(".banner-box")
var banbtn = document.querySelectorAll(".banner-btns li")
var bannerW = parseInt(getComputedStyle(banner, null).width)
var num = 0

function move() {
    num++;
    if (num > banbtn.length - 1) {
        animate(banbox, {
            "margin-left": -num * bannerW
        }, 500, Tween.Linear, function () {
            banbox.style.marginLeft = 0;
        })
        num = 0;
    } else {

        animate(banbox, {
            "margin-left": -num * bannerW
        }, 500)
    }
    for (i = 0; i < banbtn.length; i++) {
        banbtn[i].style.background = "#fff"
    }
    banbtn[num].style.background = "blue"

}
var t = setInterval(move, 3000)
for (let i = 0; i < banbtn.length; i++) {

    banbtn[i].onclick = function () {
        num = i
        for (var j = 0; j < banbtn.length; j++) {
            banbtn[j].style.background = "#fff"
        }
        banbtn[num].style.background = "blue"
        animate(banbox, {
            "margin-left": -num * bannerW
        }, 500)
    }

}
banner.onmouseover = function () {
    clearInterval(t)
}
banner.onmouseout = function () {
    t = setInterval(move, 3000)
}

//banner结束
// date开始

var flag = true
window.onscroll = function () {
    var st = document.documentElement.scrollTop;
    var date = document.querySelector(".date")

    if (st > date.offsetTop - 400 && flag) {
        flag = false
        $(function () {
            $("#gunone").numberRock({
                lastNumber: 2016,		//终止数字
                duration: 800,
                easing: 'swing',  	//慢快慢
            });
        });
        $(function () {
            $("#guntwo").numberRock({
                lastNumber: 30,		//终止数字
                duration: 800,
                easing: 'swing',  	//慢快慢
            });
        });
        $(function () {
            $("#gunthree").numberRock({
                lastNumber: 15,		//终止数字
                duration: 800,
                easing: 'swing',  	//慢快慢
            });
        });
        $(function () {
            $("#gunfour").numberRock({
                lastNumber: 100,		//终止数字
                duration: 800,
                easing: 'swing',  	//慢快慢
            });
        });

    }
    (function ($) {
        $.fn.numberRock = function (options) {
            var defaults = {
                lastNumber: 100,
                duration: 2000,
                easing: 'swing'  //swing(默认 : 缓冲 : 慢快慢)  linear(匀速的)
            };
            var opts = $.extend({}, defaults, options);

            $(this).animate({
                num: "numberRock",
            }, {
                duration: opts.duration,
                easing: opts.easing,
                complete: function () {
                    console.log("success");
                },
                step: function (a, b) {  //可以检测我们定时器的每一次变化
                    $(this).html(parseInt(b.pos * opts.lastNumber));
                }
            });

        }

    })(jQuery);
}

// date结束
// about开始
var aboutbox = document.querySelector(".about-box")
var aboutmore = document.querySelector(".about-more")

aboutmore.onmouseover = function () {
    animate(aboutbox, {
        width: 683
    }, 1000)
}
aboutmore.onmouseout = function () {
    animate(aboutbox, {
        width: 0
    }, 1000)
}
// about结束
// product开始
var swiperul = document.querySelector(".swiper-list ul")
var left = document.querySelector(".swiper-left")
var right = document.querySelector(".swiper-right")
var num = swiperul.childElementCount;
console.log(num)
swiperul.style.width = num * 328 + "px"


function swipermove() {
    animate(swiperul, {
        marginLeft: -328
    }, 500, Tween.linear, function () {
        swiperul.appendChild(swiperul.firstElementChild)
        swiperul.style.marginLeft = 0
    })
}
left.onclick = function () {
    animate(swiperul, {
        marginLeft: -328
    }, 500, Tween.linear, function () {
        swiperul.appendChild(swiperul.firstElementChild)
        swiperul.style.marginLeft = 0
    })
}
right.onclick = function () {
    swiperul.insertBefore(swiperul.lastElementChild, swiperul.firstElementChild)
    swiperul.style.marginLeft = -328 + "px"
    animate(swiperul, {
        marginLeft: 0
    }, 500, Tween.linear)
}
var t = setInterval(swipermove, 5000)
// product结束
// news开始
var newbtn = document.querySelectorAll(".news-dw li")
console.log(newbtn)
var newsnr = document.querySelectorAll(".news-nr")
var num = 0
setInterval(function () {
    num++
    if (num > newbtn.length - 1) {
        num = 0
    }
    for (var i = 0; i < newbtn.length; i++) {
        newbtn[i].style.background = "#f1f1f1"
        newbtn[i].style.color = "#333"
        newsnr[i].style.display = "none"
    }
    newbtn[num].style.background = "#0054a8"
    newbtn[num].style.color = "#fff"
    newsnr[num].style.display = "block"
}, 5000)

for (let i = 0; i < newbtn.length; i++) {
    newbtn[i].onclick = function () {
        num = i;
        for (var j = 0; j < newbtn.length; j++) {
            newsnr[j].style.display = "none"
            newbtn[j].style.background = "#f1f1f1"
            newbtn[j].style.color = "#333"
        }
        newbtn[num].style.background = "#0054a8"
        newbtn[num].style.color = "#fff"
        newsnr[num].style.display = "block"
    }
}
// news结束