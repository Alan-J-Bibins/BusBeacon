import { router } from 'expo-router'
import { View, Text, Button } from 'react-native'

export default function index() {
    return (
        <View>
            <Text>hello there</Text>
            <Button title='Go to Dashboard' onPress={() => router.push("/dashboard")} />
        </View>
    )
}
