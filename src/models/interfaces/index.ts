export interface IPerson {
    id: string;
    firstName: string;
    age: number;
    email: string;
    experienceYears: number;
}

export interface IDropDownProps {
    containerChildren: React.ReactNode;
    contentChildren: React.ReactNode;
} 
 
export interface IHeaderSettings {
    title: string;
    isReturnActive: boolean;
    path?: string;
}