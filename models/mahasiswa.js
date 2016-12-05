const mongoose=require('mongoose');

const mhsSchema=new mongoose.Schema({
	nama:String,
	status:String,
	jeniskelamin:String,	
	angkatan:Number,
	umur:Number
});

module.exports=mongoose.model('mhsobj',mhsSchema);