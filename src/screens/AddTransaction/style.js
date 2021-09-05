
import {StyleSheet} from 'react-native'
import Colors from '../../utils/Colors'
import Fonts from '../../utils/Fonts'

export default StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:Colors.appBackgroundColor
    },
    buttonContainer:{
        height:50,
        width:200,
        borderRadius:10,
        backgroundColor:Colors.themeGreen,
        alignItems:'center',
        justifyContent:'space-around',
        flexDirection:'row'
    },
    buttonText:{
        fontFamily:Fonts.PoppinsBold,
        color:'white'
    },
    buttonImage:{
        height:30,
        width:30,
        tintColor:'white'
    },
    title:{
        fontSize:18,
        fontFamily:Fonts.PoppinsBold,
    }
})