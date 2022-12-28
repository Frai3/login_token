const getBarang = 'SELECT * FROM master';
const getBarangbyID = 'SELECT * FROM master WHERE id = $1';
const checkBarangExist = 'SELECT s FROM master WHERE s.nama = $1'; 
const addBarang = 'INSERT INTO master (nama) VALUES ($1)';

module.exports = {
    getBarang,
    getBarangbyID,
    checkBarangExist,
    addBarang,
};