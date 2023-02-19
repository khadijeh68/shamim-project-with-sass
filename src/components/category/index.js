
import displayTop from "../../assets/images/displayTop.png";
import Montage from "../montage";
import Design from "../design";
import Singing from "../singing";
import { HiOutlineFolderDownload } from "react-icons/hi";

const Category = () => {
  return (
    <>
      <div>
        <div>
          <p>آثار من:</p>
          <p>
            <span>نوع نمایش:</span> <img src={displayTop} alt="displayTop" />
          </p>
        </div>
        <Montage />
        <Design />
        <Singing />
        <button>
          <HiOutlineFolderDownload size={20} />
          <span>افزودن دسته جدید</span>
        </button>
      </div>
    </>
  );
};

export default Category;
