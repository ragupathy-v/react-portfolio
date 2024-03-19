
import axios from 'axios';
import { useState, useEffect } from 'react';
function Data() {
    const [datas, setDatas] = useState(null);

    useEffect(() => {
        axios.get('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae')
            .then(res => {
                console.log(res.data)
                setDatas(res.data)
            })
            .catch(error => console.error("Error fetching data:", error));
    }, []);


    return datas;
}

export default Data;