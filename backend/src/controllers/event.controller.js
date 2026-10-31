const db = new sqlite3.Database('./database.db');

const getPackages = () => {
    const packages = db.prepare('SELECT * FROM packages').all();
    return packages.map(pkg => ({
        id: pkg.id,
        name: pkg.name,
        completed: pkg.completed,
    }));
}   