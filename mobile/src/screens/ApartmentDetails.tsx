import React, { useEffect , useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {AppartmentItem} from "../interfaces/AppartmentInterfaces"
import {GetApartmentsURL} from "../urls"

const ApartmentDetails = ({navigation, route}) => {
    const [apartment, setApartment] = useState<AppartmentItem>();

    useEffect(()=>{
      getApartmentDetails()
    },[])

    const getApartmentDetails = async() => {
        const headers= { 'content-type': 'application/json'} 
        await fetch(GetApartmentsURL+route.params.id, {method:'GET',headers:headers})
            .then(response => response.json())
            .then(data => {
                setApartment(data)
            })
            .catch(error => {
                console.log('Error fetching data:', error);
            });
    }

    return (
        <View style={styles.container}>
        <Text style={styles.heading}>Apartment Details</Text>
        <View style={styles.card}>
            <View style={styles.cardContent}>
            <Text style={styles.title}>{apartment?.title ? apartment.title : '---'}</Text>
            <Text style={styles.text}>Price: ${apartment?.price ? apartment.price : '---'}</Text>
            <Text style={styles.text}>Area: {apartment?.area ? apartment.area : '---'}</Text>
            <Text style={styles.text}>Description: {apartment?.description ? apartment.description : '---'}</Text>
            <Text style={styles.text}>Floor: {apartment?.floor ? apartment.floor : '---'}</Text>
            <Text style={styles.text}>Number of Rooms: {apartment?.number_of_rooms ? apartment.number_of_rooms : '---'}</Text>
            <Text style={styles.text}>Address: {apartment?.address ? apartment.address : '---'}</Text>
            </View>
        </View>
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  card: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardContent: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
  },
});

export default ApartmentDetails;