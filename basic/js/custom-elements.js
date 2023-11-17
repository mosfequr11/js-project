// Function to define the element
function myCustomElements() {
  class myElement extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this.shadowRoot.innerHTML = `<h1 style="color:green;"> Hellow World</h1>`;
      // console.log("Hellow world");
    }
  }

  // Use the define() method to define
  // a new element
  window.customElements.define("my-custom-element", myElement);
}
