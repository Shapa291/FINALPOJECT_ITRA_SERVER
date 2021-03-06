const { Rate } = require("../models");
//
module.exports = {
  PostRate: async (req, res) => {
    const { rate, ProblemID } = req.body;
    const UserId = req.user.id;

    const found = await Rate.findOne({
      where: { ProblemId: ProblemID, UserId: UserId },
    });
    if (!found) {
      await Rate.create({ rate: rate, ProblemId: ProblemID, UserId: UserId });
      res.json("Add");
    } else {
      await Rate.update(
        { rate: rate },
        {
          where: {
            ProblemId: ProblemID,
            UserId: UserId,
          },
        }
      );
      res.json("Change");
    }
  },
};
