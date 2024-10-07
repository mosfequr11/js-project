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
// display all items when page loads
window.addEventListener("DOMContentLoaded", function () {
  diplayMenuItems(menu);
  // displayMenuButtons(menu);
});

// Function diplayMenuItems()
function diplayMenuItems(menu) {
  //map() creates a new array from calling a function for every array element.
  let displayMenu = menu.map(function (item) {
    // Here (menu = item )
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
}

// Function displayMenuButtons ()
const btnContainer = document.querySelector(".menu-section .btn-container");
function displayMenuButtons(menu) {
  let menuButton = menu.map(function (item) {
    return `<button type="button" class="filter-btn" data-id=${item.category}>
    ${item.category}
  </button>`;
  });
  console.log(menuButton);
  menuButton = menuButton.join("");
  btnContainer.innerHTML = menuButton;
}

// filter button
const filterBtns = document.querySelectorAll(".filter-btn");
// all button list (NodeList)
// console.log(filterBtns);
// The forEach() method calls a function for each element in an array.
// The forEach() method is not executed for empty elements.
filterBtns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    // check each data-id is existing or not (DOMStringMap)
    // console.log(e.currentTarget.dataset);
    const category = e.currentTarget.dataset.id;
    // The filter() method creates a new array filled with elements that pass a test provided by a function.
    // The filter() method does not execute the function for empty elements.
    // The filter() method does not change the original array.
    const menuCategory = menu.filter(function (menuItem) {
      // here (menuItem = menu)
      // console.log(menuItem.category);
      // Check menu items category is existiung or not
      if (menuItem.category === category) {
        return menuItem;
      }
    });

    if (category === "all") {
      // show all category menu items
      // console.log(menu);
      diplayMenuItems(menu);
    } else {
      // show specific category menu items
      // console.log(menuCategory);
      diplayMenuItems(menuCategory);
    }
  });
});
