"use strict";

const projectDetails = {
  morrow: {
    category: "PROJECT / BRAND IDENTITY",
    title: "Morrow Skin",
    summary: "A calm, tactile identity for everyday skincare rituals.",
    scope: "Strategy, identity, packaging",
    focus: "Warmth, simplicity, trust",
    description: "Morrow is a fictional skincare brand built around making daily care feel slower and more considered. The visual system pairs warm mineral colors with editorial typography and clear product labels. The result is a flexible identity designed to feel premium without feeling precious.",
    artClass: "visual-morrow"
  },
  fray: {
    category: "PROJECT / EDITORIAL",
    title: "Fray Journal",
    summary: "An independent journal celebrating the beauty of work in progress.",
    scope: "Art direction, editorial design",
    focus: "Contrast, rhythm, texture",
    description: "Fray explores the moments between finished ideas. A confident serif wordmark, expressive crops, and a considered grid give the publication a recognizable point of view while leaving room for every issue to feel different. The concept extends across print covers, digital teasers, and social assets.",
    artClass: "visual-fray"
  },
  loop: {
    category: "PROJECT / IDENTITY + DIGITAL",
    title: "Loop Community",
    summary: "A bright, optimistic identity for people making change together.",
    scope: "Brand identity, digital direction",
    focus: "Connection, energy, flexibility",
    description: "Loop is a concept for a community-led platform that helps neighbors share skills and resources. Interlocking shapes represent the value of showing up for one another. The modular system works across a web experience, event materials, and a toolkit for local organizers.",
    artClass: "visual-loop"
  },
  forma: {
    category: "PROJECT / CAMPAIGN",
    title: "Forma Objects",
    summary: "A still-life campaign for objects that make a room feel personal.",
    scope: "Campaign concept, art direction",
    focus: "Material, silhouette, light",
    description: "Forma is a fictional homeware collection inspired by sculptural shapes and natural materials. The campaign uses soft color, quiet compositions, and a restrained typographic voice to let the objects take center stage. The art direction is designed to scale from a launch lookbook to product pages and social content.",
    artClass: "visual-forma"
  }
};

const dialog = document.querySelector("#project-dialog");
const closeDialogButton = document.querySelector(".dialog-close");
const dialogContactButton = document.querySelector(".dialog-contact");
let previouslyFocusedElement = null;

function openProject(projectId, trigger) {
  const project = projectDetails[projectId];
  if (!project || !dialog) return;

  previouslyFocusedElement = trigger;
  document.querySelector("#dialog-category").textContent = project.category;
  document.querySelector("#dialog-title").textContent = project.title;
  document.querySelector("#dialog-summary").textContent = project.summary;
  document.querySelector("#dialog-scope").textContent = project.scope;
  document.querySelector("#dialog-focus").textContent = project.focus;
  document.querySelector("#dialog-description").textContent = project.description;

  const art = document.querySelector("#dialog-art");
  art.className = `dialog-art ${project.artClass}`;
  art.replaceChildren();
  const mark = document.createElement("span");
  mark.append("AS");
  const dot = document.createElement("span");
  dot.textContent = ".";
  mark.append(dot);
  art.append(mark);

  dialog.showModal();
  document.body.classList.add("dialog-open");
  closeDialogButton?.focus();
}

function closeProjectDialog() {
  if (!dialog?.open) return;
  dialog.close();
  document.body.classList.remove("dialog-open");
  previouslyFocusedElement?.focus();
}

document.querySelectorAll("[data-project]").forEach((button) => {
  button.addEventListener("click", () => openProject(button.dataset.project, button));
});
closeDialogButton?.addEventListener("click", closeProjectDialog);
dialogContactButton?.addEventListener("click", () => {
  closeProjectDialog();
  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  window.setTimeout(() => document.querySelector("#name")?.focus({ preventScroll: true }), 350);
});

dialog?.addEventListener("click", (event) => {
  if (event.target === dialog) closeProjectDialog();
});
dialog?.addEventListener("close", () => document.body.classList.remove("dialog-open"));

// The form uses the visitor's email app; this static site has no form backend.
const contactForm = document.querySelector("#contact-form");
const formStatus = document.querySelector("#form-status");
contactForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!contactForm.reportValidity()) return;

  const formData = new FormData(contactForm);
  const name = String(formData.get("name") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const type = String(formData.get("project-type") || "").trim();
  const message = String(formData.get("message") || "").trim();
  const subject = encodeURIComponent(`Portfolio inquiry — ${type}`);
  const body = encodeURIComponent(`Hi Alex,\n\n${message}\n\nBest,\n${name}\n${email}`);
  const recipient = "hello@alexstyles.design"; // Replace with the portfolio owner's real email before publishing.

  formStatus.textContent = "Your email app should open with your message ready. The demo site does not send it automatically.";
  formStatus.classList.add("is-success");
  window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
});

// Reveal content when it enters the viewport, without hiding it if observers are unavailable.
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if ("IntersectionObserver" in window && !prefersReducedMotion) {
  document.documentElement.classList.add("js-reveal");
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        currentObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -35px 0px" });

  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
}

document.querySelector("#year").textContent = String(new Date().getFullYear());
