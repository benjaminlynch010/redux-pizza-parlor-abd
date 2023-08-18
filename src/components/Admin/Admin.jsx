import { useSelector } from "react-redux"
import axios from 'axios'

function Admin() {
    let time
    const customerInfo = useSelector(store => store.customerInfo)

    // console.log('Name:', customerInfo[0].customer_name);
    // console.log('type:', customerInfo[0].type);

    //axios to get the Time 
    axios.get('/api/order')
        .then((response) => {
            time = response.data[0].time;
        })
        .catch((error) => {
            console.error('Error with the GET time', error)
        })


    return (
        <div>
            <h1>this is Admin</h1>
            <table>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>TimeOrderPlace</td>
                        <td>Type</td>
                        <td>Cost</td>
                    </tr>
                </thead>
                <tbody>
                    {customerInfo.map((customer) => {
                        console.log('this is:', customer)
                        return (
                            <tr key={customer.id}>
                                <td>{customer.customer_name}</td>
                                <td>{customer.type}</td>
                                <td>{time}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>

    )
}

export default Admin