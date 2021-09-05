import React from 'react'
import {
    View,
    Text,
    TextInput,
    TouchableOpacity
} from 'react-native'
import styles from './style'
import MyStatusBar from '../../components/MyStatusBar'
import Colors from '../../utils/Colors'
import Button from '../../components/button'

export default class App extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <MyStatusBar backgroundColor={Colors.themeGreen} barStyle={'light-content'} />
                <Text style={styles.title}>خرچا</Text>
                <Text style={styles.loginText}>Sign Up Here!</Text>

                <TextInput 
                    placeholder={'Full Name'}
                    style={[styles.input, {marginTop:20}]}
                />
                <TextInput 
                    placeholder={'Emaild Address'}
                    style={[styles.input, {marginTop:10}]}
                />
                <TextInput 
                    placeholder={'Password'}
                    style={[styles.input, {marginTop:10}]}
                />
                <TextInput 
                    placeholder={'Re-Enter Password'}
                    style={[styles.input, {marginTop:10}]}
                />
                <Button  
                    style={{
                        marginTop:10,
                        alignSelf:'center'
                    }}
                    fontFamily={Fonts.PoppinsBold}
                    width={'90%'}
                    title={'Sign Up'}
                />
                <TouchableOpacity
                    onPress={() => {
                        this.props.navigation.navigate('Login')
                    }}
                >
                    <Text style={styles.signUpText}>
                        Login Now
                    </Text>
                </TouchableOpacity>


            </View>
        )
    }
}