import { MenuModel } from "../models/menuModel.js";

// hanya ambil field yang memang ada di tabel
const pickFields = (body) => {
  const { name, description, price, image_url, category_id } = body;
  return { name, description, price, image_url, category_id };
};

export const MenuController = {
  async getAll(req, res) {
    try {
      res.json(await MenuModel.getAll());
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  async getById(req, res) {
    try {
      res.json(await MenuModel.getById(req.params.id));
    } catch (err) {
      res.status(404).json({ error: err.message });
    }
  },

  async create(req, res) {
    try {
      const payload = pickFields(req.body);
      if (!payload.name) {
        return res.status(400).json({ error: "name wajib diisi" });
      }
      res.status(201).json(await MenuModel.create(payload));
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  async update(req, res) {
    try {
      res.json(await MenuModel.update(req.params.id, pickFields(req.body)));
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  async remove(req, res) {
    try {
      res.json(await MenuModel.remove(req.params.id));
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },
};