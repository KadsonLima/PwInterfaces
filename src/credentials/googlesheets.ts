import { GoogleSpreadsheet } from 'google-spreadsheet'
import { JWT } from 'google-auth-library'



const serviceAccountAuth = new JWT({

    email: process.env.CLIENT_EMAIL,
    key: process.env.PRIVATE_KEY,
    scopes: [
      'https://www.googleapis.com/auth/spreadsheets',
    ],
  });
  
  export const doc = new GoogleSpreadsheet('17omB9zGDnwa7bOTcjgDvROcuH1XJ2aHKlO0Ol0SgCWM', serviceAccountAuth);

  