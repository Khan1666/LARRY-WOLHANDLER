// gsap.to(" #a",{
//     scale:0.2,
//     // delay:1,
//     scrollTrigger:{
//         trigger:"#a",
//         scroller:"body",
//         start: "top 80%",
//         end: "top 60%",
//         // markers:true,
//         scrub:true
//     }
// })

// gsap.to(" #b",{
//     scale:0.2,
//     // delay:1,
//     scrollTrigger:{
//         trigger:"#b",
//         scroller:"body",
//         start: "top 20%",
//         end: "bottom top",
//         // markers:true,
//         scrub:true
//     }
// })

// gsap.to(" #c",{
//     scale:0.2,
//     // delay:1,
//     scrollTrigger:{
//         trigger:"#c",
//         scroller:"body",
//         start: "top 25%",
//         end: "bottom top",
//         // markers:true,
//         scrub:true
//     }
// })
// gsap.to(" #e",{
//     scale:0.5,
//     // delay:1,
//     scrollTrigger:{
//         trigger:"#e",
//         scroller:"body",
//         start: "top top%",
//         end: "bottom top",
//         // markers:true,
//         scrub:true
//     }
// })

// gsap.to(" #f",{
//     scale:0.2,
//     // delay:1,
//     scrollTrigger:{
//         trigger:"#f",
//         scroller:"body",
//         start: "top 80%",
//         end: "top 60%",
//         // markers:true,
//         scrub:true
//     }
// })

// gsap.to(" #g",{
//     scale:0.2,
//     // delay:1,
//     scrollTrigger:{
//         trigger:"#g",
//         scroller:"body",
//         start: "top 20%",
//         end: "bottom top",
//         // markers:true,
//         scrub:true
//     }
// })

// gsap.to(" #h",{
//     scale:0.2,
//     // delay:1,
//     scrollTrigger:{
//         trigger:"#h",
//         scroller:"body",
//         start: "top 25%",
//         end: "bottom top",
//         // markers:true,
//         scrub:true
//     }
// })
// gsap.to(" #j",{
//     scale:0.3,
//     // delay:1,
//     scrollTrigger:{
//         trigger:"#j",
//         scroller:"body",
//         start: "top top%",
//         end: "bottom top",
//         // markers:true,
//         scrub:true
//     }
// })

// gsap.to("#nav a",{
//     color:"white",
//     scrollTrigger:{
//         trigger:"#nav a",
//         scroller:"#page2",
//         start:"top top",
//         end:"bottom top",
//         scrub:true,
//         markers:true
//     }
// })


let text1 = document.querySelector(".text1");
let text2 = document.querySelector(".text2");
let text3 = document.querySelector(".text3");
let text4 = document.querySelector(".text4");
let text5 = document.querySelector(".text5");
let text6 = document.querySelector(".text6");

let im2 = document.querySelector(".im2");
// let im3 = document.querySelector(".im3");
// let im4 = document.querySelector(".im4");
// let im5 = document.querySelector(".im5");
// let im6 = document.querySelector(".im6");
// let im7 = document.querySelector(".im7");

im2.addEventListener('mouseenter',function (params) {
    text1.style.bottom = "10%"
})
im2.addEventListener('mouseleave',function (params) {
    text1.style.bottom = "-12%"
})
let im3 = document.querySelector(".im3");
im3.addEventListener('mouseenter',function (params) {
    text2.style.bottom = "10%"
})
im3.addEventListener('mouseleave',function (params) {
    text2.style.bottom = "-12%"
})
let im4 = document.querySelector(".im4");
im4.addEventListener('mouseenter',function (params) {
    text3.style.bottom = "10%"
})
im4.addEventListener('mouseleave',function (params) {
    text3.style.bottom = "-12%"
})
let im5 = document.querySelector(".im5");
im5.addEventListener('mouseenter',function (params) {
    text4.style.bottom = "10%"
})
im5.addEventListener('mouseleave',function (params) {
    text4.style.bottom = "-12%"
})
let im6 = document.querySelector(".im6");

im6.addEventListener('mouseenter',function (params) {
    text5.style.bottom = "10%"
})
im6.addEventListener('mouseleave',function (params) {
    text5.style.bottom = "-12%"
})
let im7 = document.querySelector(".im7");

im7.addEventListener('mouseenter',function (params) {
    text6.style.bottom = "10%"
})
im7.addEventListener('mouseleave',function (params) {
    text6.style.bottom = "-12%"
})

var silider = document.querySelector("#img3");
var next = document.querySelector(".next");
var previous = document.querySelector(".previous");
// console.log(silider);

next.addEventListener("click",function name(params) {
   
    // alert();
})




gsap.to("#nav",{
    scrollTrigger:{
        trigger:`#page2`,
        start:`top top`,
        scrub:.1,
        // markers:true,
    },
    backgroundColor:`#fff`
})