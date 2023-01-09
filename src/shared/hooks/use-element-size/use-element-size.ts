import { useCallback, useEffect, useState } from 'react';

import { UseElementSizeResult } from 'src/shared/hooks/use-element-size/types';

function useElementSize<T extends HTMLElement>(): UseElementSizeResult<T> {
  const [size, setSize] = useState<{ width?: number; height?: number }>({
    width: undefined,
    height: undefined,
  });
  const [observer, setObserver] = useState<ResizeObserver>();

  const ref = useCallback((element: T) => {
    const resizeObserver = new ResizeObserver(() => {
      if (element) {
        const { width, height } = element.getBoundingClientRect();

        setSize({ width, height });
      }
    });

    setObserver(resizeObserver);

    if (element) {
      resizeObserver.observe(element);
    }
  }, []);

  useEffect(() => {
    return () => observer?.disconnect();
  }, [observer]);

  return { ref, width: size?.width, height: size?.height };
}

export default useElementSize;
