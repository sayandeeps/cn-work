import React from 'react'

export const page = () => {
  return (
    <>
      <section className="font-poppins ">
        <div className="hidden py-20 text-center bg-blue-100   :bg-gray-700 lg:block">
          <div className="max-w-3xl mx-auto mb-24">
            <p className="mb-6 font-semibold text-gray-800 text-4xl   :text-gray-300">
              Aadhar Verification
            </p>
            <p className="mb-6 text-xl text-gray-500 "></p>
          </div>
        </div>
        <div className="max-w-xl mx-auto ">
          <div className="w-full shadow-lg bg-gray-50   :bg-gray-800 mt-11 lg:-mt-36 lg:full p-7 rounded-3xl">
            <div className="">
              <form action="" className="p-0 m-0">
                <div className="mb-7">
                  <input
                    type="email"
                    className="w-full px-4 py-4 bg-gray-200 rounded-lg   :bg-gray-700 lg:py-5   :text-gray-300 "
                    name=""
                    placeholder="Enter your Aadhar Number"
                  />
                </div>
                <div className="mb-6 flex items-center">
                  <div className="relative flex items-center justify-between  ">
                    <input
                      type="password"
                      className="w-1/2 px-4 py-3 bg-gray-200 rounded-lg lg:py-4     "
                      name=""
                      placeholder="Enter OTP"
                    />

                    <span className=" w-1/2 flex justify-end ">
                      <a
                        href=""
                        className="px-4 py-3 text-sm font-medium text-gray-100 bg-blue-700 hover:text-blue-200 rounded-lg"
                      >
                        Send OTP
                      </a>
                    </span>
                  </div>
                </div>

                <button
                  className="w-full px-4 py-4 mt-6 font-medium text-gray-200 bg-blue-700 rounded-lg   :bg-blue-500 hover:text-blue-200 "
                  type="submit"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
    
  );
};

export default page;