import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MASK_STYLE: React.CSSProperties = {
  display: "inline-block",
  overflow: "hidden",
  verticalAlign: "bottom",
  lineHeight: "inherit",
};

function splitChars(el: HTMLElement) {
  const text = el.textContent ?? "";
  el.textContent = "";
  const chars: HTMLElement[] = [];
  for (const ch of text) {
    if (ch === " ") {
      el.appendChild(document.createTextNode(" "));
      continue;
    }
    const mask = document.createElement("span");
    Object.assign(mask.style, MASK_STYLE);
    const inner = document.createElement("span");
    inner.style.display = "inline-block";
    inner.style.willChange = "transform, opacity";
    inner.textContent = ch;
    mask.appendChild(inner);
    el.appendChild(mask);
    chars.push(inner);
  }
  return chars;
}

function splitWords(el: HTMLElement) {
  const words: HTMLElement[] = [];
  const walk = (node: Node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      const text = node.textContent ?? "";
      if (!text.trim()) return;
      const frag = document.createDocumentFragment();
      const parts = text.split(/(\s+)/);
      parts.forEach((p) => {
        if (!p) return;
        if (/^\s+$/.test(p)) {
          frag.appendChild(document.createTextNode(p));
          return;
        }
        const mask = document.createElement("span");
        Object.assign(mask.style, MASK_STYLE);
        const inner = document.createElement("span");
        inner.style.display = "inline-block";
        inner.style.willChange = "transform";
        inner.textContent = p;
        mask.appendChild(inner);
        frag.appendChild(mask);
        words.push(inner);
      });
      node.parentNode?.replaceChild(frag, node);
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      Array.from(node.childNodes).forEach(walk);
    }
  };
  walk(el);
  return words;
}

