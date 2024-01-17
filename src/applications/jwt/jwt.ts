export interface Jwt {
  generate(payload: any): string 
}