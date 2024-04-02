import React, { useEffect, useMemo, useState } from "react";
import Navbar from "../Components/Navbar/Header";
import BasicTable from "../Components/Table/BasicTable";
import { getOrderList } from "../Components/AxiosAPI/orderAPI";
import { COLUMNS } from "../Components/Table/OrderColumn";

const OrderMaster = (props) => {
  const [tradeList, setTradeList] = useState();
  const columns = useMemo(() => COLUMNS, []);
    
  useEffect(() => {
    console.log("inside usereffect");
    const fetchData = async () => {
      try {
        const tradeDetailsList = await getOrderList();
        console.log("inside usereffect1", tradeDetailsList);
        setTradeList(tradeDetailsList);
      } catch (error) {
        console.error("Error fetching trade details:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={`container-main ${props.themeMode}-main`}>
      <Navbar themeMode={props.themeMode} setThemeMode={props.setThemeMode} />
      <div className="table-container">
        <h1 className="heading">Orders</h1>
        {tradeList && <BasicTable tableData={tradeList} tableColumn={columns} themeMode={props.themeMode}/>}
      </div>
    </div>
  );
};

export default OrderMaster;
