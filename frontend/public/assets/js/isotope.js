const select = (el, all = false) => {
  el = el.trim();
  if (all) {
    return [...document.querySelectorAll(el)];
  } else {
    return document.querySelector(el);
  }
};

const on = (type, el, listener, all = false) => {
  let selectEl = select(el, all);
  if (selectEl) {
    if (all) {
      selectEl.forEach((e) => e.addEventListener(type, listener));
    } else {
      selectEl.addEventListener(type, listener);
    }
  }
};

window.addEventListener("load", () => {
  let portfolioContainer = select(".portfolio-container");
  if (portfolioContainer) {
    let portfolioItems = select(".portfolio-item", true); // Declare and initialize portfolioItems

    let portfolioIsotope = new Isotope(portfolioContainer, {
      itemSelector: ".portfolio-item",
      layoutMode: "fitRows",
      filter: "filter-active", // Initially filter to hide all items
    });

    let portfolioFilters = select("#portfolio-flters li", true);

    function handleFilterClick(e) {
      e.preventDefault();

      portfolioFilters.forEach(function (el) {
        el.classList.remove("filter-active");
      });
      this.classList.add("filter-active");

      let filterValue = this.getAttribute("data-filter");

      portfolioIsotope.arrange({
        filter: filterValue,
      });

      if (filterValue !== "*") {
        portfolioItems.forEach((item) => item.classList.add("hidden")); // Hide all items

        portfolioContainer
          .querySelectorAll(filterValue)
          .forEach((item) => item.classList.remove("hidden")); // Unhide items matching the selected filter
      }

      portfolioIsotope.on("arrangeComplete", AOS.refresh); // Trigger AOS refresh after layout rearrangement
    }

    portfolioFilters.forEach((filter) =>
      filter.addEventListener("click", handleFilterClick)
    ); // Handle filter selection
  }
});
