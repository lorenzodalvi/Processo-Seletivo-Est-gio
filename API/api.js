function fazGet(url) {
    fetch("https://reqres.in/api/users?page=2").then(response => response.json()).then(data => 
    main (data.data))

    
 }
 fazGet()
 
 let display = document.getElementById("content1");
 function main(data) {
     
     
     
         let array = data.map(item => {
             return `
         
         <div class="localUsers">
             <div class="cards">
                  <div class="user">
                     <img class="img" src="${item.avatar}" alt="profile">
                     <h2>${item.first_name, "+ ", item.last_name}</h2>
                     <h3 class="userEmail">${item.email}</h3>
                 </div>
                 <a href="#" class="editLink">
                     <img src="Assets/edit-icon.png" alt="edit_icon">
                 </a>
             </div>
         </div>
         `
         })
         console.log(array)
        display.innerHTML = array
     }