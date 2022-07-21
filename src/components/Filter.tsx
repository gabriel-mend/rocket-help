import { Text, Button, IButtonProps, useTheme } from 'native-base'

type Props = IButtonProps

export function Filter(props: Props) {
  return (
    <Button {...props}>
      <Text>{props?.children}</Text>
    </Button>
  )
}
