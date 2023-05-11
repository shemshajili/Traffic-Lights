function trafficSignal () {
const green =document.querySelector('.green')
const red =document.querySelector('.red')
const yellow =document.querySelector('.yellow')
 
    setTimeout(() => {
       green.style.opacity=0.3;
       red.style.opacity=0.3;
       yellow.style.opacity=1;
    },10000);
 
    setTimeout(() => {
        green.style.opacity=0.3;
        red.style.opacity=1;
        yellow.style.opacity=0.3;
    },5000);
 
    setTimeout(() => {
        green.style.opacity=1;
        red.style.opacity=0.3;
        yellow.style.opacity=0.3;
    },27000);
}
 
const timer=setInterval(() => {
    trafficSignal();
},27000);
 
trafficSignal();

