
import React from 'react'
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    TextInput,
} from 'react-native'
import MyStatusBar from '../../components/MyStatusBar'
import Colors from "../../utils/Colors";
import Fonts from "../../utils/Fonts";
import styles from './style'
import Button from '../../components/button'
import {connect} from 'react-redux'
import {addUser} from '../../redux/index'

class Profile extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <MyStatusBar backgroundColor={Colors.themeGreen} barStyle={'light-content'} />
                <View style={styles.profilePicContainer}>
                    <Image 
                        style={styles.profilePlaceholder}
                        source={require('../../images/profilePlaceholder.png')}
                    />
                    <TouchableOpacity style={styles.editButtonContainer}>
                        <Image 
                            style={styles.editIcon}
                            source={require('../../images/editIcon.png')}
                        />
                    </TouchableOpacity>
                </View>

                <TextInput 
                    placeholder={'Name'}
                    style={[styles.input, {marginTop:30}]}
                />
                <TextInput 
                    placeholder={'Email'}
                    style={[styles.input, {marginTop:10}]}
                />
                <TextInput 
                    placeholder={'Phone Number'}
                    style={[styles.input, {marginTop:10}]}
                />

                <View style={styles.buttonContainer}>
                    <Button 
                        title={'Update'}
                        width={'83%'}
                    />
                    <TouchableOpacity 
                    onPress={() => {
                        this.props.addUser({
                            token:''
                        })
                    }}
                    style={styles.logoutButtonContainer}>
                        <Image 
                            style={styles.logoutIcon}
                            source={require('../../images/logoutIcon.png')}
                        />

                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addUser:(payload) => dispatch(addUser(payload))
    }
}

export default connect(null, mapDispatchToProps)(Profile)