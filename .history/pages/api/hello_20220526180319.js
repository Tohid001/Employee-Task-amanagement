// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import * as data from "../../db.json";

export default function handler(req, res) {
  res.status(200).json(data);
}
