const bcrypt = require('bcrypt');
const User = require('./model/user');

const createAdminAccount = async() => {
  const adminEmail = process.env.ADMIN_EMAIL;
  const adminPassword = process.env.ADMIN_PASSWORD;

  const hashedPassword = await bcrypt.hash(adminPassword, 10);

  const newAdmin = new User({
    name: 'Admin',
    email: adminEmail,
    password: hashedPassword,
    role: 'admin',
  });

  await newAdmin.save();
};

module.exports = createAdminAccount;