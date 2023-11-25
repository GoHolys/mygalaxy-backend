import NodeCache from "node-cache";
import { Request, Response, NextFunction } from "express";

const cache = new NodeCache({ useClones: false });

export const cacheRoute =
  (duration: number) => (req: Request, res: Response, next: NextFunction) => {
    if (req.method !== "GET") {
      console.log("Cannot cache non-GET methods");
      return next();
    }

    const key = req.url;
    const cachedRes = cache.get(key);

    if (cachedRes) {
      res.json(cachedRes);
    } else {
      let originalJson = res.json.bind(res);

      res.json = (body) => {
        originalJson(body);
        cache.set(key, body, duration);
        return res;
      };
      next();
    }
  };
