import { adminEmail, adminPass, mailToAdmin } from "../config/auth.config.js";
import nodemailer from "nodemailer";

class MailService {
  async sendMailToNotifyPurchase(newClient) {
    const transport = nodemailer.createTransport({
      host: "smtp.hostinger.com",
      port: 465,
      secure: true,
      auth: {
        user: adminEmail,
        pass: adminPass,
      },
    });
    // console.log({ newClient });
    // console.log({mailTo});

    const templateNotifyPurchase = `
    <body style="font-family: Arial, sans-serif;">

  <h2>Nueva Venta en tu Landing Page</h2>

  <p>Hola, Miguel!</p>

  <p>Te informamos que has recibido una nueva venta en tu Landing Page:</p>

  <table style="width: 100%; margin-top: 20px;">
    <tr>
      <td><strong>Nombre:</strong></td>
      <td>${newClient.nombre}</td>
    </tr>
    <tr>
      <td><strong>Email:</strong></td>
      <td>${newClient.email}</td>
    </tr>
    <tr>
      <td><strong>Teléfono-wtsp:</strong></td>
      <td>${newClient.telefono}</td>
    </tr>
    <tr>
      <td><strong>Cedula:</strong></td>
      <td>${newClient.cedula}</td>
    </tr>
    <tr>
      <td><strong>Ciudad:</strong></td>
      <td>${newClient.ciudad}</td>
    </tr>
    <tr>
      <td><strong>Departamento:</strong></td>
      <td>${newClient.departamento}</td>
    </tr>
    <tr>
      <td><strong>Dirección de Envío:</strong></td>
      <td>${newClient.direccion}</td>
    </tr>
    <tr>
      <td><strong>Producto Adquirido:</strong></td>
      <td>${newClient.producto}</td>
    </tr>
    <tr>
      <td><strong>Datos Adicionales:</strong></td>
      <td>${newClient.datos_adicionales}</td>
    </tr>
    <tr>
      <td><strong>Valor de la Compra:</strong></td>
      <td>${newClient.valor_compra}</td>
    </tr>
    <tr>
      <td><strong>Fecha de la Compra:</strong></td>
      <td>${newClient.fecha_compra}</td>
    </tr>
  </table>

  <p>Por favor, contacta al cliente cuanto antes para confirmar la compra. Además, considera ofrecerle un descuento en la segunda unidad por si está interesado. Esto puede ayudar a escalar aún más las ventas.</p>

  <p>¡Gracias!</p>

</body>`;

    const mailOptions = {
      from: `<ventas@focusfitshop.com>`,
      to: adminEmail,
      subject: `Nueva Venta de ${newClient.producto} En tu Landing`,
      html: templateNotifyPurchase,
    };

    try {
      const info = await transport.sendMail(mailOptions);
      console.log(`✅ Email sent to Admin: ${info.response}`);
    } catch (error) {
      console.error(`❌ Error sending email to Admin:`, error);
    }
  }

