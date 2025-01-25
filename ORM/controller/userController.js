import userModel from "../model/userModel.js";
export default class UserController {
  async addUser(req, res) {
    const { username, location } = req.body;
    try {
      const data = await userModel.create({ username, location });
      res.status(200).json(data);
    } catch (error) {
      console.log(error);
    }
  }
  async readUser(req, res) {
    const { id } = req.params;
    if (id) {
      const data = await userModel.findByPk(id);
      res.status(200).json(data);
    } else {
      res
        .status(200)
        .json({ success: false, message: "Give an valid user id" });
    }
  }
  async updateUser(req, res) {
    const { id } = req.params;
    // console.log(id);

    if (id) {
      const { username, location } = req.body;
      const data = await userModel.update(
        { username, location },
        {
          where: {
            id,
          },
        }
      );

      res.status(200).json(data);
    } else {
      res.status(200).json({ success: false, message: "user id not provided" });
    }
  }
  async deleteUser(req, res) {
    const { id } = req.params;
    if (id) {
      const data = await userModel.destroy({
        where: {
          id,
        },
      });
      res.status(200).json(data);
    } else {
      res.status(200).json({ success: false, message: "invalid user id" });
    }
  }
}
