export type HeaderTone = "light" | "dark";

const LUMINANCE_THRESHOLD = 140;

function parseRgb(color: string): [number, number, number] | null {
  const match = color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
  if (!match) return null;
  return [Number(match[1]), Number(match[2]), Number(match[3])];
}

function luminance(r: number, g: number, b: number): number {
  return 0.299 * r + 0.587 * g + 0.114 * b;
}

export function resolveHeaderTone(element: Element | null): HeaderTone {
  let node: Element | null = element;

  while (node && node !== document.documentElement) {
    const dataTone = node.getAttribute("data-header-tone");
    if (dataTone === "light" || dataTone === "dark") return dataTone;

    const bg = getComputedStyle(node).backgroundColor;
    if (bg && bg !== "rgba(0, 0, 0, 0)" && bg !== "transparent") {
      const rgb = parseRgb(bg);
      if (rgb) {
        return luminance(...rgb) > LUMINANCE_THRESHOLD ? "light" : "dark";
      }
    }

    node = node.parentElement;
  }

  return "dark";
}

export function detectHeaderTone(nav: HTMLElement): HeaderTone {
  const rect = nav.getBoundingClientRect();
  const x = Math.round(rect.left + rect.width / 2);
  const y = Math.round(rect.top + rect.height / 2);

  const prevPointerEvents = nav.style.pointerEvents;
  nav.style.pointerEvents = "none";
  const behind = document.elementFromPoint(x, y);
  nav.style.pointerEvents = prevPointerEvents;

  return resolveHeaderTone(behind);
}
