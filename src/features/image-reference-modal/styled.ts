import styled from 'styled-components';

import { breakpoints, staticColors } from 'src/styles/variables';

export const ModalWrapper = styled.div`
  padding: 20px;
  background: ${staticColors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: ${breakpoints.sm}) {
    padding: 10px;
  }
`;

export const ImagesContainer = styled.div<{ columnCount: number; size: number }>`
  display: grid;
  grid-template-columns: repeat(${({ columnCount }) => columnCount}, 1fr);
  grid-template-rows: repeat(${({ columnCount }) => columnCount}, 1fr);
  margin-bottom: 16px;

  img {
    height: ${({ size, columnCount }) => size / columnCount}px;
  }

  @media (max-width: ${breakpoints.sm}) {
    img {
      height: ${({ size, columnCount }) => size / columnCount - 20}px;
    }
  }
`;
