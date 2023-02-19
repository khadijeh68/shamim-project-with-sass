import { RiDeleteBinLine } from "react-icons/ri";
import {
  BsPencilSquare,
  BsThreeDotsVertical,
  BsPlusCircle,
} from "react-icons/bs";
import montage from "../../assets/images/montage.png";

const Montage = () => {
  return (
    <div>
      <div>
        <span>تدوین و صداگذاری</span>
        <BsPencilSquare size={18} />
        <RiDeleteBinLine style={{ color: "red" }} size={20} />
      </div>
      <div>
        <div>
          <img src={montage} alt="montage" />
          <span>
            <BsThreeDotsVertical />
          </span>
          <span>تدوین تیزر تبلیغاتی نوشیدنی انرژی زا</span>
        </div>
        <div>
          <img src={montage} alt="montage" />
          <span>
            <BsThreeDotsVertical />
          </span>
          <span>تدوین تیزر تبلیغاتی نوشیدنی انرژی زا</span>
        </div>
        <div>
          <img src={montage} alt="montage" />
          <span>
            <BsThreeDotsVertical />
          </span>
          <span>تدوین تیزر تبلیغاتی نوشیدنی انرژی زا</span>
        </div>
        <div>
          <span>
            {" "}
            <BsPlusCircle size={20} />
            افزودن اثر{" "}
          </span>
          <span>
            نمایش <br />
            بیشتر...
          </span>
        </div>
      </div>
    </div>
  );
};

export default Montage;
