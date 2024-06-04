export const checkApiKey = (key) => (req, res, next) => {
  const apiKeyFromRequest = req.headers["api-key"];
  const { path } = req;

  if (path.startsWith("/resend") && key === "nv" && apiKeyFromRequest === key) {
    return next();
  } else if (path.startsWith("/admin") && key === "v" && apiKeyFromRequest === key) {
    return next();
  } else {
    return res.status(401).json({ error: "API key inválida para esta ruta" });
  }
};
