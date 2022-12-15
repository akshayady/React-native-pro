import { SafeAreaView, TouchableOpacity } from "react-native";
import {StyleSheet, Button, Image, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { ROUTES } from "../constants";
import Menu from "./Menu";
import {useNavigation} from '@react-navigation/native';


const Home = () => {

    const Header = () => {
        return (
            <View style={styles.header}>
                <Image source={require('../../assets/foody.webp')} style={{height:350 , width:'100%'}} />
                <View style={{position: 'absolute' }} >

                    <Text style={{fontSize:50 , color:'white'}}>Get ready to </Text>
                    <Text style={{fontSize:20 , color:'orange'}}> taste the unlimited</Text>

                </View>
                {/* <Text style={{position: 'absolute' , fontSize:50 , color:'white'}}>Get ready to </Text> */}
                {/* <Text style={{position:'absolute', fontSize:30 , color:'orange' }}>taste the unlimited </Text> */}
                {/* <Image source={require('../../assets/foody.webp')} style={{height:'100%', width:'100%'}} />
                <Text style={{position: 'absolute',fontSize:50 , color:'white' }}>Header component</Text> */}
           </View>
        )
    }

    const Boxes = () => {
        const navigation = useNavigation();
        return (
            <View style={styles.mainbox}>
                <View style={styles.box}>
                   
                    <Text style={{fontWeight:'500'}}>Flavorful & Organic dishes everyday we cook here</Text>
                <Text>Habitant morbi tristique senectus et netus et malesuada fames. Tortor posuerconsequat</Text>
                    
                
                    <TouchableOpacity
                        onPress={() => navigation.navigate(ROUTES.MENU)} 
                        style={{position:'absolute', left:10,bottom:'5%' , backgroundColor: 'blue',
                        padding: 10,
                        margin: 15,
                        borderRadius: 5,
                        fontSize: 18,
                        width: 100,}}>
                        <Text style={{color:'yellow',fontWeight:'600' }}>Order now </Text>
                     </TouchableOpacity>
                </View>

              

            </View>
        )
    } 
    const Bar = () => {
        return (
            <View style={styles.mainbar}>
                  <View style={styles.segment}>
                        <View  style={styles.inner}>
                            <Image source={require('../../assets/bowl.png')} style={{width:60 , height: 50}} />
                            <Text style={{fontSize:16, fontWeight:'700'}}>Eat And Enjoy</Text>
                            <Text>No shooping, no cooking, no counting and no cleaning. Enjoy your
                                     healthy meals with your family.</Text>
                        </View>
                    </View>
                    <View style={styles.segment}>
                        <View  style={styles.inner}>
                        <Image source={require('../../assets/delicon.png')} style={{width:60 , height: 50}} />
                        <Text style={{fontSize:16, fontWeight:'700'}}>We Deliver Your Meals</Text>
                            <Text>We prepared and delivered meals arrive at your door. Duis autem
                              vel eum iriure dolor in hendrerit in vulputate.</Text>
                        </View>
                    </View>
                    <View style={styles.segment}>
                        <View  style={styles.inner}>
                        <Image source={require('../../assets/dish.png')} style={{width:60 , height: 50}} />
                        <Text style={{fontSize:16, fontWeight:'700'}}>Choose Your Favorite</Text>
                            <Text>Choose your favorite meals and order online or by phone. It's
                                     easy to customize your order.</Text>
                        </View>
                    </View>
                    
                    
                   

            </View>
        )
    }

    return(
       <ScrollView style={styles.container}>
       
        <Header />
        
        <Boxes />
        <Bar />
        





        


       </ScrollView>

        );
      };
      
      
  const styles = StyleSheet.create({
    container: {
        flex:1,

    },
    header : {
        width: '100%',
        height: '32%',
        backgroundColor:'#c8c8c8',
        alignItems: 'center',
        justifyContent: 'center',
        
    },

    mainbox: {
        width: '100%',
        height: '25%',
        padding:20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    box: {
        width: '95%',
        height: '90%',
        padding:25,
        backgroundColor:'cyan',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:15
    },
    mainbar : {
        width: '100%',
        height: '25%',
        padding: 5,
        flexDirection: 'column',
        marginTop:30,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf:'center',
       

    },
    segment: {
       
        width:'80%',
        height: '40%',
        padding: 10,
        marginTop:60,
       

       
       
    },
    inner : {
       
        
        alignItems: 'center',
        justifyContent: 'center',
        
    },
   
    
  })   

 

export default Home ;


  