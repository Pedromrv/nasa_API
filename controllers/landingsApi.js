const Landing = require('../models/landing')

const getLandingByQuery = async(req, res) => {
    let data;
    try {
        if (req.query.minimum_mass && req.query.from && req.query.to) {
            data = await Landing.find({'mass': {$gte: req.query.minimum_mass}, 'year': {$gte: req.query.from, $lte: req.query.to + 1}}, '-_id')
        } else if(req.query.minimum_mass && req.query.from) {
            data = await Landing.find({'mass': {$gte: req.query.minimum_mass}, 'year': {$gte: req.query.from}}, '-_id')
        } else if(req.query.minimum_mass && req.query.to) {
            data = await Landing.find({'mass': {$gte: req.query.minimum_mass}, 'year': {$lte: req.query.to + 1}}, '-_id')
        } else if(req.query.from && req.query.to){
            data = await Landing.find({'year': {$gte: req.query.from, $lte: req.query.to + 1}}, '-_id')
        } else if(req.query.minimum_mass) {
            data = await Landing.find({'mass': {$gte: req.query.minimum_mass}}, '-_id')
        }else if(req.query.from){
            data = await Landing.find({'year': {$gte: req.query.from}}, '-_id')
        } else if(req.query.to){
            data = await Landing.find({'year': {$lte: req.query.to + 1}}, '-_id')
        }
        res.status(200).json(data);            
    } catch (error) {
        res.status(400).json({"error":error})
    }
}

const getLandingByMass = async(req, res) => {
    let data;
    try {
        if(req.params.mass){
            data = await Landing.find({'mass':req.params.mass}, '-_id')
            res.status(200).json(data);
        }else{
            data = await Landing.find({}, '-_id')
            res.status(200).json(data)
        }
    } catch (error) {
        res.status(400).json({"error":err})
    }
}

const getLandingByClass = async(req, res) => {
    console.log('getLandingByClass');
    console.log(req.params);

    let data;
    try {
        if(req.params.recclass){
            data = await Landing.find({'recclass':req.params.recclass}, '-_id')
            res.status(200).json(data);
        }else{
            data = await Landing.find({}, '-_id')
            res.status(200).json(data)
        }
    } catch (error) {
        res.status(400).json({'error': error})
    }
}

// const createLanding = async (req, res) => {
//     if (Object.keys(req.body).length !== 0) {
//         try {
//             await Landing.create(req.body);
//             res.status(201).json({ message: 'Landing creada' });
//         }
//         catch (error) {
//             res.status(400).json({ message: error });
//         }
//     } else {
//         res.status(400).json({ message: 'No tenemos datos' });
//     }
// }

const createLanding = async (req, res) => {
    console.log(req.body);
    try {
        const land = await new Landing(req.body).save();
        res.status(200).send({"message":'landing creada'})
    } catch (err) {
        res.status(400).json({message:err});
    }
};

const landing = {
    getLandingByQuery,
    getLandingByMass,
    getLandingByClass,
    createLanding
}

module.exports = landing