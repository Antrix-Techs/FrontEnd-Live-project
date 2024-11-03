

const Mydashboard=()=>{
    return(
        <div className="container">
            <div className="row mt-3">
                <div className="text-center col-xl-12 text-secondary">
                    <h1>Seller Dashboard</h1>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-xl-4 text-center">
                    <i className="fa fa-briefcase fa-5x text-primary"></i>
                    <h3 className="text-primary">Total Product</h3>
                </div>
                <div className="col-xl-4 text-center">
                    <i className="fa fa-headset fa-5x text-warning"></i>
                    <h3 className="text-warning">Order Recieved</h3>
                </div>
                <div className="col-xl-4 text-center">
                    <i className="fa fa-plus fa-5x text-success"></i>
                    <h3 className="text-success">Add Product</h3>
                </div>
            </div>
        </div>
    )
}

export default Mydashboard;
