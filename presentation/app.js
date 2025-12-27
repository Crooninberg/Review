function markMediaMissing(fig, label) {
  if (!fig || fig.classList.contains("missing")) return;
  fig.classList.add("missing");
  const note = document.createElement("div");
  note.className = "missingNote";
  note.textContent = `${label}: media file not found (yet). Add it under archive_agent/public/assets/presentation/ and reload.`;
  fig.prepend(note);
}

function wireMediaErrors() {
  document.querySelectorAll("figure.media").forEach((fig) => {
    const img = fig.querySelector("img");
    const vid = fig.querySelector("video");
    const label = (vid && vid.dataset && vid.dataset.label) || (img && img.alt) || "Media";

    if (img) {
      img.addEventListener("error", () => markMediaMissing(fig, label), { once: true });
    }
    if (vid) {
      vid.addEventListener("error", () => markMediaMissing(fig, label), { once: true });
      // If there’s no <source> or browser can’t load it, this will fire on play sometimes; still useful.
      vid.addEventListener("stalled", () => {
        // don’t flip to missing if the user hasn’t tried to load it yet
        if (vid.currentSrc) return;
        markMediaMissing(fig, label);
      }, { once: true });
    }
  });
}

wireMediaErrors();


