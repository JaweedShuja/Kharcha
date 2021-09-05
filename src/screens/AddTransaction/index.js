
import React from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    Modal
} from 'react-native'
import styles from './style'
import IncomeIcon from '../../images/incomeIcon.png'
import ExpenseIcon from '../../images/expenseIcon.png'
import TransferIcon from '../../images/transferIcon.png'
import MyStatusBar from '../../components/MyStatusBar'
import Colors from '../../utils/Colors'
import AddIncomeModal from './AddIcomeModal'
import AddExpenseModal from './AddExpenseModal'
import TransferModal from './TransferModal'

export default class AddTransation extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            modalVisible_Income:false,
            modalVisible_Expense:false,
            modalVisible_Transfer:false,
        }
        this.setModalVisible_Income = this.setModalVisible_Income.bind(this)
        this.setModalVisible_Expense = this.setModalVisible_Expense.bind(this)
        this.setModalVisible_Transfer = this.setModalVisible_Transfer.bind(this)
    }
    setModalVisible_Income(){
        this.setState({
            modalVisible_Income:!this.state.modalVisible_Income
        })
    }
    setModalVisible_Expense(){
        this.setState({
            modalVisible_Expense:!this.state.modalVisible_Expense
        })
    }
    setModalVisible_Transfer(){
        this.setState({
            modalVisible_Transfer:!this.state.modalVisible_Transfer
        })
    }
    render(){
        return(
            <View style={styles.container}>
                <MyStatusBar backgroundColor={Colors.themeGreen} barStyle={'light-content'} />
                <Modal
                    onRequestClose={this.setModalVisible_Income}
                    visible={this.state.modalVisible_Income}
                    transparent={true}
                    animationType={'fade'}
                >
                    <AddIncomeModal
                        modalVisible={this.setModalVisible_Income}
                    />
                </Modal>
                <Modal
                    onRequestClose={this.setModalVisible_Expense}
                    visible={this.state.modalVisible_Expense}
                    transparent={true}
                    animationType={'fade'}
                >
                    <AddExpenseModal
                        modalVisible={this.setModalVisible_Expense}
                    />
                </Modal>
                <Modal
                    onRequestClose={this.setModalVisible_Transfer}
                    visible={this.state.modalVisible_Transfer}
                    transparent={true}
                    animationType={'fade'}
                >
                    <TransferModal
                        modalVisible={this.setModalVisible_Transfer}
                    />
                </Modal>
                

                <Text style={styles.title}>Select Transaction Type</Text>
                <TouchableOpacity 
                onPress={this.setModalVisible_Income}
                style={[styles.buttonContainer,{
                    marginTop:30
                }]}>
                    <Text style={styles.buttonText}>INCOME</Text>
                    <Image 
                        style={styles.buttonImage}
                        source={IncomeIcon}
                    />
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={this.setModalVisible_Expense}
                style={[styles.buttonContainer, {
                    marginTop:10
                }]}>
                    <Text style={styles.buttonText}>EXPENSE</Text>
                    <Image 
                        style={styles.buttonImage}
                        source={ExpenseIcon}
                    />
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={this.setModalVisible_Transfer}
                style={[styles.buttonContainer, {
                    marginTop:10
                }]}>
                    <Text style={styles.buttonText}>TRANSFER</Text>
                    <Image 
                        style={styles.buttonImage}
                        source={TransferIcon}
                    />
                </TouchableOpacity>
                
            </View>
        )
    }
}