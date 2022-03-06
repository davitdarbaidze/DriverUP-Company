import { FaFacebookF, FaInstagram } from "react-icons/fa";
import Link from "next/link";

const ContentTwo = (props) => {
  const lang = props;

  function ContentTwoEn() {
    return (
      <div>
        <div className="flex flex-col space-y-12 items-center justify-center bg-gray-50 w-full py-12">
          <div className="text-center space-y-3 ">
            <p className="text-xl font-medium text-main-3">What do we offer?</p>
            <p className="text-4xl font-light text-main-3">See our deals</p>
          </div>
          <div className="container px-12  lg:grid lg:grid-cols-4 lg:grid-rows-2 gap-4  lg:space-y-0 space-y-2 w-full">
            <div
              className="col-span-2 row-span-1 bg-no-repeat bg-cover bg-center  h-64"
              style={{
                backgroundImage: `url(/8.jpg)`,
              }}
            >
              <div className="bg-black  hover:bg-opacity-5 bg-opacity-30 w-full h-full  flex items-end justify-start">
                <p className="text-white text-2xl font-medium p-8">
                  Worldwide Delivery
                </p>
              </div>
            </div>
            <div
              className="col-span-2 row-span-1 bg-no-repeat bg-cover bg-center  h-64"
              style={{
                backgroundImage: `url(/5.jpg)`,
              }}
            >
              <div className="bg-black  hover:bg-opacity-5 bg-opacity-30 w-full h-full  flex items-end justify-start">
                <p className="text-white text-2xl font-medium p-8">
                  Printing on wood
                </p>
              </div>
            </div>
            <div
              className="col-span-2 row-span-1 bg-no-repeat bg-cover bg-center  h-64"
              style={{
                backgroundImage: `url(/6.jpg)`,
              }}
            >
              <div className="bg-black  hover:bg-opacity-5 bg-opacity-30 w-full h-full flex items-end justify-start">
                <p className="text-white text-2xl font-medium p-8">
                  Beautiful wrapping
                </p>
              </div>
            </div>
            <div
              className="col-span-1 row-span-1 bg-no-repeat bg-cover bg-center  h-64"
              style={{
                backgroundImage: `url(/7.jpg)`,
              }}
            >
              <div className="bg-black  hover:bg-opacity-5 bg-opacity-30 w-full h-full  flex items-end justify-start">
                <p className="text-white text-2xl font-medium p-8">
                  Bring video frames to life
                </p>
              </div>
            </div>
            <div
              className="col-span-1 row-span-1 bg-no-repeat bg-cover bg-center  h-64"
              style={{
                backgroundImage: `url(/download.gif)`,
              }}
            >
              <div className="bg-black  hover:bg-opacity-5 bg-opacity-30 w-full h-full  flex items-end justify-start">
                <p className="text-white text-2xl font-medium p-8">Video</p>
              </div>
            </div>
          </div>
          <button
            type="button"
            className=" text-white  bg-green hover:bg-main   rounded-3xl  px-8 py-3 text-center mr-2 mb-2 "
          >
            CONTACT US
          </button>
        </div>
      </div>
    );
  }

  function ContentTwoGe() {
    return (
      <div>
        <div className="grid place-content-center text-white text-center mt-10 gap-6">
          <p className="rounded-3xl text-lg lg:text-4xl lg:p-4 lg:mx-4 p-3 mx-5 bg-main-5/80">
            სასაჩუქრე კომპანია, ვქმნით სიყვარულით!
          </p>
          <p className=" font-light  mx-16 lg:text-lg lg:p-4 lg:mx-32 p-3 mx-12 rounded-3xl bg-main-5/80">
            აჩუქე კრეატიული საჩუქარი
          </p>
          <button
            type="button"
            className="rounded-3xl lg:p-4 lg:mx-64 mx-32 p-3 bg-main-5/70"
          >
            დაგვიკავშირდით
          </button>
          <div className="flex gap-6 justify-center">
            <Link href='https://www.instagram.com/videobook.ge/'>
              <button type="buton" className="bg-main rounded-full p-2">
                <FaInstagram style={{color: ""}} size={32} />
              </button>
            </Link>
            <Link href='https://www.facebook.com/videobook.ge/'>
              <button className="bg-main rounded-full p-2">
                <FaFacebookF style={{color:""}} size={32} />
              </button>
            </Link>
          </div>
        </div>

        <div className="flex flex-col space-y-12 items-center justify-center bg-gray-50 w-full py-12">
          <div className="text-center space-y-3 ">
            <p className="text-xl font-medium text-main-3">რას გთავაზობთ?</p>
            <p className="text-4xl font-light text-main-3">
              იხილეთ ჩვენი შემოთავაზებები
            </p>
          </div>
          <div className="container px-12  lg:grid lg:grid-cols-4 lg:grid-rows-2 gap-4  lg:space-y-0 space-y-2 w-full">
            <div
              className="col-span-2 row-span-1 bg-no-repeat bg-cover bg-center  h-64"
              style={{
                backgroundImage: `url(/8.jpg)`,
              }}
            >
              <div className="bg-black  hover:bg-opacity-5 bg-opacity-30 w-full h-full  flex items-end justify-start">
                <p className="text-white text-2xl font-medium p-8">
                  მიწოდება საქართველოს მაშტაბით
                </p>
              </div>
            </div>
            <div
              className="col-span-2 row-span-1 bg-no-repeat bg-cover bg-center  h-64"
              style={{
                backgroundImage: `url(/5.jpg)`,
              }}
            >
              <div className="bg-black  hover:bg-opacity-5 bg-opacity-30 w-full h-full  flex items-end justify-start">
                <p className="text-white text-2xl font-medium p-8">
                  ხეზე ბეჭდვა
                </p>
              </div>
            </div>
            <div
              className="col-span-2 row-span-1 bg-no-repeat bg-cover bg-center  h-64"
              style={{
                backgroundImage: `url(/6.jpg)`,
              }}
            >
              <div className="bg-black  hover:bg-opacity-5 bg-opacity-30 w-full h-full flex items-end justify-start">
                <p className="text-white text-2xl font-medium p-8">
                  ლამაზი შეფუთვა
                </p>
              </div>
            </div>
            <div
              className="col-span-1 row-span-1 bg-no-repeat bg-cover bg-center  h-64"
              style={{
                backgroundImage: `url(/7.jpg)`,
              }}
            >
              <div className="bg-black  hover:bg-opacity-5 bg-opacity-30 w-full h-full  flex items-end justify-start">
                <p className="text-white text-2xl font-medium p-8">
                  ვიდეო კადრის გაცოცხლება
                </p>
              </div>
            </div>
            <div
              className="col-span-1 row-span-1 bg-no-repeat bg-cover bg-center  h-64"
              style={{
                backgroundImage: `url(/download.gif)`,
              }}
            >
              <div className="bg-black  hover:bg-opacity-5 bg-opacity-30 w-full h-full  flex items-end justify-start">
                <p className="text-white text-2xl font-medium p-8">ვიდეო</p>
              </div>
            </div>
          </div>
          <button
            type="button"
            className=" text-white  bg-green hover:bg-main   rounded-3xl  px-8 py-3 text-center mr-2 mb-2 "
          >
            CONTACT US
          </button>
        </div>
      </div>
    );
  }

  return <div>{lang ? <ContentTwoGe /> : <ContentTwoEn />}</div>;
};
export default ContentTwo;
