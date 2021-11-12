const authPage = (permissions) => {
    return (req, res, next) => {
        const userRole = req.body.role
        if (permissions.included(userRole))
        next()
   else {
        return res.status(401).json("Sorry you dont have permission to view this page!")
    }  };
}

const authHomePage = () => {
    
}


module.exports = { authPage, authHomePage };



// {
//     "name": "Roxy",
//     "role": "admin"
// }