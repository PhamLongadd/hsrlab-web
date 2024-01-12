import axios from "axios";

export type Program = {
  id: number;
  attributes: {
    name: string;
    description?: string;
    courses: {
      data: Course[];
    };
  };
};

export type Course = {
  attributes: {
    id: number;
    name: string;
    slug: string;
    description: string;
    thumbnail: Thumbnail;
    course_specials: {
      data: [
        {
          attributes: {
            name: string;
            description: string;
          };
        }
      ];
    };
    course_targets: {
      data: [
        {
          attributes: {
            name: string;
            description: string;
          };
        }
      ];
    };
    course_contents: {
      data: [
        {
          attributes: {
            name: string;
            description: string;
          };
        }
      ];
    };
  };
};

export type BlogData = {
  data: Blog[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
};

export type Blog = {
  id: number;
  attributes: {
    author: string;
    publishedAt: string;
    slug: string;
    updatedAt: string;
    thumnail: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
    content: string;
    title: string;
    blog_category: {
      data: {
        id: number;
        attributes: {
          name: string;
        };
      };
    };
  };
};

type Thumbnail = {
  data: {
    attributes: {
      url: string;
    };
  };
};

const API_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT;

export const fetchPrograms = async () => {
  const response = await fetch(
    `${API_ENDPOINT}/api/programs/?populate=courses.thumbnail`
  );
  const data = await response.json();
  return data.data;
};

export const fetchCourseBySlug = async (slug: string) => {
  const response = await fetch(
    `${API_ENDPOINT}/api/courses?filters[slug][$eq]=${slug}&populate=*`
  );
  const data = await response.json();
  return data.data;
};

export const getCourses = async () => {
  const response = await axios.get(`${API_ENDPOINT}/api/courses`);

  return response.data;
};
export interface FormAdviseBody {
  full_name: string;
  phone_number: string;
  email: string;
  type: string;
  message: string;
}

export const formInputAdvise = async (body: FormAdviseBody) => {
  try {
    const response = await axios.post(`${API_ENDPOINT}/api/forms`, {
      data: body,
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export interface FormCourseBody {
  full_name: string;
  email: string;
  phone_number: string;
  birth_year: number;
  address: string;
  course: string;
  message: string;
  suitable_time: string;
  group_friends: string;
}

export const formInputCourse = async (body: FormCourseBody) => {
  try {
    const response = await axios.post(`${API_ENDPOINT}/api/course-forms`, {
      data: body,
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export interface FormEnterpriseBody {
  name: string;
  email: string;
  phone_number: string;
  enterprise_name: string;
  address: string;
  course: string;
  target: string;
  time_suitable: string;
}

export const formInputEnterprise = async (body: FormEnterpriseBody) => {
  try {
    const response = await axios.post(`${API_ENDPOINT}/api/enterprise-forms`, {
      data: body,
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchBlogs = async (page: number) => {
  try {
    const response =
      await axios.get(`${API_ENDPOINT}/api/blogs?pagination[page]=${page}&pagination[pageSize]=12&sort[0]=updatedAt&populate=thumbail
    `);

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchBlogBySlug = async (slug: string) => {
  try {
    const response = await axios.get(
      `${API_ENDPOINT}/api/blogs?filters[slug][$eq]=${slug}&populate=*`
    );

    return response.data.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchBlogByCategories = async (id: string, page: number) => {
  try {
    const response = await axios.get(
      `${API_ENDPOINT}/api/blogs?filters[blog_category][id][$eq]=${id}&pagination[page]=${page}&pagination[pageSize]=12&sort[0]=updatedAt&populate=*`
    );

    return response.data;
  } catch (error) {
    console.log(error);
  }
};
