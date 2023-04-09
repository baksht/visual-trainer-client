import styled from 'styled-components';

import { fontBodyXL } from 'src/styles/typography';
import { breakpoints, staticColors } from 'src/styles/variables';

export const Container = styled.header`
  width: 100%;
  height: 60px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);

  @media (max-width: ${breakpoints.sm}) {
    height: 40px;
  }
`;

export const StudentInfoBlock = styled.div`
  height: 100%;
  display: flex;
  float: right;

  @media (max-width: ${breakpoints.sm}) {
    width: 100%;
    justify-content: space-between;
  }

  > div {
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: ${breakpoints.sm}) {
      padding: 0 10px;
    }

    :first-child {
      border-right: 1px solid ${staticColors.lightGray};

      @media (max-width: ${breakpoints.sm}) {
        border: none;
      }
    }
  }
`;

export const StudentName = styled.p`
  color: ${staticColors.darkGrey};
  ${fontBodyXL}
`;

export const LogoutButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  color: ${staticColors.red};
  ${fontBodyXL}
`;
