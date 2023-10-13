/**
 * ************************************
 *
 * @module  GroupMainContainer.jsx
 * @author  Plan It Travel
 * @date    9-4-23
 * @description stateful component that renders GroupCreatorContainer and GroupDisplayContainer
 *
 * ************************************
 */

import React from 'react';
import GroupCreatorContainer from './GroupCreatorContainer';
import GroupDisplayContainer from './GroupDisplayContainer';

const GroupMainContainer = () => {
  return (
    <div className='container'>
      <div className='outerbox'>
        {/* Need to grab user name from Login to store in state and use in H1 below */}
        <h1> Plan-it Travel Trips for Username </h1>
        <GroupCreatorContainer />
        <GroupDisplayContainer />
      </div>
    </div>
  );
};

export default GroupMainContainer;
