const buttons=document.querySelectorAll(".carouselArrow");
const slidesViewItems=document.querySelectorAll(".slItem");
console.log(slidesViewItems);


class SliderTimer{
    constructor(){
        
    }

    static setNewTimer=function(delay){

        if(delay) return setInterval(()=>buttons[1].click(), delay);
    }

    static clearTimer=function(currentTimer){
        clearInterval(currentTimer);
    }


}


let timer;

window.onload=(e)=>{

    timer=SliderTimer.setNewTimer(3000);
}


buttons.forEach((button, idx)=>{


    button.addEventListener("click", async(e)=>{


        SliderTimer.clearTimer(timer); 
        // let activeSlide=document.querySelector("[data-active]")
        let offset=button.classList.contains("prev")?-1:1;
        
        const slides=[...document.querySelector("[data-carousel]").children]
        const activeSlide= slides.find(ele=>ele.dataset.active!=null)

        let currentIndex=slides.indexOf(activeSlide)
        let newIndex=currentIndex+offset

        if(newIndex===slides.length) newIndex=0;
        if(newIndex===-1) newIndex=slides.length-1;
        
        //Carousel
        slides[newIndex].dataset.active=true;
        delete activeSlide.dataset.active;

        //Slide views . . . 
        slidesViewItems[newIndex].dataset.activeSlideView=true;
        delete slidesViewItems[currentIndex].dataset.activeSlideView
        
        delay=3000;

        timer= SliderTimer.setNewTimer(delay)

        
    })


})




slidesViewItems.forEach((item, idx)=>{
    console.log(item);
    item.addEventListener("click" , ()=>{

        SliderTimer.clearTimer(timer); 

      let sliders=[...document.querySelector("[data-carousel]").children]

    console.log(sliders);
    let activeSlide=sliders.find(ele=>ele.dataset.active!=null)
    let activeSlideIndex=sliders.indexOf(activeSlide)

    //Updating slider
    sliders[idx].dataset.active=true;
    delete activeSlide.dataset.active;

    //Updating sliderViewItems
    slidesViewItems[idx].dataset.activeSlideView=true;
    delete slidesViewItems[activeSlideIndex].dataset.activeSlideView
    
           
    delay=3000;

    timer= SliderTimer.setNewTimer(delay)

    })

     
       
})






