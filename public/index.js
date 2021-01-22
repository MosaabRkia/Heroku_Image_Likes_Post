const root = document.querySelector('#root')

function getEmails(){
    console.log('get emails')
    fetch('/getEmails')
    .then(r=>r.json())
    .then(data=>{
        console.log('then')
        changeText(data)
    })
    console.log('after fetch')
}


function renderUsers(Emails){
    let html = '';
    Emails.forEach(email=>{
        html += `<p>Name: ${user.name}</p>`
    }) 

    root.innerHTML = html
}
