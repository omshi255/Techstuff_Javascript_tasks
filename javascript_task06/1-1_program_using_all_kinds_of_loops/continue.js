//A teacher checks student homework, skips absent students.
let students = ["rahul" , "absent" , "priya" ,"swati"];
for(let student of students)
{
    if(student ===  "Absent")
    {
        continue;
    }
    console.log("checked homework of:",student);
    
}