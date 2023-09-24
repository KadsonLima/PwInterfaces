const fs = require("fs");
const path = require("path");
const fse = require("fs-extra");
const util = require('util');
const exec = util.promisify(require('child_process').exec);

const comandoSurfacesSPCK = 'SPCK -x "surfaces.pck"';
const comandoCompress = 'SPCK -c "creato/arquivos.pck.files"';
const comandointerfacesSPCK = 'SPCK -x "interfaces.pck"';

const origem = "interfaces.pck.files/interfaces";
const destino = "creato/arquivos.pck.files/interfaces.pck.files/interfaces";
const destinoExtras = "creato/arquivos.pck.files/extras/interfaces.pck.files";
const pastaPai = "surfaces.pck.files/surfaces";
const destinoSurfaces = "creato/arquivos.pck.files/surfaces.pck.files/surfaces";

// Function to create directories
function criarDiretorio(diretorio:string) {
  if (!fs.existsSync(diretorio)) {
    console.log(`Criando diretório: ${diretorio}`);
    fs.mkdirSync(diretorio, { recursive: true });
  }
}

async function executeSPCKCommand(command:string) {
  try {
    const { stdout, stderr } = await exec(command);
    console.log('Comando SPCK executado com sucesso.');

  } catch (error) {
    console.error('Erro ao executar o comando SPCK:', error);
  }
}

async function main() {
  await executeSPCKCommand(comandoSurfacesSPCK);
  await executeSPCKCommand(comandointerfacesSPCK);

  criarDiretorio("creato");
  criarDiretorio("creato/arquivos.pck.files");
  criarDiretorio("creato/surfaces.pck.files");
  criarDiretorio("creato/arquivos.pck.files/interfaces.pck.files/interfaces");
  criarDiretorio("creato/arquivos.pck.files/extras/interfaces.pck.files");
  criarDiretorio(
    "creato/arquivos.pck.files/surfaces.pck.files/surfaces/ingame"
  );
  copiarArquivos(origem, destino, arquivosACopiar);
  copiarArquivos(origem, destinoExtras, extras);
  for (const pasta of pastasDesejadas) {
    const pastaOrigem = path.join(pastaPai, pasta);

    if (fs.existsSync(pastaOrigem)) {

      fse.copySync(pastaOrigem, path.join(destinoSurfaces, pasta));
    }
  }

  
  //fs.copyFileSync("interfaces.pck", "creato/");
  await executeSPCKCommand(comandoCompress);
  fse.move('creato/arquivos.pck', 'arquivos.pck', true);
  fs.rm("interfaces.pck.files", { recursive: true }); 
  fs.rm("surfaces.pck.files", { recursive: true });
  fs.rm("creato", { recursive: true });
  
}

main();


function copiarArquivos(origem:string, destino:string, arquivos:string[]) {
  for (const arquivo of arquivos) {
    fs.copyFileSync(path.join(origem, arquivo), path.join(destino, arquivo));
  }
}

const arquivosACopiar = [
  "character_elfchat.xml",
  "hpmpotherb.xml",
  "hpmpxp.xml",
  "magicprogress1.xml",
  "magicprogress2.xml",
  "magicprogress3.xml",
  "map.xml",
  "progress.xml",
  "progress_hp.xml",
  "progress_mp.xml",
  "teammain.xml",
  "teammate1.xml",
  "teammate2.xml",
  "teammate3.xml",
  "teammate4.xml",
  "teammate5.xml",
  "teammate6.xml",
  "teammate7.xml",
  "teammate8.xml",
  "teammate9.xml",
  "chat.xml",
  "chatbig.xml",
  "chatsmall.xml",
  "quickbar12ha.xml",
  "quickbar12hb_1.xml",
  "quickbar12hb_2.xml",
  "quickbar12hb_3.xml",
  "quickbar12va.xml",
  "quickbar12vb_1.xml",
  "quickbar12vb_2.xml",
  "quickbar12vb_3.xml",
  "quickbar13ha.xml",
  "quickbar13hb_1.xml",
  "quickbar13hb_2.xml",
  "quickbar13hb_3.xml",
  "quickbar13hb_4.xml",
  "quickbar13hb_5.xml",
  "quickbar13va.xml",
  "quickbar13vb_1.xml",
  "quickbar13vb_2.xml",
  "quickbar13vb_3.xml",
  "quickbar13vb_4.xml",
  "quickbar13vb_5.xml",
];

const extras = [
  "arrangeteamsip.xml",
  "character.xml",
  "epequip.xml",
  "friendlist.xml",
  "guildmanage.xml",
  "inventory_f.xml",
  "inventory_m.xml",
];

const pastasDesejadas = [
  "0kash",
  "funline-reborn",
  "new",
  "version01",
  "version02",
  "progress",
  "ingame/minimapdir.tga",
  "ingame/minimapmask.tga",
];

