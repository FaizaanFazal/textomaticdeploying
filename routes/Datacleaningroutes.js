import express from "express";
import multer from "multer";
import { ltc} from '../controllers/Datacleaningltc.js';
import { binnary } from "../controllers/Datacleaningbinary.js";
import { tfc } from "../controllers/Datacleaningtfc.js";
import { tfidf } from "../controllers/DatacleaningTfidf.js";
import { dcentropy } from "../controllers/Datacleaningentropy.js";
import { fileuploads } from "../controllers/Datacleaningreturnpath.js";


const router = express.Router();

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './scripts/data')
    },
    filename: function (req, file, cb) {
   
      cb(null, Date.now() +  file.originalname) //Appending file extension
    }
  })
  
  const upload = multer({ storage: storage });
router.post('/upload', upload.single('file'), fileuploads);
router.post('/upload/binary', binnary);
router.post('/upload/tfidf',  tfidf);
router.post('/upload/tfc',  tfc);
router.post('/upload/ltc', ltc);
router.post('/upload/entropy', dcentropy);

export default router
