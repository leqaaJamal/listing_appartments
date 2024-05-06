import axios from "axios";
import {GetApartmentsURL} from "../urls";
import { useEffect , useState} from "react";
import { useRouter } from 'next/router';
import "../app/globals.css"
import { AppartmentItem } from '../interfaces/appartment-interfaces'

export default function AllApartments() {
  const [apartment, setApartment] = useState<AppartmentItem>();
  const router = useRouter();
  const { id } = router.query;
  useEffect(()=>{
    if(id)
        getApartment()
  },[id])

  const getApartment = async() => {
    const headers= { 'content-type': 'application/json', "Access-Control-Allow-Origin": "*", } 
    await axios({
      method: 'get',
        url: GetApartmentsURL+id,
        withCredentials: false,
        headers: headers
    }).then((res) => {
            if(res.status==200){
              setApartment(res.data)
            }
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
  }
  
  return (
    <main 
    className="flex min-h-screen flex-col items-center justify-between p-24"
    >
      <div 
      className="container mx-auto"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Appartment Details</h2>
            <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg overflow-hidden">
                <div className="px-6 py-4">
                    <h1 className="text-3xl font-bold text-gray-800 mb-4">{apartment?.title?apartment?.title:'---'}</h1>
                    <p className="text-lg text-gray-600 mt-2">Price: ${apartment?.price?apartment?.price:'---'}</p>
                    <p className="text-lg text-gray-600 mt-2">Area: {apartment?.area?apartment?.area:'---'} </p>
                    <p className="text-lg text-gray-600 mt-2">Description: {apartment?.description?apartment?.description:'---'}</p>
                    <p className="text-lg text-gray-600 mt-2">Floor: {apartment?.floor?apartment?.floor:'---'}</p>
                    <p className="text-lg text-gray-600 mt-2">Number of Rooms: {apartment?.number_of_rooms?apartment?.number_of_rooms:'---'}</p>
                    <p className="text-lg text-gray-600 mt-2">Address: {apartment?.address?apartment?.address:'---'}</p>
                </div>
            </div>
      </div>
   </main>
  );
}
