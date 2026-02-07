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

import project3KeyPlanImage from "@/assets/project3-keyplan.png";
import project3LayoutImage from "@/assets/project3-layout.jpeg";

import project4MainImage from "@/assets/project4-main.jpeg";
import project4LayoutImage from "@/assets/project4-layout.jpeg";

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
  highlights?: string[];
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
  },
  {
    id: 3,
    name: "Shri Shayama City Farm House Phase 2",
    location: "Malikpur, Sikar Highway, Khatushyam",
    description: "Premium farm house plots ideal for investment & weekend living. Located near the holy destination Khatushyam Ji in a peaceful, green & high-growth zone.",
    plotSizes: ["350 sq. yards", "to", "900 sq. yards"],
    startingPrice: "₹5,000/sq.yd",
    pricePerUnit: "₹5,000 per sq. yard",
    highlights: [
      "Premium farm house plots",
      "Ideal for investment & weekend living",
      "Near holy destination Khatushyam Ji",
      "Peaceful, green & high-growth zone"
    ],
    amenities: [
      "Premium farm house plots",
      "Peaceful green zone",
      "High-growth investment area",
      "Near Khatushyam Ji Temple"
    ],
    mainImage: project3KeyPlanImage,
    keyPlanImage: project3KeyPlanImage,
    plotLayoutImage: project3LayoutImage,
    mapUrl: "https://maps.app.goo.gl/aWmPzn9m3Jh3rUAj8",
    mapEmbedUrl: "https://maps.google.com/maps?q=Malikpur%20Sikar%20Highway%20Khatushyam&t=&z=13&ie=UTF8&iwloc=&output=embed"
  },
  {
    id: 4,
    name: "Shri Shyama Hill Valley Township",
    location: "Near Shri Khatu Shyam Ji Temple, Rajasthan",
    description: "ARS Developers presents your dream home at the feet of Shri Khatu Shyam Ji. A 71 Acre Government Approved Project featuring The Hill View Resort (5 Star) - a premium township designed for luxury living and spiritual serenity.",
    plotSizes: ["100 sq. yards", "200 sq. yards", "500 sq. yards"],
    startingPrice: "₹3,600/sq.yd",
    pricePerUnit: "₹3,600 per sq. yard",
    highlights: [
      "71 Acre Govt. Approved Project",
      "Features The Hill View Resort (5 Star)",
      "Near holy Shri Khatu Shyam Ji Temple",
      "Premium township with luxury amenities",
      "A Name You Can Trust - ARS Developers"
    ],
    amenities: [
      "Boundary Wall",
      "Main Entrance Gate",
      "CCTV Camera",
      "Water Supply",
      "24 Hours Security",
      "35 Feet Wide Road",
      "Street Lights",
      "Greenery"
    ],
    mainImage: project4MainImage,
    plotLayoutImage: project4LayoutImage,
    mapUrl: "https://www.google.com/maps/place/27%C2%B028'52.7%22N+75%C2%B050'27.0%22E/@27.4812965,75.8382454,776m/data=!3m2!1e3!4b1!4m4!3m3!8m2!3d27.4812965!4d75.8408203?hl=en&entry=ttu",
    mapEmbedUrl: "https://maps.google.com/maps?q=27.4812965,75.8408203&t=&z=13&ie=UTF8&iwloc=&output=embed"
  }
];

export const getProjectById = (id: number): Project | undefined => {
  return projects.find(project => project.id === id);
};
