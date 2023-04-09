import styled from 'styled-components';

import { fontBodyXXL, fontBodyL } from 'src/styles/typography';
import { breakpoints, staticColors } from 'src/styles/variables';

export const ModalWrapper = styled.div`
  padding: 16px;
  background: ${staticColors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;

  @media (max-width: ${breakpoints.sm}) {
    padding: 8px;
  }
`;

export const Title = styled.h1`
  text-align: center;
  ${fontBodyXXL}
`;

export const Description = styled.p`
  ${fontBodyL}
`;
