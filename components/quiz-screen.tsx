"use client";

import { useState } from "react";
import { ChevronLeft, Sparkles, Lightbulb, Target } from "lucide-react";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

const topicSuggestions = [
  "My Best Friend",
  "Cricket Basics",
  "Solar System",
  "Healthy Habits",
  "Animals & Birds",
  "School Picnic",
];

const difficultyLevels = [
  {
    id: "easy",
    name: "Easy",
    icon: Lightbulb,
    description: "Short sentences & gentle vocabulary.",
    color: "border-green-200 bg-green-50",
    iconColor: "text-green-500",
  },
  {
    id: "medium",
    name: "Medium",
    icon: Sparkles,
    description: "Everyday situations with detail.",
    color: "border-orange-200 bg-orange-50",
    iconColor: "text-orange-500",
  },
  {
    id: "hard",
    name: "Hard",
    icon: Target,
    description: "Longer thinking and tricky choices.",
    color: "border-purple-200 bg-purple-50",
    iconColor: "text-purple-500",
  },
];

export default function QuizScreen() {
  const [step, setStep] = useState<1 | 2>(1);
  const [selectedTopic, setSelectedTopic] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("medium");

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="p-4 flex items-center gap-3 border-b">
        <Link href="/" className="p-1">
          <ChevronLeft className="h-6 w-6 text-green-600" />
        </Link>
        <span className="text-green-600 font-semibold">Back</span>
      </div>

      <div className="max-w-2xl mx-auto px-6 py-6">
        {step === 1 ? (
          <>
            {/* Step 1: Choose Topic */}
            <div className="mb-8">
              <p className="text-xs font-bold text-green-600 tracking-wide mb-2">
                LEARN TAB
              </p>
              <h1 className="text-3xl font-bold mb-3">Craft a custom quiz</h1>
              <p className="text-muted-foreground leading-relaxed">
                Pick a topic, choose difficulty, and we will build four fun
                questions instantly.
              </p>

              <div className="flex gap-3 mt-4 flex-wrap">
                <Badge
                  variant="outline"
                  className="bg-green-50 border-green-200 text-green-700"
                >
                  <Sparkles className="h-3 w-3 mr-1" />
                  AI Powered
                </Badge>
                <Badge variant="outline" className="bg-muted">
                  4 Questions
                </Badge>
                <Badge variant="outline" className="bg-muted">
                  Instant play
                </Badge>
              </div>
            </div>

            <div className="mb-8">
              <p className="text-sm font-bold text-muted-foreground mb-2">
                STEP 1
              </p>
              <h2 className="text-2xl font-bold mb-4">Choose a topic</h2>

              <Input
                placeholder='e.g. "My school day" or "Planets in space"'
                value={selectedTopic}
                onChange={(e) => setSelectedTopic(e.target.value)}
                className="mb-4 h-12 text-base"
              />

              <div className="flex flex-wrap gap-2">
                {topicSuggestions.map((topic) => (
                  <button
                    key={topic}
                    onClick={() => setSelectedTopic(topic)}
                    className={`px-4 py-2 rounded-full border-2 text-sm font-medium transition ${
                      selectedTopic === topic
                        ? "bg-green-500 text-white border-green-500"
                        : "bg-muted hover:bg-muted/80 border-transparent"
                    }`}
                  >
                    {topic}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <p className="text-sm font-bold text-muted-foreground mb-2">
                STEP 2
              </p>
              <h2 className="text-2xl font-bold">Pick a challenge level</h2>
            </div>

            <button
              onClick={() => setStep(2)}
              disabled={!selectedTopic}
              className="w-full bg-muted text-muted-foreground rounded-full py-4 font-semibold text-base disabled:opacity-50 transition"
            >
              Generate Quiz
            </button>
          </>
        ) : (
          <>
            {/* Step 2: Pick Difficulty */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-6">
                Pick a challenge level
              </h1>

              <div className="space-y-4 mb-8">
                {difficultyLevels.map((level) => {
                  const Icon = level.icon;
                  const isSelected = selectedDifficulty === level.id;
                  return (
                    <button
                      key={level.id}
                      onClick={() => setSelectedDifficulty(level.id)}
                      className={`w-full text-left transition ${
                        isSelected ? "ring-2 ring-green-500 ring-offset-2" : ""
                      }`}
                    >
                      <Card
                        className={`p-4 border-2 ${level.color} hover:shadow-md transition`}
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h3
                              className={`font-bold text-lg mb-1 ${level.iconColor}`}
                            >
                              {level.name}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              {level.description}
                            </p>
                            {isSelected && (
                              <Badge className="mt-2 bg-green-500 hover:bg-green-600 text-white border-0">
                                Selected
                              </Badge>
                            )}
                          </div>
                          <Icon
                            className={`h-6 w-6 ${level.iconColor} shrink-0 ml-4`}
                          />
                        </div>
                      </Card>
                    </button>
                  );
                })}
              </div>

              {/* Benefits Card */}
              <Card className="bg-green-500 text-white border-0 p-6 mb-6">
                <p className="text-xs font-bold tracking-wide mb-2 opacity-90">
                  WHAT YOU WILL GET
                </p>
                <h3 className="text-xl font-bold mb-4">
                  Friendly quiz with instant feedback
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5">•</span>
                    <span className="text-sm">
                      Bite-sized explanations for every answer.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5">•</span>
                    <span className="text-sm">
                      Tone automatically matches the learner profile.
                    </span>
                  </li>
                </ul>
              </Card>

              <button className="w-full bg-muted text-muted-foreground rounded-full py-4 font-semibold text-base hover:bg-muted/80 transition">
                Generate Quiz
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
