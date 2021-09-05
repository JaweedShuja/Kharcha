
import React from 'react'
import RootFlow from './src/navigation/Stack/RootFlow'
import { Provider } from 'react-redux';
import store from './src/redux/store';

class App extends React.Component{
  render(){
    return (
        <Provider store={store}>
            <RootFlow />
        </Provider>
    )
  }
}

export default App

// import React from 'react'
// import {
//   View,
//   Text
// } from 'react-native'

// class App extends React.Component{
//   render(){
//     return(
//       <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
//         <Text>helo</Text>
//       </View>
//     )
//   }
// }

// export default App