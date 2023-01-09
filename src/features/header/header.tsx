import { observer } from 'mobx-react-lite';

import {
  Container,
  StudentInfoBlock,
  StudentName,
  LogoutButton,
  Logo,
  LogoContainer,
  CompanyName,
} from 'src/features/header/styled';
import { useStore } from 'src/shared/hooks';

const Header: React.FC = observer(function Header() {
  const { student } = useStore();

  return (
    <Container>
      <LogoContainer>
        <Logo />
        <CompanyName>VISUAL TRAINER</CompanyName>
      </LogoContainer>
      <StudentInfoBlock>
        <div>
          <StudentName>{student.fullName}</StudentName>
        </div>
        <div>
          <LogoutButton onClick={student.logout}>Выйти</LogoutButton>
        </div>
      </StudentInfoBlock>
    </Container>
  );
});

export default Header;
