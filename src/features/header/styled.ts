import styled from 'styled-components';

import { LogoImage } from 'src/assets/images';
import { staticColors } from 'src/styles/variables';

export const Container = styled.header`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
`;

export const LogoContainer = styled.div`
  height: 100%;
  padding: 10px 0 10px 20px;
  display: flex;
  align-items: center;
`;

export const Logo = styled(LogoImage)`
  height: 40px;
  width: 40px;
`;

export const CompanyName = styled.span`
  margin-left: 10px;
  font-family: 'GT Walsheim v2 Manual';
  color: ${staticColors.black};
  font-size: 22px;
  font-weight: bold;
`;

export const StudentInfoBlock = styled.div`
  height: 100%;
  display: flex;

  > div {
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: center;

    :first-child {
      border-right: 1px solid ${staticColors.lightGray};
    }
  }
`;

export const StudentName = styled.p`
  font-family: 'GT Walsheim v2 Manual';
  font-size: 18px;
  line-height: 26px;
  color: ${staticColors.darkGrey};
`;

export const LogoutButton = styled.button`
  border: none;
  background: none;
  outline: none;
  cursor: pointer;
  font-family: 'GT Walsheim v2 Manual';
  font-size: 18px;
  line-height: 26px;
  color: ${staticColors.red};
`;
