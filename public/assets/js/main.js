//DELETE FUNCTION using data-id attribute
const deleteButtons = document.querySelectorAll('button.delete-resume');
deleteButtons.forEach(button => button.addEventListener('click', function () {
    fetchRequest('/api/resumes/' + this.getAttribute('data-id'), 'DELETE')
    location.reload();
}))

//CREATE FUNCTION
document.getElementById('submitButton').addEventListener('click', e => {
    e.preventDefault();
    let radios;
    //Gets the values from the radio buttons
    Array.from(document.getElementsByName('liked'), radio => {
        if (radio.checked) {
            radios = radio.value
        }
    });
    //Creates an object with the user-inputted values and makes a POST request
    let postObj = {
        name: document.getElementById('ca').value,
        liked: radios
    }
    fetchRequest('api/resumes/new', 'POST', postObj).then(() => location.reload())
})

//UPDATE FUNCTION
document.querySelectorAll('.change-liked').forEach(changeButton => {
    //Adds an event listener that toggles data attribute for each list item and updates the database accordingly
    changeButton.addEventListener('click', function () {
        let currentAttr = this.getAttribute('data-newliked');
        if (currentAttr) {
            this.setAttribute('data-newliked', "")
            console.log(this.getAttribute('data-id'))
            fetchRequest('api/resumes/' + this.getAttribute('data-id'), 'PUT', {
                resLiked: false
            })
            location.reload()
        } else {
            this.setAttribute('data-newliked', "true")
            console.log(this.getAttribute('data-id'))
            fetchRequest('api/resumes/' + this.getAttribute('data-id'), 'PUT', {
                resLiked: true
            })
            location.reload()

        }
    })
})

function fetchRequest(url, method, data) {
    return fetch(url, {
        method,
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },
        body: JSON.stringify(data)
    }).catch(err => console.log(err))
}