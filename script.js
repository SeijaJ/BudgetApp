// FETCH Betalningsmotagare 

const GetPayees = () => {
  fetch('https://localhost:44337/api/Payee')      
  .then((respons) => { return respons.json() })            
  .then((data) => {                              
      console.log(data)
      return data
  })
  .then((data) => {                              
      addPayees(data)
  })
}

GetPayees()

const addPayees = (data) => {
 
let select = document.getElementById('Payees')

for (let payee of data){
let opt = document.createElement('option')
opt.value = payee.ID
opt.text = payee.Name
select.appendChild(opt)
}


}


// Lägga till betalningsmottagare

payeeForm.onsubmit = (e) => {
  e.preventDefault()

  let requestObject = {
      Name: e.target[0].value
  }

  fetch('https://localhost:44337/api/Payee', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestObject)
  })
}


// TOGGLE -----------------------------------------------


let buttonClicked = false //Markör för att veta status på knappen

const buttonClick = () => {
    let button = document.getElementById('buttonAdd')
    if (buttonClicked == true){
        remove()
        button.innerHTML = '<i class="fas fa-toggle-off fa-lg"></i>'
    }else {
        addRecipent()
        button.innerHTML = '<i class="fas fa-toggle-on fa-lg"></i>'
    }

    buttonClicked = !buttonClicked
}

const remove = () => {
let div = document.getElementById('addNew')
div.innerHTML = '' //talar om att div-addNew ska tömmas på HTML
}


// CREATE NEW ELEMENTS --------------------------------------------------------

const addRecipent = () => {

let labelMonthly = document.createElement('label')
let labelQuarterly = document.createElement('label')
let labelYearly = document.createElement('label')

let radioMonthly = document.createElement('input')
let radioQuarterly = document.createElement('input')
let radioYearly = document.createElement('input')

radioMonthly.setAttribute('type', 'radio')
radioQuarterly.setAttribute('type', 'radio')
radioYearly.setAttribute('type', 'radio')

textMonthly = document.createTextNode('Monthly')
textQuarterly = document.createTextNode('Quarterly')
textYearly = document.createTextNode('Yearly')

labelMonthly.appendChild(radioMonthly)
labelMonthly.appendChild(textMonthly)

labelQuarterly.appendChild(radioQuarterly)
labelQuarterly.appendChild(textQuarterly)

labelYearly.appendChild(radioYearly)
labelYearly.appendChild(textYearly)

let reccuringDiv = document.getElementById('addNew')

reccuringDiv.appendChild(labelMonthly)
reccuringDiv.appendChild(labelQuarterly)
reccuringDiv.appendChild(labelYearly)

}
    

// MODAL -------------------------------------------------------


var modal = document.getElementById("myModal");

// Icon för att starta modal
var btn = document.getElementById("myBtn");

// X för att stänga modal
var span = document.getElementsByClassName("close")[0];

//knappfunktionen för att öppna

btn.onclick = function() {
  modal.style.display = "block";
}

// knappfunktionen för att stänga
span.onclick = function() {
  modal.style.display = "none";

}





// CHART --------------------------------------------------------

let myChart = document.getElementById('myChart').getContext('2d');

// Global Options
// Chart.defaults.global.defaultFontFamily = 'Lato';
// Chart.defaults.global.defaultFontSize = 18;
// Chart.defaults.global.defaultFontColor = '#777';

let massPopChart = new Chart(myChart, {
  type: 'bar',
    data: {
      labels: ["Boende", "Mat & Förbrukning", "Avgifter & Försäkringar", "Transport", "Nöjen", "Övrigt"],
      datasets: [
        {
          label: "Utgifter Mars 2021",
          backgroundColor: "#F5C153",
          data: [133,221,783, 123, 2478, 876]
        }, {
          label: "Min Budget",
          backgroundColor: "#97C3CC",
          data: [408,547,675,734, 567, 987]
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Status Mars 2021'
      }
    }
});



