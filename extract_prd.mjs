import fs from 'fs';
import pdf from 'pdf-parse';

const dataBuffer = fs.readFileSync('/mnt/d/Dev/doc-gordon-assets/PRD.pdf');

pdf(dataBuffer).then(function (data) {
    fs.writeFileSync('/mnt/d/Projects/personal/gordon-aistudio-draft/PRD_EXTRACTED.md', data.text);
    console.log('PRD extracted to PRD_EXTRACTED.md');
}).catch(err => {
    console.error('Error parsing PDF:', err);
});
