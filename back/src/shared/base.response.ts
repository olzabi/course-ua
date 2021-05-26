
export class BaseResponse {
  statusCode: number;
  result?: any;
  message?: string | string[];
  error?: string;
}

export function EmptyResponseFactory():BaseResponse {
  return {
    statusCode: 200,
    result: []
  }
}
