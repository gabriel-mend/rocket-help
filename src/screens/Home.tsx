import {
  Center,
  FlatList,
  Heading,
  HStack,
  IconButton,
  Text,
  useTheme,
  VStack
} from 'native-base'
import { ChatTeardropText, SignOut } from 'phosphor-react-native'
import { useState } from 'react'

import Logo from '../assets/logo_secondary.svg'
import { Button } from '../components/Button'
import { Filter } from '../components/Filter'
import { Order, OrderProps } from '../components/Order'

type StatusSelected = 'open' | 'closed'

export function Home() {
  const { colors } = useTheme()
  const [statusSelected, setStatusSelected] = useState<StatusSelected>('open')
  const [orders, setOrders] = useState<OrderProps[]>([])

  return (
    <VStack flex={1} pb={6} bg="gray.700">
      <HStack
        w="full"
        justifyContent="space-between"
        alignItems="center"
        bg="gray.600"
        pt={12}
        pb={5}
        px={6}
      >
        <Logo />

        <IconButton icon={<SignOut size={26} color={colors.gray[300]} />} />
      </HStack>

      <VStack flex={1} px={6}>
        <HStack w="full" mt={8} mb={4} justifyContent="space-between">
          <Heading color="gray.100">Meus chamados</Heading>
          <Text color="gray.200">3</Text>
        </HStack>

        <HStack space={3} mb={8}>
          <Filter
            type="open"
            isActive={statusSelected === 'open'}
            onPress={() => setStatusSelected('open')}
          >
            em andamento
          </Filter>
          <Filter
            type="closed"
            isActive={statusSelected === 'closed'}
            onPress={() => setStatusSelected('closed')}
          >
            finalizados
          </Filter>
        </HStack>

        <FlatList
          data={orders}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <Order data={item} />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 100 }}
          ListEmptyComponent={() => (
            <Center>
              <ChatTeardropText size={40} color={colors.gray[300]} />
              <Text color="gray.300" fontSize="xl" mt={6} textAlign="center">
                Você ainda não possui {'\n'}
                solicitações{' '}
                {statusSelected === 'open' ? 'em andamento' : 'finalizadas'}
              </Text>
            </Center>
          )}
        />

        <Button>Nova solicitação</Button>
      </VStack>
    </VStack>
  )
}
