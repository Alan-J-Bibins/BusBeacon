import { View, Text, Button } from 'react-native'
import * as NearbyConnections from "expo-nearby-connections"
import { useEffect, useState } from 'react';

export default function Screen() {
    const [peerId, setPeerId] = useState<string | null>(null);
    useEffect(() => {
        NearbyConnections.startAdvertise("My Device Name Or ID")
            .then((peerId: string) => {
                setPeerId(peerId);
            }).catch((error: Error) => {
                // error handler
            })

        return () => {
            // stopAdvertise();
        }
    }, [])

    // Listen for incoming connections
    useEffect(() => {
        const onInvitationListener = NearbyConnections.onInvitationReceived((data: any) => {
            // handler when discovery device is requesting connection
            NearbyConnections.acceptConnection(data.peerId)
        })

        const onConnectedListener = NearbyConnections.onConnected((data:any) => {
            // handler when the advertise device is accepted the request connection
        })

        const onDisconnectedListener = NearbyConnections.onDisconnected((data:any) => {
            // handler when discovery device is disconnected
        })

        return () => {
            onInvitationListener();
            onConnectedListener();
            onDisconnectedListener();
        }
    }, [])
    return (
        <View>
            <Text>Testing Advertise</Text>
            <Button title='Start Advertusing'/>
        </View>
    )
}
