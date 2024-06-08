//Find all the topics and tasks which are thought in the month of October
db.zenclass.find({users : "students"},{topic : 1,task : 1}).pretty();

//Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020
db. zenclass.find({ users: "student" },{ attendance: 0, topic: 0, task: 0, users: 0, codekata: 0 }).pretty()

//Find all the company drives and students who are appeared for the placement.
db.zenclass.find({users : "students"},{placement_drives : 1}).pretty();

//Find the number of problems solved by the user in codekata
db.zenclass.find({users : "students"},{codekata : 1}).pretty();

//Find all the mentors with who has the mentee's count more than 15
db.data.find({ mentee_count: { $gt: 15 } }).pretty();

//Find the number of users who are absent and task is not submitted  between 15 oct-2020 and 31-oct-2020
db.zenclass.find({users : "students"},{attendance :{ $elemMatch : {status : "A"}}},{task : { $eq : { task : "false" }}}).pretty();