export const openMenu = () => {
  
  const extendedNav = document.getElementById("extended-nav") as HTMLElement;
  const explore = document.getElementById("explore") as HTMLElement;


  if (extendedNav.style.display === "none") {
    extendedNav.style.display = "block";
    explore.style.borderBottom = "2px solid #2CE080";
    explore.style.textUnderlineOffset = "1.6px";
  } else {
    extendedNav.style.display = "none";
    explore.style.borderBottom = "none";
  }
};
