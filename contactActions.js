const form = document.querySelector('#contactForm')
let customerData = {}

const collectData = () => {
    customerData.firstName = document.querySelector('#firstname').value
    customerData.lastName = document.querySelector('#lastname').value
    customerData.email = document.querySelector('#email').value
    customerData.phone = document.querySelector('#phonenumber').value.replace( /(\d{3})(\d{3})(\d{4})/, '$1-$2-$3')
    customerData.petSitting = document.querySelector('#petSitting').checked ? 'Yes' : 'No'
    customerData.dogWalking = document.querySelector('#dogWalking').checked ? 'Yes' : 'No'
    customerData.babySitting = document.querySelector('#babySitting').checked ? 'Yes' : 'No'
    customerData.date = document.querySelector('#date').value
    customerData.numberPets = document.querySelector('#numPets').value
    customerData.typesPets = document.querySelector('#petTypes').value
    customerData.numberKids = document.querySelector('#numKids').value
    customerData.kidsAges = document.querySelector('#kidAges').value
}


const handleSubmit = async (event) => {
    event.preventDefault()
    
    collectData()

    const response = await fetch("https://7c60k1qy3e.execute-api.us-east-1.amazonaws.com/claireContactEmail", {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(customerData)
    })

    if (!response.ok) {
        alert('There was an error sending the form. Please try again. If the problem persists, please email me directly at claire@pawsplays.com')
    } else {
        window.location.href = '/thankYou.html'
    }

}

form.addEventListener('submit', handleSubmit)