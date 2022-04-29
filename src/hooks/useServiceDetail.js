import { useEffect, useState } from "react";

const useServiceDetail = serviceId => {
    const [service, setServive] = useState([]);

    useEffect(() => {
        const url = `http://localhost:5000/service/${serviceId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setServive(data))
    }, [serviceId]);

    return [service];

};

export default useServiceDetail;