//describe block is use to group the block of test cases

import { render, screen } from '@testing-library/react';
import TestComp2Assertion from './TestComp2Assertion';
import { BrowserRouter } from "react-router-dom"
//different assertions  examples
const MockTodoFooter = ({ numberOfIncompleteTasks }) => {
    return (
        <BrowserRouter>
          <TestComp2Assertion 
            numberOfIncompleteTasks={numberOfIncompleteTasks}
          />
        </BrowserRouter>
    )
}

describe('TestComp2Assertion',()=>{
	it('should render the correct amount of incomplete tasks', () => {
	    render(
	        <MockTodoFooter 
	          numberOfIncompleteTasks={5}
	        />
	    );
	    const pElement = screen.getByText(/5 tasks left/i);
	    //toBeInTheDocument is the Assertions ..there are various different assertions
	    expect(pElement).toBeInTheDocument();
	});

	it('should render "task" when the number of incomplete tasks is one', () => {
	  render(
	      <MockTodoFooter 
	        numberOfIncompleteTasks={1}
	      />
	  );
	  const pElement = screen.getByText(/1 task left/i);
	  expect(pElement).toBeInTheDocument();
	});
})

