// export interface User {
//   id?: number;
//   last_login?: string;
//   is_superuser: boolean;
//   username: string;
//   first_name: string;
//   last_name: string;
//   email?: string;
//   is_staff: boolean;
//   is_active: boolean;
//   date_joined: string;
//   phone_number: string;
//   address?: string;
//   city?: string;
//   country?: string;
//   avatar?: string;
//   groups?: string[];
//   user_permissions?: string[];
// }

export interface User {
  _id?: string;
  username: string;
  email: string;
  createdAt?: Date;
  name: string;
}
