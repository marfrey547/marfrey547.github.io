const pergunta1 = document.querySelectorAll('input[name="pergunta1"]');
pergunta1.forEach(function(resposta) {{
  resposta.addEventListener('change', function() {
    const resposta = document.getElementById('resposta1');
    if (this.value === 'a') {
      resposta.textContent = 'Muito bem,vc acertou!';
      resposta.style.color = 'green';
    }else {
      resposta.textContent = 'Vc errrou, a resposta correta é Abraão';
      resposta.style.color = 'red';
    }
    
  });
}});

const pergunta2 = document.querySelectorAll('input[name="pergunta2"]');
pergunta2.forEach(function(resposta) {
  resposta.addEventListener('change', function() {
    const resposta = document.getElementById('resposta2');
    if (this.value === 'c') {
      resposta.textContent = 'Que legal, vc foi muito bem!';
      resposta.style.color = 'green';
    }else {
      resposta.textContent = 'Errado, a resposta certa é Eliseu';
      resposta.style.color = 'red';
    }
  });
});

const pergunta3 = document.querySelectorAll('input[name="pergunta3"]');
pergunta3.forEach(function(resposta) {
  resposta.addEventListener('change', function() {
    const resposta = document.getElementById('resposta3');
    if (this.value === 'a') {
      resposta.textContent = 'Parabéns, vc presta atenção aos detalhes!';
      resposta.style.color = 'green';
    }else {
      resposta.textContent = 'Errado, vc precisa prestar mais atenção no texto, a resposta correta é Êxodo';
      resposta.style.color = 'red';
    }
  });
});

const pergunta4 = document.querySelectorAll('input[name="pergunta4"]');
pergunta4.forEach(function(resposta) {
  resposta.addEventListener('change', function() {
    const resposta = document.getElementById('resposta4');
    if (this.value === 'd') {
      resposta.textContent = 'Olha só, alguém está atento a palavra de Deus, vc acertou!';
      resposta.style.color = 'green';
    }else {
      resposta.textContent = 'Humn....., parece que tem faltado EBD, a resposta correta é Êutico';
      resposta.style.color = 'red';
    }
  });
});