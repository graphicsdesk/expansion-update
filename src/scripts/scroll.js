import svgs from './*.svg';
import scrollama from 'scrollama';


//window.addEventListener(
 // 'resize',
  //function () {
    //this.document.querySelector('#g-school-enrollment-graph-box')
      //.style('width', 700 * (window.innerHeight / 800) + 'px')
      //.style('height', 750 * (window.innerHeight / 800) + 'px');
  //},
  //true,
//);

// using d3 for convenience
var main = document.querySelector("main");
var scrolly = main.querySelector("#scrolly");
var sticky = scrolly.querySelector(".sticky-thing");
var article = scrolly.querySelector("article");

// initialize the scrollama
var scroller = scrollama();

function handleResize() {
  if(window.innerWidth<=1000){
    document.querySelector('#eleven').style.opacity=0;
    document.querySelector('#twelve').style.opacity=0;
    document.querySelector('#thirteen').style.opacity=0;
    document.querySelector('#fourteen').style.opacity=0;
    document.querySelector('#fifteen').style.opacity=0;
    document.querySelector('#sixteen').style.opacity=0;
    document.querySelector('#seventeen').style.opacity=0;
    document.querySelector('#eighteen').style.opacity=0;
    document.querySelector('#nineteen').style.opacity=0;
    document.querySelector('#twenty').style.opacity=0;
    document.querySelector('#twenty-one').style.opacity=0;
    document.querySelector('#enrolled_num').style.opacity=0;
    document.querySelector('#total_students').style.opacity=0;
    document.querySelector('#gs_students').style.opacity=0;
    document.querySelector('#cc_students').style.opacity=0;
    document.querySelector('#seas_students').style.opacity=0;
  }
}

