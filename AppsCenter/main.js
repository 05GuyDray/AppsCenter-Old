const NO_COMPNY_NAME_MSG = "this app does not have a company";
const NO_DESC_MSG = "this app does not have a description";
const NO_IMAGE_URL_DEFOLT_URL = `images\\Help.png`

const getData = () => {
    if (localStorage.getItem('applications') == null) {
        localStorage.setItem('applications', JSON.stringify(applications));
        localStorage.setItem('id', id);
    }

    return JSON.parse(localStorage.getItem('applications'));
}

document.addEventListener("DOMContentLoaded", () => {

});


const makeApplicationsHtml = (data) =>{
    let applectionsHTML = ''
    data.forEach(appData => {
        applectionsHTML += makeAppHtml(appData)
    });
    return applectionsHTML;
}

// const makeAppDataValid = (appData) => {
//     if(!ImageExist(appData.imageUrl)){
//         appData.imageUrl = NO_IMAGE_URL_DEFOLT_URL;
//     }
//     if(String(appData.companyName).length == 0){
//         appData.companyName = NO_COMPNY_NAME_MSG;
//     }
//     if(String(appData.desc) == 0){
//         appData.desc = NO_DESC_MSG;
//     }
//     return appData;
// }

const makeAppHtml = (appData) => {
    return ` <div class="row app-margin"></div>
    <div class = "row">
        <div class="col col-sm-3" ></div> 
        <div class="col col-sm-1 image-center "> <img src="\\images\\${appData.id}\\${appData.imageUrl}" class = "img-logo" width="100" height="100"></div>
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
function ImageExist(url) {
   var img = new Image();
   img.src = url;
   console.log(img.height != 0);
   return img.height != 0;
}


window.onload = () => { 
    // let urlTest = `\\images\\${appData.id}\\${appData.imageUrl}`
    // console.log(\\images\\${appData.id}\\${appData.imageUrl});
    document.getElementById("apps").innerHTML = makeApplicationsHtml(getData());
   
  
}