  async sendMailToConfirmClientPurchase(newClient) {
    const clientEmail = newClient.email;
    const transport = nodemailer.createTransport({
      host: "smtp.hostinger.com",
      port: 465,
      secure: true,
      auth: {
        user: adminEmail,
        pass: adminPass,
      },
    });
    console.log({ newClient });
    // console.log({mailTo});

    //Images for each product and kit

    const productImages = {
      "1 Par de Gafas Amber Vision con filtro de luz azul": {
        path: "https://ambervision.focusfitshop.com/assets/product/amberLensesSingle.webp",
      },
      "2 Pares de Gafas Amber Vision con filtro de luz azul": {
        path: "https://ambervision.focusfitshop.com/assets/product/AmberLensesPair.webp",
      },
      "Jawfit Pro - Kit Primera Vez": {
        path: "https://jawfitpro.focusfitshop.com/assets/product/productIntroV2-small.webp",
      },
      "Jawfit Pro - Kit Avanzado": {
        path: "https://jawfitpro.focusfitshop.com/assets/product/kitAdvanced-sm.webp",
      },
      "Jawfit Pro - Kit Promo": {
        path: "https://jawfitpro.focusfitshop.com/assets/product/kitPromo-sm.webp",
      },
    };

    function getImageForKit(kitNombre) {
      console.log({ kitNombre });

      return (
        productImages[kitNombre] || {
          path: "./public/img/FocusFitShopLogo.webp", // fallback
          cid: "productImage",
        }
      );
    }

    const productImage = getImageForKit(newClient.producto);
    console.log({ productImage });

    const templateClient = `
  <body style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px; color: #333;">
  <table style="max-width: 600px; margin: 0 auto; background: #fff; padding: 30px; border-radius: 8px;">
    <tr>
      <td style="text-align: center;">
        <h2 style="margin-bottom: 5px;">Focus Fit Shop</h2>
        <p style="color: #777;">Pedido #${newClient.numero_orden}</p>
        <h3>¡Gracias por tu compra!</h3>
        <p>Tu pedido ha sido recibido con éxito y estamos trabajando para enviártelo lo antes posible.</p>
        <br><br>
      </td>
    </tr>

    <tr>
      <td>
        <h3>Resumen del pedido</h3>
        <table style="width: 100%; font-size: 14px; margin-top: 10px;">
          <tr>
            <td style="width: 80px;">
              <img src=${
                productImage.path
              } alt="Producto" style="width: 70px; border: 1px solid #ccc; border-radius: 4px;">
            </td>
            <td>
              ${newClient.producto}<br>
              Cantidad: 1
            </td>
            <td style="text-align: right;">$${newClient.valor_compra}</td>
          </tr>
        </table>

        <table style="width: 100%; font-size: 14px; margin-top: 20px;">
          <tr>
            <td>Subtotal</td>
            <td style="text-align: right;">$${newClient.valor_compra}</td>
          </tr>
          <tr>
            <td>Envío</td>
            <td style="text-align: right;"> <strong>GRATIS</strong></td>
          </tr>
          <tr style="font-weight: bold;">
            <td>Total</td>
            <td style="text-align: right;">$${parseInt(
              newClient.valor_compra
            )} COP</td>
          </tr>
        </table>
      </td>
    </tr>

    <tr>
      <td style="padding-top: 30px;">
        <h3>Información del cliente</h3>
        <table style="width: 100%; font-size: 14px;">
          <tr>
            <td style="vertical-align: top;">
              <strong>Dirección de envío</strong><br>
              ${newClient.nombre}<br>
              ${newClient.direccion}<br>
              ${newClient.ciudad} - ${newClient.departamento}<br>
              Colombia<br>
              Tel: ${newClient.telefono}<br>
              ${
                newClient.datos_adicionales &&
                `Datos Adicionales: ${newClient.datos_adicionales}`
              }
            </td>
          </tr>
        </table>

        <div style="padding: 20px;">
        <p style="font-size: 15px;">📦 Tu pedido será despachado pronto. Te estaremos contactando por WhatsApp para confirmar los detalles.</p>
        <p style="font-size: 15px;">Si tenés alguna duda, podés escribirnos en cualquier momento.</p>
        <p style="font-weight: bold; margin-top: 20px; font-size: 17px;">¡Gracias por elegir Focus Fit Shop!</p>
      </div>
      </td>
    </tr>

    <tr>
      <td style="text-align: center; padding-top: 30px; font-size: 13px; color: #777;">
        Si tienes alguna pregunta, responde este correo o contáctanos a través de <a href="mailto:ventas@focusfitshop.com">ventas@focusfitshop.com</a><br><br>
        Focus Fit Shop © 2025 - Todos los derechos reservados
      </td>
    </tr>
  </table>
</body>
`;

    const mailOptions = {
      from: `"Focus Fit Shop" <ventas@focusfitshop.com>`,
      to: clientEmail,
      subject: `Gracias por tu compra de ${newClient.producto}`,
      html: templateClient,
    };

    try {
      const info = await transport.sendMail(mailOptions);
      console.log(`✅ Email sent to Client: ${info.response}`);
    } catch (error) {
      console.error(`❌ Error sending email to Client:`, error);
    }
  }

