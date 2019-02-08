document.getElementById('button1').addEventListener('click', getText);
document.getElementById('button2').addEventListener('click', getJson);
document.getElementById('button3').addEventListener('click', getApi);


// Get Text
function getText(){
    fetch('test.txt')
    .then(function(res){
        // return a promise
       return res.text();
    })
    //get the promise from res.text()
    .then(function(data) {
        document.getElementById('output').innerHTML = data;
    })
    .catch(function(err){
        console.log(err);
    });
}

// Get Json
function getJson(){
    fetch('test.json')
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        let output = '';
        data.forEach(function(post){
            output += `<li>${post.title}</li>`;
        });
        document.getElementById('output').innerHTML = output;
    })
    .catch(function(err){
        console.log(err);
    });
}



// Get API
function getApi(){
    document.getElementById('output').innerHTML = 'Loading';
    fetch('https://api.github.com/users')
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        let output = '';
        data.forEach(function(user){
            output += `<li>${user.login}</li>`;
        });
        document.getElementById('output').innerHTML = output;
    })
    .catch(function(err){
        console.log(err);
    });
}