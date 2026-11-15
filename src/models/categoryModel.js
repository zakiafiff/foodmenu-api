import { supabase } from "../config/supabaseClient.js";

export const CategoryModel = {
  async getAll() {
    const { data, error } = await supabase
      .from("categories")
      .select("*")
      .order("name");
    if (error) throw error;
    return data;
  },

  // ikut membawa daftar menu di kategori tersebut (relasi lewat foreign key)
  async getById(id) {
    const { data, error } = await supabase
      .from("categories")
      .select("id, name, menus ( id, name, description, price, image_url )")
      .eq("id", id)
      .single();
    if (error) throw error;
    return data;
  },

  async create(name) {
    const { data, error } = await supabase
      .from("categories")
      .insert([{ name }])
      .select()
      .single();
    if (error) throw error;
    return data;
  },

  async update(id, name) {
    const { data, error } = await supabase
      .from("categories")
      .update({ name })
      .eq("id", id)
      .select()
      .single();
    if (error) throw error;
    return data;
  },

  async remove(id) {
    const { error } = await supabase.from("categories").delete().eq("id", id);
    if (error) throw error;
    return { message: "Category deleted successfully" };
  },
};