const Mhs=require('../models/mahasiswa');

module.exports={
	getIndex(req,res){
		res.render('index');
	},

	getAdd(req,res){
		res.render('tambah');
	},

	getAll(req,res,next){
		//cara promise
		Mhs
			.find()
			.exec()
			.then(list=>{	
				const datass={
					datas:{
						data : list
					}
				}
				res.render('mahasiswa',datass);
			})
			.catch(ex=>{
				return res.json({
					meta:{
						code:500,
						message:ex.message,
					},
					data:{},
				})
			})

	},

	getOne(req,res,next){
		const nama=req.body.nama;
		const query={
			nama:nama,
		}
		Mhs
		.findOne(query)
		.then(result=>{
			if(!result){
				res.render('gagal');
			}else{
				const datas={
					data : result
				}
				res.render('profil',datas);
			}
		})
		.catch(ex=>{
			res.render('gagal');	
		})
		
	},

	add(req,res,next){
		const mhs=new Mhs(req.body);
		mhs
			.save()
			.then(inserted=>{
				if(!inserted){
				res.render('gagal');
				}else{
					res.render('sukses');
				}
			})
			.catch(ex=>{
				res.render('gagal');	
			})
	},

	update(req,res,next){
		const update=req.body;
		const nama=req.body.nama;
		const query={
			nama:nama,
		}

		Mhs
		.findOneAndUpdate(query,update)
		.exec()
		.then(updated=>{
			if(!updated){
				res.render('gagal');
			}else{
				res.render('sukses');
			}
		})
		.catch(ex=>{
			res.render('gagal');	
		})
	},

	remove(req,res,next){
		const nama=req.body.nama;
		const query={
			nama:nama,
		}
		Mhs
		.findOneAndRemove(query)
		.exec()
		.then(()=>{
				res.render('sukses');
		})
		.catch(ex=>{
			res.render('gagal');	
		})
	}

	
};