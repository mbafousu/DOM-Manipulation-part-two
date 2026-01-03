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
//Part 3: Creating a Submenu
//-----------------------------------------------

const subMenuEl = document.getElementById("sub-menu");

subMenuEl.style.height = "100%";
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
subMenuEl.classList.add("flex-around");
subMenuEl.style.top = "0";




//---------------------------------------------------------------
// Part 4 + 5 : Adding Interactivity + Adding Submenu Interaction
//---------------------------------------------------------------

// Menu Data

var menuLinks = [
  { text: "about", href: "/about" },

  {
    text: "catalog",
    href: "#",
    subLinks: [
      { text: "all", href: "/catalog/all" },
      { text: "top selling", href: "/catalog/top" },
      { text: "search", href: "/catalog/search" },
    ],
  },

  {
    text: "orders",
    href: "#",
    subLinks: [
      { text: "new", href: "/orders/new" },
      { text: "pending", href: "/orders/pending" },
      { text: "history", href: "/orders/history" },
    ],
  },

  {
    text: "account",
    href: "#",
    subLinks: [
      { text: "profile", href: "/account/profile" },
      { text: "sign out", href: "/account/signout" },
    ],
  },
];

// Build Top  Menu Links

topMenuEl.innerHTML = ""; 
menuLinks.forEach(link => {
  const aEl = document.createElement("a");
  aEl.setAttribute("href", link.href);
  aEl.textContent = link.text;
  topMenuEl.appendChild(aEl);
});

const topMenuLinks = topMenuEl.querySelectorAll("a");

// Helper Function to build Submenu

function buildSubmenu(subLinks) {
  subMenuEl.innerHTML = "";

  subLinks.forEach(link => {
    const aEl = document.createElement("a");
    aEl.setAttribute("href", link.href);
    aEl.textContent = link.text;
    subMenuEl.appendChild(aEl);
  });
}


topMenuEl.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (evt.target.tagName !== "A") return;

  console.log(evt.target.textContent);

  const clickedLink = evt.target;

  // Find the matching link object in menuLinks
  const linkObj = menuLinks.find(link => link.text === clickedLink.textContent);

  // If clicked link was already active, deactivate and hide submenu
  if (clickedLink.classList.contains("active")) {
    clickedLink.classList.remove("active");
    subMenuEl.style.top = "0";
    return;
  }

  // Otherwise, set clicked active and remove active from others
  topMenuLinks.forEach(link => link.classList.remove("active"));
  clickedLink.classList.add("active");

  // Show submenu only if subLinks exist
  if (linkObj.subLinks) {
    subMenuEl.style.top = "100%";
    buildSubmenu(linkObj.subLinks);
  } else {
    subMenuEl.style.top = "0";
  }
});


