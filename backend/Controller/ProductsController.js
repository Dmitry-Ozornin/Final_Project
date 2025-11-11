import fs from "fs";
import path from "path";
import { dirname } from "path";
import { json } from "stream/consumers";
import { fileURLToPath } from "url";

export const getAllProducts = async (req, res) => {
  const __dirname = dirname(fileURLToPath(import.meta.url));

  try {
    const fileContent = await new Promise((resolve, reject) => {
      return fs.readFile(path.join(__dirname + "/database.json"), { encoding: "utf8" }, (err, data) => {
        if (err) {
          return reject(err);
        }
        return resolve(data);
      });
    });
    // console.log(fileContent);
    res.send(fileContent);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "не удалось получить продукты",
    });
  }
};

export const getCategoryProducts = async (req, res) => {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const category = req.params.params;
  const categoryProducts = [];

  try {
    const fileContent = await new Promise((resolve, reject) => {
      return fs.readFile(path.join(__dirname + "/database.json"), { encoding: "utf8" }, (err, data) => {
        if (err) {
          return reject(err);
        }

        return resolve(data);
      });
    });
    // console.log(category);

    const data = JSON.parse(fileContent);
    data.map((el) => {
      if (el.category === category.toLowerCase()) {
        categoryProducts.push(el);
      }
    });
    // console.log(categoryProducts);

    res.send(categoryProducts);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "не удалось получить продукты",
    });
  }
};
export const getProduct = async (req, res) => {
  console.log(req.params.product);

  try {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const product = req.params.product;
    
    const fileContent = await new Promise((resolve, reject) => {
      return fs.readFile(path.join(__dirname + "/database.json"), { encoding: "utf8" }, (err, data) => {
        if (err) {
          return reject(err);
        }

        return resolve(data);
      });
    });
    // console.log(category);

    const data = JSON.parse(fileContent);
   data.map((el)=>{
    if(Number(el.id) === Number(product)){
      res.send(el)
    }
   })
    // console.log(categoryProducts);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "не удалось получить продукты",
    });
  }
};

export const getBasketProducts = async (req, res) => {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const category = req.params.params;
  const categoryProducts = [];

  try {
    const fileContent = await new Promise((resolve, reject) => {
      return fs.readFile(path.join(__dirname + "/database.json"), { encoding: "utf8" }, (err, data) => {
        if (err) {
          return reject(err);
        }

        return resolve(data);
      });
    });
    // console.log(category);

    const data = JSON.parse(fileContent);
    data.map((el) => {
      if (el.category === category.toLowerCase()) {
        categoryProducts.push(el);
      }
    });
    // console.log(categoryProducts);

    res.send(categoryProducts);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "не удалось получить продукты",
    });
  }
};
