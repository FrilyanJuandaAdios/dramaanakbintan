"use client";
import Image from "next/image";

const boardExecutive = [
  {
    name: "Frilyan Juanda Adios",
    role: "Founder & Producer",
    image: "/Member/Member1.jpeg",
  },
  {
    name: "Rafly Safriansyah",
    role: "Founder & Talent Manager",
    image: "/Member/Member2.jpeg",
  },
  {
    name: "Tahani Vidra Putri",
    role: "Executive Producer",
    image: "/Member/Member3.jpeg",
  },
];

const boardMember = [
  {
    name: "Rian",
    role: "Co-Founder & Advisor",
    image: "/Member/Member4.jpeg",
  },
  {
    name: "Sayyid Ahmadi",
    role: "Co-Founder & Advisor",
    image: "/Member/Member5.jpeg",
  },
  {
    name: "Muhammad Rizki Saputra",
    role: "Media Manager",
    image: "/Member/Member6.jpeg",
  },
  {
    name: "Ridhan Syah",
    role: "Production Assistant",
    image: "/Member/Member7.jpeg",
  },
  {
    name: "Jailani",
    role: "Production Assistant",
    image: "/Member/Member8.jpeg",
  },
  {
    name: "Ainul Mutaqhoro",
    role: "Production Support",
    image: "/Member/Member9.jpeg",
  },
  {
    name: "Raja Nadilla Azzahra",
    role: "Sosial Media Specialist",
    image: "/Member/Member10.jpeg",
  },
];

export default function Member() {
  return (
    <section className="relative py-20 px-6 md:px-12">
      <div className="absolute inset-0 bg-black/30 backdrop-blur-md" />
      <div
        className="absolute inset-0 opacity-5 mix-blend-overlay"
        style={{
          backgroundImage: "url('/songket.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="relative max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Behind the Scene
        </h2>

        {/* Board Executive */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-start mb-8">
            <span className="relative inline-block">
              <span className="text-red-500">Board</span>{" "}
              <span className="text-white">Executive</span>
              <span className="absolute -bottom-2 left-0 w-full h-[3px] bg-red-500 rounded-full"></span>
            </span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {boardExecutive.map((person, i) => (
              <div
                key={i}
                className="text-center bg-white/5 backdrop-blur-lg p-5 rounded-xl"
              >
                {/* Foto */}
                <div className="aspect-square relative w-full overflow-hidden rounded-lg">
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    className="object-cover grayscale"
                  />
                </div>
                {/* Nama + Posisi */}
                <h4 className="font-semibold mt-4">{person.name}</h4>
                <p className="text-gray-400 text-sm mb-4">{person.role}</p>
                {/* Button */}
                <button className="px-4 py-2 text-sm font-semibold bg-red-600 hover:bg-red-500 rounded-full transition">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Board Member */}
        <div>
          <h3 className="text-2xl font-bold text-start mb-8">
            <span className="relative inline-block">
              <span className="text-red-500">Board</span>{" "}
              <span className="text-white">Member</span>
              <span className="absolute -bottom-2 left-0 w-full h-[3px] bg-red-500 rounded-full"></span>
            </span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {boardMember.map((person, i) => (
              <div
                key={i}
                className="text-center bg-white/5 backdrop-blur-lg p-5 rounded-xl"
              >
                {/* Foto */}
                <div className="aspect-square relative w-full overflow-hidden rounded-lg">
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    className="object-cover grayscale"
                  />
                </div>
                {/* Nama + Posisi */}
                <h4 className="font-semibold mt-4">{person.name}</h4>
                <p className="text-gray-400 text-sm mb-4">{person.role}</p>
                {/* Button */}
                <button className="px-4 py-2 text-sm font-semibold bg-red-600 hover:bg-red-500 rounded-full transition">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
