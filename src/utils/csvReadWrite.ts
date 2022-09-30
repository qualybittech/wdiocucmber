import * as path from 'path';
const csvWriter = require('csv-writer');

class csvReadWrite{

    public async writeDatatoCSV(fileInputPath, fileName,header,data){   

        const writer = csvWriter.createObjectCsvWriter({
            path: path.resolve(fileInputPath, fileName),header
          });

        writer.writeRecords(data).then(() => {
            console.log('Done!');
          });  
    }
}
export default new csvReadWrite();