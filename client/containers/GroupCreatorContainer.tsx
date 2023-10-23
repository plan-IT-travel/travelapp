/**
 * ************************************
 *
 * @module  GroupCreatorContainer.jsx
 * @author  Plan It Travel
 * @date    9-4-23
 * @description stateful component that renders GroupCreator component
 *
 * ************************************
 */

import React from 'react';
import GroupCreator from '../components/GroupCreator';

const GroupCreatorContainer = () => {
  return (
    <div className='innerbox'>
      <GroupCreator />
    </div>
  );
};

export default GroupCreatorContainer;
