import { Button as ButtonNativeBase, IButtonProps, Text } from 'native-base'

export function Button({ ...rest }: IButtonProps) {
  return (
    <ButtonNativeBase
      h={14}
      size="md"
      bg="green.700"
      _pressed={{
        bg: 'green.500'
      }}
      {...rest}
    >
      <Text fontSize="sm" color="white" fontWeight={700}>
        {rest.children}
      </Text>
    </ButtonNativeBase>
  )
}
