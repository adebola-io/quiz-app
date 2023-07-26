import { Level } from "@/types";

const ENDPOINT_ROOT = "http://localhost:4174";

export const ENDPOINTS = {
  USER_CREATE: `${ENDPOINT_ROOT}/user/create`,
  USER_DELETE: `${ENDPOINT_ROOT}/user/delete`,
  LOGIN: `${ENDPOINT_ROOT}/user/login`,
  USER_STATS: `${ENDPOINT_ROOT}/user/stats`,
  USER_STATS_UPDATE: `${ENDPOINT_ROOT}/user/stats/update`,
  CATEGORY_QUESTIONS(id: number, level: number) {
    return `${ENDPOINT_ROOT}/categories/${id}/${level}`;
  },
  RANDOM_QUESTIONS(level: Level) {
    return `${ENDPOINT_ROOT}/random/${level}`;
  },
  RAPID_FIRE_QUESTIONS: `${ENDPOINT_ROOT}/rpdfire/questions`,
  RAPID_FIRE_COMPLETED: `${ENDPOINT_ROOT}/rpdfire/completed`,
};

export const USER_TOKEN = "app-auth";