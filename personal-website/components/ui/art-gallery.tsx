"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/8bit/carousel";
import { Card, CardContent } from "@/components/ui/8bit/card";

const duckImages = [
  {
    src: "/ducks/geekgames.jpeg",
    alt: "Geek Games Duck",
    title: "Geek Games Duck"
  },
  {
    src: "/ducks/quacktime.png",
    alt: "Quack Time Duck",
    title: "Quack Time Duck"
  },
  {
    src: "/ducks/profmixer.png",
    alt: "Prof Mixer Duck",
    title: "Prof Mixer Duck"
  },
  {
    src: "/ducks/ubertrip.png",
    alt: "Uber Trip Duck",
    title: "Uber Trip Duck"
  },
  {
    src: "/ducks/network.png",
    alt: "Network Duck",
    title: "Network Duck"
  },
  {
    src: "/ducks/genaitalkshow.png",
    alt: "Gen AI Talk Show Duck",
    title: "Gen AI Talk Show Duck"
  }
];

export default function ArtGallery() {
  return (
    <div className="flex justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full">
        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {duckImages.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="bg-white/10 aspect-square">
                      <CardContent className="p-0 h-full">
                        <div className="aspect-square relative w-full h-full">
                          <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            className="object-contain rounded-sm"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="text-white hover:bg-indigo-500/70" />
            <CarouselNext className="text-white hover:bg-indigo-500/70" />
          </Carousel>
        </div>
      </div>
    </div>
  );
}
