"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import type { HeaderTone } from "@/lib/detect-header-tone";

const SCROLL_THRESHOLD = 24;

type HeaderScrollContextValue = {
  scrolled: boolean;
  pinned: boolean;
  setPinned: (pinned: boolean) => void;
  tone: HeaderTone;
  setTone: (tone: HeaderTone) => void;
};

const HeaderScrollContext = createContext<HeaderScrollContextValue>({
  scrolled: false,
  pinned: false,
  setPinned: () => {},
  tone: "dark",
  setTone: () => {},
});

export function useHeaderScrolled() {
  return useContext(HeaderScrollContext).scrolled;
}


export function useHeaderPinned() {
  return useContext(HeaderScrollContext).pinned;
}

export function useSetHeaderPinned() {
  return useContext(HeaderScrollContext).setPinned;
}

export function useHeaderTone() {
  return useContext(HeaderScrollContext).tone;
}

export function useSetHeaderTone() {
  return useContext(HeaderScrollContext).setTone;
}

export function useHeaderOffset() {
  const pinned = useHeaderPinned();
  return pinned ? 96 : 132;
}

type HeaderShellProps = {
  children: ReactNode;
};

export function HeaderShell({ children }: HeaderShellProps) {
  const [scrolled, setScrolled] = useState(false);
  const [pinned, setPinned] = useState(false);
  const [tone, setTone] = useState<HeaderTone>("dark");

  useEffect(() => {
    const update = () => {
      setScrolled(window.scrollY > SCROLL_THRESHOLD);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <HeaderScrollContext.Provider
      value={{ scrolled, pinned, setPinned, tone, setTone }}
    >
      <header className="w-full">{children}</header>
    </HeaderScrollContext.Provider>
  );
}
