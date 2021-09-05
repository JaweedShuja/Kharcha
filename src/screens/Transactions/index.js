
import React from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    FlatList
} from 'react-native'
import Colors from '../../utils/Colors'
import styles from './styles'
import ListItem from './listItem'
import MyStatusBar from '../../components/MyStatusBar'

export default class Transactions extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            selectedData:'income',
            data:[
                {
                    id:'1',
                    title:'Dinner with friends',
                    amount:560,
                    type:'expense',
                    date:'12-july-2021',
                    time:'12:06 PM',
                    account:'cash'
                },
                {
                    id:'2',
                    title:'Salary',
                    amount:45000,
                    type:'income',
                    date:'15-july-2021',
                    time:'5:06 PM',
                    account:'cash'
                },
                {
                    id:'3',
                    title:'Salary',
                    amount:45000,
                    type:'income',
                    date:'15-july-2021',
                    time:'5:06 PM',
                    account:'cash'
                },
                {
                    id:'4',
                    title:'Salary',
                    amount:45000,
                    type:'income',
                    date:'15-july-2021',
                    time:'5:06 PM',
                    account:'cash'
                },
                {
                    id:'5',
                    title:'Salary',
                    amount:45000,
                    type:'income',
                    date:'15-july-2021',
                    time:'5:06 PM',
                    account:'cash'
                },
                {
                    id:'6',
                    title:'Salary',
                    amount:45000,
                    type:'income',
                    date:'15-july-2021',
                    time:'5:06 PM',
                    account:'cash'
                },
                {
                    id:'7',
                    title:'Salary',
                    amount:45000,
                    type:'income',
                    date:'15-july-2021',
                    time:'5:06 PM',
                    account:'cash'
                },
                {
                    id:'8',
                    title:'Salary',
                    amount:45000,
                    type:'income',
                    date:'15-july-2021',
                    time:'5:06 PM',
                    account:'cash'
                }
            ]
        }
        this.renderListItem = this.renderListItem.bind(this)
    }
    renderListItem(item){
        return <ListItem 
            item={item}
        />
    }
    render(){
        return(
            <View style={styles.container}>
                <MyStatusBar backgroundColor={Colors.themeGreen} barStyle={'light-content'} />
                <Text style={styles.title}>Transactions</Text>
                <View style={styles.selectionContainer}>
                    <TouchableOpacity style={[
                        styles.selectionButton,
                        {
                            backgroundColor:this.state.selectedData == 'income' ? Colors.themeGreen : 'gray'
                        }
                    ]}>
                        <Text style={styles.selectionButtonText}>
                            Income
                        </Text>

                    </TouchableOpacity>
                    <TouchableOpacity style={[
                        styles.selectionButton,
                        {
                            backgroundColor:this.state.selectedData == 'expense' ? Colors.themeGreen : 'gray'
                        }
                    ]}>
                        <Text style={styles.selectionButtonText}>
                            Expense
                        </Text>

                    </TouchableOpacity>
                    <TouchableOpacity style={[
                        styles.selectionButton,
                        {
                            backgroundColor:this.state.selectedData == 'transfer' ? Colors.themeGreen : 'gray'
                        }
                    ]}>
                        <Text style={styles.selectionButtonText}>
                            Transfer
                        </Text>

                    </TouchableOpacity>
                </View>
                <FlatList 
                    contentContainerStyle={{
                        marginTop:15,
                        paddingBottom:150,
                    }}
                    data={this.state.data}
                    renderItem={({item}) => this.renderListItem(item)}
                />
            </View>
        )
    }
}