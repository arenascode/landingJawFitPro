import clientService from "../services/purchase.service.js";

export async function newPurchase(req, res, next) {
  
  try {
    const fbclid = req.query.fbclid;

    // Obtener el _fbc de las cookies
    const fbc = req.cookies._fbc;

    if (fbclid) {
      console.log("fbclid from URL:", fbclid);
    } else {
      console.log("fbclid not found in URL");
    }

    if (fbc) {
      console.log("fbc from cookies:", fbc);
    } else {
      console.log("fbc not found in cookies");
    }
    
    const result = await clientService.newClient({
      ...req.body,
      fbp: req.cookies._fbp,
      remoteAddress: req.connection.remoteAddress,
      headers: req.headers["user-agent"]
    });
    if (result) {
      res.status(200).json({message: 'purchase was saved succesfully'})
    }
  } catch (error) {
    res.status(500).json({error: error.message})
  }

  
}

export async function getClients(req, res, next) {

  try {
    const clients = await clientService.getClients()

    if (clients) {
      res.status(200).json(clients)
    } else {
      res.status(400).json({message: 'Not clients found'})
    }
  } catch (error) {
    res.status(500).json({errorMsg: error.message})
  }
}