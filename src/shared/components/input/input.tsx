import { observer } from 'mobx-react-lite';

import { InputContainer, InputField, Label, ErrorMessage } from 'src/shared/components/input/styled';
import { Props } from 'src/shared/components/input/types';
import { hasValue } from 'src/shared/utils';

const Input: React.FC<Props> = observer(function Input(props) {
  const { label, icon, register, errorMessage, ...rest } = props;

  return (
    <div>
      {label && <Label>{label}</Label>}
      <InputContainer isError={hasValue(errorMessage)}>
        <InputField {...register} {...rest} />
      </InputContainer>
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </div>
  );
});

export default Input;
