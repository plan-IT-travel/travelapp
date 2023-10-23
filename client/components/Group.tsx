/**
 * ************************************
 *
 * @module  Group.jsx
 * @author  Plan It Travel
 * @date    9-4-23
 * @description presentation component that renders a single box for each group
 *
 * ************************************
 */

/* Container for Groups Display to show each Group component the user created and or signed up for with onClick to expand to see user itinerary */

import React from 'react';
import { useSelector } from 'react-redux';

const Group = props => {
  const groups = useSelector(state => state.groups);

  return (
    <div className='groupBox'>
      <p>
        <strong>Group Name: </strong>
        {`${groups.groupsList[props.index].groupName}`}
      </p>
      <p>
        <strong>Travel Destination: </strong>
        {`${groups.groupsList[props.index].travelDestination}`}
      </p>
      <p>
        <strong>Start Date: </strong>
        {`${groups.groupsList[props.index].startDate}`}
      </p>
      <p>
        <strong>End Date: </strong>
        {`${groups.groupsList[props.index].endDate}`}
      </p>
      {/* <button onClick={() => deleteGroup()}>Delete Group</button> */}
    </div>
  );
};

export default Group;
