export interface InputSpec {
  id: string;
  name: string;
  type: string;
  value: string;
  error: boolean;
  errorMsg: string;
}

export interface ErrorStyles {
  icon: string;
  input: string;
  msg: string;
}