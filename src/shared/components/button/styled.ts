import styled from 'styled-components';

import { fontBodyL } from 'src/styles/typography';
import { staticColors, transitionMs } from 'src/styles/variables';

export const ButtonContainer = styled.button`
  width: 100%;
  height: 45px;
  border: none;
  background-color: ${staticColors.blue};
  transition: ${transitionMs}ms;
  cursor: pointer;
  color: ${staticColors.white};
  ${fontBodyL}

  &[disabled] {
    background-color: ${staticColors.grey};
    cursor: not-allowed;
  }
`;
