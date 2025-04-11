import DashBoardInternaController from "../controllers/DashboardInternaController.js";
import express from "express";
const routerInterna = express.Router();

// Rota para buscar todos os dados para dashbord de eventos Internos Ativos - Inclui candidatos e votos
routerInterna.get("/v1/dashboard/interno", DashBoardInternaController.findDashboardInternoGeral);
routerInterna.get("/v1/dashboard/interno/:curso", DashBoardInternaController.findDashboardInternoByCurso);


// Rota para recebendo de dados do webhooks para representantes
routerInterna.post("/votacao_representantes", DashBoardInternaController.representantesWebHook);
export default routerInterna;




