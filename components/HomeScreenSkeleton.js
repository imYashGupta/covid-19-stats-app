import React from 'react';
import {
    StyleSheet,
    Dimensions,
    View
} from 'react-native';
import SkeletonContent from "react-native-skeleton-content";
import { THEME } from '../util/THEME';
const screenWidth = Dimensions.get('window').width;
export default function App(props) {
    return (
        <View style={styles.container}>
            <SkeletonContent
                containerStyle={{ width: screenWidth, height: 280 }}
                isLoading={props.loading}
                boneColor={THEME.CARD}
                highlightColor="#4c5067"
                layout={[
                    { key: "123", width: screenWidth - 20, height: 280, borderRadius: 10 },
                ]}
            >
            </SkeletonContent>
            <SkeletonContent
                containerStyle={{
                    flex: 1,
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    alignItems: 'flex-start',
                }}
                isLoading={props.loading}
                boneColor={THEME.CARD}
                highlightColor="#4c5067"
                layout={[
                    { key: "1", width: (screenWidth - 30) / 2, height: 160, marginTop: 10, borderRadius: 10, marginRight: 10 },
                    { key: "2", width: (screenWidth - 30) / 2, height: 160, marginTop: 10, borderRadius: 10 },
                    { key: "3", width: (screenWidth - 30) / 2, height: 160, marginTop: 10, borderRadius: 10, marginRight: 10 },
                    { key: "4", width: (screenWidth - 30) / 2, height: 160, marginTop: 10, borderRadius: 10 },
                ]}
            >
            </SkeletonContent>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: THEME.DARK,
        padding: 10
    },
    scrollView: {
        flex: 1,
        backgroundColor: 'pink',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
