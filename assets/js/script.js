$(document).ready(function() {
}), $(document).ready(function() {
    if ($("body#homePage").length) {
        var t = $(".typed");
        $(function() {
            t.typed({
                strings: ["Hi!", "Nice to meet you."],
                typeSpeed: 100,
                loop: !1,
                callback: function() {
                    $(".typed-cursor").hide()
                }
            })
        }),  AOS.refresh()
    }
    $("body#contactMe").length && ($("#submit").attr("disabled", !0), $("#submit").css("opacity", "0.5"), $(".form-control").keyup(function() {
        0 != $("#name").val().length && 0 != $("#emailInput").val().length && 0 != $("#messageInput").val().length ? ($("#submit").attr("disabled", !1), $("#submit").css("opacity", "1")) : ($("#submit").attr("disabled", !0), $("#submit").css("opacity", "0.5"))
    }), $("#gform").on("submit", function(t) {
        $("#gform *").fadeOut(2e3), $("#gform").prepend("Thank you! Your message has been sent successfully!")
    }))
}),
function(t) {
    "use strict";
    var s = function(s, e) {
        this.el = t(s), this.options = t.extend({}, t.fn.typed.defaults, e), this.isInput = this.el.is("input"), this.attr = this.options.attr, this.showCursor = !this.isInput && this.options.showCursor, this.elContent = this.attr ? this.el.attr(this.attr) : this.el.text(), this.contentType = this.options.contentType, this.typeSpeed = this.options.typeSpeed, this.startDelay = this.options.startDelay, this.backSpeed = this.options.backSpeed, this.backDelay = this.options.backDelay, this.stringsElement = this.options.stringsElement, this.strings = this.options.strings, this.strPos = 0, this.arrayPos = 0, this.stopNum = 0, this.loop = this.options.loop, this.loopCount = this.options.loopCount, this.curLoop = 0, this.stop = !1, this.cursorChar = this.options.cursorChar, this.shuffle = this.options.shuffle, this.sequence = [], this.build()
    };
    s.prototype = {
        constructor: s,
        init: function() {
            var t = this;
            t.timeout = setTimeout(function() {
                for (var s = 0; s < t.strings.length; ++s) t.sequence[s] = s;
                t.shuffle && (t.sequence = t.shuffleArray(t.sequence)), t.typewrite(t.strings[t.sequence[t.arrayPos]], t.strPos)
            }, t.startDelay)
        },
        build: function() {
            var s = this;
            if (!0 === this.showCursor && (this.cursor = t('<span class="typed-cursor">' + this.cursorChar + "</span>"), this.el.after(this.cursor)), this.stringsElement) {
                this.strings = [], this.stringsElement.hide(), console.log(this.stringsElement.children());
                var e = this.stringsElement.children();
                t.each(e, function(e, o) {
                    s.strings.push(t(o).html())
                })
            }
            this.init()
        },
        typewrite: function(t, s) {
            if (!0 !== this.stop) {
                var e = Math.round(70 * Math.random()) + this.typeSpeed,
                    o = this;
                o.timeout = setTimeout(function() {
                    var e = 0,
                        i = t.substr(s);
                    if ("^" === i.charAt(0)) {
                        var n = 1;
                        /^\^\d+/.test(i) && (i = /\d+/.exec(i)[0], n += i.length, e = parseInt(i)), t = t.substring(0, s) + t.substring(s + n)
                    }
                    if ("html" === o.contentType) {
                        var r = t.substr(s).charAt(0);
                        if ("<" === r || "&" === r) {
                            var a = "",
                                h = "";
                            for (h = "<" === r ? ">" : ";"; t.substr(s + 1).charAt(0) !== h && (a += t.substr(s).charAt(0), !(++s + 1 > t.length)););
                            s++, a += h
                        }
                    }
                    o.timeout = setTimeout(function() {
                        if (s === t.length) {
                            if (o.options.onStringTyped(o.arrayPos), o.arrayPos === o.strings.length - 1 && (o.options.callback(), o.curLoop++, !1 === o.loop || o.curLoop === o.loopCount)) return;
                            o.timeout = setTimeout(function() {
                                o.backspace(t, s)
                            }, o.backDelay)
                        } else {
                            0 === s && o.options.preStringTyped(o.arrayPos);
                            var e = t.substr(0, s + 1);
                            o.attr ? o.el.attr(o.attr, e) : o.isInput ? o.el.val(e) : "html" === o.contentType ? o.el.html(e) : o.el.text(e), s++, o.typewrite(t, s)
                        }
                    }, e)
                }, e)
            }
        },
        backspace: function(t, s) {
            if (!0 !== this.stop) {
                var e = Math.round(70 * Math.random()) + this.backSpeed,
                    o = this;
                o.timeout = setTimeout(function() {
                    if ("html" === o.contentType && ">" === t.substr(s).charAt(0)) {
                        for (var e = "";
                            "<" !== t.substr(s - 1).charAt(0) && (e -= t.substr(s).charAt(0), !(--s < 0)););
                        s--, e += "<"
                    }
                    var i = t.substr(0, s);
                    o.attr ? o.el.attr(o.attr, i) : o.isInput ? o.el.val(i) : "html" === o.contentType ? o.el.html(i) : o.el.text(i), s > o.stopNum ? (s--, o.backspace(t, s)) : s <= o.stopNum && (o.arrayPos++, o.arrayPos === o.strings.length ? (o.arrayPos = 0, o.shuffle && (o.sequence = o.shuffleArray(o.sequence)), o.init()) : o.typewrite(o.strings[o.sequence[o.arrayPos]], s))
                }, e)
            }
        },
        shuffleArray: function(t) {
            var s, e, o = t.length;
            if (o)
                for (; --o;) e = Math.floor(Math.random() * (o + 1)), s = t[e], t[e] = t[o], t[o] = s;
            return t
        },
        reset: function() {
            var t = this;
            clearInterval(t.timeout);
            this.el.attr("id");
            this.el.empty(), void 0 !== this.cursor && this.cursor.remove(), this.strPos = 0, this.arrayPos = 0, this.curLoop = 0, this.options.resetCallback()
        }
    }, t.fn.typed = function(e) {
        return this.each(function() {
            var o = t(this),
                i = o.data("typed"),
                n = "object" == typeof e && e;
            i && i.reset(), o.data("typed", i = new s(this, n)), "string" == typeof e && i[e]()
        })
    }, t.fn.typed.defaults = {
        strings: ["These are the default values...", "You know what you should do?", "Use your own!", "Have a great day!"],
        stringsElement: null,
        typeSpeed: 0,
        startDelay: 0,
        backSpeed: 0,
        shuffle: !1,
        backDelay: 500,
        loop: !1,
        loopCount: !1,
        showCursor: !0,
        cursorChar: "|",
        attr: null,
        contentType: "html",
        callback: function() {},
        preStringTyped: function() {},
        onStringTyped: function() {},
        resetCallback: function() {}
    }
}(window.jQuery);

const bodymovinDiv = document.querySelector('.bodymovin');
let animationRunning = true;

const animData = {
container: bodymovinDiv,
renderer: 'svg',
loop: false,
autoplay: false,
path: 'https://assets1.lottiefiles.com/packages/lf20_Ll67ri.json'
};

const anim = lottie.loadAnimation(animData);
anim.setSpeed(2.6);
anim.loop = false;
anim.setDirection(1);
anim.playSegments([0, 8], true);
anim.addEventListener('complete', startLoop);

function startLoop() {
anim.loop = true;
anim.removeEventListener('complete', startLoop)
anim.playSegments([9, 13], true);
}