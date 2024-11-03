

const Orderlist=()=>{
    return(
        <div className="container">
            <div className="row mt-3">
                <div className="col-xl-12 text-center">
                    <h1>Manage Order</h1>
                </div>
            </div>
            <div className="row shadow-lg mt-5 p-3">
                <div className="col-xl-4">
                    <p>name</p>
                    <p>Mobile No : number</p>
                    <p>e-Mail id : email</p>
                    <p>Address : address</p>
                </div>
                <div className="col-xl-8">
                    <h5 className="text-danger text-center">Order id : number , Date - dd/mm/yyyy, time</h5>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Item Name</th>
                                <th>Photo</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Orderlist;
