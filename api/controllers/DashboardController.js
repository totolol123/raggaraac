module.exports = {

   showForm: function(req, res) {

      return res.view('home/dashboard', {success: req.flash('success'), errors: req.flash('errors')});
   }
}
