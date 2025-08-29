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
  alert("Chamado salvo com sucesso!");
});