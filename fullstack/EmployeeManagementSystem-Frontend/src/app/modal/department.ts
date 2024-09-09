import { Designation } from "./designation"


export interface Department {
    d_id: number
    departmentName: string
    designations: Array<Designation>
}