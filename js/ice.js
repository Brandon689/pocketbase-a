import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');

//const result = await pb.collection('pokemon').getList(1, 20);


const authData = await pb.admins.authWithPassword('bayus@protonmail.com', '_#b:=6&}i%iJrZ&');

// after the above you can also access the auth data from the authStore
console.log(pb.authStore.isValid);
console.log(pb.authStore.token);
console.log(pb.authStore.model.id);

//const result = await pb.collection('pokemon').authWithPassword('bayus@protonmail.com', '_#b:=6&}i%iJrZ&');

// console.log(result)

//fetch a paginated records list
const resultList = await pb.collection('pokemon').getList(1, 50, {
    filter: 'created >= "2022-01-01 00:00:00"',
});
console.log(resultList)


var mou = await pb.send("/bye");
console.log(mou)


var mou2 = await pb.send("/hello/simon", {
    // for all possible options check
    // https://developer.mozilla.org/en-US/docs/Web/API/fetch#options
    //query: { "name": "simon" },
});
console.log(mou2)
// // you can also fetch all records at once via getFullList
// const records = await pb.collection('pokemon').getFullList({
//     sort: '-created',
// });

// // or fetch only the first record that matches the specified filter
// const record = await pb.collection('pokemon').getFirstListItem('someField="test"', {
//     expand: 'relField1,relField2.subRelField',
// });