const { exec } = require("child_process");
const path = require("path");

const args = process.argv.slice(2);
if (args.length === 0) {
  console.error("Por favor, forneça o nome do arquivo a ser executado.");
  process.exit(1);
}

const fileName = args[0];
const filePath = path.join(__dirname, "src", `${fileName}.ts`);

exec(`ts-node ${filePath}`, (error, stdout, stderr) => {
  if (error) {
    console.error(`Erro ao executar o arquivo: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`Erro: ${stderr}`);
    return;
  }
  console.log(stdout);
});
