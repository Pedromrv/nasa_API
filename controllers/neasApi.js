const Nea = require('../models/nea');

const getNeaByQuery = async(req, res) => {
    let data;
    try {
        if (req.query.class && req.query.from && req.query.to) {
            data = await Nea.find({'orbit_class': req.query.class, 'discovery_date': {$gte: req.query.from, $lte: req.query.to + 1}}, '-_id')
        } else if(req.query.class && req.query.from) {
            data = await Nea.find({'orbit_class': req.query.class, 'discovery_date': {$gte: req.query.from}}, '-_id')
        } else if(req.query.class && req.query.to) {
            data = await Nea.find({'orbit_class': req.query.class, 'discovery_date': {$lte: req.query.to + 1}}, '-_id')
        } else if(req.query.from && req.query.to){
            data = await Nea.find({'discovery_date': {$gte: req.query.from, $lte: req.query.to + 1}}, '-_id')
        } else if(req.query.class) {
            data = await Nea.find({'orbit_class': req.query.class}, '-_id')
        } else if(req.query.from){
            data = await Nea.find({'discovery_date': {$gte: req.query.from}}, '-_id')
        } else if(req.query.to){
            data = await Nea.find({'discovery_date': {$lte: req.query.to + 1}}, '-_id')
        }
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({'error': error})
    }
}

module.exports = getNeaByQuery;