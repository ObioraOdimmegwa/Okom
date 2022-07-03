//Products animation
const card = document.getElementById("cardxx");
const container = document.getElementById("containerxx");
const image = document.getElementById("cardImage")

container.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) /25;
    let yAxis = (window.innerHeight / 2 - e.pageY) /25 ;
    
   //card.style.transform = `rotateY(${yAxis}deg) rotateX(${xAxis}deg)`;
})

//animate in
container.addEventListener('mouseenter', e => {
    card.style.transition = 'none';

    //popout
    image.style.transform = " rotateZ(40deg)";
})

//animate out
container.addEventListener('mouseleave', e => {
    card.style.transition = 'all 0.5s ease';
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;

    //popin
    image.style.transform = " rotateZ(0deg)";
})

//Products animation2
const card2 = document.getElementById("cardxx2");
const container2 = document.getElementById("containerxx2");
const image2 = document.getElementById("cardImage2")

//animate in
container2.addEventListener('mouseenter', e => {
    card2.style.transition = 'none';

    //popout
    image2.style.transform = " rotateZ(40deg)";
})

//animate out
container2.addEventListener('mouseleave', e => {
    card2.style.transition = 'all 0.5s ease';
    card2.style.transform = `rotateY(0deg) rotateX(0deg)`;

    //popin
    image2.style.transform = " rotateZ(0deg)";
})

//Products3 animation
const card3 = document.getElementById("cardxx3");
const container3 = document.getElementById("containerxx3");
const image3 = document.getElementById("cardImage3")


//animate in
container3.addEventListener('mouseenter', e => {
    card3.style.transition = 'none';

    //popout
    image3.style.transform = " rotateZ(40deg)";
})

//animate out
container3.addEventListener('mouseleave', e => {
    card3.style.transition = 'all 0.5s ease';
    card3.style.transform = `rotateY(0deg) rotateX(0deg)`;

    //popin
    image3.style.transform = " rotateZ(0deg)";
})

//Products4 animation
const card4 = document.getElementById("cardxx4");
const container4 = document.getElementById("containerxx4");
const image4 = document.getElementById("cardImage4")


//animate in
container4.addEventListener('mouseenter', e => {
    card4.style.transition = 'none';

    //popout
    image4.style.transform = " rotateZ(40deg)";
})

//animate out
container4.addEventListener('mouseleave', e => {
    card4.style.transition = 'all 0.5s ease';
    card4.style.transform = `rotateY(0deg) rotateX(0deg)`;

    //popin
    image4.style.transform = " rotateZ(0deg)";
})

//Products5 animation
const card5 = document.getElementById("cardxx5");
const container5 = document.getElementById("containerxx5");
const image5 = document.getElementById("cardImage5")


//animate in
container5.addEventListener('mouseenter', e => {
    card5.style.transition = 'none';

    //popout
    image5.style.transform = " rotateZ(40deg)";
})

//animate out
container5.addEventListener('mouseleave', e => {
    card5.style.transition = 'all 0.5s ease';
    card5.style.transform = `rotateY(0deg) rotateX(0deg)`;

    //popin
    image5.style.transform = " rotateZ(0deg)";
})