

const Newproduct=()=>{
    return(
        <div className="container">
            <div className="row mt-3">
                <div className="col-xl-12 text-center">
                    <h1 className="text-info">Enter Product Details</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-12 text-center">
                    <p className="text-danger">The * Marked fields are mandatory</p>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-4">
                    <p>Product Name <span className="text-danger">*</span></p>
                    <input type="text" className="form-control"/>
                </div>
                <div className="col-xl-4">
                    <p>Product Price <span className="text-danger">*</span></p>
                    <input type="number" className="form-control"/>
                </div>
                <div className="col-xl-4">
                    <p>Product Photo URL <span className="text-danger">*</span></p>
                    <input type="text" className="form-control"/>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-xl-12">
                    <p>Product Description <span className="text-danger">*</span></p>
                    <textarea className="form-control"></textarea>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-xl-4 offset-4 text-center">
                    <button className="btn btn-success text-white m-2">Save Product</button>
                    <button className="btn btn-warning m-2">Clear All</button>
                </div>
            </div>
        </div>
    )
}

export default Newproduct;
