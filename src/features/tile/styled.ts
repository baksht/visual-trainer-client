import styled from 'styled-components';

import { transitionMs, staticColors } from 'src/styles/variables';

export const TileContainer = styled.li<{ isOver: boolean }>`
  width: 100%;
  height: 100%;
  background-color: ${staticColors.grey};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: ${transitionMs}ms;
  position: relative;
`;

export const Blur = styled.div<{ isAllowed: boolean }>`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${({ isAllowed }) => (isAllowed ? staticColors.blue : staticColors.red)};
  opacity: 0.3;
  position: absolute;
`;
