/**
 * ************************************
 *
 * @module  GroupCreator.jsx
 * @author  Plan It Travel
 * @date    9-4-23
 * @description presentation component that takes user input for new group creation
 *
 * ************************************
 */

/* Container for Group Creator Component with Input field for Name of Group/Trip and Start/End Dates and Submit button to POST */

import React, { useRef, useState } from 'react';
import { ADD_GROUP } from '../features/slice';
import store from '../store';
import { useSelector } from 'react-redux';

const GroupCreator = props => {
  const [dates, setDates] = useState('');

  const addGroup = () => {
    const groupName = document.getElementById('groupName').value;
    const travelDestination =
      document.getElementById('travelDestination').value;
    props.dispatch(ADD_GROUP({ groupName, travelDestination, dates }));
    document.getElementById('groupName').value = '';
    document.getElementById('travelDestination').value = '';
    document.getElementById('dates').value = '';
  };

  const DatePicker = () => {
    const dates = useSelector(state => state.groups.dates);
    const dateInputRef = useRef(null);
    const handleChange = e => {
      setDates(e.target.value);
    };
  };

  return (
    <div>
      <h2 id='new-group'>Create New Group</h2>
      <label htmlFor='groupName'>Group Name: </label>
      <input type='text' id='groupName'></input>
      <label htmlFor='travelDestination'>Travel Destination: </label>
      <input type='text' id='travelDestination'></input>
      <input
        type='date'
        id='dates'
        onChange={DatePicker.handleChange}
        ref={DatePicker.dateInputRef}></input>
      <p>Selected Dates: {dates}</p>
      <button type='button' onClick={() => addGroup()}>
        Add Group
      </button>
    </div>
  );
};

export default GroupCreator;
