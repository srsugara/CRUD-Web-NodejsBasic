const express=require('express');
const router=express.Router();

const mhsMiddleware=require('../middlewares/mahasiswa');

router.get('/all',mhsMiddleware.getAll);
router.post('/post',mhsMiddleware.add);
router.get('/',mhsMiddleware.getIndex);
router.get('/tambah',mhsMiddleware.getAdd);
router.post('/one',mhsMiddleware.getOne);
router.post('/put',mhsMiddleware.update);
router.post('/del',mhsMiddleware.remove);

module.exports=router;