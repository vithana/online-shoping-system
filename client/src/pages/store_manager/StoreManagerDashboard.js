import React,{Component} from "react"
import StoreManagerHeader from "../../components/Header/StoreManagerHeader"
class StoreManagerDashboard extends Component{

   constructor(props) {
       super(props);


   }

    render() {

        const data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'My First dataset',
                    backgroundColor: '#42A5F5',
                    data: [65, 59, 80, 81, 56, 55, 40]
                },
                {
                    label: 'My Second dataset',
                    backgroundColor: '#9CCC65',
                    data: [28, 48, 40, 19, 86, 27, 90]
                }
            ]
        };
         return (
            <>
                <StoreManagerHeader/>
                <div>
                    <h1>Store Manager Dashboard</h1>


                    {/*<chart type="bar" data={data} />*/}
                </div>
            </>

        )
    }
}

export default StoreManagerDashboard
