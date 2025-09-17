import { View, Text, Button } from 'react-native'
import { router } from 'expo-router'


export default function Screen() {
    return (
        <View>
            <Text>Testing P2P Broadcasting</Text>
            <Button title='Advertise' onPress={() => router.push("/p2p/advertise")} />
            <Button title='Discover' onPress={() => router.push("/p2p/discover")} />
        </View>
    )
}
