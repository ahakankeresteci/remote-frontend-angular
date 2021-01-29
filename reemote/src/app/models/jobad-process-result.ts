import { Jobad } from "./jobad";

export class JobadProcessResult {
    jobads!: Jobad[]; 
    page!: { number: number; size: number; totalElements: number; }
}
