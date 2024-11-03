import { useEffect, useState } from "react";

const Category = () => {
  let [catArray, setCatArray] = useState([]);
  let [category, setCategory] = useState("");

  const save = () => {
    let newObj = {
      catName: category,
    };
    let url = "http://localhost:1234/categoryapi";

    let postData = {
      headers: { "Content-Type": "application/json" },
      method: "post",
      body: JSON.stringify(newObj),
    };

    fetch(url, postData)
      .then((res) => {
        return res.json();
      })
      .then((catArr) => {
        setCatArray([...catArray, catArr]);
        setCategory("");
      });
  };

  const getCategory = () => {
    let url = "http://localhost:1234/categoryapi";
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((catArr) => {
        setCatArray(catArr);
      });
  };
  const deleteCat = (id) => {
    let url = "http://localhost:1234/categoryapi/" + id;
    let postData = {
      headers: { "Content-Type": "application/json" },
      method: "delete",
    };
    fetch(url, postData)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        
        getCategory();
      });
  };

  useEffect(() => {
    getCategory();
  }, []);

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-lg-3"></div>
        <div className="col-lg-6">
          <h3 className="text-center mb-4">Manage Category</h3>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Category Name"
              onChange={(obj) => setCategory(obj.target.value)}
              value={category}
            />
            <button className="btn btn-primary" onClick={save}>
              Save Category
            </button>
          </div>
        </div>
        <div className="col-lg-3"></div>
      </div>
      <div className="row">
        <div className="col-lg-4"></div>
        <div className="col-lg-4 mt-4">
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Category Name</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {catArray.map((category, index) => {
                return (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{category.catName}</td>
                    <td>
                      <button
                        onClick={(obj) => deleteCat(category.id)}
                        className="btn btn-danger"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="col-lg-4"></div>
      </div>
    </div>
  );
};

export default Category;
