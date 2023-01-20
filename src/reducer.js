import { getType } from 'typesafe-actions';
import * as actions from './actions';
import produce from 'immer';

const initialState = {
      series:[
        {
          name: 'Views for day',
          type: 'column',
          data: []
        },
        {
        name: 'Jobs for day',
        type: 'line',
        data: []
      }, 
      {
        name: 'Views for day jobs',
        type: 'line',
        data: []
      }, 
      
    ],
    dateLabels:[]
};

const AppReducer = (state = initialState, action) => {
    return produce(state, (draft) => {
    switch (action.type) {
    
        case getType(actions.getJobsData.success):
            draft.dateLabels = action.payload.responseObject.Labels;
            draft.series[0].data = Object.values(action.payload.responseObject.JobsViewsPerDay);
            draft.series[1].data = Object.values(action.payload.responseObject.JobsPerDay);
            draft.series[2].data = Object.values(action.payload.responseObject.JobViews);
            break;

        case getType(actions.getJobsData.failure):
       
            alert(action.payload);
  
            break;

        default:
            return state;
    }
});
};

export default AppReducer;