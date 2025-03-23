gsap.from("#page1 .head",{
    // scale:0,
    // delay:1,
    // duration:2,
    // rotate:360

    transform:"translateX(-150%)",
    scrollTrigger:{
        trigger:"#page1",  //if pin is there, then trigger = parent (#page1)
        scroller:"body",
        markers:true,
        start:"top 0%",
        end:"top -150%",
        scrub:2,
        pin:true

    }

})


gsap.from("#page2 #box",{
    scale:0,
    delay:1,
    duration:2,
    rotate:720,
    opacity:0,

    //scrolltrigger
    scrollTrigger:{
        trigger:"#page2 #box",
        scroller:"body",
        markers:true,
        start: "top 60%",
        end:"top 30%",
        scrub:2,
        pin:true
    }
})


// gsap.from("#page3 #box",{
//     scale:0,
//     delay:1,
//     duration:2,
//     rotate:360
// })
gsap.from("#page3 h1",{
    opacity:0,
    x:500,
    duration:2,
    scrollTrigger:{
        trigger:"#page2 h1",
        scroller:"body",
        markers:true,
        start: "top 50%"
    }
})

gsap.from("#page3 h2",{
    opacity:0,
    x:-500,
    duration:2,
    scrollTrigger:{
        trigger:"#page2 h2",
        scroller:"body",
        markers:true,
        start: "top 50%"
    }
})