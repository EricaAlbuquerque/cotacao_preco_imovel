let construcao=[
    {
      tipo: "Casa",
      quartos: 0,
      sala: 0,
      vagas: 0,
      banheiros:0,
      preco: 0
    },
    {
      tipo: "Apartamento",
      quartos: 0,
      sala: 0,
      banheiros:0,
      vagas: 0,
      preco: 0
    }
    
    
  ]
  //Id do <tbody> do html
  var elementoTabela = document.getElementById("tabelaCotacao");
  
  exibirNaTela();
  
  
  function exibirNaTela() {
    elementoTabela.innerHTML = "";
    
    //para exibir os elementos do objeto na tabela
    for (var i = 0; i < construcao.length; i++) {
      var construc = construcao[i];
    
    elementoTabela.innerHTML += 
      `
        <tr>
          <td>${construc.tipo}</td>
          <td>${construc.quartos}</td>
          <td>${construc.sala}</td>
          <td>${construc.banheiros}</td>
          <td>${construc.vagas}</td>
          <td style=background-color:#D1B472>${construc.preco}Mil </td>
          <td>
          <button onClick="addComodo('quartos',${i},true)" style=background-color:#4E7C68;color:#fff>Q</button></td>
          <td><button onClick="addComodo('sala',${i},true)"style=background-color:#4E7C68;color:#fff>S</button></td>
          <td><button onClick="adicionarBanheiro(${i},true)"style=background-color:#4E7C68;color:#fff>B</button></td>
           <td><button onClick="addComodo(${i},true)"style=background-color:#4E7C68;color:#fff>V</button></td>
           <td><button onClick="removerComodo('quartos', ${i})"style=background-color:#77674f;color:#fff>RQ</button></td>
           <td><button onClick="removerComodo('sala', ${i})" style=background-color:#77674f;color:#fff>RS</button></td>
           <td><button onClick="removerComodo('banheiros', ${i})"style=background-color:#77674f;color:#fff>RB</button></td>
           <td><button onClick="removerComodo('vagas', ${i})"style=background-color:#77674f;color:#fff>RV</button></td>
          </tr>` ;
      //acima os botoes executam a funcao de adicionar
      
    }
    
  }
  /*
  function adicionarQuartos(index) {
    construcao[index].quartos++;
    construcao[index].preco += 30.0;
    exibirNaTela();
  }
  
  function adicionarSala(index) {
    construcao[index].sala++;
    construcao[index].preco += 20.0;
    exibirNaTela();
  }
  
  function adicionarBanheiro(index) {
    construcao[index].banheiros++;
    construcao[index].preco += 10.0;
    exibirNaTela();
  }
  
  function adicionarVagas(index) {
    construcao[index].vagas++;
    construcao[index].preco += 15.0;
    exibirNaTela();
  }
  
  function zerarPreco(index) {
    construcao[index].quartos = 0;
    construcao[index].sala = 0;
    construcao[index].vagas= 0;
    construcao[index].preco= 0;
   
    exibirNaTela();
  }
  */
  //remover cômodos e seus valores
  function removerComodo(comodo, index) {
    let valor;
    //corresponde a cadaa como e seus valores
    switch (comodo) {
      case 'quartos':
        valor = 30.0;
        break;
      case 'sala':
        valor = 20.0;
        break;
      case 'banheiros':
        valor = 10.0;
        break;
      case 'vagas':
        valor = 15.0;
        break;
      default:
        console.log('Tipo de item desconhecido: ' + tipo);
        return;
    }
  
    //reduzir deacordo com o valor e chamar funcao no botao
    if (construcao[index][comodo] > 0) {
      construcao[index][comodo]--;
      construcao[index].preco -= valor;
    }
  
    exibirNaTela();
  }
  
  
  function addComodo(comodo, index,adicionar) {
    let valor=0;
    //corresponde a cadaa como e seus valores
    switch (comodo) {
      case 'quartos':
        valor = 30.0;
        break;
      case 'sala':
        valor = 20.0;
        break;
      case 'banheiros':
        valor = 10.0;
        break;
      case 'vagas':
        valor = 15.0;
        break;
      default:
        console.log('Tipo de item desconhecido: ' + tipo);
        return;
    }
  
    //adicionar deacordo com o valor e chamar funcao no botao
    if (adicionar) {
      construcao[index][comodo]++;
      construcao[index].preco += valor;
    }
  
    exibirNaTela();
  }
  
  
  
  