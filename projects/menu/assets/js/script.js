// Start Sidebar //
const toggleBtn = document.querySelector(".sidebar-toggle-btn");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");

toggleBtn.addEventListener("click", function () {
  // if (sidebar.classList.contains("show-sidebar")) {
  //   sidebar.classList.remove("show-sidebar");
  // } else {
  //   sidebar.classList.add("show-sidebar");
  // }
  sidebar.classList.toggle("show-sidebar");
});

// remove show-sidebar class from sidebar
closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});
// End Sidebar //

// Start Modal //
// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay

const modalBtn = document.querySelector(".modal-btn");
const modalOverlay = document.querySelector(".modal-overlay");
const closeBtnm = document.querySelector(".close-btn-modal");

modalBtn.addEventListener("click", function () {
  modalOverlay.classList.add("open-modal");
});

closeBtnm.addEventListener("click", function () {
  modalOverlay.classList.remove("open-modal");
});

// End Modal //

// Start FAQ //

//using selectors inside the element
const questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
  const btnsQuestion = question.querySelector(".question-btn");
  // console.log(btn);

  btnsQuestion.addEventListener("click", function () {
    // console.log(question);

    // if click on different items then the previous item show text "show-text" remove
    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });
    question.classList.toggle("show-text");
  });
});

// traversing the dom
// const btnsQuestion = document.querySelectorAll(".question-btn");

// btnsQuestion.forEach(function (btn) {
//   btn.addEventListener("click", function (eles) {
//     // console.log(eles.currentTarget.parentElement.parentElement);
//     const question = eles.currentTarget.parentElement.parentElement;
//     question.classList.toggle("show-text");
//   });
// });

// End FAQ //
