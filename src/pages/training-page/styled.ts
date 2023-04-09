import styled from 'styled-components';

import { staticColors } from 'src/styles/variables';

export const PageContainer = styled.main<{ isLoading: boolean }>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ${({ isLoading }) => (isLoading ? 'center' : 'space-between')};
  background: ${staticColors.white};
  padding: 32px 0;
  touch-action: none;
`;
