import { useEffect, useState, useRef } from 'react';

export default function useNearScreen() {
  const element = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const { isIntersecting } = entries[0];
      if (isIntersecting) {
        setShow(true);
        observer.disconnect();
      }
    });

    observer.observe(element.current);
  }, [element]);

  return [show, element];
}
