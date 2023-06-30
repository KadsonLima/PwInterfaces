import { doc } from 'PwInterfaces/src/credentials/googlesheets';
import type { NextApiRequest, NextApiResponse } from 'next'


interface DataClient{
  nome:string
  contato:string
  server:string
  service:string
  description:string
}


export default async function ( req: NextApiRequest, res: NextApiResponse ) {

  await doc.loadInfo();

  const {nome, contato, server, service, description}:DataClient = req.body;

  // ACESSA A PRIMEIRA SHEET
  const sheet = doc.sheetsByIndex[0];
  
  const row = await sheet.addRow({
    nome,
    contato,
    server,
    service,
    description
  })

  if(row){
    return res.status(200);
  }

  res.status(400)
  
}
