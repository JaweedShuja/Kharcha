import { StyleSheet } from "react-native";
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
    title2:{
        fontSize:16,
        fontFamily:Fonts.PoppinsBold,
        marginTop:10,
        marginLeft:10,
    },
    ieContainer:{
        marginTop:10,
        marginHorizontal:25,
        flexDirection:'row'
    },
    ieChild:{
        flex:1,   
    },
    ieText:{
        fontFamily:Fonts.PoppinsBold,
        color:Colors.themeBrown
    },
    ieAmountContainer:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:5,
    },
    ieColor:{
        height:20,
        width:20,
        borderRadius:5
    },
    ieAmount:{
        fontFamily:Fonts.PoppinsBold,
        color:'black',
        marginLeft:10,
    }
})