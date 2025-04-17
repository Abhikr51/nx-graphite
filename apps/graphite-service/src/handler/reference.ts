import { Request, Response } from "express";
import { readFile } from "fs/promises";
import path from "path";

const dataPath = "apps/graphite-service/src/data";

export const getReferenceTables = async (req: Request, res: Response) => {
  const refTablesFilePath = path.join(
    process.cwd(),
    `${dataPath}/ref-tables.json`
  );
  const fileContent = await readFile(refTablesFilePath, "utf-8");
  const jsonData = JSON.parse(fileContent);
  res.json(jsonData);
};
