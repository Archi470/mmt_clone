'use client';

const Bottom = () => {
    const bottomData = [
        {
            id: 1,
            title: 'MakeMyTrip',
            data: 'About Us, Investor Relations, Careers, Sustainability, MMT Foundation, Legal Notices, CSR Policy & Committee, myPartner - Travel Agent Portal, Foreign Exchange, List your hotel, Partners- Redbus, Partners- Goibibo, Advertise with Us, Holiday-Franchise'
        },
        {
            id: 2,
            title: 'About the Site',
            data: 'Customer Support, Payment Security, Privacy Policy, Cookie Policy, User Agreement, Terms of Service, Franchise Offices, Make A Payment, Work From Home, Escalation Channel'
        },
        {
            id: 3,
            title: 'Product Offering',
            data: 'Flights, International Flights, Charter Flights, Hotels, International Hotels, Homestays and Villas, Activities, Holidays In India, International Holidays, Book Hotels From UAE, myBiz for Corporate Travel, Book Online Cabs, Book Bus Tickets, Book Train Tickets, Cheap Tickets to India, Book Flights From US, Book Flights From UAE, Trip Planner, Forex Card, Buy Foreign Currency, Travel Insurance, Travel Insurance Thailand, Travel Insurance USA, Travel Insurance Dubai, Travel Insurance Canada, Travel Insurance Singapore, Gift Cards, Gift, Wedding Gift, Anniversary Gift, Birthday Gift, Diwali Gift, Valentines Gift, Farewell Gift, Christmas Gift, New Year Gift, Trip Money, Trip Ideas, Travel Blog, PNR Status, MakeMyTrip Advertising Solutions, One Way Cab'
        },
        {
            id: 4,
            title: 'Quick Links',
            data: 'Flights Discount Coupons, Domestic Airlines, Indigo Airlines, Air Asia, SpiceJet, GoAir, Air India, Air India Express, Vistara, New Delhi Mumbai Flights, Pune Delhi Flights, Delhi Chennai Flights, Delhi Guwahati Flights, Mumbai Varanasi Flights, Guwahati Delhi Flights, Goa Delhi Flights, Delhi Goa Flights, Delhi Chennai Flights'
        },
        {
            id: 5,
            title: 'Important Links',
            data: 'Cheap Flights, Flight Status, Kumbh Mela, Domestic Airlines, International Airlines, Indigo, Spicejet, GoAir, Air Asia, Air India, Indian Railways, Trip Ideas, Beaches, Honeymoon Destinations, Romantic Destinations, Popular Destinations, Resorts In Udaipur, Resorts In Munnar, Villas In Lonavala, Hotels in Thailand, Villas In Goa, Domestic Flight Offers, International Flight Offers, UAE Flight Offers, USA, UAE, Saudi Arabia, UK, Oman'
        },
        {
            id: 6,
            title: 'Corporate Travel',
            data: 'Corporate Travel, Corporate Hotel Booking, Corporate Flight Booking, Business Travel for SME, GST Invoice for International flights, Business Travel Solutions, GST Invoice for Bus, Corporate Bus booking, myBiz - Best Business Travel Platform, GST Invoice for Flights, GST Invoice for Corporate Travel, GST Invoice for Hotels, myBiz for Small Business, Free cancellation on International Flights'
        },
    ]
    const bottomData2 = [
        {
            id: 1,
            title: "Why Book Hotels on the Country's Best Travel Site?",
            data: "Planning a vacation or business trip, and haven't found a hotel yet? Then use our web portal to find a hotel, which suits you in every way. The best travel site in India, Makemytrip has the largest database of hotels in the country and outside. Our user-friendly website makes online hotel booking an easy task, which can be completed in mere minutes."
        },
        {
            id: 2,
            title: "How to book hotels on Makemytrip.com?",
            data: "Now, suppose you are travelling to Goa. All you have to do is click on the 'Hotels' tab on the homepage, and press the 'Domestic' button. After typing Goa under the 'I WANT TO GO' header, select your option. Then, enter the check-in and check-out dates, and tell us the number of adults and children, for whom the booking is to be made. On clicking the 'Search Hotels' button, all the accommodation options are displayed on a single page. To make your task easier, our portal is provided with filters that you can use to narrow down your search. You can refine the results on the basis of star category, location, area, price range and even the facilities you want."
        },
        {
            id: 3,
            title: "What Makemytrip.com has in store for you?",
            data: "We have all sorts of hotels, ranging from luxury to cheap, so whatever be your requirement, you will get the accommodation. When you find the hotel of your choice, just click on its name to see its detailed description. Apart from Goa, our database includes myriad properties in all holiday and business destinations in India. Our payment gateway is totally secure, so all your bank details are safe. A smooth transfer process means that making payment is as swift as searching the hotel. So, whether you are looking for budget or upscale hotels in Delhi, Shimla, Mumbai, Chennai or any other destination, visit Makemytrip, and get the best deal."
        },
    ]


    return (
        <div className=" flex items-center justify-center flex-col">

            <div className=' w-4/5 mb-12'>
                {bottomData.map((item) => (
                    <div key={item.id}>
                        <h3 className=" text-xs font-bold 	text-transform: uppercase font-['sans-serif']">{item.title}</h3>
                        <p className=" text-xs mb-5">{item.data}</p>
                    </div>
                ))}
            </div>
            <div className=" flex items-center justify-center bg-gray-200">
                <div className=" flex w-4/5">

                    {bottomData2.map((item) => (
                        <div key={item.id} className=" w-1/3 p-10 mt-4 text-justify">
                            <h3 className="text-l">{item.title}</h3>
                            <p className="text-xs">{item.data}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        //     <Bottomcss>
        // <div className="div1">
        // <div>
        // <h3>PRODUCT OFFERING</h3>
        //         <p>Flights</p>
        //         <p>International Flights</p>
        //         <p>Charter Flights</p>
        //         <p>Hotels</p>
        //         <p>International Hotels</p>
        //         <p>Homestays and Villas</p>
        //         <p>Activities</p>
        //         <p>Holidays In India</p>
        //         <p>International Holidays</p>
        //         <p>Book Hotels From UAE</p>
        //         <p>myBiz for SME Travel</p>
        //         <p>Book Online Cabs</p>
        //         <p>Book Bus Tickets</p>
        //         <p>Book Train Tickets</p>
        //         <p>Vande Bharat Mission Flights</p>
        //         <p>Air Bubble Flights</p>
        //         <p>Cheap Tickets to India</p>
        //         <p>Book Flights From US</p>
        //         <p>Book Flights From UAE</p>
        //         <p>Trip Planner</p>
        //         <p>Gift Cards</p>
        //         <p>Travel Blog</p>
        //         <p>PNR Status</p>
        // </div>
        // <div>
        //     <h3>MAKEMYTRIP</h3>
        //     <p>About Us</p>
        //     <p>Investor Relations</p>
        //     <p>Careers</p>
        //     <p>Careers</p>
        //     <p>MMT Foundation</p>
        //     <p>CSR Policy</p>
        //     <p>myPartner - Travel Agent Portal</p>
        //     <p>Foreign Exchange</p>
        //     <p>List your hotel</p>
        //     <p>Partners- Redbus</p>
        //     <p>Partners- Goibibo</p>
        // </div>
        // <div>
        //     <h3>ABOUT THIS SITE</h3>
        //     <p>Contact Us</p>
        //     <p>Payment Security</p>
        //     <p>Privacy Policy</p>
        //     <p>User Agreement</p>
        //     <p>Terms of Service</p>
        //     <p>More Offices</p>
        //     <p>Make A Payment</p>
        //     <p>Work From Home</p>
        // </div>
        // </div>
        // <div className="div2">
        //  <h3>QUICK LINKS</h3>
        //  <p>
        //  Delhi Chennai Flights, Delhi Mumbai Flights, Delhi Goa Flights, Chennai Mumbai flights, Mumbai Hyderabad flights, Kolkata to Rupsi Flights, Rupsi to Guwahati Flights, Pasighat to Guwahati Flights, Delhi to Khajuraho Flights, Cochin to Agatti Island Flights, Hotels in Delhi, Hotels in Mumbai, Hotels In Goa, Hotels In Jaipur, Hotels In Ooty, Hotels In Udaipur, Hotels in Puri, Hotels In North Goa, Hotels In Rishikesh, Honeymoon Packages, Kerala Packages, Kashmir Packages, Ladakh Packages, Goa Packages, Thailand Packages, Sri Lanka Visa, Thailand Visa, Explore Goa, Explore Manali, Explore Shimla, Explore Jaipur, Explore Srinagar
        //  </p>
        //  <h3>
        //      IMPORTANT LINKS
        //  </h3>
        //  <p>
        //  Cheap Flights, Flight Status, Kumbh Mela, Domestic Airlines, International Airlines, Indigo, Spicejet, GoAir, Air Asia, Air India, Indian Railways, Corporate Flight Booking, Trip Ideas, Beaches, Honeymoon Destinations, Romantic Destinations, Popular Destinations, Resorts In Udaipur, Resorts In Munnar, Villas In Lonavala, Villas In Goa, Domestic Flight Offers, International Flight Offers, UAE Flight Offers, USA, UAE, Saudi Arabia, UK, Oman
        //  </p>
        // </div>
        // <div className="div3">
        //  <div>
        //      <h3>Why MakeMyTrip?</h3>
        //      <p>Established in 2000, MakeMyTrip has since positioned itself as one of the leading companies, providing great offers, competitive airfares, exclusive discounts, and a seamless online booking experience to many of its customers. The experience of booking your flight tickets, hotel stay, and holiday package through our desktop site or mobile app can be done with complete ease and no hassles at all. We also deliver amazing offers, such as Instant Discounts, Fare Calendar, MyRewardsProgram, MyWallet, and many more while updating them from time to time to better suit our customers’ evolving needs and demands.</p>
        //  </div>
        //  <div>
        //      <h3>Booking Flights with MakeMyTrip</h3>
        //      <p>At MakeMyTrip, you can find the best of deals and cheap air tickets to any place you want by booking your tickets on our website or app. Being India’s leading website for hotel, flight, and holiday bookings, MakeMyTrip helps you book flight tickets that are affordable and customized to your convenience. With customer satisfaction being our ultimate goal, we also have a 24/7 dedicated helpline to cater to our customer’s queries and concerns. Serving over 5 million happy customers, we at MakeMyTrip are glad to fulfill the dreams of folks who need a quick and easy means to find air tickets. You can get a hold of the cheapest flight of your choice today while also enjoying the other available options for your travel needs with us.</p>
        //  </div>
        //  <div>
        //      <h3>Domestic Flights with MakeMyTrip</h3>
        //      <p>
        //      MakeMyTrip is India's leading player for flight bookings, and have a dominant position in the domestic flights sector. With the cheapest fare guarantee, experience great value at the lowest price. Instant notifications ensure current flight status, instant fare drops, amazing discounts, instant refunds and rebook options, price comparisons and many more interesting features.
        //      </p>
        //  </div>
        // </div>
        // <div className="div4">
        // <div className="fb">
        //     <div className="onee">
        //         <div></div>
        //         <div></div>
        //     </div>
        //     <div className="copy">
        //         <p>© 2021 MAKEMYTRIP PVT. LTD.</p>
        //         <p>Country India USA UAE</p>
        //     </div>
        // </div>
        // </div>
        //     </Bottomcss>

    );
};

export default Bottom;