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
    store: (req, res) => {
        
    },
}

module.exports = controladorMain;