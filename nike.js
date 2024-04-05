/* gsap.to(".imagecontainer" ,{
    ease: Expo.easeInOut,
    width: "100%",
    duration: 2,
    stagger: 2
}) */

var tl = gsap.timeline({
    repeat:-1
});


tl
.to(".imagecontainer" ,{
    ease: Expo.easeInOut,
    width: "100%",
    duration: 2,
    stagger: 2 })