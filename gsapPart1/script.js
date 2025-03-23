//gsap timeline

let tl = gsap.timeline(); //no camel casing


//gsap 
tl.to("#box1",{
    x:1200,
    duration:2,
    delay:1, 
    rotate:360,
    backgroundColor: "plum",//camel casing
    borderRadius: "50%",  //%-spl character so in string
          scale:0.6 ,   // to increase or decrease size    
           repeat:-1,  //no of times to repeat. rotate+repeat:1 = 2 rotates  repeat:-1 infinity times repeat
           yoyo:true    //moves back and forth like a yoyo from starting to ending.
        })
tl.to("#box2",{
    x:500,
    y:500,
    duration:2,
    delay:1
})
tl.from("#box3",{
    x:1200,
    duration:2,
    delay:1
})


// gsap.from("h1",{
//     color:"blue",
//     duration:2,
//     delay:1,
//     opacity:0,
//     y:20, 
//     stagger:1
// })


tl.from("h2",{
    y:-20,
    opacity:0,
    duration:1,
    delay:0.5
})
tl.from("h4",{
    y:-20,
    opacity:0,
    duration:1,
    delay:0.5,
    stagger:0.3

})
tl.from(".heading",{
y:20,
opacity:0,
duration:0.5,
scale:0.2
})




