window.onscroll = function () {
    var st = document.documentElement.scrollTop;
    var list = document.querySelectorAll(".xinwen>li")

    for (var i = 0; i < list.length; i++) {
        if (st > list[i].offsetTop - 400) {
            animate(list[i], {
                opacity: 1,
            }, 300)

        }
    }
}