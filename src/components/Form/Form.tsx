import { styled } from 'styled-components'
import arrow from '../../images/icon-arrow.svg'
import { FormProps, IDate } from '../../types/types';
import { useForm, SubmitHandler } from 'react-hook-form';
import AgeCalc from '../../utils/script';

const FormStyled = styled.form`
  display: flex;
  gap: 32px;
  padding-bottom: 48px;
  border-bottom: 1px solid hsl(0, 0%, 86%);
  position: relative;
`;

const Button = styled.button`
  width: 97px;
  height: 97px;
  position: absolute;
  right: 0;
  bottom: -48.5px;
  border: none;
  border-radius: 50%;
  background: hsl(259, 100%, 65%);
  cursor: pointer;
`;

const Input = styled.input`
  box-sizing: border-box;
  width: 160px;
  height: 72px;
  border-radius: 7px;
  border: 1px solid hsl(0, 0%, 86%);
  font-size: 30px;
  font-weight: 800;
  padding-left: 24px;
  letter-spacing: -2.4px;
`
const Label = styled.label`
  display: block;
  font-weight: 700;
  font-size: 15px;
  margin-bottom: 8px;
  letter-spacing: 2.5px;
  color: hsl(0, 1%, 44%);
`;

const Error = styled.span`
  display: block;
  color: red;
  font-size: 13px;
`;

const Form: React.FC<FormProps> = ({ setResult }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IDate>({
    mode: "onSubmit",
  })
  const onSubmit: SubmitHandler<IDate> = (data) => {
    setResult(AgeCalc(data));
  }



  const todayYear = new Date().getFullYear()
  return (
    <FormStyled onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Label>{'day'.toUpperCase()}</Label>
        <Input
          type="number"
          placeholder="DD"
          {...register('days', {
            required: 'This field is required',
            min: { value: 1, message: 'Enter a valid date' },
            max: { value: 31, message: 'Enter a valid date' },
          })}
        />
        {errors.days && <Error>{errors?.days && errors.days.message}</Error>}
      </div>
      <div>
        <Label>{'month'.toUpperCase()}</Label>
        <Input
          type="number"
          placeholder="MM"
          {...register('months', {
            required: 'This field is required',
            min: { value: 1, message: 'Enter a valid date' },
            max: { value: 12, message: 'Enter a valid date' }
          })}
        />
        {errors.months && <Error>{errors?.months && errors.months.message}</Error>}
      </div>
      <div>
        <Label>{'year'.toUpperCase()}</Label>
        <Input
          type="number"
          placeholder="YYYY"
          {...register('years', {
            required: 'This field is required',
            min: { value: 1950, message: 'Enter a valid date' },
            max: { value: todayYear - 1, message: 'Enter a valid date' }
          })}
        />
        {errors.years && <Error>{errors?.years && errors.years.message}</Error>}
      </div>
      <Button type="submit">
        <img src={arrow} alt='arrow' />
      </Button>
    </FormStyled>
  );
};

export default Form;