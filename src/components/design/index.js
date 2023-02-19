
import { RiDeleteBinLine } from "react-icons/ri";
import { BsPencilSquare, BsThreeDotsVertical,BsPlusCircle } from "react-icons/bs";
import design from "../../assets/images/design.png";

const Design = () => {
  return (
   <>
   <div >
      <div >
        <span>طراحی و گرافیک</span>
        <BsPencilSquare size={18} />
        <RiDeleteBinLine style={{ color: "red" }} size={20} />
      </div>
      <div>
        <div>
          <img src={design} alt="design" />
          <span>
            <BsThreeDotsVertical />
          </span>
          <span>
            طراحی سایت آموزشی آشپزی
          </span>
        </div>
        <div>
          <img src={design} alt="design" />
          <span>
            <BsThreeDotsVertical />
          </span>
          <span>
            طراحی سایت آموزشی آشپزی
          </span>
        </div>
        <div>
          <span> <BsPlusCircle size={20}/>افزودن اثر </span>
        </div>
      </div>
    </div>
   </>
  )
}

export default Design
