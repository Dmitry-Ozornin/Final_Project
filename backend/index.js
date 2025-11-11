// подключает библиотеку express npm i express
// чтобы использовать import , необходимо в package.json и указать type: module
// установка библеотеки npm i nodemon , чтобы автоматически перезапускать приложение при изменениях. Также в packege.json прописсываем "start": "nodemon index.js", сервер запускаем командой npm run start
// устновка библиотеки для отправки на почту заявки npm i nodemailer
import express from "express";
import * as ProductsController from "./Controller/ProductsController.js";
import cors from "cors";
import nodemailer from "nodemailer";

// создаем приложение express
const app = express();

app.use(cors());
app.use(express.json());
//получения продуктов
app.get("/products", ProductsController.getAllProducts);
// получение продуктов определенной категории
app.get("/categoryProducts/:params", ProductsController.getCategoryProducts);

//получение конкретного продукта
app.get("/product/:product", ProductsController.getProduct),


  // отправка заявки на почту
  app.post("/application", async (req, res) => {
    try {
      const transporter = nodemailer.createTransport({
        host: "smtp.mail.ru",
        port: 465,
        secure: true,
        auth: {
          user: "xxxConiaxxx@mail.ru",
          pass: "cWyQrYGCQ3D8Cm97tqjT",
        },
      });
      const { firstName, surname, phone, email, summa, idProduct } = req.body;
      console.log(firstName, phone, surname, email, summa, idProduct);
      await transporter.sendMail({
        from: "xxxConiaxxx@mail.ru",
        to: "xxxConiaxxx@mail.ru",
        subject: `заявка от ${email}`,
        text: `Name: ${firstName} \n  Surname: ${surname} \n Phone: ${phone} \n  Email: ${email}  \n ID of products: ${idProduct} \n Cost all products: ${summa}$`,
      });
    } catch (error) {
      return res.status(500).send({
        status: 500,
        message: " error send",
      });
    }
  });

app.listen(4444, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("server started");
  }
});
