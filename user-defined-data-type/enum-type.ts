// enum == store constans but it does not allowed the duplicate value
// enum types are numeric, string and hetergenous

// enum numeric

enum RequestData {
    addData =5,
    deleteData=9,
    updateData
}
// console.log(RequestData); // first data will starts with 0 to 3
// console.log(RequestData);


// enum string
enum DataType {
    first = "Hey Mama",
    second = "Ki Mama?",
    third = "Bhalo Mama?",
}
// console.log(DataType.first);

// hetergenous enum | it's a mixed enum of a number and string
enum mixed {
    first = "Hey bro",
    second = "Ki bro?",
    money = 100
}
console.log(mixed);
