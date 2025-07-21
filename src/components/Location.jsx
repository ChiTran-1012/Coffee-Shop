import React from 'react';

const Location = () => {
  return (
    <div className="bg-[#fcf3d9] py-16 px-4 sm:px-8 md:px-16 lg:px-36 border-t h-screen">
      {/* Tiêu đề */}
      <div className="text-center mb-12">
        <h2 className="text-[#1d4e1a] font-bold text-3xl sm:text-4xl lg:text-5xl">
          Visit Our Coffee House
        </h2>
        <p className="text-[#1d4e1a] text-base sm:text-lg mt-4">
          Come enjoy your coffee in person — we’re excited to see you!
        </p>
      </div>

      {/* Thông tin và bản đồ */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Thông tin địa chỉ */}
        <div className="text-[#1d4e1a] space-y-6 text-lg pl-20">
          <div>
            <p className="font-semibold text-xl">📍 Address</p>
            <p>123 Coffee Street,<br />District 1, Ho Chi Minh City</p>
          </div>

          <div>
            <p className="font-semibold text-xl">⏰ Opening Hours</p>
            <p>Mon - Fri: 7:00 AM – 9:00 PM<br />Sat - Sun: 8:00 AM – 10:00 PM</p>
          </div>

          <div>
            <p className="font-semibold text-xl">📞 Contact</p>
            <p>Phone: (0123) 456 789<br />Email: hello@brewhaus.com</p>
          </div>
        </div>

        {/* Google Map embed */}
        <div className="w-full h-72 sm:h-96 lg:h-[450px] rounded-2xl overflow-hidden shadow-lg border-2 border-[#1d4e1a]">
          <iframe
            title="Coffee Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.512169764917!2d106.70042417501785!3d10.77153488937459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f3c982c2fb9%3A0x9b67ed5e9ff2579f!2zVHJ1bmcgVMOibSBWaeG7h3QgSMOyYSBN4bu5aSBI4bqhbmggLSBCcmV3aGF1cw!5e0!3m2!1svi!2s!4v1721036142893!5m2!1svi!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Location;
