import React from "react";
import Testcomponent1 from "./Testcomponent1";
import TestComp2Assertion from "./TestComp2Assertion";
const TestCase = () => {
	return(
		<div>
             <h1>Test case Study</h1>
             <h3>* <u>  Using Query Methods </u> </h3>
             <Testcomponent1 title="my heading" />

             <h3>* <u> Assertions </u> </h3>
             <TestComp2Assertion numberOfIncompleteTasks="5" />

		</div>
		)
}
export default TestCase;