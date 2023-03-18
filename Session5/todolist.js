// we select and store input and btn in two variables
const studentName = document.getElementById('studentName');
const btn = document.getElementById('addName');
// we create object using object literal

const studentData = {
  stdName: 'tahir',
  fatherName: 'abdul sattar',
  age: 32
}
// we create student object using function
function Students(firstName,lastName,Age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.Age = Age;

  this.StdInfo = function () {
    return `Student Name: ${this.firstName}`
  }
}
// Instances of Students Object
const studentOne = new Students('sohail', 'lashari', 26);
const studentTwo = new Students('shahid', 'khan', 28);

console.log(studentOne.StdInfo());
console.log(studentTwo.StdInfo())
// we create objection using Class
class Teachers {
  constructor(teacherName, ClassName, Subject) {
    this.teacherName = teacherName;
    this.ClassName = ClassName;
    this.Subject = Subject;
    this.teachersInfo = () => {
      return `teacher name: ${this.teacherName}`
    }
  }
}

// Instance of Teachers
const teacherOne = new Teachers('Zahra Tahir', '8th', 'Computer Science');

console.log(teacherOne.teachersInfo())

// click event on button to create new object from Students and store it in local storage
btn.addEventListener('click', () => {
 // on click new student data will be created
  const student = new Students(studentName.value, studentName.value, studentName.value);
  // here we set student data to local storage
localStorage.setItem('studentName', JSON.stringify([...JSON.parse(localStorage.getItem('studentName') || "[]"), student]))

})