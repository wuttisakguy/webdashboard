import bcrypt from "bcrypt";

const hashPassword = async (password: string) => {
     try {
          const salt = await bcrypt.genSalt(Number(process.env.SALT));
          const hash = await bcrypt.hash(password, salt);
          return hash;
     } catch (err) {
          return null;
     }
}

const comparePassword = async (password: string, hashedPassword: string) => {
     try {
          const match = await bcrypt.compare(password, hashedPassword);
          return match;
     } catch (err) {
          return false;
     }
}

export default { hashPassword, comparePassword }