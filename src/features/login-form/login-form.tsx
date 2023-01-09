import { yupResolver } from '@hookform/resolvers/yup';
import { observer } from 'mobx-react-lite';
import { useForm } from 'react-hook-form';
import { FieldValues } from 'react-hook-form';

import { schema } from 'src/features/login-form/constants';
import { Form, Title, Logo, LogoContainer, CompanyName } from 'src/features/login-form/styled';
import { LoginFormValues, FORM_VALUES } from 'src/features/login-form/types';
import { Button, Input } from 'src/shared/components';
import { useStore } from 'src/shared/hooks';
import { getError } from 'src/shared/utils';

const LoginForm: React.FC = observer(function LoginForm() {
  const { formState, register, handleSubmit } = useForm<LoginFormValues>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const { student } = useStore();

  function onSubmit(formData: FieldValues) {
    student.login(formData.name, formData.surname);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <LogoContainer>
        <Logo />
        <CompanyName>VISUAL TRAINER</CompanyName>
      </LogoContainer>

      <Title>Войти</Title>
      <Input
        label="Имя"
        register={register(FORM_VALUES.name)}
        errorMessage={getError(formState.errors, FORM_VALUES.name)}
      />
      <Input
        label="Фамилия"
        register={register(FORM_VALUES.surname)}
        errorMessage={getError(formState.errors, FORM_VALUES.surname)}
      />

      <Button disabled={!formState.isValid} buttonText="Войти" type="submit" />
    </Form>
  );
});

export default LoginForm;
