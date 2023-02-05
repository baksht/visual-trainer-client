import styled from 'styled-components';

export const ModalContainer = styled.div<{ transitionDuration: number; isOpened?: boolean }>`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  transition: ${({ transitionDuration }) => transitionDuration}ms;
  opacity: ${({ isOpened }) => (isOpened ? 1 : 0)};
`;
