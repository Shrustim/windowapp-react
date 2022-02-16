import TodoList from "./TodoList";
import UsersList from './UsersList';
import SearchProducts from './ProductListCom';
const HigherOrderComp = () => {
    return(
        <>
        <div style={{display:'flex'}}>
              <div>
          <TodoList />
            </div>
            <div>
            <UsersList />
            </div>
           
        </div>
        <SearchProducts/>
        </>
    )
}
export default HigherOrderComp;