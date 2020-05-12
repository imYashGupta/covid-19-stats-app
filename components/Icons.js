import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Entypo, FontAwesome5 } from '@expo/vector-icons';

const Icons = (props) => {
    
    return (
        <TouchableOpacity activeOpacity={0.5} >
            <View style={{ height: 35, width: 35, backgroundColor: "transparent", borderRadius: 35, justifyContent: "center", alignItems: "center" }}>
                <Entypropo name="twitter-with-circle" size={32} color="white" />
            </View>
        </TouchableOpacity>
    )
}

export default Icons

const styles = StyleSheet.create({})
