export interface User{
  firstName: string,
  lastName: string,
  age?: number,
  address: {
    street: string | undefined,
    city: string,
    state?: string
  },
  isActive?: boolean,
  registered?: any,
  hide?: boolean
}
