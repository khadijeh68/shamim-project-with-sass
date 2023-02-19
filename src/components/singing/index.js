
import { RiDeleteBinLine } from "react-icons/ri";
import {
  BsPencilSquare,
  BsThreeDotsVertical,
  BsPlusCircle,
} from "react-icons/bs";
import books from "../../assets/images/books.png";

const Singing = () => {
  return (
    <div>
      <div >
        <span>گویندگی و خوانندگی</span>
        <BsPencilSquare size={18} />
        <RiDeleteBinLine style={{ color: "red" }} size={20} />
      </div>
      <div >
        <div>
          <img src={books} alt="books" />
          <span >
            <BsThreeDotsVertical />
          </span>
          <span>
          خوانش کتاب صوتی "کتابخانه نیمه شب"
          </span>
        </div>
        <div>
          <img src={books} alt="books" />
          <span>
            <BsThreeDotsVertical />
          </span>
          <span>
          خوانش کتاب صوتی "کتابخانه نیمه شب"
          </span>
        </div>
        <div >
          <img src={books} alt="books" />
          <span>
            <BsThreeDotsVertical />
          </span>
          <span>
          خوانش کتاب صوتی "کتابخانه نیمه شب"
          </span>
        </div>
        <div>
          <span>
            {" "}
            <BsPlusCircle size={20} />
            افزودن اثر{" "}
          </span>
          <span >
            نمایش <br />
            بیشتر...
          </span>
        </div>
      </div>
    </div>
  );
};

export default Singing;
