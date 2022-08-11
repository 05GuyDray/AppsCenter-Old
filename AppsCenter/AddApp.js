const MIN_APP_NAME_LENGTH = 4;
const MAX_APP_NAME_LENGTH = 30;

const addItemToTheList = (data) => {
    localStorage.setItem('applications', JSON.stringify(JSON.parse(localStorage.getItem('applications')).concat(data)));
}

const getNextId = () => {
    let id = localStorage.getItem('id');
    localStorage.setItem('id', ++id);
    
    return id;
}

document.addEventListener("DOMContentLoaded", () => {
		
});

let inputValidationById = (id, Condtion) =>{
    let element =  document.getElementById(id);
    if (Condtion){
        if(!element.classList.contains("is-invalid")){element.classList.add("is-invalid");}
        if(element.classList.contains("is-valid")){element.classList.remove("is-valid")} 
    } else {
        if(!element.classList.contains("is-valid")){element.classList.add("is-valid");}
        if(element.classList.contains("is-invalid")){element.classList.remove("is-invalid")} 
    }
}  


let inputValidationAppName = (value) => {
    let inputLength = (value + '').length;
    let condtion = inputLength < MIN_APP_NAME_LENGTH || inputLength > MAX_APP_NAME_LENGTH;
    inputValidationById("name",condtion);

}

let inputValidationAppPrice = (value) =>{
    let condtion = isNaN(value) && p;
    inputValidationById("price",condtion);

}


let onSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formProps = Object.fromEntries(formData);
    console.log(formProps);
}