import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { setItineraryItems } from '../features/slice';
import Activity from '../components/Activity';
const ActivityDisplayContainer = () => {
  // Get the current group being viewed from the store
  const { groupId, activityList } = useSelector((store)=>store.groups);
  // set useDispatch
  
  const dispatch = useDispatch();

  useEffect(() => {
    // We need to fetch the results from the backend here
    async function getItineraries() {
      const results = await fetch(`/api/itinerary/${groupId}`);
      const items = await results.json();
      // Set itinerary items
      dispatch(setItineraryItems(items));
    } 
    getItineraries();
  }, [activityList.length])

  const itinerary_item_comps = [];
  activityList.forEach((element, index) => {
    itinerary_item_comps.push(
      <Activity
        key={`Itin_${index}`}
        index={index}
      />
    )
  })

  return (
    <div>
      <h1>Trip Component</h1>
      <div className="trip-feed">
        {itinerary_item_comps}
      </div>
    </div>
  );
};

export default ActivityDisplayContainer;