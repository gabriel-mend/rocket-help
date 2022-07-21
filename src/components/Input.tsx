import { IInputProps, Input as InputNativeBase } from 'native-base'

export function Input({ ...rest }: IInputProps) {
  return <InputNativeBase {...rest} />
}
