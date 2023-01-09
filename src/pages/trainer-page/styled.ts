import styled from 'styled-components';

import { staticColors } from 'src/styles/variables';

export const PageContainer = styled.main`
  width: 100%;
  height: 100%;
  padding: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${staticColors.white};
`;
