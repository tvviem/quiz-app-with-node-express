// Trang chủ của admin
module.exports.index = (req, res) => {
  res.render('admin/index');
}
// Admin tạo người dùng

module.exports.manageUsers = (req, res) => {
  res.render('admin/manage-users');
}