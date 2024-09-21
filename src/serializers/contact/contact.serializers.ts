import * as yup from 'yup';

const contactSerializer = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  phone: yup.string().required(),
});

export { contactSerializer };
