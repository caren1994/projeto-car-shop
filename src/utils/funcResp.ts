const resCorrect = (s: number, m: unknown) => ({ status: s, message: m });
const respError = (s: number, m: unknown) => ({ status: s, message: { message: m } });

export { resCorrect, respError };