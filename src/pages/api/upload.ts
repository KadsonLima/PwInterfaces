import type { NextApiRequest, NextApiResponse } from "next";
import formidable from "formidable";
import fs from "fs";
import path from "path";

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<{
    data: {
      url: string | string[];
    } | any;
    error: string | null;
  }>
) => {
	
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    res.status(405).json({
      data: null,
      error: "Método não permitido",
    });
    return;
  }

  try {
    const form = new formidable.IncomingForm();

    // Caminho do diretório de destino para o upload
    const uploadDir = path.join(process.cwd(), "uploads"); // Caminho relativo à raiz do projeto

    // Certifique-se de que o diretório de destino exista; se não, crie-o
    fs.mkdirSync(uploadDir, { recursive: true });

    //@ts-ignore
    form.uploadDir = uploadDir;
		
    let FormResp = new Promise((resolve, reject) => {
      form.parse(req, (err, fields, files) => {
        if (err) {
					
          reject(err);
          return;
        }

        // Verifique se o arquivo foi enviado corretamente
        if (!files.file) {
          reject(new Error("Arquivo não encontrado no upload"));
          return;
        }

        // Obtenha o nome original do arquivo enviado
        //@ts-ignore
        const originalFilename = files.file.newFilename;
        const destinationPath = path.join(uploadDir, "interfaces.pck");

        //@ts-ignore
        fs.rename(uploadDir+"/"+files.file.newFilename, destinationPath, (err) => {
          if (err) {
            reject(err);
            return;
          }

          // Arquivo movido com sucesso
          resolve('Arquivo movido com sucesso');

          // Outras ações, como salvar em banco de dados, podem ser realizadas aqui
        });
      });
    });

  } catch (e) {
    //@ts-ignore
    if (e instanceof FormidableError) {
      //@ts-ignore
      res.status(e.httpCode || 400).json({ data: null, error: e.message });
    } else {
      console.error(e);
      res.status(500).json({ data: null, error: "Erro interno do servidor" });
    }
  }
};

export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;
