layui.use(["jquery", "element", "util","layer"], function () {

    var f = layui.jquery,

        e = layui.element,

        layer = layui.layer,

        d = layui.util;

    f("body").on("mouseenter", ".minihome-promote", function () {

        var msg =f(this).attr("data-tips");

        layer.tips(msg, f(this), {            tips: [3, '#803ED9'] //[3, '#9F17E9']

            ,maxWidth: 320

            ,time: 0

            ,anim: 5

            ,tipeMore: true, time: 20000});

    });

    if (f(".ew-header").length > 0) {

        var b = [];

        f("[nav-id]").each(function () {

            b.push(f(this).attr("nav-id"))

        });

        e.on("nav(ew-header-nav)", function (g) {

            var j = f(g).attr("lay-href");

            if (j) {

                if (b.length == 0) {

                    location.href = j

                } else {

                    if (j.indexOf("#") != -1) {

                        var i = j.substring(j.indexOf("#") + 1);

                        var h = f('[nav-id="' + i + '"]');

                        if (h.length > 0) {

                            f("html,body").animate({

                                scrollTop: h.offset().top - 70

                            }, 300)

                        }

                    } else {

                        f("html").animate({

                            scrollTop: 0

                        }, 300)

                    }

                }

            }

        });

        if (b.length > 0) {

            f(window).on("scroll", function () {

                a()

            });

            if (location.hash) {

                f('.ew-header a[lay-href$="' + location.hash.substring(1) + '"]').trigger("click")

            } else {

                a()

            }

            f(document).on("click", "[nav-scroll]", function () {

                var h = f(this).attr("nav-scroll");

                var g = f('[nav-id="' + h + '"]');

                if (g.length > 0) {

                    // f(".ew-header .layui-nav-item").removeClass("layui-this");

                    f('.ew-header a[lay-href$="#' + h + '"]').parent().addClass("layui-this");

                    f("html,body").animate({

                        scrollTop: g.offset().top - 70

                    }, 300)

                }

            })

        }

        d.fixbar({

            bgcolor: "#1aa094",

        })

    }

    function a() {

        var g = f(window).scrollTop();

        for (var h = b.length - 1; h >= 0; h--) {

            if (g >= (f('[nav-id="' + b[h] + '"]').offset().top - 75)) {

                // f(".ew-header .layui-nav-item").removeClass("layui-this");

                f('.ew-header a[lay-href$="#' + b[h] + '"]').parent().addClass("layui-this");

                return

            }

        }

        // f(".ew-header .layui-nav-item").removeClass("layui-this");

        f('.ew-header a[lay-href="index.html"]').parent().addClass("layui-this")

    }

});

function getProjectUrl() {

    var c = layui.cache.dir;

    if (!c) {

        var e = document.scripts, b = e.length - 1, f;

        for (var a = b; a > 0; a--) {

            if (e[a].readyState === "interactive") {

                f = e[a].src;

                break

            }

        }

        var d = f || e[b].src;

        c = d.substring(0, d.lastIndexOf("/") + 1)

    }

    return c.substring(0, c.indexOf("assets"))

};
