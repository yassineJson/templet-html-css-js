/*menu Navigation */
var hideNavigation =document.querySelector('.nav');
var spanShowing = document.querySelector('.forNavigation');
var landingpagTabout = document.querySelector(".landing-page .about");
var buletShwingoption = document.querySelector(".bulet-option");
spanShowing.addEventListener('click',function(){
        hideNavigation.classList.toggle('hideOrshow');
        landingpagTabout.classList.toggle('display-none');
        buletShwingoption.classList.toggle('display-none');
    })
/*menu Navigation */
/*start show/hide section setting */
var sectionButton =document.getElementById('set');
var sectionSeting =document.getElementsByClassName('seting-section')[0];
var faGear =document.getElementsByClassName('fa fa-gear')[0];
sectionButton.addEventListener('click',function(){
    faGear.classList.toggle('fa-spin');
    sectionButton.classList.toggle('left');
    sectionSeting.classList.toggle('width');

})
/*end show/hide section setting */
/* end section galary*/
/*start bullet section */
const alllinks = document.querySelectorAll('.nav li a');
const allbulett = document.querySelectorAll('.bulet-option .bullet');
function scroltoitems (elementl){
    elementl.forEach( elei =>{
        elei.addEventListener('click', (e)=>{
            e.preventDefault();
            document.querySelector(e.target.dataset.section).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}
scroltoitems (allbulett);
scroltoitems (alllinks);
/*end bullet section */

/*start add to local storage*/
document.documentElement.style.setProperty('--main-color',localStorage.getItem('lokalColor'));
document.querySelectorAll('.nav-color li').forEach(element => {
    element.classList.remove('active');
    if(element.dataset.color===localStorage.getItem('lokalColor')){
        element.classList.add('active');
    }
    });
/*end add to local storage*/
/*start change color from main color */
var navCcolor= document.querySelectorAll('.nav-color li');
navCcolor.forEach( li=> {
    li.addEventListener('click',(e)=>{
        document.documentElement.style.setProperty('--main-color', e.target.dataset.color);
        localStorage.setItem('lokalColor',e.target.dataset.color);
        handleActive (e);
    });

});
/*end change background  */
var backgroundOption=true;

/*start change background random*/
var localBackOptionee =localStorage.getItem("backgrounDLocal");

if(localBackOptionee === 'true'){
    raNdomBackgroun();
}else{
    
}
document.querySelectorAll('.display-background div').forEach(element=>{
    element.classList.remove('active');
})
if(localBackOptionee === 'true'){
    document.querySelector('.yes').classList.add('active');
}else{
    document.querySelector('.no').classList.add('active');
}

var landing = document.getElementById('slide');
var photos = ["images/01.png","images/02.jpeg","images/03.png","images/04.png","images/05.png"];
var setIntervalClear;
function raNdomBackgroun(){
    if( backgroundOption===true){
    setIntervalClear =setInterval(()=>{
            let randomNumber= Math.floor(Math.random() * photos.length);
                landing.style.backgroundImage='url('+photos[randomNumber]+')';
            },10000);
    }
}

/*end change background random*/

var dispayBackground= document.querySelectorAll('.display-background div');
dispayBackground.forEach( div=> {
    div.addEventListener('click',(e)=>{
    
        handleActive (e);

        if(e.target.dataset.background==='yes'){
            backgroundOption=true;
            raNdomBackgroun(); 
            localStorage.setItem("backgrounDLocal",true);
        }else{
            backgroundOption=false;
            clearInterval(setIntervalClear);
            localStorage.setItem("backgrounDLocal",false);
        }
    });

});
/*start setction skkile*/
let ourSkills= document.querySelector('.skkill');
let header= document.querySelector('header');
window.onscroll = function(){
    let skikillsOffsetTop = ourSkills.offsetTop;
    let skikillsOuterHeight = ourSkills.offsetHeight;
    let windowHeight = this.innerHeight;
    let windowScrollTop = this.pageYOffset;
if(windowScrollTop > (skikillsOffsetTop + skikillsOuterHeight - windowHeight) ){
    let allSkills = document.querySelectorAll('.progress-skills span');
    allSkills.forEach(skill =>{
        skill.style.width= skill.dataset.progresss;
        header.style.backgroundColor="rgba(0, 0, 0, 0.9)";
    })
}
else{
    header.style.backgroundColor="rgba(0, 0, 0, 0.6)";
}

};

/*end setction skkile*/
/* start section galary*/
var galary = document.querySelectorAll('.galary img');
var showingPopup = document.querySelector('.popupBox');
var contentBox = document.querySelector(".content-box img");
var contentBoxhead = document.querySelector(".content-box h3");
var contentBoxClose = document.querySelector(".content-box .close");
galary.forEach(img =>{
    img.addEventListener('click',() =>{
        contentBox.src = img.src;
        showingPopup.style.transform= 'scale(1,1)';
        contentBoxhead.innerHTML = img.alt;
    })
})
contentBoxClose.addEventListener('click', ()=>{
    showingPopup.style.transform= 'scale(0,0)';
})

/* end section galary*/

function handleActive (ev){
    ev.target.parentElement.querySelectorAll('.active').forEach(element => {
        element.classList.remove('active');
        });
        ev.target.classList.add('active');
}
/* start localpullet*/
var disebleBullet =document.querySelectorAll('.display-bullet div');
var theBullet =document.querySelector('.bulet-option');
var bulletLocal = localStorage.getItem('bullet-local');
disebleBullet.forEach(div =>{
    div.classList.remove('active');
});
if(bulletLocal === 'block'){
    theBullet.style.display = "block";
    document.querySelector('.display-bullet .yes').classList.add('active');
}else{
    theBullet.style.display = "none";
    document.querySelector('.display-bullet .no').classList.add('active');
}
/* end localpullet*/
/*start obtion bullet */
disebleBullet.forEach(div =>{
    div.addEventListener('click',(e) =>{
        if(div.dataset.display === "show"){
            theBullet.style.display = "block";
            localStorage.setItem('bullet-local', 'block');
        }else{
            theBullet.style.display = "none";
            localStorage.setItem('bullet-local', 'none');
        }
        handleActive (e);
    });
});
/*end obtion bullet */
