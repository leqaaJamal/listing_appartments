import axios from "axios";
import {CreateApartmentURL} from "../urls";
import { useState} from "react";
import "../app/globals.css"
import { AppartmentItem } from '../interfaces/appartment-interfaces'

export default function AllApartments() {
  const [apartment, setApartment] = useState<AppartmentItem>({} as AppartmentItem);

  const addApartment = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const headers= { 'content-type': 'application/json', "Access-Control-Allow-Origin": "*", } 
    await axios({
      method: 'post',
        url: CreateApartmentURL,
        data: apartment,
        withCredentials: false,
        headers: headers
    }).then((res) => {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setApartment((prevState) => ({
        ...(prevState || {}),
      [name]: value
      }));
  };


  return (
    <main 
    className="flex min-h-screen flex-col items-center justify-between p-24"
    >
      <div 
      className="container mx-auto"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Add New Appartment Details</h2>
            <div className="max-w-lg mx-auto shadow-md rounded-lg overflow-hidden">
            <form onSubmit={addApartment}>
                <div className="px-6 py-4">
                <input type="text" name="title" onChange={handleInputChange} placeholder="Enter the title" className="input-field" />
                <input type="number" name="price" onChange={handleInputChange} placeholder="Enter the price" className="input-field" />
                <input type="number" name="area" onChange={handleInputChange} placeholder="Enter the area" className="input-field" />
                <input type="text" name="description" onChange={handleInputChange} placeholder="nter the desription" className="input-field" />
                <input type="number" name="floor" onChange={handleInputChange} placeholder="Enter the floor number" className="input-field" />
                <input type="number" name="number_of_rooms" onChange={handleInputChange} placeholder="Enter number of rooms" className="input-field" />
                <input type="text" name="address" onChange={handleInputChange} placeholder="Enter the address" className="input-field" />
                <button type="submit" className="btn-submit bg-white shadow-md">Submit</button>
            </div>
                </form>
            </div>
      </div>
   </main>
  );
}
