import React from 'react'
import {TouchableOpacity, Text } from 'react-native'
import Colors from '../../utils/Colors'
import commonStyles from '../../utils/commonStyles'
import Fonts from '../../utils/Fonts'

export default class Button extends React.Component{
    render(){
        return(
            <TouchableOpacity
                style={{
                    height:this.props.height || 45,
                    width:this.props.width || 150,
                    borderRadius: this.props.borderRadius || 5,
                    backgroundColor:this.props.backgroundColor || Colors.themeGreen,
                    alignItems:'center',
                    justifyContent:'center',
                    ...this.props.style,
                    // ...commonStyles.shadow
                }}
                onPress={() => this.props.onPress()}
            >
                <Text style={{
                    color:this.props.color||'white',
                    fontSize:this.props.fontSize || 14,
                    fontFamily :this.props.fontFamily || Fonts.PoppinsBold
                }}>
                    {this.props.title || 'OK'}

                </Text>

            </TouchableOpacity>
        )
    }
}