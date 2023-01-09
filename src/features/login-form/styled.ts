import styled from 'styled-components';

import { LogoImage } from 'src/assets/images';
import { staticColors } from 'src/styles/variables';

export const Form = styled.form`
  width: 280px;

  > * {
    margin: 20px 0;
  }
`;

export const LogoContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 70px;
`;

export const Logo = styled(LogoImage)`
  height: 40px;
  width: 40px;
`;

export const CompanyName = styled.span`
  margin-left: 10px;
  font-family: 'GT Walsheim v2 Manual';
  color: ${staticColors.black};
  font-size: 24px;
  font-weight: bold;
`;

export const Title = styled.h1`
  text-align: center;
  font-family: 'GT Walsheim v2 Manual';
  font-size: 30px;
  line-height: 26px;
`;
