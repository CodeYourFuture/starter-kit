import { Router } from "express";

import { trackVisit } from "./service";

const router = Router();

router.post("/", async (_, res, next) => {
  try {
    const visit = await trackVisit();
    res.status(201).json(visit);
  } catch (err) {
    next(err);
  }
});

export default router;
