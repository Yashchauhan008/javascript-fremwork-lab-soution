const path = require('path');

console.log('Path Separator:', path.sep);

const joinedPath = path.join('/users', 'john', 'docs', 'file.txt');
console.log('Joined Path:', joinedPath);

const resolvedPath = path.resolve('users', 'john', 'docs', 'file.txt');
console.log('Resolved Path:', resolvedPath);

const dirName = path.dirname('/users/john/docs/file.txt');
console.log('Directory Name:', dirName);

const baseName = path.basename('/users/john/docs/file.txt');
console.log('Base Name:', baseName);

const extName = path.extname('/users/john/docs/file.txt');
console.log('Extension Name:', extName);

const parsedPath = path.parse('/users/john/docs/file.txt');
console.log('Parsed Path:', parsedPath);

const formattedPath = path.format(parsedPath);
console.log('Formatted Path:', formattedPath);

const normalizedPath = path.normalize('/users/john/../john/docs/./file.txt');
console.log('Normalized Path:', normalizedPath);
