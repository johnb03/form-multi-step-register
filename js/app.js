//tomar el buton de cada formulario y crear un translate para ir al siguiente paso
//crear obligacion de relleno de contenido para poder accionar el siguiente paso
//crear reglas de relleno de los imputs

//en el input2 crear un user select quedando focus cuando se seleccione
//en el input 3 resumir el los datos colocados y colocarlos en las lineas de texto
// en css convertir el formulario dos en checkbox y obtener los datos con js

const btnStep1 = document.querySelector("#btn__step-1"); //continue
const btnStep2 = document.querySelector("#btn__step-2"); //continue
const btnStep3 = document.querySelector("#btn__step-3"); //confirm

const spanPoint1 = document.getElementById("point1");
const spanPoint2 = document.getElementById("point2");
const spanPoint3 = document.getElementById("point3");

const inputName = document.querySelector("#name");
const inputEmail = document.querySelector("#email");


const span__cb = document.getElementById("cb-validation");
const span__nE = document.getElementById("NE-validation");

const checkB = document.querySelectorAll(".checkBox");
const  topics = document.getElementById("formDateTopics")


const stepH4 = document.getElementById('step');


//validacion y dezliamiento del formulario
btnStep1.addEventListener("click", () => {
  let forM1 = document.getElementById("step-1");
  let forM2 = document.getElementById("step-2");

  if (inputName.value === "") {
    span__nE.innerHTML = ` Debes colocar tu nombre `;
  } else if (inputEmail.value === "") {
    span__nE.innerHTML = `Debes colocar el Email`;
  } else {
    forM1.style.transform = "translateX(0px)";
    forM2.style.transform = "translateX(-70px)";
    focusTrue(spanPoint1);
    focusFalse(spanPoint2);
  }



});


// validacion , check formulario + deslizamiento
btnStep2.addEventListener("click", () => {
  const inputCb = document.querySelectorAll(
    "input[type=checkbox]:checked + label"
  );


  let forM1 = document.getElementById("step-1");
  let forM2 = document.getElementById("step-2");
  let forM3 = document.getElementById("step-3");

  if (inputCb.length < 2   ) {
    span__cb.innerHTML = `seleccion maxima 2 has elegido ${inputCb.length}`;

  } else if (inputCb.length > 2 ) {
    span__cb.innerHTML = `Elige solo dos `;
  } else {
    
    focusTrue(spanPoint2);
    focusFalse(spanPoint3);
      forM1.style.transform = "translateX(-180px)";
      forM2.style.transform = "translateX(-350px)";
      forM3.style.transform = "translateX(-470px)";
      
      
      datos();
      checkDatos()
    }
    

});

function checkDatos() {
  checkB.forEach((e) =>{
   if (e.checked == true) {
    let elemento = document.createElement('li');
    elemento.innerHTML = e.value;
    topics.appendChild(elemento)
   }
  })
} 


function datos(){
  let nameD = document.getElementById('nameParaf');
  let emailD = document.getElementById('emaiParaf')
  nameD.innerHTML = `${inputName.value}`;
  emailD.innerHTML = `${inputEmail.value}`;
 
}

function focusTrue(bgColor) {
  bgColor.classList.remove("step__point-focus");
  bgColor.classList.toggle("step__point");
  stepH4.innerText = `Step 2 of 3`;
}

function focusFalse(bgColor2) {
  bgColor2.classList.remove("step__point");
  bgColor2.classList.toggle("step__point-focus");
  stepH4.innerText = `Step 3 of 3`;
}
