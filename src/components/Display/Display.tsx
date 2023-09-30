import { DisplayProps } from "../../types/types";
import { useEffect, useState } from "react";
import { styled } from 'styled-components'

const DisplayStyled = styled.div`
  margin: 48px 10px 10px 0;
`;

const Title = styled.h2`
  font-size: 102px;
  font-style: italic;
  line-height: 113px;
  letter-spacing: -0.6px;
  display: block;
  font-weight: 900;
`;

const Number = styled(Title)`
  display: inline;
  color: hsl(259, 100%, 65%);
  margin-right: 10px;
`;

const Display: React.FC<DisplayProps> = ({ result }) => {
  const { years, months, days } = result
  const [currDay, setCurrDay] = useState(0);
  const [currMonth, setCurrMonth] = useState(0);
  const [currYear, setCurrYear] = useState(0);

  useEffect(() => {
    currDay !== days && setTimeout(setCurrDay, 10, currDay + 1);
    currMonth !== months && setTimeout(setCurrMonth, 10, currMonth + 1);
    currYear !== years && setTimeout(setCurrYear, 10, currYear + 1);
  }, [years, months, days, currDay, currMonth, currYear]);

  return (
    <DisplayStyled>
      <h1> </h1>
      <Title>
        <Number>
          {`${currYear !== 0 ? currYear : '- -'}`}
        </Number>
        years
      </Title>
      <Title>
        <Number>
          {`${currMonth !== 0 ? currMonth : '- -'}`}
        </Number>
        months
      </Title>
      <Title>
        <Number>
          {`${currDay !== 0 ? currDay : '- -'}`}
        </Number>
        days
      </Title>
    </DisplayStyled>
  );
}

export default Display;