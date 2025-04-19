export interface Student {
  id: string;
  firstName: string;
  lastName: string;
  isPresent?: boolean;
  photoUrl?: string;
}

export interface ClassGroup {
  id: string;
  name: string;
  students: Student[];
}
