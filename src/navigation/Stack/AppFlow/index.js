// import * as React from 'react';

// import { createStackNavigator } from '@react-navigation/stack';

// import HomeFlow from '../../Stack/HomeFlow'
// import AuthFlow from '../../Stack/AuthFlow'

// import { connect } from 'react-redux';

// const Stack = createStackNavigator();

// class AppFlow extends React.component {
//   render(){
//     return (
//         <Stack.Navigator
//           headerMode={'none'}
//         >
//           {
//             this.props.user.token ? 
//             (
//               <>
//                 <Stack.Screen name="HomeFlow" component={HomeFlow} />
//               </>
//             )
//             :
//             (
//               <>
//               `<Stack.Screen name="AuthFlow" component={AuthFlow} />
//               </>
//             )
//           }
          
//         </Stack.Navigator>
//     );
//   }
// }

// const mapStateToProps = state => {
// 	return {
// 		user: state.user
// 	}
// }

// export default connect(mapStateToProps,null)(AppFlow);

import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { connect } from 'react-redux';

import AuthFlow from '../AuthFlow'
import HomeFlow from '../HomeFlow'

const Stack = createStackNavigator()

class AppFlow extends React.Component{
  render(){
    return(
      <Stack.Navigator
        headerMode={'none'}
      >
        {
          this.props.user.token
          ?
          (
            <>
              <Stack.Screen name="HomeFlow" component={HomeFlow} />
            </>
          )
          :
          (
            <>
              <Stack.Screen name="AuthFlow" component={AuthFlow} />
            </>
          )
        }
      </Stack.Navigator>
    )
  }
}

const mapStateToProps = state => {
	return {
		user: state.user
	}
}

export default connect(mapStateToProps,null)(AppFlow);