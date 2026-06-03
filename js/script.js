function calcular() {
  const cultura = document.getElementById('cultura').value;
  const area = parseFloat(document.getElementById('area').value);
  const resultado = document.getElementById('resultado');

  if (!cultura || !area || area <= 0) {
    resultado.innerHTML = `<span style="color: red;">⚠️ Preencha todos os campos corretamente!</span>`;
    return;
  }

  let sementesPorHectare = 0;

  if (cultura === "soja") sementesPorHectare = 350000;
  else if (cultura === "milho") sementesPorHectare = 65000;
  else if (cultura === "feijao") sementesPorHectare = 280000;
  else if (cultura === "trigo") sementesPorHectare = 220000;

  const totalSementes = Math.round(sementesPorHectare * area);
  const sacos = (totalSementes / 60000).toFixed(1);

  resultado.innerHTML = `
    <strong>Resultado para ${cultura.toUpperCase()}:</strong><br><br>
    📍 Área: <strong>${area} hectares</strong><br>
    🌱 Sementes necessárias: <strong>${totalSementes.toLocaleString('pt-BR')}</strong><br>
    🛍️ Aproximadamente <strong>${sacos} sacos</strong> (de 60kg)
  `;
}