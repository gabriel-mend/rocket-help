import { Heading, Icon, VStack, useTheme } from 'native-base'

import { Envelope, Key } from 'phosphor-react-native'
import { useState } from 'react'

import Logo from '../assets/logo_primary.svg'
import { Button } from '../components/Button'
import { Input } from '../components/Input'

export function SignIn() {
  const { colors } = useTheme()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handlSingIn() {
    console.log(email, password)
  }

  return (
    <VStack flex={1} alignItems="center" bg="gray.600" px={8} pt={24}>
      <Logo />

      <Heading color="gray.100" fontSize="xl" mt={20} mb={6}>
        Acesse sua conta {email}
      </Heading>

      <Input
        value={email}
        onChangeText={text => setEmail(text)}
        placeholder="Email"
        mb={4}
        InputLeftElement={
          <Icon as={<Envelope color={colors.gray[300]} />} ml={4} />
        }
      />
      <Input
        value={password}
        onChangeText={text => setPassword(text)}
        placeholder="Senha"
        InputLeftElement={<Icon as={<Key color={colors.gray[300]} />} ml={4} />}
        secureTextEntry
      />
      <Button mt={8} w="full" onPress={handlSingIn}>
        Entrar
      </Button>
    </VStack>
  )
}
