
import fs from 'fs';
function checkFileExistsSync(filepath){
    let flag = true;
    try{
        fs.accessSync(filepath, fs.constants.F_OK);
    }catch(e){
      flag = false;
    }
    return flag;
  }

  export default checkFileExistsSync;

