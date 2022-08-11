

const getData = () => {
    if (localStorage.getItem('applications') == null) {
        localStorage.setItem('applications', JSON.stringify(applications));
        localStorage.setItem('id', id);
    }

    return JSON.parse(localStorage.getItem('applications'));
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("apps").innerHTML = makeApplicationsHtml(getData());
});


const makeApplicationsHtml = (data) =>{
    let applectionsHTML = ''
    data.forEach(appData => {
        applectionsHTML += makeAppHtml(appData)
    });
    return applectionsHTML;
}



const makeAppHtml = (appData) => {
    const DEFOLT_URL = `Help.png`
    let imageurl;
    if (appData.imageUrl == DEFOLT_URL ) {
         imageurl = `./images/Help.png`
        }else{
            imageurl = `./images/${appData.id}/${appData.imageUrl}`
     } 
    
    return ` <div class="row app-margin"></div>
    <div class = "row">
        <div class="col col-sm-3" ></div> 
        <div class="col col-sm-1 image-center "> <img src="${imageurl}" class = "img-logo" width="100" height="100"></div>
        <div class=" col col-sm-7 ">
            <div class = "row">
            <div class = "col-sm-12 no-paddin"><h2 class= " text">${appData.name}</h2></div>
            <div class = "col-sm-12 no-paddin"><p class = "text">${appData.desc}<p></div>
            <div class = "col-sm-12" > <small class = "text">price: ${appData.price}$</small></div>
            <div class = "col-sm-12"> <small  class = "text">compny name: ${appData.companyName}</small></div>
            </div>
        </div>
    </div>`
}



