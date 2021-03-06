import React, { useEffect, useState, useCallback } from 'react'
import { StyleSheet, Text, View, ActivityIndicator, TextInput, FlatList} from 'react-native'
import { THEME } from '../util/THEME'
import { Ionicons } from "@expo/vector-icons";
import { ScrollView, TouchableNativeFeedback } from 'react-native-gesture-handler';
import Axios from 'axios';
const StateScreen = (props) => {
    const [state, setState] = useState([]);
    const [stateBackup, setStatebackup] = useState([]);
    const [loading, setLoading] = useState(true);
    let count= 0;
    const getStateData = useCallback(() => {
        setLoading(true);
        Axios.get("https://api.covid19india.org/data.json").then(response => {
            const data = response.data.statewise;
            data.splice(0, 1);
            setState(data);
            setStatebackup(data)
            setLoading(false);
            count++
            console.log(count);
        });
    }, [setLoading])
    const numberWithCommas = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    

    const search = (text) => {
        console.log(text)
        const states = [...stateBackup];
        const searchText = text.trim().toLowerCase();

        const data = states.filter(l => {
            return l.state.toLowerCase().match(searchText);
        });
        setState(data);
            
    }

    useEffect(() => {
        getStateData();
    }, [])

    return (
        <View style={styles.screen}>
            {/* <ActivityIndicator size="large" color={THEME.CONDITION} /> */}
            <View style={styles.searchBar}>
                <View>
                    <Ionicons name="md-search" size={24} color="#ccc" />
                </View>
                <TextInput style={styles.textInput} placeholder="Search" onChangeText={(text) => search(text)} />
            </View>
            <View style={[styles.tableHead,{marginBottom:10,marginTop:10}]}>
                <Text style={styles.tableHeadText}>State</Text>
                <Text style={styles.tableHeadText}>Total Cases</Text>
            </View>
            {
                loading ? <ActivityIndicator style={{marginTop:20}} size="large" color={THEME.GREEN} /> :

                    <FlatList
                        style={{flex:1}}
                        onRefresh={getStateData}
                        refreshing={loading}
                      data={state} renderItem={({ item }) => {
                        let s= item;
                        return (
                            <View style={{ marginTop: 10 }} >
                                <TouchableNativeFeedback onPress={() => props.navigation.navigate("StatsScreen", { data: s, world: false })} style={styles.tableHead} background={TouchableNativeFeedback.Ripple("#7b819d")}>
                                    <Text style={styles.tableRowText}>{s.state}</Text>
                                    <Text style={styles.tableRowText}>{s.deltadeaths > 0 ? <Text style={{ color: THEME.DANGER }}>+{s.deltadeaths}</Text> : null}   {numberWithCommas(s.confirmed)}</Text>
                                </TouchableNativeFeedback>
                            </View>
                        )
                    }}
                    keyExtractor={s => s.statecode}
                   

                />
                               
            }
        </View>
    )
}

export default StateScreen

const styles = StyleSheet.create({
    screen:{
        backgroundColor:THEME.DARK,
        flex:1,
        padding:10
    },
    searchBar:{
        height:45,
        width:"100%",
        borderWidth:1.5,
        borderColor:"#ccc",
        borderRadius:5,
        flexDirection:"row",
        alignItems:"center",
        paddingHorizontal:10
    },
    textInput:{
        fontSize:18,
        marginLeft:20,
        color:"#ccc",
        flex:1
    },
    tableHead:{
        height:40,
        width:"100%",
        backgroundColor:THEME.CARD,
        borderRadius:5,
        flexDirection:"row",
        alignItems:"center",
        paddingHorizontal:10,
        justifyContent:"space-between",
        elevation: 5,
        overflow:"hidden"
    },
    tableHeadText:{
        color:THEME.GREEN,
        fontSize:18
    },
    tableRowText: {
        color: THEME.WHITE,
        fontSize: 18
    },
    headerButton:{
        height:30,
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"row",
        padding:10,
        paddingVertical:20
    },
    headerButtonText:{
        color:"white",
        fontSize:18,
        marginLeft:10
    }
    
})

export const ScreenOptions = (props) => {
    return {
        headerStyle: {
            elevation: 0,
            backgroundColor: THEME.DARK
        },
        headerTitle:"India",
        headerRight:() => {
            return ( 
                <View style={{marginRight:10}}>
                    <TouchableNativeFeedback onPress={() => props.navigation.navigate("WorldScreen")} style={styles.headerButton} background={TouchableNativeFeedback.Ripple("#7b819d")}>
                        <Ionicons name="ios-globe" size={24} color="white" />
                        <Text style={styles.headerButtonText}>World</Text>
                    </TouchableNativeFeedback>
                </View>
            )
        }
    }
}