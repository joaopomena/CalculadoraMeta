function calcular() {
  const valor = Number(document.getElementById("valor").value);
  const taxa = 1.125; // 12,5%

  if (valor <= 0 || isNaN(valor)) {
    document.getElementById("resultado").innerText =
      "Valor com juros: R$ 0,00";
    return;
  }

  const valorFinal = valor * taxa;

  document.getElementById("resultado").innerText =
    "Valor com juros: R$ " + valorFinal.toFixed(2).replace(".", ",");
}
