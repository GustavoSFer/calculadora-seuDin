function calcular(tipo, valor) {
  try {
    if (tipo === 'acao') {

      if (valor === 'C') {
        document.getElementById('resultado').value = '';
      }
  
      if (valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.') {
        document.getElementById('resultado').value += valor;
      }
  
      if (valor === '=') {
        let valor_campo = eval(document.getElementById('resultado').value);
        document.getElementById('resultado').value = valor_campo;
      }
  
    } else if (tipo === 'valor') {
      document.getElementById('resultado').value += valor;
    }
  } catch(e) {
    document.getElementById('resultado').value = "Valores informados inválidos";
  }
};