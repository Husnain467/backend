export const verifytoken = (req, res, next) => {
  const beaerHeader = req.header['authorization'];
  if (typeof beaerHeader !== 'undefined') {
    const bearer = beaerHeader;
    req.token = bearer;
    next();
  } else {
    res.send('token is invalid');
  }
};


