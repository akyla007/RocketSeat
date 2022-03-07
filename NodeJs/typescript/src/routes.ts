import { Request, Response } from "express";
import CreateCourseService from "./CreateCourseService";

export function createCouse(request: Request, response: Response) {
  CreateCourseService.execute({
      name:"Typescript",
      duration:20,
      educator: "Akyla"
  });
  CreateCourseService.execute({
    name:"NodeJS",
    educator: "Aquino"
});

  return response.send();
}
