import { router } from 'expo-router'
import { View, Text, Button } from 'react-native'

export default function index() {
    return (
        <View>
            <Text className='text-4xl font-bold'>Welcome To BusBeacon</Text>
            <Button title='Go to Dashboard' onPress={() => router.push("/dashboard")} />
            <Button title='Test P2P Broadcasting' onPress={() => router.push("/p2p")} />
        </View>
    )
}
