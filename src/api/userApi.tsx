export const userAPI = {
  async getUsers() {
    const response = (await fetch(
      "https://jsonplaceholder.typicode.com/users"
    ).then((response) => response.json())) as any;
    return response;
  },
};

export type GetUserType = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
  isEdit?: boolean
};
