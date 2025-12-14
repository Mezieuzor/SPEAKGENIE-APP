"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import { useState, useEffect } from "react";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  Video,
  Phone,
  BookOpen,
  Sparkles,
  Home,
  GraduationCap,
  PhoneCall,
  User,
  Moon,
  Sun,
} from "lucide-react";
import Link from "next/link";

const audioStories = [
  {
    id: 1,
    title: "Choosing the Right Path",
    image: "/fantasy-story-book-cover-forest-path.png",
  },
  {
    id: 2,
    title: "The Fountain and the Mayor",
    image: "/images/story-2.jpg",
  },
  {
    id: 3,
    title: "The Less Travelled Path",
    image: "/mysterious-forest-path-adventure.png",
  },
  {
    id: 4,
    title: "The Melody of Friendship",
    image: "/friendship-courage.jpg",
  },
];

const practiceHumans = [
  {
    id: 1,
    tag: 'Be First!',
    title: 'Favorite Animals',
    subtitle: 'Talk about your favorite animals and pets',
    image: 'https://images.unsplash.com/photo-1425082661705-1834bfd09dca?w=400&h=300&fit=crop'
  },
  {
    id: 2,
    title: 'Hobbies & Interests',
    subtitle: 'Share your hobbies',
    image: 'https://images.unsplash.com/photo-1452857297128-d9c29adba80b?w=400&h=300&fit=crop'
  },
  {
    id: 3,
    title: 'Travel Stories',
    subtitle: 'Share your adventures',
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=300&fit=crop'
  }
];

const practiceAI = [
  {
    id: 1,
    name: "Talk with Doraemon",
    bgColor: "bg-blue-100",
    image: "/vadim.jpg",
  },
  { 
    id: 2, 
    name: "Talk with Spider Man", 
    bgColor: "bg-pink-100",
    image: "/a1.png"
  },
];

