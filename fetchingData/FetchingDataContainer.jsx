import { useEffect, useState } from "react";
import { FetchingData } from "./fetchingData";

export const FetchingDataContainer = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        let getData = fetch("https://jsonplaceholder.typicode.com/users");

        getData
        .then((data) => data.json())
        .then((response) => {
            setUsers(response);
        })
        .catch((error) => {
            console.log({ error });
        });
    }, []);

    console.log(users);

    return (
        <div>
            <FetchingData />
        </div>
    );
};
