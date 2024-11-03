

const Productlist=()=>{
    return(
        <div className="container">
            <div className="row mt-3">
                <div className="col-xl-9 text-center">
                    <h1 className="text-info">Product in inventory</h1>
                </div>
                <div className="col-xl-3">
                    <input type="text" placeholder="Search..." className="form-control"/>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-xl-12">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>#ID</th>
                                <th>Product Name</th>
                                <th className="bg-warning"><i className="fa fa-arrow-up"></i> Product Price</th>
                                <th>Product Details</th>
                                <th>Photo</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-12 text-center mt-3">
                    <button className="btn btn-light">Previous</button>
                    <button className="btn btn-light">Next</button>
                </div>
            </div>
        </div>
    )
}

export default Productlist;
