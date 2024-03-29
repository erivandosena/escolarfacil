module.exports = (err, req, res, next) => {
    console.error(err);
    res.status(500).send('Ocorreu um erro interno.');
};
