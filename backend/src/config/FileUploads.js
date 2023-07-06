import multer from 'multer';

class FileUploads{

    fileUpload(destination='public'){
        this.storage = multer.diskStorage({
            destination: function (req, file, cb) {
                cb(null, `public/${destination}`);
            },
            filename: function (req, file, cb) {
                let fileName = file.originalname.trim();
                fileName = fileName.replace(/ /g, '-');            
                let imageName = Date.now() + '-' + Math.round(Math.random() * 1E9) + "-" + fileName;
                cb(null, imageName)
            }
        });
        return multer({storage: this.storage});
  
    }


}

export default FileUploads;