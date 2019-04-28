import React from 'react';
import './main.css';

class Recommender extends React.Component {
    constructor(props){
        super(props);
        this.state = {
           count: 1
        }
     }
     
    componentDidMount() {
        this.interval = setInterval(() => this.setState({
            time: Date.now(),
            count: this.state.count+1 
        }), 5000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }    

    getUniqueIds = () => {
        var limit = 4, lower_bound = 1, upper_bound = 84, unique_random_numbers = [];
        while (unique_random_numbers.length < limit) {
            var random_number = Math.floor(Math.random()*(upper_bound - lower_bound) + lower_bound);
            if (unique_random_numbers.indexOf(random_number) === -1) { 
                unique_random_numbers.push( random_number );
            }
        }
        return unique_random_numbers
    }

    getItemsIds = () => {
        const items = this.props.recommends;
        const {count} = this.state;
        const length = items.length;
        if(items.length<=4) return items;
        // console.log(items.slice(count%(length-3),count%(length-3)+4))
        return items.slice(count%(length-3),count%(length-3)+4)
    }

    render() {
        const data = this.props.products;
        const y = this.getItemsIds();
        // const y = this.getUniqueIds()
      return (
         <div className="recommender">
                {data.length <= 0
                    ?"NO DB ENTRIES YET"
                    :data.filter((e)=>{
                        return y.includes(e._id)
                     }).map(item => (
                     <div className="item" key={item._id}>
                        <img style={{objectFit: "contain"}}src={require('../../images/'+item._id+'.png')} alt="hs"></img>
                        <div className="details">
                            <label className="label">{item.name}</label><br></br>
                            {/* <span>{item.name}</span><br></br> */}
                            {/* <label>Cat: {item.category}</label><br></br> */}
                            <label className="label">Price: {item.SP}</label><br></br>
                            <label className="label">Discount: {item.discount}</label>
                        </div>
                     </div>
                    ))
                }
         </div>
      );
   }
}
export default Recommender;