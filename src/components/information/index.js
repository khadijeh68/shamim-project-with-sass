
import {
  BsPencilSquare,
  BsGlobe,
  BsWhatsapp,
  BsFacebook,
} from "react-icons/bs";
import profile from "../../assets/images/profile.png";

const Information = () => {
  return (
    <div>
      <div>
        <span>اطلاعات شناسایی</span>
        <hr/>
        <span>
          <BsPencilSquare />
        </span>
      </div>
      <div>
        <img src={profile} alt="profile" />
        <p>مهدی ساغری</p>
        <div>
          <BsGlobe size={22} />
          <BsWhatsapp size={22} />
          <BsFacebook size={22} />
        </div>
      </div>
      <div>
        <span>تگ لاین ها</span>
        <hr/>
        <span>
          <BsPencilSquare />
        </span>
      </div>
      <div>
        <ul>
          <li>تجربه کاربری </li>
          <li>طراحی سایت</li>
          <li>گرافیک</li>
        </ul>
      </div>
      <div>
        <span>درباره من</span>
        <hr />
        <span>
          <BsPencilSquare />
        </span>
      </div>
      <p >
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است.
      </p>
      <div >
        <span>مهارت ها</span>
        <hr />
        <span>
          <BsPencilSquare />
        </span>
      </div>
      <div >
        <ul >
          <li>تجربه کاربری </li>
          <li>طراحی سایت</li>
          <li>گرافیک</li>
        </ul>
      </div>
      <div >
        <span>گواهینامه ها و مدارک تحصیلی</span>
        <hr  />
        <span>
          <BsPencilSquare />
        </span>
      </div>
      <div>
        <ul >
          <li>کارشناسی کامپیوتر - دانشگاه تبریز</li>
          <li>مبانی طراحی - Udemy</li>
        </ul>
      </div>
      <div>
        <span>سوابق شغلی</span>
        <hr />
        <span>
          <BsPencilSquare />
        </span>
      </div>
      <div>
        <ul>
          <li>تجربه رابط کاربری - شرکت همراه</li>
          <li>طراح گرافیک - شرکت آینده سازان</li>
        </ul>
      </div>
    </div>
  );
};

export default Information;
