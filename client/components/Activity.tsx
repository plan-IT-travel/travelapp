import React from "react";
import { useSelector } from "react-redux";

const Activity = (
    {index}
    ) => {
    const { _id, group_id, title, category, hyperlink, cost, date_of_event} = useSelector((store) => store.groups.activityList[index]);
    return(
        <div className="itin-item">
            
            <div>
                <h2>{title}</h2>
            </div>
            <div>
                <div><span><b>{'Category:'}</b></span>{category}</div>
                <div>{date_of_event}</div>
            </div>
            
            <div>
                <div><b>Cost:</b> ${Number(cost).toFixed(2)}</div>
                <div><a href={hyperlink}>Page</a></div>
            </div>
        </div>
    )
}

export default Activity;