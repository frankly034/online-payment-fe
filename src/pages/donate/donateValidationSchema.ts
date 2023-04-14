import * as Yup from 'yup';

const donateValidationSchema = Yup.object({
  name: Yup.string().min(3, 'Must be 3 characters or more').required('Field is required'),
  amount: Yup.number().min(100, 'Should be at least 100').required('Field is required'),
  email: Yup.string().email('Invalid email address').required('Field is required'),
});

export default donateValidationSchema;
