import express, { Router } from "express";
import { TestController } from "./controller/test.controller";
import { expressAdapter } from "./infra/adapters";

const app = express();
const route = Router();

app.use(express.json());

var testController = new TestController();

// Test
// ========== GET ==========
route.get("/hello", expressAdapter(testController.helloWorld));

app.use(route);

app.listen(3000);