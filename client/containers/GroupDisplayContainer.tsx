/**
 * ************************************
 *
 * @module  GroupDisplayContainer.jsx
 * @author  Plan It Travel
 * @date 9-4-23
 * @description presentation component that renders the Groups Display Component
 *
 * ************************************
 */

import React from 'react';
import GroupsDisplay from '../components/GroupsDisplay';

const GroupDisplayContainer = () => {
  return (
    <div className='innerbox'>
      <GroupsDisplay />
    </div>
  );
};

export default GroupDisplayContainer;