export function MotionLayer({ children }: { children: React.ReactNode }) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const q = <T extends Element = HTMLElement>(sel: string, ctx: ParentNode = root) =>
      ctx.querySelector<T>(sel);
    const qa = <T extends Element = HTMLElement>(sel: string, ctx: ParentNode = root) =>
      Array.from(ctx.querySelectorAll<T>(sel));

    const triggers: ScrollTrigger[] = [];
    const tweens: gsap.core.Tween[] = [];

    const heroTitle = q<HTMLElement>('[data-name="Hero Title"]');
    let heroChars: HTMLElement[] = [];
    if (heroTitle) {
      const lines = qa<HTMLElement>(":scope > p", heroTitle);
      lines.forEach((line) => { heroChars.push(...splitChars(line)); });
    }
    if (heroChars.length) {
      tweens.push(gsap.from(heroChars, { yPercent: 110, opacity: 0, duration: 1.2, ease: "expo.out", stagger: 0.028, delay: 0.25 }));
    }

    const revealTargets: HTMLElement[] = [];
    const metaRow = q<HTMLElement>('[data-name="Hero"] [data-name="Meta Row"]');
    const copy = q<HTMLElement>('[data-name="Hero"] [data-name="Copy"]');
    if (metaRow) revealTargets.push(metaRow);
    if (copy) revealTargets.push(copy);
    if (revealTargets.length) {
      tweens.push(gsap.from(revealTargets, { opacity: 0, y: 28, duration: 1, ease: "expo.out", stagger: 0.12, delay: 0.9 }));
      tweens.push(gsap.to(revealTargets, { opacity: 1, y: 0, duration: 0.01, delay: 2 }));
    }

    const hero = q<HTMLElement>('[data-name="Hero"]');
    let heroMark: HTMLElement | null = null;
    if (hero) {
      const candidates = qa<HTMLElement>(":scope > div > p.absolute, :scope p.absolute", hero);
      heroMark = candidates[candidates.length - 1] ?? null;
    }
    if (heroMark) {
      heroMark.style.transformOrigin = "50% 50%";
      tweens.push(gsap.fromTo(heroMark, { rotate: -20, scale: 0.7, opacity: 0 }, { rotate: 0, scale: 1, opacity: 0.95, duration: 1.4, ease: "expo.out", delay: 0.9 }));
      tweens.push(gsap.to(heroMark, { rotate: "+=360", duration: 28, ease: "none", repeat: -1, delay: 2.3 }));
    }

    const marqueeRow = q<HTMLElement>('[data-name="Marquee Items"]');
    if (marqueeRow) {
      marqueeRow.style.willChange = "transform";
      const distance = marqueeRow.scrollWidth / 2;
      if (distance > 0) {
        tweens.push(gsap.to(marqueeRow, { x: -distance, duration: 38, ease: "none", repeat: -1, modifiers: { x: (x) => { const v = parseFloat(x); return `${v % -distance}px`; } } }));
      }
    }

    const manifesto = q<HTMLElement>('[data-name="Text stage"] [data-name="Right"] > div:first-child');
    if (manifesto) {
      const words = splitWords(manifesto);
      if (words.length) {
        triggers.push(ScrollTrigger.create({ trigger: manifesto, start: "top 75%", once: true, onEnter: () => { gsap.from(words, { yPercent: 115, duration: 1.1, ease: "expo.out", stagger: 0.035 }); } }));
      }
    }

    const quote = q<HTMLElement>('[data-name="Testimonial"] [data-name="Main"] > div:first-child');
    if (quote) {
      gsap.set(quote, { opacity: 0, y: 40 });
      triggers.push(ScrollTrigger.create({ trigger: quote, start: "top 78%", once: true, onEnter: () => { gsap.to(quote, { opacity: 1, y: 0, duration: 1.2, ease: "expo.out" }); } }));
    }

    const metrics = qa<HTMLElement>('[data-name="Stats"] [data-name="Metric"]');
    metrics.forEach((metric) => {
      const valueEl = metric.querySelector<HTMLElement>('[data-name="Value Row"] > p:first-child');
      if (!valueEl) return;
      const raw = (valueEl.textContent ?? "").trim();
      const target = parseInt(raw, 10);
      if (Number.isNaN(target)) return;
      valueEl.textContent = "0";
      triggers.push(ScrollTrigger.create({ trigger: metric, start: "top 85%", once: true, onEnter: () => { const obj = { v: 0 }; gsap.to(obj, { v: target, duration: 1.8, ease: "expo.out", onUpdate: () => { valueEl.textContent = String(Math.round(obj.v)); } }); } }));
    });

    const cardsList = q<HTMLElement>('[data-name="Cards list"]');
    if (cardsList) {
      cardsList.classList.add("forma-hscroll");
      cardsList.style.width = "100%";
      cardsList.style.maxWidth = "100%";
      cardsList.style.overflowX = "auto";
      cardsList.style.overflowY = "hidden";
      cardsList.style.paddingBottom = "16px";
      (cardsList.style as CSSStyleDeclaration & { overscrollBehaviorX: string }).overscrollBehaviorX = "contain";
      if (!document.getElementById("forma-hscroll-style")) {
        const style = document.createElement("style");
        style.id = "forma-hscroll-style";
        style.textContent = `.forma-hscroll{scrollbar-color:#0a0a0a rgba(10,10,10,0.08);scrollbar-width:thin;}.forma-hscroll::-webkit-scrollbar{height:6px;background:transparent;}.forma-hscroll::-webkit-scrollbar-track{background:rgba(10,10,10,0.06);border-radius:999px;margin:0 40px;}.forma-hscroll::-webkit-scrollbar-thumb{background:#0a0a0a;border-radius:999px;transition:background 0.3s cubic-bezier(.16,1,.3,1);}.forma-hscroll::-webkit-scrollbar-thumb:hover{background:#d4ff00;}`;
        document.head.appendChild(style);
      }
    }

    const sections = qa<HTMLElement>(":scope > div > [data-name]", root).filter((el) => {
      const name = el.getAttribute("data-name");
      return name && ["Marquee", "Teaser row", "Text stage", "Stats", "Testimonial", "Card row", "Contact teaser", "Footer"].includes(name);
    });
    sections.forEach((section) => {
      const targets = qa<HTMLElement>('h1, h2, h3, p, blockquote, img, [data-name="Eyebrow"]', section);
      if (!targets.length) return;
      triggers.push(ScrollTrigger.create({ trigger: section, start: "top 80%", once: true, onEnter: () => { gsap.from(targets, { opacity: 0, y: 24, duration: 1, ease: "expo.out", stagger: 0.04 }); } }));
    });

    const workCards = qa<HTMLElement>('[data-name="Work Card"]');
    const cleanupHover: Array<() => void> = [];
    workCards.forEach((card) => {
      const media = card.querySelector<HTMLElement>('[data-name^="Device="]');
      if (!media) return;
      media.style.transition = "transform 1.4s cubic-bezier(.16,1,.3,1)";
      media.style.transformOrigin = "50% 50%";
      const enter = () => (media.style.transform = "scale(1.04)");
      const leave = () => (media.style.transform = "scale(1)");
      card.addEventListener("mouseenter", enter);
      card.addEventListener("mouseleave", leave);
      cleanupHover.push(() => { card.removeEventListener("mouseenter", enter); card.removeEventListener("mouseleave", leave); });
    });

    const heroCta = q<HTMLElement>('[data-name="Hero"] [data-name="Actions"] [data-name="Button"]');
    const well = heroCta?.querySelector<HTMLElement>('[data-name="Trailing Well"]');
    if (heroCta && well) {
      well.style.transition = "transform 0.5s cubic-bezier(.16,1,.3,1)";
      const enter = () => (well.style.transform = "rotate(45deg)");
      const leave = () => (well.style.transform = "rotate(0deg)");
      heroCta.addEventListener("mouseenter", enter);
      heroCta.addEventListener("mouseleave", leave);
      cleanupHover.push(() => { heroCta.removeEventListener("mouseenter", enter); heroCta.removeEventListener("mouseleave", leave); });
    }

    const navCta = q<HTMLElement>('[data-name="Header"] [data-name="Button"]');
    if (navCta) {
      const label = navCta.querySelector<HTMLElement>("p");
      navCta.style.transition = "background-color 0.35s cubic-bezier(.16,1,.3,1)";
      if (label) label.style.transition = "color 0.35s cubic-bezier(.16,1,.3,1)";
      const enter = () => { navCta.style.backgroundColor = "#D4FF00"; if (label) label.style.color = "#0A0A0A"; };
      const leave = () => { navCta.style.backgroundColor = "#0a0a0a"; if (label) label.style.color = "#f4f1ec"; };
      navCta.addEventListener("mouseenter", enter);
      navCta.addEventListener("mouseleave", leave);
      cleanupHover.push(() => { navCta.removeEventListener("mouseenter", enter); navCta.removeEventListener("mouseleave", leave); });
    }

    ScrollTrigger.refresh();

    return () => {
      tweens.forEach((t) => t.kill());
      triggers.forEach((t) => t.kill());
      cleanupHover.forEach((fn) => fn());
    };
  }, []);

  return (<div ref={rootRef} className="size-full">{children}</div>);
}
