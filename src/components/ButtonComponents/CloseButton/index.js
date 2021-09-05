import React from 'react'
import {
    TouchableOpacity,
    Text,
    Image,
    StyleSheet
} from 'react-native'
import Colors from '../../../utils/Colors'
import CloseIcon from '../../../images/closeIcon.png'

class CloseButton extends React.Component{
    render(){
        return(
            <TouchableOpacity 
            onPress={() => this.props.onPress()}
            style={[styles.contianer,{
                ...this.props.style
            }]}>
                <Image 
                    style={styles.closeIcon}
                    source={CloseIcon}
                />
                
            </TouchableOpacity>
        )
    }
}

export default CloseButton

const styles = StyleSheet.create({
    contianer:{
        height:30,
        width:30,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:Colors.themeGreen,
        borderRadius:15,
    },
    closeIcon:{
        height:15,
        width:15,
        tintColor:'white'
    }
})