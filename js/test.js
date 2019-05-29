let obj = {
    name: "uche",
    age: 10,
    val: "bbc"
}

for( let [key, val] of Object.entries(obj) ) {
    console.log(val)
}