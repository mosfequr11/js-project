const slideItem = document.querySelectorAll(".item-slide");
// console.log(slideItem);
const nextButton = document.querySelector(".nextBtn");
const prevButton = document.querySelector(".prevBtn");

slideItem.forEach(function (slide, index) {
  slide.style.left = `${index * 100}%`;
  //check number of item
  // console.log(slide);
});

let counter = 0;
// console.log(counter);

nextButton.addEventListener("click", function () {
  counter++;
  // console.log(`next button ${counter}`);
  carousalItem();
});
prevButton.addEventListener("click", function () {
  counter--;
  console.log(`prev button ${counter}`);
  carousalItem();
});

function carousalItem() {
  // working with slides
  if (counter === slideItem.length) {
    counter = 0;
  }
  if (counter < 0) {
    counter = slideItem.length - 1;
  }
  slideItem.forEach(function (slide) {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
}
