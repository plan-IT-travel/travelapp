/**
 * ************************************
 *
 * @module  slice.js
 * @author  Plan It Travel
 * @date    9-4-23
 * @description reducer or slice for user/group/activity data
 *
 * ************************************
 */

import { createSlice } from '@reduxjs/toolkit';

//this state governs the state of the entire app
const initialState = {
  groupId: 1,
  newGroup: {
    groupName: '',
    travelDestination: '',
    dates: '',
    groupId: '',
  },
  groupList: [],
  newActivity: {
    activityName: '',
    activityDestination: '',
    date: '',
    times: '',
    activityId: '',
    participantList: [],
    link: '',
    description: '',
  },
  activityList: [],
  users: {
    userName: '',
  },
};

/*

response = fetch(/api/itineraries/1)

response is below
[{
    itinerary_id,
    title,
    category
    hyperlink,
    cost,
    date,
    group_id
}]

Use a reducer to update the state -> Look into useDispatch and useSelector
Update state in the itinerary container
*/

/*

{[arrayofComponents]}

*/

export const featureSlice = createSlice({
  name: 'feature',
  initialState,
  reducers: {
    ADD_GROUP: (state, action) => {
      // post to server with action.payload then create newGroup from response?

      const newGroup = {
        groupName: action.payload.groupName,
        // groupId: response with group_id?
        travelDestination: action.payload.travelDestination,
        dates: action.payload.dates,
      };

      state.groups.groupList.push(newGroup);
      return state;
    },
    UPDATE_USER: (state, action) => {
      state.users.user = action.payload.name;
      return state;
    },
    setItineraryItems: (state, action) => {
        if (Array.isArray(action.payload)) {
            state.activityList = action.payload;
        }
    }
  },
});

export const { ADD_GROUP, UPDATE_USER, setItineraryItems } = featureSlice.actions;

export default featureSlice.reducer;
