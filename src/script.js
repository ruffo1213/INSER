function registrarUsuario(event) {

    event.preventDefault();
  
    // Pegar os valores dos inputs
    var nome = document.getElementById("nome").value;
    var  qtd = document.getElementById("qtd").value;
    var  cod = document.getElementById("cod").value;
    var marca  = document.getElementById("marca").value;

  
    // Debugando os valores
    console.log(nome, qtd, cod, marca );
  

    var mysql = require("mysql2");

    var connection = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "root",
      database: "sextou",
    });
  
    connection.connect(function(error) {
      if (error) {
        console.log(error.code);
        console.log(error.fatal);
      }
    })
  
  
    var query = `INSERT INTO produtos (nome, quantidade, codigo_produto, marca) VALUES ("${nome}", "${qtd}", "${cod}", "${marca}")`;
  
  
    // Executar a query
    connection.query(query, function(error) {
      if(error) {
        console.log("Ocorreu um erro ao inserir no banco de dados")
      } else {
        alert("Cadastrado com sucesso")
      }
    })
  }
  

  var formulario = document.getElementById("fromss");
  formulario.addEventListener("submit", registrarUsuario);
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  // var mysql = require('mysql2');
  
  // var formulario = document.getElementById('formulario');
  
  // formulario.addEventListener('submit', function(e){
  //   e.preventDefault();
  
  //   var nome = document.getElementById('nome').value;
  //   var sobrenome = document.getElementById('sobrenome').value;
  //   var cidade = document.getElementById('cidade').value;
  
  //   if (nome == '' || sobrenome == '' || cidade == '') {
  //     console.log('city or name is empty', cidade, nome)
  //     return
  //   }
  
  //   // Add the credentials to access your database
  //   var connection = mysql.createConnection({
  //     host: "localhost",
  //     user: "root",
  //     password: "root",
  //     database: "electron-teste"
  //   });
  
  //   // connect to mysql
  //   connection.connect(function (err) {
  //     // in case of error
  //     if (err) {
  //       console.log(err.code);
  //       console.log(err.fatal);
  //     }
  //   });
  
  //   $query = 'INSERT INTO user_profiles(display_name, city) VALUES ("' + name + '", "' + cidade + '");';
  
  //   connection.query($query, function (err, rows, fields) {
  //     if (err) {
  //       console.log("An error occurred performing the query.");
  //       console.log(err);
  //       return;
  //     }
  
  //     alert('usuario adicionado com sucesso')
  
  //     console.log("Query successfully executed");
  //   });
  
  // })