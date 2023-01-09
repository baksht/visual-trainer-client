import styled from 'styled-components';

import { staticColors, breakpoints } from 'src/styles/variables';

export const LayoutWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ContentWrapper = styled.div`
  height: 100%;
  padding: 20px;
  background: ${staticColors.lightGray};

  @media (max-width: ${breakpoints.sm}) {
    padding: 10px;
    background-color: ${staticColors.white};
  }
`;
