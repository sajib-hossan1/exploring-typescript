var obj3 = {
    id: 1,
    name: "anis",
    married: false
};
var obj4 = {
    id: 2,
    name: "anis",
    married: true
};
var obj5 = [
    { id: 2, name: "bhai", married: true },
    { id: 3, name: "bhai bhai", married: true },
    { id: 4, name: "bhai ka bhai", married: false }
];
var need = "Get";
function needData(request) {
    console.log(request);
}
needData("Post");
