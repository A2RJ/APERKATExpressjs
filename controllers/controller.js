class controller {
  static async index(req, res, next) {
    res.send({
      message:
        "This is utils REST API of Sumbawa university of technology (uts.ac.id)",
    });
  }
}

module.exports = controller;
