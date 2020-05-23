let router = require('express').Router();
let Payment = require('../models/payment.model');

// retrieve all payments
router.route('/').get((req, res) =>{
    Payment.find().then(payments => res.json(payments)).catch(err => res.status(400).json('Error : '+err));
});

// add payment
router.route('/add').post((req, res)=>{
    let fname = req.body.fname;
    let lname = req.body.lname;
    let fline = req.body.fline;
    let Lline = req.body.Lline;
    let contact = Number(req.body.contact);
    let cardnumber = Number(req.body.cardnumber);
    let cvv = Number(req.body.cvv);
    let expdate = Date.parse(req.body.expdate);

    let newPayment = new Payment({
        fname,
        lname,  
        fline,
        Lline,
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
        payments.fname = req.body.fname;
        payments.lname = req.body.lname;
        payments.fline = req.body.fline;
        payments.Lline = req.body.Lline;
        payments.contact = Number(req.body.contact);
        payments.cardnumber = Number(req.body.cardnumber);
        payments.cvv = Number(req.body.cvv);
        payments.expdate = Date.parse(req.body.expdate);

        payments.save().then(() => res.json('payment updated in mongodb')).catch(err => res.status(400).json('Error : '+err));

    }).catch(err => res.status(400).json('Error : '+err));
});

module.exports = router;

