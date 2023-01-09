import styled, { css, keyframes } from 'styled-components';

import { LoaderSize } from 'src/shared/components/loader/types';
import { staticColors } from 'src/styles/variables';

const sizes = {
  small: css`
    width: 50px;
    height: 50px;
    grid-gap: 1px;
  `,

  default: css`
    width: 100px;
    height: 100px;
    grid-gap: 2px;
  `,

  large: css`
    width: 200px;
    height: 200px;
    grid-gap: 4px;
  `,
};

const PreloaderAnimation = keyframes`
  0% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
  80% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
`;

export const Wrapper = styled.div<{ size: LoaderSize }>`
  position: relative;
  display: grid;
  grid-template-columns: 33% 33% 33%;
  ${({ size }) => sizes[size]};

  > div {
    position: relative;
    width: 100%;
    height: 100%;
    background: ${staticColors.blue};
    transform: scale(0);
    transform-origin: center center;
    animation: ${PreloaderAnimation} 2s infinite linear;

    &:nth-of-type(1),
    &:nth-of-type(5),
    &:nth-of-type(9) {
      animation-delay: 400ms;
    }

    &:nth-of-type(4),
    &:nth-of-type(8) {
      animation-delay: 200ms;
    }

    &:nth-of-type(2),
    &:nth-of-type(6) {
      animation-delay: 600ms;
    }

    &:nth-of-type(3) {
      animation-delay: 800ms;
    }
  }
`;
