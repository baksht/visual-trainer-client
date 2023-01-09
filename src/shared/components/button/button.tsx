import { observer } from 'mobx-react-lite';

import { ButtonContainer } from 'src/shared/components/button/styled';
import { Props } from 'src/shared/components/button/types';

const Button: React.FC<Props> = observer(function Button(props) {
  const { disabled, buttonText, ...rest } = props;

  return (
    <ButtonContainer disabled={disabled} {...rest}>
      {buttonText}
    </ButtonContainer>
  );
});

export default Button;
