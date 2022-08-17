const getData = () => {
  if (localStorage.getItem("applications") == null) {
    localStorage.setItem("applications", JSON.stringify(applications));
    localStorage.setItem("id", id);
  }

  return JSON.parse(localStorage.getItem("applications"));
};

document.addEventListener("DOMContentLoaded", () => {
  load();
});

const load = () => {
  document.getElementById("apps").innerHTML = makeApplicationsHtml(getData());
};

const makeApplicationsHtml = (data) => {
  let applectionsHTML = "";
  data.forEach((appData) => {
    applectionsHTML += makeAppRowHtml(appData);
  });
  return applectionsHTML;
};

const filterData = (serched) => {
  const result = getData().filter((app) =>
    app.name.toLowerCase().includes(serched.toLowerCase())
  );
  console.log(result);
  return result;
};

const search = (value) => {
  document.getElementById("apps").innerHTML = makeApplicationsHtml(
    filterData(value)
  );
};

const deleteApp = (id) => {
  let appData = JSON.parse(localStorage.getItem("applications"));
  let newData = appData.filter((app) => app.id != id);
  localStorage.setItem("applications", JSON.stringify(newData));
};

const makeAppRowHtml = (appData) => {
  const DEFOLT_URL = `Help.png`;
  let imageurl;
  let trashUrl = `./iamges/delete.png`;
  if (appData.imageUrl == DEFOLT_URL) {
    imageurl = `./images/Help.png`;
  } else {
    imageurl = `./images/${appData.id}/${appData.imageUrl}`;
  }
  8;
  return ` <div class="row app-margin"></div>
  <div ">
    <div class = "row sortable-item" data-mdb-id="sortable-item-266228">
        <div class="col col-sm-3" >
        </div> 
        <div class="col col-sm-2 text-center "> 
            <img src="${imageurl}" class = "img-logo" width="100" height="100">
        </div>
        <div class=" col col-sm-3 ">
            <div class = "row">
                <div class = "col-sm-12 no-paddin"><h2 class= " text">${appData.name}</h2>
                </div>
            <div class = "col-sm-12 no-paddin"><p class = "text">${appData.desc}<p>
            </div>
            <div class = "col-sm-12" > <small class = "text">price: ${appData.price}$</small>
            </div>
            <div class = "col-sm-12"> <small  class = "text">compny name: ${appData.companyName}</small></div>
            </div>
        </div>
        <div class = "col col-sm-4">
            <button " onclick="deleteApp(${appData.id}) ;load() ">
                <img src="./images/delete.png"  width="40" height="40"/>
            </button>
        </div>
    </div>
    </div>
    </div>`;
};

const makeModl = () => {
    const modalHtml =
    `<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">new App</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
             <form onsubmit="onSubmit(event)">
          <div class="row input-padding">
              <div class="col text-right "><p>App name*:</p></div>
              
              <div class="col "><input type="text"  id = "name" oninput=inputValidationAppName(value) name ="name"  class = "form-control" placeholder="App Name"/></div>
          </div>
          <div class="row input-padding">
              <div class="col  text-right "><p>App price*:</p></div>
              
              <div class="col "><input type="text"  name ="price" id = "price" oninput=inputValidationAppPrice(value) class = " form-control" placeholder="App price in $"/> </div>
          </div>
          <div class="row  app-desction-row-padding">
              
              <div class="col  text-right"><p>App description:</p></div>
              <div class="col  "><input type="text"  name ="description"  class = "form-control app-descrition" placeholder="App descritption"> </input></div>
          </div>
          <div class="row input-padding">
              
              <div class="col  text-right"><p>Company Name:</p></div>
              <div class="col "><input type="text"  name ="companyName"  class = "form-control" placeholder="Company name"> </input></div>
          </div>
          <div class="row input-padding">
              
              <div class="col  text-right"><p>Image url:</p></div>
              <div class="col "><input type="text"  name ="imageUrl"  class = "form-control" placeholder="Image url"> </input></div>
          </div>
          <div class = "row">
              <div class="col col-sm-6"></div>
              <div class="col col-sm-4"><input type="submit" value = "publish application" class = "btn btn-success"> </input></div>    
          </div>
          <div class = "row">
              
              <div class="col col-sm-4"> <b>* -Required</b></div>    
          </div>
          <div class = "row">
              <div class="col col-sm-6"></div>
              <div class="col col-sm-4"> <p id = "error msg" class= "text-danger"></p></div>    
          </div>
          
       </form >
       <script src="AddApp.js"></script>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-danger">publish</button>
          </div>
        </div>
      </div>
    </div>`;
    document.getElementById("modal").innerHTML = modalHtml
} 
