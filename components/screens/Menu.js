import { StatusBar } from "native-base";
import { Dimensions, Image, SafeAreaView, StyleSheet, TouchableOpacity } from "react-native";
import { Button, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const listTab =[
    {
        status: 'All'
    },
    {
        status: 'veg'
    },
    {
        status: 'non veg'
    },
]

const Menu = (props) => {

    const Header = () => {
        return(
                    <View style={styles.header}>
                            <View style={styles.segment}>
                                <View style={styles.inner}>
                                     <Image source={require('../../assets/chef-3.png')} style={{height:80 , width:80}}/>
                                </View>
                            </View>
                            <View style={styles.segment}>
                                <View style={styles.inner}>
                                     <Text style={{fontSize:20, fontWeight: 500 , color:'grey'}}>Welcome to Hotel Rajkumar</Text>
                                       <Text style={{fontSize:12, fontWeight: 300 , color:'red'}}>Taste  the Authentic Natti Style Foods..... </Text>
                                </View>
                            </View>
                    </View>
        )
    }

    const Boxes = () => {
        return (
            <View style={styles.mainbox}>
                <View style={styles.box}>

                <Button title="Our Menu" />
                </View>

              

            </View>
        )
    } 


    const Arc = () => {
        return (
            <View  style={styles.mainbar}>
                <View style={{flexDirection:'row'}} >
                    {
                        listTab.map(e => (
                            <TouchableOpacity>
                            <Text>{e.status}</Text>
                    </TouchableOpacity>
                        ))
                    }
                    
                </View>

            </View>
        )
    }
    return(
        
       
           
            // {/* <Button title="go back" onPress={() => {
            //     props.navigation.goBack();
            // }} /> */}

            <ScrollView style={styles.container}>
                <Header />
                <Boxes />
                <Arc />
            </ScrollView>
       
    );
};

export default Menu ;

const styles = StyleSheet.create({
    container:{
       
    flex:1,
    },
    header : {
        width: '100%',
        height: '40%',
        flexDirection: 'row',
        flexWrap:'wrap',
        alignItems: 'center',
        justifyContent: 'center',
    },
    segment: {
        width:'50%',
        
        padding: 5,
    },
    inner : {
        flex: 1,
       
        alignItems: 'center',
        justifyContent: 'center',

    },

    mainbox: {
        width: '100%',
        height: '50%',
        padding:35,
        alignItems: 'center',
        justifyContent: 'center',
    },
    box: {
        width: '95%',
        height: '50%',
        padding:35,
        backgroundColor:'grey',
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    mainbar: {
        width: '100%',
        height: '75%',
        backgroundColor:'#c8c8c8',
        alignItems: 'center',
        justifyContent: 'center',
       
    },

    // listTab: {
    //     flex:1 ,
    //     backgroundColor:'#fff',
    //     padding15
    // },

    // btnTab : {
    //     width: Dimensions.get ('window').width /3.5 ,
    //     flexDirection: 'row',
    //     borderWidth: 0.5,
    //     borderColor: ' #EBEBEB',
    //     padding:10,
    //     justifyContent:'center'


    // }


    // first : {
    //     height: '18%',
    //     width : '40%',
        
    // },
    // second: { 
    //     height: '10%',
    //     width : '60%',
    //     backgroundColor: 'white'
    // },
    // third: { 
    //     height: '18%',
    //     width : '100%',
    //     alignItems:'center',
    //     justifyContent:'center'
       
       
    // },

    // fourth: { 
    //     height: '50%',
    //     width : '95%',
    //     alignItems:'center',
    //     justifyContent:'center',
    //     backgroundColor:'yellow'
       
       
    // }
   
})