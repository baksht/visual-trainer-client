import * as yup from 'yup';

import { FORM_VALUES } from 'src/features/login-form/types';
import { getRequiredFieldMessage, getMaxStringLengthMessage } from 'src/shared/utils';

export const schema = yup.object().shape({
  [FORM_VALUES.name]: yup.string().required(getRequiredFieldMessage()).max(20, getMaxStringLengthMessage(20)),
  [FORM_VALUES.surname]: yup.string().required(getRequiredFieldMessage()).max(20, getMaxStringLengthMessage(20)),
});
