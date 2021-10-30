import CardComponent from "./CardComponent";
import classes from './AppContentForm.module.css';
import DeleteIcon from '@material-ui/icons/Delete';
import {Button, Grid, MenuItem, Select, TextField} from "@material-ui/core";
import {useState} from "react";

// Oferta Car Rental
//  - id
//  - marka samochodu
//  - model samochodu
//  - stopień ekonomii (1-10) (10=ekonomiczny)
//  - typ samochodu (SUV, CABRIO, SEDAN)
//  - cena

// Model / encja pustej oferty/nowego obiektu
const EMPTY_NEW_OFFER = {
    'id': null,
    'make': '',
    'model': '',
    'economy': 5.0,
    'body': 'SUV',
    'price': 100.0
}

const AppContentForm = () => {
    // Tworząc formularz nadajemy mu stan pustego obiektu
    const [editedOffer, setEditedOffer] = useState({...EMPTY_NEW_OFFER});

    const handleChangeForm = name => event => {
        setEditedOffer({ ...editedOffer, [name]: event.target.value });
    };

    const handleClearForm = () => {
        setEditedOffer({...EMPTY_NEW_OFFER})
    }

    return (
        <div>
            <CardComponent title={'Car Rental Offer Form'}>
                <Grid container className={classes.FormContainer}>
                    <Grid item xs={12}>
                        <TextField value={editedOffer.make}
                                   onChange={handleChangeForm("make")}
                                   className={classes.FormStretchField}
                                   label={'Car Make'} size={'small'} variant="filled"/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField value={editedOffer.model}
                                   onChange={handleChangeForm("model")}
                                   className={classes.FormStretchField}
                                   label={'Car Model'} size={'small'} variant="filled"/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField value={editedOffer.economy}
                                   onChange={handleChangeForm("economy")}
                                   className={classes.FormStretchField}
                                   type="number"
                                   inputProps={{
                                       'min': 1,
                                       'max': 10,
                                       'step': 0.1,
                                   }}
                                   label={'Economy Level'} size={'small'} variant="filled"/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField value={editedOffer.body}
                                   onChange={handleChangeForm("body")}
                                   className={classes.FormStretchField} select
                                   label='Car Body/Type' size={'small'} variant="filled">
                            <MenuItem value={'SUV'}>SUV</MenuItem>
                            <MenuItem value={'CABRIO'}>Cabrio</MenuItem>
                            <MenuItem value={'SEDAN'}>Sedan</MenuItem>
                        </TextField>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField value={editedOffer.price}
                                   onChange={handleChangeForm("price")}
                                   className={classes.FormStretchField}
                                   type="number"
                                   inputProps={{
                                       'min': 0.01,
                                       'step': 0.01,
                                   }}
                                   label={'Price [per hour]'} size={'small'} variant="filled"/>
                    </Grid>
                    <Grid xs={1}/>
                    <Grid container xs={10}>
                        <Grid item xs={6}>
                            <Button className={classes.FormStretchField}
                                    size={'small'} variant="contained"
                                    startIcon={<DeleteIcon/>} color="error"
                                    onClick={handleClearForm}>
                                Reset
                            </Button>
                        </Grid>
                        <Grid item xs={6}>
                            <Button className={classes.FormStretchField}
                                    size={'small'} variant="contained"
                                    color="success">
                                Submit
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </CardComponent>
        </div>
    )
}

export default AppContentForm;