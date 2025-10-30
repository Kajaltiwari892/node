 const authAdmin = (req, res) => {
  //Logic of checking  if the request is authorised
  const token = "xyz";
  const isAdminAuthrized = token == "xyz";
  if (!isAdminAuthrized) {
    res.status(401).send("Unauthorized request");
  } else {
    next();
  }
};

 const userAdmin = (req, res) => {
   //Logic of checking  if the request is authorised
   const token = "xyz";
   const isAdminAuthrized = token == "xyz";
   if (!isAdminAuthrized) {
     res.status(401).send("Unauthorized request");
   } else {
     next();
   }
 };
module.exports = {
  authAdmin, userAdmin
}