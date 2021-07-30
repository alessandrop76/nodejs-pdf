const express = require('express');
const app = express();
const pdf = require('html-pdf');
const ejs = require('ejs');



app.set('view engine', 'ejs');
app.use(express.static('public'));



var newFile = 'NomeDoArquivo'+Date.now()+".pdf";
const nomeDoUsuario = "Novo Usuário Novo";
const curso = "Novo Curso";

ejs.renderFile("views/index.ejs",{curso: curso, nomeDoUsuario: nomeDoUsuario}, (err,html) =>{
    if(err){
        console.log(err);
    }else{
        pdf.create(html,{}).toFile(newFile, (req,res) => {
            if(err){
                console.log("algo deu errado");
            }else{
                console.log(res);
            }
        })
    }
});
/* 
app.get("/", (req, res) =>{
    res.render("index")
})
 */

/*
const conteudo = `
<h1 style="text-align:center; color:#110540;margin-top:40px">PDF Gerado com literals</h1>
<hr>
<div>Este curso é: ${curso}</div>
<div>Nome do aluno: ${nomeDoUsuario}</div>
<div></div>
<div style="font-size: 1.3rem;color:#110540;margin-top:5%;margin-left: 3%;">
Novo arquivo gerado através de HTML podendo ser estilizado normalmente.
</div>
<div>
Para gerar imagens, a imagem deve estar hospedada em um servidor web, e não diretamente na aplicação.
<p><img src="https://image.shutterstock.com/z/stock-photo-cup-coffee-on-window-sunset-background-615558377.jpg" style="max-height: calc(90.92vh - 1.5rem);"></p>


<img class="m_o_64f17" alt="cup coffee on window sunset background" src="https://image.shutterstock.com/z/stock-photo-cup-coffee-on-window-sunset-background-615558377.jpg" style="max-height: calc(90.92vh - 1.5rem);">
</div>


`
*/
/* 
pdf.create(conteudo,{}).toFile(newFile, (req,res) => {
    if(error){
        console.log("algo deu errado");
    }else{
        console.log(res);
    }
})
*/
/* 
app.listen(5000, () =>{
    console.log("listen on port 5000");
})
 */