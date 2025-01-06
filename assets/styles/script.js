const toggle = document.getElementById("pricing-toggle");
const prices = {
  basic: document.getElementById("basic-price"),
  pro: document.getElementById("pro-price"),
  master: document.getElementById("master-price"),
};

toggle.addEventListener("change", function () {
  const isMonthly = this.checked;

  prices.basic.textContent = isMonthly ? "$19.99" : "$199.99";
  prices.pro.textContent = isMonthly ? "$24.99" : "$249.99";
  prices.master.textContent = isMonthly ? "$39.99" : "$399.99";

  toggle.setAttribute("aria-checked", isMonthly);
});
