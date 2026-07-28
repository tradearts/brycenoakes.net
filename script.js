(() => {
  const emailLink = document.querySelector("#email-link");
  const email = ["brycerossjames", "gmail.com"].join("@");

  if (emailLink) {
    emailLink.href = `mailto:${email}`;
  }

  const year = document.querySelector("#year");
  if (year) {
    year.textContent = String(new Date().getFullYear());
  }

  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector("#site-nav");

  const closeMenu = () => {
    if (!toggle || !nav) return;
    toggle.setAttribute("aria-expanded", "false");
    nav.classList.remove("is-open");
    document.body.classList.remove("menu-open");
  };

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      nav.classList.toggle("is-open", !open);
      document.body.classList.toggle("menu-open", !open);
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 720) closeMenu();
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeMenu();
    });
  }

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const precisePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  if (!reducedMotion && precisePointer) {
    document
      .querySelectorAll(".site-nav a, .work-card-copy h3 a, .contact-links a, .case-next a")
      .forEach((link) => {
        const label = link.textContent.trim();
        if (!label) return;

        const mask = document.createElement("span");
        const track = document.createElement("span");
        const firstFace = document.createElement("span");
        const secondFace = document.createElement("span");

        mask.className = "text-roll-mask";
        track.className = "text-roll-track";
        firstFace.className = "text-roll-face";
        secondFace.className = "text-roll-face";
        firstFace.textContent = label;
        secondFace.textContent = label;
        secondFace.setAttribute("aria-hidden", "true");

        track.append(firstFace, secondFace);
        mask.append(track);
        link.replaceChildren(mask);
        link.classList.add("text-roll");
      });

    document.querySelectorAll(".quiet-link, .arrow-link").forEach((link) => {
      link.addEventListener("pointermove", (event) => {
        const bounds = link.getBoundingClientRect();
        const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 7;
        const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 5;
        link.style.setProperty("--motion-x", `${x.toFixed(2)}px`);
        link.style.setProperty("--motion-y", `${y.toFixed(2)}px`);
      });

      link.addEventListener("pointerleave", () => {
        link.style.setProperty("--motion-x", "0px");
        link.style.setProperty("--motion-y", "0px");
      });
    });
  }

  const revealItems = document.querySelectorAll(".reveal");

  if (reducedMotion || !("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
  );

  revealItems.forEach((item) => observer.observe(item));
})();
