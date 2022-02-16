import React from "react";
import axios from 'axios';
const HOC = (WrappedComponenet, entity) => {
  return class extends React.Component {
    state = {
      data: [],
      term: "",
    };
    componentDidMount() {
      const fetchData = async () => {
        axios.get(`https://temp-app-windowshop.herokuapp.com/${entity}`)
        .then(res => {
          const datas = res.data;
          this.setState({ ...this.state, data: datas });
          console.log(datas);
        })
        // const res = await fetch(
        //   `https://jsonplaceholder.typicode.com/${entity}`
        // );
        // const json = await res.json();
       
      };
      fetchData();
    }
    render() {
      let { term, data } = this.state;
      let filteredData = data.filter((d) => {
        if (entity === "products") {
          const { productName } = d;
          return productName.indexOf(term) >= 0;
        }
        if (entity === "users") {
          const { name } = d;
          return name.indexOf(term) >= 0;
        }
      });
      return (
        <div>
          <h2>{entity}</h2>
          <input
            type="text"
            value={term}
            onChange={(e) =>
              this.setState({ ...this.state, term: e.target.value })
            }
          />
          <WrappedComponenet data={filteredData}></WrappedComponenet>
        </div>
      );
    }
  };
};

export default HOC;