import { doc } from "../../credentials/googlesheets";
import type { NextApiRequest, NextApiResponse } from "next";

interface DataClient {
  nome: string;
  contato: string;
  server: string;
  service: boolean;
  description: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await doc.loadInfo();

  console.log(req.body);

  const { nome, contato, server, service, description }: any = req.body;

  const servicosString = Object.entries(service)
    .filter(([_, value]) => value === true)
    .map(([key, _]) => key).join(", ");


  const serverString = Object.entries(server)
    .filter(([_, value]) => value === true)
    .map(([key, _]) => key).join(", ");

  // ACESSA A PRIMEIRA SHEET
  const sheet = doc.sheetsByIndex[0];

  const row = await sheet.addRow({
    nome,
    contato,
    server:serverString,
    service:servicosString,
    description,
  });

  if (row) {
    return res.status(200).json({ message: "Pedido Feito!" });
  }

  res.status(400).json({ message: "Pedido Feito!" });
}