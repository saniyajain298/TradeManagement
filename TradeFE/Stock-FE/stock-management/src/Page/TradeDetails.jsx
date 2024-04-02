import React, { useEffect, useMemo, useState } from 'react'
import Navbar from '../Components/Navbar/Header';
import BasicTable from '../Components/Table/BasicTable';
import { getTradeDetailsList } from '../Components/AxiosAPI/tradeAPI';
import { COLUMNS } from '../Components/Table/TradeColumn';
const TradeDetails = (props) => {

    const [tradeList, setTradeList] = useState()
    const [data] = useState(props.tableData);
    const columns = useMemo(() => COLUMNS, []);

    useEffect(() => {
        console.log("inside usereffect")
        const fetchData = async () => {
            try {
                const tradeDetailsList = await getTradeDetailsList();
                console.log("inside usereffect1",tradeDetailsList)
                setTradeList(tradeDetailsList);
            } catch (error) {
                console.error('Error fetching trade details:', error);
            }
        };

        fetchData();
    }, []);
    
    
  return (
    <div className={`container-main ${props.themeMode}-main`}>
      <Navbar themeMode={props.themeMode} setThemeMode={props.setThemeMode}/>
      <div className='table-container'>
        <h1 className='heading'>Trade</h1>
        {tradeList && <BasicTable tableData={tradeList} tableColumn={columns} themeMode={props.themeMode}/>}
      </div>
    </div>
  )
}

export default TradeDetails
