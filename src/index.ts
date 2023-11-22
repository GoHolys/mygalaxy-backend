import cors from "cors";
import express from "express";
import http from "http";
import { config } from "./config/config";
import peopleRoutes from "./routes/Person";
import planetsRoutes from "./routes/Planet";
import starshipsRoutes from "./routes/Starship";
import { cacheRoute } from "./middleware/Caching";

const router = express();

router.use(
  cors({
    credentials: true,
  })
);

router.use(express.urlencoded({ extended: true }));
router.use(express.json());

router.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );

  if (req.method == "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }

  next();
});

router.use(cacheRoute(300));

router.use("/people", peopleRoutes);
router.use("/planets", planetsRoutes);
router.use("/starships", starshipsRoutes);

router.use((req, res, next) => {
  const error = new Error("Not found");
  console.log(error);

  return res.status(404).json({ message: error.message });
});

const server = http.createServer(router);

server.listen(8080, config.server.port, () =>
  console.log(`Server is running on port ${config.server.port}`)
);
