import axios from "axios";
import Link from 'next/link';
import {GetApartmentsURL} from "../urls"
import { useEffect , useState} from "react";
import "../app/globals.css"
import { AppartmentItem } from '../interfaces/appartment-interfaces'

export default function AllApartments() {
  const [appartments, setAppartments] = useState<AppartmentItem[]>([]);
  const [tableHeaders, setTableHeaders] = useState<React.JSX.Element[]>([]);

  useEffect(()=>{
    getAllApartments()
  },[])

  const getAllApartments = async() => {
    const headers= { 'content-type': 'application/json', "Access-Control-Allow-Origin": "*", } 
    await axios({
      method: 'get',
        url: GetApartmentsURL,
        withCredentials: false,
        headers: headers
    }).then((res) => {
            if(res.status==200){
              setAppartments(res.data)
              let tableHeaders = Object.keys(res.data[0]).map(key => (
                <th key={key} 
                scope="col"
                className="px-4 py-2 focus-visible:border-blue-500"
                >{key}</th>
              ));
              setTableHeaders(tableHeaders)
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
        <h2 className="text-2xl font-bold mb-4">Table of Data</h2>
        <table 
        className="table-auto"
        >
          <thead 
          className="bg-gray-50"
          >
            <tr>
              {tableHeaders.map(item=>(
                item
              ))
              }
              <th key={tableHeaders.length} 
                scope="col"
                className="px-4 py-2 focus-visible:border-blue-500"
                ></th>
            </tr>
          </thead>
          <tbody 
          className="divide-gray-200 divide-y divide-gray-200"
          >
            {appartments.map(item => (
              <tr key={item.id} 
              className="hover:bg-gray-50"
              >
                {
                  Object.keys(item).map((key) => (
                    <td
                      key={key}
                      className="px-6 py-4 whitespace-nowrap text-sm"
                    > {item[key]}</td>
                  ))
                }
                <Link 
                href={`/specific-apartment?id=${item.id}`}
                >
                  
                    <button>Go to Details</button>
                  
                </Link>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="centered-div">
        <Link href="./add-apartment">
              <button>Create New Apartment</button> 
        </Link>
      </div>
   </main>
  );
}
