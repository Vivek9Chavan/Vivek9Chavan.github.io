(() => {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector("#nav-links");
  if (toggle && nav) {
    toggle.hidden = false;
    document.documentElement.classList.add("js-nav");
    const close = () => {
      toggle.setAttribute("aria-expanded", "false");
      nav.classList.remove("is-open");
    };
    toggle.addEventListener("click", () => {
      const open = toggle.getAttribute("aria-expanded") !== "true";
      toggle.setAttribute("aria-expanded", String(open));
      nav.classList.toggle("is-open", open);
    });
    nav.addEventListener("click", (event) => {
      if (event.target.closest("a")) close();
    });
    document.addEventListener("keydown", (event) => {
      if (
        event.key === "Escape" &&
        toggle.getAttribute("aria-expanded") === "true"
      ) {
        close();
        toggle.focus();
      }
    });
  }
  const list = document.querySelector("#all-publications");
  if (!list) return;
  const tools = document.querySelector(".publication-tools");
  const search = document.querySelector("#publication-search");
  const type = document.querySelector("#publication-type");
  const count = document.querySelector("#result-count");
  const empty = document.querySelector("#no-results");
  const rows = [...list.querySelectorAll(".publication")];
  const normalize = (value) =>
    value
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  const texts = rows.map((row) => normalize(row.textContent));
  const filter = () => {
    const query = normalize(search.value.trim());
    const words = query.split(/\s+/).filter(Boolean);
    let visible = 0;
    rows.forEach((row, i) => {
      const match =
        (type.value === "all" || row.dataset.category === type.value) &&
        words.every((word) => texts[i].includes(word));
      row.hidden = !match;
      if (match) visible++;
    });
    count.textContent = `${visible} of ${rows.length} works`;
    empty.hidden = visible !== 0;
  };
  tools.hidden = false;
  search.addEventListener("input", filter);
  type.addEventListener("change", filter);
  filter();
})();
