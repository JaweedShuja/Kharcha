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
import Fonts from '../../utils/Fonts'

import {addUser } from '../../redux/index'
import {connect} from 'react-redux'

class Login extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <MyStatusBar backgroundColor={Colors.themeGreen} barStyle={'light-content'} />
                <Text style={styles.title}>خرچا</Text>
                <Text style={styles.loginText}>Login Here!</Text>
                
                <Button  
                    style={{
                        alignSelf:'center',
                        marginTop:20,
                        borderWidth:1,
                        borderColor:'#4267B2'
                    }}
                    color={'#4267B2'}
                    backgroundColor={'white'}
                    fontFamily={Fonts.PoppinsBold}
                    width={'90%'}
                    title={'Login with Facebook'}
                />
                <Button  
                    style={{
                        marginTop:10,
                        alignSelf:'center',
                        borderWidth:1,
                        borderColor:'#DB4437'
                    }}
                    color={'#DB4437'}
                    backgroundColor={'white'}
                    fontFamily={Fonts.PoppinsBold}
                    width={'90%'}
                    title={'Login with Google'}
                />
                <Text style={styles.orText}>
                    or
                </Text>

                <TextInput 
                    placeholder={'Emaild Address'}
                    style={styles.input}
                />
                <TextInput 
                    placeholder={'Password'}
                    style={[styles.input, {marginTop:10}]}
                />
                <Button  
                    onPress={() => {
                        this.props.addUser({
                            token:'javed'
                        })
                    }}
                    style={{
                        marginTop:10,
                        alignSelf:'center'
                    }}
                    fontFamily={Fonts.PoppinsBold}
                    width={'90%'}
                    title={'Login'}
                />

                <TouchableOpacity
                onPress={() => this.props.navigation.navigate('SignUp')}
                >
                    <Text style={styles.signUpText}>
                        Sign Up Now
                    </Text>
                </TouchableOpacity>

                
            </View>
        )
    }
}



const mapDispatchToProps = dispatch => {
    return {
        addUser : (payload) => dispatch(addUser(payload))
    }
}

export default connect(null,mapDispatchToProps)(Login)