import {Request, Response} from 'express';

import {Category} from '../../models/Category';

export async function createCategory(req: Request, res: Response) {
  try {
    const {icon, name} = req.body;

    if (!name) {
      return res.status(400).json({
        err: 'Name is required',
      });
    }

    const category = await Category.create({icon, name});

    res.status(201).json(category);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}
