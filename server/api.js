import { Router } from "express";

import logger from "./utils/logger";
import visitRouter from "./visits";

const router = Router();

router.get("/", (_, res) => {
	logger.debug("Welcoming everyone...");
	res.json({ message: "Hello, world!" });
});

router.use("/visits", visitRouter);

export default router;
