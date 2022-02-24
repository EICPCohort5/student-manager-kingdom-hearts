// Your main JavaScript code goes here
// This is set up as an ECMAScript module, so you can import other ES Modules
document.addEventListener('submit',addstudent)
const form = document.getElementById('student-form')
function addstudent(event){
    event.preventDefault()
    let studentdata = new FormData(form)
    for (let i of studentdata){
        console.log(i)
    }
}