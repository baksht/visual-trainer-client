import styled from 'styled-components';

import { staticColors } from 'src/styles/variables';

export const Container = styled.ul<{ columnCount: number; size: number }>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  background: ${staticColors.white};
  display: grid;
  grid-template-columns: repeat(${({ columnCount }) => columnCount}, 1fr);
  grid-template-rows: repeat(${({ columnCount }) => columnCount}, 1fr);
  grid-gap: 2px;
`;
