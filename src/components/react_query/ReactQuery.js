import React from "react";
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import FetchData from './FetchData';
const queryClient = new QueryClient()
const ReactQuery = () =>{
	return(
		<QueryClientProvider client={queryClient}>
          <div>
              <h2>React Query</h2>
              <br/><br/>
              <FetchData/>
          </div>
          </QueryClientProvider>
		)
}
export default ReactQuery;