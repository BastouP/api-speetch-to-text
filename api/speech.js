export default function handler(req, res) {
  if (req.method === 'POST') {
    // L'API Web Speech ne peut pas fonctionner ici car elle nécessite un navigateur
    return res.status(400).json({ message: 'L\'API Web Speech doit être utilisée côté client (navigateur).' });
  } else {
    res.status(405).json({ message: 'Méthode non autorisée' });
  }
}

