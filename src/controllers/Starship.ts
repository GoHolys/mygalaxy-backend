import axios from "axios";
import { Request, Response } from "express";

const getSingleStarship = async (req: Request, res: Response) => {
  try {
    const starshipId = req.params.starshipId;
    const { data: starship } = await axios.get(
      `https://swapi.dev/api/starships/${starshipId}`
    );
    return starship
      ? res.status(200).json({ starship })
      : res.status(404).json({ message: "Not Found" });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const getStarshipsByPage = async (req: Request, res: Response) => {
  try {
    const pageId = req.params.pageId;
    const { data: starships } = await axios.get(
      `https://swapi.dev/api/starships?page=${pageId}`
    );
    return starships
      ? res.status(200).json({ starships })
      : res.status(404).json({ message: "Not Found" });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const getSortedstarships = async (req: Request, res: Response) => {
  try {
    const sortOrder = req.params.orderId;
    const { data: starships } = await axios.get(
      `https://swapi.dev/api/starships`
    );
    const sortedStarships = starships.results.sort((a: any, b: any) => {
      return sortOrder === "1"
        ? b.name.localeCompare(a.name)
        : a.name.localeCompare(b.name);
    });
    return sortedStarships
      ? res.status(200).json({ sortedStarships })
      : res.status(404).json({ message: "Not Found" });
  } catch (error) {
    res.status(500).json({ error });
  }
};

export default { getSingleStarship, getStarshipsByPage, getSortedstarships };