function pullInitial(){
    document.querySelector('#eleven_comb').style.opacity=1;
    document.querySelector('#eleven').style.opacity=1;
    document.querySelector('#twelve').style.opacity=0;
    document.querySelector('#thirteen').style.opacity=0;
    document.querySelector('#fourteen').style.opacity=0;
    document.querySelector('#fifteen').style.opacity=0;
    document.querySelector('#sixteen').style.opacity=0;
    document.querySelector('#seventeen').style.opacity=0;
    document.querySelector('#eighteen').style.opacity=0;
    document.querySelector('#nineteen').style.opacity=0;
    document.querySelector('#twenty').style.opacity=0;
    document.querySelector('#twenty-one').style.opacity=0;
}
// scrollama event handlers
function handleStepEnter(response) {

  if(response.index==0){
    document.querySelector('#eleven').style.opacity=1;
    document.querySelector('#twelve').style.opacity=0;
    document.querySelector('#eleven_comb').style.opacity=1;
    document.querySelector('#total_students').innerHTML="<p class='g-pstyle3'>Total: 8,274 students </p>"
    document.querySelector('#cc_students').innerHTML="<p class='g-pstyle4'>4,550</p><p class='g-pstyle4'>students</p>"
    document.querySelector('#gs_students').innerHTML="<p class='g-pstyle4'>2,038</p><p class='g-pstyle4'>students</p>"
    document.querySelector('#seas_students').innerHTML="<p class='g-pstyle4'>1,515</p><p class='g-pstyle4'>students</p>"
    document.querySelector('#enrolled_num').innerHTML="<p class='g-pstyle0'>Enrollment by Undergraduate School: 2011</p>"
  }
  if(response.index==1){
    document.querySelector('#eleven').style.opacity=0;
    document.querySelector('#twelve').style.opacity=1;
    document.querySelector('#thirteen').style.opacity=0;
    document.querySelector('#eleven_comb').style.opacity=0;
    document.querySelector('#twelve_cover').style.opacity=1;
    document.querySelector('#total_students').innerHTML="<p class='g-pstyle3'>Total: 8,274 students </p>"
    document.querySelector('#cc_students').innerHTML="<p class='g-pstyle4'>4,587</p><p class='g-pstyle4'>students</p>"
    document.querySelector('#gs_students').innerHTML="<p class='g-pstyle4'>2,161</p><p class='g-pstyle4'>students</p>"
    document.querySelector('#seas_students').innerHTML="<p class='g-pstyle4'>1,526</p><p class='g-pstyle4'>students</p>"
    document.querySelector('#enrolled_num').innerHTML="<p class='g-pstyle0'>Enrollment by Undergraduate School: 2012</p>"
  }
  if(response.index==2){
    document.querySelector('#twelve').style.opacity=0;
    document.querySelector('#thirteen').style.opacity=1;
    document.querySelector('#fourteen').style.opacity=0;
    document.querySelector('#twelve_cover').style.opacity=0;
    document.querySelector('#thirteen_cover').style.opacity=1;
    document.querySelector('#total_students').innerHTML="<p class='g-pstyle3'>Total: 8,365 students </p>"
    document.querySelector('#cc_students').innerHTML="<p class='g-pstyle4'>4,593</p><p class='g-pstyle4'>students</p>"
    document.querySelector('#gs_students').innerHTML="<p class='g-pstyle4'>2,213</p><p class='g-pstyle4'>students</p>"
    document.querySelector('#seas_students').innerHTML="<p class='g-pstyle4'>1,559</p><p class='g-pstyle4'>students</p>"
    document.querySelector('#enrolled_num').innerHTML="<p class='g-pstyle0'>Enrollment by Undergraduate School: 2013</p>"
  }
  if(response.index==3){  
    document.querySelector('#thirteen').style.opacity=0;
    document.querySelector('#fourteen').style.opacity=1;
    document.querySelector('#fifteen').style.opacity=0;
    document.querySelector('#thirteen_cover').style.opacity=0;
    document.querySelector('#fourteen_cover').style.opacity=1;
    document.querySelector('#total_students').innerHTML="<p class='g-pstyle3'>Total: 8,559 students </p>"
    document.querySelector('#cc_students').innerHTML="<p class='g-pstyle4'>4,657</p><p class='g-pstyle4'>students</p>"
    document.querySelector('#gs_students').innerHTML="<p class='g-pstyle4'>2,319</p><p class='g-pstyle4'>students</p>"
    document.querySelector('#seas_students').innerHTML="<p class='g-pstyle4'>1,583</p><p class='g-pstyle4'>students</p>"
    document.querySelector('#enrolled_num').innerHTML="<p class='g-pstyle0'>Enrollment by Undergraduate School: 2014</p>"
  }
  if(response.index==4){
    document.querySelector('#fourteen').style.opacity=0;
    document.querySelector('#fifteen').style.opacity=1;
    document.querySelector('#sixteen').style.opacity=0;
    document.querySelector('#fourteen_cover').style.opacity=0;
    document.querySelector('#fifteen_cover').style.opacity=1;
    document.querySelector('#total_students').innerHTML="<p class='g-pstyle3'>Total: 8,613 students </p>"
    document.querySelector('#cc_students').innerHTML="<p class='g-pstyle4'>4,627</p><p class='g-pstyle4'>students</p>"
    document.querySelector('#gs_students').innerHTML="<p class='g-pstyle4'>2,394</p><p class='g-pstyle4'>students</p>"
    document.querySelector('#seas_students').innerHTML="<p class='g-pstyle4'>1,592</p><p class='g-pstyle4'>students</p>"
    document.querySelector('#enrolled_num').innerHTML="<p class='g-pstyle0'>Enrollment by Undergraduate School: 2015</p>"
  }
  if(response.index==5){
    document.querySelector('#fifteen').style.opacity=0;
    document.querySelector('#sixteen').style.opacity=1;
    document.querySelector('#seventeen').style.opacity=0;
    document.querySelector('#fifteen_cover').style.opacity=0;
    document.querySelector('#sixteen_cover').style.opacity=1;
    document.querySelector('#total_students').innerHTML="<p class='g-pstyle3'>Total: 8,712 students </p>"
    document.querySelector('#cc_students').innerHTML="<p class='g-pstyle4'>4,644</p><p class='g-pstyle4'>students</p>"
    document.querySelector('#gs_students').innerHTML="<p class='g-pstyle4'>2,449</p><p class='g-pstyle4'>students</p>"
    document.querySelector('#seas_students').innerHTML="<p class='g-pstyle4'>1,619</p><p class='g-pstyle4'>students</p>"
    document.querySelector('#enrolled_num').innerHTML="<p class='g-pstyle0'>Enrollment by Undergraduate School: 2016</p>"
  }
  if(response.index==6){
    document.querySelector('#sixteen').style.opacity=0;
    document.querySelector('#seventeen').style.opacity=1;
    document.querySelector('#eighteen').style.opacity=0;
    document.querySelector('#sixteen_cover').style.opacity=0;
    document.querySelector('#seventeen_cover').style.opacity=1;
    document.querySelector('#total_students').innerHTML="<p class='g-pstyle3'>Total: 8,868 students </p>"
    document.querySelector('#cc_students').innerHTML="<p class='g-pstyle4'>4,667</p><p class='g-pstyle4'>students</p>"
    document.querySelector('#gs_students').innerHTML="<p class='g-pstyle4'>2,545</p><p class='g-pstyle4'>students</p>"
    document.querySelector('#seas_students').innerHTML="<p class='g-pstyle4'>1,656</p><p class='g-pstyle4'>students</p>"
    document.querySelector('#enrolled_num').innerHTML="<p class='g-pstyle0'>Enrollment by Undergraduate School: 2017</p>"
  }
  if(response.index==7){
    document.querySelector('#seventeen').style.opacity=0;
    document.querySelector('#eighteen').style.opacity=1;
    document.querySelector('#nineteen').style.opacity=0;
    document.querySelector('#seventeen_cover').style.opacity=0;
    document.querySelector('#eighteen_cover').style.opacity=1;
    document.querySelector('#total_students').innerHTML="<p class='g-pstyle3'>Total: 8,931 students </p>"
    document.querySelector('#cc_students').innerHTML="<p class='g-pstyle4'>4,670</p><p class='g-pstyle4'>students</p>"
    document.querySelector('#gs_students').innerHTML="<p class='g-pstyle4'>2,568</p><p class='g-pstyle4'>students</p>"
    document.querySelector('#seas_students').innerHTML="<p class='g-pstyle4'>1,693</p><p class='g-pstyle4'>students</p>"
    document.querySelector('#enrolled_num').innerHTML="<p class='g-pstyle0'>Enrollment by Undergraduate School: 2018</p>"
  }
  if(response.index==8){
    document.querySelector('#eighteen').style.opacity=0;
    document.querySelector('#nineteen').style.opacity=1;
    document.querySelector('#twenty').style.opacity=0;
    document.querySelector('#eighteen_cover').style.opacity=0;
    document.querySelector('#nineteen_cover').style.opacity=1;
    document.querySelector('#total_students').innerHTML="<p class='g-pstyle3'>Total: 9,001 students </p>"
    document.querySelector('#cc_students').innerHTML="<p class='g-pstyle4'>4,675</p><p class='g-pstyle4'>students</p>"
    document.querySelector('#gs_students').innerHTML="<p class='g-pstyle4'>2,603</p><p class='g-pstyle4'>students</p>"
    document.querySelector('#seas_students').innerHTML="<p class='g-pstyle4'>1,723</p><p class='g-pstyle4'>students</p>"
    document.querySelector('#enrolled_num').innerHTML="<p class='g-pstyle0'>Enrollment by Undergraduate School: 2019</p>"
  }
  if(response.index==9){
    document.querySelector('#nineteen').style.opacity=0;
    document.querySelector('#twenty').style.opacity=1;
    document.querySelector('#twenty-one').style.opacity=0;
    document.querySelector('#nineteen_cover').style.opacity=0;
    document.querySelector('#twenty_cover_comb').style.opacity=1;
    document.querySelector('#total_students').innerHTML="<p class='g-pstyle3'>Total: 8,842 students </p>"
    document.querySelector('#cc_students').innerHTML="<p class='g-pstyle4'>4,461</p><p class='g-pstyle4'>students</p>"
    document.querySelector('#gs_students').innerHTML="<p class='g-pstyle4'>2,660</p><p class='g-pstyle4'>students</p>"
    document.querySelector('#seas_students').innerHTML="<p class='g-pstyle4'>1,721</p><p class='g-pstyle4'>students</p>"
    document.querySelector('#enrolled_num').innerHTML="<p class='g-pstyle0'>Enrollment by Undergraduate School: 2020</p>"
  }
  if(response.index==10){
    document.querySelector('#twenty').style.opacity=0;
    document.querySelector('#twenty-one').style.opacity=1;
    document.querySelector('#twenty_cover_comb').style.opacity=0; 
    document.querySelector('#total_students').innerHTML="<p class='g-pstyle3'>Total: 9,665 students </p>"
    document.querySelector('#cc_students').innerHTML="<p class='g-pstyle4'>4,925</p><p class='g-pstyle4'>students</p>"
    document.querySelector('#gs_students').innerHTML="<p class='g-pstyle4'>2,885</p><p class='g-pstyle4'>students</p>"
    document.querySelector('#seas_students').innerHTML="<p class='g-pstyle4'>1,855</p><p class='g-pstyle4'>students</p>"
    document.querySelector('#enrolled_num').innerHTML="<p class='g-pstyle0'>Enrollment by Undergraduate School: 2021</p>"
  }
  if(window.innerWidth<1000){
    document.querySelector('#eleven').style.opacity=0;
    document.querySelector('#twelve').style.opacity=0;
    document.querySelector('#thirteen').style.opacity=0;
    document.querySelector('#fourteen').style.opacity=0;
    document.querySelector('#fifteen').style.opacity=0;
    document.querySelector('#sixteen').style.opacity=0;
    document.querySelector('#seventeen').style.opacity=0;
    document.querySelector('#eighteen').style.opacity=0;
    document.querySelector('#nineteen').style.opacity=0;
    document.querySelector('#twenty').style.opacity=0;
    document.querySelector('#twenty-one').style.opacity=0;
    document.querySelector('#enrolled_num').style.opacity=0;
    document.querySelector('#total_students').style.opacity=0;
    document.querySelector('#gs_students').style.opacity=0;
    document.querySelector('#cc_students').style.opacity=0;
    document.querySelector('#seas_students').style.opacity=0;
  }
  else{
    document.querySelector('#enrolled_num').style.opacity=1;
    document.querySelector('#total_students').style.opacity=1;
    document.querySelector('#gs_students').style.opacity=1;
    document.querySelector('#cc_students').style.opacity=1;
    document.querySelector('#seas_students').style.opacity=1;
  }
	

  // update graphic based on step
  
}
  


function init() {
  pullInitial();
  handleResize();
  scroller
    .setup({
      step: "#scrolly article .step",
      offset: 0.2,
      debug: false
    })
    .onStepEnter(handleStepEnter);

  window.addEventListener("resize", scroller.resize);
  //window.addEventListener("resize", resizeSVG);
}

// kick things off
init();