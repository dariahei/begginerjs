function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}  

Student.prototype.addMarks = function (...marks) {
    if ('marks' in this) {
        this.marks = [...marks];
      }
}

Student.prototype.getAverage = function () {
if (this.marks == 0) {
  return 0;
}
  else {
   let sum = 0;
   let result = (this.marks.reduce((accamulator, item) => accamulator + item, sum)) / this.marks.length;
    return result;
  }
  
}

Student.prototype.exclude = function (reason) {
  this.excluded = reason;
  delete this.marks;
  delete this.subject;
}