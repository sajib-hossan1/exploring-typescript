// enum == store constans but it does not allowed the duplicate value
// enum types are numeric, string and hetergenous
// enum numeric
var RequestData;
(function (RequestData) {
    RequestData[RequestData["addData"] = 5] = "addData";
    RequestData[RequestData["deleteData"] = 9] = "deleteData";
    RequestData[RequestData["updateData"] = 10] = "updateData";
})(RequestData || (RequestData = {}));
// console.log(RequestData); // first data will starts with 0 to 3
// console.log(RequestData);
// enum string
var DataType;
(function (DataType) {
    DataType["first"] = "Hey Mama";
    DataType["second"] = "Ki Mama?";
    DataType["third"] = "Bhalo Mama?";
})(DataType || (DataType = {}));
// console.log(DataType.first);
// hetergenous enum | it's a mixed enum of a number and string
var mixed;
(function (mixed) {
    mixed["first"] = "Hey bro";
    mixed["second"] = "Ki bro?";
    mixed[mixed["money"] = 100] = "money";
})(mixed || (mixed = {}));
console.log(mixed);
