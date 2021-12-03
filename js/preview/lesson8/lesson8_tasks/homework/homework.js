// let a=  document.getElementById('content').textContent
//
//
// let b=   document.getElementById('rules').textContent
//
//
// a.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ducimus iusto mollitia quasi repellat sint temporibus? Ad explicabo harum ipsa laborum laudantium nobis obcaecati, placeat quam quis quod, repellat voluptas.'
// document.writeln(`<ul><li>${a.innerText}</li></ul><hr>`);
//
// b.innerText = 'fsdnjfdsbfhsdbfkjVFJDSFBJDHVFSDHFDSHFBDSHFBDVHFDBVHFBFVHFBVBVHBVHFVB'
// document.writeln(`<ul><li>${b.innerText}</li></ul><hr>`);

let div = document.getElementsByTagName('div')
for (const textElement of div) {
    textElement.style.background = 'red'
    textElement.style.color = 'blue'
}

let li = document.getElementsByTagName('li')
for (const textElement of li) {
    textElement.style.background = 'red'
    textElement.style.color = 'blue'

}
let p = document.getElementsByTagName('p')
for (const textElement of p) {
    textElement.style.background = 'red'
    textElement.style.color = 'blue'
}

let text  = document.getElementById('rules')
console.log(text);

// let c =  document.getElementsByClassName('fc_rules')
// for (const cElement of c) {
//     cElement.style.color = 'red'
// }
