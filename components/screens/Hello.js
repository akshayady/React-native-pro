import { StyleSheet, Text, View, Dimensions, FlatList, TouchableOpacity, Image, SafeAreaView } from 'react-native'
import React, { useState } from 'react'

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


const data = [
  {
    name: "pakoda",
    status : "veg"
  },
  {
    name: "padfgkoda",
    status : "veg"
  },
  {
    name: "sqqq",
    status : "non veg"
  },
  {
    name: "pakdgrfgvoda",
    status : "veg"
  },
  {
    name: "ffffghg",
    status : "non veg",
    
  }
]

const Hello = () => {
  const [status, setStatus] =useState('All')
  const [datalist , setDatalist] = useState(data)
  const setStatusFilter =  status => {
     if (status !== 'All') {
      setDatalist([...data.filter(e => e.status === status)])
     }else {
      setDatalist(data)
     }
     setStatus(status)
  }

  const renderItem = ({item, index}) => {
    return (
      <View key={index} style={styles.itemContainer}>
        <View style={styles.itemLogo}>
          <Image
           style={styles.itemImage}
           source={{uri: 'data:image/jpeg;base64,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 '}}
          />

        </View>

        <View style={styles.itemBody}>
          <Text style={styles.itemName}>{item.name}</Text>

        </View>
        <View style={styles.itemStatus}>
          <Text>{item.status}</Text>
        </View>

      </View>
    )
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.listTab}>
        {
          listTab.map(e =>(
            <TouchableOpacity style={styles.btnTab}
            onPress={() => setStatusFilter(e.status)}
            >
            <Text style={styles.textTab}>{e.status}</Text>
          </TouchableOpacity>
          )) 
        }
        
      </View>
      <FlatList 
      data={datalist}
      keyExtractor={(e, i) => i.toString()}
      renderItem={renderItem}
      />
    </SafeAreaView>
  )
}

export default Hello

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingHorizontal: 10,
    justifyContent: 'center'
  },
  listTab: {
    flexDirection:'row',
    alignSelf:'center',
    marginBottom: 20
  },
  btnTab : {
        width: Dimensions.get ('window').width /3.5 ,
        flexDirection: 'row',
        borderWidth: 0.5,
        borderColor: ' #EBEBEB',
        padding:10,
        justifyContent:'center'
  },
  textTab : {
    fontSize: 15
  },
  btnTabActive: {
    backgroundColor: '#E6838D'
  },
  itemContainer: {
    flexDirection: 'row',
    paddingVertical:15
  },
  itemLogo: {
    padding: 10
  },
  itemImage : {
    width:  50,
    height: 50
  },
  itemBody: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: 'center'
  },
  itemName : {
    fontWeight: 'bold',
    fontSize: 16
  },
  itemStatus: {
    backgroundColor: 'green',
    paddingHorizontal: 6,
    justifyContent: 'center',
    right:12
  }
}) 