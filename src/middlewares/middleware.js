const midware = (req, res, next) => {
    let loggin = true;
    if (loggin == true) {
        console.log("User loggdin");
        next();
    } else {
        res.send({ message: "please loggin" })
    }
}

module.exports = { midware }
