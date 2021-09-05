import React from 'react'
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native'
import styles from './style'
import MyStatusBar from '../../components/MyStatusBar'
import Colors from '../../utils/Colors'
import { StackActions } from '@react-navigation/native';

export default class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }
    componentDidMount(){
        setTimeout(() => {
            this.props.navigation.dispatch(
                StackActions.replace('AppFlow')
            );
        },2000)
    }
    render(){
        return(
            <View style={styles.container}>
                <MyStatusBar backgroundColor={Colors.themeGreen} barStyle={'light-content'} />
                <Text style={styles.title}>خرچا</Text>
                <Text style={styles.description}>
                    Manage your income and expense easily with! 
                </Text>

                {/* <TouchableOpacity
                onPress={() => {
                    this.props.navigation.dispatch(
  StackActions.replace('LoginFlow')
);
                }}
                style={{
                    height:50,
                    width:100,
                    backgroundColor:'white'
                }}>
                    <Text>LoginFlow</Text>

                </TouchableOpacity>

                <TouchableOpacity
                onPress={() => {
                    this.props.navigation.dispatch(
  StackActions.replace('HomeFlow')
);
                }}
                style={{
                    height:50,
                    width:100,
                    backgroundColor:'white'
                }}>
                    <Text>HomeFlow</Text>

                </TouchableOpacity> */}
            </View>
        )
    }
}