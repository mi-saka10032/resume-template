/// <reference types="astro/client" />

type Info = { label: string; value: string };

type Contact = Info & { link: boolean };

type Skill = { label: string; progress: number };

type Work = {
  title: string;
  startTime: string;
  endTime: string;
  desc?: Array<string | string[]>;
};

type Education = Work & {
  education: string;
};

type Project = Work & {
  demoLink?: string;
  demoName?: string;
  skill: string;
  background: string;
  result: string;
};

type RightAside = {
  link: string;
  label: string;
};
