import styled from 'styled-components';

import { staticColors, transitionMs } from 'src/styles/variables';

export const ButtonContainer = styled.button`
  width: 100%;
  height: 45px;
  border: none;
  background-color: ${staticColors.blue};
  transition: ${transitionMs}ms;
  cursor: pointer;
  color: ${staticColors.white};
  font-family: GT Walsheim v2 Manual;
  font-size: 14px;
  line-height: 20px;

  &[disabled] {
    background-color: ${staticColors.grey};
    cursor: not-allowed;
  }
`;
