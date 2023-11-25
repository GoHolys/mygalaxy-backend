import axios from "axios";
import { Request, Response } from "express";

const getSinglePlanet = async (req: Request, res: Response) => {
  try {
    const planetId = req.params.planetId;
    const { data: planet } = await axios.get(
      `https://swapi.dev/api/planets/${planetId}`
    );
    return planet
      ? res.status(200).json({ planet })
      : res.status(404).json({ message: "Not Found" });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const getPlanetsByPage = async (req: Request, res: Response) => {
  try {
    const pageId = req.params.pageId;
    const { data: planets } = await axios.get(
      `https://swapi.dev/api/planets?page=${pageId}`
    );
    return planets
      ? res.status(200).json({ planets })
      : res.status(404).json({ message: "Not Found" });
  } catch (error) {
    res.status(500).json({ error });
  }
};


export default { getSinglePlanet, getPlanetsByPage };
