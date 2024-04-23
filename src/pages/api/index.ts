import axios from "axios";
import { log } from "console";
import { createHash } from "crypto";
import hmacSha256 from "crypto-js/hmac-sha256";
import { stat } from "fs";
import { request } from "http";

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
    thumbail: {
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

export type HardwareTool = {
  id: number;
  attributes: {
    title: string;
    description: string;
    price: number;
    information: string;
    images: {
      data: [
        {
          attributes: {
            url: string;
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
const API_URL_PAYOS = process.env.NEXT_PUBLIC_API_URL_PAYOS;
const CLIENT_ID_PAYOS = process.env.NEXT_PUBLIC_CLIENT_ID_PAYOS;
const API_KEY_PAYOS = process.env.NEXT_PUBLIC_API_KEY_PAYOS;
const CHECKSUM_KEY = process.env.NEXT_PUBLIC_CHECKSUM_KEY;

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

export const fetchHardwareTools = async () => {
  try {
    const response = await axios.get(
      `${API_ENDPOINT}/api/hardware-tools?populate=*`
    );

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getHardwareToolById = async (id: number) => {
  try {
    const response = await axios.get(
      `${API_ENDPOINT}/api/hardware-tools/${id}?populate=*`
    );

    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getHardwareToolbyIds = async (ids: number[]) => {
  let idsToFilterString = "";
  ids.forEach((id, idx) => {
    idsToFilterString += `&filters[id][$in][${idx}]=${id}`;
  });

  try {
    const response = await axios.get(
      `${API_ENDPOINT}/api/hardware-tools?populate=*${idsToFilterString}`
    );

    return response.data;
  } catch (err) {
    return null;
  }
};

export enum Status {
  PENDING = "PENDING",
  PAID = "PAID",
  FAIL = "FAIL",
}
export interface FormOrderBody {
  full_name: string;
  email: string;
  phone_number: string;
  city: string;
  district: number;
  address: string;
  note: string;
  amount: number;
  status: Status;
}

export const formOrder = async (body: FormOrderBody) => {
  try {
    const response = await axios.post(`${API_ENDPOINT}/api/orders`, {
      data: body,
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export interface OrderHardwareToolBody {
  order: number;
  hardware_tool: number;
  quantity: number;
}

export const createOrderHardwareTool = async (body: OrderHardwareToolBody) => {
  try {
    const response = await axios.post(
      `${API_ENDPOINT}/api/order-hardware-tools`,
      {
        data: body,
      }
    );

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export interface CreateLinkPayOSBody {
  orderCode: number;
  amount: number;
  description: string;
  cancelUrl: string;
  returnUrl: string;
}

export const createLinkPayOS = async (body: CreateLinkPayOSBody) => {
  const signatureMessage = generateMessagePayOS(body);
  try {
    const requestData = {
      ...body,
      signature: generateSignature(signatureMessage, `${CHECKSUM_KEY}`),
    };

    const response = await axios.post(
      `${API_URL_PAYOS}/v2/payment-requests`,
      requestData,
      {
        headers: {
          "x-client-id": `${CLIENT_ID_PAYOS}`,
          "x-api-key": `${API_KEY_PAYOS}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const generateSignature = (message: string, secretKey: string): string => {
  return hmacSha256(message, secretKey).toString();
};

const generateMessagePayOS = (body: CreateLinkPayOSBody): string => {
  return `amount=${body.amount}&cancelUrl=${body.cancelUrl}&description=${body.description}&orderCode=${body.orderCode}&returnUrl=${body.returnUrl}`;
};

export const getPaymentUrlInfo = async (id: number) => {
  try {
    const response = await axios.get(
      `${API_URL_PAYOS}/v2/payment-requests/${id + 1000}`,
      {
        headers: {
          "x-client-id": `${CLIENT_ID_PAYOS}`,
          "x-api-key": `${API_KEY_PAYOS}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const updateOrder = async (orderId: number, status: Status) => {
  try {
    const response = await axios.put(`${API_ENDPOINT}/api/orders/${orderId}`, {
      data: {
        status: status,
      },
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getOrderHardwareToolsByOrderId = async (orderId: number) => {
  try {
    const response = await axios.get(
      `${API_ENDPOINT}/api/order-hardware-tools?filters[order][id][$eq]=${orderId}&populate[hardware_tool][populate][0]=images`
    );

    return response.data;
  } catch (error) {
    console.log(error);
  }
};
