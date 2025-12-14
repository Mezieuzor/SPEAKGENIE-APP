"use client";

import {
  ChevronDown,
  FileText,
  Pencil,
  Volume2,
  RotateCcw,
  SkipBack,
  Play,
  SkipForward,
  Repeat,
  Clock,
  Heart,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function PlayerScreen() {
  return (
    <div className="min-h-screen bg-linear-to-b from-green-50 to-background">
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-white/80 backdrop-blur-sm">
        <Link href="/" className="p-2">
          <ChevronDown className="h-6 w-6" />
        </Link>

        <p className="text-sm font-semibold text-muted-foreground tracking-wide">
          NOW PLAYING
        </p>

        <div className="flex items-center gap-2">
          <button className="p-2">
            <FileText className="h-5 w-5" />
          </button>

          <button className="relative p-2">
            <div className="absolute -top-1 -right-1 bg-green-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
              7
            </div>
            <Pencil className="h-5 w-5 text-green-500" />
          </button>
        </div>
      </div>

      {/* Artwork */}
      <div className="px-6 pt-8 pb-6">
        <Card className="border-4 border-green-500 rounded-3xl overflow-hidden shadow-2xl bg-white p-2">
          <div className="relative aspect-square rounded-2xl overflow-hidden">
            <Image
              src="/images/a2.png"
              alt="Friendship and Courage"
              fill
              className="object-cover"
            />
          </div>
        </Card>
      </div>

      {/* Info */}
      <div className="px-6 pb-6">
        <div className="flex items-start justify-between mb-2">
          <h1 className="text-2xl font-bold leading-tight">
            The Melody of Friendship
          </h1>
          <button className="p-2 -mt-1">
            <Heart className="h-6 w-6" />
          </button>
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed">
          A heartwarming story about friendship and courage
        </p>

        <button className="w-full mt-6 bg-green-500 hover:bg-green-600 text-white rounded-full py-3.5 font-semibold text-sm flex items-center justify-center gap-2 shadow-lg transition">
          <Pencil className="h-4 w-4" />
          Test Your Understanding
          <Badge className="ml-2 bg-white/20 border-0 text-white">
            7 Questions
          </Badge>
        </button>
      </div>

      {/* Player */}
      <div className="px-6 pb-8">
        <div className="mb-3">
          <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-green-500 w-0 rounded-full" />
          </div>

          <div className="flex justify-between mt-2">
            <span className="text-xs font-medium text-green-600">0:00</span>
            <span className="text-xs font-medium text-muted-foreground">
              2:18
            </span>
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 mt-6">
          <button className="p-3 hover:bg-muted rounded-full">
            <Volume2 className="h-5 w-5" />
          </button>

          <button className="p-3 hover:bg-muted rounded-full">
            <RotateCcw className="h-5 w-5" />
          </button>

          <button className="p-3 hover:bg-muted rounded-full">
            <SkipBack className="h-6 w-6" />
          </button>

          <button className="p-5 bg-green-500 hover:bg-green-600 rounded-full shadow-lg">
            <Play className="h-8 w-8 text-white fill-white" />
          </button>

          <button className="p-3 hover:bg-muted rounded-full">
            <SkipForward className="h-6 w-6" />
          </button>

          <button className="p-3 hover:bg-muted rounded-full">
            <Repeat className="h-5 w-5" />
          </button>

          <button className="p-3 hover:bg-muted rounded-full">
            <Clock className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
