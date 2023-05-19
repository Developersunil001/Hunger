// first page

var tl = gsap.timeline();

tl.from("#loader>h1", {
  y:50,
  opacity: 0,
  duration: 1.2,


})
tl.to("#loader", {
  y: "-100%",
  duration: 0.5,
})

// second page

gsap.from("#leftpage", {
    y: 1000,
    delay:1,
    duration:2

})

gsap.from("#rightpage", {
    y: -1000,
    delay:1,
    duration:2,

})
$('#leftpage h1').textillate({ initialDelay: 500, in: { effect: 'fadeInUp', delayScale: 1, delay: 40 } });

// third page

var tl = gsap.timeline();

tl.from("#one", {
    x: -1000,
    duration: 10,
    repeat: -1,
})


// fourth page

const elems = document.querySelectorAll(".elems");
const imageDiv = document.querySelector("#image")

elems.forEach(function (elem) {

    elem.addEventListener("mouseenter", function () {
        let img = elem.getAttribute("data-image");
        let w = elem.getAttribute("data-width");
        let h = elem.getAttribute("data-height");
        imageDiv.style.backgroundImage = `url(${img})`
        imageDiv.style.width = w;
        imageDiv.style.height = h;

    })


    document.addEventListener("mousemove", function (dets) {
        console.log(dets.x);
        imageDiv.style.left = `${dets.x - 200}px`
        imageDiv.style.top = `${dets.y - 150}px`

    })
})


var circle = document.querySelector("#circle");
var firstword = document.querySelector(".h");
var secondword = document.querySelector(".v");
const lerp = (x, y, a) => x * (1 - a) + y * a;



window.addEventListener("mousemove", function (dets) {

    gsap.to(circle, {
        x: dets.clientX,
        y: dets.clientY,
        duration: .3,
        ease: Expo,
    })

})


// mousemove feature

firstword.addEventListener("mousemove", function (dets) {
    var dims = firstword.getBoundingClientRect();
    var xstat = dims.x;
    var xend = dims.x + dims.width;
    var zeroone = gsap.utils.mapRange(xstat, xend, 0, 1, dets.clientX, dets.clientY);

    gsap.to(circle, {
        scale: 4,
    })

    gsap.to(".h", {
        color: "#FFCC00",
        duration: .5,
    })

    gsap.to(".h", {
        x: lerp(-50, 50, zeroone),
        duration: .4,

    })

})
secondword.addEventListener("mousemove", function (dets) {
    var dims = secondword.getBoundingClientRect();
    var xstat = dims.x;
    var xend = dims.x + dims.width;
    var zeroone = gsap.utils.mapRange(xstat, xend, 0, 1, dets.clientX, dets.clientY);

    gsap.to(".v", {
        x: lerp(-50, 50, zeroone),
        duration: .4,

    })

    gsap.to(".v", {
        color: "#FFCC00",
        duration: .3,
    })

    gsap.to(circle, {
        scale: 4,

    })
})

//mouseleave feature

firstword.addEventListener("mouseleave", function (detsnav) {
    gsap.to(circle, {
        scale: 1,

    })
    gsap.to(".h", {
        color: "white",
        duration: .5,
    })
    gsap.to(".h", {
        x: 0,
        duration: .4,

    })
})

secondword.addEventListener("mouseleave", function (detsnav) {
    gsap.to(circle, {
        scale: 1,

    })
    gsap.to(".h", {
        x: 0,
        duration: .4,

    })
    gsap.to(".v", {
        color: "white",
        duration: .3,
    })
})

