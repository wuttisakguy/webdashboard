import { FC } from "react";
import { FadeLoader } from 'react-spinners';

const Loading: FC = () => {
     return (
          <div className="w-full h-screen flex justify-center items-center">
               <FadeLoader color="#2C0065" />
          </div>
     )
}

export default Loading;