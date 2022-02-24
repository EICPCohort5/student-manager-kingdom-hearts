// Your main JavaScript code goes here
// This is set up as an ECMAScript module, so you can import other ES Modules
const form = document.querySelector('#student-form');
form.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
  // DO NOT actually submit the form
  event.preventDefault();
  let studentData = new FormData(form)
  let table = document.querySelector('.table');
  let row = document.createElement('tr')
  console.log(studentData)
  for (let key of studentData.keys()) {
    let studentprop = document.createElement('td');
    studentprop.textContent = studentData.get(key);
    row.append(studentprop);
    console.log(`${key}: ${studentData.get(key)}`);
  }
  table.append(row)
}