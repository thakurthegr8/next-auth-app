import db from "@/src/services/db";
import bcrypt from "bcryptjs";
import User from "@/src/services/db/models/user";

export default async function handler(req, res) {
  try {
    const { name, email, password } = await req.body;

    const hashedPassword = await bcrypt.hash(password, 10);
    await db();
    if (await User.findOne({ email })) {
      return res.status(514).json({ message: "User already exists" });
    }
    await User.create({ name, email, password: hashedPassword });

    return res.status(200).json({ message: "Registration successfully done" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Registration failed in route" });
  }
}
