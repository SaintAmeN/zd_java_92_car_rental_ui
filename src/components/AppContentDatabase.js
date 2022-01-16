import CardComponent from "./CardComponent";
import classes from './AppContentDatabase.module.css';
import {useEffect, useState} from "react";
import {DataGrid} from "@mui/x-data-grid";
import axios from "axios";
import instance from "../axios/axios";

const EMPTY_OFFERS_LIST = [{
    'id': 1,
    'make': 'abc',
    'model': 'def',
    'economy': 5.0,
    'type': 'SUV',
    'price': 100.0
}];

const TABLE_MODEL = [
    {width: 100, field: 'id', headerName: 'Id', sortable: false},
    {width: 100, field: 'make', headerName: 'Make', sortable: false},
    {width: 120, field: 'model', headerName: 'Model', sortable: false},
    {width: 170, field: 'economy', headerName: 'Economy[1-10]', sortable: false},
    {width: 140, field: 'type', headerName: 'Body/Type', sortable: false},
    {width: 120, field: 'price', headerName: 'Price[$]', sortable: false},
];

const AppContentDatabase = () => {
    const [offers, setOffers] = useState([...EMPTY_OFFERS_LIST]);

    useEffect(() => {
        pullRecordsFromDatabaseServer();
    }, [])

    const pullRecordsFromDatabaseServer = () => {
        instance.get("/offers")
            .then((data) => {
                // data ma pole data
                console.log("Otrzymaliśmy sukces odpowiedź!")
                console.log("Rekordy: " + JSON.stringify(data.data));

                setOffers(data.data);
            })
            .catch((error) => {
                console.log("Otrzymaliśmy odpowiedź o błędzie!")
            });
    }

    const handleRemoveRecord = (row) => {
        instance.delete("/offers/" + row.id)
            .then((data) => {
                console.log("Otrzymaliśmy sukces odpowiedź!");
                pullRecordsFromDatabaseServer();
            })
            .catch((error) => {
                console.log("Otrzymaliśmy odpowiedź o błędzie!");
            });
    }

    return (
        <div>
            <CardComponent title={'Car Rental Offers'}>
                <div className={classes.TableContainer}>
                    <DataGrid
                        rows={offers}
                        columns={TABLE_MODEL}
                        rowsPerPageOptions={[5]}
                        pageSize={10}
                        onRowDoubleClick={handleRemoveRecord}>
                    </DataGrid>
                </div>
            </CardComponent>
        </div>
    )
}

export default AppContentDatabase;