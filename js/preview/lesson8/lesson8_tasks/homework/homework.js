let a=  document.getElementById('content')
document.writeln(`<ul><li>${a.innerText}</li></ul><hr>`);

let b=   document.getElementById('rules')
document.writeln(`<ul><li>${b.innerText}</li></ul><hr>`);

a.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ducimus iusto mollitia quasi repellat sint temporibus? Ad explicabo harum ipsa laborum laudantium nobis obcaecati, placeat quam quis quod, repellat voluptas.'
document.writeln(`<ul><li>${a.innerText}</li></ul><hr>`);

b.innerText = 'fsdnjfdsbfhsdbfkjVFJDSFBJDHVFSDHFDSHFBDSHFBDVHFDBVHFBFVHFBVBVHBVHFVB'
document.writeln(`<ul><li>${b.innerText}</li></ul><hr>`);

a.style.background = 'red';
document.writeln(`<ul><li>${a.innerText}</li></ul><hr>`);
b.style.background = 'red';
document.writeln(`<ul><li>${b.innerText}</li></ul><hr>`);

a.style.color = 'blue'
document.writeln(`<ul><li>${a.innerText}</li></ul><hr>`);
b.style.color = 'blue'
document.writeln(`<ul><li>${b.innerText}</li></ul><hr>`);

b=   document.getElementById('rules')
console.log(b.innerText);

let c =  document.getElementsByClassName('fc_rules')
for (const cElement of c) {
    cElement.style.color = 'red'
}
