// Your main JavaScript code goes here
// This is set up as an ECMAScript module, so you can import other ES Modules
const form = document.querySelector('#student-form');
form.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
    // DO NOT actually submit the form
    event.preventDefault();
    let studentData = new FormData(form)

}

function iterateWithKeys(studentData) {
    console.log('Iterating with keys:');
    for (let key of studentData.keys()) {
        console.log(`${key}: ${studentData.get(key)}`);
    }
}
class Student {

    constructor(firstName, lastName, location) {
        this.firstname = firstName;
        this.lastname = lastName;
        this.location = location;
    }

    getName() {
        return `${this.firstname} ${this.lastname}`;
    }

}



>>>>>>> 6eb195989974e662a666d955e0dfdf5b492889d7
