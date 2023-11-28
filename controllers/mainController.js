const controladorMain = {
    index: (req, res) => {
        res.render('main/index');
    },
    login: (req, res) => {
        res.render('main/login');
    },
    register: (req, res) => {
        res.render('main/register');
    },
}

module.exports = controladorMain;