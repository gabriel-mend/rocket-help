import { Text, Button, IButtonProps, useTheme } from 'native-base'

type Props = IButtonProps & {
  isActive?: boolean
  type: 'open' | 'closed'
}

export function Filter({ isActive = false, type, ...rest }: Props) {
  const { colors } = useTheme()

  const colorType = type === 'open' ? colors.secondary[700] : colors.green[300]
  return (
    <Button
      variant="outline"
      borderWidth={1}
      borderColor={isActive ? colorType : 'transparent'}
      bgColor="gray.600"
      flex={1}
      size="sm"
      {...rest}
    >
      <Text
        color={isActive ? colorType : 'gray.300'}
        fontSize="xs"
        textAlign="center"
        textTransform="uppercase"
      >
        {rest?.children}
      </Text>
    </Button>
  )
}
