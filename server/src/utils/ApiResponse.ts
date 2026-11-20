export class ApiResponse<T = unknown> {
  public success = true;

  constructor(
    public statusCode: number,
    public data: T,
    public message: string = "Success",
  ) {}
}