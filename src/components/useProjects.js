import { useState, useEffect } from "react";

export function useProjects(getData){
     const [data, setData] = useState([]);

     const fetchData = async (data) => {
      let response = await (
        await fetch(data)
      ).json();
     return response;
    };


     useEffect(() => {
        fetchedData();
       
      }, []); // eslint-disable-line react-hooks/exhaustive-deps


     const fetchedData = async() =>{
      const response = await fetchData(getData);
      setData(response);
    }
    
    return data;
}
