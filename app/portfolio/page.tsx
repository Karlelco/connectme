"use client";
import Link from "next/link";
import {
  ArrowUpRight,
  Menu,
  Package2,
} from "lucide-react";
import collo from "@/assets/collo1.jpg";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import {
  TbBrandFlutter,
  TbBrandGithub,
  TbBrandGraphql,
  TbBrandLinkedin,
  TbBrandMongodb,
  TbBrandNextjs,
  TbBrandReact,
  TbBrandReactNative,
  TbBrandSupabase,
  TbBrandWhatsapp,
  TbBrandX,
  TbDatabaseX,
  TbDeviceMobileCode,
} from "react-icons/tb";
import { SiAppwrite, SiBackendless, SiExpo, SiFrontendmentor } from "react-icons/si";
import convex from "@/assets/image.png";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export interface Artwork {
  artist: string;
  art: string;
}



export default function Portfolio() {

   const works: Artwork[] = [
     {
       artist: "Ornella Binni",
       art: "https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=300&q=80",
     },
     {
       artist: "Tom Byrom",
       art: "https://i.pinimg.com/736x/14/3d/38/143d386b3df0507c1922814af4897e2f.jpg",
     },
     {
       artist: "Vladimir Malyavko",
       art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
     },
   ];


  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky top-0 flex h-16 items-center gap-4 z-20 border-b bg-background px-4 md:px-6">
        <nav className="hidden flex-col gap-6 text-lg  font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <Link
            href="#"
            className="flex items-center gap-2 text-lg font-semibold"
          >
            <Package2 className="h-6 w-6" />
            <span className="sr-only">Colins Chege</span>
          </Link>
          <Link
            href="/"
            className="hover:text-foreground dark:hover:text-background hover:bg-base-200 dark:hover:bg-slate-300 border rounded-full px-4 py-2 "
          >
            Portfolio
          </Link>
          <Link
            href="/blog"
            className="text-muted-foreground hover:text-foreground dark:hover:text-background dark:hover:bg-slate-300  border rounded-full px-4 py-2"
          >
            Blog
          </Link>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="grid gap-6 text-lg font-medium">
              <Link
                href="#"
                className="flex items-center gap-2 text-lg font-semibold"
              >
                <Package2 className="h-6 w-6" />
                <span className="sr-only">Colins Chege</span>
              </Link>
              <Link href="/" className="hover:text-foreground">
                Portfolio
              </Link>
              <Link
                href="/blog"
                aria-disabled
                className="text-muted-foreground hover:text-foreground"
              >
                Blog
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </header>
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
          <Card className="xl:col-span-2" x-chunk="dashboard-01-chunk-4">
            <CardHeader className="flex flex-row  items-center">
              <div className=" grid gap-2">
                <CardTitle className="flex items-center gap-2">
                  <Avatar className=" -z-10 md:z-0">
                    <AvatarImage src="/avatars/01.png" alt="Avatar" />
                    <AvatarFallback>CW</AvatarFallback>
                  </Avatar>
                  <p className="flex flex-col text-left  gap-2">
                    Colins Chege
                    <Link href="#" className="text-blue-500 text-sm">
                      chegecolins@gmail.com
                    </Link>
                  </p>
                </CardTitle>
              </div>
              <Button
                asChild
                size="sm"
                className=" hidden md:flex ml-auto gap-1"
              >
                <Link href="#">
                  About me
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardHeader>
            <CardContent>
              {/* an introduction of myself on portfolio */}
              <div className="flex flex-col md:flex-row  gap-4">
                <Image src={collo} alt="Colins Chege" className="rounded-lg" />
                <div>
                  Hi there , I am Colins Chege, a full stack developer with a
                  passion for creating web applications. I have experience in
                  building web applications using React, Next.js, Node.js,
                  Express.js, MongoDB, and PostgreSQL. I am also familiar with
                  AWS services such as S3, EC2, and RDS. I am a quick learner
                  and I am always eager to learn new technologies. I am
                  currently looking for a full-time position as a full stack
                  developer. Feel free to reach out to me at
                </div>
              </div>
            </CardContent>
          </Card>
          <Card x-chunk="dashboard-01-chunk-5">
            <CardHeader>
              <CardTitle>Blog</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-8">
              <div className="flex flex-col gap-4">
                <div className="flex flex-row items-center gap-2">
                  <Badge variant="secondary">New</Badge>
                  <Link href="#" className="text-lg font-medium">
                    How to build a portfolio
                  </Link>
                </div>
                <CardDescription>
                  A step by step guide on how to build a portfolio using React,
                  Next.js, and Tailwind CSS
                </CardDescription>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex flex-row items-center gap-2">
                  <Badge variant="secondary">New</Badge>
                  <Link href="#" className="text-lg font-medium">
                    How to build a portfolio
                  </Link>
                </div>
                <CardDescription>
                  A step by step guide on how to build a portfolio using React,
                  Next.js, and Tailwind CSS ...
                </CardDescription>
              </div>
              {/* saas  */}
              <div className="flex flex-col gap-4">
                <div className="flex flex-row items-center gap-2">
                  <Badge variant="secondary">New</Badge>
                  <Link href="#" className="text-lg font-medium">
                    Check out my new saas project
                  </Link>
                </div>
                <CardDescription>
                  A step by step guide on how to build a sas project using
                  Convex, Next.js, and Tailwind CSS ...
                </CardDescription>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="flex flex-col md:flex-row py-8">
          <div className="flex flex-col-reverse md:flex-row gap-2">
            <ScrollArea className="w-96 flex-grow-1 whitespace-nowrap rounded-md border">
              <div className="flex w-max space-x-4 p-4">
                {works.map((artwork) => (
                  <figure key={artwork.artist} className="shrink-0">
                    <div className="overflow-hidden rounded-md">
                      <Image
                        src={artwork.art}
                        alt={`Photo by ${artwork.artist}`}
                        className="aspect-auto h-[350px] w-fit object-cover"
                        width={400}
                        height={400}
                      />
                    </div>
                  </figure>
                ))}
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>

            <div className="grid grid-cols-2 items-center bg-base-200 rounded-lg justify-center w-96 relative">
              <Link
                href="https://google.com"
                className=" ml-30 mt-20 right-3 z-10 "
              >
                <TbBrandWhatsapp className="  text-green-700 text-6xl" />
              </Link>
              <Link
                href="https://google.com"
                className="  justify-end  right-3 -top-2"
              >
                <TbBrandX className=" text-white-700 text-6xl" />
              </Link>
              <Link
                href="https://google.com"
                className=" z-10 top-6  mb-24 ml-20 "
              >
                <TbBrandLinkedin className=" text-blue-400 text-6xl" />
              </Link>
              <Link
                href="https://github.com/Karlelco"
                className="  right-3 -top-12"
              >
                <TbBrandGithub className="  text-6xl" />
              </Link>
            </div>
          </div>
          <div className="flex flex-col-reverse md:flex-row gap-2 text-4xl animate-in">
            Projects coming soon !
          </div>
        </div>

        {/* software teschnologies */}
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
          <Card x-chunk="dashboard-01-chunk-0">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Databases</CardTitle>
              <TbDatabaseX className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="flex gap-2 items-center">
                <TbBrandMongodb className=" text-green-700 text-6xl" />
                <p>MongoDB</p>
              </div>

              <div className="flex gap-2 items-center">
                <TbBrandGraphql className=" text-gray-700 text-6xl" />
                <p>PostgreSQL</p>
              </div>
            </CardContent>
          </Card>
          <Card x-chunk="dashboard-01-chunk-1">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {" "}
                Backend as a Service
              </CardTitle>
              <SiBackendless className="h-4 w-4 rounded-full text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="flex gap-2 items-center">
                <Image
                  src={convex}
                  width={56}
                  alt=""
                  className="  rounded-full text-orange-700"
                />
                <p>Convex</p>
              </div>

              <div className="flex gap-2 items-center">
                <TbBrandSupabase className=" text-green-400 text-6xl" />
                <p>Supabase</p>
              </div>
              <div className="flex gap-2 items-center">
                <SiAppwrite className=" text-red-500 text-6xl" />
                <p>Appwrite</p>
              </div>
            </CardContent>
          </Card>
          <Card x-chunk="dashboard-01-chunk-2">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Frontend</CardTitle>
              <SiFrontendmentor className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="flex gap-2 items-center">
                <TbBrandNextjs className=" text-black text-6xl" />
                <p>NextJs </p>
              </div>
              <div className="flex gap-2 items-center">
                <TbBrandReact className=" text-blue-300 text-6xl" />
                <p>React & Nodejs </p>
              </div>
            </CardContent>
          </Card>
          <Card x-chunk="dashboard-01-chunk-3">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Mobile Development
              </CardTitle>
              <TbDeviceMobileCode className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="flex gap-2 items-center">
                <TbBrandReactNative className=" text-blue-400 text-6xl" />
                <p>React Native </p>
              </div>
              <div className="flex gap-2 items-center">
                <SiExpo className="  text-6xl" />
                <p> Expo</p>
              </div>
              <div className="flex gap-2 items-center">
                <TbBrandFlutter className=" text-blue-400 text-6xl" />
                <p>Flutter Development</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
