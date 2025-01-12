import { useEffect, useState } from 'react';
import tailwindConfig from '../../../tailwind.config';

type Screens = typeof tailwindConfig.theme.extend.screens;
type BreakpointKey = keyof Screens;

export const useMediaQuery = (breakpoint: BreakpointKey, direction: 'up' | 'down' = 'up') => {
  const screens = tailwindConfig.theme.extend.screens as Screens;
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const value = screens[breakpoint];
    const mediaQuery = direction === 'up' 
      ? `(min-width: ${value})`
      : `(max-width: ${value})`;

    const mediaQueryList = window.matchMedia(mediaQuery);
    setMatches(mediaQueryList.matches);

    const listener = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    mediaQueryList.addEventListener('change', listener);
    return () => mediaQueryList.removeEventListener('change', listener);
  }, [breakpoint, direction, screens]);

  return matches;
}; 