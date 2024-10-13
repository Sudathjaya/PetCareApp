import env from '../envConfig'

// export const config = {
//   api: {
//     base_url:env.BASE_URL,
//     next_public_static_url_prefix: env.NEXT_PUBLIC_STATIC_URL_PREFIX,
//     next_public_website_url:env.NEXT_PUBLIC_WEBSITE_URL,
//     get_nitifications: env.GET_NOTIFICATIONS,
//     new_post_upload: env.NEW_POST_UPLOAD,
//     post_image_upload: env.POST_IMAGE_UPLOAD,
//     get_posts: env.GET_POSTS,
//     login: env.LOGIN,
//     get_magors: env.GET_MAGORS,
//     get_universites: env.GET_UNIVERSITIES,
//     user_register: env.USER_REGISTER,
//     verify_otp: env.VERIFY_OTP,
//     set_password: env.SET_PASSWORD,
//     resend_email:env.RESEND_EMAIL,
//     comments: env.COMMENTS,
//     get_university: env.GET_UNIVERSITY,
//     calender: env.CALENDERS,
//     get_classes:env.GET_CLASSES,
//     calenders_event: env.CALENDERS_EVENT,
//     get_school: env.GET_SCHOOL,
//     get_departments: env.GET_DEPARTMENTS,
//     get_lectures:env.GET_LECTURES,
//     get_favorities: env.GET_FAVORITES,
//     get_my_posts: env.GET_MY_POSTS,
//     get_campusposts: env.GET_CAMPUS_POSTS,
//     forgot_pw: env.FORGOT_PW,
//     verify_otp_forgot_pw: env.VERIFY_OTP_FORGOT_PW,
//     get_friends: env.GET_FRIENDS,
//     send_friend_request: env.SEND_FRIEND_REQUEST,
//     accept_or_reject_request: env.ACCEPT_OR_REJECT_REQUEST,
//     get_friends_requests: env.GET_FRIENDS_REQUESTS,
//     get_my_friends_list: env.GET_FRIENDS_LIST,

//     // trending_posts: env.TRENDING_POSTS,
//   },
// };

export const Method = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
  PATCH: 'PATCH',
};



// export const ApiEndpoint = {
//   BASE_URL:config.api.base_url,
//   NEXT_PUBLIC_STATIC_URL_PREFIX: config.api.next_public_static_url_prefix,
//   NEXT_PUBLIC_WEBSITE_URL:config.api.next_public_website_url,
//   POST_IMAGE_UPLOAD:config.api.post_image_upload,
//   GET_NOTIFICATIONS: config.api.get_nitifications,
//   NEW_POST_UPLOAD: config.api.new_post_upload,
//   GET_POSTS: config.api.get_posts,
//   USER_AUTHENTICATION: config.api.login,
//   GET_MAGORS: config.api.get_magors,
//   GET_UNIVERSITIES: config.api.get_universites,
//   USER_REGISTER: config.api.user_register,
//   VERIFY_OTP: config.api.verify_otp,
//   SET_PASSWORD: config.api.set_password,
//   RESEND_EMAIL:config.api.resend_email,
//   COMMENTS:config.api.comments,
//   GET_UNIVERSITY: config.api.get_university,
//   CALENDER: config.api.calender,
//   GET_CLASSES:config.api.get_classes,
//   CALENDERS_EVENT: config.api.calenders_event,
//   GET_SCHOOL: config.api.get_school,
//   GET_DEPARTMENTS: config.api.get_departments,
//   GET_LECTURES: config.api.get_lectures,
//   GET_FAVORITES: config.api.get_favorities,
//   GET_MY_POSTS: config.api.get_my_posts,
//   GET_CAMPUS_POSTS: config.api.get_campusposts,
//   FORGOT_PW: config.api.forgot_pw,
//   VERIFY_OTP_FORGOT_PW: config.api.verify_otp_forgot_pw,
//   GET_FRIENDS: config.api.get_friends,
//   SEND_FRIEND_REQUEST:config.api.send_friend_request,
//   ACCEPT_OR_REJECT_REQUEST: config.api.accept_or_reject_request,
//   GET_FRIENDS_REQUESTS: config.api.get_friends_requests,
//   GET_FRIENDS_LIST: config.api.get_my_friends_list,
//   // TREDNDING_POSTS: config.api.trending_posts,


// };
export const ReceiptEndpointTypes = {
  PDF: 'pdf',
  Image: 'image',
};
export const StatusCode = {
  success: 200,
  badRequest: 400,
  unauthorized: 401,
  forbidden: 403,
  notImplemented: 501,
};

export const StatusMessage = {
  success: 'OK',
  badRequest: 'Bad Request',
  unauthorized: 'Unauthorized',
  forbidden: 'Forbidden',
  notImplemented: 'Not implemented',
};

export default {
  Method,
  // ApiEndpoint,
  StatusCode,
  StatusMessage,
  ReceiptEndpointTypes,
};
