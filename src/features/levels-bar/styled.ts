import styled from 'styled-components';

import { fontBodyM } from 'src/styles/typography';
import { staticColors } from 'src/styles/variables';

export const Container = styled.ol<{ width: number }>`
  height: 24px;
  width: ${({ width }) => width}px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LevelItem = styled.li<{ isSelected: boolean }>`
  height: 100%;
  width: 24px;
  list-style-type: none;
  background: ${staticColors.blue};
  background: ${({ isSelected }) => (isSelected ? staticColors.blue : staticColors.grey)};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${staticColors.white};
  ${fontBodyM}
`;