  async sendMailToNotifyWhatsappConfirmationPurchase(clientUpdated) {
    const transport = nodemailer.createTransport({
      host: "smtp.hostinger.com",
      port: 465,
      secure: true,
      auth: {
        user: adminEmail,
        pass: adminPass,
      },
    });
    console.log({ clientUpdated });
    // console.log({mailTo});

    const templateNotifyPurchase = `
    <body style="font-family: Arial, sans-serif;">

  <h2>El siguiente pedido ha sido confirmado por Whatsapp</h2>

  <p>Hola, Miguel!</p>

  <p>Te informamos que acabaron de confirmar el siguiente pedido por whatsapp:</p>

  <table style="width: 100%; margin-top: 20px;">
    <tr>
      <td><strong>Nombre:</strong></td>
      <td>${clientUpdated.nombre}</td>
    </tr>
    <tr>
      <td><strong>Email:</strong></td>
      <td>${clientUpdated.email}</td>
    </tr>
    <tr>
      <td><strong>Teléfono-wtsp:</strong></td>
      <td>${clientUpdated.telefono}</td>
    </tr>
    <tr>
      <td><strong>Cedula:</strong></td>
      <td>${clientUpdated.cedula}</td>
    </tr>
    <tr>
      <td><strong>Ciudad:</strong></td>
      <td>${clientUpdated.ciudad}</td>
    </tr>
    <tr>
      <td><strong>Departamento:</strong></td>
      <td>${clientUpdated.departamento}</td>
    </tr>
    <tr>
      <td><strong>Dirección de Envío:</strong></td>
      <td>${clientUpdated.direccion}</td>
    </tr>
    <tr>
      <td><strong>Producto Adquirido:</strong></td>
      <td>${clientUpdated.producto}</td>
    </tr>
    <tr>
      <td><strong>Datos Adicionales:</strong></td>
      <td>${clientUpdated.datos_adicionales}</td>
    </tr>
    <tr>
      <td><strong>Valor de la Compra:</strong></td>
      <td>${clientUpdated.valor_compra}</td>
    </tr>
    <tr>
      <td><strong>Fecha de la Compra:</strong></td>
      <td>${clientUpdated.fecha_compra}</td>
    </tr>
    <tr>
      <td><strong>Ultima acción del cliente:</strong></td>
      <td>${clientUpdated.ultima_accion}</td>
    </tr>
  </table>

  <p>Por favor, Envía el pedido cuanto antes para que le hagas llegar la guía de envío a tu cliente para que pueda recibir supedido pronto.</p>

  <p>¡Gracias!</p>

</body>`;

    const mailOptions = {
      from: `<ventas@focusfitshop.com>`,
      to: adminEmail,
      subject: `Confirmación de Compra ${clientUpdated.producto} por ${clientUpdated.nombre} En tu Landing`,
      html: templateNotifyPurchase,
    };

    try {
      const info = await transport.sendMail(mailOptions);
      console.log(`✅ Email sent to Admin: ${info.response}`);
    } catch (error) {
      console.error(`❌ Error sending email to Admin:`, error);
    }
  }

