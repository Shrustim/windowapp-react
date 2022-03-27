import React from "react";
import Testcomponent1 from "./Testcomponent1";
import TestComp2Assertion from "./TestComp2Assertion";
import FireEvents from "./FireEvents";
const TestCase = () => {
	return(
		<div>
             <h1>Test case Study</h1>
             <h3>* <u>  Using Query Methods </u> </h3>
             <Testcomponent1 title="my heading" />

             <h3>* <u> Assertions </u> </h3>
             <TestComp2Assertion numberOfIncompleteTasks="5" />

             <h3>* <u>Fire Events</u></h3>
             <FireEvents  />

		</div>
		)
}
export default TestCase;