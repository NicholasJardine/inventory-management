"use client"

import React from 'react'
import { useGetProductsQuery } from '../state/api'
import Header from '../(components)/Header'
import { DataGrid, GridColDef } from '@mui/x-data-grid'


const columns: GridColDef[] = [
    {
        field: "ProductId", headerName: "ID", width: 90
    },
    {
        field: "name", headerName: "Product Name", width: 200
    },
    {
        field: "price", headerName: "Price", width: 110, type: "number", valueGetter: (value, row) => `$${row.price}`
    },
    {
        field: "rating", headerName: "Rating", width: 110, type: "number", valueGetter: (value, row) => row.rating ? row.rating : "N/A",
    },
    {
        field: "stockQuantity", headerName: "Stock Quantity", width: 150,  type: "number"
    }
]
const Inventory = () => {
    const {data:products, isError, isLoading} = useGetProductsQuery();

    if (isLoading){
        return <div className='py-4'>Loading...</div>;
    } 

    if (isError || !products){
        return <div className='text-center text-red-500 py-4'>
                     Failed to fetch products.
                </div>;
    } 


  return (
    <div className='flex flex-col'>
        <Header name = "inventory"/>
        <DataGrid rows={products}
        columns={columns} getRowId={(row) => row.productId } checkboxSelection className='bg-white shadow rounded-lg border border-gray-200 mt-5 text-gray-700'/>
    </div>
  )
}

export default Inventory



// "use client";

// import React, { useState, useEffect } from "react";
// import { useGetProductsQuery } from "../state/api";
// import Header from "../(components)/Header";
// import { DataGrid, GridColDef } from "@mui/x-data-grid";

// const columns: GridColDef[] = [
//   {
//     field: "ProductId",
//     headerName: "ID",
//     width: 90,
//   },
//   {
//     field: "name",
//     headerName: "Product Name",
//     width: 200,
//   },
//   {
//     field: "price",
//     headerName: "Price",
//     width: 110,
//     type: "number",
//     valueGetter: (value, row) => `$${row.price}`,
//   },
//   {
//     field: "rating",
//     headerName: "Rating",
//     width: 110,
//     type: "number",
//     valueGetter: (value, row) => (row.rating ? row.rating : "N/A"),
//   },
//   {
//     field: "stockQuantity",
//     headerName: "Stock Quantity",
//     width: 150,
//     type: "number",
//   },
// ];

// const Inventory = () => {
//   const { data: products, isError, isLoading } = useGetProductsQuery();
//   const [clientRendered, setClientRendered] = useState(false);

//   // Ensure this runs only after hydration
//   useEffect(() => {
//     setClientRendered(true);
//   }, []);

//   if (isLoading) {
//     return <div className="py-4">Loading...</div>;
//   }

//   if (isError || !products) {
//     return (
//       <div className="text-center text-red-500 py-4">
//         Failed to fetch products.
//       </div>
//     );
//   }

//   return (
//     <div className="flex flex-col">
//       <Header name="inventory" />
//       {clientRendered && (
//         <DataGrid
//           rows={products}
//           columns={columns}
//           getRowId={(row) => row.ProductId}
//           checkboxSelection
//         />
//       )}
//     </div>
//   );
// };

// export default Inventory;