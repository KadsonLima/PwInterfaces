import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path';


// https://vitejs.dev/config/
export default defineConfig({

  plugins: [react()],


  resolve: {
     alias: {
       '@components': resolve(__dirname, 'src/components'),
       '@utils': resolve(__dirname, 'src/utils'),
       '@assets': resolve(__dirname, 'src/assets'),
       '@hooks': resolve(__dirname, 'src/hooks'),
       '@interfaces': resolve(__dirname, 'src/interfaces'),
       '@pages': resolve(__dirname, 'src/pages'),
       '@styles': resolve(__dirname, 'src/styles'),
     },
   },
})
