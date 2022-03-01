
import React,{useState} from "react";
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment,incrementByAmount,
  incrementAsync } from '../../redux_store/features/counterSlice';

const Counter = () => {
 const count = useSelector((state) => state.counter.value)
  const [incrementAmount, setIncrementAmount] = useState('2');

  const dispatch = useDispatch()

  return(
  	<div>
          <div>
	      <div>
	        <button
	          aria-label="Increment value"
	          onClick={() => dispatch(increment())}
	        >
	          Increment
	        </button>
	        <span>{count}</span>
	        <button
	          aria-label="Decrement value"
	          onClick={() => dispatch(decrement())}
	        >
	          Decrement
	        </button>
	      </div>

	       <input
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={e => setIncrementAmount(e.target.value)}
        /> <br/>
         <button
          onClick={() =>
            dispatch(incrementByAmount(Number(incrementAmount) || 0))
          }
        >
          Add Amount
        </button>
        <button
          onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}
        >
          Add Async
        </button>
    </div>
  	</div>
  	)
}
export default Counter;