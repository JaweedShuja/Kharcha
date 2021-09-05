import React from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'
import Colors from '../../utils/Colors'
import Fonts from '../../utils/Fonts'

export default class ListItem extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                
                    <View style={{
                        backgroundColor:Colors.themeBrown,
                        width:40,
                        borderRadius:5,
                        height:50,
                        alignSelf:'center',
                        // alignItems:'center',
                        justifyContent:'center',
                        padding:5,
                        
                    }}>
                        <Text style={styles.datetext}>{this.props.item.date.split('-')[0]}</Text>
                        <Text style={styles.datetext}>{this.props.item.date.split('-')[1]}</Text>
                        <Text style={styles.datetext}>{this.props.item.date.split('-')[2]}</Text>
                    </View>
                    {/* <Text style={[styles.text, {color:'red'}]}>{this.props.item.time}</Text> */}
                
                <View style={{
                    flex:1,
                    justifyContent:'center',
                    paddingLeft:10,
                    paddingRight:5,
                    paddingVertical:10
                }}>
                    <Text style={{
                        fontFamily:Fonts.PoppinsBold,
                        marginVertical:-2.5,
                    }}>
                        {this.props.item.title}

                    </Text>
                    <Text style={{
                        fontFamily:Fonts.PoppinsBold,
                        marginVertical:-2.5,
                        color:this.props.item.type == 'income' ? '#66BB6A' : '#EF5350',
                    }}>
                        {(this.props.item.type == 'income' ? '+' : '-') + 'Rs. ' + this.props.item.amount}

                    </Text>
                    <View style={{
                        flexDirection:'row',
                        justifyContent:'space-between'
                    }}>
                        <Text style={{
                        fontFamily:Fonts.PoppinsRegular,
                        fontSize:10,
                        marginVertical:-2,
                    }}>
                        {this.props.item.type == 'income' ? ('to ' + this.props.item.account) : ('from ' + this.props.item.account)}

                    </Text>
                    <Text style={{
                        fontFamily:Fonts.PoppinsRegular,
                        fontSize:10,
                        marginVertical:-2,
                    }}>
                        {this.props.item.time}

                    </Text>

                    </View>

                </View>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        height:60,
        borderWidth:1,
        borderColor:Colors.themeGreen,
        marginBottom:5,
        borderRadius:5,
        flexDirection:'row',
        paddingLeft:5,
        marginHorizontal:10,

    },
    datetext:{
        fontFamily:Fonts.PoppinsRegular,
        fontSize:10,
        marginVertical:-1.5,
        color:'white'
    }
})