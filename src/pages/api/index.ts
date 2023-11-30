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
