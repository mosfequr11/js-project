// Creat a Menu object and store Menu items
const menu = [
  {
    id: 1,
    title: "Beef Stew Boneless 1",
    category: "beef",
    price: 15.99,
    img: "./assets/img/product/product-01.jpg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.  Repudiandae, sint quam. Et reprehenderit fugiat nesciunt inventore  laboriosam excepturi! Quo, officia.`,
  },
  {
    id: 2,
    title: "Beef Stew Boneless 2",
    category: "beef",
    price: 20.99,
    img: "./assets/img/product/product-02.jpg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.  Repudiandae, sint quam. Et reprehenderit fugiat nesciunt inventore  laboriosam excepturi! Quo, officia.`,
  },
  {
    id: 3,
    title: "Beef Stew Boneless 3",
    category: "beef",
    price: 25.99,
    img: "./assets/img/product/product-03.jpg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.  Repudiandae, sint quam. Et reprehenderit fugiat nesciunt inventore  laboriosam excepturi! Quo, officia.`,
  },
  {
    id: 4,
    title: "Chicken Stew Boneless 4",
    category: "chicken",
    price: 30.99,
    img: "./assets/img/product/product-04.jpg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.  Repudiandae, sint quam. Et reprehenderit fugiat nesciunt inventore  laboriosam excepturi! Quo, officia.`,
  },
  {
    id: 5,
    title: "Chicken Stew Boneless 5",
    category: "chicken",
    price: 35.99,
    img: "./assets/img/product/product-05.jpg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.  Repudiandae, sint quam. Et reprehenderit fugiat nesciunt inventore  laboriosam excepturi! Quo, officia.`,
  },
  {
    id: 6,
    title: "Mutton Stew Boneless 6",
    category: "mutton",
    price: 40.99,
    img: "./assets/img/product/product-06.jpg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.  Repudiandae, sint quam. Et reprehenderit fugiat nesciunt inventore  laboriosam excepturi! Quo, officia.`,
  },
];

// Menu items Container
const sectionCenter = document.querySelector(".menu-section .section-center");

// The DOMContentLoaded event fires when the HTML document has been completely parsed
window.addEventListener("DOMContentLoaded", function () {
  //map() creates a new array from calling a function for every array element.
  let displayMenu = menu.map(function (item) {
    // Check Menu is exist or not exist (Return Object)
    // console.log(item);
    // return menu item HTML code (String)
    return `<article class="menu-item">
          <figure class="product-img">
            <img src=${item.img} alt=${item.title} class="photo" />
          </figure>
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
  });
  // Return Array
  // console.log(displayMenu);
  // Check Menu is exist or not exist (return HTML code)
  //  console.log(displayMenu[0]);
  // The join() method returns an array as a string.
  displayMenu = displayMenu.join("");

  // Now add Menu items in Section Container
  sectionCenter.innerHTML = displayMenu;
});
