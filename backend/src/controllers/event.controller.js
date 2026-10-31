const db = new sqlite3.Database('./database.db');

const getPackages = () => {
    const packages = db.prepare('SELECT * FROM packages').all();
    return packages.map(pkg => ({
        id: pkg.id,
        name: pkg.name,
        completed: pkg.completed,
    }));
}   

const getPackageById = (id) => {
    const pkg = db.prepare('SELECT * FROM packages WHERE id = ?').get(id);
    if (!pkg) {
        return null;
    }
    return {
        id: pkg.id,
        name: pkg.name,
        completed: pkg.completed,
    };
}

const createPackage = (title) => {
    const result = db.prepare('INSERT INTO packages (title) VALUES (?)').run(title);
    return {    id: result.lastInsertRowid,
        title : title,
        completed: false    };
}
