/**
 * ************************************
 *
 * @module  Trip.jsx
 * @author  Plan It Travel
 * @date    9-2-23
 * @description renders Group Trip Page
 *
 * ************************************
 */

import React from 'react';
// import Navbar from './Navbar';
import ActivityDisplayContainer from '../containers/ActivityDisplayContainer';
const Trip = () => {
  return (
    <div>
      {/*<Navbar />*/}
      <ActivityDisplayContainer />
      {/* Header goes here  */}
      {/* Main container for all User components */}
      {/* Container for Activity Creator Component with input fields for ... and Submit button to POST  */}
      {/* Container for Activity Display to show each Activity component any user created and a button to Add to User
      Itinerary with a "Starwars ?" popup to display other users that added this activity to their itinerary" */}
    </div>
  );
};

export default Trip;
