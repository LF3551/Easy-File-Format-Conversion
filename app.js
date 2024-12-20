const yargs = require('yargs');
const sharp = require('sharp');
const archiver = require('archiver');
const unzipper = require('unzipper');
const fs = require('fs');
const path = require('path');
const { parse } = require('csv-parse');
const { stringify } = require('csv-stringify');


const argv = yargs
    .command('convert-image', 'Convert image between formats', {
        input: {
            description: 'Input file path',
            alias: 'i',
            type: 'string',
            demandOption: true
        },
        output: {
            description: 'Output file path',
            alias: 'o',
            type: 'string',
            demandOption: true
        }
    })
    .command('convert-text', 'Convert text files between formats', {
        input: {
            description: 'Input file path',
            alias: 'i',
            type: 'string',
            demandOption: true
        },
        output: {
            description: 'Output file path',
            alias: 'o',
            type: 'string',
            demandOption: true
        }
    })
    .command('compress', 'Compress folder to archive', {
        input: {
            description: 'Input folder path',
            alias: 'i',
            type: 'string',
            demandOption: true
        },
        output: {
            description: 'Output archive path',
            alias: 'o',
            type: 'string',
            demandOption: true
        }
    })
    .command('decompress', 'Decompress archive to folder', {
        input: {
            description: 'Input archive path',
            alias: 'i',
            type: 'string',
            demandOption: true
        },
        output: {
            description: 'Output folder path',
            alias: 'o',
            type: 'string',
            demandOption: true
        }
    })
    .help()
    .argv;

async function convertImage(input, output) {
    try {
        await sharp(input).toFile(output);
        console.log('Image converted successfully!');
    } catch (error) {
        console.error('Error converting image:', error);
    }
}


async function convertText(input, output) {
    const inputExt = path.extname(input).toLowerCase();
    const outputExt = path.extname(output).toLowerCase();

    try {
        const data = await fs.promises.readFile(input, 'utf8');

        if (inputExt === '.csv' && outputExt === '.json') {
            parse(data, { columns: true }, (err, records) => {
                if (err) throw err;
                fs.writeFileSync(output, JSON.stringify(records, null, 2));
            });
        } else if (inputExt === '.json' && outputExt === '.csv') {
            const jsonData = JSON.parse(data);
            stringify(jsonData, { header: true }, (err, output) => {
                if (err) throw err;
                fs.writeFileSync(output, output);
            });
        }
        console.log('Text file converted successfully!');
    } catch (error) {
        console.error('Error converting text file:', error);
    }
}

function compressFolder(input, output) {
    const outputStream = fs.createWriteStream(output);
    const archive = archiver('zip', {
        zlib: { level: 9 }
    });

    outputStream.on('close', () => {
        console.log('Archive created successfully!');
    });

    archive.on('error', (err) => {
        throw err;
    });

    archive.pipe(outputStream);
    archive.directory(input, false);
    archive.finalize();
}



function decompressArchive(input, output) {
    fs.createReadStream(input)
        .pipe(unzipper.Extract({ path: output }))
        .on('close', () => {
            console.log('Archive extracted successfully!');
        })
        .on('error', (err) => {
            console.error('Error extracting archive:', err);
        });
}


if (argv._[0] === 'convert-image') {
    convertImage(argv.input, argv.output);
} else if (argv._[0] === 'convert-text') {
    convertText(argv.input, argv.output);
} else if (argv._[0] === 'compress') {
    compressFolder(argv.input, argv.output);
} else if (argv._[0] === 'decompress') {
    decompressArchive(argv.input, argv.output);
} 