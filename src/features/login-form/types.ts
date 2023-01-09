export enum FORM_VALUES {
  name = 'name',
  surname = 'surname',
}

export type LoginFormValues = {
  [FORM_VALUES.name]: string;
  [FORM_VALUES.surname]: string;
};
