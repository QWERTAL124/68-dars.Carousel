const tabParent = document.querySelector(".tabheader__items"),
  tabs = document.querySelectorAll(".tabheader__item"),
  tabsContent = document.querySelectorAll('.card');

function hideTabContent() {
  tabsContent.forEach((item) => {
    if (item.style.display = 'block') {
      item.classList.remove("show", "fide");
      item.classList.add("hide");
    }
    console.log(item);
  });
  tabs.forEach((item) => {
    item.clasList.remove("faol");
    console.log(item);
  });
}

hideTabContent();



let slideIndex = 1;

showSlides(slideIndex);

if(slides.length <10){
  total.textContent = `0${slides.length}`
}else{
  total.textContent = slides.length
}

function showSlides(idx){
  if(idx>slides.length){
    slideIndex = 1;
  }
  else if(idx<1){
    slideIndex = slides.length;
  }
  slides.forEach((item)=>{
    item.style.display = 'none';
  });
  slides[slideIndex-1].style.display = 'block'
  if(slides.length <10){
    current.textContent = `0${slides.length}`
  }else{
    current.textContent = slides.length
  }
}

function plusSlides(idx){
  showSlides(slideIndex +=idx)
}

next.addEventListener('click',()=>{
  plusSlides(1);
})

prev.addEventListener('click',()=>{
  plusSlides(-1);
})




