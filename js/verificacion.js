export const checkApiKey = (key) => (req, res, next) => {
  const apiKeyFromRequest = req.headers["api-key"];
  const { path } = req;

  if (path.startsWith("/resend") && key === "CBuW$66aWU!MbZ41h^JH^nLAw%^^sh%JfJmp82#ud*YX91Fx5N6%t6%!udFF" && apiKeyFromRequest === key) {
    return next();
  } 
   else {
    return res.status(401).json({ error: "API key inválida para esta ruta" });
  }
};
