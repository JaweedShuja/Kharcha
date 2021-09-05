import React from 'react'
import { Dimensions, Text, View } from 'react-native'
import { LineChart } from 'react-native-chart-kit'
import { data } from './data'
import Colors from '../../utils/Colors'
import styles from './style'
import MyStatusBar from '../../components/MyStatusBar'


export default class App extends React.Component {
  render() {
    const width = Dimensions.get('window').width
    const height = 220
    return (
        <View style={styles.container}>
            <MyStatusBar backgroundColor={Colors.themeGreen} barStyle={'light-content'} />
            <Text style={styles.title}>Weekly Statistics</Text>
            <LineChart
                data={data}
                width={width - 20}
                height={height}
                chartConfig={{
                    backgroundGradientFrom: Colors.themeGreen,
                    backgroundGradientTo: Colors.themeGreen,
                    color: () => `white`,
                    // style: {
                    //     borderRadius: 10,
                    // }
                }}
                bezier
                style={{
                    marginVertical: 8,
                    alignSelf:'center',
                    borderRadius: 5,
                }}
            />
            <Text style={styles.title2}>More statistics from this week</Text>
            <View style={styles.ieContainer}>
                <View style={styles.ieChild}>
                    <Text style={styles.ieText}>Income</Text>
                    <View style={styles.ieAmountContainer}>
                        <View style={[styles.ieColor,{backgroundColor:'#66BB6A'}]} />
                        <Text style={styles.ieAmount}>Rs. 12000</Text>
                    </View>
                </View>
                <View style={styles.ieChild}>
                    <Text style={styles.ieText}>Expense</Text>
                    <View style={styles.ieAmountContainer}>
                        <View style={[styles.ieColor,{backgroundColor:'#EF5350'}]} />
                        <Text style={styles.ieAmount}>Rs. 23550</Text>
                    </View>
                </View>
            </View>
            <View style={styles.ieContainer}>
                <View style={styles.ieChild}>
                    <Text style={styles.ieText}>This week you spend most on - Petrol</Text>
                    <View style={styles.ieAmountContainer}>
                        <View style={[styles.ieColor,{backgroundColor:'#EF5350'}]} />
                        <Text style={styles.ieAmount}>Rs. 23550</Text>
                    </View>
                </View>
            </View>
            <View style={styles.ieContainer}>
                <View style={styles.ieChild}>
                    <Text style={styles.ieText}>Average per day expense this week</Text>
                    <View style={styles.ieAmountContainer}>
                        <View style={[styles.ieColor,{backgroundColor:'#EF5350'}]} />
                        <Text style={styles.ieAmount}>Rs. 245.33</Text>
                    </View>
                </View>
            </View>
            
        </View>
    )
  }
}
