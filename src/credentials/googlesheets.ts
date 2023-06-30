import { GoogleSpreadsheet } from 'google-spreadsheet'
import { JWT } from 'google-auth-library'



const serviceAccountAuth = new JWT({

    email: process.env.client_email,
    key: process.env.private_key,
    scopes: [
      'https://www.googleapis.com/auth/spreadsheets',
    ],
  });
  
  export const doc = new GoogleSpreadsheet('17omB9zGDnwa7bOTcjgDvROcuH1XJ2aHKlO0Ol0SgCWM', serviceAccountAuth);

  