var obj;
obj = [{ name: "sajib" }, { name: "anis" }];
var obj2;
obj2 = { userName: "anis", userid: 1 };
var bigObj = [{ id: 1, name: "anis" }, { id: 2, name: "sajib" }];
for (var key in bigObj) {
    console.log(bigObj[key].name);
}
