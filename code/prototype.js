function Lecture(name, teacher) {
  this.name = name
  this.teacher = teacher
}
Lecture.prototype.display = function () {
  return this.teacher + ' is name ' + this.name
}

console.log(new Lecture('like', '英语老师').display());

function Schedule(lectures) {
  this.lectures = lectures;
}
//类 Schedule 的方法，用来构造一个描述该课程表的字符串
Schedule.prototype.display = function () {
  var str = "";
  //遍历每门课程，累加构成信息字符串
  for (var i = 0; i < this.lectures.length; i++) {
    str += this.lectures[i].display() + " ";
  }
  return str;
};
console.log(new Schedule([new Lecture("Gym", "Mr. Smith")]).display());