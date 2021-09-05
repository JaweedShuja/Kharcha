import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity
} from 'react-native'
import commonStyles from '../../utils/commonStyles'
import CloseButton from '../../components/ButtonComponents/CloseButton'
import style from './style'
import Fonts from '../../utils/Fonts'
import Colors from '../../utils/Colors'
import Button from '../../components/button'

export default class AddExpense extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            selectedTo:'bank'
        }
    }
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.modalView}>
                    <View style={styles.topContainer}>
                        <Text style={styles.title}>Add Expense</Text>
                        <CloseButton 
                            onPress={() => this.props.modalVisible()}
                            style={{
                                position:'absolute',
                                right:10,
                                top:10,
                            }}
                        />
                    </View>
                    <Text style={styles.inputTitle}>Amount</Text>  
                    <TextInput 
                        placeholder={'100'}
                        style={[styles.input, {
                            height:40,
                        }]}
                    />  
                    <Text style={[styles.inputTitle, {
                        marginTop:10,
                    }]}>From</Text> 
                     <View style={styles.selectionButtonsContainer}>
                         <TouchableOpacity 
                         onPress={() => this.setState({selectedTo:'bank'})}
                         style={[styles.selectionButton,{
                             backgroundColor:this.state.selectedTo == 'bank' ? Colors.themeGreen : 'white'
                         }]}>
                             <Text style={[styles.selectionButtonText,{
                                 color:this.state.selectedTo == 'bank' ? 'white' : Colors.themeGreen
                             }]}>Bank</Text>

                         </TouchableOpacity>
                         <TouchableOpacity 
                         onPress={() => this.setState({selectedTo:'cash'})}
                         style={[styles.selectionButton,{
                             backgroundColor:this.state.selectedTo == 'cash' ? Colors.themeGreen : 'white'
                         }]}>
                             <Text style={[styles.selectionButtonText,{
                                 color:this.state.selectedTo == 'cash' ? 'white' : Colors.themeGreen
                             }]}>Cash</Text>

                         </TouchableOpacity>
                    </View>
                    <Text style={[styles.inputTitle, {
                        marginTop:10,
                    }]}>Category</Text>  
                    <TextInput 
                        placeholder={'100'}
                        style={[styles.input, {
                            height:40,
                        }]}
                    />  
                    <Text style={[styles.inputTitle, {
                        marginTop:10,
                    }]}>Note</Text>  
                    <TextInput 
                        numberOfLines={3}
                        multiline
                        placeholder={'100'}
                        style={[styles.input, {
                            height:100,
                        }]}
                    />     
                    <Button
                        height={35}
                        width={'90%'} 
                        title="Add"
                        onPress={() => {console.log('add')}}
                        style={{
                            alignSelf:'center',
                            marginTop:20
                        }}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'rgba(0,0,0,0.5)'
    },
    modalView:{
        height:'60%',
        width:'80%',
        backgroundColor:'white',
        borderRadius:5,
        ...commonStyles.shadow   
    },
    topContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    title:{
        fontFamily:Fonts.PoppinsBold,
        fontSize:16,
        marginTop:10,
        color:Colors.black
    },
    input:{
        backgroundColor:'white',
        width:'90%',
        borderRadius:5,
        borderWidth:1,
        borderColor:Colors.themeGreen,
        fontFamily:Fonts.PoppinsRegular,
        paddingHorizontal:10,
        alignSelf:'center',
        marginTop:5
    },
    inputTitle:{
        fontFamily:Fonts.PoppinsRegular,
        color:Colors.themeBrown,
        marginLeft:15,
    },
    selectionButtonsContainer:{
        marginHorizontal:15,
        marginTop:5,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    selectionButton:{
        height:35,
        width:120,
        borderRadius:5,
        alignItems:'center',
        justifyContent:'center',
        borderWidth:1,
        borderColor:Colors.themeGreen
    },
    selectionButtonText:{
        fontFamily:Fonts.PoppinsBold
    }
})