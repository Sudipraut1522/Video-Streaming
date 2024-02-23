import { MapPin, Phone, Mail } from "lucide-react";
import Image from "../../component/image/Image";
import MySlider from "../../component/slider/Slider";
import Form from "../../component/Form/Form";

const About = () => {
  return (
    <>
      <div className="bg-gray-100 py-10">
        <div className="w-full  gap-40 flex justify-around  px-20 p-4">
          <div className="p-6 bg-white rounded-md w-2/4">
            <div className="bg-red-600 text-white text-4xl rounded-md p-2 px-10 flex justify-center">
              <h3>Contact Detail</h3>
            </div>
            <div className="flex flex-col gap-6 mt-10">
              <div className="flex text-3xl">Office Address</div>
              <div className="flex gap-4 text-xl">
                <MapPin size={30} />
                Lokanthali Bhaktapur
              </div>
              <hr />
              <div className="flex gap-6 flex-col">
                <h3 className="text-4xl">Contact Info</h3>
                <div className="flex flex-col gap-6">
                  <div className="flex gap-4">
                    <Phone />
                    <span>9817........</span>
                  </div>
                  <div className="flex gap-4">
                    <Mail />
                    <span>Video@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-md flex  h-auto w-3/4 px-10 py-2 ">
            <Form />
          </div>
        </div>
        <div className="bg-red-600 rounded-md py-6 mt-10 mx-20 text-white text-l px-2 h-40 align-middle items-center">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
          at, sed dolore architecto repudiandae eligendi itaque ullam impedit
          exercitationem recusandae adipisci laboriosam fugit totam veniam hic
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum id
          eaque expedita praesentium aperiam impedit assumenda? Tempora quas
          quam iusto consequatur deserunt, amet suscipit sequi voluptatibus,
          consequuntur aut harum qui?Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Cupiditate recusandae laboriosam saepe impedit
          libero totam voluptates nihil officiis eum aspernatur!
        </div>
        <div className="bg-gray-100">
          <MySlider />
        </div>
      </div>
    </>
  );
};

export default About;
