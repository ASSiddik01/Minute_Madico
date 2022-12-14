import React from "react";
import Badge from "../components/Badge";
import Doctor from "../components/Doctor";
import SectionHeader from "../components/SectionHeader";
import doc01 from "../public/images/doctors/01.jpg";
import doc02 from "../public/images/doctors/02.jpg";
import doc03 from "../public/images/doctors/03.jpg";
import doc04 from "../public/images/doctors/04.jpg";
import doc05 from "../public/images/doctors/05.jpg";
import doc06 from "../public/images/doctors/06.jpg";
import doc07 from "../public/images/doctors/07.jpg";
import doc08 from "../public/images/doctors/08.jpg";

const Doctors = () => {
  const doctors = [
    {
      _id: 1,
      name: "Calvin Carlo",
      specialist: "Eye Care",
      degree: "MBBS, FCBS",
      about:
        "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
      education: "DMC",
      location: "63, PG Shustoke, UK",
      schedule: "Mon: 2:00PM - 6:00PM",
      fee: 20,
      img: doc01,
    },
    {
      _id: 2,
      name: "Cristino Murphy",
      specialist: "M.B.B.S, Gynecologist",
      degree: "MBBS, FCBS",
      about:
        "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
      education: "DMC",
      location: "63, PG Shustoke, UK",
      schedule: "Mon: 2:00PM - 6:00PM",
      fee: 20,
      img: doc02,
    },
    {
      _id: 3,
      name: "Alia Reddy",
      specialist: "M.B.B.S, Psychotherapist",
      degree: "MBBS, FCBS",
      about:
        "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
      education: "DMC",
      location: "63, PG Shustoke, UK",
      schedule: "Mon: 2:00PM - 6:00PM",
      fee: 20,
      img: doc03,
    },
    {
      _id: 4,
      name: "Toni Kovar",
      specialist: "M.B.B.S, Orthopedic",
      degree: "MBBS, FCBS",
      about:
        "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
      education: "DMC",
      location: "63, PG Shustoke, UK",
      schedule: "Mon: 2:00PM - 6:00PM",
      fee: 20,
      img: doc04,
    },
    {
      _id: 5,
      name: "Jessica McFarlane",
      specialist: "M.B.B.S, Dentist",
      degree: "MBBS, FCBS",
      about:
        "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
      education: "DMC",
      location: "63, PG Shustoke, UK",
      schedule: "Mon: 2:00PM - 6:00PM",
      fee: 20,
      img: doc05,
    },
    {
      _id: 6,
      name: "Elsie Sherman",
      specialist: "M.B.B.S, Gastrologist",
      degree: "MBBS, FCBS",
      about:
        "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
      education: "DMC",
      location: "63, PG Shustoke, UK",
      schedule: "Mon: 2:00PM - 6:00PM",
      fee: 20,
      img: doc06,
    },
    {
      _id: 7,
      name: "Bertha Magers",
      specialist: "M.B.B.S, Urologist",
      degree: "MBBS, FCBS",
      about:
        "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
      education: "DMC",
      location: "63, PG Shustoke, UK",
      schedule: "Mon: 2:00PM - 6:00PM",
      fee: 20,
      img: doc07,
    },
    {
      _id: 8,
      name: "Louis Batey",
      specialist: "M.B.B.S, Neurologist",
      degree: "MBBS, FCBS",
      about:
        "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
      education: "DMC",
      location: "63, PG Shustoke, UK",
      schedule: "Mon: 2:00PM - 6:00PM",
      fee: 20,
      img: doc08,
    },
  ];
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <div className="mx-auto mb-4">
            <Badge text="Find Doctors" />
          </div>
          <SectionHeader
            title="Find Your Specialists"
            desc="Great doctor if you need your family member to get effective immediate assistance, emergency treatment or a simple consultation."
          />
        </div>
        <div className="flex flex-wrap -m-4">
          {doctors.map((doctor) => {
            return <Doctor key={doctor._id} doctor={doctor} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Doctors;
