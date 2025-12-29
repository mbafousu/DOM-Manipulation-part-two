//--------------------------------------
// Part 1: Getting Started
//--------------------------------------

// 1. Select and cache the <main> element in a variable named mainEl.

const mainEl = document.querySelector("main");

// 2. Set the background color using CSS custom property.

mainEl.style.backgroundColor = "var(--main-bg)";

// 3. Set the content of mainEl to <h1>DOM Manipulation</h1>.

mainEl.innerHTML = "<h1>DOM Manipulation</h1>";

// 4.Add a class of flex-ctr to mainEl.

mainEl.classList.add("flex-ctr");


//---------------------------------------------
// Part 2: Creating a Menu Bar
//---------------------------------------------

// 1. Select and cache the <nav id="top-menu"> element

const topMenuEl = document.getElementById("top-menu");

// 2. Set the height of the topMenuEl element to be 100%.

topMenuEl.style.height = "100%";

// 3. Set the background color using CSS custom property.

topMenuEl.style.backgroundColor = "var(--top-menu-bg)";

// 4. Add a class of flex-around to topMenuEl.

topMenuEl.classList.add("flex-around");


//-----------------------------------------------
//Part 3: Adding Menu Buttons
//-----------------------------------------------

// Menu Data

// Menu data structure

var menuLinks = [
  { text: 'about', href: '/about' },
  { text: 'catalog', href: '/catalog' },
  { text: 'orders', href: '/orders' },
  { text: 'account', href: '/account' },
];

// 1. Iterate over the menuLinks array
// using forEach

// 2. Create an <a> element.
// 3. Add the href attribute 
// 4. set the link text
// 5. Append each link to topMenuEl


menuLinks.forEach(link => {
  const aEl = document.createElement("a");
  aEl.setAttribute("href", link.href);
  aEl.textContent = link.text;
  topMenuEl.appendChild(aEl);
});

//--------------------------------------
// Part 4 : Adding Interactivity
//--------------------------------------
