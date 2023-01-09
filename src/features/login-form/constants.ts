import * as yup from 'yup';

import { FORM_VALUES } from 'src/features/login-form/types';
import { getRequiredField, maxStringLength } from 'src/shared/utils';

export const schema = yup.object().shape({
  [FORM_VALUES.name]: yup.string().required(getRequiredField()).max(20, maxStringLength(20)),
  [FORM_VALUES.surname]: yup.string().required(getRequiredField()).max(20, maxStringLength(20)),
});
