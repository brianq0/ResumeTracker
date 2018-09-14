const deleteButtons = document.querySelectorAll('button.delete-resume');


deleteButtons.forEach(button => button.addEventListener('click', function () {
    fetch('/api/resumes/' + this.getAttribute('data-id'), {
        method: 'DELETE'
    })
    location.reload();
}))

document.getElementById('submitButton').addEventListener('click', e => {
    e.preventDefault();
    let radios;
    Array.from(document.getElementsByName('liked'), radio => {
        if (radio.checked) {
            radios = radio.value
        }
    });
    let postObj = {
        name: document.getElementById('ca').value,
        liked: radios
    }
    fetchRequest('api/resumes/new', 'POST', postObj).then(() => location.reload())
})
document.querySelectorAll('.change-liked').forEach(changeButton => {
    changeButton.addEventListener('click', function () {
        let currentAttr = this.getAttribute('data-newliked');
        console.log(currentAttr);
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