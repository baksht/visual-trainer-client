import styled from 'styled-components';

import { staticColors, transitionMs } from 'src/styles/variables';

export const Container = styled.div<{ isShown: boolean; width: number }>`
  height: 16px;
  border-radius: 10px;
  transition: ${transitionMs}ms;
  width: ${({ width }) => width}px;
  background: ${staticColors.grey};
  opacity: ${({ isShown }) => (isShown ? 1 : 0)};
`;

export const ProgressLine = styled.div<{ percent: number }>`
  height: 100%;
  width: ${({ percent }) => percent}%;
  background: ${staticColors.blue};
  border-radius: 10px;
  transition: ${transitionMs}ms;
`;
