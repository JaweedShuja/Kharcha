import {StyleSheet} from 'react-native'
import Colors from '../../utils/Colors'
import Fonts from '../../utils/Fonts'

export default StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:Colors.themeGreen
    },
    title:{
        color:'white',
        fontSize:80,
        fontFamily:Fonts.PoppinsRegular
    },
    description:{
        color:Colors.themeBrown,
        // fontSize:12,
        fontFamily:Fonts.PoppinsRegular,
        marginTop:10
    }
})