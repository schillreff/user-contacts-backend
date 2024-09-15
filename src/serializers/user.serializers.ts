import * as yup from 'yup';

const userSerializer = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  phone: yup.string().required(),
  password: yup.string().required(),
});

const sessionUserSerializer = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

export { userSerializer, sessionUserSerializer };
