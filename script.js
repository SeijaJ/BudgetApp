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

    //loopa skiten här på något magiskt vis

}


// SKAPA FORMS -----------------------------------------------

let buttonClicked = false //Markör för att veta status på knappen

const buttonClick = () => {
    let button = document.getElementById('buttonAdd')
    if (buttonClicked == true){
        remove()
        button.innerHTML = 'Add'
    }else {
        addRecipent()
        button.innerHTML = 'Close'
    }

    buttonClicked = !buttonClicked
}

const remove = () => {
let div = document.getElementById('addNew')
div.innerHTML = '' //talar om att div-addNew ska tömmas på HTML
}

// CREATE NEW ELEMENTS --------------------------------------------------------

const addRecipent = () => {

let heading = document.createElement('p')
heading.textContent = 'Add new recipient' 
heading.classList.add('headingTitle')

// Name field -----------------------------------------------------------------

let recipientNameLabel = document.createElement('label')
recipientNameLabel.innerHTML = 'Set name<br>'
let field = document.createElement('input')
field.setAttribute('type', 'text')
recipientNameLabel.appendChild(field)

let addChild1 = document.createElement('div')
addChild1.classList.add('outgoingsChild')
addChild1.appendChild(recipientNameLabel)

// Category array ---------------------------------------------------------------

let optionsArray = ['Boende', 'Mat & Förbrukning', 'Avgifter & Försäkringar', 'Transport', 'Nöjen', 'Övrigt']

// Options-----------------------------------------------------------------------------

let categoryLabel = document.createElement('label')
categoryLabel.innerHTML = 'Set Category<br>'

let category = document.createElement('select')
category.name = 'Category'
category.id = 'category'

for ( const opt of optionsArray) {
    let categoryOpt = document.createElement('option')
    categoryOpt.value = opt //behöver ändras, hur?
    categoryOpt.text = opt//.charAt(0).toUpperCase() + opt.slice(1)
    category.appendChild(categoryOpt)
}

categoryLabel.appendChild(category)

let addChild2 = document.createElement('div')
addChild2.classList.add('outgoingsChild')
addChild2.appendChild(categoryLabel)

// Save checkbox ----------------------------------------------------------------

saveRecipient = document.createElement('input')
saveRecipient.setAttribute('type', 'checkbox') //behöver value?

let saveRecipientLabel = document.createElement('label')
saveRecipientLabel.innerHTML = 'Save Recipient<br>'
saveRecipientLabel.appendChild(saveRecipient)

let addChild3 = document.createElement('div')
addChild3.classList.add('outgoingsChild')
addChild3.appendChild(saveRecipientLabel)

// container -----------------------------------------------------------------

let addContainerDiv = document.createElement('div')
addContainerDiv.classList.add('outgoingsContainer')
addContainerDiv.appendChild(addChild1)
addContainerDiv.appendChild(addChild2)
addContainerDiv.appendChild(addChild3)

let div = document.getElementById('addNew')
div.appendChild(heading)
div.appendChild(addContainerDiv)

}
    


// chart --------------------------------------------------------

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

