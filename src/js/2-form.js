
const formData = { 
    email: '',
    message: '',
}
const key = "feedback-form-state";

const form = document.querySelector('.feedback-form');

form.addEventListener('input', (e)=>{
  const target = e.target;

  if (target.name === "email") {
    formData.email = target.value;
  } else if (target.name === "message") {
    formData.message = target.value;
  }
  
localStorage.setItem(key, JSON.stringify(formData));
console.log(localStorage.getItem(key));
})

const storageData = localStorage.getItem(key);


if(storageData){
    const readyData = JSON.parse(storageData);
    
    formData.email = readyData.email;
    formData.message = readyData.message;

    form.elements.email.value = formData.email;
    form.elements.message.value = formData.message;
}

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    if(!formData.email.trim() || !formData.message.trim()){
    alert('Fill please all fields');
    return;
}
    console.log(formData);
    e.target.reset();
    localStorage.removeItem(key);
    formData.email = '';      
    formData.message = '';
})

