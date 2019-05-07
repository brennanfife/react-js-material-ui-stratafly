import Grid from '@material-ui/core/Grid';
import React from 'react';
import TripType from './TripType';
import Traveller from './Traveller';

export const TripTypeAndTraveller = props => {
  const { selectedRadio, onChangeRadio, onClickTraveller, totalTravellers } = props;
  return (
    <Grid container spacing={8}>
      <Grid item xs={9}>
        <TripType selectedRadio={selectedRadio} onChangeRadio={onChangeRadio} />
      </Grid>

      <Grid item xs={3}>
        <Traveller onClickTraveller={onClickTraveller} totalTravellers={totalTravellers} />
      </Grid>
    </Grid>
  );
};