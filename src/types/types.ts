import { Dispatch, SetStateAction } from "react";
export interface IDate {
  years: number,
  months: number,
  days: number,
}

export interface DisplayProps {
  result: IDate;
}

export interface FormProps {
  setResult: Dispatch<SetStateAction<IDate>>
}