  async sendMailToThanksContact(formContact) {
    const clientEmail = formContact.email;
    const transport = nodemailer.createTransport({
      host: "smtp.hostinger.com",
      port: 465,
      secure: true,
      auth: {
        user: adminEmail,
        pass: adminPass,
      },
    });

    const templateThanksForContacting = `
<body style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px; color: #333;">
  <table style="max-width: 600px; margin: 0 auto; background: #fff; padding: 30px; border-radius: 8px;">
    <tr>
      <td style="text-align: center;">
        <h2 style="margin-bottom: 5px;">Focus Fit Shop</h2>
        <h3 style="color: #4CAF50;">¡Gracias por contactarnos!</h3>
        <p>Hemos recibido tu mensaje y te responderemos lo antes posible.</p>
        <br>
      </td>
    </tr>

    <tr>
      <td>
        <h3>Resumen del mensaje recibido</h3>
        <table style="width: 100%; font-size: 14px; margin-top: 10px;">
          <tr>
            <td style="padding: 8px 0;"><strong>Nombre:</strong></td>
            <td style="padding: 8px 0;">${formContact.nombre}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0;"><strong>Email:</strong></td>
            <td style="padding: 8px 0;">${formContact.email}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0;"><strong>Teléfono:</strong></td>
            <td style="padding: 8px 0;">${
              formContact.telefono || "No proporcionado"
            }</td>
          </tr>
          <tr>
            <td style="padding: 8px 0;"><strong>Mensaje:</strong></td>
            <td style="padding: 8px 0;">${formContact.mensaje}</td>
          </tr>
        </table>
      </td>
    </tr>

    <tr>
      <td style="padding-top: 30px;">
        <div style="padding: 20px;">
          <p style="font-size: 15px;">💬 Nuestro equipo te responderá a la brevedad por correo o WhatsApp.</p>
          <p style="font-size: 15px;">Si tenés una consulta urgente, también podés escribirnos directamente a nuestro correo o redes sociales.</p>
          <p style="font-weight: bold; margin-top: 20px; font-size: 17px;">¡Gracias por confiar en Focus Fit Shop!</p>
        </div>
      </td>
    </tr>

    <tr>
      <td style="text-align: center; padding-top: 30px; font-size: 13px; color: #777;">
        Si tienes alguna pregunta, responde este correo o contáctanos a través de <a href="mailto:ventas@focusfitshop.com">ventas@focusfitshop.com</a><br><br>
        Focus Fit Shop © 2025 - Todos los derechos reservados
      </td>
    </tr>
  </table>
</body>
`;

    const mailOptions = {
      from: `"Focus Fit Shop" <ventas@focusfitshop.com>`,
      to: clientEmail,
      subject: `Gracias por contactarte con nosotros`,
      html: templateThanksForContacting,
    };

    try {
      const info = await transport.sendMail(mailOptions);
      console.log(`✅ Email sent to Client: ${info.response}`);
      return { success: true, message: "Email enviado con éxito" };
    } catch (error) {
      console.error(`❌ Error sending email to Client:`, error);
      return { success: false, message: "Error en el envío del email" };
    }
  }

  async sendMailToNotifyNewMessage(clientNumber, clientName, message) {
    const transport = nodemailer.createTransport({
      host: "smtp.hostinger.com",
      port: 465,
      secure: true,
      auth: {
        user: adminEmail,
        pass: adminPass,
      },
    });
    // console.log({ newClient });
    // console.log({mailTo});

    const templateNotifyNewMessage = `
    <body style="font-family: Arial, sans-serif;">

  <h2>Acabas de recibir un mensaje en whatsapp!</h2>

  <p>Hola, Miguel!</p>

  <p>Te informamos que has recibido un nuevo mensaje por parte de un cliente</p>
  <br/>
        <p><strong>Nombre:</strong> ${clientName}</p>
        <p><strong>WhatsApp:</strong> ${clientNumber}</p>
        <p><strong>Mensaje:</strong> ${message}</p>
        <br/>
  <p>Por favor, contacta al cliente cuanto antes para ayudarlo con su inquietud. Recuerda que un gran servicio al cliente es parte de un negocio exitoso.</p>

  <p>¡Gracias!</p>

</body>`;

    const mailOptions = {
      from: `<ventas@focusfitshop.com>`,
      to: adminEmail,
      subject: `Recibiste un mensaje de ${clientName} en Whatsapp`,
      html: templateNotifyNewMessage,
    };

    try {
      const info = await transport.sendMail(mailOptions);
      console.log(`✅ Email sent to Admin: ${info.response}`);
    } catch (error) {
      console.error(`❌ Error sending email to Admin:`, error);
    }
  }
}

const mailService = new MailService();
export default mailService;
