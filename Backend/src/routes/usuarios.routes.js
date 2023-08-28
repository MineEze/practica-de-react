import { Router } from "express";

const router = Router();

router.get('/empleados',(req,res)=> res.send('Obteniendo Empleados'));

router.post('/empleados',(req,res)=> res.send('Creando Empleados'));

router.put('/empleados',(req,res)=> res.send('Actualizando Empleados'));

router.delete('/empleados',(req,res)=> res.send('eliminando Empleados'));

export default router;