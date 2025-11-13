var weekPlanner = {
  days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  meetingHeld: false,
  planWeek: function () {
    for (let i = 0; i < this.days.length; i++) {
      var dayNumber = i + 1;
      if (this.days[i] === 'Sunday' || this.days[i] === 'Saturday') {
        continue;
      } else if (this.days[i] === 'Wednesday') {
        this.meetingHeld = true;
        console.log('Midweek meeting done!');
        break;
      } else {
        console.log('Time to grind!');
      }
      console.log(`Today is ${this.days[i]} and it is day number ${dayNumber} of the week.`);
    }
  },
  summarizeWeek: function() {
    if (this.meetingHeld) {
      console.log('Meeting done early. Rest of week paused.');
    } else {
      console.log('Full week completed successfully!');
    }
  }
}

function reviewWeek(planner) {
  // Find the index of the meeting day
  const meetingDayIndex = planner.days.indexOf('Wednesday');

  // If meeting was held, log only days after the meeting
  if (planner.meetingHeld) {
    console.log('Days remaining after meeting:');
    for (let i = meetingDayIndex + 1; i < planner.days.length; i++) {
      console.log(planner.days[i]);
    }
  } else {
    console.log('No meeting yet — full week still in motion!');
  }
}


weekPlanner.planWeek();
weekPlanner.summarizeWeek();
reviewWeek(weekPlanner);


// LOOPING THROUGH OBJECTS USING FOR IN LOOP

// var student = {
//     fullName: 'Sunday Obianuju Joy',
//     age: 21,
//     majorCourse: 'Computer science',
//     subCourses: {
//         communicationInEnglish: 90,
//         dataStructure: 96,
//         introToInternet: 87,
//         researchMethodology: 88,
//         javaProgramming: 97,
//         cProgramming: 85,
//         citizenshipEducation: 94
//     },
//     getAverageGrade: function () {
//         var totalScore = 0;
//         var courseCount = 0;
//         for (var i in this.subCourses) {
//             totalScore += this.subCourses[i];
//             courseCount++;
//             // console.log(`${i}: ${this.subCourses[i]}`)
//         }
//         this.averageGrade = totalScore / courseCount;
//         console.log(`Sunday Obianuju Joy’s average grade is ${this.averageGrade}.0🎓 — Excellent Performance!`)
//         return this.averageGrade;
//     },
//     isGraduating: function() {
//         if (this.getAverageGrade() >= 75) {
//             console.log(`${this.fullName} is graduating! 🎉🎉🎉`);
//             this.isGraduating = true;
//         } else {
//             console.log(`${this.fullName} is not graduating. 😞😞😞`);
//             this.isGraduating = false;
//         }
//         // return this.isGraduating;
//     },
//     assignHonor: function() {
//         if (this.averageGrade >= 90) {
//             this.honor = 'First Class Division';
//         } else if (this.averageGrade >= 75 && this.averageGrade <= 89) {
//             this.honor = 'Second Class Upper Division';
//         } else if (this.averageGrade >= 60 && this.averageGrade <= 74) {
//             this.honor = 'Second Class Lower Division';
//         } else if (this.averageGrade >= 50 && this.averageGrade <= 59) {
//             this.honor = 'Third Class Division';
//         } else if (this.averageGrade >= 45 && this.averageGrade <= 49) {
//             this.honor = 'Pass';
//         } else {
//             this.honor = 'Fail';
//         }
//         console.log(`${this.fullName} graduating with a ${this.honor} Honor.`);
//         // return this.honor;
//     }
// }

// // student.getAverageGrade();
// student.isGraduating();
// student.assignHonor();
// console.log(student);