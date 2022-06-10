import { useState } from 'react';

import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect';

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme
 */
export type ColorScheme = 'light' | 'dark';

export  function usePrefersColorScheme(defaultScheme: ColorScheme = 'light'): ColorScheme {
  const [scheme, setScheme] = useState(defaultScheme);

  useIsomorphicLayoutEffect(() => {
    const mediaQueryList = window.matchMedia('(prefers-color-scheme: dark)');

    if (mediaQueryList.matches) {
      setScheme('dark');
    }

    const handleChange = (event: MediaQueryListEvent) => {
      setScheme(event.matches ? 'dark' : 'light');
    };

    mediaQueryList.addEventListener('change', handleChange);

    return () => {
      mediaQueryList.removeEventListener('change', handleChange);
    };
  }, []);

  return scheme;
}
