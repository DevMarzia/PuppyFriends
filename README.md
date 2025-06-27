# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


<!-- install json serve -->
npm install -g json-server
creo file db.json
in packege.json in script aggiungo:  "server": "json-server --watch db.json --port 3001" 
avvio il server npm run server
installo axios npm install axios


Cos'è un createAsyncThunk? È semplicemente una funzione speciale di Redux che ti permette di eseguire un'operazione che richiede tempo (come una chiamata API) e di aggiornare lo stato solo quando hai ricevuto una risposta.