var res = fetch("https://jsonplaceholder.typicode.com/users")
.then((data)=>data.json()).then((value)=>bar(value))

var container = document.createElement("div");
container.className="container"
var row =document.createElement("div");
row.className="row"
container.append(row)

function bar(value){
    for(var i=0;i<value.length;i++){
        row.innerHTML += `
       
        <div class="col-sm-3" style="padding-top: 20px;margin-bottom:50px;">
          <div class="card" style="background-color:#ADD8E6;">
            <div class="card-body">
              <p><b>Name: ${value[i].name}</b></p>
              <p class="card-text">Email: ${value[i].email}</p>
              <p class="card-text">Street: ${value[i].address.street}</p>
              <p class="card-text">Email: ${value[i].address.city}</p>
            </div>
          </div>
        </div>

        `
    }
    document.body.append(container)
}