import styled from 'styled-components';

import { fontBodyXXL } from 'src/styles/typography';

export const Form = styled.form`
  width: 280px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Title = styled.h1`
  text-align: center;
  ${fontBodyXXL}
`;
