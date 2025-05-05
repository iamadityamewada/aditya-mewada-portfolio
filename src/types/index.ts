// src/types/index.ts

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  github?: string; // Optional main repo link
  githubFrontend?: string; // Optional frontend repo link
  githubBackend?: string; // Optional backend repo link
  liveDemo?: string; // Optional live demo link
  imageUrl?: string; // Optional image URL
  aiHint?: string; // Optional hint for AI image generation/search
}
