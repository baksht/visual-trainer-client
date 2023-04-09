import styled from 'styled-components';

import { staticColors } from 'src/styles/variables';

export const PageContainer = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${staticColors.white};
`;

export const StartTrainingBlock = styled.div`
  width: 280px;
`;
