import styled from 'styled-components';

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
  font-family: 'GT Walsheim v2 Manual';
  font-size: 14px;
  line-height: 20px;
  background: transparent;
  color: ${staticColors.black};
`;

export const Label = styled.label`
  font-family: GT Walsheim v2 Manual;
  font-size: 16px;
  line-height: 20px;
  color: ${staticColors.black};
`;

export const ErrorMessage = styled.p`
  font-family: GT Walsheim v2 Manual;
  margin: 0;
  font-size: 14px;
  line-height: 20px;
  color: ${staticColors.red};
`;
