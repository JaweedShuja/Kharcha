import {StyleSheet} from 'react-native'
import Colors from '../../utils/Colors'
import commonStyles from '../../utils/commonStyles'
import Fonts from '../../utils/Fonts'


export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.appBackgroundColor,
    },
    title:{
        color:Colors.themeGreen,
        fontSize:60,
        fontFamily:Fonts.PoppinsRegular,
        alignSelf:'center',
        marginTop:50
    },
    loginText:{
        alignSelf:'center',
        fontFamily:Fonts.PoppinsRegular,
        marginTop:10
    },
    orText:{
        fontFamily:Fonts.PoppinsBold,
        fontSize:16,
        color:Colors.themeBrown,
        alignSelf:'center',
        marginTop:10
    },
    input:{
        backgroundColor:'white',
        width:'90%',
        height:45,
        borderRadius:5,
        borderWidth:1,
        borderColor:Colors.themeGreen,
        fontFamily:Fonts.PoppinsRegular,
        paddingHorizontal:10,
        alignSelf:'center',
        marginTop:10
    },
    signUpText:{
        alignSelf:'center',
        fontSize:16,
        fontFamily:Fonts.PoppinsBold,
        color:Colors.themeBrown,
        marginTop:50
    }
})