import express from "express";
import { pool } from './db.js'
import usuariosRoutes from './routes/usuarios.routes.js'
import cors from 'cors'

const app= express();

app.use(usuariosRoutes);
app.use(cors());

var options = {
  origin: '*'
}


app.get('/ping',cors(options),async (req,res)=> {
  const result = 
  res.json(result[0])
});

app.get('/mine',cors(options),async (req,res)=> {
  const result =  [
    {
        id: 1,
        nombre: 'Ezequiel',
        apellido: 'Minetti',
        edad: 32,
        direccion: 'Hidalgo 1064',
    },
    {
        id: 2,
        nombre: 'Pablo',
        apellido: 'Minetti',
        edad: 58,
        direccion: 'Aguilar 828',
    },
    {
        id: 3,
        nombre: 'Eliana',
        apellido: 'Minetti',
        edad: 30,
        direccion: 'Av. Avellaneda 1863',
    },
    {
        id: 4,
        nombre: 'Mónica',
        apellido: 'Taglioli',
        edad: 58,
        direccion: 'Unanue 828',
    }
]
  res.json(result)
});


app.listen(3000,()=>{
  console.log("server running on port 3000")
})
