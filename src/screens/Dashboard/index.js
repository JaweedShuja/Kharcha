import React from 'react'
import {
    View,
    Text,
    Image,
    FlatList
} from 'react-native'
import styles from './style'
import MyStatusBar from '../../components/MyStatusBar'
import Colors from '../../utils/Colors'
import commonStyles from '../../utils/commonStyles'
import Fonts from '../../utils/Fonts'
import PlusIcon from '../../images/plusIcon.png'
import ListItem from './listItem'
// import ActionButton from 'react-native-action-button';
// import Icon from 'react-native-vector-icons/Ionicons';

export default class Dashboard extends React.Component{
    constructor(props){
        super(props)
        this.state = {
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

                <View style={{
                    height:130,
                    paddingHorizontal:10,
                    paddingTop:10,
                    paddingBottom:5
                }}>
                    <View style={{
                        borderWidth:1,
                        borderColor:Colors.themeGreen,
                        ...commonStyles.shadow,
                        backgroundColor:'white',
                        flex:1,
                        borderRadius:10,
                        paddingHorizontal:10,
                        paddingTop:5,
                        paddingBottom:10
                    }}>
                        <Text style={{
                            fontFamily:Fonts.PoppinsBold,
                            color:Colors.themeBrown
                        }}>
                            Overview

                        </Text>
                        <View style={{
                            flex:1,
                            flexDirection:'row',
                            // backgroundColor:'yellow',
                            alignItems:'center',
                            justifyContent:'space-between',
                        }}>
                            
                                <Text style={{
                                    fontFamily:Fonts.PoppinsBold,

                                }}>
                                    Available Balance
                                </Text>
                                <Text
                                    style={{
                                        fontFamily:Fonts.PoppinsBold,
                                        fontSize:16
                                    }}
                                >
                                    Rs. 2300
                                </Text>

                            

                        </View>
                        <View style={{
                            flex:2,
                            flexDirection:'row'
                        }}>
                            <View
                                style={{
                                    flex:1,
                                    justifyContent:'space-between',
                                    marginRight:5,
                                    paddingHorizontal:5,
                                    borderRadius:5,
                                    backgroundColor:'#66BB6A'
                                }}
                            >
                                  <Text style={{
                                    fontFamily:Fonts.PoppinsBold,
                                    color:'white'
                                }}>
                                    Income
                                </Text>
                                <Text style={{
                                    fontFamily:Fonts.PoppinsBold,
                                    alignSelf:'flex-end',
                                    color:'white'
                                }}>
                                    Rs. 1350
                                </Text>
                                

                            </View>
                            <View
                                style={{
                                    flex:1,
                                    justifyContent:'space-between',
                                    marginLeft:5,
                                    paddingHorizontal:5,
                                    borderRadius:5,
                                    backgroundColor:'#EF5350'
                                }}
                            >
                                <Text style={{
                                    fontFamily:Fonts.PoppinsBold,
                                    color:'white'
                                }}>
                                    Expense
                                </Text>
                                <Text style={{
                                    fontFamily:Fonts.PoppinsBold,
                                    alignSelf:'flex-end',
                                    color:'white'
                                }}>
                                    Rs. 1080
                                </Text>

                            </View>

                        </View>


                       

                    </View>

                </View>
                <View style={{
                    height:100,
                    paddingHorizontal:10,
                    paddingTop:5,
                }}>
                    <View style={{
                         borderWidth:1,
                         borderColor:Colors.themeGreen,
                         ...commonStyles.shadow,
                         backgroundColor:'white',
                         flex:1,
                         borderRadius:10,
                         paddingHorizontal:10,
                        paddingTop:5,
                        paddingBottom:5
                    }}>
                        <Text style={{
                            fontFamily:Fonts.PoppinsBold,
                            color:Colors.themeBrown
                        }}>
                            Accounts

                        </Text>

                        <View style={{
                            flex:1,
                            // backgroundColor:'red',
                            flexDirection:'row',
                            padding:5,
                        }}>
                            <View style={{
                                flex:1,
                                // backgroundColor:'cyan',
                                marginRight:5,
                                borderRadius:5,
                                justifyContent:'space-between',
                                paddingHorizontal:5,
                                // borderWidth:1,
                                // borderColor:Colors.themeGreen,
                                backgroundColor:Colors.themeGreen
                            }}>
                                 <Text style={{
                                    fontFamily:Fonts.PoppinsBold,
                                    color:'white'
                                }}>
                                    Bank
                                </Text>
                                <Text style={{
                                    fontFamily:Fonts.PoppinsBold,
                                    alignSelf:'flex-end',
                                    color:'white'
                                }}>
                                    Rs. 1350
                                </Text>
                                

                            </View>
                            <View style={{
                                flex:1,
                                // backgroundColor:'green',
                                borderRadius:5,
                                justifyContent:'space-between',
                                paddingHorizontal:5,
                                // borderWidth:1,
                                // borderColor:Colors.themeGreen
                                backgroundColor:Colors.themeGreen
                            }}>
                                <Text style={{
                                    fontFamily:Fonts.PoppinsBold,
                                    color:'white'
                                }}>
                                    Cash
                                </Text>
                                <Text style={{
                                    fontFamily:Fonts.PoppinsBold,
                                    alignSelf:'flex-end',
                                    color:'white'
                                }}>
                                    Rs. 1350
                                </Text>

                            </View>
                            <View style={{
                                flex:1,
                                // backgroundColor:'blue',
                                marginLeft:5,
                                borderRadius:5,
                                alignItems:'center',
                                justifyContent:'center',
                                // borderWidth:1,
                                // borderColor:Colors.themeGreen
                                backgroundColor:Colors.themeGreen
                            }}>
                                 <Image 
                                    style={{
                                        height:20,
                                        width:20,
                                        tintColor:'white'
                                    }}
                                    source={PlusIcon}
                                 />

                            </View>

                        </View>

                   
                    </View>

                </View>
                <View style={{
                    flex:4,
                    padding:10,
                }}>
                    <View
                        style={{
                            borderWidth:1,
                         borderColor:Colors.themeGreen,
                         ...commonStyles.shadow,
                         backgroundColor:'white',
                         flex:1,
                         borderRadius:10,
                         paddingHorizontal:10,
                        paddingTop:5,
                        paddingBottom:5
                        }}
                    >
                         <Text style={{
                            fontFamily:Fonts.PoppinsBold,
                            color:Colors.themeBrown
                        }}>
                            Resent Transactions

                        </Text>

                        <FlatList 
                            showsVerticalScrollIndicator={false}
                            contentContainerStyle={{
                                marginTop:5,
                                paddingBottom:110,
                            }}
                            data={this.state.data}
                            renderItem={({item}) => this.renderListItem(item)}
                        />

                    </View>

                </View>
                
                {/* <ActionButton buttonColor="rgba(231,76,60,1)">
          <ActionButton.Item buttonColor='#9b59b6' title="New Task" onPress={() => console.log("notes tapped!")}>
            <Icon name="md-create" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#3498db' title="Notifications" onPress={() => {}}>
            <Icon name="md-notifications-off" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#1abc9c' title="All Tasks" onPress={() => {}}>
            <Icon name="md-done-all" style={styles.actionButtonIcon} />
          </ActionButton.Item>
        </ActionButton> */}
            </View>
        )
    }
}