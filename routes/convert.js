var express = require('express');
var router = express.Router();
var im = require('imagemagick');

/* GET users listing. */
router.get('/', function(req, res){
	var pohuy = "";
	im.readMetadata(req.query.from, function(err, metadata){
  if (err) throw err;
  pohuy = 'Shot at '+metadata.exif.dateTimeOriginal;
});
	im.convert([req.query.from, '-page', 'a4', req.query.from+'.pdf'], 
function(err, stdout){
  if (err) throw err;
  console.log('stdout:', stdout);
});
  res.send(pohuy+' convert file '+req.query.from+' for '+req.query.partner_id+' ces='+req.query.cession_id+' id='+req.query.id_hkd);
});

module.exports = router;