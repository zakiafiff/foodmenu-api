import { CategoryModel } from "../models/categoryModel.js";

export const CategoryController = {
  async getAll(req, res) {
    try {
      res.json(await CategoryModel.getAll());
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  async getById(req, res) {
    try {
      res.json(await CategoryModel.getById(req.params.id));
    } catch (err) {
      res.status(404).json({ error: err.message });
    }
  },

  async create(req, res) {
    try {
      const { name } = req.body;
      if (!name) return res.status(400).json({ error: "name wajib diisi" });
      res.status(201).json(await CategoryModel.create(name));
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  async update(req, res) {
    try {
      const { name } = req.body;
      if (!name) return res.status(400).json({ error: "name wajib diisi" });
      res.json(await CategoryModel.update(req.params.id, name));
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  async remove(req, res) {
    try {
      res.json(await CategoryModel.remove(req.params.id));
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },
};