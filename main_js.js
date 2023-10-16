const displaceHeader = (function () {
  let target;
  let limit;
  let flag = false;
  function popp() {
    if (window.scrollY >= limit && !flag) {
      target.classList.add("displaced");
    } else if (window.scrollY <= limit) {
      target.classList.remove("displaced");
    }
  }
  return {
    init: function (item) {
      target = document.getElementById(item);
      limit = target.offsetHeight;
      window.addEventListener("scroll", popp);
    }
  };
})();

const correctPadding = (function () {
  let target;
  let nuisance;
  let possibletargets;
  function func(e) {
    e.preventDefault();
    target.checked = false;
    const whereTo = document.getElementById(this.attributes.href.value.split("#")[1]);
    window.scroll(0, whereTo.offsetTop - nuisance);
  }
  return {
    init: function (item, item2) {
      target = document.getElementById(item);
      nuisance = document.getElementById(item2).offsetHeight;
      possibletargets = document.getElementsByTagName("a");
      for (let i = 0; i < possibletargets.length; i++) {
        if (possibletargets[i].attributes.href.value[0] == "#") {
          possibletargets[i].addEventListener("click", func);
        }
      }
    }
  };
})();
