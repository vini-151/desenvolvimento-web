const form = document.getElementById('user-form');
const userList = document.getElementById('user-list');

function carregarUsuario(){
    fetch('/api/users')
        .then(res => res.json())
        .then(data => {
            userList.innerHTML = '';
            data.forEach(user =>{
                const li = document.createElement('li');
                li.innerHTML = `${user.nome} (${user.email})`;
                userList.appendChild(li)
            });
        });
};

carregarUsuario()


//ações para cadastrar usuario 

form.addEventListener('submit', e=>{
    e.preventDefault();

    const nome = document.getElementById('nome').value
    const email = document.getElementById('email').value

    cadastrarUsuario(nome, email)

});

function cadastrarUsuario(nome, email){
    fetch('/api/users', {
        method: 'POST',
        headers: {'Content-Type': 'aplication/json'},
        body: JSON.stringify({nome, email})
    })
    .then(() =>{
        form.reset();
        carregarUsuario();
    })

}