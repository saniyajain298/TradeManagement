export const COLUMNS = [
  {
    Header: "ID",
    accessor: "id",
  },
  {
    Header: "Trade Id",
    accessor: "tradeDetails.id",
    Cell: ({ row }) => {
      return row.original.tradeDetails["id"]
    }
  },
  {
    Header: "Stock name",
    accessor: "tradeDetails.stockName",
    Cell: ({ row }) => {
      return row.original.tradeDetails["stockName"]
    }
  },
  {
    Header: "Listing price",
    accessor: "tradeDetails.listingPrice",
    Cell: ({ row }) => {
      return row.original.tradeDetails["listingPrice"]
    }
  },
  {
    Header: "Quantity",
    accessor: "tradeDetails.quantity",
    Cell: ({ row }) => {
      return row.original.tradeDetails["quantity"]
    }
  },
  {
    Header: "Type",
    accessor: "tradeDetails.type",
    Cell: ({ row }) => {
      return row.original.tradeDetails["type"]
    }
  },
  {
    Header: "Price per unit",
    accessor: "tradeDetails.pricePerUnit",
    Cell: ({ row }) => {
      return row.original.tradeDetails["pricePerUnit"]
    }
  },
  {
    Header: "Order Created At",
    accessor: "createdAt",
  },
  {
    Header: "Order Updated At",
    accessor: "updatedAt",
  },
];
