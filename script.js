// Usuário fixo só para simulação
const user = { username: "admin", password: "1234" };

// LOGIN
function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === user.username && password === user.password) {
    document.getElementById("loginPage").style.display = "none";
    document.getElementById("systemPage").style.display = "block";
    carregarChamados();
  } else {
    alert("Usuário ou senha incorretos!");
  }
}

// LOGOUT
function logout() {
  document.getElementById("systemPage").style.display = "none";
  document.getElementById("loginPage").style.display = "block";
}

// SALVAR CHAMADO
document.getElementById("chamadoForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let chamado = {
    cliente: document.getElementById("cliente").value,
    problema: document.getElementById("problema").value,
    tecnico: document.getElementById("tecnico").value,
    descricao: document.getElementById("descricao").value
  };

  let chamados = JSON.parse(localStorage.getItem("chamados")) || [];
  chamados.push(chamado);
  localStorage.setItem("chamados", JSON.stringify(chamados));

  this.reset();
  carregarChamados();
});

// CARREGAR CHAMADOS
function carregarChamados() {
  let chamados = JSON.parse(localStorage.getItem("chamados")) || [];
  let tabela = document.getElementById("tabelaChamados");
  tabela.innerHTML = "";

  chamados.forEach(c => {
    let row = `<tr>
      <td>${c.cliente}</td>
      <td>${c.problema}</td>
      <td>${c.tecnico}</td>
      <td>${c.descricao}</td>
    </tr>`;
    tabela.innerHTML += row;
  });
}xa