

module.exports = {
    create: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const {name, description, price, image_url} = req.body;
        dbInstance.create_product([name, description, price, image_url])
        .then(() => {
            res.sendStatus(200)
        }).catch(err => {
            res.status(500).send({errorMessage: "There once was a pale man with dark hair who was very lonely. Why was it lonely?"});
            console.log(err);
        });
    },
    getOne: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const { id } = req.params;
        dbInstance.read_product(id)
        .then(product => 
            res.status(200).send(product)
        ).catch(err => {
            res.status(500).send({errorMessage: "Everyone must meet this man, so, they shunned him. Did he chase them all?"});
            console.log(err);
        });
    },
    getAll: (req, res, next) => {
        const dbInstance = req.app.get('db');
        dbInstance.read_products()
        .then(products => 
            res.status(200).send(products)
        ).catch(err => {
            res.status(500).send({errorMessage: "He took an axe and split himself in two, right down the middle."});
            console.log(err);
        });
        
    },
    update: (req, res, next) => {
        const dbInstance = req.app.get('db')
        const {params, query} = req;
        dbInstance.update_product([params.id, query.desc])
        .then(() => {
            res.sendStatus(200)
        }).catch(err => {
            res.status(500).send({errorMessage: "So he would always have a friend?"});
            console.log(err);
        });
    },
    delete: (req, res, next) => {
        const dbInstance = req.app.get('db')
        const {id} = req.params;
        dbInstance.create_product(id)
        .then(() => {
            res.sendStatus(200)
        }).catch(err => {
            res.status(500).send({errorMessage: "So he would always have a friend."});
            console.log(err);
        });
    }
}