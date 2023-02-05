import styled from 'styled-components';

import { fontBodyXXL } from 'src/styles/typography';

export const Form = styled.form`
  width: 280px;

  > * {
    margin: 20px 0;
  }
`;

export const Title = styled.h1`
  text-align: center;
  ${fontBodyXXL}
`;
