import { observer } from 'mobx-react-lite';
import { useEffect, useLayoutEffect, useState, useRef } from 'react';
import { createPortal } from 'react-dom';

import { ModalContainer } from 'src/shared/components/modal/styled';
import { Props } from 'src/shared/components/modal/types';
import { transitionMs } from 'src/styles/variables';

const Modal = observer(function Modal({ transitionDuration = transitionMs, isOpened, children }: Props) {
  const [container] = useState<HTMLDivElement>(() => document.createElement('div'));
  const [isContainerMounted, setIsContainerMounted] = useState<boolean>(false);
  const [isModalOpened, setIsModalOpened] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (isOpened) {
      document.body.appendChild(container);
      setIsContainerMounted(true);
      return;
    }

    if (!isContainerMounted) return;
    const timer = setTimeout(() => {
      container.remove();
    }, transitionDuration);

    return () => clearTimeout(timer);
  }, [isContainerMounted, transitionDuration, container, isOpened]);

  useEffect(() => {
    if (isOpened && isContainerMounted) {
      window.requestAnimationFrame(() => {
        setIsModalOpened(true);
      });
      return;
    }

    if (!isOpened && isContainerMounted) {
      window.requestAnimationFrame(() => {
        setIsModalOpened(false);
      });
    }
  }, [isOpened, isContainerMounted]);

  return createPortal(
    <ModalContainer ref={containerRef} transitionDuration={transitionDuration} isOpened={isModalOpened}>
      {children}
    </ModalContainer>,
    container
  );
});

export default Modal;
