import projectMainImage from "@/assets/project-main.jpg";
import amenitiesImage from "@/assets/amenities.jpg";
import keyPlanImage from "@/assets/key-plan.png";
import plotLayoutImage from "@/assets/plot-layout.jpg";
import bookingPlanImage from "@/assets/booking-plan.jpg";
import projectVideo from "@/assets/project-video.mp4";

import project2MainImage from "@/assets/project2-main.jpg";
import project2AmenitiesImage from "@/assets/project2-amenities.jpg";
import project2BookingImage from "@/assets/project2-booking.jpg";
import project2KeyPlanImage from "@/assets/project2-keyplan.jpg";

export interface Project {
  id: number;
  name: string;
  location: string;
  description: string;
  plotSizes: string[];
  startingPrice: string;
  pricePerUnit?: string;
  amenities: string[];
  mainImage: string;
  amenitiesImage?: string;
  keyPlanImage?: string;
  plotLayoutImage?: string;
  bookingPlanImage?: string;
  video?: string;
  mapUrl: string;
  mapEmbedUrl: string;
}

export const projects: Project[] = [
  {
    id: 1,
    name: "Shri Shyama Township",
    location: "Located on Khatu Road near the famous Khatu Shyam Temple, Shri Madhopur, Sikar District, Rajasthan – 332715",
    description: "Welcome to a well-planned residential project located in the peaceful surroundings of Shri Madhopur City, close to the divine Khatu Shyam Temple. Designed for comfort, safety, and modern living, this property offers everything you need for a secure and premium lifestyle.",
    plotSizes: ["100 sq. Yard"],
    startingPrice: "₹3,000/sq.yd",
    amenities: [
      "Boundary wall",
      "Main entrance gate",
      "CCTV camera",
      "Water supply",
      "24 Hours security",
      "40 Feet wide road",
      "Street lights",
      "Greenery"
    ],
    mainImage: projectMainImage,
    amenitiesImage: amenitiesImage,
    keyPlanImage: keyPlanImage,
    plotLayoutImage: plotLayoutImage,
    bookingPlanImage: bookingPlanImage,
    video: projectVideo,
    mapUrl: "https://maps.app.goo.gl/2wqRriEjYPfQWait6",
    mapEmbedUrl: "https://maps.google.com/maps?q=Khatu%20Shyam%20Temple,%20Shri%20Madhopur,%20Sikar&t=&z=13&ie=UTF8&iwloc=&output=embed"
  },
  {
    id: 2,
    name: "Shree Ji Kuteer",
    location: "Barsana",
    description: "ARS Developers presents Shree Ji Kuteer, a well-planned residential project near Barsana with clear connectivity to Mathura, Chaata, and Delhi. The key plan highlights the project's prime location with nearby landmarks and essential facilities.",
    plotSizes: ["70 sq. yards", "140 sq. yards", "210 sq. yards", "280 sq. yards", "490 sq. yards"],
    startingPrice: "₹6,00,000",
    pricePerUnit: "70 sq yards @ ₹6 lakh",
    amenities: [
      "Security gate",
      "Boundary wall",
      "Wide roads",
      "Water supply",
      "Electricity supply"
    ],
    mainImage: project2MainImage,
    amenitiesImage: project2AmenitiesImage,
    keyPlanImage: project2KeyPlanImage,
    bookingPlanImage: project2BookingImage,
    mapUrl: "https://maps.app.goo.gl/NfbjWAu8tfw7Wpwd9",
    mapEmbedUrl: "https://maps.google.com/maps?q=Barsana&t=&z=13&ie=UTF8&iwloc=&output=embed"
  }
];

export const getProjectById = (id: number): Project | undefined => {
  return projects.find(project => project.id === id);
};
