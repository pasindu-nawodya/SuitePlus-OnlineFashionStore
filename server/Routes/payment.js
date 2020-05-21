let router = require('express').Router();
let Payment = require('../models/payment.model');

// retrieve all payments
router.route('/').get((req, res) =>{
    Payment.find().then(payments => res.json(payments)).catch(err => res.status(400).json('Error : '+err));
});

// add payment
router.route('/add').post((req, res)=>{
    let name = req.body.name;
    let address = req.body.address;
    let contact = Number(req.body.contact);
    let cardnumber = Number(req.body.cardnumber);
    let cvv = Number(req.body.cvv);
    let expdate = Date.parse(req.body.expdate);

    let newPayment = new Payment({
        name,
        address,
        contact,
        cardnumber,
        cvv,
        expdate,
    });

    newPayment.save().then(() => res.json('Payment added to mongodb')).catch(err => res.status(400).json('Error : '+err));

});

// find by id
router.route('/:id').get((req, res) =>{
    Payment.findById(req.params.id).then(payments =>res.json(payments)).catch(err => res.status(400).json('Error : '+err));
});

// delete by id
router.route('/:id').delete((req, res) =>{
    Payment.findByIdAndDelete(req.params.id).then(()=>res.json('Payment deleted from mongodb')).catch(err => res.status(400).json('Error : '+err));
});

// update by id
router.route('/update/:id').post((req, res) =>{
    Payment.findById(req.params.id).then(payments => {
        payments.name = req.body.name;
        payments.address = req.body.address;
        payments.contact = Number(req.body.contact);
        payments.cardnumber = Number(req.body.cardnumber);
        payments.cvv = Number(req.body.cvv);
        payments.expdate = Date.parse(req.body.expdate);

        payments.save().then(() => res.json('payment updated in mongodb')).catch(err => res.status(400).json('Error : '+err));

    }).catch(err => res.status(400).json('Error : '+err));
});

module.exports = router;

