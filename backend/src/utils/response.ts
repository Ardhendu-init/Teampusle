export const success = (data: any) => ({
  success: true,
  data,
  error: null,
});

export const failure = (code: string, message: string) => ({
  success: false,
  data: null,
  error: { code, message },
});
