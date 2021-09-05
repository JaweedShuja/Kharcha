import {StyleSheet} from 'react-native'
import Colors from '../../utils/Colors'
import Fonts from '../../utils/Fonts'

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.appBackgroundColor
    },
    title:{
        fontSize:18,
        fontFamily:Fonts.PoppinsBold,
        marginTop:10,
        marginLeft:10,
    },
    selectionContainer:{
        flexDirection:'row',
        marginHorizontal:10,
        borderRadius:10,
        justifyContent:'space-around',
        marginTop:10,
    },
    selectionButton:{
        height:35,
        width:100,
        borderRadius:5,
        alignItems:'center',
        justifyContent:'center'
    },
    selectionButtonText:{
        fontFamily:Fonts.PoppinsBold,
        fontSize:12,
        color:'white'
    }
})