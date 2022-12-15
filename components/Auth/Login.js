import { Center } from 'native-base';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
import { ROUTES } from '../constants';
// import {useNavigation} from '@react-navigation/native';

const Login = props => {
  const {navigation} = props;
//   const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main}>
        <View style={styles.textview}>
          

          <Text style={{fontSize:25, color:'blue', fontWeight:'700', marginBottom:20 }}>Login in to continue</Text>
          <TextInput  
         placeholder={"Email"} style={styles.first}/>
          <TextInput placeholder={"Password"}
          style={styles.second}
          />

          <View >
          
              <TouchableOpacity
                onPress={() => navigation.navigate(ROUTES.HOME) }
               style={{ backgroundColor: 'blue',
               padding: 10,
               marginTop: 10,
               borderRadius: 5,
               fontSize: 18,
               width: 150,
               alignItems:'center'
              
              }}
               >
                <Text style={{ color: '#fff',
                 fontWeight: 'bold',
                 textAlign: 'center'}}
                 >Log In</Text>
              </TouchableOpacity>
            
          </View>

          {/***************** FORGOT PASSWORD BUTTON *****************/}
          {/* <TouchableOpacity
            onPress={() =>
              navigation.navigate(ROUTES.FORGOT_PASSWORD, {
                userId: 'X0001',
              })
            }
            style={styles.forgotPassBtn}>
            <Text style={styles.forgotPassText}>Forgot Password?</Text>
          </TouchableOpacity> */}
        </View>

        <View >
          <Text > Don't have an account? </Text>
          {/******************** REGISTER BUTTON *********************/}
          <TouchableOpacity
            onPress={() => navigation.navigate(ROUTES.REGISTER)}>
            <Text style={{color:'red'}}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
    container : {
           
        borderRadius: 30,    
        marginBottom: 20,
        marginTop:130,
        alignItems: "center",
        height:'60%',
        width:"100%",
        padding: 20,
        alignSelf:'center'

    },
    main : {
      width:" 90%",
      height: "90%",
      backgroundColor:'#BBD9B2',
      borderRadius: 20,
      alignItems:'center',
      justifyContent: 'center',
      padding:20

    },
    textview : {
      flex:1,
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center',
      padding:10,
     
     
    },
    first: {
     
      backgroundColor: 'cyan',
      borderRadius:15,
      height:'30%',
      width:'100%',
      paddingLeft:20
    },
    second:{
      backgroundColor: 'cyan',
      borderRadius:15,
      height:'30%',
      width:'100%',
      paddingLeft:20,
      marginTop: 10
    }
    
  });