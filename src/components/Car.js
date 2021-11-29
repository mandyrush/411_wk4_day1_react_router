import React from 'react'
import cars from '../cars.json'
// import material ui components here //
// Container, Paper, Chip //
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            marginTop: theme.spacing(8),
            padding: theme.spacing(8)
        },
    },
}));

const Car = (props) => {
    const classes = useStyles();
    let id = props.match.params.id;
    let foundCar = cars.find(car => Number(car.id) === Number(id));
    console.log(foundCar);

    return (
        <Container maxWidth="sm">
            <div className={classes.root}>
                <Paper>
                    <h1>{foundCar.Name}</h1>
                    <Chip label={`id: ${foundCar.id}`} />
                    <Chip label={`Name: ${foundCar.Name}`} />
                    <Chip label={`Miles_per_Gallon: ${foundCar.Miles_per_Gallon}`} />
                    <Chip label={`Cylinders: ${foundCar.Cylinders}`} />
                    <Chip label={`Displacement: ${foundCar.Displacement}`} />
                    <Chip label={`Horsepower: ${foundCar.Horsepower}`} />
                    <Chip label={`Weight_in_lbs: ${foundCar.Weight_in_lbs}`} />
                    <Chip label={`Acceleration: ${foundCar.Acceleration}`} />
                    <Chip label={`Year: ${foundCar.Year}`} />
                    <Chip label={`Origin: ${foundCar.Origin}`} />
                </Paper>
            </div>
        </Container>
    )
}

export default Car