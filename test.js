// import { SafeAreaView, StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native'
// import React, { useState } from 'react'
// import styles from './styles';

// export default function App() {
//   //10-70
//   const [name, setName] = useState('React')
//   const [age, setAge] = useState(454)


//   function testFunction() {
//     setName('React Native')
//   }

//   return (
//     <SafeAreaView style={{ flex: 1, backgroundColor: 'red' }} >
//       <View style={{ ...styles.container, backgroundColor: 'pink', flex: 0.5 }}>
//         <Text style={{ fontWeight: 'bold', }}>{name}</Text>

//         <Text style={{ fontWeight: 'bold',fontSize: 50 }}>{age}</Text>
//         <Button title='Click me' onPress={testFunction} />

//         <TouchableOpacity
//           onPress={testFunction}
//           activeOpacity={0.7}
//           style={{
//             height: 42,
//             backgroundColor: 'green',
//             alignItems: 'center',
//             justifyContent: 'center',
//             marginHorizontal: 10

//           }}
//         >
//           <Text style={{ color: 'white' }}>Save</Text>
//         </TouchableOpacity>


//         <Image 
    
//         style={{
//           height: 100,
//           width: 100,
//           alignSelf:'center',
//           marginTop: 20,
//           borderRadius: 10
//         }} source={require('./react-native.png')} />
       
//       </View>

//       <View style={{ backgroundColor: 'orange', flex: 0.5, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Flex 2</Text>
//       </View>
//     </SafeAreaView>
//   )
// }

