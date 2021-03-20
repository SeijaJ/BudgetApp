// FETCH Betalningsmotagare 

const GetPayees = () => {
  fetch('https://localhost:44337/api/Payee')      
  .then(respons => respons.json() )  
  .then( data => console.log(data))               
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

  let dropdown = document.getElementById('Payees')
  let payees = data

  for (let payee of payees) {
    var option = document.createElement("option");
    option.text += `${payee.Name}`
    dropdown.appendChild(option);
  }
    

}


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

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 

btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
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



