/**
 * ************************************
 *
 * @module  GroupsDisplay.jsx
 * @author  Plan It Travel
 * @date    9-4-23
 * @description presentation component that renders the Group components in an array
 *
 * ************************************
 */

import React from 'react';
import Group from './Group.js';
import { useSelector } from 'react-redux';

// initialState = { groupName="", travelDestination = "", dates="", groupId = "", groupList = []};

const GroupsDisplay = () => {
  const groups = useSelector(state => state.groups.groupList);
  console.log(groups);
  const displayGroups = [];

  for (let i = 0; i < groups.length; i++) {
    displayGroups.push(<Group index={i} key={`group_${i}`} />);
  }

  return (
    <div className='displayBox'>
      <h4>Your Trips</h4>
      {displayGroups}
    </div>
  );
};

export default GroupsDisplay;
