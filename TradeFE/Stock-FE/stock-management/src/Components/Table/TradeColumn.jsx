// import { FaEdit, FaTrash } from 'react-icons/fa';
import EditIcon from "../../assets/SVG/edit-icon.svg" 
import DeleteIcon from "../../assets/SVG/delete-icon.svg"
import { createOrder } from "../AxiosAPI/orderAPI";
import Swal from 'sweetalert2'

const handleOrder = async (data) => {
  console.log("caliing", data)
  try {
    console.log("bfter calign")
    await createOrder(data);
    Swal.fire({
      title: 'Error!',
      text: 'Do you want to continue',
      icon: 'error',
      confirmButtonText: 'Cool'
    })
    console.log("after calign")

  } catch (error) {
    console.error("Error fetching trade details:", error);
  }
};

export const COLUMNS = [
  {
    Header: "ID",
    accessor: "id",
  },
  {
    Header: "Stock name",
    accessor: "stockName",
  },
  {
    Header: "Listing price",
    accessor: "listingPrice",
  },
  {
    Header: "Quantity",
    accessor: "quantity",
  },
  {
    Header: "Type",
    accessor: "type",
  },
  {
    Header: "Price per unit",
    accessor: "pricePerUnit",
  },
  {
    Header: "Created At",
    accessor: "createdAt",
  },
  {
    Header: "Updated At",
    accessor: "updatedAt",
  },
  {
    Header: "Order",
    accessor: "orderMaster",
    Cell: ({ row }) => {
      console.log(row.original.orderMaster)
        if (row.original.orderMaster) {
            return <a href="/order">{row.original.orderMaster["orderId"]}</a>
          } else {
            return <button className="btn-main" onClick={()=>handleOrder(row.original.id)}>Order</button>;
          }
    },
  },
  {
    Header: "Action",
    Cell: ({ row }) => (
      <>
        <img src={EditIcon} alt="edit-icon" style={{ cursor: "pointer", width:"17px" }}/>
        <img src={DeleteIcon} alt="edit-icon" style={{ cursor: "pointer", width:"17px" }}/>
       
      </>
    ),
  },
];
