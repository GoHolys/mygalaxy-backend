import axios from "axios";
import { Request, Response } from "express";

const getSinglePerson = async (req: Request, res: Response) => {
  try {
    const personId = req.params.personId;
    const { data: person } = await axios.get(
      `https://swapi.dev/api/people/${personId}`
    );
    return person
      ? res.status(200).json({ person })
      : res.status(404).json({ message: "Not Found" });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const getPeopleByPage = async (req: Request, res: Response) => {
  try {
    const pageId = req.params.pageId;
    const { data: people } = await axios.get(
      `https://swapi.dev/api/people/?page=${pageId}`
    );
    return people
      ? res.status(200).json({ people })
      : res.status(404).json({ message: "Not Found" });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const getSortedPeople = async (req: Request, res: Response) => {
  try {
    const sortOrder = req.params.orderId;
    const { data: people } = await axios.get(`https://swapi.dev/api/people`);
    const sortedPeople = people.results.sort((a: any, b: any) => {
      return sortOrder === "1"
        ? b.name.localeCompare(a.name)
        : a.name.localeCompare(b.name);
    });
    return sortedPeople
      ? res.status(200).json({ sortedPeople })
      : res.status(404).json({ message: "Not Found" });
  } catch (error) {
    res.status(500).json({ error });
  }
};

export default { getSinglePerson, getPeopleByPage, getSortedPeople };
