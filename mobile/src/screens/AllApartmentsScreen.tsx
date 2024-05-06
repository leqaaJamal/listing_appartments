import React, { useEffect , useState} from 'react';
import { FlatList, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {AppartmentItem} from "../interfaces/AppartmentInterfaces"
import {GetApartmentsURL} from "../urls"


const AllApartments = ({navigation}) => {
    const [apartments, setApartments] = useState<AppartmentItem[]>([]);
    const [tableHeaders, setTableHeaders] = useState([{id: 0, title:"Title", address:"Address", price:"Price"}]);

    useEffect(()=>{
        getAllApartments()
    },[])

    const getAllApartments = async() => {
        const headers= { 'content-type': 'application/json'} 
        await fetch(GetApartmentsURL, {method:'GET',headers:headers})
            .then(response => response.json())
            .then(data => {
                setApartments(data)
            })
            .catch(error => {
                console.log('Error fetching data:', error);
            });
      }

    const renderApartmentItem = ({ item }: { item: AppartmentItem }) => (
        <TouchableOpacity onPress={() => handleApartmentPress(item)}>
        <View style={styles.row}>
            <Text style={styles.cell}>{item.title}</Text>
            <Text style={styles.cell}>{item.address}</Text>
            <Text style={styles.cell}>{item.price}</Text>
        </View>
        </TouchableOpacity>
        
    );
    const renderTableHeaders = ({ item }: { item:{id:number, title:string, address:string, price:string} }) => (
        <View style={styles.row}>
            <Text style={styles.cell}>{item.title}</Text>
            <Text style={styles.cell}>{item.address}</Text>
            <Text style={styles.cell}>{item.price}</Text>
        </View>
        
    );

    const handleApartmentPress = (apartment: AppartmentItem) => {
        navigation.navigate('ApartmentDetails', {
            screen: 'ApartmentDetails',
            id: apartment.id 
          });
    };


    const styles = StyleSheet.create({
        row: {
          flexDirection: 'row',
          borderBottomWidth: 1,
          borderBottomColor: 'lightgray',
          paddingVertical: 10,
        },
        cell: {
          flex: 1,
          paddingHorizontal: 10,
          borderRightWidth: 1,
          borderRightColor: 'lightgray',
        },
      }); 

    return (
        <View>
        <FlatList
            data={tableHeaders}
            renderItem={renderTableHeaders}
            keyExtractor={(item) => item.id.toString()}
        />
        <FlatList
            data={apartments}
            renderItem={renderApartmentItem}
            keyExtractor={(item) => item.id.toString()}
        />
        </View>
    );
};

export default AllApartments;