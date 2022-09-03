

//Cadastro de Usuário
function registerUser(event){
    event.preventDefault();
    const formData = new FormData(document.querySelector('form'))
    const pass =  formData.get("passReg");
    const passConf = formData.get("passConfReg");
    if (pass !== passConf){
        alert("Senhas não conferem");
        return;
    }
    if(pass.length < 6 ){
        alert("A senha precisa ter 6 caracteres no mínimo");
        return;
    }
    const email = formData.get("emailReg");
    const name = formData.get("nameReg");
    const states = formData.get("statesReg");
    const radio = formData.get("radioReg");

    const user = {
        name: name,
        email: email,
        states: states,
        pass: pass,
        radio : radio
    }
    let armazenar = sessionStorage.getItem('users')
    if (armazenar === null){
        sessionStorage.setItem('users',JSON.stringify([user]));
        return;
        
    }
    else {
        let newVar = JSON.parse(armazenar);
        newVar.push(user);
        sessionStorage.setItem('users',JSON.stringify(newVar));
    }
    window.location.replace("index.html")         
}

//Área de Login

function checkLogin(event){
    event.preventDefault();
    const formData = new FormData(document.querySelector('form'));
    const email = formData.get("email");
    const pass = formData.get("pass");
    let listUsers = sessionStorage.getItem('users');
    listUsers = JSON.parse(listUsers);
    const find = listUsers.find(element => element.email === email);
    if(find === undefined){
        alert("E-mail inválido");
    }
    if (find.pass === pass){
        window.location.href = 'lista-usuarios.html';
    }
    else{
        alert("Senha Incorreta")
    }
}