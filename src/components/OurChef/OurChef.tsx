import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { createClient } from '@sanity/client';
import { urlFor } from "@/sanity/lib/image";
import { client } from "@/sanity/lib/client";



export const OurChef = async() => {

  

      const query = `
        *[_type == "chef"]{
          name,
          position,
          experience,
          specialty,
          "image": image.asset->url,
          description,
          available
        }
      `;
     
        const chefs = await client.fetch(query);
        
    
  



  return (
    <div className="py-16 bg-black text-white relative">
      {/* Header */}
      <div className="text-center mb-12">
        <p className="text-orange-400 text-2xl italic">Chefs</p>
        <h2 className="text-4xl md:text-5xl font-bold mt-3">
          <span className="text-orange-400">Meet</span> Our Chefs
        </h2>
      </div>

      {/* Chef Cards */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
        {chefs.map((chef:any) => (
          <div
            key={chef.name}
            className="bg-gray-800 rounded-lg shadow-lg overflow-hidden"
          >
            <Image
              src={urlFor(chef.image).url()}
              alt={chef.name}
              width={400}
              height={400}
              className="w-full h-auto object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold">{chef.name}</h3>
              <p className="text-sm text-gray-400">{chef.position}</p>
            </div>
          </div>
        ))}
      </div>

      {/* "See More" Button */}
      <div className="text-center mt-12">
        <Link href="/ChefTeam">
          <button className="inline-block bg-transparent border-2 border-orange-400 text-orange-400 px-6 py-3 rounded-full font-semibold hover:bg-orange-400 hover:text-white transition duration-300">
            See More
          </button>
        </Link>
      </div>

      {/* Decoration Image */}
      {/* <div className="absolute -left-20 top-16 z-0">
        <Image src={ChefDill} alt="Decoration Dill" width={250} height={250} />
      </div> */}
    </div>
  );
};