export default function HomeScreen() {
  // Initialize with a default value that matches what will be rendered
  const [greeting, setGreeting] = useState("Hello");
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Update greeting after mount - this is acceptable for time-based data
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const hour = new Date().getHours();
    const timeBasedGreeting = hour < 12 ? "Good Morning" : hour < 18 ? "Good Afternoon" : "Good Evening";
    setGreeting(timeBasedGreeting);
  }, []); // Empty dependency array is fine here - we only need to set it once on mount

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header Card */}
      <Card className="rounded-none border-0 bg-green-500 p-6 text-white shadow-lg">
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-3">
            <Avatar className="h-12 w-12 border-2 border-white">
              <AvatarImage src="/avatar.png" alt="Lorenzo" />
              <AvatarFallback className="bg-purple-500 text-white">
                L
              </AvatarFallback>
            </Avatar>

            <div>
              <p className="text-sm opacity-90">{greeting}</p>
              <h1 className="text-xl font-bold">Lorenzo</h1>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button 
              onClick={toggleDarkMode}
              className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5 text-white" />
              ) : (
                <Moon className="h-5 w-5 text-white" />
              )}
            </button>
            <div className="flex items-center gap-1 bg-white/20 rounded-full px-3 py-1">
              <span className="text-red-400">❤️</span>
              <span className="font-semibold">30</span>
            </div>
            <Badge className="bg-orange-500 hover:bg-orange-600 border-0 text-white font-semibold">
              PRO
            </Badge>
          </div>
        </div>

        {/* XP Progress */}
       <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
          <div className="flex items-center gap-3 mb-3">
            <div className="relative h-12 w-12 shrink-0">
              <div className="h-12 w-12 rounded-full border-3 border-white/30 flex items-center justify-center">
                <span className="text-sm font-bold">L3</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <p className="text-sm font-semibold">XP PROGRESS</p>
                <p className="text-xs opacity-90">Next: L4</p>
              </div>
              <div className="relative h-2 bg-white/20 rounded-full overflow-hidden">
                <div 
                  className="absolute inset-y-0 left-0 bg-white rounded-full transition-all duration-300"
                  style={{ width: `${(80 / 300) * 100}%` }}
                />
              </div>
              <p className="text-xs opacity-90 mt-1">80/300 XP</p>
            </div>
          </div>
          <div className="flex items-center justify-between mt-4">
            <div className="bg-white/20 rounded-full p-2">
              <Sparkles className="h-5 w-5" />
            </div>
            <p className="text-2xl font-bold">242 XP</p>
            <button aria-label="More options" className="text-white">
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </Card>

      {/* Main Action Icons */}
      <div className="grid grid-cols-4 gap-4 px-6 py-6">
        <div className="flex flex-col items-center gap-2">
          <div className="h-16 w-16 rounded-2xl bg-blue-100 flex items-center justify-center">
            <Video className="h-7 w-7 text-blue-600" />
          </div>
          <p className="text-xs text-center font-medium leading-tight">
            Video Learning
          </p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="h-16 w-16 rounded-2xl bg-blue-100 flex items-center justify-center">
            <Phone className="h-7 w-7 text-blue-600" />
          </div>
          <p className="text-xs text-center font-medium leading-tight">
            Peer Calls
          </p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="h-16 w-16 rounded-2xl bg-orange-100 flex items-center justify-center">
            <BookOpen className="h-7 w-7 text-orange-600" />
          </div>
          <p className="text-xs text-center font-medium leading-tight">
            Stories
          </p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="h-16 w-16 rounded-2xl bg-red-100 flex items-center justify-center">
            <Sparkles className="h-7 w-7 text-red-600" />
          </div>
          <p className="text-xs text-center font-medium leading-tight">
            AI Calls
          </p>
        </div>
      </div>

      {/* Audio Stories */}
      <div className="px-6 mb-6">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-green-500" />
            <h2 className="text-base font-bold">Audio Stories</h2>
          </div>
          <Link
            href="#"
            className="text-sm text-green-500 font-semibold flex items-center gap-1"
          >
            Show all
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
          {audioStories.map((story) => (
            <Link key={story.id} href="/player" className="shrink-0">
              <div className="w-32 h-44 rounded-2xl bg-muted overflow-hidden shadow-md relative">
                <Image
                  src={story.image}
                  alt={story.title}
                  fill
                  sizes="128px"
                  className="object-cover"
                />
              </div>
              <p className="text-xs mt-2 text-center w-32 line-clamp-2 leading-tight font-medium">
                {story.title}
              </p>
            </Link>
          ))}
        </div>
      </div>

      {/* Practice with Humans */}
      <div className="px-6 mb-4">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <svg className="w-6 h-6 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
            </svg>
            <h2 className="text-base font-bold text-gray-800">Practice with Humans</h2>
          </div>
          <button className="text-green-500 font-semibold text-sm flex items-center gap-1 hover:text-green-600">
            Show all
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-0 scrollbar-hide">
          {practiceHumans.map((practice) => (
            <div
              key={`human-${practice.id}`}
              className="relative shrink-0 w-72 h-48 rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
            >
              {/* Background Image with Overlay */}
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${practice.image})` }}
              />
              <div className="absolute inset-0 bg-black/20" />
              
              {/* Content */}
              <div className="relative h-full p-4 flex flex-col text-white">
                {practice.tag && (
                  <span className="inline-block mb-2 px-2.5 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-medium w-fit">
                    {practice.tag}
                  </span>
                )}
                <h3 className="font-bold text-lg mb-1">{practice.title}</h3>
                <p className="text-sm opacity-90 mb-auto">{practice.subtitle}</p>
                
                {/* Button */}
                <button className="w-full bg-white text-green-600 rounded-full py-2.5 font-semibold text-sm hover:bg-white/90 transition-colors shadow-md">
                  Join & Start Call
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Practice with AI */}
      <div className="px-6">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-blue-500" />
            <h2 className="text-base font-bold">Practice with AI</h2>
          </div>
          <Link
            href="#"
            className="text-sm text-green-500 font-semibold flex items-center gap-1"
          >
            Show all
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
          {practiceAI.map((ai) => (
            <Card
              key={ai.id}
              className={`shrink-0 w-36 h-40 ${ai.bgColor} border-0 shadow-md flex flex-col items-center justify-center p-4`}
            >
              <div className="w-20 h-20 rounded-2xl bg-white/80 mb-3 flex items-center justify-center overflow-hidden">
                {ai.image ? (
                  <div className="relative w-16 h-16">
                    <Image
                      src={ai.image}
                      alt={ai.name}
                      fill
                      sizes="64px"
                      className="object-cover rounded-xl"
                    />
                  </div>
                ) : (
                  <div className="w-16 h-16 rounded-xl bg-linear-to-br from-blue-400 to-blue-600"></div>
                )}
              </div>
              <p className="text-xs text-center font-medium leading-tight">
                {ai.name}
              </p>
            </Card>
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-border">
        <div className="flex items-center justify-around py-3 px-6 max-w-lg mx-auto">
          <button className="flex flex-col items-center gap-1 text-green-500">
            <Home className="h-6 w-6" />
            <span className="text-xs font-semibold">Home</span>
          </button>
          <Link
            href="/quiz"
            className="flex flex-col items-center gap-1 text-muted-foreground"
          >
            <GraduationCap className="h-6 w-6" />
            <span className="text-xs font-medium">Learn</span>
          </Link>
          <button className="flex flex-col items-center gap-1 text-muted-foreground">
            <PhoneCall className="h-6 w-6" />
            <span className="text-xs font-medium">Call</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-muted-foreground">
            <User className="h-6 w-6" />
            <span className="text-xs font-medium">Profile</span>
          </button>
        </div>
      </div>
    </div>
  );
}