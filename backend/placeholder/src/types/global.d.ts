import { ServerError } from "../middleware/errors";

export {};

type ServerResponse = import("http").ServerResponse;
type _IncomingMessage = import("http").IncomingMessage;

declare global {
  declare module apigen {
    type ServerError = ServerError;
    interface Request extends _IncomingMessage {
      body: any;
      params: {};
    }
    interface RoutePath {
      /** Function that should handle the request. */
      handler?: RequestHandler;
      /** Boolean value indicating whether the route url is protected. */
      protected?: boolean;
      /** The nested paths. */
      children?: { [keyof: string]: RoutePath };
    }
    type RoutePathLeaf = {
      protected?: boolean;
      handler: RequestHandler;
    } | RequestHandler;

    type RoutesConfig = {
      [keyof: string]: RoutePathLeaf;
    };

    type RequestHandler = (
      req: Request,
      res: Response,
    ) => unknown;

    type ContentType = "text/html" | "application/json";

    interface Response extends ServerResponse {
      contentType: ContentType;
    }

    interface Middleware {
      errorHandler: ErrorHandler;
      protect: Protector;
    }

    interface ErrorHandler {
      (options: ErrorHandlerOptions): { fatal: boolean; feedback?: any };
    }

    interface ErrorHandlerOptions {
      res: Response;
      error: ServerError;
    }

    interface DataResponseOptions {
      res: Response;
      data: Object;
    }

    interface Protector {
      (req: Request);
    }
  }

  interface User {
    id: string;
    username: string;
    password: string;
    emailAddress: string;
    rapidFireCheckpoint: string | null;
    quizzesPlayed: number;
    successRate: number;
    stars: number;
  }

  interface UserSession {
    username: string;
    token: string;
  }

  type ErrorType = number;
}
