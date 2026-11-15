import { supabase } from "../config/supabaseClient.js";

const COLUMNS =
  "id, name, description, price, image_url, category_id, categories ( id, name )";

export const MenuModel = {
  async getAll() {
    const { data, error } = await supabase
      .from("menus")
      .select(COLUMNS)
      .order("name");
    if (error) throw error;
    return data;
  },

  async getById(id) {
    const { data, error } = await supabase
      .from("menus")
      .select(COLUMNS)
      .eq("id", id)
      .single();
    if (error) throw error;
    return data;
  },

  async create(payload) {
    const { data, error } = await supabase
      .from("menus")
      .insert([payload])
      .select()
      .single();
    if (error) throw error;
    return data;
  },

  async update(id, payload) {
    const { data, error } = await supabase
      .from("menus")
      .update(payload)
      .eq("id", id)
      .select()
      .single();
    if (error) throw error;
    return data;
  },

  async remove(id) {
    const { error } = await supabase.from("menus").delete().eq("id", id);
    if (error) throw error;
    return { message: "Menu deleted successfully" };
  },
};