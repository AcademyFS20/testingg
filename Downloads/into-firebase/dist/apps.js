const { render } = require("node-sass");

console.log(db);



db.collection('articles').onSnapshot(snap => {

    console.log(snap.docs);
    snap.docs.forEach(doc => {
        console.log(doc.data());
    });
});


//Add section

/* Element.classList.add('section__container');

Element.innerHTML = `



`; */


