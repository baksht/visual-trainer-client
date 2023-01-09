import styled from 'styled-components';

import { staticColors, transitionMs } from 'src/styles/variables';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 -10px 0 -10px;

  > * {
    margin: 0 10px;
  }
`;

export const Blur = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${staticColors.blue};
  opacity: 0.3;
  position: absolute;
`;

export const ArrowButton = styled.button<{ variant: 'left' | 'right' }>`
  background: ${staticColors.blue};
  width: 100px;
  height: 100px;
  border: none;
  outline: none;
  cursor: pointer;
  clip-path: ${({ variant }) =>
    variant === 'left' ? 'polygon(100% 0, 100% 100%, 50% 50%)' : 'polygon(0 0, 0 100%, 50% 50%)'};

  &[disabled] {
    background-color: ${staticColors.grey};
    cursor: not-allowed;
  }
`;

export const CurrentImageContainer = styled.div<{ isDragging: boolean; isOver: boolean; imageSize: number }>`
  width: ${({ imageSize }) => imageSize}px;
  height: ${({ imageSize }) => imageSize}px;
  background-color: ${staticColors.grey};
  position: relative;

  img {
    transition: ${transitionMs}ms;
    opacity: ${({ isDragging }) => (isDragging ? 0 : 1)};
  }
`;
