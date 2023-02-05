import styled from 'styled-components';

import { fontBodyL, fontBodyM } from 'src/styles/typography';
import { staticColors } from 'src/styles/variables';

export const InputContainer = styled.div<{ isError?: boolean }>`
  width: 100%;
  height: 45px;
  padding: 10px;
  display: flex;
  align-items: center;
  border: 1px solid ${({ isError }) => (isError ? staticColors.pink : staticColors.blue)};
  background: ${({ isError }) => (isError ? staticColors.palePink : 'transparent')};
`;

export const InputField = styled.input`
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
  background: transparent;
  color: ${staticColors.black};
  ${fontBodyM}
`;

export const Label = styled.label`
  color: ${staticColors.black};
  ${fontBodyL}
`;

export const ErrorMessage = styled.p`
  margin: 0;
  color: ${staticColors.red};
  ${fontBodyM}
`;
