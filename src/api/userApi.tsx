const URL = "https://jsonplaceholder.typicode.com/";
export const userAPI = {
  async getUsersDB() {
    const response = await fetch(`${URL}users`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data: GetUserType[] = await response.json();
    return data;
  },
  async deleteUsersDB(id: number) {
    const response = await fetch(`${URL}posts/${1}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data: {} = await response.json();
    return data;
  },

  async updateUsersDB(userData: GetUserType) {
    const response = await fetch(`${URL}posts/${1}`, {
      method: "PUT",
      body: JSON.stringify({
        id: 1,
        title: "foo",
        body: "bar",
        userId: 1,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const data: {} = await response.json();
    return data;
  },
  async createUserDB(userData: GetUserType) {
    const response = await fetch(`${URL}posts`, {
      method: "POST",
      body: JSON.stringify({
        title: "foo",
        body: "bar",
        userId: 1,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const data: {} = await response.json();
    return data;
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
  isEdit?: boolean;
};
